import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import {getFilterdCategory} from '../api'
import { MealList } from '../components/MealList';
import { useNavigate } from 'react-router-dom';

export function CategoryPage() {

  const [meals, setMeals] = useState([]);
  const {name} = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    getFilterdCategory(name).then(data=>{
      console.log(data.meals);
      setMeals(data.meals);
    })
  }, [name]);

  return (
    <div className=' container mx-auto'>
      <button onClick={()=> navigate(-1)} className=' bg-red-900 text-white m-4 px-4 py-2'>  GO BACK </button>
      <MealList meals={meals} />
    </div>
  )
}
