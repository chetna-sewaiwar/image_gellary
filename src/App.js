import React, { useState } from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Component from './Component'

const App = () => {
  const [image] = useState([
    {
      img : "https://m.media-amazon.com/images/M/MV5BOTQ5Nzc3NzAtMzZlMS00ZWJjLWIxMGMtNDU4ZTQ1NmNjMjc5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg"
    }
    

  ])

  return (
    <BrowserRouter>
      <NavLink to={'/image'}>
        {
          image.map((data, ind) => 
            <div key={ind}>
              <img src={data.img} alt="" height={100}  />
           </div>
          )

        }

      </NavLink>
      <Routes>
        <Route path='image' element={<Component/>}>

        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App