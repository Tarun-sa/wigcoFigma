import React from 'react'
import Search from './Search'

const Home = () => {
  return (
    <div>
      <div className='heading'>
      <h1 style={{marginBottom:"9px"}}>   <span style={{color:"#97DECE"}}>Free</span> Instagram Engagement Rate Calculator</h1>
      <p style={{color:"grey",fontWeight:500,marginTop:"0px"}}>Try our free engagement Rate Calculator to find out the engagement of any Instagram account</p>
      <Search />
      </div>
    
    </div>
  )
}

export default Home