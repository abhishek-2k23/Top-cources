//importing all the necessary files
import React from "react"; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cards from './Components/Cards';
import Filter from './Components/Filter';
import NavBar from './Components/NavBar';
import Spinner from './Components/Spinner';
import {useState,useEffect} from 'react';
import {filterData,apiUrl} from './data';

const App = () => {
  //for the Course data fetched from api
  const [cources,setCourses] = useState(null);
  //for the spinner till the load of the api data
  const [loading, setLoading] = useState(true);

  //for the category
  const [category, setCategory] = useState(filterData[0].title);
  
  async function loadData()
  {
    setLoading(true);
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data);
    }
    catch(error){
      console.log("Error occured")
    }
    
    setLoading(false);
  }

  useEffect(()=>{loadData();},[])

  return (
  <div className="max-h-[100%] h-[100vh] w-100 bg-[#4A4E69] flex flex-col items-center overflow-x-hidden pb-10">
    <NavBar/>
    <Filter filterData={filterData} category={category} setCategory={setCategory}/>
    {
      loading ? (<Spinner></Spinner>) : (<Cards cources={cources} category={category}/>)
    }
    <ToastContainer/>
  </div>
  );
};

export default App;
