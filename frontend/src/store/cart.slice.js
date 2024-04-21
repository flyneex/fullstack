import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		cart: localStorage.getItem('addedProduct')
			? JSON.parse(localStorage.getItem('addedProduct'))
			: [],
		amount: 0,
		totalAmount: 0,
		totalPrice: 0,
	},
	reducers: {
		addToCart: (state, action) => {
			try {
				const exist = state.cart.find(
					product =>
						product.id === action.payload.id &&
						product.size === action.payload.size &&
						product.color === action.payload.color
				)
				if (exist) {
					exist.amount++
					exist.totalPrice += action.payload.price
					state.totalAmount++
					state.totalPrice += action.payload.price
				} else {
					state.cart.push({
						// id: action.payload.id,
						// name: action.payload.name,
						// img: action.payload.img,
						// price: action.payload.price,
						// totalPrice: action.payload.price,
						// size: action.payload.size,
						// text: action.payload.text,
						// color: action.payload.color,
						...action.payload,
						amount: 1,
					})
					state.totalAmount++
					state.totalPrice += action.payload.price
					localStorage.setItem('addedProduct', JSON.stringify(state.cart))
				}
			} catch (err) {
				return err
			}
			toast.success(`${action.payload.name} added to cart`, {
				position: 'top-left',
				theme: 'dark',
			})
		},
		removeFromCart: (state, action) => {
			try {
				const exist = state.cart.find(
					product =>
						product.id === action.payload.id &&
						product.size === action.payload.size &&
						product.color === action.payload.color
				)
				if (exist.amount === 1) {
					state.cart = state.cart.filter(
						product =>
							product.id !== action.payload.id ||
							product.size !== action.payload.size ||
							product.color !== action.payload.color
					)
					state.totalAmount--
					state.totalPrice -= action.payload.price
					localStorage.setItem('addedProduct', JSON.stringify(state.cart))
				} else {
					exist.amount--
					exist.totalPrice -= action.payload.price
					state.totalAmount--
					state.totalPrice -= action.payload.price
				}
			} catch (err) {
				return err
			}
			toast.error(`${action.payload.name} removed to cart`, {
				position: 'top-left',
				theme: 'dark',
			})
		},
	},
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
