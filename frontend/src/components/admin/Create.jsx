import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Button from '../../UI/Button'
import { uploadProducts } from '../../store/product.slice'

const Create = () => {
	const [img, setImg] = useState('')
	const [brand, setBrand] = useState('iphone')
	const [name, setName] = useState('')
	const [desc, setDesc] = useState('')
	const [price, setPrice] = useState('')

	const dispatch = useDispatch()

	const fileUploadHandler = e => {
		const img = e.target.files[0]
		transformFile(img)
	}

	const transformFile = img => {
		const reader = new FileReader()
		if (img) {
			reader.readAsDataURL(img)
			reader.onloadend = () => {
				setImg(reader.result)

				console.log(img.name)
			}
		} else {
			setImg('')
		}
	}

	const uploadProduct = e => {
		e.preventDefault()
		dispatch(
			uploadProducts({
				name,
				brand,
				desc,
				price,
				img: img,
			})
		)
	}

	return (
		<div className='flex items-center gap-16'>
			<form className='flex flex-col w-[600px]' onSubmit={uploadProduct}>
				<input
					className='text-white my-16'
					type='file'
					accept='image/*'
					required
					onChange={fileUploadHandler}
				/>
				<select
					className='mb-5 p-5 rounded-sm'
					name='brand'
					id='brand'
					onChange={e => setBrand(e.target.value)}
					required
				>
					<option value='iphone'>Iphone</option>
					<option value='samsung'>Samsung</option>
					<option value='xiaomi'>Xiaomi</option>
					<option value='oppo'>Oppo!</option>
					<option value='hohor'>HONOR</option>
				</select>
				<input
					className='mb-5 p-5 rounded-sm'
					type='text'
					required
					onChange={e => setName(e.target.value)}
					placeholder='Name'
				/>
				<input
					className='mb-5 p-5 rounded-sm'
					type='text'
					required
					onChange={e => setDesc(e.target.value)}
					placeholder='Description'
				/>
				<input
					className='mb-5 p-5 rounded-sm'
					type='text'
					required
					onChange={e => setPrice(e.target.value)}
					placeholder='Price'
				/>
				<Button text='Submit' variant='light' />
			</form>
			<div>
				{img ? (
					<img className='w-[600px]' src={img} alt='' />
				) : (
					<div className='text-white text-xl font-bold'>
						<img src='/images/placeholder_600x.webp' alt='' />
					</div>
				)}
			</div>
		</div>
	)
}

export default Create
