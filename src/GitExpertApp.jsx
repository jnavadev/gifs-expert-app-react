import {useState} from 'react'
import { AddCategory, GifGrid } from './components';

export const GitExpertApp = () => {
  
  const [categories, setCategories] = useState([]);

  const onAddCategory = ( newCategory ) =>{
    
    if( categories.includes(newCategory) ) return;

    //primera forma de hacerlo
    setCategories([newCategory, ...categories]);
    //segunda forma de hacerlo
    //setCategories(cat=>[...cat, newCategory])
  }
  
  return (
    <>
    <h1>GitExpertApp</h1>
    
    <AddCategory
      onNewCategory={ onAddCategory }
      />

      {
        categories.map( category => (
            <GifGrid key={category} category={ category }/>
          ))
      }
    </>
    
  )
  
}
