import { useState, useEffect } from "react";
import {getAllCategories} from '../api';
import { CategoryList } from "../components/CategoryList";
import {Loading} from '../components/Loading/';
import { Search } from "../components/Search";

export function HomePage() {
  
  const [categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [filteredCategory, setFilteredCategory] = useState([]);

  useEffect(()=>{
    getAllCategories().then(data=>{
      console.log(data.categories);
      setCategories(data.categories);
      setLoading(false);
    })
  }, []);


  const searchFunc = (value)=>{


    const newArr = categories.filter(el => el.strCategory.toLowerCase().includes(value.toLowerCase()) || el.strCategoryDescription.toLowerCase().includes(value.toLowerCase()))
    setFilteredCategory(newArr);
  }

  
  return (
    <div className="HomePage container mx-auto">
      {isLoading && <Loading />}
      <Search searchFunc={searchFunc} />
      <CategoryList categories={filteredCategory.length>0? filteredCategory: categories} />
    </div>
  )
}
