import React from 'react'

export default function Filter(props) {
  return (
    <div className='w-100vw flex gap-10 justify-center'>
        {
            props.filterdata.map((element)=>{
                return(<button className='border-1px border-blue-950 pl-2 pr-2 '>{element.title}</button>)
            })
        }
    
    </div>
  )
}
