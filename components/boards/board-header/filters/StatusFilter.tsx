

import { useState } from 'react'
import classes from '../BoardSubHeader.module.scss'




const StatusFilter: React.FC<{ setFilter: (type: string, val: string) => void }> = ({ setFilter }) => {

    const [focused, setFocused] = useState(false)
    const [expandable, setExpandable] = useState(false)

    const handleClick = () => {
        setFocused((preveState) => !preveState)
        setExpandable((preveState) => !preveState)
    }


    const setFilerHandler = () => {
        setFilter('status', 's101')
    }

    return (
        <div className={classes[`filter-container${expandable ? '-focused' : ''}`]} >
            <div className={`${classes['icon']} ${classes['icon-v2-search']}`}></div>
            <div className={classes['board-filter-status-wrapper']}>
                <span
                    onClick={setFilerHandler}>filter</span>
            </div>
        </div>
    )
}

export default StatusFilter