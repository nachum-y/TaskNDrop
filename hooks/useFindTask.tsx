import { useContext, useEffect, useState } from "react"
import { Task } from "../service/type"
import { BoardContext } from "../store/board"


type StatusCount = {
    id?: number
}
const useFindTask = (taskId: string) => {


    const { board } = useContext(BoardContext)
    const [findTask, setFindTask] = useState<Task | undefined>(undefined)

    useEffect(() => {
        if (board && taskId) {


            let groupsMap = board.groups.map(group => group.tasks)
            let taskIsFind = groupsMap.flat().find(task => task.id === taskId)
            if (taskIsFind) {
                setFindTask(() => taskIsFind)
            }

        }

    }, [board])


    return (findTask)
}

export default useFindTask