import React from "react";
import Filter from "./Components/Filter";
import {apiUrl,filterData} from "./data" 
import Cards from "./Components/Cards";
import Navbar from "./Components/Navbar";
import {toast} from "react-toastify"
import {useEffect, useState} from 'react';

const App = () => {
  const [courses,setcourses]=useState([]);
  const [course,setcourse]=useState([]);
  useEffect(()=>{
      const fetchData = async()=>{
       try{ const res = await fetch(apiUrl);
        const data = await res.json();
        toast.success("done");
        console.log(data.data);
        setcourses(data.data);
        setcourse(data.data)
      }
        catch(error){
          toast.success("error");
        }
      }
      fetchData();
  },[])

  function allHnadler(){
    setcourses(course.filter((element)=>{}))
  }
  function development(){
    return
  }
  function design(){
    return
  }
  function business(){
    return
  }
  function lifestyle(){
    return
  }
  return <div>
    <Navbar></Navbar>
    <Filter filterdata={filterData}></Filter>
    <br></br>
    <Cards courses={courses}></Cards>
  </div>;
};

export default App;
