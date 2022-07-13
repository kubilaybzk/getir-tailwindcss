
import { useState, useEffect,React } from 'react';
import categoryData from 'components/api/categories.json'
import Category from './ui/Category';



export default function Categories() {


  const [categories, setCategories] = useState([]);

  useEffect(() => {
      // istek
      // setTimeout(() => setCategories(categoryData), 1000)
      setCategories(categoryData)
  }, [])


  return (
	<div className='bg-gray-100 py-4'>
    <div className='container mx-auto'>
        <h3 className='text-sm font-semibold mb-3'>Kategoriler</h3>
        <div className='flex flex-row  gap-x-8 gap-y-8 flex-wrap justify-start'>
        {categories.map((item,key)=>{
          return(
            <div> 
              <Category key={key} category={item} />
              </div>
          );
        })}
        </div>
    </div>
  </div>
  )
}
