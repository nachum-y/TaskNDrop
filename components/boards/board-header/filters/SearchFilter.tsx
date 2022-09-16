import { useState } from 'react'
import classes from '../BoardSubHeader.module.scss'




const SearchFilter: React.FC<{ setFilter: (type: string, val: string) => void }> = ({ setFilter }) => {

    const [isActive, setIsActive] = useState(false)

    const [focused, setFocused] = useState(false)
    const [expandable, setExpandable] = useState(false)

    const handleClick = () => {
        setFocused((preveState) => !preveState)
        setExpandable((preveState) => !preveState)
    }


    const onChangeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setFilter('txt', ev.target.value.trim())
        setIsActive(() => ev.target.value.trim().length > 0)
    }


    return (
        <div className={`${classes[`input-container${expandable || isActive ? '-focused' : ''}`]} ${classes[`input-container${isActive ? '-active' : ''}`]}`} >
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