import { Link, Outlet } from 'react-router-dom'
import Navbar from '../shop/Navbar'

const Dashboard = () => {
	return (
		<>
			<Navbar />
			<div className='flex'>
				<div className='sidebar basis-[20%]'>
					<div>
						<Link
							className={({ isActive }) => (isActive ? 'active' : '')}
							to='users'
						>
							Users
						</Link>
					</div>
					<div>
						<Link
							className={({ isActive }) => (isActive ? 'active' : '')}
							to='products'
						>
							Products
						</Link>
					</div>
					<div>
						<Link
							className={({ isActive }) => (isActive ? 'active' : '')}
							to='summary'
						>
							Summary
						</Link>
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
