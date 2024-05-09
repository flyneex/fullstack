import { useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'
import Footer from '../Footer'
import Navbar from '../shop/Navbar'

const Dashboard = () => {
	const auth = useSelector(state => state.auth)

	if (!auth.isAdmin) return <div>Access denied</div>
	return (
		<>
			<Navbar />
			<div className='flex wrapper'>
				<div className='sidebar basis-[20%]'>
					<div className='text-left mb-5 gap-3 flex items-center'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='16'
							height='16'
							fill='#fff'
							className='bi bi-people'
							viewBox='0 0 16 16'
						>
							<path d='M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4' />
						</svg>
						<NavLink
							className={({ isActive }) =>
								`text-xl font-black ${isActive ? 'text-red-700' : 'text-white'}`
							}
							to='users'
						>
							Users
						</NavLink>
					</div>
					<div className='text-left mb-5 flex gap-3 flex items-center'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='16'
							height='16'
							fill='#fff'
							className='bi bi-box2'
							viewBox='0 0 16 16'
						>
							<path d='M2.95.4a1 1 0 0 1 .8-.4h8.5a1 1 0 0 1 .8.4l2.85 3.8a.5.5 0 0 1 .1.3V15a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4.5a.5.5 0 0 1 .1-.3zM7.5 1H3.75L1.5 4h6zm1 0v3h6l-2.25-3zM15 5H1v10h14z' />
						</svg>
						<NavLink
							className={({ isActive }) =>
								`text-xl font-black ${isActive ? 'text-red-700' : 'text-white'}`
							}
							to='products'
						>
							Products
						</NavLink>
					</div>
					<div className='text-left mb-5 flex gap-3 flex items-center'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='16'
							height='16'
							fill='#fff'
							className='bi bi-graph-down'
							viewBox='0 0 16 16'
						>
							<path
								fillRule='evenodd'
								d='M0 0h1v15h15v1H0zm14.817 11.887a.5.5 0 0 0 .07-.704l-4.5-5.5a.5.5 0 0 0-.74-.037L7.06 8.233 3.404 3.206a.5.5 0 0 0-.808.588l4 5.5a.5.5 0 0 0 .758.06l2.609-2.61 4.15 5.073a.5.5 0 0 0 .704.07'
							/>
						</svg>
						<NavLink
							className={({ isActive }) =>
								`text-xl font-black ${isActive ? 'text-red-700' : 'text-white'}`
							}
							to='summary'
						>
							Summary
						</NavLink>
					</div>
					<div className='text-left mb-5 flex gap-3 flex items-center'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='16'
							height='16'
							fill='#fff'
							className='bi bi-basket'
							viewBox='0 0 16 16'
						>
							<path d='M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9zM1 7v1h14V7zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5' />
						</svg>
						<NavLink
							className={({ isActive }) =>
								`text-xl font-black ${isActive ? 'text-red-700' : 'text-white'}`
							}
							to='orders'
						>
							Orders
						</NavLink>
					</div>
				</div>
				<div className='content basis-[80%]'>
					<Outlet />
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Dashboard
