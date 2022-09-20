import { useContext, useEffect, useState } from "react"
import { Board, Group, GroupByLabels, Labels, ListLabels, LocationCol, Task } from "../service/type"
import { BoardContext } from "../store/board"

type LocationTasks = {

    location: LocationCol
    task: Task
} | undefined


const useTasksLocation = () => {

    const [tasksMap, setTasksMap] = useState<LocationTasks[]>([])
    const { boardGroup } = useContext(BoardContext)

    useEffect(() => {
        if (boardGroup) {

            let tasksList = boardGroup.map(g => {
                return g.tasks.map(task => task)
            })




            let letLocationList = tasksList.flat().map((t) => {
                let location = t.cols.find((tCols) => {
                    return tCols.type === 'location'
                })
                if (location?.value && typeof location?.value !== 'string' && typeof location?.value !== 'number' && !Array.isArray(location?.value)) {

                    return ({
                        task: t,
                        location: location.value,
                    })
                }
            })
            const locationTasksList: LocationTasks[] | undefined = letLocationList.filter(t => t) || undefined
            if (locationTasksList) {
                setTasksMap(() => locationTasksList)
            }

        }

    }, [boardGroup])



    return (tasksMap)
}

export default useTasksLocation