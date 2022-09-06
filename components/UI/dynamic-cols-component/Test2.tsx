import { Col, ColsOrder } from "../../../service/type"

const Test2: React.FC<{ taskCol: Col, updateCol: (newCol: Col) => void }> = ({ taskCol, updateCol }) => {



    return (
        <div className=''>
            {taskCol.type}
        </div >
    )
}

export default Test2