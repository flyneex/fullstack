import cn from 'classnames'
import { useContext, useEffect, useRef, useState } from 'react'
import Button from '../UI/Button'
import Input from '../UI/Input'
import { UserContext } from '../context/UserContext'

const Modal = () => {
	const inputRef = useRef(null)

	const { modal } = useContext(UserContext)
	const [isSuccess, setSuccess] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setSuccess(false)
		}, 3000)
	}, [isSuccess])

	return (
		<>
			<div
				className={cn(
					'bg-white drop-shadow-2xl p-5 rounded-xl absolute z-10 transform50 opacity-0',
					{
						'show-modal': modal === true,
					}
				)}
			>
				<form>
					<Input
						ref={inputRef}
						type='text'
						name='name'
						placeholder='Your name'
					/>
					<Input
						ref={inputRef}
						type='email'
						name='email'
						placeholder='Your email'
					/>
					<div onClick={() => setSuccess(true)}>
						<Button variant='dark' text='Send' />
					</div>
				</form>
			</div>
			{isSuccess && (
				<div
					className={cn(
						'bg-white drop-shadow-2xl p-5 rounded-xl absolute z-10 transform50 opacity-0',
						{
							'show-modal': modal === true,
						}
					)}
				>
					Form is send!
				</div>
			)}
		</>
	)
}

export default Modal
