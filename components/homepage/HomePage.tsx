import Link from 'next/link'
import Image from 'next/image'
import homePageImg from '../../assets/images/home-page-new.png'
import classes from './HomePage.module.scss'
import { useContext } from 'react'
import { BoardContext } from '../../store/board'

const HomePage = () => {
    const { initialBoardId } = useContext(BoardContext)


    return (
        <div className={classes['home-page']}>
            <div className={classes['first-layout']}>
                <h1 className={classes['header-line']}>A platform built for a <br /> new way of working </h1>
                <h3 className={classes['sub-line']}>What would you like to manage with taskndrop.com Work OS?</h3>
                <div className={classes['comet-underline']}></div>
                <div className={classes['btn-container']}>
                    <Link href={`/boards/${initialBoardId}`}>
                        <a className={classes.start}>  Get Started</a>
                    </Link>
                </div>
                <div className={classes['star']}></div>
                <div className={`${classes['star']} ${classes['star2']}`}></div>
                <div className={`${classes['star']} ${classes['star3']}`}></div>
                <div className={`${classes['star']} ${classes['star4']}`}></div>
                <div className={`${classes['star']} ${classes['star5']}`}></div>
                <div className={`${classes['star']} ${classes['star6']}`}></div>
                <div className={`${classes['star']} ${classes['star7']}`}></div>
                <div className={`${classes['star']} ${classes['star8']}`}></div>
                <div className={`${classes['star']} ${classes['star9']}`}></div>
                <div className={`${classes['star']} ${classes['star10']}`}></div>
                <div className={`${classes['star']} ${classes['star11']}`}></div>
                <div className={`${classes['star']} ${classes['star12']}`}></div>
                <div className={`${classes['star']} ${classes['star13']}`}></div>
                <div className={`${classes['star']} ${classes['star14']}`}></div>
                <div className={`${classes['star']} ${classes['star15']}`}></div>
                <div className={`${classes['star']} ${classes['star16']}`}></div>
                <div className={`${classes['star']} ${classes['star17']}`}></div>
                <div className={`${classes['star']} ${classes['star18']}`}></div>
                <div className={`${classes['star']} ${classes['star19']}`}></div>
                <div className={`${classes['star']} ${classes['star20']}`}></div>
            </div>

            <div className={classes['home-page-img-container']}>

                <Image src={homePageImg}
                    priority
                    layout='fill'
                    alt='Home page image'
                />
            </div>
            <footer className={classes.footer}>
                <span>&quot;Task And Drop&quot; - Pixel perfect, E2E clone of Monday.com (Next.js applicatio).</span>
            </footer>
        </div >
    )
}

export default HomePage