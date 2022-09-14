import { Double, Int32, ObjectId } from "mongodb"
import { type } from "os"

export type Props = {
    children: React.ReactNode
}

export type Member = {
    fullname: string
    imgUrl: string
    id: string
}

export type Labels = {
    title: string
    color: string
    id: string
}

export type Status = {
    title: string
    color: string
    id: string
}

export type Priority = {
    title: string
    color: string
    id: string
}

export type FullMember = {
    id: string
    name: string
    email: string
    isAdmin: boolean
    joinedAt: Double | number
    lastSeen: Double | number
    imgUrl: string
    color: string

}

export type ColsOrder = {
    title: string
    type: string
}


export type LngLat = {
    lat: string
    lng: string
}

export type LocationCol = {
    title: string
    lnglat: LngLat
}

export type Col = {
    type: string
    value: string | LocationCol | Member[] | number | undefined
}


export type Task = {
    id: string
    cols: Col[]
    isDone: boolean
    createdAt: Double | number
    createdBy: FullMember
    groupId: string
}


export type Group = {
    title: string
    color: string
    tasks: Task[]
    id: string,
    isCollapse: boolean
}

export type Board = {

    _id: ObjectId
    title: string
    createdAt: Int32
    beMember: Member
    labels: Labels[]
    status: Status[]
    priority: Priority[]
    members: FullMember[]
    colsOrder: ColsOrder[]
    groups: Group[]
}



export type Idx = {
    groupId: string,
    taskId: string,
    // colIdx: string
}


export type IdxOpt = {
    groupId?: string
    taskId?: string,
}


export type menuDialogActionMap = {
    deleteThisGroup: (groupId: IdxOpt) => void
    selectAllItems: (groupId: IdxOpt) => void
}
export type AnchorElCel = {
    anchorElCel: HTMLSpanElement | null,
    idx: IdxOpt
    taskCol: Col,
}
export type AnchorEl = {
    anchorEl: HTMLSpanElement | null,
    menuType: string,
    idx: IdxOpt
}

export type ActiveFilterParam = {
    label: string[],
    txt: RegExp,
    person: string[],
    status: string[],
    priority: string[]
}

export type EmptyCol = {
    type: string
    value: string | number | undefined | []
}

export type SelectedTask = {
    taskId: string
    groupId: string
    color: string
}




export type GroupByLabels = {
    id?: ListLabels
}

export type ListLabels = {
    status: Labels[]
    label: Labels[]
    priority: Labels[]
}



export type BoardContextState = {
    initialBoardId: undefined | string
    board: null | Board,
    boardGroup: Group[]
    colsOrderBoard: ColsOrder[] | undefined
    statusValueBoard: Labels[]
    labelsValueBoard: Labels[]
    priorityValueBoard: Labels[]
    boardGroupsByLabel: undefined | GroupByLabels
    boardMembers: FullMember[]
    activeFilterParam: ActiveFilterParam
    selectedTasks: SelectedTask[]
    selectedGroups: string[]
    anchorEl: AnchorEl | null
    anchorElCel: AnchorElCel | null
    setBoard: (board: Board) => void
    loadBoard: (boardInitial: Board) => void
    onSaveGroup: (group?: Group) => void
    onAppLoad: () => void
    removeGroup: (groupId: string) => void
    updateBoard: (board: Board) => void
    updateTask: (newCol: Col, idx: Idx) => void
    addTask: (groupId: string, title: string) => void
    toggleSelection: (selectedTask: SelectedTask) => void
    toggleAll: (group: Group) => void
    removeTasks: (tasksIds: string | undefined) => void
    duplicateTasks: (tasksIds: string | undefined) => void
    // onSearchInput: (input: string) => void
    onSetActiveFilter: (filterType: string, filterParam: string) => void
    onOpenDialogMenu: (el: HTMLDivElement, idx: IdxOpt, menuType: string) => void
    onOpenCelMenu: (el: HTMLSpanElement, idx?: IdxOpt, taskCol?: Col) => void
    onClickDialogMenu: (actionType: string) => void
    onCloseDialogMenu: () => void

}

