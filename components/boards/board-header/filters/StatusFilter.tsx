import { useEffect, useState } from 'react'
import { subHeaderIcons } from '../../../../service/svgIcon'
import { ActiveFilterParam } from '../../../../service/type'
import SvgIcon from '../../../UI/svgIcon/SvgIcon'
import classes from '../BoardSubHeader.module.scss'

const StatusFilter: React.FC<{ setFilter: (type: string, val: string) => void, openMenu: (event: React.MouseEvent<HTMLDivElement>) => void, activeFilterParam: ActiveFilterParam }> = ({ setFilter, openMenu, activeFilterParam }) => {

    const [focused, setFocused] = useState(false)
    const [expandable, setExpandable] = useState(false)
    const [isActiveFilter, setIsActiveFilter] = useState(false)

    useEffect(() => {
        if (
            activeFilterParam.label.length > 0 ||
            activeFilterParam.status.length > 0 ||
            activeFilterParam.priority.length > 0
        ) {
            setIsActiveFilter(() => true)
        }
        else {

            setIsActiveFilter(() => false)
        }

    }, [activeFilterParam])

    const handleClick = () => {
        setFocused((preveState) => !preveState)
        setExpandable((preveState) => !preveState)
    }


    const setFilerHandler = () => {
        // setFilter('status', 's101')
    }
   
    return (
        <div onClick={openMenu} className= {`${classes[`filter-container${expandable ? '-focused' : ''}`]} ${classes[`filter-container${isActiveFilter ? '-active' : ''}`]}`}  tabIndex={-1}>
            <div className={classes['icon']}>
                <SvgIcon path={subHeaderIcons.filter} />
            </div>
            <div className={classes['board-filter-status-wrapper']}>
                <span
                    onClick={setFilerHandler}>Filter</span>
            </div>
        </div>
    )
}

export default StatusFilter