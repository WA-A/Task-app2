import React from 'react'

function Proudct(props) {
    
  return (
    <>
    <div className='col-md-4'>
  <h3 className='text-warning'>{props.title}</h3>
  <p className='text-danger'>{props.desc}</p>
 <p className='text-success'>{props.price}</p>
  
</div>

    </>
   
  )
}

export default Proudct