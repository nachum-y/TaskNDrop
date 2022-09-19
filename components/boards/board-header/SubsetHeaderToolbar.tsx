import classes from './SubsetHeaderToolBar.module.scss'
import SvgIcon from "../../UI/svgIcon/SvgIcon"
import { boardHeaderIcon } from "../../../service/svgIcon"
import { useRouter } from 'next/router'
import Link from 'next/link'


const SubsetHeaderToolBar = () => {

    const router = useRouter()
    const currentRoute = router.pathname

    console.log('loadHERE')


    return(


        <div className = { classes['board-subset-toolbar']} >
            <span>hellooooo</span>
            <Link href={{
                pathname: '/boards/[boardId]/',
                query: router.query
            }}>
                <div className={classes['item']}>
                    <button type="button" className={currentRoute === '/boards/[boardId]' ? classes['active'] : ''}>
                        <div>
                            <SvgIcon path={boardHeaderIcon.mainTable} width='16' height='16' />
                        </div>
                        <span>
                            Main Table
                        </span>
                    </button >
                    {currentRoute === '/boards/[boardId]' && <div className={classes['active-strip']}></div>}
                </div>
            </Link>

            <Link href={{
                pathname: '/boards/[boardId]/kanban',
                query: router.query
            }}>
                <div className={classes['item']}>
                    <button type="button" className={currentRoute === '/boards/[boardId]/kanban' ? classes['active'] : ''}>
                        <span>
                            Kanban
                        </span>
                    </button >
                    {currentRoute === '/boards/[boardId]/kanban' && <div className={classes['active-strip']}></div>}
                </div>
            </Link>


            <Link href={{
                pathname: '/boards/[boardId]/dashboard',
                query: router.query
            }}>
                <div className={classes['item']}>
                    <button type="button" className={currentRoute === '/boards/[boardId]/dashboard' ? classes['active'] : ''}>
                        <span>
                            Dashboard
                        </span>
                    </button >
                    {currentRoute === '/boards/[boardId]/dashboard' && <div className={classes['active-strip']}></div>}
                </div>
            </Link>

            <Link href={{
                pathname: '/boards/[boardId]/map',
                query: router.query
            }}>
                <div className={classes['item']}>
                    <button type="button" className={currentRoute === '/boards/[boardId]/map' ? classes['active'] : ''}>
                        <span>
                            Map
                        </span>
                    </button >
                    {currentRoute === '/boards/[boardId]/map' && <div className={classes['active-strip']}></div>}
                </div>
            </Link>

            <Link href={{
                pathname: '/boards/[boardId]/cards',
                query: router.query
            }}>
                <div className={classes['item']}>
                    <button type="button" className={currentRoute === '/boards/[boardId]/cards' ? classes['active'] : ''}>
                        <span>
                            Cards
                        </span>
                    </button >
                    {currentRoute === '/boards/[boardId]/cards' && <div className={classes['active-strip']}></div>}
                </div>
            </Link>

        </div >
    )
}

export default SubsetHeaderToolBar