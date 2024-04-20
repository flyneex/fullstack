import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Slider from '../../components/shop/Slider'
import {
	filterByColor,
	filterByGender,
	filterByPrice,
	filterBySize,
} from '../../store/product.slice'
import Footer from '../Footer'
import FilterCategory from './FilterCategory'
import Navbar from './Navbar'
import ProductCard from './ProductCard'

const FilteredPage = () => {
	const products = useSelector(state => state.product.filteredCategory)
	console.log('products', products)
	const { category } = useParams()
	const genderBtns = ['male', 'female', 'unisex']
	const colorBtns = [
		'black',
		'gray',
		'yellow',
		'red',
		'green',
		'violet',
		'blue',
		'white',
	]
	const sizeBtns = ['xs', 's', 'm', 'l', 'xl']
	const dispatch = useDispatch()

	return (
		<div>
			<Navbar />
			<Slider />
			<FilterCategory />
			<div className='wrapper'>
				<h1 className='text-white'>{category}</h1>
				<div className='filter flex justify-between items-center my-10'>
					<div className='flex gap-5'>
						<div>
							<button onClick={() => dispatch(filterByPrice())}>
								Hight Price
							</button>
						</div>
						<div>
							<select
								name='gender'
								id='gender'
								className='h-[45px] w-[150px] rounded-lg'
								onChange={e => dispatch(filterByGender(e.target.value))}
							>
								{/* <option value='initial'>Pick up a gender</option> */}
								{genderBtns.map((g, idx) => {
									return (
										<option key={idx} value={g}>
											{g}
										</option>
									)
								})}
							</select>
						</div>
						<div>
							<select
								name=''
								id=''
								className='h-[45px] w-[150px] rounded-lg'
								onChange={e => dispatch(filterByColor(e.target.value))}
							>
								<option value='initial'>Pick up a color</option>
								{colorBtns.map((c, idx) => {
									return (
										<option key={idx} value={c}>
											{c}
										</option>
									)
								})}
							</select>
						</div>
						<div>
							<select
								name=''
								id=''
								className='h-[45px] w-[150px] rounded-lg'
								onChange={e => dispatch(filterBySize(e.target.value))}
							>
								<option value='initial'>Pick up a size</option>
								{sizeBtns.map((s, idx) => {
									return (
										<option key={idx} value={s}>
											{s}
										</option>
									)
								})}
							</select>
						</div>
					</div>
					<div>
						<button>Clear filter</button>
					</div>
				</div>
				<div className='flex justify-start items-center flex-wrap gap-10'>
					{products
						// .filter(product => product.category === category)
						.map((product, idx) => (
							<div key={idx}>
								<ProductCard
									id={product.id}
									category={product.category}
									img={product.img}
									name={product.name}
									color={product.color}
									price={product.price}
									size={product.size}
								/>
							</div>
						))}
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default FilteredPage
