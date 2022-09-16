import classes from './SubsetHeaderToolBar.module.scss'
import SvgIcon from "../../UI/svgIcon/SvgIcon"
import { boardHeaderIcon } from "../../../service/svgIcon"

function SubsetHeaderToolBar() {
    return (
        <div className={classes['board-subset-toolbar']}>
            <div className={classes['item']}>
                <button type="button">
                    <div>
                        <SvgIcon path={boardHeaderIcon.mainTable} width='16' height='16' />
                    </div>
                    <span>
                        Main Table
                    </span>
                </button >
                <div className={classes['active-strip']}></div>
            </div>



            <div className={classes['item']}>
                <button type="button">
                    <div>
                        {/* <SvgIcon path={boardHeaderIcon.mainTable} width='16' height='16' /> */}
                    </div>
                    <span>
                        Kanban
                    </span>
                </button >
                {/* <div className={classes['active-strip']}></div> */}
            </div>

            <div className={classes['item']}>
                <button type="button">
                    <div>
                        {/* <SvgIcon path={boardHeaderIcon.mainTable} width='16' height='16' /> */}
                    </div>
                    <span>
                        Dashboard
                    </span>
                </button >
                {/* <div className={classes['active-strip']}></div> */}
            </div>

            <div className={classes['item']}>
                <button type="button">
                    <div>
                        {/* <SvgIcon path={boardHeaderIcon.mainTable} width='16' height='16' /> */}
                    </div>
                    <span>
                        Map
                    </span>
                </button >
                {/* <div className={classes['active-strip']}></div> */}
            </div>

            <div className={classes['item']}>
                <button type="button">
                    <div>
                        {/* <SvgIcon path={boardHeaderIcon.mainTable} width='16' height='16' /> */}
                    </div>
                    <span>
                        Cards
                    </span>
                </button >
                {/* <div className={classes['active-strip']}></div> */}
            </div>


        </div >
    )
}

export default SubsetHeaderToolBar