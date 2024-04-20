import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		user: JSON.parse(sessionStorage.getItem('login')) || {
			name: '',
			password: '',
			imgUrl: '',
			auth: false,
		},
	},
	reducers: {
		login: (state, action) => {
			state.user = action.payload
			if (!action.payload.name && !action.payload.password) {
				state.user.auth = false
			} else {
				state.user.auth = true
				const saveState = JSON.stringify(action.payload)
				sessionStorage.setItem('login', saveState)
			}
		},
		logout: (state, action) => {
			state.user = {
				name: '',
				password: '',
				imgUrl: '',
				auth: false,
			}
			sessionStorage.clear()
		},
	},
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
