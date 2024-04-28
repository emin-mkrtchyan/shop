import { Link } from "react-router-dom"

export function CategoryItem({item}) {
  return (
    <div className=' shadow-md p-4'>
        <img src={item.strCategoryThumb} alt={item.strCategory} />
        <div className=' font-bold'>{item.strCategory}</div>
        <div>{item.strCategoryDescription.length> 200 ? 
              item.strCategoryDescription.slice(0, 200) : item.strCategoryDescription  
        }</div>

        <Link to={'/category/' + item.strCategory} className=" text-orange-300">Detail {item.strCategory} ...</Link>
        
    </div>
  )
}
