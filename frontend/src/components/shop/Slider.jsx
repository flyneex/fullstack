import { useDispatch, useSelector } from 'react-redux'
import slider from '../../assets/slider'
import { dots, nextSlide, prevSlide } from '../../store/slider.slice.js'

const Slider = () => {
	const slideIndex = useSelector(state => state.slider.value)
	console.log(slideIndex)
	const dispatch = useDispatch()
	return (
		<div className='wrapper'>
			{slider.map((slide, idx) => (
				<div
					className={
						slide.id === slideIndex
							? 'opacity-100 w-full duration-300 relative bg-gradient-to-b from-[#2f3f7b00] to-[#1f2e69] mb-16'
							: 'opacity-0'
					}
					key={idx}
				>
					{slide.id === slideIndex && (
						<img
							src={slide.img}
							alt='Slider1'
							className='w-full h-[500px] rounded-lg'
						/>
					)}
					{slide.id === slideIndex && slide.text && (
						<div className='absolute bottom-10 left-1/2 translate-x-[-50%] w-full'>
							<p className='shadow-sm text-4xl text-white font-black uppercase  text-center'>
								{slide.text}
							</p>
						</div>
					)}
					<button
						className='absolute left-0 top-1/2 -translate-y-1/2'
						onClick={() => dispatch(prevSlide(slideIndex - 1))}
					>
						Prev
					</button>
					<button
						className='absolute right-0 top-1/2 -translate-y-1/2'
						onClick={() => dispatch(nextSlide(slideIndex + 1))}
					>
						Next
					</button>
					<div className='absolute bottom-0 flex gap-3 left-1/2 translate-x-[-50%]'>
						{slider.map((dot, idx) => (
							<div
								key={idx}
								className={
									dot.id === slideIndex
										? 'bg-blue-500 w-[15px] h-[15px] rounded-full'
										: 'bg-white w-[15px] h-[15px] rounded-full cursor-pointer'
								}
								onClick={() => dispatch(dots(dot.id))}
							></div>
						))}
					</div>
				</div>
			))}
		</div>
	)
}

export default Slider
