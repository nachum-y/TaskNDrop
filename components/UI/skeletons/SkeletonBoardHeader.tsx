import Shimmer from './Shimmer'
import SkeletonElement from './SkeletonElement'
import classes from './SkeletonElement.module.scss'

const SkeletonBoardHeader: React.FC<{ theme: string }> = (props) => {
    const { theme } = props
    const themeClass = theme || 'light'

    return (
        <div className={`${classes['skeleton-wrapper']} ${themeClass}`}>
            <div className={classes['skeleton-board-header']}>
                <SkeletonElement type='title' />
            </div>
            <Shimmer />
        </div>
    )
}

export default SkeletonBoardHeader