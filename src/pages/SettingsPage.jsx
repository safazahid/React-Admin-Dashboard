import React from 'react'
import {motion} from 'framer-motion'
import Header from '../components/Common/Header'
import Profile from '../components/Settings/Profile'
import Notifications from '../components/Settings/Notifications'
import SecuritySection from '../components/Settings/SecuritySection'
import ConnectedAccounts from '../components/Settings/ConnectedAccounts'
import DangerZone from '../components/Settings/DangerZone'

const SettingsPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title="Settings"/>
      <main className='max-w-3xl mx-auto py-6 px-4 lg:px-8'>
        <Profile/>
        <Notifications/>
        <SecuritySection/>
        <ConnectedAccounts/>
        <DangerZone/>
      </main>
      </div> 
  )
}

export default SettingsPage
