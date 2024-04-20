import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
	name: 'counter',
	initialState: { value: 0 },
	reducers: {
		increment: state => {
			state.value++
		},
		decrement: state => {
			state.value--
		},
		incrementByAmount: (state, action) => {
			state.value += action.payload
		},
	},
	extraReducers: builder => {
		builder.addCase(incrementAsync.fulfilled, (state, action) => {
			state.value += action.payload
		})
	},
})

export const incrementAsync = createAsyncThunk(
	'counter/incrementAsync',
	async amount => {
		await new Promise(resolve => setTimeout(resolve, 1000))
		return amount
	}
)

// export const getCounter = state => state.counter.value
export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer
