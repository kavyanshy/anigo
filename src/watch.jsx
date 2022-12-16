import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useParams} from 'react-router-dom'
import { motion } from "framer-motion";
import SimpleBottomNavigation from "./Bottom";
import ReactPlayer from "react-player";
import { Player, Hls ,DefaultUi ,Spinner,DefaultControls } from '@vime/react'
import Topbar from "./Topbar";
import "./watch.css"
export default function Watch() {

    const [epurl,setepurl] = useState("https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8")

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



        async function getepisodeurl(){
            await fetch("https://gogoanime.consumet.org/vidcdn/watch/"+props.id)
  .then((response) => response.json())
  .then((animelist) => setepurl(animelist.sources[0].file));
  if (window.pljssglobal.length > 0) {
    window.pljssglobal[0].api("play", epurl);
          
        }}
        

        return(
            <motion.div
              animate={{}}
              whileHover={{scale:1.1}}
              className="episodemenu"
            >
            <Button onClick={getepisodeurl}>{props.id}</Button>
            </motion.div>
        )
    }

    function TopCard(){
      const [detail,setdetail] = useState([])
      useEffect(() => {
        async function hiq(){
            await fetch("https://gogoanime.consumet.org/anime-details/"+id.id)
        .then((response) => response.json())
        .then((animelist) => setdetail(animelist));
        console.log("cahnged")
        
        }
        hiq()
        
      }, [])
      
      
      return(<>
        <Button onClick={()=>console.log(detail)}>name</Button>
        <div className="topcard">
          
          <div className="tleft">
            <h1>{detail.animeTitle}</h1>
            <p>{detail.synopsis}</p>
            <h3>otherNames: {detail.otherNames}</h3>
            <h3>Genres: {detail.genres}</h3>
            <h3>status: {detail.status}</h3>
            <h3>TotalEpisodes: {detail.totalEpisodes}</h3>
          </div>
          <div className="tright">
            <img src={detail.animeImg}></img>
          </div>

        </div>
        </>
       
      )
    }





    function getname(){
        anime.episodesList.map((item)=><div>{item.episodeId}</div>)
    }
    
    const hlsConfig = {
      // ...
    };
    
  return (
    <>
    
    <Topbar/>
    <TopCard/>
    <Player controls className="player1">
      <Hls version="latest" config={hlsConfig}>
        <source data-src={epurl} type="application/x-mpegURL" />
      </Hls>
    
      <DefaultUi></DefaultUi>
    </Player>

    <div className="epmenu">
      <div className="headlineep">Episode list</div>
    {
      anime.map((item)=><Episode key={item.episodeId} id={item.episodeId}/>)}
    </div>
    <Button onClick={getname}>get</Button>
    </>

  )
}
