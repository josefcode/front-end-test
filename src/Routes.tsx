import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from './components/defalut-layout/DefaultLayout'
import { lazy } from 'react'

const Help = lazy(() => import('./pages/help/Help'))
const Login = lazy(() => import('./pages/login/Login'))
const ForgetPassword = lazy(() => import('./pages/forget-password/ForgetPassword'))

export const Router = () => {

  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Login />} />
        <Route path = '/forget-password' element={<ForgetPassword />} />
        <Route path="/help" element={<Help />} />
      </Route>
    </Routes>
  )
}