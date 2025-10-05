import { get } from 'mongoose'
import React, { useEffect, useState } from 'react'
import productContext from './context'
 
function ContextProvider({children}) {
        let [values, setValues] = useState([])

        useEffect(()=>{
            async function getData() {
                try {
                    let res = await fetch("http://localhost:3000/products")

                    if(res.status === 200){
                        let data = await res.json()
                        setValues(Array.isArray(data.products) ? data.products : [])
                    }
                    else{
                        console.log("Failed to fetch products", res.status);
                        setValues([])
                        
                    }
                } catch (error) {
                    console.log("Network Error", error);
                    setValues([])
   
                }
                
            }

            getData()
        },[])
  return (
      <productContext.Provider value={{values, setValues}}>
        {children}
      </productContext.Provider>
  )
}

export default ContextProvider