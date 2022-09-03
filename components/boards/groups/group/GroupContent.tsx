import GroupAddTask from './GroupAddTask'
import GroupFooter from './GroupFooter'
import GroupHeader from './GroupHeader'
import GroupRow from './GroupRow'
import RowHeader from './RowHeader'


import classes from '../GroupList.module.scss'

const GroupContent = () => {
    return (
        <>
            <GroupHeader />
            <RowHeader />
            <GroupRow />
            <GroupRow />
            <GroupRow />
            <GroupAddTask />
            <GroupFooter />
        </>

    )
}

export default GroupContent