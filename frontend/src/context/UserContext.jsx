import { createContext, useState } from 'react'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState({
		name: 'Guest01',
	})
	const [modal, setModal] = useState(false)
	const [menu, setMenu] = useState(false)

	const handlerLogin = () => {
		// const prompt = prompt('Type your name')
		user.name === 'friend'
			? setUser({
					name: 'Guest01',
			  })
			: setUser({ name: 'friend' })
	}

	const handlerModal = () => {
		setModal(prev => !prev)
	}

	const handleBar = () => {
		setMenu(!menu)
	}

	const value = {
		user,
		setUser,
		handlerLogin,
		handlerModal,
		modal,
		menu,
		setMenu,
		setModal,
		handleBar,
	}

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
