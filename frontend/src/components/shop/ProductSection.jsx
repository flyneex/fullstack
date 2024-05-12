import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'

const ProductSection = () => {
	// const { data, error, isLoading } = useGetAllProductsQuery()
	const { items: data, status } = useSelector(state => state.product)
	console.log('products array', data)

	return (
		<div className='wrapper'>
			{/* <FilterCategory /> */}
			{status === 'success' ? (
				<div className='flex justify-between items-center flex-wrap gap-5'>
					{data &&
						data?.map((product, idx) => (
							<ProductCard
								key={idx}
								id={product._id}
								// category={product.category}
								img={product.img.url}
								name={product.name}
								// color={product.color}
								price={product.price}
								// size={product.size}
							/>
						))}
				</div>
			) : (
				<div>No products.</div>
			)}
			{/* {isLoading ? (
				<div>Loading...</div>
			) : error ? (
				<div>Error</div>
			) : (
				<div>
					{data?.map(product => (
						<div key={product.id}>
							<div>{product.name}</div>
							<div>{product.img}</div>
						</div>
					))}
				</div>
			)} */}
		</div>
	)
}

export default ProductSection
