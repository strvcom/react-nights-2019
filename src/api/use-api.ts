import { useState, useEffect } from 'react'

const useApi = <T>(
  fn: (...arg: any[]) => Promise<T>,
  resolveCondition: ReadonlyArray<any> = []
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

  useEffect(request, resolveCondition)

  return {
    request,
    data,
    isLoading,
  }
}

export { useApi }
