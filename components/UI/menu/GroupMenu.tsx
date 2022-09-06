
import { Col, ColsOrder, Labels, Member } from '../../../service/type'
import MenuSection from './GroupMenu/MenuSection'
import { groupMenuIcon } from '../../../service/svgIcon'

const ActionsMenuGroup = [
    {
        title: 'Collapse this group',
        type: 'colapseThisGroup',
        icon: groupMenuIcon.colapseThisGroup
    },
    {
        title: 'Collapse all groups',
        type: 'colapseAllGroups',
        icon: groupMenuIcon.colapseThisGroup
    },
    {
        title: 'Select all items',
        type: 'selectAllItems',
        classIcon: 'icon-v2-checkbox'
    },

]

const ActionsMenuGroupEdit = [
    {
        title: 'Delete',
        type: 'deleteThisGroup',
        classIcon: 'icon-v2-delete-line'
    },

]


const GroupMenu: React.FC<{}> = ({ }) => {

    const clickHandler = () => {
        console.log('click')

    }

    return (


        <>
            {ActionsMenuGroup.map((item) => (
                <MenuSection
                    key={item.type}
                    title={item.title}
                    icon={item.icon}
                    classIcon={item.classIcon}
                    onClickHandler={clickHandler}
                />
            ))}
            {ActionsMenuGroupEdit.map((item) => (
                <MenuSection
                    key={item.type}
                    title={item.title}
                    classIcon={item.classIcon}
                    onClickHandler={clickHandler}
                />
            ))}

        </>

    )
}

export default GroupMenu