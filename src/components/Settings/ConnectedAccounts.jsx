import React from 'react'
import { HelpCircle, Plus } from 'lucide-react'
import SettingsSection from './SettingsSection'

const ConnectedAccounts = () => {
  const [connectedAccounts, setConnectedAccounts] = React.useState([
		{
			id: 1,
			name: "Google",
			connected: true,
			icon: "/google.png",
		},
		{
			id: 2,
			name: "Facebook",
			connected: false,
			icon: "/facebook.svg",
		},
		{
			id: 3,
			name: "Twitter",
			connected: true,
			icon: "/x.png",
		},
	]);
  return (
    <SettingsSection icon={HelpCircle} title={'Connected Accounts'} >
      {connectedAccounts.map((accounts) => (

        <div key={accounts.id} className='flex items-center justify-between py-3'>
          <div className='flex gap-1'>
            <img src={accounts.icon} alt='Social img' className='size-6 object-cover rounded-full mr-2'/>
            <span className='text-gray-300'>{accounts.name}</span>
          </div>
          <button
            className={`px-3 py-1 rounded 
            ${ accounts.connected ? "bg-green-600 hover:bg-green-700" : "bg-gray-600 hover:bg-gray-700"
						} transition duration-200`}
            onClick={() => {
              setConnectedAccounts(
                connectedAccounts.map((acc) => { if (acc.id === accounts) {
                  return {
                    ...acc,
                    connected: !accounts.connected
                  }
                }}
              ))
            }}
          >
            {accounts.connected ? 'Connected' : 'Connect'}
          </button>
        </div>
      ))}
      <button className='mt-4 flex items-center text-indigo-400 hover:text-indigo-300 transition duration-200'>
				<Plus size={18} className='mr-2' /> Add Account
			</button>
    </SettingsSection>
  )
}

export default ConnectedAccounts
