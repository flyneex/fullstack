import Footer from '../components/Footer'
import Header from '../components/Header'

const NotFound404 = () => {
	return (
		<>
			<Header />
			<div className='flex gap-5 justify-center items-center text-4xl text-white font-black py-10'>
				<img src='/images/F57A4686.jpg' alt='' style={{ width: '150px' }} />
				AnotherPage404!!!!!
			</div>
			<Footer />
		</>
	)
}

export default NotFound404
