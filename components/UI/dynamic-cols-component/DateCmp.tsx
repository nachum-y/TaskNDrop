import dayjs, { Dayjs } from 'dayjs'


import classes from './DateCmp.module.scss'

import { Col } from '../../../service/type'
import { useEffect, useState } from 'react'
import Progress from './Progress'



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

        const clearValue = (event:React.MouseEvent)=>{
            event.stopPropagation()        

            const newCol = { type,
                 value :undefined
                }
                 updateCol(newCol)
        }
    
        
    return (
        <div onClick={clickHandler} tabIndex={0} className={classes['task-date']}>
             <div tabIndex={0} className={classes['date-cell-component']}>
                {dateValue && date && (
                    <div className={classes['task-date-wraper']}>
                        <Progress
                            date={date}/>
                        <span>{dateValue}</span>
                        <i 
                        className={`${classes['icon']} ${classes['icon-dapulse-close']}`}
                        onClick={clearValue}
                        ></i>
                    </div>
                    )}
                </div>
        </div>
    )
}




export default DateCmp





// export default function ViewsDatePicker() {

//   return (
    
//   );
// }



