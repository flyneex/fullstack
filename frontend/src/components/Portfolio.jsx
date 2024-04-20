import { useState } from 'react'
import { CiChat1, CiHeart, CiLocationArrow1 } from 'react-icons/ci'
import { IoArrowForwardCircleOutline } from 'react-icons/io5'
import 'react-multi-carousel/lib/styles.css'
import { Link } from 'react-router-dom'
import Title from '../UI/Title'
import Tooltip from '../UI/Tooltip'
import projects from '../assets/projects'

const Portfolio = () => {
	const getLikes = () => {
		const likesStorage = localStorage.getItem('likes')
		if (likesStorage) {
			return JSON.parse(likesStorage)
		} else {
			return 0
		}
	}

	const getComments = () => {
		localStorage.getItem('comments')
	}

	const [count, setCount] = useState(getLikes())

	const handleCounter = () => {
		setCount(prev => prev + 1)
	}

	const comments = ['Nice project!', 'Looking good!', 'I like it!']
	const [comment, setComment] = useState(getComments(comments))

	const handleComment = () => {
		setComment(comments[Math.floor(Math.random() * comments.length)])
	}

	const handleShare = () => {
		alert('You are flew into space!')
	}

	localStorage.setItem('likes', count)
	localStorage.setItem('comments', comment)

	return (
		<div className='wrapper py-32 relative'>
			<Title title='Portfolio' />
			<div className='grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3 mt-5'>
				{projects.map(project => (
					<div
						key={project.id}
						className='portfolio-item rounded-3xl bg-white text-zinc-900 z-10 shadow-lg shadow-green-400 border-4 border-green-400'
					>
						<div className='overflow-hidden z-10 rounded-tl-3xl rounded-tr-3xl'>
							<img
								className='rounded-tl-3xl rounded-tr-3xl hover:scale-110 w-full h-96 object-cover transition-all duration-500'
								src={project.img}
								alt='Image project'
							/>
						</div>
						<div className='description text-left p-5 relative'>
							<div className='flex gap-3'>
								<div className='hover:text-red-500 cursor-pointer'>
									<Tooltip message={'Like'}>
										<CiHeart size={42} onClick={handleCounter} />
									</Tooltip>
								</div>
								<Tooltip message={'Comment'}>
									<CiChat1
										className='hover:text-blue-500 cursor-pointer'
										size={42}
										onClick={handleComment}
									/>
								</Tooltip>
								<Tooltip message={'Share'}>
									<CiLocationArrow1
										className='hover:text-green-500 cursor-pointer'
										size={42}
										onClick={handleShare}
									/>
								</Tooltip>
							</div>
							<div className='block pt-3 text-xl'>{count} likes</div>
							<div className='text-xl'>{comment}</div>
							<div className='mt-5 text-green-500'>
								<h5>{project.title}</h5>
							</div>
							<div className='mt-3 mb-10 text-lg'>{project.desc}</div>
							<Link
								to={`/project/${project.slug}`}
								className='absolute -right-1 -bottom-1 bg-green-500 p-3 border-black rounded-tl-3xl rounded-br-3xl'
							>
								<IoArrowForwardCircleOutline
									size={45}
									className='hover:-rotate-90 transition-all duration-500'
								/>
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Portfolio
