import { useEffect, useState } from "react"

export const useApi = () =>{
  const [data,setData] = useState([])
  const [isLoaded,setIsLoaded] = useState(false)
  useEffect(()=>{
    const getData = async() =>{
      const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=knowledge',{
        method:'GET',
        headers:{'X-Api-key': 'mvSYM7f6tGGyBz5x6JeJrQ==SLy5P0zTBXFhEOfh'},
        contentType:'application/json'
      })

      const json = await response.json()

      if(response.ok){
        setIsLoaded(true)
        setData(json)
      }

      if(!response.ok){
        setIsLoaded(true)
        setData([{quote:'Kamu adalah orang terpilih!',author:"asd",date:'123'}])
      }
    }
    getData()
  },[])
  return {data,isLoaded};
}