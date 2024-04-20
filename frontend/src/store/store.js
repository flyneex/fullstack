import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authSlice from './auth.slice'
import cartSlice from './cart.slice'
import counterSlice from './counter.slice'
import productSlice, { fetchProducts } from './product.slice'
import { productApi } from './productApi'
import sliderSlice from './slider.slice'

export const rootReducer = combineReducers({
	counter: counterSlice,
	product: productSlice,
	slider: sliderSlice,
	cart: cartSlice,
	auth: authSlice,
	[productApi.reducerPath]: productApi.reducer,
})

const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(productApi.middleware),
})

store.dispatch(fetchProducts())

export default store
