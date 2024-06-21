import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Header from '../components/Header/Header'
import Healthy from '../components/Healthy/Healthy'
import styles from '../components/Header/Header.module.scss'
import PrivilegeHeader from '../components/PrivilegeCard/PrivilegeHeader'
import AloeAccount from '../components/AloeAccount/AloeAccount'
const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/PrivilegeHeader' element={<PrivilegeHeader/>} />
            <Route path='/account' element={<AloeAccount/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router