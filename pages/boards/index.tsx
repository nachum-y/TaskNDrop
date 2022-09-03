import classes from './BoardApp.module.scss'

import BoardAppHeader from '../../components/boards/board-header/BoardAppHeader'
import GroupList from '../../components/boards/groups/GroupList'
const BoardApp = () => {
    return (
        <section className={classes['board-wrapper']}>
            <BoardAppHeader />
            <GroupList />

        </section>
    )
}

export default BoardApp