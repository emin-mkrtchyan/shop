import { useNavigate } from "react-router-dom"

export function MealItem({item}) {

  const navigate = useNavigate();

  return (
    <div className=' shadow-md p-4 cursor-pointer' onClick={()=> navigate('/meal/' + item.idMeal)}>
        <img src={item.strMealThumb} alt="" />
        <div className='text-center'>{item.strMeal}</div>
    </div>
  )
}
