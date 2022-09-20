import { useEffect, useState, useCallback } from "react"



const useContextMenu = () => {
    const [xPos, setXPos] = useState('0px')
    const [yPos, setYPos] = useState('0px')
    const [showMenu, setShowMenu] = useState(false)
    const handleContextMenu = useCallback(
        (e: any) => {
            e.preventDefault()
            e.pageX + 264 > window.innerWidth ? setXPos(`${window.innerWidth - 294}px`) : setXPos(`${e.pageX - 64}px`)
            e.pageY + 264 > window.innerHeight ? setYPos(`${window.innerHeight - 294}px`) : setYPos(e.pageY)
            setShowMenu(true)
        },
        [setXPos, setYPos]
    )

    useEffect(() => {
        // document.addEventListener("click", handleClick)
        document.addEventListener("contextmenu", handleContextMenu)
        return () => {
            // document.removeEventListener("click", handleClick)
            document.removeEventListener("contextmenu", handleContextMenu)
        }
    })

    return { xPos, yPos, showMenu }
}

export default useContextMenu