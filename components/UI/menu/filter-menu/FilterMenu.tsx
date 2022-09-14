
import MenuSection from '../MenuSection'
import { groupMenuIcon } from '../../../../service/svgIcon'
import classes from './FilterMenu.module.scss'
import { useContext } from 'react'
import { BoardContext } from '../../../../store/board'



const FilterMenu: React.FC<{ onMenuClick: (actionType: string) => void }> = ({ onMenuClick }) => {

    const { statusValueBoard, labelsValueBoard, priorityValueBoard, onSetActiveFilter } = useContext(BoardContext)
    const clickHandler = (actionTypeMenu: string) => {
        onMenuClick(actionTypeMenu)
    }

    const setFilter = (filterType: string, filterParam: string) => {
        onSetActiveFilter(filterType, filterParam)


    }
    return (


        <div className={classes['filter-menu']}>
            <div className={classes['filter-menu-header']}>
                <div className={classes['filter-menu-header-title']}>
                    Quick filters
                </div>
                <div className={classes['filter-menu-header-clear-btn']}>
                    Clear all
                </div>
                {/* <div className={classes['filter-menu-header-save-btn']}>
                    Save as new view
                </div> */}
            </div>

            <div className={classes['filter-menu-main-container']}>
                <div className={classes['filter-menu-filters']}>
                    <div className={classes['filter-menu-filters-title']}>
                        Status</div>
                    <div className={classes['filter-menu-filters-holder']}>

                        {statusValueBoard.map((status) => (<div onClick={() => setFilter('status', status.id)} key={status.id} className={classes['filter-menu-filters-filter-item']}>
                            <div style={{ backgroundColor: status.color, borderColor: status.color }}
                                className={classes['filter-menu-filters-filter-item-color']}>
                            </div>
                            <span className={classes['status-title']}>{status.title}</span>
                        </div>))}
                    </div>
                </div>



                <div className={classes['filter-menu-filters']}>
                    <div className={classes['filter-menu-filters-title']}>
                        Labels</div>
                    <div className={classes['filter-menu-filters-holder']}>

                        {labelsValueBoard.map((label) => (<div onClick={() => setFilter('label', label.id)} key={label.id} className={classes['filter-menu-filters-filter-item']}>
                            <div style={{ backgroundColor: label.color, borderColor: label.color }}
                                className={classes['filter-menu-filters-filter-item-color']}>
                            </div>
                            <span className={classes['status-title']}>{label.title}</span>
                        </div>))}
                    </div>
                </div>


                <div className={classes['filter-menu-filters']}>
                    <div className={classes['filter-menu-filters-title']}>
                        Priority</div>
                    <div className={classes['filter-menu-filters-holder']}>

                        {priorityValueBoard.map((priority) => (<div onClick={() => setFilter('priority', priority.id)} key={priority.id} className={classes['filter-menu-filters-filter-item']}>
                            <div style={{ backgroundColor: priority.color, borderColor: priority.color }}
                                className={classes['filter-menu-filters-filter-item-color']}>
                            </div>
                            <span className={classes['status-title']}>{priority.title}</span>
                        </div>))}
                    </div>
                </div>



            </div >

        </div >

    )
}

export default FilterMenu