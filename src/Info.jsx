import React,{useEffect,useState}from 'react'
import { useParams} from 'react-router-dom'
import styles from './info.module.css'
import { useNavigate } from "react-router-dom";
const Info = (props) => {
    const [infourl,setinfo] = useState([])
    const navi = useNavigate()
    const id = useParams()
    useEffect(() => {
        fetch("https://gogoanime.consumet.org/anime-details/"+id.id)
        .then((response) => response.json())
        .then((animelist) => setinfo(animelist));
        
        console.log(infourl)
        

    }, [])


  return (
    <div className={styles['container']}>
      <div className={styles['container1']}>
        <div className={styles['container2']}>
          <img
            src={infourl.animeImg}
            alt="image"
            className={styles['image']}
          />
        </div>
        <div className={styles['container3']}>
          <div className={styles['container4']}>
            <label className={styles['text']}>
              <span>{infourl.animeTitle}</span>
              <br></br>
            </label>
            <div className={styles['container5']}>
              <span>Text</span>
            </div>
            <span className={styles['text4']}>
              {infourl.synopsis}
            </span>
            <div className={styles['container6']}>
              <div className={styles['container7']}>
                <span>Text</span>
              </div>
              <div className={styles['container8']}>
                <button className={['button']} onClick={()=>navi("/watch/"+id.id)}>Watch</button>
              </div>
            </div>
          </div>
          <img
            src={infourl.animeImg}
            alt="image"
            className={styles['image1']}
          />
        </div>
      </div>
    </div>
  )
}

export default Info
