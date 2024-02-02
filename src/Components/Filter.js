import React from 'react'

export default function Filter(props) {
  return (
    <div>
        {
            props.filterdata.map((element)=>{
                return(<button>{element.title}</button>)
            })
        }
    </div>
  )
}
