import Shimmer from './Shimmer'
import SkeletonElement from './SkeletonElement'
import classes from './SkeletonElement.module.scss'
import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'

const SkeletonGroup: React.FC<{ theme: string }> = (props) => {
    const { theme } = props
    const themeClass = theme || 'light'

    return (
        <div className={`${classes['skeleton-wrapper']} ${themeClass}`}>


            <Box sx={{ width: '100%' }}>
                <Skeleton />
                <Skeleton animation="wave" />
                <Skeleton animation={false} />
            </Box>
           
        </div>
    )
}

export default SkeletonGroup