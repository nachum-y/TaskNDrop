// import React from "react"
import React, { createContext, useState, FC, useEffect } from "react"

import { BoardContextState, Props, Board, Group } from '../service/type'




const contextDefaultValues: BoardContextState = {
    board: null,
    loadBoard: () => { },
    setBoard: () => { },
    onSaveGroup: () => { },
    onAppLoad: () => { }
}

export const BoardContext = createContext<BoardContextState>(
    contextDefaultValues
)

const BoardProvider: FC<Props> = ({ children }) => {
    const [board, setBoard] = useState<Board | null>(contextDefaultValues.board)
    const loadBoard = (loadedBoard: Board) => setBoard(() => loadedBoard)

    const onAppLoad = async () => {
        console.log('here')
        const res = await fetch('http://127.0.0.1:3000/api/boards')
        const json = await res.json()
        const initialBoard:Board = json[0]
        loadBoard(initialBoard)
        
    }

    const onSaveGroup = (group?: Group) => {
        console.log(group)
    }


    // updateGroup(state, { groupId, data }) {
    //     state.prevGroup = state.board.groups.find((g) => g.id === groupId)
    //     let groupToUpdate = state.board.groups.find((g) => g.id === groupId)
    //     groupToUpdate[Object.keys(data)[0]] = data[Object.keys(data)[0]]

    // },


    return (
        <BoardContext.Provider
            value={{
                onAppLoad,
                board,
                setBoard,
                loadBoard,
                onSaveGroup,
            }}
        >
            {children}
        </BoardContext.Provider>
    )
}

export default BoardProvider