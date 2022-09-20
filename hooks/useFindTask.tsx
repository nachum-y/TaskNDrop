import { useContext, useEffect, useState } from "react"
import { BoardContext } from "../store/board"


type StatusCount = {
    id?: number
}
const useFindTask = () => {


    const { boardGroup, boardGroupsByLabel } = useContext(BoardContext)

    useEffect(() => {
        if (boardGroupsByLabel) {
            console.log(boardGroupsByLabel)
        }

    }, [boardGroupsByLabel])


    return (0)
}

export default useFindTask