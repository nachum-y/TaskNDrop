

import classes from './SkeletonElement.module.scss'
const SkeletonElement: React.FC<{ type: string }> = (props) => {

    const { type } = props
    return (

        <div className={`${classes[type]} ${classes.skeleton} `}>

        </div>
    )
}

export default SkeletonElement