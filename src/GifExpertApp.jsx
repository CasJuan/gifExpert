import { useState } from 'react'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch','Daragon Ball']);

    const onAddCategory = () => {
        setCategories([...categories,'Valorant']);
        //setCategories(cat => [...cat,'VALORANT'])
    }

  return (
    <>

    {/* titulo */}
    <h1>GifExpert</h1>


    {/* input */}

    {/* Listao de gif */}
    <button onClick={onAddCategory}>Agregar</button>
    <ol>
        {categories.map(category => {
            return <li key={category}>{category}</li>
        })}
    </ol>
        {/* gif Items */}



    </>
  )
}
