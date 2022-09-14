import { useState } from 'react'
import classes from '../BoardSubHeader.module.scss'




const SearchFilter: React.FC<{ setFilter: (type: string, val: string) => void }> = ({ setFilter }) => {

    const [focused, setFocused] = useState(false)
    const [expandable, setExpandable] = useState(false)

    const handleClick = () => {
        setFocused((preveState) => !preveState)
        setExpandable((preveState) => !preveState)
    }


    const onChangeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setFilter('txt', ev.target.value)
    }


    return (
        <div className={classes[`input-container${expandable ? '-focused' : ''}`]} >
            <div className={`${classes['icon']} ${classes['icon-v2-search']}`}></div>
            <div className={classes['board-filter-input-wrapper']}>
                <div className={classes['icon-and-input-wrapper']}>
                    <input
                        onChange={onChangeHandler}
                        type="text"
                        placeholder='Search'
                        onFocus={() => setExpandable(true)}
                        onBlur={() => setExpandable(false)}
                    />
                </div>
            </div>
        </div>
    )
}

export default SearchFilter