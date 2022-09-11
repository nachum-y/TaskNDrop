import { useState, useContext, useEffect } from 'react'
import { BoardContext } from '../../../store/board'
import classes from './BoardSubsterHeader.module.scss'
import InputSearch from './InputSearch'




const BoardFilter = () => {

    const { onSearchInput } = useContext(BoardContext)
    const [focused, setFocused] = useState(false)
    const [expandable, setExpandable] = useState(false)
    // const [enteredInput, setEnteredInput] = useState('')

    const onChangeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
        onSearchInput(ev.target.value)

    }

    const handleClick = () => {
        setFocused((preveState) => !preveState)
        setExpandable((preveState) => !preveState)
    }





    return (
        <div className={classes['board-filter']}>
            <div className={classes[`input-container${expandable ? '-focused' : ''}`]} >
                <div className={`${classes['icon']} ${classes['icon-v2-search']}`}></div>
                <div className={classes['board-filter-input-wrapper']}>
                    <div className={classes['icon-and-input-wrapper']}>
                        <input type="text"
                            onChange={onChangeHandler}
                            placeholder='Search'
                            onFocus={() => setExpandable(true)}
                            onBlur={() => setExpandable(false)} />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default BoardFilter