import {
	Modal,
	ModalBody,
	ModalContent,
	ModalHeader,
	useDisclosure,
} from '@nextui-org/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { uploadProducts } from '../../store/product.slice'

const Create = () => {
	const { createStatus } = useSelector(state => state.product)
	const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()
	const [img, setImg] = useState('')
	const [brand, setBrand] = useState('iphone')
	const [name, setName] = useState('')
	const [desc, setDesc] = useState('')
	const [price, setPrice] = useState('')
	const size = ['5xl']

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
		).then(() => onClose())
	}

	return (
		<>
			<button onClick={onOpen} key={size}>
				Create product
			</button>

			<Modal isOpen={isOpen} onOpenChange={onOpenChange} size={size}>
				<ModalContent>
					{onClose => (
						<>
							<ModalHeader className='flex flex-col gap-1'>
								<span className='text-white'>Create Product</span>
							</ModalHeader>
							<ModalBody>
								<div className='flex gap-10'>
									<form
										className='flex flex-col w-[600px]'
										onSubmit={uploadProduct}
									>
										<input
											className='text-white my-16'
											type='file'
											accept='image/*'
											onChange={fileUploadHandler}
										/>
										<select
											className='mb-5 p-5 rounded-sm'
											name='brand'
											id='brand'
											onChange={e => setBrand(e.target.value)}
										>
											<option value=''>Select brand</option>
											<option value='iphone'>Iphone</option>
											<option value='samsung'>Samsung</option>
											<option value='xiaomi'>Xiaomi</option>
											<option value='oppo'>Oppo!</option>
											<option value='hohor'>HONOR</option>
										</select>
										<input
											className='mb-5 p-5 rounded-sm'
											type='text'
											onChange={e => setName(e.target.value)}
											placeholder='Name'
										/>
										<input
											className='mb-5 p-5 rounded-sm'
											type='text'
											onChange={e => setDesc(e.target.value)}
											placeholder='Description'
										/>
										<input
											className='mb-5 p-5 rounded-sm'
											type='number'
											onChange={e => setPrice(e.target.value)}
											placeholder='Price'
										/>
										<button type='submit'>
											{createStatus === 'pending' ? 'Submitting' : 'Submit'}
										</button>
									</form>
									<div>
										{img ? (
											<img className='w-[600px]' src={img} />
										) : (
											<div className='text-white text-xl font-bold'>
												<img src='/images/placeholder_600x.webp' />
											</div>
										)}
									</div>
								</div>
							</ModalBody>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	)
}

export default Create
