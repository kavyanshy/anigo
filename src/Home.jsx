import React from 'react'
import MediaCard from './Card'
import SimpleBottomNavigation from './Bottom'
import { useState ,useEffect} from 'react'
import { Button } from '@mui/material'
import { auth } from '../Firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from "react-router-dom";
import Slider from "./Slider"
import Grid from '@mui/material/Grid';

import "./App.css"

import Topbar from './Topbar'


export default function Home() {

const [name,setname]=useState([])
const [page,setpage] =useState(2)
var list;
const navigate = useNavigate()

const [user, loading, error] = useAuthState(auth);

useEffect(() => {

  if (loading) {
    // maybe trigger a loading screen
    return;
  }
  if (user) navigate("/");

  fetch("https://gogoanime.consumet.org/recent-release/?page="+page)
  .then((response) => response.json())
  .then((animelist) => setname(animelist));

  console.log("changed")
  
 

}, [user, loading,page])


function next(){
  console.log(page)
  setpage(page+1)
}
function previous(){
  console.log(page)
  setpage(page-1)
}
 

function name11(){
  console.log(user)
  
}

  return (
    <>
    <Topbar/>
    <Slider/>
   
    <div className='bg-black'>Home</div>
    <Button sx={{color:"white",backgroundColor:"red",}}onClick={name11}>name</Button>
    <Button onClick={previous}>previous</Button>
    <Button onClick={next}>next</Button>
    <Button onClick={()=>setpage(page)}>set</Button>
    <Grid sx={{ flexGrow: 2 }} container spacing={2}>
    { name.map((number) => 
      <MediaCard
      key={number.animeId} animeId={number.animeId} image={number.animeImg} title={number.animeTitle} episodenum={number.episodeNum}/>
      )}
    </Grid>
    
    
    </>
  )
}
