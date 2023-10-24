import React from 'react'
import Proudct from '../proudct/Proudct';


function Proudcts() { //parent
    const proudcts =[ //API
        {id:1,title:'first proudct',desc:'this is first proudct',price:1000},
        {id:2,title:'second proudct',desc:'this is second proudct',price:2000},
        {id:3,title:'third proudct',desc:'this is third proudct',price:3000},
    ];
  return (
    <>
   
<div className='row'>
    {
      proudcts.map((proudct)=>{  // in () after map is obj
        return< Proudct {...proudct} key={proudct.id}/>
      })  
    }
<Proudct />
</div>
       
    

   
    </>
    
  )
}

export default Proudcts