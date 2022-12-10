import * as React  from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"


export default function MediaCard(props) {
   const navigate  = useNavigate()

   const [loading,setload] = React.useState(true)

   React.useEffect(() => {
     setload(false)
     console.log(loading)
   
   }, [])
   
  function forward(){
    navigate("/info/"+props.animeId)
  }

  const text = {color:"white"}
  return (
    <>
    <motion.div  
      whileHover={{scale:1.2}}
    
    >
    <Card
    style={{
      minHeight:"300px",
      minWidth:"400px",
      maxWidth:"400px",
      maxHeight:"300px",
      backgroundColor:"#323232",
      marginRight:"6px",
      marginTop:"10px"
    }}
    >
      <CardMedia
        component="img"
        height="140"
        image={props.image}
        alt="green iguana"
        
      />
      <CardContent>
        <Typography 
        style={text}
        gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography
        style={text}
        variant="body2" color="text.secondary">
          Episode num:{props.episodenum}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small" onClick={forward}>Learn More</Button>
      </CardActions>
    </Card>
    </motion.div>
    </>
  );
}