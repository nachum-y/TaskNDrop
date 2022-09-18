import { useContext, useEffect, useRef, ReactElement } from "react"
import { BoardContext } from "../../../store/board"
import { Wrapper, Status } from "@googlemaps/react-wrapper"
import MapView from "./MapView"
import { useState } from "react"
import { LocationCol, Task } from "../../../service/type"
import classes from './Map.module.scss'
import useTasksLocation from "../../../hooks/useTasksLocation"


type LocationTasks = {
    location: LocationCol
    task: Task
} | undefined


const Map = () => {
    const { boardGroup, colsOrderBoard } = useContext(BoardContext)
    const center = { lat: -34.397, lng: 150.644 }
    const zoom = 18

    const [tasksMap, setTasksMap] = useState<LocationTasks[]>([])

    const locationMapList = useTasksLocation()

    useEffect(() => {
        setTasksMap(locationMapList)


    }, [locationMapList])


    const { NEXT_PUBLIC_GOOGLE_MAP_KEY } = process.env

    return (
        <div className={classes['map-content']}>
            <div className={classes['map-page']}>
                {tasksMap.length > 0 && tasksMap.map((task) => (<Wrapper key={task?.task.id} apiKey={NEXT_PUBLIC_GOOGLE_MAP_KEY as string}>
                    <MapView
                        center={task?.location.lnglat as unknown as google.maps.LatLngLiteral}
                        zoom={zoom} />
                </Wrapper>))}
                {tasksMap.length === 0 && (<div>No Task in map</div>)}
            </div>
        </div>
    )
}

export default Map