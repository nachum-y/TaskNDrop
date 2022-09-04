import classes from './SkeletonElement.module.scss'
const Shimmer = () => {
  return (
    <div className={classes['shimmer-wrapper']}>
      <div className={classes.shimmer}></div>
    </div>
  )
}

export default Shimmer