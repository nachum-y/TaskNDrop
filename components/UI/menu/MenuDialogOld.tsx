import classes from './MenuDialog.module.scss'

type Pos = string

const MenuDialog: React.FC<{ x: string, y: string }> = (props) => {

    const { x, y } = props
    const style = {
        // display: showMenu ? 'flex' : 'none',
        position: 'absolute',
        top: y ? y : '0px',
        left: x ? x : '0px'
    }



    return (
        <div className={classes['menu-dialog']}>
            <div className={classes['dialog-content-wrapper']} style={{
                top: y ? y : '0px',
                left: x ? x : '0px'
            }} >
                <div className={classes[' menu-dialog-inner']}>
                    <div>Menu</div>
                    <div>Menu</div>
                    <div>Menu</div>
                    <div>Menu</div>
                </div>
            </div>
        </div >
    )

}

export default MenuDialog