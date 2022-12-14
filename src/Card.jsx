import * as React  from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"


export default function MediaCard(props) {
   const navigate  = useNavigate()

   const [loading,setload] = React.useState(true)

   React.useEffect(() => {
     setload(false)
     console.log(loading)
   
   }, [loading])
   
  function forward(){
    navigate("/info/"+props.animeId)
  }

  const text = {color:"white"}
  return (
    <>
    <motion.div  
      whileHover={{scale:1.01}}
      style={{
        
       
      }}

      
    
    >
    <Card className='bg-black mr-10'  style={{
      "backgroundColor":"grey",
      "margin":"10px",
      maxHeight:"600px"
       

    }} onClick={forward}>
    <Image src={props.image} wrapped ui={false} style={{
      maxHeight:"403px"
    }}/>
    <Card.Content>
      <Card.Header>{props.title}</Card.Header>
      <Card.Meta>Joined in 2016</Card.Meta>
      <Card.Description>
        {props.episodenum}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        10 Friends
      </a>
    </Card.Content>
  </Card>
    </motion.div>
    </>
  );
}