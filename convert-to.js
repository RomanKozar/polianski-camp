#!/usr/bin/env node
// Як запускати
// Базово (AVIF): npm run convert-images -- --dir ./public/images

// Рекурсивно по підпапках: npm run convert-images -- --dir ./public/images --recursive

// У WebP: npm run convert-images -- --dir ./public/images --format webp --quality 80 --recursive

// Видаляти оригінали після успішної конвертації: npm run convert-images -- --dir ./public/images --delete-original --recursive

// Тест без запису файлів: npm run convert-images -- --dir ./public/images --dry-run


const fs = require("fs/promises");
const path = require("path");
const sharp = require("sharp");
const heicConvert = require("heic-convert");

const SUPPORTED_INPUT = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".heic",
  ".heif",
  ".avif",
  ".webp",
]);
const SUPPORTED_OUTPUT = new Set(["avif", "webp"]);

function printHelp() {
  console.log(`
Usage:
  node convert-to.js --dir <folder> [options]

Options:
  --dir <path>            Folder with images (required)
  --format <avif|webp>    Output format (default: avif)
  --quality <1-100>       Output quality (default: 60 for avif, 75 for webp)
  --max-width <px>        Resize if image is wider than this value
  --max-height <px>       Resize if image is taller than this value
  --keep-format           Keep AVIF/WEBP source format on resize
  --recursive             Scan subfolders recursively
  --delete-original       Delete source files after successful conversion
  --dry-run               Show what would be converted, do not write files
  --help                  Show this help

Examples:
  npm run convert-images -- --dir ./public/images
  npm run convert-images -- --dir ./photos --format avif --recursive
  npm run convert-images -- --dir ./public/images --format webp --quality 80 --recursive
  npm run convert-images -- --dir ./public/images --format webp --quality 85 --max-width 1920 --recursive
  npm run convert-images -- --dir ./public/images/winter --keep-format --quality 85 --max-width 1920 --recursive
  node convert-to.js --dir "./my photos" --delete-original --recursive
`);
}

function parseArgs(argv) {
  const opts = {
    dir: "",
    format: "avif",
    quality: undefined,
    maxWidth: undefined,
    maxHeight: undefined,
    keepFormat: false,
    recursive: false,
    deleteOriginal: false,
    dryRun: false,
    help: false,
  };

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];

    if (arg === "--help" || arg === "-h") {
      opts.help = true;
      continue;
    }
    if (arg === "--recursive") {
      opts.recursive = true;
      continue;
    }
    if (arg === "--delete-original") {
      opts.deleteOriginal = true;
      continue;
    }
    if (arg === "--dry-run") {
      opts.dryRun = true;
      continue;
    }
    if (arg === "--keep-format") {
      opts.keepFormat = true;
      continue;
    }
    if (arg === "--dir") {
      opts.dir = argv[++i] || "";
      continue;
    }
    if (arg === "--format") {
      opts.format = (argv[++i] || "").toLowerCase();
      continue;
    }
    if (arg === "--quality") {
      const value = Number(argv[++i]);
      opts.quality = Number.isFinite(value) ? value : NaN;
      continue;
    }
    if (arg === "--max-width") {
      const value = Number(argv[++i]);
      opts.maxWidth = Number.isFinite(value) ? value : NaN;
      continue;
    }
    if (arg === "--max-height") {
      const value = Number(argv[++i]);
      opts.maxHeight = Number.isFinite(value) ? value : NaN;
      continue;
    }

    throw new Error(`Unknown argument: ${arg}`);
  }

  if (!opts.help && !opts.dir) {
    throw new Error("Missing required argument: --dir <folder>");
  }

  if (!SUPPORTED_OUTPUT.has(opts.format)) {
    throw new Error("Format must be either avif or webp");
  }

  if (opts.quality === undefined) {
    opts.quality = opts.format === "avif" ? 60 : 75;
  }

  if (!Number.isInteger(opts.quality) || opts.quality < 1 || opts.quality > 100) {
    throw new Error("Quality must be an integer between 1 and 100");
  }

  if (
    opts.maxWidth !== undefined &&
    (!Number.isInteger(opts.maxWidth) || opts.maxWidth <= 0)
  ) {
    throw new Error("max-width must be a positive integer");
  }

  if (
    opts.maxHeight !== undefined &&
    (!Number.isInteger(opts.maxHeight) || opts.maxHeight <= 0)
  ) {
    throw new Error("max-height must be a positive integer");
  }

  return opts;
}

async function collectImages(dir, recursive) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (recursive) {
        files.push(...(await collectImages(fullPath, recursive)));
      }
      continue;
    }

    const ext = path.extname(entry.name).toLowerCase();
    if (SUPPORTED_INPUT.has(ext)) {
      files.push(fullPath);
    }
  }

  return files;
}

