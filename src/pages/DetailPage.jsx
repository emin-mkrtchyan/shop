import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import {getMealById} from '../api';
import { useNavigate } from "react-router-dom";

export function DetailPage(){

    const {id} = useParams();
    const [meal, setMeal] = useState({});
    const navigate = useNavigate();

    useEffect(()=>{
        getMealById(id).then(data=>{
            console.log(data.meals[0]);
            setMeal(data.meals[0]);

        })
    },[id]);

    return <div>
         <button onClick={()=> navigate(-1)} className=' bg-red-900 text-white m-4 px-4 py-2'>  GO BACK </button>
        <img src={meal.strMealThumb} alt={meal.strCategory} />
       <div>{meal.strMealThumb}</div>
       <div>{meal.strCategory}</div>
    </div>
}


