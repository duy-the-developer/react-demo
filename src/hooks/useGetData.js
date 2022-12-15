import { useState } from 'react'
import { useEffect } from 'react'

export const useGetData = (url) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!url) return

        fetch(url)
            .then((res) => res.json())
            .then((parsedRes) => setData(parsedRes))
            .catch((error) => setError(error))
    }, [])

    return [data, error]
}
