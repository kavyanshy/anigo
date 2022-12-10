import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useParams} from 'react-router-dom'
import ReactHlsPlayer from 'react-hls-player';
import SimpleBottomNavigation from "./Bottom";


export default function Watch() {

    const [epurl,setepurl] = useState(" ")

    const id = useParams()
    var detal;
    const [anime,setanime] = useState([])
    useEffect(() => {
        fetch("https://gogoanime.consumet.org/anime-details/"+id.id)
        .then((response) => response.json())
        .then((animelist) => setanime(animelist.episodesList));
        
        console.log("fetched")
        

    }, [])



    function Episode(props){



        function getepisodeurl(){
            fetch("https://gogoanime.consumet.org/vidcdn/watch/"+props.id)
  .then((response) => response.json())
  .then((animelist) => setepurl(animelist.sources[0].file));
        }

        return(
            <Button onClick={getepisodeurl}>{props.id}</Button>
        )
    }

    function getname(){
        anime.episodesList.map((item)=><div>{item.episodeId}</div>)
    }
    
    
  return (
    <>
    <SimpleBottomNavigation/>
    <div>{id.id}</div>
    <ReactHlsPlayer
    src={epurl}
    autoPlay={true}
    controls={true}
    width="100%"
    height="auto"
    
  />,

    {
        
    
      anime.map((item)=><Episode key={item.episodeId} id={item.episodeId}/>)}
    <Button onClick={getname}>get</Button>
    </>

  )
}
