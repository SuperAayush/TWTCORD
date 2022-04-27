import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ServerBar from '../discord/Navbar/ServerBar'
import Checking from '../middlewares/Checking'
import News from '../News/News'

function Routing() {
  return (
    <>
      <Routes>
          <Route path="/news" exact element={<News />} />
          <Route path="/checking" exact element={<Checking />} />
          <Route path="/serverbar" exact element={<ServerBar />} />
      </Routes>
    </>
  )
}

export default Routing