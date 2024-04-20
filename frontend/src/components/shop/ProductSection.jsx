import products from '../../assets/products'
import { useGetAllProductsQuery } from '../../store/productApi'
import FilterCategory from './FilterCategory'
import ProductCard from './ProductCard'

const ProductSection = () => {
	const { data, error, isLoading } = useGetAllProductsQuery()

	return (
		<div className='wrapper'>
			<FilterCategory />
			<div className='flex justify-between items-center flex-wrap gap-5'>
				{products.map((product, idx) => (
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
			{isLoading ? (
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
			)}
		</div>
	)
}

export default ProductSection
