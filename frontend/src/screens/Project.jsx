import Form from '../UI/Form'
import projects from '../assets/projects'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Project = () => {
	function convertToSlug(title) {
		return title
			.toLowerCase()
			.replace(/ /g, '-')
			.replace(/[^\w-]+/g, '')
	}

	const details = projects.find(
		project => convertToSlug(project.title) === project.slug
	)

	return (
		<>
			<Header />
			<div className='wrapper'>
				<div className='py-14 text-white text-3xl xl:flex justify-between gap-44'>
					<img className='w-1/2 rounded-3xl' src={details.img} alt='' />
					<div className='w-1/2'>
						<div className='mb-10'>
							<h3>{details.title}</h3>
						</div>
						<div className='mb-10'>{details.desc}</div>
						<div>
							<a href={details.url} target='_blank'>
								Take a look
							</a>
						</div>
					</div>
				</div>
			</div>
			<Form />
			<Footer />
		</>
	)
}

export default Project
