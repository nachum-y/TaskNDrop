import { useState, useContext, useEffect } from 'react'
import { BoardContext } from '../../../store/board'
import classes from './BoardSubHeader.module.scss'
import SearchFilter from './filters/SearchFilter'
import StatusFilter from './filters/StatusFilter'





const BoardFilter = () => {

    const { onSetActiveFilter, onOpenDialogMenu, activeFilterParam, isMobileView, setDrawerMenu } = useContext(BoardContext)
    const [focused, setFocused] = useState(false)
    const [expandable, setExpandable] = useState(false)


    const setFilterParam = (type: string, val: string) => {
        onSetActiveFilter(type, val)
    }

    const handleClick = () => {
        setFocused((preveState) => !preveState)
        setExpandable((preveState) => !preveState)
    }

    const openDialogMenu = (event: React.MouseEvent<HTMLDivElement>) => {
        if (isMobileView) {
            const menuParam = {
                setOpen: true,
                menuType: 'FilterViewMenu',
                title: 'Filter'
            }
            setDrawerMenu(menuParam)
            return
        }
        const idx = {
            groupId: '.',
            taskId: '.'
        }
        onOpenDialogMenu(event.currentTarget, 'FilterMenu', idx)
    }






    return (
        <div className={classes['board-filter']}>
            <SearchFilter
                setFilter={setFilterParam} />
            <StatusFilter
                setFilter={setFilterParam}
                openMenu={openDialogMenu}
                activeFilterParam={activeFilterParam}
            />
        </div >
    )
}

export default BoardFilter