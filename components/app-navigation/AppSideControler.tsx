import SvgIcon from '../UI/svgIcon/SvgIcon'
import classes from './AppSideControler.module.scss'
import { boardHeaderIcon } from '../../service/svgIcon'
import { useContext, useState } from 'react'
import { BoardContext } from '../../store/board'
const AppSideControler = () => {

    const { sideNavisPinned, setSideNavisPinned } = useContext(BoardContext)
    const [sideNaveExpanded, setSideNaveExpanded] = useState(false)

    // const sideNaveExpanded = true

    return (
        <div onMouseOver={() => setSideNaveExpanded(true)} className={classes['side-controler']}>
            < div onMouseOut={() => setSideNaveExpanded(false)} className={`${classes['first-level-control-component']} ${(sideNaveExpanded || sideNavisPinned) ? `${classes['is-expanded']} ${classes['is-pinned']}` : ''}`}>
                <div onClick={() => setSideNavisPinned(!sideNavisPinned)} className={`${classes['collapse-first-leve-button-component']} ${sideNavisPinned ? classes['is-pinned'] : ''}`}>
                    <span className={classes['collapse-icon']}>
                        <SvgIcon path={boardHeaderIcon.angleRight} viewBox="0 0 448 512" width="16" height="16" />
                    </span>
                </div>
                <div className={classes['first-level-control-content']}>
                    <div className={classes['home-control-component']}>
                        <div className={classes['home-workspace-items-component']}>
                            <div className={classes['title-wrapper']}>
                                <div className={classes['home-workspace-items-title-component']}>

                                    <div className={`${classes['home-control-top-header-component']} ${classes['home-workspace-items-header']}`}>
                                        <div className={classes['dropdown-navigation-header']}>

                                            <span className={classes['dropdown-header-name']}>
                                                Workspace</span>
                                        </div>
                                        <div className={classes['menu-button-container']}>
                                            <div className={classes['workspace-dropdown-button']}>
                                                <div className={classes['work-space-icon-container']}>
                                                    <div className={classes['workspace-icon']}>
                                                        <span className={classes['letter']}>
                                                            M</span>
                                                        <div className={classes['work-space-icon-holder']}>

                                                        </div>
                                                    </div>
                                                    <div className={classes['mini-icon']}>
                                                    </div>
                                                </div>
                                                <span className={classes['work-space-title']}>
                                                    Main Board</span>
                                            </div>
                                        </div>
                                    </div>


                                    <div className={classes['spacer']}>

                                    </div>
                                </div>
                            </div>

                            <div className={classes['home-workspace-items-content-wrapper']}>
                                <div className={classes['top-new-button-component']}>
                                    <div className={classes['action-btn-side-nav']}>
                                        < span className={classes['action-label']}>
                                            Add</span>
                                    </div>
                                    <div className={classes['action-btn-side-nav']}>
                                        < span className={classes['action-label']} > Search
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className={classes['spacer']}>

                            </div>
                        </div>
                        <div className={classes['boards']}>
                            <div className={classes['selected-board']}>
                                <span className={classes['board-icon']}>
                                </span>
                                <span className={classes['action-label']}>
                                    Marketing & BizDev
                                </span>
                            </div>
                            <div className={classes['board-select']}>
                                <span className={classes['board-icon']}>

                                </span>
                                <span className={classes['action-label']}> H R
                                </span>
                            </div>
                            <div className={classes['board-select']}>
                                <span className={classes['board-icon']}>

                                </span>
                                <span className={classes['action-label']}>
                                    Sales</span>
                            </div>
                        </div>
                    </div >
                </div >
            </div>
        </div >
    )
}

export default AppSideControler