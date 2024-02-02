import React from 'react'

export default function Card(props) {
  return (
    <div className='w-3/12 h-6/12  flex  flex-col'>
        <img src={props.image.url} alt={props.image.alt}></img> <br></br>
        <h1 className='text-xl font-bold'>{props.title}</h1>
        <p className='text-sm text-justify'>{props.description}</p>
    </div>
  )
}
