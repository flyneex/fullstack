import cn from 'classnames'

const Button = ({ text, type, variant, disabled }) => {
	return (
		<button
			className={cn('gradient-static bg-transparent hover:border-white w-36', {
				'text-slate-700': variant === 'dark',
				'border-slate-700': variant === 'dark',
				'text-white': variant === 'light',
				'border-white': variant === 'light',
			})}
			type={type}
			disabled={disabled}
		>
			{text}
		</button>
	)
}

export default Button
