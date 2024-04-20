import Title from '../UI/Title'

const Advantages = () => {
	return (
		<div className='wrapper relative pt-40 xl:pt-52 pb-32'>
			<Title title='Advantages' />
			<div className='a-box text-white grid grid-cols-1 gap-7 lg:grid-cols-2 xl:grid-cols-3 z-1 relative'>
				<div>
					<h5>Strong coding skills</h5>
					<p>
						This includes knowledge of programming languages such as JavaScript,
						and most popular library React, which are commonly used in web
						development.
					</p>
				</div>
				<div>
					<h5>Familiarity with web development frameworks</h5>
					<p>
						These frameworks provide pre-written code and libraries that can
						help speed up the development process, such as React, Angular, and
						Vue.js.
					</p>
				</div>
				<div>
					<h5>User Experience (UX) and User Interface (UI) design skills</h5>
					<p>
						Knowing how to create visually appealing and user-friendly
						interfaces can enhance the user experience and increase engagement.
					</p>
				</div>
				<div>
					<h5>Problem-solving skills</h5>
					<p>
						Being able to identify and troubleshoot problems with code or
						website functionality is essential in web development.
					</p>
				</div>
				<div>
					<h5>Time management skills</h5>
					<p>
						The ability to manage time effectively can ensure that projects are
						completed on time and within budget.
					</p>
				</div>
				<div>
					<h5>Knowledge of web security</h5>
					<p>
						Understanding how to implement security measures, such as SSL
						certificates and firewalls, can help protect the website and its
						users from potential threats.
					</p>
				</div>
				<div>
					<h5>Communication skills</h5>
					<p>
						Working with clients or team members requires strong communication
						skills to understand their needs and provide updates on project
						progress.
					</p>
				</div>
			</div>
		</div>
	)
}

export default Advantages
