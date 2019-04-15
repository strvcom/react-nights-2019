import { useState, useEffect } from 'react'

const useApi = (fn, resolveCondition = []) => {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  const request = (...args) => {
    setLoading(true)
    fn(...args)
      .then(returnedData => setData(returnedData))
      .finally(() => setLoading(false))
  }

  useEffect(request, resolveCondition)

  return {
    request,
    data,
    isLoading,
  }
}

export { useApi }
