import { Button } from 'antd'
import Title from 'antd/es/skeleton/Title'
import React from 'react'
import { useAuthContext } from '../../context/Auth';

const Dashboard = () => {
  const {handleLogout} = useAuthContext();
  return (
    <div>
      <Button type='primary' variant='solid' color='default' onClick={handleLogout} >Logout</Button>
    </div>
  )
}

export default Dashboard