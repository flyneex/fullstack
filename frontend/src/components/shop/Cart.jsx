import { useDispatch, useSelector } from 'react-redux'
import Button from '../../UI/Button'
import { removeFromCart } from '../../store/cart.slice'

const Cart = () => {
	const cart = useSelector(state => state.cart.cart)
	const totalAmount = useSelector(state => state.cart.totalAmount)
	const totalPrice = useSelector(state => state.cart.totalPrice)
	const dispatch = useDispatch()
	return (
		<div className='bg-white rounded absolute right-10 top-20 w-[300px]'>
			{cart.length > 0 ? (
				<div className=''>
					{cart.map((item, idx) => (
						<div key={idx}>
							<div className='flex gap-11'>
								<div>
									<img
										className='w-[150px] h-[150px]'
										src={item.img}
										alt='Product Image'
									/>
								</div>
								<div>
									<div>{item.name}</div>
									<div>{item.amount}</div>
									<div>{item.size}</div>
									<div
										className='w-[15px] h-[15px] rounded-full'
										style={{ backgroundColor: item.color }}
									></div>
									<div>{item.price}</div>
									<div>{item.totalPrice}</div>
								</div>
							</div>
							<div onClick={() => dispatch(removeFromCart(item))}>
								<Button text='Remove' variant='dark' />
							</div>
						</div>
					))}
					<div className='text-red-300'>TOTAL: {totalAmount}</div>
					<div className='text-red-600'>TOTAL: {totalPrice}</div>
				</div>
			) : (
				<div>Your cart is empty</div>
			)}
		</div>
	)
}

export default Cart
