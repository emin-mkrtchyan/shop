import axios from "axios"
import { API_URL } from "./config";

const getAllCategories = async()=>{
    const response = await axios.get(API_URL+'categories.php');
    return response.data;
}

const getFilterdCategory = async(category)=>{
    const reponse = await axios.get(API_URL+'filter.php?c=' + category);
    return reponse.data;
}


const getMealById = async(id)=>{
    const reponse = await axios.get(API_URL+'lookup.php?i=' + id);
    return reponse.data;
}



export {getAllCategories, getFilterdCategory, getMealById}
