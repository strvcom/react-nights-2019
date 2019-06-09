import { useState, useEffect, DependencyList } from 'react'

const useApi = <T>(
  fn: (...arg: any[]) => Promise<T>,
  deps: DependencyList = []
) => {
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setLoading] = useState(false)

  const request = (...args: any[]) => {
    setLoading(true)
    fn(...args)
      .then(returnedData => setData(returnedData))
      // eslint-disable-next-line no-console
      .catch(console.error)
      .finally(() => setLoading(false))
  }

  useEffect(request, deps)

  return {
    request,
    data,
    isLoading,
  }
}

export { useApi }
