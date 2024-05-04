import { Link } from 'react-router-dom'
import Navbar from '../shop/Navbar'

const Dashboard = () => {
	return (
		<>
			<Navbar />
			<div className='flex'>
				<div className='sidebar'>
					<div>
						<Link to='users'>Users</Link>
					</div>
					<div>
						<Link to='products'>Products</Link>
					</div>
					<div>
						<Link to='summary'>Summary</Link>
					</div>
				</div>
				<div className='content'>Dashboard</div>
			</div>
		</>
	)
}

export default Dashboard
