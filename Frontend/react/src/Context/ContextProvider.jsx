 
import React, { useEffect, useState } from 'react'
import ProductContext from './context'
 
function ContextProvider({children}) {
        let [values, setValues] = useState([])

        useEffect(()=>{
            async function getData() {
             
                try {
                   let res = await fetch("http://localhost:3000/products")
 
                    
                       console.log("res.status");
                    if(res.status === 200){
                        let data = await res.json()
                        setValues(Array.isArray(data.products) ? data.products : [])
                    }
                    else{
                        console.log("Failed to fetch products", res.status);
                        setValues([])

                    }
                } catch (error) {
                    // console.log("Network Errorssssss", error);
                     console.log(error);
                    console.log("jee");
                    setValues([])
   
                }
                
            }

            getData()
        },[])
  return (
      <ProductContext.Provider value={{values, setValues}}>
        {children}
      </ProductContext.Provider>
  )
}

export default ContextProvider