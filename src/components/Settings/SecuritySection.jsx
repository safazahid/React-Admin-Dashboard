import React from 'react'
import { Lock } from 'lucide-react';
import SettingsSection from './SettingsSection'
import ToggleButton from './ToggleButton'

const SecuritySection = () => {
  const [twoFactor, setTwoFactor] = React.useState(false)
  return (
    <SettingsSection icon={Lock} title={'Security'} >
      <ToggleButton
        label={'Two-Factor Authentication'}
        isOn={twoFactor}
        onToggle={() => setTwoFactor(!twoFactor)}
      />
      <div className='mt-4'>
        <button className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200'> 
          Change Password
        </button>
      </div>
    </SettingsSection>
  )
}

export default SecuritySection
