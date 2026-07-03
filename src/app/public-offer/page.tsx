import type { Metadata } from 'next'
import PublicOfferContent from '../../components/PublicOfferContent'

export const metadata: Metadata = {
	title: 'Договір публічної офери',
}

export default function PublicOfferPage() {
	return (
		<div className='rounded-[20px] bg-white p-6 shadow-card-soft md:p-10'>
			<PublicOfferContent />
		</div>
	)
}
