import { Double, Int32, ObjectId } from "mongodb"

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
    joinedAt: Double
    lastSeen: Double
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
    createdAt: Double
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
}
export type AnchorElCel = {
    anchorElCel: HTMLSpanElement | null,
    typeClick: string,
    idx: IdxOpt
}



export type BoardContextState = {
    initialBoardId: undefined | string
    board: null | Board,
    boardGroup: Group[]
    colsOrderBoard: ColsOrder[] | undefined
    statusValueBoard: Labels[]
    labelsValueBoard: Labels[]
    priorityValueBoard: Labels[]
    anchorEl: HTMLDivElement | null,
    anchorElCel: AnchorElCel | null,
    setBoard: (board: Board) => void
    loadBoard: (boardInitial: Board) => void
    onSaveGroup: (group?: Group) => void
    onAppLoad: () => void
    removeGroup: (groupId: string) => void
    updateTask: (newCol: Col, idx: Idx) => void
    onOpenDialogMenu: (el: HTMLDivElement, idx?: IdxOpt) => void
    onOpenCelMenu: (el: HTMLSpanElement, idx?: IdxOpt, typeClick?: string) => void
    onClickDialogMenu: (actionType: string) => void
    onCloseDialogMenu: () => void

}

