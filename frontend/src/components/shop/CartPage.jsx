import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { addToCart, removeFromCart } from '../../store/cart.slice'
import Footer from '../Footer'
import Navbar from './Navbar'

const CartPage = () => {
	const cart = useSelector(state => state.cart.cart)
	const totalPrice = useSelector(state => state.cart.totalPrice)
	const dispatch = useDispatch()
	return (
		<div>
			<ToastContainer />
			<Navbar />
			<div className='max-w-[1366px] mx-auto'>
				<h1 className='text-white'>Cart</h1>
				{cart.length !== 0 ? (
					<div>
						{cart.map(item => (
							<div key={item.id} className='flex gap-10 mb-10 justify-between'>
								<div className='flex gap-10'>
									<img
										src={item.img}
										alt={item.name}
										style={{ width: '150px' }}
									/>
									<div>
										<div className='text-white text-4xl font-bold'>
											{item.name}
										</div>
										<div className='text-white text-xl font-bold w-[500px] my-5'>
											{item.desc}
										</div>
										<div
											className='underline cursor-pointer text-white'
											onClick={() => dispatch(removeFromCart(item))}
										>
											Remove
										</div>
									</div>
								</div>
								<div className='flex items-center text-white gap-10'>
									<div onClick={() => dispatch(removeFromCart(item))}>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='32'
											height='32'
											fill='white'
											className='bi bi-dash'
											viewBox='0 0 16 16'
										>
											<path d='M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8' />
										</svg>
									</div>
									<div className='text-lg'>{item.amount}</div>
									<div onClick={() => dispatch(addToCart(item))}>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='32'
											height='32'
											fill='white'
											className='bi bi-plus'
											viewBox='0 0 16 16'
										>
											<path d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4' />
										</svg>
									</div>
								</div>
								<div>
									<div className='text-white text-2xl'>
										Price: ${item.price}
									</div>
									<div className='text-white text-2xl'>Size: {item.size}</div>
									<div className='text-white text-2xl'>Color: {item.color}</div>
								</div>
							</div>
						))}
					</div>
				) : (
					<div className='text-white'>Cart is empty</div>
				)}
				<div className='text-red-500'>TOTAL: ${totalPrice}</div>
			</div>
			<Footer />
		</div>
	)
}

export default CartPage
