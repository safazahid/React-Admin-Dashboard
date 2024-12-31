import React from 'react'
import {motion} from 'framer-motion'
import {Package,TrendingUp,AlertTriangle,DollarSign} from 'lucide-react'
import Header from '../components/Common/Header'
import StatsChart from '../components/Common/StatsChart'
import CategoryDistributionChart from '../components/Overview/CategoryDistributionChart'
import ProductTable from '../components/Products/ProductTable'
import SalesTrendChart from '../components/Products/SalesTrendChart'

const ProductsPage = () => {
  return (
    <div className=' flex-1 relative z-10 overflow-auto'>
      <Header title="Products"/>
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8 xl:px-8'>
        <motion.div
          className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
          initial={{opacity: 0, y:20}}
          animate={{opacity: 1, y:0}}
          transition={{duration: 1}}
        >
          <StatsChart name='Total Products' icon={Package} value={1234} color='#6366F1' />
					<StatsChart name='Top Selling' icon={TrendingUp} value={89} color='#10B981' />
					<StatsChart name='Low Stock' icon={AlertTriangle} value={23} color='#F59E0B' />
					<StatsChart name='Total Revenue' icon={DollarSign} value={"$543,210"} color='#EF4444' />
        </motion.div>
        <ProductTable/>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <SalesTrendChart/>
          <CategoryDistributionChart/>
        </div>
      </main>
    </div>
  )
}

export default ProductsPage
