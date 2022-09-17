import { useContext } from "react"
import { BoardContext } from "../../../store/board"
import MapView from "./MapView"

const Map = () => {
    const { } = useContext(BoardContext)
    return (
        <div className="map-content">
            <div className="map-page">
                taskLocationLits? -- loop
                <div>
                    <MapView />
                </div>
            </div>
        </div>
    )
}

export default Map