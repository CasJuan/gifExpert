import { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch','Daragon Ball']);

    const onAddCategory = (newCategory) => {
        setCategories([...categories,newCategory]);
        //setCategories(cat => [...cat,'VALORANT'])
    }

  return (
    <>

    {/* titulo */}
    <h1>GifExpert</h1>


    {/* input */}
    <AddCategory 
        //setCategories={setCategories}
        onNewCategory={onAddCategory}
    
    />

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
