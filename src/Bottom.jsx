import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import "./App.css"
import { motion } from "framer-motion"
import { useNavigate ,Link} from "react-router-dom";
import { Button } from '@mui/material';




export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navi = useNavigate()
  

  function name(props){
    console.log(props)
    
  }

  const variants={
    open:{scale:7}
  }

  return (
    <motion.div
      variants={variants}
    >
        <Link label="Recents" to="/" icon={<RestoreIcon />} >HOME</Link><br></br>
        <Link label="Favorites" to="/search" icon={<SearchIcon />} >SEARCH</Link><br></br>
        <Link label="Nearby" to="/favi"icon={<LocationOnIcon />} >FAVORITE</Link><br></br>
      
    </motion.div>
  );
}