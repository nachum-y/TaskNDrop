import dayjs, { Dayjs } from 'dayjs'


import classes from './DateCmp.module.scss'

import { Col } from '../../../service/type'
import { useEffect, useState } from 'react'



const DateCmp: React.FC<{ taskCol: Col, updateCol: (newCol: Col) => void ,onCelClick: (el: HTMLSpanElement) => void}> = ({ taskCol, updateCol,onCelClick }) => {

    const { value, type } = taskCol

    const [dateValue, setDateValue] = useState<string | undefined>('')

    const date = typeof value === 'number' ?
        value :
        undefined


        useEffect(()=>{
            if(date){
                setDateValue(()=> dayjs(date).format(formatDate()))
            }
        },[date])

        const dateToDisplay = ()=> {
            if (!date) return ''
            return new Date(date)
        }
        
        const formatDate= () =>{
            if(date){
                if (new Date().getFullYear() === new Date(date).getFullYear()) return 'MMM DD'
                return 'MMM D, YYYY'
            }
        }



        const clickHandler = (event: React.MouseEvent<HTMLSpanElement>) => {
            onCelClick(event.currentTarget)
        }
    
      
        
    return (
        <span onClick={clickHandler}  className={classes['task-date']}>
                {dateValue && <span>{dateValue}</span>}
        </span>
    )
}




export default DateCmp





// export default function ViewsDatePicker() {

//   return (
    
//   );
// }



