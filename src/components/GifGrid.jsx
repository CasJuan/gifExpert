import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

const GifGrid = ({category}) => {

  const [counter, setCounter] = useState(10)

  useEffect( () => {
    getGifs(category);
  },[ ] )


  return (
    <>
    
        <h3>{category}</h3>
        <p>Hola Mundo</p>
    
    </>
  )
}

export default GifGrid