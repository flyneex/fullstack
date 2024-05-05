import React, { useState } from 'react'

const Create = () => {
	const [file, setFile] = useState('')
	const [brand, setBrand] = useState('')
	const [name, setName] = useState('')
	const [desc, setDesc] = useState('')
	const [price, setPrice] = useState('')

	const fileUploadHandler = e => {
		const file = e.target.files[0]
		TransformFile(file)
	}

	const TransformFile = file => {
		const reader = new FileReader()
		if (file) {
			reader.readAsDataURL(file)
			reader.onloadend = () => {
				setFile(reader.result)

				console.log(file.name)
			}
		} else {
			setFile('')
		}
	}

	return (
		<div className='flex flex-col'>
			<input
				className='text-white my-16'
				type='file'
				accept='image/*'
				required
				onChange={fileUploadHandler}
			/>
			<select
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
				type='text'
				required
				onChange={e => setName(e.target.value)}
				placeholder='Name'
			/>
			<input
				type='text'
				required
				onChange={e => setDesc(e.target.value)}
				placeholder='Description'
			/>
			<input
				type='text'
				required
				onChange={e => setPrice(e.target.value)}
				placeholder='Price'
			/>
			{file ? (
				<img className='w-[300px]' src={file} alt='' />
			) : (
				<div className='text-white text-xl font-bold'>
					The image is waiting for you to upload it
				</div>
			)}
		</div>
	)
}

export default Create
