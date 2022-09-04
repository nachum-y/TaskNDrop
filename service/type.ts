import { Double, Int32, ObjectId } from "mongodb"

export type Props = {
    children: React.ReactNode
}

export type Member = {
    fullname: string
    img: string
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

export type Cols = {
    type: string
    value: string | LocationCol | undefined
}


export type Task = {
    id: string
    cols: Cols[]
    isDone: boolean
    createdAt: Double
    createdBy: FullMember
    groupId: string
}


export type Group = {
    title: string
    color: string
    tasks: Task[]
    id: string
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
export type BoardContextState = {
    board: null | Board,
    setBoard: (board: Board) => void
    loadBoard: (boardInitial: Board) => void,
    onSaveGroup: (group?: Group) => void
    onAppLoad: () => void
}

