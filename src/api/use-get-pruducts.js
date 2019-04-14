import { useState, useEffect } from 'react'
import { getProducts } from './products/get-products'

const useGetProducts = page => {
  const [isLoading, setLoading] = useState(true)
  const [res, setRes] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setRes(await getProducts({ page: { number: page } }))
      setLoading(false)
    }
    fetchData()
  }, [page])

  return {
    res,
    isLoading,
  }
}

export { useGetProducts }
