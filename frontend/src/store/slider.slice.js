import { createSlice } from '@reduxjs/toolkit'
import slider from '../assets/slider'

const sliderSlice = createSlice({
	name: 'slider',
	initialState: {
		value: 1,
		length: slider.length,
	},
	reducers: {
		prevSlide: (state, action) => {
			state.value = action.payload < 1 ? state.length : action.payload
		},
		nextSlide: (state, action) => {
			state.value = action.payload > state.length ? 1 : action.payload
		},
		dots: (state, action) => {
			const slide = action.payload
			state.value = slide
		},
	},
})

export const { prevSlide, nextSlide, dots } = sliderSlice.actions
export default sliderSlice.reducer
