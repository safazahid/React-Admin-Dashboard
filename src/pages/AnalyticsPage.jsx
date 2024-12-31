import React from 'react'
import Header from '../components/Common/Header'
import OverviewCard from '../components/Analytics/OverviewCard'
import RevenueChart from '../components/Analytics/RevenueChart'
import ProductsPerformance from '../components/Analytics/ProductsPerformance'
import UserRetention from '../components/Analytics/UserRetention'
import CustomerSegmentation from '../components/Analytics/CustomerSegmentation'
import ChannelPerformance from '../components/Analytics/ChannelPerformance'
import AIPoweredInsights from '../components/Analytics/AIPoweredInsights'

const AnalyticsPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
      <Header title="Analytics Dashboard"/>

      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
          <OverviewCard/>
          <RevenueChart/>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8'>
          <ChannelPerformance/>
          <ProductsPerformance/>
          <UserRetention/>
          <CustomerSegmentation/>
        </div>  
        <AIPoweredInsights/>
      </main>
    </div> 
  )
}

export default AnalyticsPage
