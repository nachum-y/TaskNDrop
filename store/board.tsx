// import React from "react"
import { boardService } from "../service/boardService"
import React, { createContext, useState, FC, useEffect } from "react"

import { BoardContextState, Props, Board, Group, ColsOrder, Status, Priority, Labels, Col, Idx, IdxOpt, menuDialogActionMap, AnchorElCel, Member, FullMember } from '../service/type'


const contextDefaultValues: BoardContextState = {
    initialBoardId: undefined,
    board: null,
    boardGroup: [],
    colsOrderBoard: undefined,
    statusValueBoard: [],
    labelsValueBoard: [],
    priorityValueBoard: [],
    boardMembers: [],
    anchorEl: null,
    anchorElCel: null,
    loadBoard: () => { },
    setBoard: () => { },
    onSaveGroup: () => { },
    onAppLoad: () => { },
    removeGroup: () => { },
    updateTask: () => { },
    onOpenDialogMenu: () => { },
    onOpenCelMenu: () => { },
    onCloseDialogMenu: () => { },
    onClickDialogMenu: () => { },
}

export const BoardContext = createContext<BoardContextState>(
    contextDefaultValues
)

const BoardProvider: FC<Props> = ({ children }) => {

    const [initialBoardId, setInitialBoardId] = useState<undefined | string>('63132d01e209b84db1bb4f4a')
    const [board, setBoard] = useState<Board | null>(contextDefaultValues.board)
    const [boardGroup, setBoardGroup] = useState<Group[]>([])
    const [colsOrderBoard, setColsOrder] = useState<ColsOrder[] | undefined>(undefined)
    const [statusValueBoard, setStatusValueBoard] = useState<Labels[]>([])
    const [labelsValueBoard, setLabelsValueBoard] = useState<Labels[]>([])
    const [priorityValueBoard, setPriorityValueBoard] = useState<Labels[]>([])
    const [boardMembers, setBoardMembers] = useState<FullMember[]>([])
    const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null)
    const [anchorElCel, setAnchorElCel] = useState<AnchorElCel | null>(null)
    const [anchorElIdx, setAnchorElIdx] = useState<IdxOpt | null>(null)
    const [anchorElCelIdx, setAnchorElCelIdx] = useState<IdxOpt | null>(null)





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
        setBoardMembers(initialBoard.members)
        // router.replace(`/boards/${initialBoard._id}`)
    }

    const getInitialBoardId = async () => {
        const boardIdInitial = await boardService.initialBoardId()
        setInitialBoardId(boardIdInitial)
        console.log(boardIdInitial)

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
        const data = { groupId, taskId, newCol }
        const boardId = board!._id.toString()
        try {
            const idxs = await boardService.updateTask(data, boardId)

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




    const onClickDialogMenu = (actionType: string) => {

        const key = actionType as string
        if (anchorElIdx && typeof menuDialogAction[key as keyof menuDialogActionMap] !== 'undefined') {
            setAnchorEl(null)
            menuDialogAction[key as keyof menuDialogActionMap](anchorElIdx)
        }
    }



    const onOpenDialogMenu = (el: HTMLDivElement, idx?: IdxOpt) => {
        setAnchorEl(null)
        setAnchorElCel(null)

        setAnchorEl(el)

        if (idx) setAnchorElIdx(idx)
    }

    const onOpenCelMenu = (el: HTMLSpanElement, idx?: IdxOpt, taskCol?: Col) => {
        setTimeout(() => {
            if (taskCol && typeof taskCol.type === 'string' && el && idx) {
                const set: AnchorElCel = {
                    anchorElCel: el,
                    taskCol,
                    idx: idx
                }
                setAnchorElCel(() => set)

            }
        }, 0)
        if (idx) setAnchorElCelIdx(idx)
    }


    const onCloseDialogMenu = () => {
        setAnchorEl((prev) => null)
        setAnchorElCel((prev) => null)
    }



    const menuDialogAction: menuDialogActionMap = {
        deleteThisGroup: (idx: IdxOpt) => idx.groupId ? removeGroup(idx.groupId) : console.log('error')
    }

    return (
        <BoardContext.Provider
            value={{
                onAppLoad,
                initialBoardId,
                board,
                boardGroup,
                colsOrderBoard,
                statusValueBoard,
                labelsValueBoard,
                priorityValueBoard,
                boardMembers,
                anchorEl,
                anchorElCel,
                setBoard,
                loadBoard,
                onSaveGroup,
                removeGroup,
                updateTask,
                onOpenDialogMenu,
                onOpenCelMenu,
                onClickDialogMenu,
                onCloseDialogMenu
            }}
        >
            {children}
        </BoardContext.Provider>
    )
}

export default BoardProvider