import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
// import products from '../assets/products'

const setHeaders = () => {
	const headers = {
		headers: {
			'x-auth-token': localStorage.getItem('token'),
		},
	}
	return headers
}

export const fetchProducts = createAsyncThunk(
	'product/fetchProducts',
	async () => {
		try {
			const response = await axios.get('http://localhost:8080/api/products')
			// const data = await response?.json()
			// return data
			return response.data
		} catch (err) {
			console.log('fetchProducts', err)
		}
	}
)

export const uploadProducts = createAsyncThunk(
	'product/uploadProducts',
	async values => {
		try {
			const response = await axios.post(
				'http://localhost:8080/api/products',
				values,
				setHeaders()
			)
			// const data = await response?.json()
			// return data
			return response.data
		} catch (err) {
			console.log('uploadProducts', err)
		}
	}
)

const productSlice = createSlice({
	name: 'product',
	initialState: {
		items: [],
		// filteredCategory: localStorage.getItem('filteredData')
		// 	? JSON.parse(localStorage.getItem('filteredData'))
		// 	: [],
		singleProduct: JSON.parse(localStorage.getItem('productItem')),
		error: false,
		status: null,
		createStatus: null,
	},
	reducers: {
		// filteredCategory: (state, action) => {
		// 	try {
		// 		const filterCat = products.filter(
		// 			product => product.category === action.payload
		// 		)
		// 		state.filteredCategory = filterCat
		// 		state.error = false
		// 		console.log('filterCat', filterCat)
		// 		const filteredItem = JSON.stringify(filterCat)
		// 		localStorage.setItem('filteredData', filteredItem)
		// 	} catch (err) {
		// 		return err
		// 	}
		// },
		// singleProduct: (state, action) => {
		// 	try {
		// 		const productItem = products.filter(item => item.id === action.payload)
		// 		state.singleProduct = productItem
		// 		const productSave = JSON.stringify(productItem)
		// 		localStorage.setItem('productItem', productSave)
		// 	} catch (err) {
		// 		return err
		// 	}
		// },
		// filterByGender: (state, action) => {
		// 	try {
		// 		const genderItem = state.filteredCategory.filter(
		// 			product => product.gender === action.payload
		// 		)
		// 		state.error = false
		// 		state.filteredCategory = genderItem
		// 		console.log('genderItem', genderItem)
		// 		const oneGender = genderItem.length > 0
		// 		if (oneGender) {
		// 			state.error = false
		// 			const saveGender = JSON.stringify(genderItem)
		// 			localStorage.setItem('filteredData', saveGender)
		// 		} else {
		// 			state.error = true
		// 			state.filteredCategory = []
		// 		}
		// 	} catch (err) {
		// 		return err
		// 	}
		// },
		// filterByPrice(state) {
		// 	try {
		// 		const priceItem = state.filteredCategory.sort((a, b) =>
		// 			a.price > b.price ? -1 : 1
		// 		)
		// 		state.filteredCategory = priceItem
		// 		let count = price.length
		// 		if (count > 1) {
		// 			const noError = false
		// 			state.error = noError
		// 			if (!noError) {
		// 				state.filteredCategory = priceItem
		// 				localStorage.setItem('filteredData', JSON.stringify(priceItem))
		// 			}
		// 		} else {
		// 			state.error = true
		// 			state.filteredCategory = []
		// 		}
		// 	} catch (err) {
		// 		return err
		// 	}
		// },
		// filterByColor(state, action) {
		// 	try {
		// 		const colorItem = state.filteredCategory.filter(c =>
		// 			c.color.includes(action.payload)
		// 		)
		// 		state.filteredCategory = colorItem
		// 		localStorage.setItem('filteredData', JSON.stringify(colorItem))
		// 	} catch (err) {
		// 		return err
		// 	}
		// },
		// filterBySize(state, action) {
		// 	try {
		// 		const sizeItem = state.filteredCategory.filter(
		// 			s => s.size === action.payload
		// 		)
		// 		state.filteredCategory = sizeItem
		// 		localStorage.setItem('filteredData', JSON.stringify(sizeItem))
		// 	} catch (err) {
		// 		return err
		// 	}
		// },
	},
	extraReducers: builder => {
		builder
			.addCase(fetchProducts.pending, (state, action) => {
				state.status = 'pending'
				// state.products = action.payload
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.items = action.payload
				state.status = 'success'
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.status = 'rejected'
				// state.error = action.error.message
			})
			.addCase(uploadProducts.pending, (state, action) => {
				state.createStatus = 'pending'
				// state.products = action.payload
			})
			.addCase(uploadProducts.fulfilled, (state, action) => {
				state.items.push(action.payload)
				state.createStatus = 'success'
			})
			.addCase(uploadProducts.rejected, (state, action) => {
				state.createStatus = 'rejected'
				// state.error = action.error.message
			})
	},
})

export const {
	filteredCategory,
	singleProduct,
	filterByColor,
	filterByGender,
	filterByPrice,
	filterBySize,
} = productSlice.actions
export default productSlice.reducer
