
import classes from './ColorMenu.module.scss'
import { utilService } from '../../../../service/util.service'

const ColorMenu: React.FC<{ onMenuClick: (actionType: string, data?: string | undefined) => void }> = ({ onMenuClick }) => {

    const clickHandler = (color: string) => {
        onMenuClick('changeGroupColor', color)


    }
    const colors = utilService.getColorList()


    return (

        <div className={classes['menu-section']}>
            <div className={classes['color-grid']}>
                {
                    colors.map((color) => (
                        <div onClick={() => clickHandler(color)} className={classes['color-option']} style={{ backgroundColor: color }}>
                        </div>
                    ))


                }
            </div>
        </div>


    )
}

export default ColorMenu