// import React from "react"
import React, { createContext, useState, FC, useEffect } from "react"

import { BoardContextState, Props, Board, Group, ColsOrder, Status, Priority, Labels } from '../service/type'




const contextDefaultValues: BoardContextState = {
    board: null,
    colsOrderBoard: undefined,
    statusValueBoard: [],
    labelsValueBoard: [],
    priorityValueBoard: [],
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

    const [colsOrderBoard, setColsOrder] = useState<ColsOrder[] | undefined>(undefined)
    const [statusValueBoard, setStatusValueBoard] = useState<Labels[]>([])
    const [labelsValueBoard, setLabelsValueBoard] = useState<Labels[]>([])
    const [priorityValueBoard, setPriorityValueBoard] = useState<Labels[]>([])



    useEffect(() => {
        if (board) {
            const { colsOrder } = board
            setColsOrder(colsOrder)

        }
    }, [colsOrderBoard, board])

    const loadBoard = (loadedBoard: Board) => setBoard(() => loadedBoard)

    const onAppLoad = async () => {
        const res = await fetch('/api/boards')
        const json = await res.json()
        const initialBoard: Board = json[0]
        loadBoard(initialBoard)
        setStatusValueBoard(initialBoard.status)
        setLabelsValueBoard(initialBoard.labels)
        setPriorityValueBoard(initialBoard.priority)
    }

    const onSaveGroup = (group?: Group) => {
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
                colsOrderBoard,
                statusValueBoard,
                labelsValueBoard,
                priorityValueBoard,
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