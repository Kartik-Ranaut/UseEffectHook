import React from 'react'
import Card from './Card';
export default function Cards(props) {
    let allData=[];
    const getCourses=()=>{
        Object.values(props.courses).forEach((courseCat)=>{
            courseCat.forEach((course)=>{
                allData.push(course);
            })
        });
        return allData;
    }
  return (
    <div className='w-100vw flex flex-wrap gap-10 justify-center'>
        {
            getCourses().map((course)=>{
                return(<Card {...course}></Card>);
            })
        }
    </div>
  )
}
