// import React from "react"
import { boardService } from "../service/boardService"
import React, { createContext, useState, FC, useEffect } from "react"

import { BoardContextState, Props, Board, Group, ColsOrder, Status, Priority, Labels, Col, Idx } from '../service/type'




const contextDefaultValues: BoardContextState = {
    board: null,
    boardGroup: [],
    colsOrderBoard: undefined,
    statusValueBoard: [],
    labelsValueBoard: [],
    priorityValueBoard: [],
    anchorEl: null,
    loadBoard: () => { },
    setBoard: () => { },
    onSaveGroup: () => { },
    onAppLoad: () => { },
    removeGroup: () => { },
    updateTask: () => { },
    onOpenDialogMenu: () => { },
    onCloseDialogMenu: () => { },
}

export const BoardContext = createContext<BoardContextState>(
    contextDefaultValues
)

const BoardProvider: FC<Props> = ({ children }) => {
    const [board, setBoard] = useState<Board | null>(contextDefaultValues.board)
    const [boardGroup, setBoardGroup] = useState<Group[]>([])
    const [colsOrderBoard, setColsOrder] = useState<ColsOrder[] | undefined>(undefined)
    const [statusValueBoard, setStatusValueBoard] = useState<Labels[]>([])
    const [labelsValueBoard, setLabelsValueBoard] = useState<Labels[]>([])
    const [priorityValueBoard, setPriorityValueBoard] = useState<Labels[]>([])
    const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null)


    useEffect(() => {
        if (board) {
            const { colsOrder } = board
            setColsOrder(colsOrder)

        }
    }, [colsOrderBoard, board])

    const loadBoard = (loadedBoard: Board) => setBoard(() => loadedBoard)

    const onAppLoad = async () => {
        const boards = await boardService.query()
        const initialBoard: Board = boards[0]
        loadBoard(initialBoard)
        setBoardGroup(initialBoard.groups)
        setStatusValueBoard(initialBoard.status)
        setLabelsValueBoard(initialBoard.labels)
        setPriorityValueBoard(initialBoard.priority)
    }

    const onSaveGroup = (group?: Group) => {
        if (group && group.id) {

        } else {
            addGroupHandler()
        }
    }

    const addGroupHandler = async () => {
        const newGroup = await boardService.saveGroup(undefined, '63132d01e209b84db1bb4f4a')
        setBoardGroup((preveState) => preveState?.concat(newGroup))
        if (board && boardGroup) {
            board.groups = boardGroup
            // setBoard(()=>{})
        }
    }

    const removeGroup = async (groupId: string) => {
        try {
            setBoardGroup((preveState) => preveState.filter((group: Group) => group.id !== groupId))
            const updatedGroups = await boardService.removeGroup(groupId, '63132d01e209b84db1bb4f4a')

        } catch (error) {
            console.log(error)


        }
    }


    const updateTask = async (newCol: Col, idxs: Idx) => {
        const { groupId, taskId } = idxs
        console.log('here')


        try {
            // const idxs = await boardService.updateTask(newCol, board!._id.toString())

            console.log(groupId)

            const groupIdx = board!.groups.findIndex((group) => group.id === groupId)
            const taskIdx = board!.groups[groupIdx].tasks.findIndex(task => task.id === taskId)
            const colIdx = board!.groups[groupIdx].tasks[taskIdx].cols.findIndex(col => col.type === newCol.type)
            board!.groups[groupIdx].tasks[taskIdx].cols[colIdx] = newCol

            const updatedGroups = board!.groups
            setBoardGroup(() => updatedGroups)


        } catch (error) {
            console.log(error)
        }
        // const group = board.groups[groupIdx]
        // const updatedGroups = await boardService.removeGroup(groupId, '63132d01e209b84db1bb4f4a')

        // state.board.groups[groupIdx].tasks[taskIdx].cols[colIdx] = newCol
    }

    // updateGroup(state, { groupId, data }) {
    //     state.prevGroup = state.board.groups.find((g) => g.id === groupId)
    //     let groupToUpdate = state.board.groups.find((g) => g.id === groupId)
    //     groupToUpdate[Object.keys(data)[0]] = data[Object.keys(data)[0]]

    // },


    const onOpenDialogMenu = (el: HTMLDivElement) => {
        setAnchorEl(el)
    }


    const onCloseDialogMenu = () => {
        setAnchorEl(null)
    }

    return (
        <BoardContext.Provider
            value={{
                onAppLoad,
                board,
                boardGroup,
                colsOrderBoard,
                statusValueBoard,
                labelsValueBoard,
                priorityValueBoard,
                anchorEl,
                setBoard,
                loadBoard,
                onSaveGroup,
                removeGroup,
                updateTask,
                onOpenDialogMenu,
                onCloseDialogMenu
            }}
        >
            {children}
        </BoardContext.Provider>
    )
}

export default BoardProvider