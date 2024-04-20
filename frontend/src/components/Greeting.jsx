import cn from 'classnames'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'
import Photo from '/images/0e20.png'
import JavaScript from '/images/javascript.svg'
import React from '/images/react.svg'

const Greeting = () => {
	const [text, setText] = useState('')
	const [loop, setLoop] = useState(0)
	const [greeting] = useState([
		'Web Developer',
		'React Developer',
		'JS Developer',
	])
	const [isDeleting, setIsDeleting] = useState(false)
	const [delta, setDelta] = useState(300 - Math.random() * 100)
	const period = 2000

	useEffect(() => {
		const ticker = setInterval(() => {
			tick()
		}, delta)
		return () => clearInterval(ticker)
	}, [text])

	const tick = () => {
		const i = loop % greeting.length
		const fullText = greeting[i]
		const updatedText = isDeleting
			? fullText.substring(0, text.length - 1)
			: fullText.substring(0, text.length + 1)

		setText(updatedText)

		if (isDeleting) {
			setDelta(prev => prev / 2)
		}

		if (!isDeleting && updatedText === fullText) {
			setIsDeleting(true)
			setDelta(period)
		} else if (isDeleting && updatedText == '') {
			setIsDeleting(false)
			setLoop(loop + 1)
			setDelta(500)
		}
	}

	const { user } = useContext(UserContext)

	return (
		<div className='wrapper relative billboard-item pt-40 text-white grid grid-cols-1 items-center gap-10 z-10 xl:grid-cols-3'>
			<h2 className='my-14 w-full gradient text-5xl absolute top-0 text-center -z-10 lg:text-7xl xl:text-9xl xl:top-10'>
				I'm {text}
			</h2>
			<div className='tech justify-between col-span-1 hidden xl:flex'>
				<img
					className='levitate-react'
					src={React}
					style={{ width: '150px', height: '150px' }}
					alt=''
				/>
				<img
					className='levitate-javascript rounded-lg'
					src={JavaScript}
					style={{ width: '100px', height: '100px' }}
					alt=''
				/>
			</div>
			<div className='billboard-image flex justify-center order-1'>
				<img className='w-96' src={Photo} alt='My photo' />
			</div>
			<div className='greeting-text text-2xl xl:order-1'>
				<h2>
					Welcome{' '}
					<code
						className={cn({
							'bg-red-800 p-1 rounded-sm': user.name === 'friend',
						})}
					>
						{user.name}
					</code>{' '}
					to my website!
				</h2>

				<p className='text-xl mt-10'>
					Hi! You can observe my works in portfolio below. I like create
					wonderful apps that help to people. I hope you will found for you
					something good for you! Have a nice day!
				</p>
			</div>
		</div>
	)
}

export default Greeting
