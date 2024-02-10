import React from 'react'
import { FcLike } from "react-icons/fc";
import { toast } from 'react-toastify';
import { Toast } from 'react-toastify/dist/components';
export default function Card(props) {
  function btnhandler(event){
    toast.success("Added to fabourites");
  }
  return (
    <div className='w-3/12 h-6/12  flex  flex-col'>
        <img src={props.image.url} alt={props.image.alt}></img> <br></br>
        <h1 className='text-xl font-bold'>{props.title}</h1>
        <p className='text-sm text-justify'>{props.description}</p>
        <button >
          <FcLike onClick={btnhandler}></FcLike>
        </button>
    </div>
  )
}
