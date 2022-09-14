import { useState, useContext, useEffect } from 'react'
import { BoardContext } from '../../../store/board'
import classes from './BoardSubHeader.module.scss'
import SearchFilter from './filters/SearchFilter'
import StatusFilter from './filters/StatusFilter'
import InputSearch from './InputSearch'




const BoardFilter = () => {

    const { onSearchInput, onSetActiveFilter } = useContext(BoardContext)
    const [focused, setFocused] = useState(false)
    const [expandable, setExpandable] = useState(false)
    // const [enteredInput, setEnteredInput] = useState('')

    const onChangeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
        // onSearchInput(ev.target.value)
        onSetActiveFilter('txt', ev.target.value)

    }

    const setFilterParam = (type: string, val: string) => {
        onSetActiveFilter(type, val)
    }

    const handleClick = () => {
        setFocused((preveState) => !preveState)
        setExpandable((preveState) => !preveState)
    }





    return (
        <div className={classes['board-filter']}>
            <SearchFilter
                setFilter={setFilterParam} />
            <StatusFilter
                setFilter={setFilterParam} />
        </div >
    )
}

export default BoardFilter