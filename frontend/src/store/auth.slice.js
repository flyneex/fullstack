import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'

export const registerUser = createAsyncThunk(
	'auth/registerUser',
	async (user, { rejectedWithValue }) => {
		try {
			const token = await axios.post('http://localhost:8080/api/register', {
				name: user.name,
				email: user.email,
				password: user.password,
			})
			localStorage.setItem('token', token.data)
			return token.data
		} catch (err) {
			console.log(err.response.data)
			return rejectedWithValue(err.response.data)
		}
	}
)

export const loginUser = createAsyncThunk(
	'auth/loginUser',
	async (user, { rejectedWithValue }) => {
		try {
			const token = await axios.post('http://localhost:8080/api/login', {
				email: user.email,
				password: user.password,
			})
			localStorage.setItem('token', token.data)
			return token.data
		} catch (err) {
			console.log(err.response.data)
			return rejectedWithValue(err.response.data)
		}
	}
)

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		token: localStorage.getItem('token'),
		_id: '',
		name: '',
		email: '',
		registerStatus: '',
		registerError: '',
		loginStatus: '',
		loginError: '',
		userLoaded: false,
	},
	reducers: {
		loadUser: state => {
			const token = state.token

			if (token) {
				const user = jwtDecode(token)

				return {
					...state,
					token,
					name: user.name,
					email: user.email,
					_id: user._id,
					userLoaded: true,
				}
			}
		},
		logoutUser: state => {
			localStorage.removeItem('token')

			return {
				...state,
				token: '',
				_id: '',
				name: '',
				email: '',
				registerStatus: '',
				registerError: '',
				loginStatus: '',
				loginError: '',
				userLoaded: false,
			}
		},
	},
	extraReducers: builder => {
		builder
			.addCase(registerUser.pending, (state, action) => {
				return { ...state, registerStatus: 'pending' }
			})
			.addCase(registerUser.fulfilled, (state, action) => {
				if (action.payload) {
					const user = jwtDecode(action.payload)
					return {
						...state,
						token: action.payload,
						name: user.name,
						email: user.email,
						_id: user._id,
						registerStatus: 'success',
					}
				} else {
					return state
				}
			})
			.addCase(registerUser.rejected, (state, action) => {
				return {
					...state,
					registerStatus: 'rejected',
					registerError: action.payload,
				}
			})
			.addCase(loginUser.pending, (state, action) => {
				return { ...state, loginStatus: 'pending' }
			})
			.addCase(loginUser.fulfilled, (state, action) => {
				if (action.payload) {
					const user = jwtDecode(action.payload)
					return {
						...state,
						token: action.payload,
						name: user.name,
						email: user.email,
						_id: user._id,
						loginStatus: 'success',
					}
				} else {
					return state
				}
			})
			.addCase(loginUser.rejected, (state, action) => {
				return {
					...state,
					loginStatus: 'rejected',
					loginError: action.payload,
				}
			})
	},
})

export const { loadUser, logoutUser } = authSlice.actions
export default authSlice.reducer
