import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { filteredCategory } from '../../store/product.slice'

const FilterCategory = () => {
	const categoriesButtons = [
		'Hoodies',
		'T-Shirts',
		'Jackets',
		'Shoes',
		'Jeans',
		'Sneakers',
		'Hats',
	]
	const dispatch = useDispatch()

	return (
		<div className='wrapper'>
			<div className='flex justify-center items-center gap-6 my-10'>
				{categoriesButtons.map((category, idx) => {
					return (
						<Link to={'/shop/' + category} key={idx}>
							<div
								className='text-white border rounded-lg border-blue-500 p-3 uppercase cursor-pointer hover:bg-blue-300 duration-300 ease-in-out'
								onClick={() => dispatch(filteredCategory(category))}
							>
								{category}
							</div>
						</Link>
					)
				})}
			</div>
		</div>
	)
}

export default FilterCategory
