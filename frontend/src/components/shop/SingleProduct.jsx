import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Button from '../../UI/Button'
import { addToCart } from '../../store/cart.slice'
import { setHeaders } from '../../store/product.slice'
import Footer from '../Footer'
import Navbar from './Navbar'

const SingleProduct = () => {
	// const { items: getProduct } = useSelector(state => state.product)
	// const [size, setSize] = useState(getProduct[0].size[0])
	// const [color, setColor] = useState(getProduct[0].color[0])
	// const selectedColor = clr => {
	// 	setColor(clr === color ? null : clr)
	// }
	const [product, setProduct] = useState('')
	const [loading, setLoading] = useState(false)

	const params = useParams()
	const dispatch = useDispatch()

	// console.log(size)
	// console.log(color)
	// console.log('getProduct', getProduct)

	// const totalAmount = useSelector(state => state.cart.totalAmount)
	// const totalPrice = useSelector(state => state.cart.totalPrice)
	// const getCart = useSelector(state => state.cart.cart)
	// console.log('getCart', getCart)
	// console.log('totalAmount', totalAmount)
	// console.log('totalPrice', totalPrice)

	useEffect(() => {
		setLoading(true)
		async function fetchData() {
			try {
				const res = await axios.get(
					`http://localhost:8080/api/products/${params.id}`,
					setHeaders()
				)
				console.log('res', res)
				setProduct(res.data)
			} catch (err) {
				console.log(err)
			}
			setLoading(false)
		}
		fetchData()
	}, [])

	return (
		<div>
			<ToastContainer />
			<Navbar />
			<div className='wrapper'>
				{loading ? (
					<div>Loading...</div>
				) : (
					<div
						className='flex justify-between items-start accent-slate-400'
						key={product.id}
					>
						<div className='w-[600px] '>
							<img className='rounded-2xl' src={product.img?.url} alt='' />
						</div>
						<div className='w-[600px]'>
							<h1 className='text-white font-black mb-8'>{product.name}</h1>
							{/* <div className='text-white'>{product.category}</div> */}
							<div className='text-white mb-7'>{product.desc}</div>
							<div className='text-white mb-6 bg-slate-400 border rounded-full py-1 px-2 w-max'>
								{product.brand}
							</div>
							{/* <div>
									{product.size && (
										<>
											<label className='text-white' htmlFor='size'>
												Pick a size
											</label>
											<select
												name='size'
												id='size'
												onChange={e => setSize(e.target.value)}
											>
												{product.size?.map((s, idx) => {
													return (
														<option key={idx} value={s}>
															{s}
														</option>
													)
												})}
											</select>
										</>
									)}
								</div> */}
							{/* <div className='flex gap-1'>
									{product.color && (
										<>
											<span className='text-white'>Pick a color</span>
											{product.color?.map((c, idx) => {
												return (
													<div
														key={idx}
														className={`w-[30px] h-[30px] rounded-full cursor-pointer ${
															c === color
																? 'border-2 border-lime-300'
																: 'border-transparent'
														}`}
														style={{ backgroundColor: c }}
														onClick={e => selectedColor(c)}
													></div>
												)
											})}
										</>
									)}
								</div> */}
							{/* <div className='text-white'>{product.gender}</div> */}
							<div className='text-white text-2xl font-bold mb-5'>
								{new Intl.NumberFormat('en-US', {
									style: 'currency',
									currency: 'USD',
								}).format(product.price)}
							</div>
							<div
								className='mb-16'
								onClick={() =>
									dispatch(
										addToCart({
											id: product._id,
											name: product.name,
											img: product.img?.url,
											// color: color,
											// size: size,
											price: product.price,
											totalPrice: product.price,
											desc: product.desc,
											amount: 1,
										})
									)
								}
							>
								<Button variant='light' text='Add to cart' />
							</div>
							general specifications:
						</div>
					</div>
				)}
			</div>
			<Footer />
		</div>
	)
}

export default SingleProduct
