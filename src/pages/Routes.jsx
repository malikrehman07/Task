import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Auth from './Auth'
import Dashboard from './Dashboard'
import ProtectedRoute from '../component/ProtectedRoute'
import { useAuthContext } from '../context/Auth'
import Frontend from './Frontend'

const Index = () => {
    const {isAuth} = useAuthContext()
    return (
        <>
            <Routes>
                <Route path='/*' element={<Frontend/>} />
                <Route path='/auth/*' element={!isAuth ? <Auth /> : <Navigate to='/dashboard' />} />
                <Route path='/dashboard/*' element={<ProtectedRoute Component={Dashboard} />} />
            </Routes>
        </>
    )
}

export default Index