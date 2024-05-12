import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { logoutUser } from '../../store/auth.slice'
import Cart from './Cart'
import Lightning from '/images/lightning.png'

const Navbar = () => {
	const [cart, setCart] = useState(false)
	const countItems = useSelector(state => state.cart.totalAmount)
	const auth = useSelector(state => state.auth)
	const userAuth = useSelector(state => state.auth.user)
	const dispatch = useDispatch()

	const logoutHandler = () => {
		dispatch(logoutUser(null))
		toast.info('You have been logged out')
	}

	return (
		<>
			<ToastContainer />
			<div className='bg-gradient-to-r from-[#155799] to-[#159957]'>
				<div className='max-w-[1366px] flex justify-between items-center py-10 mx-auto mb-20'>
					<div>
						<Link to='/' className='flex justify-between items-center gap-5'>
							<img src={Lightning} alt='LogoShop' style={{ width: '45px' }} />
							<div className='text-white font-bold text-3xl'>ReactShop</div>
						</Link>
					</div>
					<div className='flex gap-10'>
						<Link className='text-white text-xl font-bold' to='/'>
							Home
						</Link>
						<Link className='text-white text-xl font-bold' to='/shop'>
							Shop
						</Link>
					</div>
					<div className='flex justify-between items-center gap-5'>
						<div className='flex gap-2'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='#fff'
								className='w-6 h-6'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
								/>
							</svg>
						</div>
						<div className='flex gap-2 relative' onClick={() => setCart(!cart)}>
							<span className='absolute bottom-4 left-1 rounded-full text-center text-black font-bold bg-white p-1 w-[20px] h-[20px] flex items-center justify-center'>
								{countItems && <>{countItems}</>}
							</span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='#fff'
								className='w-6 h-6'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
								/>
							</svg>
							<p className='text-white font-medium'>Cart</p>
						</div>
						{cart && <Cart />}
						<div>
							{auth._id ? (
								<div className='flex gap-5'>
									{auth.isAdmin ? (
										<Link to='/admin' className='text-white'>
											Admin
										</Link>
									) : null}
									<Link className='text-white' onClick={logoutHandler}>
										Logout
									</Link>
								</div>
							) : (
								<div className='flex gap-5'>
									<Link className='text-white' to='/register'>
										Register
									</Link>
									<Link className='text-white' to='/login'>
										Login
									</Link>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Navbar
