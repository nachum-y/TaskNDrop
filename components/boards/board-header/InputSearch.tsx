import { useState } from 'react'
import classes from './BoardSubsterHeader.module.scss'




const InputSearch = () => {

    const [focused, setFocused] = useState(false)
    const [expandable, setExpandable] = useState(false)

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
                        <input
                            type="text"
                            placeholder='Search'
                            onFocus={() => setExpandable(true)}
                            onBlur={() => setExpandable(false)}
                        />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default InputSearch