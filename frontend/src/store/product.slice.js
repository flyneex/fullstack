import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import products from '../assets/products'

export const fetchProducts = createAsyncThunk(
	'product/fetchProducts',
	async () => {
		const response = await axios.get('http://localhost:8080/api/products')
		// const data = await response?.json()
		// return data
		return response?.data
	}
)

const productSlice = createSlice({
	name: 'product',
	initialState: {
		items: [],
		filteredCategory:
			JSON.parse(sessionStorage.getItem('filteredData')) || products,
		singleProduct:
			JSON.parse(sessionStorage.getItem('productItem')) || products,
		error: false,
		status: null,
	},
	reducers: {
		filteredCategory: (state, action) => {
			try {
				const filterCat = products.filter(
					product => product.category === action.payload
				)
				state.filteredCategory = filterCat
				state.error = false
				console.log('filterCat', filterCat)
				const filteredItem = JSON.stringify(filterCat)
				sessionStorage.setItem('filteredData', filteredItem)
			} catch (err) {
				return err
			}
		},
		singleProduct: (state, action) => {
			try {
				const productItem = products.filter(item => item.id === action.payload)
				state.singleProduct = productItem
				const productSave = JSON.stringify(productItem)
				sessionStorage.setItem('productItem', productSave)
			} catch (err) {
				return err
			}
		},
		filterByGender: (state, action) => {
			try {
				const genderItem = state.filteredCategory.filter(
					product => product.gender === action.payload
				)
				state.error = false
				state.filteredCategory = genderItem
				console.log('genderItem', genderItem)
				const oneGender = genderItem.length > 0
				if (oneGender) {
					state.error = false
					const saveGender = JSON.stringify(genderItem)
					sessionStorage.setItem('filteredData', saveGender)
				} else {
					state.error = true
					state.filteredCategory = []
				}
			} catch (err) {
				return err
			}
		},
		filterByPrice(state) {
			try {
				const priceItem = state.filteredCategory.sort((a, b) =>
					a.price > b.price ? -1 : 1
				)
				state.filteredCategory = priceItem
				let count = price.length
				if (count > 1) {
					const noError = false
					state.error = noError
					if (!noError) {
						state.filteredCategory = priceItem
						sessionStorage.setItem('filteredData', JSON.stringify(priceItem))
					}
				} else {
					state.error = true
					state.filteredCategory = []
				}
			} catch (err) {
				return err
			}
		},
		filterByColor(state, action) {
			try {
				const colorItem = state.filteredCategory.filter(c =>
					c.color.includes(action.payload)
				)
				state.filteredCategory = colorItem
				sessionStorage.setItem('filteredData', JSON.stringify(colorItem))
			} catch (err) {
				return err
			}
		},
		filterBySize(state, action) {
			try {
				const sizeItem = state.filteredCategory.filter(
					s => s.size === action.payload
				)
				state.filteredCategory = sizeItem
				sessionStorage.setItem('filteredData', JSON.stringify(sizeItem))
			} catch (err) {
				return err
			}
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchProducts.pending, (state, action) => {
				state.status = 'loading'
				// state.products = action.payload
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.status = 'success'
				state.filteredCategory = action.payload
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.status = 'fail'
				state.error = action.error.message
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
