import cn from 'classnames'
import { useContext, useRef } from 'react'
import { FaBarsStaggered } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import Button from '../UI/Button'
import { UserContext } from '../context/UserContext'
import { useCloseOutside } from '../hooks/useCloseOutside'
import Instagram from '/images/instagram-2.svg'
import Lightning from '/images/lightning.png'
import React from '/images/react.svg'

const Header = () => {
	const { handlerLogin, user, handlerModal, handleBar, menu, setMenu } =
		useContext(UserContext)
	const menuRef = useRef(null)
	useCloseOutside(menuRef, () => {
		if (menu) {
			setTimeout(() => setMenu(false), 50)
		}
	})

	return (
		<header className='wrapper flex justify-between items-center py-10 border-b-0'>
			<div className='flex gap-5 items-center'>
				<img src={Lightning} alt='ReactLogo' style={{ width: '45px' }} />
				<div className='text-white text-3xl'>ReactStudio</div>
			</div>
			<div
				ref={menuRef}
				className={cn(
					`z-30 absolute bg-black xl:bg-transparent xl:p-0 p-14 rounded-2xl top-0 -right-72 xl:right-0 xl:flex xl:gap-20 xl:relative items-center ${
						menu ? 'active-menu' : ''
					}`,
					{
						// '-translate-x-72 transition-all xl:-translate-x-0': menu === true,
						// 'translate-x-72 transition-all xl:translate-x-0': menu === false,
					}
				)}
			>
				<div className=''>
					<nav className='lg:block'>
						<ul className='xl:flex gap-5 text-xl'>
							<li className='mb-5 xl:m-0'>
								<Link className='text-white' to='/'>
									Home
								</Link>
							</li>
							<li className='mb-5 xl:m-0'>
								<Link className='text-white' to='/page'>
									Sample Page
								</Link>
							</li>
							<li className='mb-5 xl:m-0'>
								<Link className='text-white' to='/blog'>
									Blog
								</Link>
							</li>
							<li className='mb-5 xl:m-0'>
								<Link className='text-white' to='/shop'>
									Shop
								</Link>
							</li>
						</ul>
					</nav>
				</div>
				<div className='gap-10 xl:flex'>
					<div className='social-hover'>
						<a href='#'>
							<img
								className='hover:scale-90 transition-all my-10 xl:m-0'
								src={Instagram}
								alt='Instagram'
								style={{ width: '45px' }}
							/>
						</a>
					</div>
					<div className='xl:flex gap-5'>
						<div onClick={handlerModal} className='mb-5 xl:m-0'>
							<Button variant='light' text='Get in touch' />
						</div>
						<div onClick={handlerLogin}>
							<Button
								variant='light'
								text={user.name === 'Guest01' ? 'Login' : 'Logout'}
								className='bg-lime-500'
							/>
						</div>
					</div>
				</div>
			</div>
			<div className='cursor-pointer block xl:hidden' onClick={handleBar}>
				<FaBarsStaggered size='45' className='text-white' />
			</div>
		</header>
	)
}

export default Header
