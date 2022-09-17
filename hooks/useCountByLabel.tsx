import { useContext, useEffect, useState } from "react"
import { Board, Group, GroupByLabels, Labels, ListLabels } from "../service/type"
import { BoardContext } from "../store/board"

type StatusCount = {
    id?: number
}
const useCountByLabel = (status: string) => {

    const [count, setCount] = useState<StatusCount>()
    const [statusSearch, setStatusSearch] = useState<Labels[]>()
    const { boardGroupsByLabel, statusValueBoard, labelsValueBoard, priorityValueBoard } = useContext(BoardContext)
    useEffect(() => {
        switch (status) {
            case 'status':
                setStatusSearch(statusValueBoard)
                break
            case 'label':
                setStatusSearch(labelsValueBoard)
                break
            case 'priority':
                setStatusSearch(priorityValueBoard)
                break

            default:
                break
        }
    }, [status])

    useEffect(() => {
        if (boardGroupsByLabel && statusSearch) {
            let statusCount: StatusCount = {}
   

            statusSearch.forEach(s => statusCount[s.id as keyof StatusCount] = 0)
            Object.keys(boardGroupsByLabel).map(g => {

                const group = boardGroupsByLabel[g as keyof GroupByLabels]
                if (group) {
                    group[status as keyof ListLabels].forEach(status => {
                        statusCount[status.id as keyof StatusCount]! += 1
                    })
                }
            })
            setCount(statusCount)

        }

    }, [boardGroupsByLabel,statusSearch])


    return (count)
}

export default useCountByLabel