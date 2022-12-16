
import { Button } from "semantic-ui-react";
import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css'
const images = [
  { url: "images/1.jpg" },
  { url: "images/2.jpg" },
  { url: "images/3.jpg" },
  { url: "images/4.jpg" },
  { url: "images/5.jpg" },
  { url: "images/6.jpg" },
  { url: "images/7.jpg" },
];


export default function Slider  ()  {

    const[anime,setanime] = React.useState([{}])
    
    function Card1(props){
        return(
            <div>hdjfhdj</div>
            
        )
    }
React.useEffect(() => {
    async function image11(){
        await fetch("https://gogoanime.consumet.org/top-airing")
        .then((response) => response.json())
        .then((animelist) => setanime(animelist));
    }
    image11()

  
}, [anime])

function jkjk(){
    console.log(anime[0].animeTitle)
}
    
  return (
    <>
    <AwesomeSlider style={{height:"500px"}} infinite={true} mobileTouch={true}>
        <div>sample</div>
      </AwesomeSlider>
      </>
    
  );
}