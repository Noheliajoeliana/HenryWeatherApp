import React, { useState} from 'react';
import {searchBar, input, inputdisabled, btn, btndisabled} from './SearchBar.module.css'

export default function SearchBar({onSearch2,match}){
  console.log(match.isExact)
    
  //Estado
  const [inputValue, setInputValue] = useState('')
  const inputDisabled = !match.isExact
  
  
 
  const onAddCity=(e)=>{
    console.log(e)
    setInputValue(e.target.value)
    
  }
  
  const onSubmit=(e,param)=>{
    e.preventDefault()
    console.log(param)
    onSearch2(param)
    setInputValue('')
  }

  return(
    <div className={searchBar}>
      <form onSubmit={(e)=>onSubmit(e,inputValue)} action="#">
        <input 
          onChange={(e)=>onAddCity(e)} value={inputValue} 
          type="text" 
          disabled={inputDisabled} 
          className={`${input} ${inputDisabled ? inputdisabled : ''}`}  
          placeholder={inputDisabled ? 'Vuelve a Inicio para agregar' : 'Agrega la ciudad o país que desees'}/>
        
        <button disabled={inputDisabled} className={`${btn} ${inputDisabled ? btndisabled : ''}`}>Agregar</button>
      </form>
    </div>
  )

};