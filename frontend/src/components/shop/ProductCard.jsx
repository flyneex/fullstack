import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { singleProduct } from '../../store/product.slice'

const ProductCard = ({ id, img, desc, name, color, price, size, category }) => {
	const dispatch = useDispatch()
	return (
		<div onClick={() => dispatch(singleProduct(id))}>
			<div>
				<Link to={`/product/${id}`}>
					<img
						className='w-[300px] h-[300px] rounded-lg'
						src={img}
						alt='Product Image'
					/>
				</Link>
			</div>
			<div className='flex mb-5 mt-2 items-center justify-between'>
				<div className='text-white text-xl font-medium'>
					<Link to={`/product/` + id}>{name}</Link>
				</div>
			</div>
			<div className='flex items-center justify-between'>
				<div className='text-white text-lg font-black'>${price}</div>
				{/* <div className='flex gap-2'>
					{size.map((s, idx) => {
						return <div key={idx}>{s}</div>
					})}
				</div> */}
				{/* <div className='flex gap-2'>
					{color.map((clr, idx) => {
						return (
							<div
								className='w-[10px] h-[10px] rounded-full'
								key={idx}
								style={{ backgroundColor: clr }}
							></div>
						)
					})}
				</div> */}
			</div>
		</div>
	)
}

export default ProductCard
