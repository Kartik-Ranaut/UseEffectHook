import React from "react";
import Filter from "./Components/Filter";
import {apiUrl,filterData} from "./data" 
import Cards from "./Components/Cards";
import Navbar from "./Components/Navbar";
import {toast} from "react-toastify"
import {useEffect, useState} from 'react';

const App = () => {
  const [courses,setcourses]=useState([]);
  useEffect(()=>{
      const fetchData = async()=>{
       try{ const res = await fetch(apiUrl);
        const data = await res.json();
        toast.success("done");
        console.log(data.data);
        setcourses(data.data)
      }
        catch(error){
          toast.success("error");
        }
      }
      fetchData();
  },[])
  return <div>
    <Navbar></Navbar>
    <Filter filterdata={filterData}></Filter>
    <Cards courses={courses}></Cards>
  </div>;
};

export default App;
