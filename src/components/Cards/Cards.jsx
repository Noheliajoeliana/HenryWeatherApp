import React from 'react';
import Card from '../Card/Card.jsx'
import clases from './Cards.module.css'

export default function Cards({cities, onClose}) {
  // acá va tu código

  //estado de carta activa
  let Cards
  if(cities){
    Cards = cities.map((el)=>{
      
      return(
        <Card max={el.max} min={el.min} name={el.name} img={el.img} key={el.id} id={el.id} onClose={onClose}/>
      )
    })
  }else{
    console.log('No hay ciudades')
  }
  return (
    <div className={clases.cards}>
      {Cards}
    </div>
  )
};