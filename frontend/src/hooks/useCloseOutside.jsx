import { useEffect } from 'react'

export const useCloseOutside = (ref, shutup) => {
	const handleOutside = e => {
		if (ref.current && !ref.current.contains(e.target)) {
			shutup()
		}
	}

	useEffect(() => {
		document.addEventListener('mousedown', handleOutside)

		return () => {
			document.removeEventListener('mousedown', handleOutside)
		}
	})
}
