import { useState } from 'react'

const Tooltip = ({ message, children }) => {
	const [isVisible, setIsVisible] = useState(false)

	return (
		<div
			className='tooltip'
			onMouseEnter={() => setIsVisible(true)}
			onMouseLeave={() => setIsVisible(false)}
		>
			{isVisible && <span className='tip'>{message}</span>}
			{children}
		</div>
	)
}

export default Tooltip
