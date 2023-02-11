import React, { useState } from 'react'

const useForm = (book) => {
  
    var [Val,setVal]=useState(book);
    return [Val,event => {
      setVal(
          {
              ...Val,[event.target.name]:event.target.Val
          }
      )
  
      
    }]
  }
  
  export default useForm
