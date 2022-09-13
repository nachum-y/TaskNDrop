import { useContext } from 'react'

import { Col, ColsOrder, Labels, Member } from '../../../service/type'
import classes from './Person.module.scss'
import { BoardContext } from '../../../store/board'

import Image from 'next/image'


const Person: React.FC<{ taskCol: Col, updateCol: (newCol: Col) => void, onCelClick: (el: HTMLSpanElement) => void }> = ({ taskCol, updateCol, onCelClick }) => {

    const { value } = taskCol

    
    
    let persons: Member[] | [] | undefined
    
    if (Array.isArray(value)) {
        persons = value
    }
    console.log(persons);

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
                            <Image src={person.imgUrl} width={'30px'} height={'30px'} />
                        </div>
                    )))}
                </div>
            </div>
        </div>
    )
}

export default Person