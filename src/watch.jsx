import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useParams} from 'react-router-dom'
import Player from "./Player";
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


    useScript("/home/kingk20k/website/notesappvite/src/playerjs.js");
    function useScript(url) {
      useEffect(() => {
        const script = document.createElement("script");
        script.src = url;
        script.async = true;
        document.body.appendChild(script);
        return () => {
          document.body.removeChild(script);
        };
      }, [url]);
    }
    
   


    function Episode(props){



        async function getepisodeurl(){
            await fetch("https://gogoanime.consumet.org/vidcdn/watch/"+props.id)
  .then((response) => response.json())
  .then((animelist) => setepurl(animelist.sources[0].file));
  if (window.pljssglobal.length > 0) {
    window.pljssglobal[0].api("play", epurl);
          
        }}
        

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
    <div className="App">
    <h1>{id.id}</h1>
    <div id="player"></div>
    </div>

    {
        
    
      anime.map((item)=><Episode key={item.episodeId} id={item.episodeId}/>)}
    <Button onClick={getname}>get</Button>
    </>

  )
}
