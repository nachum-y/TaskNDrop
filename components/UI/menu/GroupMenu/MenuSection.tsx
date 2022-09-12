import classes from './GroupMenu.module.scss'

const MenuSection: React.FC<{ title: string, onClickHandler: (actionType: string) => void, icon?: string, classIcon?: string, type: string }> = ({ title, onClickHandler, icon, classIcon, type }) => {

    return (
        <div className={`${classes['menu-item']} ${['menu-item-relative']}`}
            onClick={() => onClickHandler(type)}
        >
            <div className={classes['content-wrapper']}>
                <div className={classes['content-title-content-wrapper']}>
                    {icon && <i className={classes.icon} dangerouslySetInnerHTML={{ __html: icon }} />}
                    {classIcon && (<i className={`${classes.icon} ${classes[classIcon]}`}></i>)}
                    <span className={classes['title']}>{title}</span>
                </div>
            </div>
        </div >

    )
}

export default MenuSection