import 'react-toastify/dist/ReactToastify.css'
import Footer from '../components/Footer'
import Navbar from '../components/shop/Navbar'
import ProductSection from '../components/shop/ProductSection'
import Slider from '../components/shop/Slider'

const Shop = () => {
	return (
		<>
			<Navbar />
			<Slider />
			<ProductSection />
			<Footer />
		</>
	)
}

export default Shop
