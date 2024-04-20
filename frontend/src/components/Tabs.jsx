import cn from 'classnames'
import { useState } from 'react'
import Title from '../UI/Title'
import tabs from '../assets/tabs'

const Tabs = () => {
	const [currentTab, setCurrentTab] = useState(1)

	return (
		<div className='wrapper relative pt-40 pb-20'>
			<Title title='Links' />
			<div className='tabs xl:flex gap-3 relative'>
				{tabs.map(tab => (
					<div
						key={tab.id}
						id={tab.id}
						onClick={() => setCurrentTab(tab.id)}
						className={cn(
							'tab cursor-pointer border p-3 text-slate-300 w-32 rounded-sm text-center',
							{
								'active-tab border bg-green-600': currentTab === tab.id,
								border: currentTab != tab.id,
							}
						)}
					>
						{tab.tab}
					</div>
				))}
			</div>
			<div className='content text-slate-300'>
				{tabs.map(tab => (
					<div
						key={tab.id}
						id={tab.id}
						className={cn(
							'active-pane',
							currentTab === tab.id
								? 'opacity-100 overflow-visible h-full py-10'
								: 'opacity-0 overflow-hidden h-0'
						)}
					>
						<div className='mb-5 text-2xl'>{tab.title}</div>
						<div>{tab.content}</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Tabs
