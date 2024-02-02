import React from 'react'
import Cards from "./Cards"
export default function Filter(props) {
  return (
    <div>
        {
            props.filterdata.map(()=>{
                return(<Cards></Cards>)
            })
        }
    </div>
  )
}
