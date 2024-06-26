import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Button from '../../UI/Button.jsx'
import { loginUser } from '../../store/auth.slice.js'
import Navbar from './Navbar.jsx'

const Login = () => {
	const auth = useSelector(state => state.auth)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	console.log('auth', auth)
	const [user, setUser] = useState({
		email: '',
		password: '',
	})
	console.log('user', user)
	const dispatchLogin = e => {
		e.preventDefault()
		dispatch(loginUser(user))
		toast.info('You are logged in')
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
				<h3 className='mb-12 text-white'>Login</h3>
				<form onSubmit={dispatchLogin} className='flex flex-col'>
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
						text={auth.loginStatus === 'pending' ? 'Logging...' : 'Login'}
						variant='light'
					/>
					{auth.loginStatus === 'rejected'
						? toast.error('Invalid login or password')
						: null}
				</form>
			</div>
		</>
	)
}

export default Login
