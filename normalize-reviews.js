#!/usr/bin/env node

const fs = require('fs/promises')
const path = require('path')
const sharp = require('sharp')

// Цільові розміри (як у твоєму прикладі)
const TARGET_WIDTH = 520
const TARGET_HEIGHT = 586
const TARGET_RATIO = TARGET_WIDTH / TARGET_HEIGHT

// Налаштування
const INPUT_DIR = path.resolve(process.cwd(), './public/images/reviews')
const OUTPUT_DIR = path.resolve(INPUT_DIR, './optimized')
const QUALITY = 65
const ENABLE_CROP = process.argv.includes('--crop')
const SUPPORTED_EXT = new Set([
	'.png',
	'.jpg',
	'.jpeg',
	'.webp',
	'.avif',
	'.heic',
	'.heif',
])

async function ensureDir(dirPath) {
	await fs.mkdir(dirPath, { recursive: true })
}

function getCenterCrop(width, height, targetRatio) {
	const imgRatio = width / height

	if (imgRatio > targetRatio) {
		// Занадто широке: ріжемо боки
		const cropWidth = Math.round(targetRatio * height)
		const left = Math.floor((width - cropWidth) / 2)
		return { left, top: 0, width: cropWidth, height }
	}

	// Занадто високе: ріжемо верх/низ
	const cropHeight = Math.round(width / targetRatio)
	const top = Math.floor((height - cropHeight) / 2)
	return { left: 0, top, width, height: cropHeight }
}

async function processOne(fileName) {
	const inputPath = path.join(INPUT_DIR, fileName)
	const parsed = path.parse(fileName)
	const outputPath = path.join(OUTPUT_DIR, `${parsed.name}.avif`)

	const meta = await sharp(inputPath).metadata()
	if (!meta.width || !meta.height) {
		throw new Error(`Cannot read dimensions for ${fileName}`)
	}

	const pipeline = sharp(inputPath).rotate()

	if (ENABLE_CROP) {
		const crop = getCenterCrop(meta.width, meta.height, TARGET_RATIO)
		pipeline
			.extract(crop)
			.resize(TARGET_WIDTH, TARGET_HEIGHT, { fit: 'fill' })
	} else {
		// Без обрізки: зберігаємо весь кадр і додаємо поля до цільового розміру.
		pipeline.resize(TARGET_WIDTH, TARGET_HEIGHT, {
			fit: 'contain',
			background: { r: 255, g: 255, b: 255, alpha: 1 },
		})
	}

	await pipeline.avif({ quality: QUALITY, effort: 5 }).toFile(outputPath)

	console.log(`Готово: ${fileName} -> ${path.basename(outputPath)}`)
}

async function main() {
	const stat = await fs.stat(INPUT_DIR).catch(() => null)
	if (!stat || !stat.isDirectory()) {
		throw new Error(`Папку не знайдено: ${INPUT_DIR}`)
	}

	await ensureDir(OUTPUT_DIR)
	const entries = await fs.readdir(INPUT_DIR, { withFileTypes: true })

	const files = entries
		.filter(entry => entry.isFile())
		.map(entry => entry.name)
		.filter(name => SUPPORTED_EXT.has(path.extname(name).toLowerCase()))

	if (files.length === 0) {
		console.log('Файлів для обробки не знайдено.')
		return
	}

	for (const fileName of files) {
		try {
			await processOne(fileName)
		} catch (error) {
			console.error(`Помилка (${fileName}): ${error.message}`)
		}
	}

	console.log(
		`Done. Оброблено: ${files.length} файлів. Mode: ${
			ENABLE_CROP ? 'crop' : 'contain (без обрізки)'
		}.`,
	)
}

main().catch(error => {
	console.error(`Error: ${error.message}`)
	process.exitCode = 1
})
