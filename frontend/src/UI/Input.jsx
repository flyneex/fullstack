import React from 'react'

const Input = React.forwardRef((props, ref) => {
	const { type, placeholder, value, name, onChange } = props

	return (
		<input
			ref={ref}
			value={value}
			name={name}
			className='block mb-5 text-center drop-shadow-2xl outline-none rounded-lg p-5 w-full opacity-50'
			type={type}
			placeholder={placeholder}
			onChange={onChange}
		/>
	)
})

export default Input
