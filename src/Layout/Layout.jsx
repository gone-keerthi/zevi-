import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from '../components/HomePage/Main'
import Transaction from '../components/TransactionPage/Transaction';
import Data from '../components/DataPage/Data';
const Layout = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={ <Home />} />
            <Route path='/transaction' element= { <Transaction />} />
            <Route path='/data' element={<Data />} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Layout