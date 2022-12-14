import React from 'react'
import { Header } from 'semantic-ui-react'
import "./Top.css"
import { HomeOutline,Search ,StarOutline} from 'react-ionicons'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

function Topbar() { 
  const hj = useNavigate()
  return(
    <>
    
  <div className='top-d'>
  <div className='top-b'>
    <div className='icon-b'>
    <HomeOutline
    onClick={()=>hj("/")}
    color={'#00000'} 
    className="iocn-d"
    width={"30px"}
    height={"30px"}
/>
    </div>
    <div className='icon-b'>
    <Search
    onClick={()=>hj("/search")}
    color={'#00000'} 
    className="iocn-d"
    width={"30px"}
    height={"30px"}
/>
    </div>
    <div className='icon-b'>
    <StarOutline

    color={'#00000'} 
    className="iocn-d"
    width={"30px"}
    height={"30px"}
/>
    </div>
    <div className='icon-b'>
    
    </div>
  </div>
  </div>
  </>
)
}
export default Topbar
