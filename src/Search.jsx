import React,{useState,useRef} from 'react'
import SimpleBottomNavigation from './Bottom'
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';
import MediaCard from './Card';

import Grid from '@mui/material/Grid';


export default function Search() {
    const[search_url,seturl] = useState([])
    const search_text = useRef(" ")
    const [text1,settext1] =useState("")
    async function search(){
        console.log(text1)
        await fetch("https://gogoanime.consumet.org/search?keyw="+text1)
  .then((response) => response.json())
  .then((animelist) => seturl(animelist));

  console.log(text1)


    }


  return (
    <>
    <SimpleBottomNavigation/>
    <div>Search</div>
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} style={{color:"#14FFEC"}} />
        <TextField ref={search_text} value={text1} onChange={(newValue) => settext1(newValue.target.value)} id="input-with-sx" label="With sx" variant="filled" style={{color:"#000000",backgroundColor:"#FFFFFF",width:"400px",borderRadius:"7px"}}/>
      </Box>
      <Button onClick={search}>Search</Button>
      <Grid sx={{ flexGrow: 2 }} container spacing={2}>
    { search_url.map((number) => 
      <MediaCard
      key={number.animeId} animeId={number.animeId} image={number.animeImg} title={number.animeTitle} episodenum={number.episodeNum}/>
      )}
    </Grid>
    </>
  )
}
