// import React from "react"
import React, { createContext, useState, FC } from "react"

import { BoardContextState, Props, Board } from '../service/type'


// const BoardContext = React.createContext({
//     board: null,
//     prevGroup: null,
//     activeMember: null,
//     filterdTask: [],
//     kanbanStatus: 'status',
//     activeFilter: 'all',
//     activeFilterVal: {
//         txt: ''
//     },
//     activeFilterParam: {
//         label: [],
//         txt: '',
//         person: [],
//         status: [],
//         priority: []
//     },
//     sortBy: {
//         activeSort: 'createdAt',
//         sortDir: 1,
//         isAvtice: false
//     },
//     currTask: null,
// })








// export default BoardContext



const contextDefaultValues: BoardContextState = {
    board: null,
    test: 'hey',
    changeText: () => { },
    onAppLoad: () => { }

}

export const BoardContext = createContext<BoardContextState>(
    contextDefaultValues
)

const BoardProvider: FC<Props> = ({ children }) => {
    const [board, setBoard] = useState<Board | null>(contextDefaultValues.board)
    const [test, setTest] = useState<string>(contextDefaultValues.test)

    const changeText = async (text: string) => setTest(() => text)

    const onAppLoad = (boardInitial: Board) => setBoard(() => boardInitial)


    return (
        <BoardContext.Provider
            value={{
                board,
                test,
                changeText,
                onAppLoad
            }}
        >
            {children}
        </BoardContext.Provider>
    )
}

export default BoardProvider