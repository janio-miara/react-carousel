import { useEffect, useRef, useState } from 'react'

export default () => {
    const [activeInteval, setActiveInteval] = useState(false)
    const [activeItem, setActiveItem] = useState(0)
    const [totalItems, setTotalItems] = useState(0)
    const time = 5000
    const intervalID = useRef()

    useEffect(() => {
        if (totalItems) {
            intervalID.current = setInterval(() => {
                setActiveItem(prev => {
                    return totalItems - 1 === prev ? 0 : prev + 1
                })
            }, time)
            return () => {
                clearInterval(intervalID.current)
            }
        }
    }, [totalItems, activeInteval])

    const goTo = index => {
        setActiveItem(index)
    }

    const handleClearInterval = () => {
        clearInterval(intervalID.current)
    }

    const handleActiveInterval = () => {
        setActiveInteval(!activeInteval)
    }

    const goToNext = () => {
        const newIndex = activeItem + 1
        if (newIndex > totalItems - 1) {
            setActiveItem(0)
            return null
        }
        clearInterval(intervalID.current)
        setActiveItem(prev => prev + 1)
    }

    const goToPrev = () => {
        const newIndex = activeItem + 1
        if (newIndex < totalItems - 1) {
            setActiveItem(totalItems - 1)
            return null
        }
        setActiveItem(prev => prev - 1)
        clearInterval(intervalID.current)
    }

    const handleTotalItens = newTotal => {
        if (newTotal === totalItems) {
            return null
        }
        setTotalItems(newTotal)
    }

    return {
        activeItem,
        goTo,
        goToNext,
        goToPrev,
        handleTotalItens,
        handleClearInterval,
        handleActiveInterval,
    }
}
