import { Col, ColsOrder } from "../../../../service/type"

const Test2: React.FC<{ taskCol: Col }> = (props) => {



    return (
        <div className=''>
            {props.taskCol.type}
        </div >
    )
}

export default Test2