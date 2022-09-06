import Shimmer from './Shimmer'
import SkeletonElement from './SkeletonElement'
import classes from './SkeletonElement.module.scss'

const SkeletonGroup: React.FC<{ theme: string }> = (props) => {
    const { theme } = props
    const themeClass = theme || 'light'

    return (
        <div className={`${classes['skeleton-wrapper']} ${themeClass}`}>
            <div className={classes['skeleton-group']}>
                <SkeletonElement type='title' />
                <SkeletonElement type='text' />
                <SkeletonElement type='text' />
                <SkeletonElement type='text' />
            </div>
            <Shimmer />
        </div>
    )
}

export default SkeletonGroup