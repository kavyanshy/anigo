import React from 'react'
import { Header } from 'semantic-ui-react'
import "./Top.css"
import { HomeOutline,Search ,StarOutline} from 'react-ionicons'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '@mui/material'

function Topbar() { 
  const [isOpen, setIsOpen] = React.useState(false)
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }
  const hj = useNavigate()
  return(
    <>
   <motion.div
      animate={isOpen ? "open" : "closed" }
      variants={variants}
      className="menu"
    >
    <div className="menu1">
    <motion.div
      animate={{}}
      whileHover={{ scale: 1.1 ,color:"green",borderColor:"red"}}
      className="menu-b"
    >HOME</motion.div>
    <motion.div
      animate={{}}
      whileHover={{ scale: 1.1 ,color:"green",borderColor:"red"}}
      className="menu-b"
    >Movies</motion.div>
    <motion.div
      animate={{}}
      whileHover={{ scale: 1.1 ,color:"green",borderColor:"red"}}
      className="menu-b"
    >TV shows</motion.div>
    <motion.div
      animate={{}}
      whileHover={{ scale: 1.1 ,color:"green",borderColor:"red"}}
      className="menu-b"
    >Manga</motion.div>
    </div>
    <div className="munubg" onClick={() => setIsOpen(isOpen => !isOpen)}></div>
    </motion.div>
    
  <div className='top-d'>
  <div className="toggle">
      <Button>toogle</Button>
    </div>
    <div className="container">
    <Button sx={{color:"wheat",borderRadius:"20px"}} onClick={()=>hj("/")}>HOME</Button>
    <Button>HOME</Button>
    <Button  onClick={()=>hj("/search")}>SEARCH</Button>
    
    </div>
    <div className="toggle1">
      <Button className='Button' onClick={() => setIsOpen(isOpen => !isOpen)}>Account</Button>
    </div>
    
  </div>
  </>
)
}
export default Topbar
