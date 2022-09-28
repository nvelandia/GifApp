import { useState } from "react"
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";


const GifExpertApp = () => {

  const [categories, setCategories] = useState(['F1']);
  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory))return;
    setCategories([
      ...categories,
      newCategory ])
  }

  //console.log('test', process.env.REACT_APP_KEY)

  return (
    <> 
      <h1>GifExpertApp</h1>
      <AddCategory onAddCategory={onAddCategory} />
      
        {
          categories.map((category) => (
            <GifGrid category={category} items='' />
          ))
        } 
    </>
  )
}

export default GifExpertApp