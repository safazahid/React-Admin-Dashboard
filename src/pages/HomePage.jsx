import React from 'react'
import {Zap, Users, ShoppingBag, BarChart2} from 'lucide-react'
import {motion} from 'framer-motion'

import Header from '../components/Common/Header'
import StatsChart from '../components/Common/StatsChart'
import SalesOverviewChart from '../components/Overview/SalesOverviewChart'
import CategoryDistributionChart from '../components/Overview/CategoryDistributionChart'
import SalesChannelChart from '../components/Overview/SalesChannelChart'

const HomePage = () => {
  return (
    <div className=' flex-1 relative z-10 overflow-auto'>
      <Header title= "Overview" />
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8 xl:px-8'>
        <motion.div
          className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
          initial={{opacity: 0, y:20}}
          animate={{opacity: 1, y:0}}
          transition={{duration: 1}}
        >
         <StatsChart name='Total Sales' icon={Zap} value= '$12,500' color='6366F1'/>
         <StatsChart name='New Users' icon={Users} value='1,234' color='#8B5CF6' />
				 <StatsChart name='Total Products' icon={ShoppingBag} value='567' color='#EC4899' />
				 <StatsChart name='Conversion Rate' icon={BarChart2} value='12.5%' color='#10B981' />
        </motion.div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <SalesOverviewChart/>
          <CategoryDistributionChart/>
          <SalesChannelChart/>
        </div>
      </main>
    </div>
  )
}

export default HomePage
