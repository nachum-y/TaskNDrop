// import React from "react"
import { boardService } from "../service/boardService"
import React, { createContext, useState, FC, useEffect } from "react"

import { BoardContextState, Props, Board, Group, ColsOrder, Status, Priority, Labels, Col, Idx, IdxOpt, menuDialogActionMap, AnchorElCel, Member, FullMember, SelectedTask, AnchorEl, Task, ActiveFilterParam, GroupByLabels, DropResult, newItem, Modal, TasksByLabel, LabelsCLass, TasksByStatus, DrawerMenuType, SnacbarUserMessage } from '../service/type'
import { title } from "process"
import { group } from "console"
import { json } from "stream/consumers"


const contextDefaultValues: BoardContextState = {
    initialBoardId: undefined,
    board: null,
    boardGroup: [],
    colsOrderBoard: undefined,
    statusValueBoard: [],
    labelsValueBoard: [],
    priorityValueBoard: [],
    boardGroupsByLabel: undefined,
    kanbanStatus: 'status',
    kanbanColList: ['person', 'date', 'status'],
    boardTasksByLabel: undefined,
    boardMembers: [],
    activeFilterParam: {
        isActive: false,
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
    modal: null,
    drawerMenu: null,
    scrollLeft: 0,
    userScreenWidth: undefined,
    isMobileView: false,
    snacbarUserMessage: null,
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
    onDragEnd: () => { },
    onSetActiveFilter: () => { },
    setTasksByLabels: () => { },
    setKanbanStatus: () => { },
    setKanbanColList: () => { },
    onOpenDialogMenu: () => { },
    onOpenCelMenu: () => { },
    onSetModal: () => { },
    setDrawerMenu: () => { },
    onCloseDialogMenu: () => { },
    onClickDialogMenu: () => { },
    setScrollLeft: () => { },
    setSnacbarUserMessage: () => { },
}

export const BoardContext = createContext<BoardContextState>(
    contextDefaultValues
)

const BoardProvider: FC<Props> = ({ children }) => {

    const [initialBoardId, setInitialBoardId] = useState<undefined | string>('632336ac4e7e4d793cb0d9db')
    const [board, setBoard] = useState<Board | null>(contextDefaultValues.board)
    const [boardGroup, setBoardGroup] = useState<Group[]>([])
    const [colsOrderBoard, setColsOrder] = useState<ColsOrder[] | undefined>(undefined)
    const [statusValueBoard, setStatusValueBoard] = useState<Labels[]>([])
    const [labelsValueBoard, setLabelsValueBoard] = useState<Labels[]>([])
    const [priorityValueBoard, setPriorityValueBoard] = useState<Labels[]>([])
    const [boardGroupsByLabel, setBoardGroupsByLabel] = useState<undefined | GroupByLabels>(contextDefaultValues.boardGroupsByLabel)
    const [kanbanStatus, setKanbanStatus] = useState<string>(contextDefaultValues.kanbanStatus)
    const [kanbanColList, setKanbanColList] = useState<string[]>(contextDefaultValues.kanbanColList)
    const [boardTasksByLabel, setBoardTasksByLabel] = useState<undefined | TasksByStatus>(contextDefaultValues.boardTasksByLabel)
    const [boardMembers, setBoardMembers] = useState<FullMember[]>([])
    const [activeFilterParam, setActiveFilterParam] = useState<ActiveFilterParam>(contextDefaultValues.activeFilterParam)
    const [selectedTasks, setSelectedTasks] = useState<SelectedTask[]>(contextDefaultValues.selectedTasks)
    const [selectedGroups, setSelectedGroups] = useState<string[]>(contextDefaultValues.selectedGroups)
    const [anchorEl, setAnchorEl] = useState<AnchorEl | null>(null)
    const [anchorElCel, setAnchorElCel] = useState<AnchorElCel | null>(null)
    const [modal, setModal] = useState<Modal>(null)
    const [drawerMenu, setDrawerMenu] = useState<DrawerMenuType>(null)
    const [scrollLeft, setScrollLeft] = useState<number>(contextDefaultValues.scrollLeft)
    const [userScreenWidth, setUserScreenWidth] = useState<number | undefined>()
    const [isMobileView, setIsMobileView] = useState<boolean>(false)
    const [snacbarUserMessage, setSnacbarUserMessage] = useState<SnacbarUserMessage>(null)




    useEffect(() => {
        if (board) {
            const { colsOrder } = board
            setColsOrder(colsOrder)
            // setBoardGroup(() => board.groups)

        }
    }, [colsOrderBoard, board])




    useEffect(() => {
        if (board && boardGroup) {
            setBoardGroupsByLabel(getGroupsByLabels)

        }
    }, [board, boardGroup])



    const updateBoardState = (newBoard: Board, afterSave?: boolean) => {
        if (board) {
            setBoard((prev) => {
                if (activeFilterParam.isActive) {
                    onFilterGroup(newBoard)
                    return newBoard
                }
                setBoardGroup(() => newBoard.groups)
                return newBoard
            })
            if (!afterSave) updateBoard(newBoard)
        }

    }


    const updateGroupdState = (newGroups: Group[]) => {
        if (board) {
            setBoardGroup(() => newGroups)
            if (activeFilterParam.isActive) return
            let updateedBoard: Board = JSON.parse(JSON.stringify(board))
            updateedBoard.groups = newGroups
            setBoard((prev) => updateedBoard)

        }

    }

    const loadBoard = (loadedBoard: Board) => setBoard(() => loadedBoard)


    useEffect(() => {
        if (window) {
            setUserScreenWidth(window.innerWidth)
            setIsMobileView(() => window.innerWidth < 850)
            window.addEventListener('resize', _handleWindowSizeChange)
            return () => {
                window.removeEventListener('resize', _handleWindowSizeChange)
            }
        }
    }, [])






    const onAppLoad = async () => {
        const boards = await boardService.query()
        const initialBoard: Board = boards[1]
        loadBoard(initialBoard)
        setBoardGroup(initialBoard.groups)
        setStatusValueBoard(initialBoard.status)
        setLabelsValueBoard(initialBoard.labels)
        setPriorityValueBoard(initialBoard.priority)
        setBoardMembers(initialBoard.members)
        setBoardGroupsByLabel(getGroupsByLabels)
        // setInitialBoardId(board?._id.toString())
        // router.replace(`/boards/${initialBoard._id}`)
    }

    const getInitialBoardId = async () => {
        const boardIdInitial = await boardService.initialBoardId()
        setInitialBoardId(boardIdInitial)

    }

    const onSaveGroup = (group?: Group) => {
        if (group && group.id) {

        } else {
            addGroupHandler()
        }
    }

    const addGroupHandler = async () => {
        const newGroup: Group = await boardService.saveGroup(undefined, board!._id.toString())

        if (board && newGroup) {
            // let newBoard: Board = JSON.parse(JSON.stringify(board))
            // newBoard.groups.push(newGroup)
            // const { groups: newGroups } = newBoard

            setBoardGroup((prevState) => prevState.concat(newGroup))
            let updatedBoard: Board = JSON.parse(JSON.stringify(board))
            updatedBoard.groups.push(newGroup)
            setBoard((prevState) => updatedBoard)
        }
    }


    const removeGroup = async (groupId: string) => {

        try {
            let updatedGroup = boardGroup.filter((group: Group) => group.id !== groupId)
            // setBoardGroup(updatedGroup)
            let updatedBoard: Board = JSON.parse(JSON.stringify(board))
            updatedBoard.groups = updatedGroup
            updateBoardState(updatedBoard)
            // const updatedGroups = await boardService.removeGroup(groupId, board!._id.toString())

        } catch (error) {
            console.log(error)


        }
    }


    const toggleCollapseGroup = (groupId: string) => {
        if (!board) return
        const idx = board.groups.findIndex(g => g.id === groupId)
        const groupToEdit = board.groups[idx]
        let updatedGroup = {
            ...groupToEdit,
            isCollapse: !groupToEdit.isCollapse
        }

        let update: Board = JSON.parse(JSON.stringify(board))
        update.groups.splice(idx, 1, updatedGroup)

        updateBoardState(update)
    }

    const toggleCollapseAllGroups = () => {
        if (!board) return

        const idx = board.groups.map(g => g.id)
        let update: Board = JSON.parse(JSON.stringify(board))

        idx.forEach(id => {
            const index = board.groups.findIndex(g => g.id === id)
            const groupToEdit = board.groups[index]
            if (groupToEdit.isCollapse) return
            let updatedGroup = {
                ...groupToEdit,
                isCollapse: true
            }
            update.groups.splice(index, 1, updatedGroup)
        })

        updateBoardState(update)
    }



    const updateTask = async (newCol: Col, idxs: Idx) => {
        const { groupId, taskId } = idxs
        // const data = { groupId, taskId, newCol }
        // const boardId = board!._id.toString()
        try {
            if (board) {
                let newBoard: Board = JSON.parse(JSON.stringify(board))
                // let newGroups: Group[] = JSON.parse(JSON.stringify(boardGroup))
                const groupIdx = newBoard.groups.findIndex((group) => group.id === groupId)
                const taskIdx = newBoard.groups[groupIdx].tasks.findIndex(task => task.id === taskId)
                const colIdx = newBoard.groups[groupIdx].tasks[taskIdx].cols.findIndex(col => col.type === newCol.type)
                newBoard.groups[groupIdx].tasks[taskIdx].cols.splice(colIdx, 1, newCol)

                // const { groups } = newBoard
                updateBoardState(newBoard)
                // updateGroupdState(newGroups)
                // updateBoardState(newBoard)
                setAnchorEl(null)
                setAnchorElCel(null)
                // await boardService.updateBoard(newBoard)
            }
        } catch (error) {
            console.log(error)
        }

    }


    const addTask = async (groupId: string, title: string) => {
        if (board) {
            try {
                const updatedBoard = await boardService.addTask(title, groupId, board._id.toString())
                updateBoardState(updatedBoard)
            } catch (error) {

                setSnacbarUserMessage({
                    setOpen: true,
                    message: 'Error',
                    severity: 'error'
                })

            }
        }

    }

    const newItem = async (newItemObj: newItem) => {
        if (board) {
            const groupIdx = board.groups.findIndex(g => g.id === newItemObj.groupId)
        }

    }

    const updateBoard = async (newBoard: Board) => {
        await boardService.updateBoard(newBoard)
    }

    useEffect(() => {

        if (!activeFilterParam.isActive && board) {
            updateGroupdState(board.groups)
            return
        }

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
                    [key]: newVal,
                    isActive: newVal.length > 0 ? true : false

                }
                setActiveFilterParam(() => updatedFilter)
                return
            }

            if (filterType === 'txt') {
                newVal = new RegExp(filterParam, 'i')
                let updatedFilter: ActiveFilterParam = {
                    ...activeFilterParam,
                    [key]: newVal,
                    isActive: filterParam.trim().length > 0 ? true : false
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
            let numberOfItem
            typeof tasksIds === 'string' ? numberOfItem = `1 items` : numberOfItem = `${tasksIds.length} items`

            if (tasksIds)
                try {
                    const updatedBoard = await boardService.removeTasks(tasksIds, board._id.toString())
                    updateBoardState(updatedBoard, true)
                    setSnacbarUserMessage({
                        setOpen: true,
                        message: `We successfully deleted ${numberOfItem} item`,
                        severity: 'success'
                    })
                } catch (error) {
                    setSnacbarUserMessage({
                        setOpen: true,
                        message: 'Error',
                        severity: 'error'
                    })
                }

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
            const updatedBoard: Board = await boardService.duplicateTasks(tasksIds, board._id.toString())
            updateBoardState(updatedBoard, true)
        }
    }


    const onDragEnd = (result: DropResult) => {

        const { destination, source } = result
        if (!destination) return
        if (!board) return
        let updateBoard: Board = JSON.parse(JSON.stringify(board))
        const sourceIdx = board!.groups.findIndex((group) => group.id === source.droppableId)
        const destinationIdx = board!.groups.findIndex((group) => group.id === destination.droppableId)

        var dragItem = updateBoard.groups[sourceIdx].tasks[result.source.index]
        updateBoard.groups[sourceIdx].tasks.splice(
            result.source.index,
            1
        )
        updateBoard.groups[destinationIdx].tasks.splice(
            result.destination.index,
            0,
            dragItem
        )

        if (source.droppableId !== destination.droppableId) {
            dragItem.groupId = destination.droppableId
        }

        updateBoardState(updateBoard)

    }


    const onFilterGroup = (updatedBoard?: Board) => {
        let updateBoard
        if (updatedBoard) {
            updateBoard = updatedBoard
        }
        else {
            updateBoard = board
        }

        if (updateBoard && board && board.groups) {

            const NewBoardGroup = updateBoard.groups.map((g) => {
                let { tasks, color, title, id, isCollapse } = g
                tasks = tasks.filter((t, index) => {
                    if (typeof t.cols[0].value === 'string') {
                        return (!activeFilterParam.txt || activeFilterParam.txt.test(t.cols[0].value))
                            && (activeFilterParam.status.length === 0 || _isActiveFilter(t, 'status'))
                            && (activeFilterParam.label.length === 0 || _isActiveFilter(t, 'labelCmp'))
                            && (activeFilterParam.priority.length === 0 || _isActiveFilter(t, 'priority'))
                    }
                })

                return ({ tasks, color, title, id, isCollapse })
            })

            if (NewBoardGroup) {
                const gNew: Group[] = NewBoardGroup.filter((g) => g.tasks.length > 0)
                setBoardGroup(gNew)
            }


        }
    }


    const getGroupsByLabels = () => {
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


    const setTasksByLabels = () => {
        if (board) {
            let colType = kanbanStatus === 'labelCmp' ? 'labels' : kanbanStatus

            const statusKey = board[colType as keyof Board]

            if (Array.isArray(statusKey)) {
                const statusKeyLabels = statusKey as Labels[]

                let tasksByStatus: TasksByStatus = {}

                statusKeyLabels.forEach(status => tasksByStatus[status.id as keyof TasksByStatus] = { tasks: [], color: status.color, title: status.title, id: status.id })

                boardGroup.forEach(group => {
                    group.tasks.forEach(task => {
                        const statusId = _findTasksByStatus(task, kanbanStatus)
                        if (statusId) {
                            tasksByStatus[statusId as keyof TasksByStatus]?.tasks.push(task)
                        }
                    })
                })
                setBoardTasksByLabel(() => tasksByStatus)
            }
        }


    }

    const _isActiveFilter = (task: Task, find: string) => {
        // if(find === 'La')

        const idx = task.cols.findIndex((c) => c.type === find)
        const key = idx as number


        if (idx !== -1 && task.cols[idx].value && typeof task.cols[idx].value === 'string') {
            let index = find === 'labelCmp' ? 'label' : find
            const findIdx = activeFilterParam[index as keyof ActiveFilterParam]
            return Array.isArray(findIdx) ? findIdx.includes(task.cols[key].value!.toString()) : false
        }

    }

    const _findTasksByStatus = (task: Task, find: string) => {

        const idx = task.cols.findIndex((c) => c.type === find)
        const key = idx as number
        const taskVal = task.cols[idx]

        if (idx !== -1 && taskVal.value && typeof taskVal.value === 'string') {
            let index = find === 'labelCmp' ? 'label' : find
            return taskVal.value
            // const findIdx = activeFilterParam[index as keyof ActiveFilterParam]
            // return Array.isArray(findIdx) ? findIdx.includes(task.cols[key].value!.toString()) : false
        }

    }

    const copyTextToClipboard = (idx: IdxOpt) => {
        // Get the text field
        const { groupId, taskId } = idx
        if (groupId && taskId && board) {
            let group = board.groups.find(g => g.id === groupId)
            if (group) {
                let task = group.tasks.find(t => t.id === taskId)
                let textToCopy = task?.cols[0].value

                if (typeof textToCopy === 'string') {
                    navigator.clipboard.writeText(textToCopy)
                }
            }
        }
    }

    const onClickDialogMenu = (actionType: string) => {

        const key = actionType as string

        if (anchorEl && typeof menuDialogAction[key as keyof menuDialogActionMap] !== 'undefined') {
            menuDialogAction[key as keyof menuDialogActionMap](anchorEl.idx)
            setAnchorEl(null)
        }
    }


    const onSetModal = (newModal: Modal) => {

        setModal(() => newModal)
    }

    const onOpenDialogMenu = (el: HTMLDivElement, menuType: string, idx?: IdxOpt) => {

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
        // if (idx) setAnchorElCelIdx(idx)
    }


    const onCloseDialogMenu = () => {
        setAnchorEl((prev) => null)
        setAnchorElCel((prev) => null)
    }


    const _handleWindowSizeChange = () => {
        setUserScreenWidth(window.innerWidth)
    }

    const menuDialogAction: menuDialogActionMap = {
        deleteThisGroup: (idx?: IdxOpt | undefined) => idx?.groupId ? removeGroup(idx.groupId) : console.log('error'),
        selectAllItems: (idx?: IdxOpt) => {
            if (!idx?.groupId) return
            const groupiId = idx.groupId
            if (selectedGroups.includes(groupiId)) return
            setSelectedGroups((prevState) => prevState.concat(groupiId))
            const group = board!.groups.find((g) => g.id === groupiId)
            if (group) {
                let newSelectedTask: SelectedTask[] = JSON.parse(JSON.stringify(selectedTasks))
                group.tasks.forEach(task => newSelectedTask.push({ taskId: task.id, groupId: group.id, color: group.color }))
                return setSelectedTasks(() => newSelectedTask)
            }
        },
        colapseThisGroup: (idx?: IdxOpt) => idx?.groupId ? toggleCollapseGroup(idx?.groupId) : console.log('error'),
        colapseAllGroups: () => toggleCollapseAllGroups(),
        deleteThisTask: (idx?: IdxOpt) => idx?.taskId ? removeTasks(idx.taskId) : console.log('error'),
        duplicateThisTask: (idx?: IdxOpt) => idx?.taskId ? duplicateTasks(idx.taskId) : console.log('error'),
        copyTaskName: (idx?: IdxOpt) => idx ? copyTextToClipboard(idx) : console.log('error'),


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
                kanbanStatus,
                kanbanColList,
                boardTasksByLabel,
                boardMembers,
                activeFilterParam,
                selectedTasks,
                selectedGroups,
                anchorEl,
                anchorElCel,
                modal,
                drawerMenu,
                scrollLeft,
                userScreenWidth,
                isMobileView,
                snacbarUserMessage,
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
                onDragEnd,
                onSetActiveFilter,
                setTasksByLabels,
                setKanbanStatus,
                setKanbanColList,
                onOpenDialogMenu,
                onOpenCelMenu,
                onSetModal,
                setDrawerMenu,
                onClickDialogMenu,
                onCloseDialogMenu,
                setScrollLeft,
                setSnacbarUserMessage,
            }}
        >
            {children}
        </BoardContext.Provider>
    )
}

export default BoardProvider