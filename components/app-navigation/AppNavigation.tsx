import { useState } from 'react'
import Image from 'next/image'

import classes from './AppNavigation.module.scss'
import SurfaceIconWrapper from './SurfaceIconWrapper'
import logoIcon from '../../assets/logos/logo_icon.png'
import { surfaceIcon } from '../../service/svgIcon'
import { useRouter } from 'next/router'
import Link from 'next/link'


const AppNavigation = () => {

    const [selectedTube, setSelectedTube] = useState('work management')

    const router = useRouter()
    const selectedTabHandler = (tabName: string) => {
        setSelectedTube(tabName)
    }

    return (
        <nav className={classes['surface-control']} aria-label="Views and Tools">
            <div className={classes['surface-control-component']}>

                <Link href={{
                    pathname: '/',
                }}>
                    <div className={classes['home-page-link']}>
                        <SurfaceIconWrapper image={logoIcon}
                            selected={selectedTube === 'Home Page' ? true : false}
                            width='40'
                            height='40'
                            onSelectTab={selectedTabHandler}
                            name='Home Page'
                        />
                    </div>
                </Link>
                <div className={classes['surface-divider']}></div>

                <div className={classes['top-navigation-items-area']}>
                    {surfaceIcon.map((iconTab) => (
                        <SurfaceIconWrapper
                            key={iconTab.name}
                            path={iconTab.path}
                            width={iconTab.width}
                            height={iconTab.height}
                            viewBox={iconTab.viewBox}
                            selected={selectedTube === iconTab.name}
                            onSelectTab={selectedTabHandler}
                            name={iconTab.name}
                        />
                    ))}
                </div>

            </div>
        </nav>
    )
}

export default AppNavigation