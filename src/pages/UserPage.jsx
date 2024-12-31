import React from 'react'
import {motion} from 'framer-motion'
import { UserCheck, UserPlus, UsersIcon, UserX } from "lucide-react";
import StatsChart from '../components/Common/StatsChart'
import Header from '../components/Common/Header'
import UserTable from '../components/Users/UserTable';
import UserGrowthChart from '../components/Users/UserGrowthChart';
import UserActivityHeatmap from '../components/Users/UserActivityHeatmap';
import UserDemographicChart from '../components/Users/UserDemographicChart';

const userStats = {
	totalUsers: 152845,
	newUsersToday: 243,
	activeUsers: 98520,
	churnRate: "2.4%",
};

const UserPage = () => {
  
  return (
    <div className=' flex-1 relative z-10 overflow-auto'>
      <Header title="Users"/>
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8 xl:px-8'>
        <motion.div
          className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
          initial={{opacity: 0, y:20}}
          animate={{opacity: 1, y:0}}
          transition={{duration: 1}}
        >
          <StatsChart
              name='Total Users'
              icon={UsersIcon}
              value={userStats.totalUsers.toLocaleString()}
              color='#6366F1'
            />
            <StatsChart name='New Users Today' icon={UserPlus} value={userStats.newUsersToday} color='#10B981' />
            <StatsChart
              name='Active Users'
              icon={UserCheck}
              value={userStats.activeUsers.toLocaleString()}
              color='#F59E0B'
            />
            <StatsChart name='Churn Rate' icon={UserX} value={userStats.churnRate} color='#EF4444' />
        </motion.div>
        <UserTable/>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8'>
          <UserGrowthChart/>
          <UserActivityHeatmap/>
          <div className="lg:col-span-2">
          <UserDemographicChart/>
          </div>
        </div>
      </main>
   </div>
  )
}

export default UserPage
