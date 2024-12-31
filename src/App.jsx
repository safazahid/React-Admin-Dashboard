import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ProductsPage from "./pages/ProductsPage"
import Sidebar  from "./components/Sidebar"
import UserPage from "./pages/UserPage"
import SalesPage from "./pages/SalesPage"
import OrdersPage from "./pages/OrdersPage"
import AnalyticsPage from "./pages/AnalyticsPage"
import SettingsPage from "./pages/SettingsPage"

function App() {

  return (
   <div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80" />
      <div className="absolute inset-0 backdrop-blur-sm"/>
    </div>

    <Sidebar/>
    <div className="flex-1 overflow-auto z-10">
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/products" element={<ProductsPage/>} />
      <Route path="/users" element={<UserPage/>} />
      <Route path="/sales" element={<SalesPage/>} />
      <Route path="/orders" element={<OrdersPage/>} />
      <Route path="/analytics" element={<AnalyticsPage/>} />
      <Route path="/settings" element={<SettingsPage/>} />
    </Routes>
    </div>
   </div>
  )
}

export default App