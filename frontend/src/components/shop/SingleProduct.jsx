import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../UI/Button'
import { addToCart } from '../../store/cart.slice'
import Footer from '../Footer'
import Navbar from './Navbar'

const SingleProduct = () => {
	const getProduct = useSelector(state => state.product.singleProduct)
	const [size, setSize] = useState(getProduct[0].size[0])
	const [color, setColor] = useState(getProduct[0].color[0])
	const selectedColor = clr => {
		setColor(clr === color ? null : clr)
	}

	const dispatch = useDispatch()
	console.log(size)
	console.log(color)
	console.log('getProduct1', getProduct)

	const totalAmount = useSelector(state => state.cart.totalAmount)
	const totalPrice = useSelector(state => state.cart.totalPrice)
	const getCart = useSelector(state => state.cart.cart)
	console.log(getCart)
	console.log(totalAmount)
	console.log(totalPrice)

	return (
		<div>
			<Navbar />
			<div className='wrapper'>
				{getProduct.map(product => {
					return (
						<div
							className='flex justify-between items-center accent-slate-400'
							key={product.id}
						>
							<div className='w-[600px]'>
								<img src={product.img} alt='' />
							</div>
							<div>
								<h1 className='text-white'>{product.name}</h1>
								<div className='text-white'>{product.category}</div>
								<div className='text-white'>{product.desc}</div>
								<div>
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
								</div>
								<div className='flex gap-1'>
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
								</div>
								<div className='text-white'>{product.gender}</div>
								<div className='text-white text-2xl font-bold'>
									${product.price}
								</div>
								<div
									onClick={() =>
										dispatch(
											addToCart({
												id: product.id,
												name: product.name,
												img: product.img,
												color: color,
												size: size,
												price: product.price,
												amount: 1,
												totalPrice: product.price,
											})
										)
									}
								>
									<Button variant='light' text='Add to cart' />
								</div>
							</div>
						</div>
					)
				})}
			</div>
			<Footer />
		</div>
	)
}

export default SingleProduct
