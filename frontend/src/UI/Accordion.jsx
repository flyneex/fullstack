import { useState } from 'react'
import answers from '../assets/answers.js'
import Title from './Title.jsx'

const Accordion = ({ title, content }) => {
	const [isOpen, setIsOpen] = useState(false)
	const [id, setId] = useState(1)
	return (
		<div className='relative wrapper pt-40 pb-20'>
			<Title title='FAQ' />
			{answers.map(answer => (
				<div className='acc-item mb-10' id={answer.id} key={answer.id}>
					<div onClick={() => setId(answer.id)}>
						<div
							className='title flex justify-between items-center cursor-pointer border-b border-indigo-300 py-2'
							onClick={() => setIsOpen(!isOpen)}
						>
							<h5 className='color-white'>{answer.title}</h5>
							<span style={{ fontSize: '45px', display: 'inline-block' }}>
								{isOpen && id === answer.id ? '-' : '+'}
							</span>
						</div>
					</div>
					<div
						className={`content grid text-white transition-all ${
							isOpen === true && id === answer.id
								? 'grid-rows-[1fr] opacity-100'
								: 'grid-rows-[0fr] opacity-0'
						}`}
					>
						<div className='overflow-hidden text-2xl'>
							<p className='pt-5'>{answer.content}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default Accordion
