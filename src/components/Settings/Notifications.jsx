import React from 'react'
import SettingsSection from './SettingsSection'
import { Bell } from 'lucide-react'
import ToggleButton from './ToggleButton'

const Notifications = () => {
  const [notification, setNotification] = React.useState({
    push:true,
    email:false,
    sms:true
  })
  return (
    <SettingsSection icon={Bell} title={'Notifications '} >
      <ToggleButton
        label={'Push Notifications'}
        isOn={notification.push}
				onToggle={() => setNotification({ ...notification, push: !notification.push })}
      />
      <ToggleButton
        label={'Email Notifications'}
        isOn={notification.email}
				onToggle={() => setNotification({ ...notification, email: !notification.email })}
      /><ToggleButton
      label={'SMS Notifications'}
      isOn={notification.sms}
      onToggle={() => setNotification({ ...notification, email: !notification.email })}
      />
    </SettingsSection>
  )
}

export default Notifications
