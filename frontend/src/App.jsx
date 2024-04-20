import './App.css'
import Accordion from './UI/Accordion'
import Form from './UI/Form'
import About from './components/About'
import Advantages from './components/Advantages'
import Countdown from './components/Countdown'
import Footer from './components/Footer'
import Greeting from './components/Greeting'
import Header from './components/Header'
import Modal from './components/Modal'
import Portfolio from './components/Portfolio'
import Statistics from './components/Statistics'
import Tabs from './components/Tabs'

const App = () => {
	// const [count, setCount] = useState(0)

	// const handleCounter = () => {
	// 	setCount(prev => prev + 1)
	// }

	return (
		<div className='app relative overflow-hidden'>
			<div className='cosmos'>
				<Header />
				<section className='billboard'>
					<Greeting />
				</section>
			</div>
			<section className='portfolio'>
				<Portfolio />
			</section>
			<section className='advantages'>
				<Advantages />
			</section>
			<section className='tabs'>
				<Tabs />
			</section>
			<section className='about'>
				<About />
			</section>
			<section className='faq'>
				<Accordion />
			</section>
			<section className='statistics'>
				<Statistics />
			</section>
			<section className='countdown'>
				<Countdown />
			</section>
			<section className='form'>
				<Form />
			</section>
			<Footer />
			<Modal />
		</div>
	)
}

export default App
