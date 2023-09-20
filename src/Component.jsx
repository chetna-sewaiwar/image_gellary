import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Component = () => {
    const nav = useNavigate();
     const [image] = useState([
    {
      img : "https://m.media-amazon.com/images/M/MV5BOTQ5Nzc3NzAtMzZlMS00ZWJjLWIxMGMtNDU4ZTQ1NmNjMjc5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg"
    }

  ])
  return (
      <div> 
          {
               
          image.map((data, ind) => 
            <div key={ind}>
              <img src={data.img} alt=""  height={500} />
           </div>
          )

        
          }
          <button onClick={()=> nav(-1)}>
              Back
          </button>
          


    </div>
  )
}
export default Component 