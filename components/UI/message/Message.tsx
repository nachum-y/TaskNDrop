import Image from "next/image"
import classes from './Message.module.scss'
import ReactHtmlParser from "html-react-parser"
const Message: React.FC<{ image: string, title: string, instruction: string }> = ({ image, title, instruction }) => {
    console.log(image)

    return (
        <div className={classes.message}>
            {image && <Image src={image} width='300' height='260' />}
            <span className={classes.title}>{title}</span>
            <span className={classes.instruction}>
            {ReactHtmlParser(instruction)}
            </span>
        </div>
    )
}

export default Message