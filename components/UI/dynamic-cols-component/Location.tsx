import { Col } from "../../../service/type"


const Location: React.FC<{ taskCol: Col, updateCol: (newCol: Col) => void, onCelClick: (el: HTMLSpanElement) => void }> = ({ taskCol, updateCol, onCelClick }) => {
    return (
        <div>
            <div className="task-location">
                <div className="input-container">
                    <input className="input-location" id="row.id" type="text"
                        placeholder="[task.value ? task.value.title : 'Type address...']" />
                    <div className="icon-v2-line-location">

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Location