import React from 'react'
import {PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend} from 'recharts'
import {motion} from 'framer-motion'

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088FE"];

const userDemographicsData = [
	{ name: "18-24", value: 20 },
	{ name: "25-34", value: 30 },
	{ name: "35-44", value: 25 },
	{ name: "45-54", value: 15 },
	{ name: "55+", value: 10 },
];

const UserDemographicChart = () => {
  return (
    <div>
      <motion.div
        className='lg:col-span-2 gap-6 bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 '
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
      <h2 className='text-lg font-medium text-gray-100 mb-4'>
        User Demographics 
      </h2>
      <div className='h-80'  >
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={userDemographicsData}
              dataKey="value"
              cx={'50%'}
              cy={'50%'}
              labelLine={true}
              outerRadius={80}
              fill='#8884d8'
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {userDemographicsData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
              ))}
            </Pie>
            <Tooltip
              contentStyle={{ backgroundColor: "rgba(31, 41, 55, 0.8)", borderColor: "#4B5563" }}
							itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend/>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
    </div>
  )
}

export default UserDemographicChart
