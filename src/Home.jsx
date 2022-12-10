import React from 'react'
import MediaCard from './Card'
import SimpleBottomNavigation from './Bottom'
import { useState ,useEffect} from 'react'
import { Button } from '@mui/material'
import { auth } from '../Firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from "react-router-dom";

import Grid from '@mui/material/Grid';
import "./App.css"
export default function Home() {

const [name,setname]=useState([])
var list;
const navigate = useNavigate()

const [user, loading, error] = useAuthState(auth);
    

useEffect(() => {

  if (loading) {
    // maybe trigger a loading screen
    return;
  }
  if (user) navigate("/");

  fetch("https://gogoanime.consumet.org/recent-release")
  .then((response) => response.json())
  .then((animelist) => setname(animelist));

  
 

}, [user, loading])

  
 

function name11(){
  console.log(user)
}




  return (
    <>
    <SimpleBottomNavigation/>
    <div>Home</div>
    <Button onClick={name11}>name</Button>
    <Grid sx={{ flexGrow: 2 }} container spacing={2}>
    { name.map((number) => 
      <MediaCard
      
      
      key={number.animeId} animeId={number.animeId} image={number.animeImg} title={number.animeTitle} episodenum={number.episodeNum}/>
      )}
    </Grid>
    
    </>
  )
}
