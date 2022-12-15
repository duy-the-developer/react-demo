import { useState, useEffect } from 'react'
const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({
        x: null,
        y: null,
    })

    useEffect(() => {
        const handleMousemove = (ev) => {
            setMousePosition({ x: ev.clientX, y: ev.clientY })
        }

        window.addEventListener('mousemove', handleMousemove)

        return () => {
            window.removeEventListener('mousemove', handleMousemove)
        }
    }, [])

    return mousePosition
}

export default useMousePosition
