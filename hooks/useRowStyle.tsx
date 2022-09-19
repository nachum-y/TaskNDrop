import { useContext, useEffect, useState } from "react"
import { Board, Group, GroupByLabels, Labels, ListLabels } from "../service/type"
import { BoardContext } from "../store/board"


const useRowStyle = () => {


    const { userScreenWidth, scrollLeft } = useContext(BoardContext)

    const [rowStyle, setRowStyle] = useState<number>(0)

    useEffect(() => {
        if (userScreenWidth && userScreenWidth < 850) {
            setRowStyle(80)
            if (scrollLeft) {
                if (scrollLeft >= 0 && scrollLeft < 140) {
                    setRowStyle(scrollLeft + 80)
                } else if (scrollLeft >= 140) {
                    setRowStyle(220)
                }

            }
        }

    }, [scrollLeft, userScreenWidth])


    return (rowStyle)
}

export default useRowStyle