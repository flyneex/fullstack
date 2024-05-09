import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Button from '../../UI/Button'

const Products = () => {
	const navigate = useNavigate()
	return (
		<>
			<div className='mb-8' onClick={() => navigate('/admin/products/create')}>
				<Button text='Create Product' variant='light' />
			</div>
			<Outlet />
		</>
	)
}

export default Products
