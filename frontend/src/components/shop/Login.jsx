import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Button from '../../UI/Button'
import { login } from '../../store/auth.slice'
import Navbar from './Navbar'

const Login = () => {
	const initialValues = {
		name: '',
		password: '',
		imgUrl: '',
	}

	const dispatch = useDispatch()

	const [values, setValues] = useState(initialValues)
	const onChangeValues = e => {
		const { name, value } = e.target
		setValues({ ...values, [name]: value })
	}
	console.log(values)

	return (
		<div className='wrapper'>
			<Navbar />
			<h2 className='text-white text-4xl text-center mb-10'>Log in</h2>
			<form action='' className='flex flex-col'>
				<input
					className='w-1/2 p-3 mx-auto mb-5 outline-none'
					type='text'
					name='name'
					placeholder='Name'
					value={values.name}
					onChange={onChangeValues}
				/>
				<input
					className='w-1/2 p-3 mx-auto mb-5 outline-none'
					type='password'
					name='password'
					placeholder='Password'
					value={values.password}
					onChange={onChangeValues}
				/>
				<input
					className='w-1/2 p-3 mx-auto mb-5 outline-none'
					type='text'
					name='image'
					placeholder='Url image'
					value={values.imgUrl}
					onChange={onChangeValues}
				/>
				<div className='mx-auto' onClick={() => dispatch(login(values))}>
					<Button text='Log in' variant='light' />
				</div>
			</form>
		</div>
	)
}

export default Login
