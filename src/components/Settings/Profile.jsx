import React from 'react'
import SettingsSection from './SettingsSection'
import { User } from 'lucide-react'

const Profile = () => {
  return (
    <SettingsSection icon={User} title={'Profile'}>
      <div className='flex flex-col sm:flex-row items-center mb-6'>
        <img 
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO6hHTSjHsKKlzU-s6F4Sgq2jXEL65w-eQlg&s' 
          alt='Profile'
          className='rounded-full w-20 h-20 object-cover mr-4'
        />
        <div>
          <h3 className='text-lg font-semibold text-gray-100'> John Doe</h3>
          <p className='text-gray-400'>john.doe@example.com</p>
        </div>
      </div>
      <button className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto'>
				Edit Profile
			</button>
    </SettingsSection>
  )
}

export default Profile
