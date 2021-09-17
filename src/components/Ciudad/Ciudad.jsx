import clases from './Ciudad.module.css'
import React from 'react'

export default function Ciudad({city}){
    let url = `http://openweathermap.org/img/wn/${city.img}@2x.png`
    return(
        <div className={clases.ciudad}>
            <div className={clases.container}>
                <div className={clases.info}>
                    <h2 className={clases.name}>{city.name}</h2>
                    <p className={clases.p}><span className={clases.cat}>Temperatura: </span>{city.temp} ºC</p>
                    <p className={clases.p}><span className={clases.cat}>Temperatura mínima: </span>{city.min}</p>
                    <p className={clases.p}><span className={clases.cat}>Temperatura máxima: </span>{city.max}</p>
                    <p className={clases.p}><span className={clases.cat}>Clima: </span>{city.weather}</p>
                    <p className={clases.p}><span className={clases.cat}>Viento: </span>{city.wind} km/h</p>
                    <p className={clases.p}><span className={clases.cat}>Cantidad de nubes: </span>{city.clouds}</p>
                    <p className={clases.p}><span className={clases.cat}>Latitud: </span>{city.latitud}º</p>
                    <p className={clases.p}><span className={clases.cat}>Longitud: </span>{city.longitud}º</p>
                </div>
                <img className={clases.imgInfo} src={url} alt="" />
                    
            </div>
        </div>
    )
}