async function convertOne(inputPath, format, quality, resizeOptions, keepFormat, dryRun) {
  const parsed = path.parse(inputPath);
  const ext = parsed.ext.toLowerCase();
  const outputFormat =
    keepFormat && (ext === ".avif" || ext === ".webp") ? ext.slice(1) : format;
  const outputPath = path.join(parsed.dir, `${parsed.name}.${outputFormat}`);
  const writePath =
    path.resolve(outputPath) === path.resolve(inputPath)
      ? path.join(parsed.dir, `${parsed.name}.__tmp_resize__.${outputFormat}`)
      : outputPath;

  if (dryRun) {
    return { inputPath, outputPath, skipped: false, dryRun: true };
  }

  // HEIC/HEIF fallback: decode via heic-convert, then encode with Sharp.
  // This works even when Sharp/libvips lacks HEIF codec support on host OS.
  if (ext === ".heic" || ext === ".heif") {
    const heicBuffer = await fs.readFile(inputPath);
    const jpegBuffer = await heicConvert({
      buffer: heicBuffer,
      format: "JPEG",
      quality: 0.95,
    });
    const instance = sharp(Buffer.from(jpegBuffer)).rotate();
    if (resizeOptions) {
      instance.resize(resizeOptions);
    }
    instance.withMetadata();
    if (outputFormat === "avif") {
      await instance.avif({ quality }).toFile(writePath);
    } else {
      await instance.webp({ quality }).toFile(writePath);
    }
    if (writePath !== outputPath) {
      await fs.rename(writePath, outputPath);
    }
    return { inputPath, outputPath, skipped: false, dryRun: false };
  }

  const instance = sharp(inputPath).rotate();
  if (resizeOptions) {
    instance.resize(resizeOptions);
  }
  instance.withMetadata();
  if (outputFormat === "avif") {
    await instance.avif({ quality }).toFile(writePath);
  } else {
    await instance.webp({ quality }).toFile(writePath);
  }
  if (writePath !== outputPath) {
    await fs.rename(writePath, outputPath);
  }

  return { inputPath, outputPath, skipped: false, dryRun: false };
}

async function main() {
  try {
    const options = parseArgs(process.argv.slice(2));
    if (options.help) {
      printHelp();
      return;
    }

    const targetDir = path.resolve(process.cwd(), options.dir);
    const stat = await fs.stat(targetDir).catch(() => null);
    if (!stat || !stat.isDirectory()) {
      throw new Error(`Directory not found: ${targetDir}`);
    }

    const files = await collectImages(targetDir, options.recursive);
    if (files.length === 0) {
      console.log("No PNG/JPG/JPEG/HEIC/HEIF files found.");
      return;
    }

    console.log(`Found ${files.length} file(s) in: ${targetDir}`);
    console.log(
      `Converting to ${options.format.toUpperCase()} (quality ${options.quality})${
        options.dryRun ? " [dry-run]" : ""
      }...`
    );
    if (options.keepFormat) {
      console.log("Format strategy: keep AVIF/WEBP source format, convert others to selected --format.");
    }
    if (options.maxWidth || options.maxHeight) {
      console.log(
        `Resize limit: ${options.maxWidth || "-"}x${options.maxHeight || "-"} (fit: inside, no upscale)`
      );
    }

    let ok = 0;
    let failed = 0;
    const resizeOptions =
      options.maxWidth || options.maxHeight
        ? {
            width: options.maxWidth,
            height: options.maxHeight,
            fit: "inside",
            withoutEnlargement: true,
          }
        : null;

    for (const filePath of files) {
      try {
        const result = await convertOne(
          filePath,
          options.format,
          options.quality,
          resizeOptions,
          options.keepFormat,
          options.dryRun
        );
        console.log(`OK: ${path.relative(process.cwd(), result.inputPath)} -> ${path.relative(process.cwd(), result.outputPath)}`);
        ok++;

        if (options.deleteOriginal && !options.dryRun) {
          await fs.unlink(filePath);
          console.log(`Deleted original: ${path.relative(process.cwd(), filePath)}`);
        }
      } catch (error) {
        failed++;
        const ext = path.extname(filePath).toLowerCase();
        const hint =
          (ext === ".heic" || ext === ".heif") &&
          /heif|heic|unsupported|decode|decoder/i.test(error.message)
            ? " | Hint: HEIC decode is not available in your Sharp build/OS codec."
            : "";
        console.error(
          `FAIL: ${path.relative(process.cwd(), filePath)} (${error.message})${hint}`
        );
      }
    }

    console.log(`Done. Success: ${ok}, Failed: ${failed}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    console.log("Use --help to see available options.");
    process.exitCode = 1;
  }
}

main();
