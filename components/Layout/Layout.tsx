import { Fragment } from 'react'

import classes from './Layout.module.scss'
import AppNavigation from './AppNavigation'
type Props = { children: React.ReactNode }

const Layout: React.FC<Props> = (props) => {
    return (
        <Fragment>
            <AppNavigation />
            <main className={classes.main}>{props.children}</main>
        </Fragment>
    )
}

export default Layout
