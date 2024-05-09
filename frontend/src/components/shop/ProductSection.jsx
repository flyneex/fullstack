import { useSelector } from 'react-redux'

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
							<div key={idx}>
								<div>
									<img className='w-[300px]' src={product.img.url} alt='' />
								</div>
								<div className='text-white text-2xl'>{product.name}</div>
								<div className='text-white text-2xl'>{product.brand}</div>
								<div className='text-white text-2xl'>{product.desc}</div>
								<div className='text-white text-2xl'>${product.price}</div>
								{/* <ProductCard
									id={product._id}
									// category={product.category}
									img={product.img}
									name={product.name}
									// color={product.color}
									price={product.price}
									// size={product.size}
									desc={product.desc}
								/> */}
							</div>
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
