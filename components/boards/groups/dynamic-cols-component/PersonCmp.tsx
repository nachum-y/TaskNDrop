import { useContext } from 'react'

import { Col, ColsOrder, Labels, Member } from '../../../../service/type'
import classes from './PersonCmp.module.scss'
import { BoardContext } from '../../../../store/board'




const PersonCmp: React.FC<{ taskCol: Col }> = (props) => {

    const { value } = props.taskCol


    let persons: Member[] | [] | undefined

    if (Array.isArray(value)) {
        persons = value
    }


    return (
        <div className={classes['task-person']} >

            <div className={classes['task-person']}>
                <div className={classes['icon-dapulse-addbtn']}>
                </div>
                <div className={classes['bullets-container']}>
                    {persons && persons.map((person => (
                        <div
                            className={classes['person-bullet']}
                            key={person.id}
                        >
                            <img src={person.imgUrl} />
                        </div>
                    )))}
                </div>
            </div>
        </div>
    )
}

export default PersonCmp