import React from 'react'

function useLocalStorage(itemKey,initialValue){

    //render states
  
    const [error,setError] = React.useState(false)
    const [loading,setLoading] = React.useState(true)
    const [item,setItem] = React.useState(initialValue);
  
    //simulacion time request API con useEffect
    React.useEffect(()=>{
      setTimeout(() => {
        
        try {
          const localStorageItem = localStorage.getItem(itemKey)
          let parsedItem
  
          //read
          if(!localStorageItem){
            localStorage.setItem(itemKey,JSON.stringify(initialValue))
            parsedItem = initialValue
          }else{
            parsedItem = JSON.parse(localStorageItem)
          }
  
          setItem(parsedItem)
          setLoading(false)
  
        } catch (error) {
          setError(error)
        }
  
      }, 1500);
    },[])
  
  
      //save
      const saveItem = (newItem) => {
        try {
          const stringifiedItem = JSON.stringify(newItem)
          localStorage.setItem(itemKey,stringifiedItem)
    
          setItem(newItem)
        } catch (error) {
          setError(error)
        }
        
      }
  
      return {item,saveItem,loading,error}
  }


  export {useLocalStorage};