import Apple from '/images/apple.svg'
import Github from '/images/github.svg'
import Instagram from '/images/instagram.svg'
import Telegram from '/images/telegram.svg'
import Whatsapp from '/images/whatsapp.svg'

const Footer = () => {
	const fy = new Date().getFullYear()
	return (
		<footer className='bg-gradient-to-r from-[#155799] to-[#159957]'>
			<div className='max-w-[1366px] mx-auto flex justify-between items-center text-white py-10 mt-20'>
				<div className='flex items-center gap-3'>
					&copy; {fy} all rights protected
				</div>
				<div className='flex gap-5 social-hover'>
					<a href='#'>
						<img src={Telegram} alt='Telegram' style={{ width: '35px' }} />
					</a>
					<a href='#'>
						<img src={Whatsapp} alt='Whatsapp' style={{ width: '35px' }} />
					</a>
					<a href='#'>
						<img src={Apple} alt='Apple' style={{ width: '35px' }} />
					</a>
					<a href='#'>
						<img src={Github} alt='Github' style={{ width: '35px' }} />
					</a>
					<a href='#'>
						<img src={Instagram} alt='Instagram' style={{ width: '35px' }} />
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
