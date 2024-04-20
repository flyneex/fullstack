import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		cart: [],
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
						id: action.payload.id,
						name: action.payload.name,
						img: action.payload.img,
						price: action.payload.price,
						totalPrice: action.payload.price,
						size: action.payload.size,
						text: action.payload.text,
						color: action.payload.color,
						amount: 1,
					})
					state.totalAmount++
					state.totalPrice += action.payload.price
				}
			} catch (err) {
				return err
			}
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
					// state.cart.splice(exist, 1)
					state.totalAmount--
					state.totalPrice -= action.payload.price
				} else {
					exist.amount--
					exist.totalPrice -= action.payload.price
					state.totalAmount--
					state.totalPrice -= action.payload.price
				}
			} catch (err) {
				return err
			}
		},
	},
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
