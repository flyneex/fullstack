import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Create from './Create'

const Products = () => {
	const navigate = useNavigate()
	return (
		<>
			{/* <div className='mb-8' onClick={() => navigate('/admin/products/create')}>
				<Button text='Create Product' variant='light' />
			</div> */}
			<Create />
			<Outlet />
		</>
	)
}

export default Products
