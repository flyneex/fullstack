import {
	Modal,
	ModalBody,
	ModalContent,
	ModalHeader,
	Tooltip,
	useDisclosure,
} from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateProducts } from '../../store/product.slice'
const Edit = ({ prId }) => {
	const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()
	const [img, setImg] = useState('')
	const [brand, setBrand] = useState('')
	const [name, setName] = useState('')
	const [desc, setDesc] = useState('')
	const [price, setPrice] = useState('')
	const size = ['5xl']
	const [currentProduct, setCurrentProduct] = useState({})
	const [previewImg, setPreviewImg] = useState('')

	const { items, updateStatus } = useSelector(state => state.product)

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
				setPreviewImg(reader.result)

				console.log(img.name)
			}
		} else {
			setImg('')
		}
	}

	useEffect(() => {
		if (isOpen) {
			let productId = items.filter(product => product._id === prId)
			productId = productId[0]
			console.log('product', productId)

			setCurrentProduct(productId)
			setPreviewImg(productId.img.url)
			setImg('')
			setName(productId.name)
			setBrand(productId.brand)
			setDesc(productId.desc)
			setPrice(productId.price)
		}
	}, [isOpen, items, prId])

	const uploadProduct = e => {
		e.preventDefault()
		dispatch(
			updateProducts({
				img,
				product: {
					...currentProduct,
					name: name,
					brand: brand,
					desc: desc,
					price: price,
				},
			})
		).then(() => onClose())
	}

	return (
		<>
			<Tooltip content='Edit product'>
				<span
					className='text-lg text-default-400 cursor-pointer active:opacity-50'
					onClick={onOpen}
					key={size}
				>
					<svg
						aria-hidden='true'
						fill='none'
						focusable='false'
						height='1em'
						role='presentation'
						viewBox='0 0 20 20'
						width='1em'
					>
						<path
							d='M11.05 3.00002L4.20835 10.2417C3.95002 10.5167 3.70002 11.0584 3.65002 11.4334L3.34169 14.1334C3.23335 15.1084 3.93335 15.775 4.90002 15.6084L7.58335 15.15C7.95835 15.0834 8.48335 14.8084 8.74168 14.525L15.5834 7.28335C16.7667 6.03335 17.3 4.60835 15.4583 2.86668C13.625 1.14168 12.2334 1.75002 11.05 3.00002Z'
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeMiterlimit={10}
							strokeWidth={1.5}
						/>
						<path
							d='M9.90833 4.20831C10.2667 6.50831 12.1333 8.26665 14.45 8.49998'
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeMiterlimit={10}
							strokeWidth={1.5}
						/>
						<path
							d='M2.5 18.3333H17.5'
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeMiterlimit={10}
							strokeWidth={1.5}
						/>
					</svg>
				</span>
			</Tooltip>

			<Modal isOpen={isOpen} onOpenChange={onOpenChange} size={size}>
				<ModalContent>
					{onClose => (
						<>
							<ModalHeader className='flex flex-col gap-1'>
								<span className='text-white'>Edit Product</span>
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
											value={brand}
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
											value={name}
											onChange={e => setName(e.target.value)}
											placeholder='Name'
										/>
										<input
											className='mb-5 p-5 rounded-sm'
											type='text'
											value={desc}
											onChange={e => setDesc(e.target.value)}
											placeholder='Description'
										/>
										<input
											className='mb-5 p-5 rounded-sm'
											type='text'
											value={price}
											onChange={e => setPrice(e.target.value)}
											placeholder='Price'
										/>
										<button type='submit'>
											{updateStatus === 'pending' ? 'Submitting' : 'Submit'}
										</button>
									</form>
									<div>
										{previewImg ? (
											<img className='w-[600px]' src={previewImg} alt='' />
										) : (
											<div className='text-white text-xl font-bold'>
												<img src='/images/placeholder_600x.webp' alt='' />
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

export default Edit
