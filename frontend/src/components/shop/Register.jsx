import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Button from '../../UI/Button.jsx'
import { registerUser } from '../../store/auth.slice.js'
import Navbar from './Navbar.jsx'

const Register = () => {
	const auth = useSelector(state => state.auth)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	console.log('auth', auth)
	const [user, setUser] = useState({
		name: '',
		email: '',
		password: '',
	})
	console.log('user', user)
	const dispatchRegister = e => {
		e.preventDefault()
		dispatch(registerUser(user))
	}
	useEffect(() => {
		if (auth._id) {
			navigate('/shop')
		}
	}),
		[auth._id, navigate]
	return (
		<>
			<Navbar />
			<div className='flex flex-col justify-center items-center h-screen'>
				<h3 className='mb-12 text-white'>Registration</h3>
				<form onSubmit={dispatchRegister} className='flex flex-col'>
					<input
						className='input-field'
						type='text'
						placeholder='Name'
						onChange={e => setUser({ ...user, name: e.target.value })}
					/>
					<input
						className='input-field'
						type='email'
						placeholder='Email'
						onChange={e => setUser({ ...user, email: e.target.value })}
					/>
					<input
						className='input-field'
						type='password'
						placeholder='Password'
						onChange={e => setUser({ ...user, password: e.target.value })}
					/>
					<Button
						text={
							auth.registerStatus === 'pending' ? 'Submitting...' : 'Register'
						}
						variant='light'
					/>
					{auth.registerStatus === 'rejected'
						? toast.error('Invalid login or password')
						: null}
					<div className='text-white font-bold text-2xl'>
						Register already? <Link to={'/login'}>Login</Link>
					</div>
				</form>
			</div>
		</>
	)
}

export default Register
