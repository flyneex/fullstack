import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from './Button'
import Counter from './Counter'
import Input from './Input'

const Form = () => {
	const { register, handleSubmit, reset } = useForm({
		mode: 'onBlur',
	})
	const [isSuccess, setIsSuccess] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	const onSubmit = data => {
		setIsLoading(true)
		fetch('http://localhost:4000/api', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then(res => res.json())
			.then(data => {
				if (!data) return
				setIsSuccess(true)
				reset()
			})
			.finally(() => {
				setIsLoading(false)
			})
	}

	//typing text
	const [form, setForm] = useState({
		name: '',
		email: '',
		question: '',
		fun: 'Can I change?',
	})

	const handleChange = e => {
		setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
	}

	// const handleClear = e => {
	// 	setForm(e.target.value === '')
	// }

	const inputRef = useRef(null)

	// const focus = () => {
	// 	inputRef.current.focus()
	// }

	// const select = () => {
	// 	inputRef.current.select()
	// }

	return (
		<div className='crystal-clear py-14 border-b'>
			<div className='wrapper grid grid-cols-1 xl:grid-cols-2 gap-20'>
				{isSuccess ? (
					<>Form is send</>
				) : (
					<form onSubmit={handleSubmit(onSubmit)}>
						<Input
							ref={inputRef}
							type='name'
							name='name'
							placeholder='Your name'
							onChange={handleChange}
							{...register('name')}
						/>
						{/* {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>} */}
						<Input
							ref={inputRef}
							type='text'
							name='email'
							placeholder='Your email'
							onChange={handleChange}
							{...register('email')}
						/>
						{/* {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>} */}
						<Input
							ref={inputRef}
							type='text'
							name='question'
							placeholder='Your question'
							onChange={handleChange}
							{...register('question')}
						/>
						{/* {errors.question && (
					<p style={{ color: 'red' }}>{errors.email.message}</p>
				)} */}
						<div className='flex gap-5'>
							<Button variant='light' text='Send' disabled={isLoading} />
							{/* <Button variant='light' text='Clear' onClick={handleClear} /> */}
						</div>
						{/* <div className='mb-10'>Your name: {form.name}</div>
					<div className='mb-10'>Your email: {form.email}</div>
					<div className='mb-10'>You want to know: {form.question}</div> */}
					</form>
				)}
				<div>
					<Input
						ref={inputRef}
						type='text'
						name='fun'
						placeholder='Type something...'
						onChange={handleChange}
					/>
					<div className='text-white text-3xl'>
						<p>{form.fun}</p>
					</div>
					<div>
						<Counter />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Form
