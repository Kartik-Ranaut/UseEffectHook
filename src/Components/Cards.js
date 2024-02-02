import React from 'react'

export default function Cards(props) {
    const data=[1,2,3]
  return (
    <div>
        {
            props.courses.map(()=>{
                return(<button>Ram ji</button>);
            })
        }
    </div>
  )
}
