import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = (category) => {
  
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  
  const getData = async () => {
    const resp = await getGifs(category)
    setItems(resp)
    setIsLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  return {
    items,
    isLoading
  }
}
