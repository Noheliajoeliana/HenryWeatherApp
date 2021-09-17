import React from 'react';
import clases from './Card.module.css'
import {NavLink} from 'react-router-dom'

export default function Card({max,min,name,img,onClose,id}) {

  //estado
  // const [active, setActive]=useState(true)

  // const onClose = () =>{
  //   setActive(!active)
  // }
  // acá va tu código
  let url = `http://openweathermap.org/img/wn/${img}@2x.png`
  return(
    <div className={`${clases.indCard}`}>
      
      <h2>{name}</h2>
      <button onClick={()=>onClose(id,name)} className={clases.btn}>X</button>
      
      
      <div className={clases.info}>
        
      <img className={clases.img} src={url} alt=''></img>
        <div className={clases.temps}>
          <div className={clases.minmax}>
            <p className={clases.p}>Temperatura mínima: {Math.round(min)}°</p>
            {/* <p className={clases.p}><b>{Math.round(min)}°</b></p> */}
          </div>
          <div className={clases.minmax}>
            <p className={clases.p}>Temperatura máxima: {Math.round(max)}°</p>
            {/* <p className={clases.p}><b> {Math.round(max)}°</b></p> */}
          </div>
        </div>
      </div> 
      <button className={clases.details}>
          <NavLink className={clases.link} to={`/ciudad/${id}`}>Ver más detalles</NavLink>
        </button>    
    </div>
  ) 
};