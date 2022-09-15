
import { Col, ColsOrder, Labels, Member } from '../../../../service/type'
import MenuSection from '../MenuSection'
import { groupMenuIcon } from '../../../../service/svgIcon'
import classes from '../MenuDialog.module.scss'

const ActionsMenuGroup = [
    {
        title: 'Open',
        type: 'openTask',
        icon: groupMenuIcon.colapseThisGroup
    },
    {
        title: 'Duplicate',
        type: 'duplicateThisTask',
        icon: groupMenuIcon.colapseThisGroup
    },
    {
        title: 'Copy name',
        type: 'copyTaskName',
        classIcon: 'icon-v2-checkbox'
    },

]

const ActionsMenuGroupEdit = [
    {
        title: 'Delete',
        type: 'deleteThisTask',
        classIcon: 'icon-v2-delete-line'
    },

]


const TaskMenu: React.FC<{ onMenuClick: (actionType: string) => void }> = ({ onMenuClick }) => {

    const clickHandler = (actionTypeMenu: string) => {
        onMenuClick(actionTypeMenu)
    }

    return (


        <>
            <div className={classes['menu-section']}>

                {
                    ActionsMenuGroup.map((item) => (
                        <MenuSection
                            key={item.type}
                            title={item.title}
                            icon={item.icon}
                            classIcon={item.classIcon}
                            type={item.type}
                            onClickHandler={clickHandler}
                        />
                    ))
                }
            </div>
            <div className={classes['menu-section']}>
                {
                    ActionsMenuGroupEdit.map((item) => (
                        <MenuSection
                            key={item.type}
                            title={item.title}
                            classIcon={item.classIcon}
                            type={item.type}
                            onClickHandler={clickHandler}
                        />
                    ))
                }
            </div>
        </>

    )
}

export default TaskMenu