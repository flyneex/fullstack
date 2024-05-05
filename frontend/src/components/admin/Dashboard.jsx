import { NavLink, Outlet } from 'react-router-dom'
import Navbar from '../shop/Navbar'

const Dashboard = () => {
	return (
		<>
			<Navbar />
			<div className='flex'>
				<div className='sidebar basis-[20%]'>
					<div>
						<NavLink
							className={({ isActive }) =>
								isActive ? 'text-red-700' : 'text-white'
							}
							to='users'
						>
							Users
						</NavLink>
					</div>
					<div>
						<NavLink
							className={({ isActive }) =>
								isActive ? 'text-red-700' : 'text-white'
							}
							to='products'
						>
							Products
						</NavLink>
					</div>
					<div>
						<NavLink
							className={({ isActive }) =>
								isActive ? 'text-red-700' : 'text-white'
							}
							to='summary'
						>
							Summary
						</NavLink>
					</div>
				</div>
				<div className='content basis-[80%]'>
					<Outlet />
				</div>
			</div>
		</>
	)
}

export default Dashboard
