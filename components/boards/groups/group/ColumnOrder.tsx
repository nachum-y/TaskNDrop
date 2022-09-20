import { Droppable, Draggable } from 'react-beautiful-dnd'
import { ColsOrder } from '../../../../service/type'
import classes from '../GroupList.module.scss'


const ColumnOrder: React.FC<{ col: ColsOrder, index: number }> = ({ col, index }) => {
    return (
        <div>
            <Draggable key={col.type} draggableId={`${col.type}`} index={index}>
                {(draggableProvided: any, draggableSnapshot) => (
                    <div
                        className={`${classes['header-col']} ${classes['item']}`}
                        ref={draggableProvided.innerRef}
                        {...draggableProvided.draggableProps}
                        {...draggableProvided.dragHandleProps}
                    >
                        <span>{col.title}</span>
                        {draggableProvided.placeholder}

                    </div>
                )}

            </Draggable>
        </div>
    )
}

export default ColumnOrder