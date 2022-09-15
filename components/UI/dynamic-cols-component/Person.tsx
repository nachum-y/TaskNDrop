import { useContext } from 'react'

import { Col, ColsOrder, Labels, Member } from '../../../service/type'
import classes from './Person.module.scss'
import { BoardContext } from '../../../store/board'

import Image from 'next/image'

// import image2 from
const Person: React.FC<{ taskCol: Col, updateCol: (newCol: Col) => void, onCelClick: (el: HTMLSpanElement) => void }> = ({ taskCol, updateCol, onCelClick }) => {

    const { value } = taskCol



    let persons: Member[] | [] | undefined

    if (Array.isArray(value)) {
        persons = value
    }

    const clickHandler = (event: React.MouseEvent<HTMLSpanElement>) => {
        onCelClick(event.currentTarget)
    }

    return (
        <div onClick={clickHandler} className={classes['task-person']} >
            <div className={classes['task-person']}>
                <div className={classes['icon-dapulse-addbtn']}>
                </div>
                <div className={classes['bullets-container']}>
                    {persons && persons.map((person => (
                        <div
                            className={classes['person-bullet']}
                            key={person.id}
                        >
                            <Image src={`/persons/${person.id}.jpeg`} width={'25px'} height={'25px'} />
                        </div>
                    )))}
                </div>
            </div>
        </div>
    )
}

export default Person