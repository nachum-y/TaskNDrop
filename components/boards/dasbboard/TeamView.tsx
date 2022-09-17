import classes from './Dashboard.module.scss'


const TeamView = () => {
    return (

        <div className={`${classes['dashboard-item-holder']} ${classes['dashboard-item-team']}`}>
            <div className={classes['dashboard-item-holder-title']}>
                <span>
                    Team
                </span>
            </div>
            <div className={classes['members-view']}>
                <div className={classes['members-view-member']}>
                    <div className={classes['img-holder']}>
                        {/* <img :src='getImg(person.imgUrl)'> */}
                        img
                    </div>
                    <div className={classes['member-name']}>
                        person.name </div>
                    <div className={classes['member-linkedIn']}>
                        <a href='#' target="_blank">Connect on LinkedIn</a>
                    </div>
                </div>
            </div >
        </div >

    )
}

export default TeamView