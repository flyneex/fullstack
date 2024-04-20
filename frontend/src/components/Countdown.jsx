import React, { useEffect, useRef, useState } from 'react'

const Countdown = () => {
	const finish = new Date('2024-03-22 00:00:00')
	const diff = finish - Date.now()
	const [countdown, setCountdown] = useState(diff)
	const countdownTimer = useRef()

	const formatTime = time => {
		let tseconds = Math.floor(time / 1000)
		let tminutes = Math.floor(tseconds / 60)
		let thours = Math.floor(tminutes / 60)
		let tdays = Math.floor(thours / 24)

		let seconds = tseconds % 60
		let minutes = tminutes % 60
		let hours = thours % 24
		let days = tdays % 24

		// if (hours < 10) hours = '0' + hours
		if (minutes < 10) minutes = '0' + minutes
		if (seconds < 10) seconds = '0' + seconds

		return (
			<div className='wrapper'>
				<h3 className='text-4xl text-white text-center drop-shadow-xl mb-14'>
					My B-Day will come in
				</h3>
				<div className='countdown-form text-white xl:flex justify-center gap-10'>
					<div>
						<p>{days}</p> days
					</div>
					<div>
						<p>{hours}</p> hours
					</div>
					<div>
						<p>{minutes}</p> minutes
					</div>
					<div>
						<p>{seconds}</p> seconds
					</div>
					{/* `${hours} hours : ${minutes} minutes : ${seconds} seconds` */}
				</div>
			</div>
		)
	}

	useEffect(() => {
		countdownTimer.current = setInterval(() => {
			setCountdown(prev => prev - 1000)
		}, 1000)
		return () => clearInterval(countdownTimer.current)
	}, [countdown])

	useEffect(() => {
		if (countdown == finish) {
			// setCountdown(0)
			clearInterval(countdownTimer.current)
		}
	}, [countdown])

	return (
		<div className='countdown-item py-20 flex justify-center gap-10'>
			{formatTime(countdown)}
		</div>
	)
}

export default Countdown
