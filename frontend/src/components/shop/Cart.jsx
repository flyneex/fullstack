import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from '../../UI/Button'
import { removeFromCart } from '../../store/cart.slice'

const Cart = () => {
	const cart = useSelector(state => state.cart.cart)
	const totalAmount = useSelector(state => state.cart.totalAmount)
	const totalPrice = useSelector(state => state.cart.totalPrice)
	const dispatch = useDispatch()
	return (
		<div className='p-5 bg-white rounded absolute right-16 top-16 w-[500px] overflow-auto z-[99]'>
			{cart.length > 0 ? (
				<div>
					{cart.map((item, idx) => (
						<div key={idx} className='mb-10'>
							<div className='flex gap-10'>
								<div>
									<img
										className='w-[100px] rounded-xl'
										src={item.img}
										alt='Product Image'
									/>
								</div>
								<div>
									<div>{item.name}</div>
									<div>Amount: {item.amount}</div>
									{/* <div>Size: {item.size}</div>
									<div className='flex items-center gap-2'>
										Color:
										<div
											className='w-[15px] h-[15px] rounded-full border'
											style={{ backgroundColor: item.color }}
										></div>
									</div> */}
									<div className='flex justify-between gap-10'>
										<div>Price: {item.price}</div>
										<div>Total Price: {item.totalPrice}</div>
										<div
											className='underline cursor-pointer'
											onClick={() => dispatch(removeFromCart(item))}
										>
											Remove
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
					<div className='text-red-300'>TOTAL AMOUNT: {totalAmount}</div>
					<div className='text-red-600'>TOTAL PRICE: {totalPrice}</div>
				</div>
			) : (
				<div>Your cart is empty</div>
			)}
			<div className='text-center mt-10'>
				<Link to='/checkout'>
					<Button text='Make a order' variant='dark' />
				</Link>
			</div>
		</div>
	)
}

export default Cart
