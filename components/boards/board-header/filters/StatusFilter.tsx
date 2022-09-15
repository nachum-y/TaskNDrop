import { useState } from 'react'
import { subHeaderIcons } from '../../../../service/svgIcon'
import SvgIcon from '../../../UI/svgIcon/SvgIcon'
import classes from '../BoardSubHeader.module.scss'

const StatusFilter: React.FC<{ setFilter: (type: string, val: string) => void, openMenu: (event: React.MouseEvent<HTMLDivElement>) => void }> = ({ setFilter, openMenu }) => {

    const [focused, setFocused] = useState(false)
    const [expandable, setExpandable] = useState(false)


    const handleClick = () => {
        setFocused((preveState) => !preveState)
        setExpandable((preveState) => !preveState)
    }


    const setFilerHandler = () => {
        // setFilter('status', 's101')
    }

    return (
        <div onClick={openMenu} className={classes[`filter-container${expandable ? '-focused' : ''}`]} >
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