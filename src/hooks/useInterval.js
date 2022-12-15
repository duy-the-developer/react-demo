import { useEffect } from 'react'

export const useInterval = () => {
    useEffect(() => {
        const interval = setInterval(
            () => console.log('useInterval runs'),
            1000
        )

        return () => clearInterval(interval)
    }, [])
}
