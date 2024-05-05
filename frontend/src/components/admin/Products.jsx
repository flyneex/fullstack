import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Button from '../../UI/Button'

const Products = () => {
	const navigate = useNavigate()
	return (
		<>
			<div onClick={() => navigate('/admin/products/create')}>
				<Button text='Create Product' variant='light' />
			</div>
			<Outlet />
		</>
	)
}

export default Products
