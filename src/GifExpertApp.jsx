import { useState } from 'react'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch','Daragon Ball']);

  return (
    <>

    {/* titulo */}
    <h1>GifExpert</h1>


    {/* input */}

    {/* Listao de gif */}
    <ol>
        {categories.map(category => {
            return <li key={category}>{category}</li>
        })}
    </ol>
        {/* gif Items */}



    </>
  )
}
