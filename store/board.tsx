// import React from "react"
import { boardService } from "../service/boardService"
import React, { createContext, useState, FC, useEffect } from "react"

import { BoardContextState, Props, Board, Group, ColsOrder, Status, Priority, Labels, Col, Idx, IdxOpt, menuDialogActionMap, AnchorElCel, Member, FullMember, SelectedTask, AnchorEl, Task, ActiveFilterParam, GroupByLabels } from '../service/type'
import { title } from "process"
import { group } from "console"


const contextDefaultValues: BoardContextState = {
    initialBoardId: undefined,
    board: null,
    boardGroup: [],
    colsOrderBoard: undefined,
    statusValueBoard: [],
    labelsValueBoard: [],
    priorityValueBoard: [],
    boardGroupsByLabel: undefined,
    boardMembers: [],
    activeFilterParam: {
        label: [],
        txt: new RegExp(''),
        person: [],
        status: [],
        priority: []
    },
    selectedTasks: [],
    selectedGroups: [],
    anchorEl: null,
    anchorElCel: null,
    loadBoard: () => { },
    setBoard: () => { },
    updateBoard: () => { },
    onSaveGroup: () => { },
    onAppLoad: () => { },
    removeGroup: () => { },
    toggleCollapseGroup: () => { },
    updateTask: () => { },
    addTask: () => { },
    toggleSelection: () => { },
    toggleAll: () => { },
    removeTasks: () => { },
    duplicateTasks: () => { },
    onSetActiveFilter: () => { },
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
    const [boardGroupsByLabel, setBoardGroupsByLabel] = useState<undefined | GroupByLabels>(contextDefaultValues.boardGroupsByLabel)
    const [boardMembers, setBoardMembers] = useState<FullMember[]>([])
    const [activeFilterParam, setActiveFilterParam] = useState<ActiveFilterParam>(contextDefaultValues.activeFilterParam)
    const [selectedTasks, setSelectedTasks] = useState<SelectedTask[]>(contextDefaultValues.selectedTasks)
    const [selectedGroups, setSelectedGroups] = useState<string[]>(contextDefaultValues.selectedGroups)
    const [anchorEl, setAnchorEl] = useState<AnchorEl | null>(null)
    const [anchorElCel, setAnchorElCel] = useState<AnchorElCel | null>(null)
    const [anchorElIdx, setAnchorElIdx] = useState<IdxOpt | null>(null)
    const [anchorElCelIdx, setAnchorElCelIdx] = useState<IdxOpt | null>(null)




    useEffect(() => {
        if (board) {
            const { colsOrder } = board
            setColsOrder(colsOrder)

        }
    }, [colsOrderBoard, board])




    useEffect(() => {
        if (board && boardGroup) {
            setBoardGroupsByLabel(getGroupsByLabels)
        }
    }, [board, boardGroup])

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
        setBoardGroupsByLabel(getGroupsByLabels)
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


    const toggleCollapseGroup = (groupId: string) => {
        console.log('toggleCollapseGroup')
    }

    const updateTask = async (newCol: Col, idxs: Idx) => {
        const { groupId, taskId } = idxs
        // const data = { groupId, taskId, newCol }
        // const boardId = board!._id.toString()
        try {
            if (board) {
                const newBoard = {
                    ...board

                }
                const groupIdx = board!.groups.findIndex((group) => group.id === groupId)
                const taskIdx = board!.groups[groupIdx].tasks.findIndex(task => task.id === taskId)
                const colIdx = board!.groups[groupIdx].tasks[taskIdx].cols.findIndex(col => col.type === newCol.type)
                newBoard.groups[groupIdx].tasks[taskIdx].cols.splice(colIdx, 1, newCol)

                setBoard(() => newBoard)
                setAnchorEl(null)
                setAnchorElCel(null)
                await boardService.updateBoard(newBoard)
            }


            // const updatedGroups = newBoard.groups

            // setBoardGroup(() => updatedGroups)
            // const newBoard = await boardService.updateTask(data, boardId)
            // setBoard(newBoard)

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

    const addTask = async (groupId: string, title: string) => {
        if (board) {
            const updatedBoard = await boardService.addTask(title, groupId, board._id.toString())
            const { groups } = updatedBoard
            setBoardGroup(() => groups)
            console.log(board)

        }

    }

    const updateBoard = async (newBoard: Board) => {
        await boardService.updateBoard(newBoard)
    }

    useEffect(() => {
        onFilterGroup()
    }, [activeFilterParam])








    const onSetActiveFilter = (filterType: string, filterParam: string) => {

        const key = filterType as string
        if (typeof activeFilterParam[key as keyof ActiveFilterParam] !== 'undefined') {

            let newVal = JSON.parse(JSON.stringify(activeFilterParam[key as keyof ActiveFilterParam]))
            if (Array.isArray(newVal)) {
                if (!newVal.includes(filterParam)) {
                    newVal.push(filterParam)
                } else {
                    newVal = newVal.filter((param) => param !== filterParam)
                }

                let updatedFilter: ActiveFilterParam = {
                    ...activeFilterParam,
                    [key]: newVal
                }
                setActiveFilterParam(() => updatedFilter)
                return
            }

            if (filterType === 'txt') {
                newVal = new RegExp(filterParam, 'i')
                let updatedFilter: ActiveFilterParam = {
                    ...activeFilterParam,
                    [key]: newVal
                }
                setActiveFilterParam(() => updatedFilter)
            }
        }
    }

    const toggleSelection = (selectedTask: SelectedTask) => {
        if (selectedTask) {
            const idx = selectedTasks.findIndex(selected => selected.taskId === selectedTask.taskId)
            if (idx === -1) setSelectedTasks((prevState) => prevState.concat(selectedTask).sort(_compare))
            else {
                setSelectedTasks((state) => state.filter((id, index) => index !== idx))
            }
            if (selectedGroups.includes(selectedTask.groupId)) {
                setSelectedGroups((state) => state.filter((id, index) => id !== selectedTask.groupId))
            }
        }

    }

    const _compare = (a: SelectedTask, b: SelectedTask) => {
        if (a.groupId < b.groupId) {
            return -1
        }
        if (a.groupId > b.groupId) {
            return 1
        }

        return 0
    }

    const toggleAll = (group: Group) => {
        const idx = selectedGroups.findIndex(id => id === group.id)
        if (idx === -1) {
            if (group.tasks.length === 0) return
            setSelectedGroups((prevState) => prevState.concat(group.id))
            let newSelectedTask: SelectedTask[] = JSON.parse(JSON.stringify(selectedTasks))
            group.tasks.forEach(task => newSelectedTask.push({ taskId: task.id, groupId: group.id, color: group.color }))
            // // newSelectedTask = [...new Set(newSelectedTask)]
            setSelectedTasks(() => newSelectedTask)

        }
        else {
            const idsToRemove = group.tasks.map(task => task.id)
            setSelectedTasks((state) => state.filter((selected, index) => !idsToRemove.includes(selected.taskId)))
            setSelectedGroups((state) => state.filter((id, index) => index !== idx))

        }
    }

    const removeTasks = async (id: string | undefined) => {
        let tasksIds
        if (id) tasksIds = id
        else if (!id && selectedTasks.length > 0) {
            tasksIds = selectedTasks.map((selected) => selected.taskId)
            setSelectedTasks(() => [])
        }
        else return
        if (board && tasksIds) {
            const updatedBoard = await boardService.removeTasks(tasksIds, board._id.toString())
            const updatedGroups = updatedBoard.groups
            setBoardGroup(() => updatedGroups)
        }
    }

    const duplicateTasks = async (id: string | undefined) => {
        let tasksIds
        if (id) tasksIds = id
        else if (!id && selectedTasks.length > 0) {
            tasksIds = selectedTasks.map((selected) => selected.taskId)
            setSelectedTasks(() => [])
        }
        else return
        if (board && tasksIds) {
            const updatedGroups = await boardService.duplicateTasks(tasksIds, board._id.toString())
            setBoardGroup(() => updatedGroups)
        }
    }


    const onFilterGroup = () => {
        console.log(activeFilterParam)

        if (board?.groups) {

            const NewBoardGroup = board?.groups.map((g) => {
                let { tasks, color, title, id, isCollapse } = g
                tasks = tasks.filter((t, index) => {
                    if (typeof t.cols[0].value === 'string' && typeof t.cols[index].type === 'string') {
                        return (!activeFilterParam.txt || activeFilterParam.txt.test(t.cols[0].value))
                            && (activeFilterParam.status.length === 0 || _isActiveFilter(t, 'status'))
                        // && (activeFilterParam.label.length === 0 || activeFilterParam.label.includes(t.cols[t.cols.findIndex((typ) => typ.type === 'labelCmp')].value))
                        // && (activeFilterParam.priority.length === 0 || activeFilterParam.priority.includes(t.cols[t.cols.findIndex((typ) => typ.type === 'priority')].value))

                    }
                })

                return ({ tasks, color, title, id, isCollapse })
            })

            if (NewBoardGroup) {
                const gNew = NewBoardGroup.filter((g) => g.tasks.length > 0)
                setBoardGroup(gNew)
            }


        }
    }







    const getGroupsByLabels = () => {
        console.log('getGroupsByLabels')
        console.log(boardGroup)

        if (boardGroup && board) {
            let groupByLabels: GroupByLabels = {}
            boardGroup.forEach(group => groupByLabels = { ...groupByLabels, [group.id]: {} })
            for (const key in groupByLabels) {
                const idx = boardGroup.findIndex(g => g.id === key)
                if (idx === -1) return

                let statusMap = boardGroup[idx].tasks.map((task) => {

                    const statusId = task.cols.find(col => {
                        if (col.type === 'status') {
                            return col.value as string
                        }
                        return
                    })
                    let statusObj
                    if (statusId) statusObj = board.status.find(s => s.id === statusId.value)
                    return statusObj

                })

                let labelMap = boardGroup[idx].tasks.map((task) => {
                    const labelId = task.cols.find(col => {
                        if (col.type === 'labelCmp') {
                            return col.value as string
                        }
                        return
                    })
                    return (board.labels.find(l => l.id === labelId?.value))

                })



                let priorityMap = boardGroup[idx].tasks.map((task) => {
                    const priorityId = task.cols.find(col => {
                        if (col.type === 'priority') {
                            return col.value as string
                        }
                        return
                    })

                    return (board.priority.find(p => p.id === priorityId?.value))
                })


                groupByLabels[key as keyof GroupByLabels] = {
                    status: statusMap as Status[],
                    label: labelMap as Status[],
                    priority: priorityMap as Status[],
                }
            }

            return groupByLabels
        }
    }



    const _isActiveFilter = (task: Task, find: string) => {


        const idx = task.cols.findIndex((c) => c.type === find)
        const key = idx as number


        if (idx !== -1 && task.cols[idx].value && typeof task.cols[idx].value === 'string') {
            return activeFilterParam.status.includes(task.cols[key].value!.toString())
        }

    }



    const onClickDialogMenu = (actionType: string) => {

        const key = actionType as string
        if (anchorElIdx && typeof menuDialogAction[key as keyof menuDialogActionMap] !== 'undefined') {
            setAnchorEl(null)
            menuDialogAction[key as keyof menuDialogActionMap](anchorElIdx)
        }
    }



    const onOpenDialogMenu = (el: HTMLDivElement, idx: IdxOpt, menuType: string) => {

        setAnchorEl(null)
        setAnchorElCel(null)

        setTimeout(() => {
            if (el && menuType && idx) {
                const set: AnchorEl = {
                    anchorEl: el,
                    menuType,
                    idx
                }
                setAnchorEl(() => set)
            }
        }, 0)



        // if (idx) setAnchorElIdx(idx)
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
        deleteThisGroup: (idx: IdxOpt) => idx.groupId ? removeGroup(idx.groupId) : console.log('error'),
        selectAllItems: (idx: IdxOpt) => {
            if (!idx.groupId) return
            const groupiId = idx.groupId
            if (selectedGroups.includes(groupiId)) return
            setSelectedGroups((prevState) => prevState.concat(groupiId))
            const group = board!.groups.find((g) => g.id === groupiId)
            if (group) {
                let newSelectedTask: SelectedTask[] = JSON.parse(JSON.stringify(selectedTasks))
                group.tasks.forEach(task => newSelectedTask.push({ taskId: task.id, groupId: group.id, color: group.color }))
                return setSelectedTasks(() => newSelectedTask)
            }
        }

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
                boardGroupsByLabel,
                boardMembers,
                activeFilterParam,
                selectedTasks,
                selectedGroups,
                anchorEl,
                anchorElCel,
                setBoard,
                loadBoard,
                updateBoard,
                onSaveGroup,
                removeGroup,
                toggleCollapseGroup,
                updateTask,
                addTask,
                toggleSelection,
                toggleAll,
                removeTasks,
                duplicateTasks,
                onSetActiveFilter,
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