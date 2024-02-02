import React from "react";
import {apiUrl,filterData} from "./data" 
const App = () => {
  return <div>
    <Navbar></Navbar>
    <Filter filterdata={filterData}></Filter>
    <Cards></Cards>
  </div>;
};

export default App;
