import { useContext } from 'react'
import { useRouter } from 'next/router'
import { BoardContext } from '../../../../store/board'
import KanbanList from '../../../../components/boards/kanban/KanbanList'




const BoardKanban = () => {

    const router = useRouter()
    const { board } = useContext(BoardContext)

    if (router.query.boardId !== board?._id) {
        return (
            <div>
                ERROR
            </div>
        )
    }

    return (
        <>

            <section className={'board-wrapper'}>
                <KanbanList />
            </section>
        </>
    )
}

export default BoardKanban