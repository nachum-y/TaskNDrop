import GroupContent from './group/GroupContent'

import classes from './GroupList.module.scss'

const GroupList = () => {



    // const testPost = async () => {
    //     console.log('post')
    //     // const data = {
    //     //     title: 'testTitle',
    //     //     image: 'test Image',
    //     //     message: 'test Message!'
    //     // }

    //     // const response = await fetch('/api/boards', {
    //     //     method: 'POST',
    //     //     body: JSON.stringify(data),
    //     //     headers: {
    //     //         'Content-Type': 'application/json'
    //     //     }
    //     // })
    //     // const dataRed = await response.json()
    //     // console.log(dataRed)
    // }

    return (
        <div className={classes['board-content-component']}>

            <div className={classes['board-content-group']}>
                <GroupContent />
            </div>

            <button type='button' className={`${classes.btn} ${classes['add-group-btn']}`}>
                <div className={classes['add-group-icon-holder']}>
                    <div className={classes['add-group-icon']}></div>
                </div>
                <div className={classes['add-group-btn-txt']}>
                    Add new group
                </div>
            </button>
        </div >
    )
}





export default GroupList