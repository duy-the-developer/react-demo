import { useState, useEffect } from 'react'

const useClock = (throttleDuration) => {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const intervalId = window.setInterval(() => {
            setTime(new Date())
        }, throttleDuration)

        return () => {
            window.clearInterval(intervalId)
        }
    }, [throttleDuration])

    return time
}

export default useClock
