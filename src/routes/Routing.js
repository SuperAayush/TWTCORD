import React from 'react'
import { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import ServerBar from '../discord/Navbar/ServerBar'
import Checking from '../middlewares/Checking'
import News from '../News/News'

function Redirect({to}){
  const navigate=useNavigate()
  useEffect(()=>{
    navigate(to)
  },[navigate,to])

  return;
}

function Routing() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Redirect to={'/news'}/>} />
          <Route path="/news" exact element={<News />} />
          <Route path="/checking" exact element={<Checking />} />
          <Route path="/serverbar" exact element={<ServerBar />} />
          <Route path="*" exact element={<h1>PAGE NOT FOUND</h1>} />
      </Routes>
    </>
  )
}

export default Routing