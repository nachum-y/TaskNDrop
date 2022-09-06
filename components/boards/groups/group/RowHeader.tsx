import { ColsOrder } from '../../../../service/type'
import classes from '../GroupList.module.scss'

const RowHeader: React.FC<{ colsOrder: ColsOrder[], groupColor: string }> = ({ colsOrder, groupColor }) => {

    return (
        <div className={classes['board-content-group-row-header']}>
            <div className={`${classes['header-col']} ${classes.fixed}`}>
                <div className={classes['task-item']}>
                    <div className={classes['row-menu']}>
                        <div className={classes['row-menu-icon']}></div>
                    </div>
                    <div className={`${classes['border']} ${classes['header']}`} style={{ backgroundColor: groupColor }}></div>
                    <div className={classes['item-select']}>
                        <div className={classes['checkbox']}></div>
                    </div>
                    <div className={classes['item-title']}><span>Items</span></div>
                </div>
            </div>
            {
                colsOrder.slice(1).map((col, index) => (
                    < div className={`${classes['header-col']} ${classes['item']}`}
                        key={index} >
                        <span>{col.title}</span>
                    </div>
                ))}
        </div>
    )
}

export default RowHeader