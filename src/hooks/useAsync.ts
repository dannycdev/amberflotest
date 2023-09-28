import { useCallback, useState } from 'react'

interface AsyncState<T> {
  data: T | null
  error: Error | null
  isLoading: boolean
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useAsync<T>(asyncFunction: (...args: any[]) => Promise<T>) {
  const [state, setState] = useState<AsyncState<T>>({
    data: null,
    error: null,
    isLoading: false,
  })

  const execute = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (...args: any[]) => {
      setState({ data: null, error: null, isLoading: true })
      return asyncFunction(...args)
        .then((response: T) => {
          setState({ data: response, error: null, isLoading: false })
          return response
        })
        .catch((error: Error) => {
          setState({ data: null, error, isLoading: false })
        })
    },
    [asyncFunction]
  )

  return { ...state, execute }
}
