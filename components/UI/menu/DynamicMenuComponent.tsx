import React, { useContext } from "react"
import { BoardContext } from "../../../store/board"
import GroupMenu from "./GroupMenu/GroupMenu"
import TaskMenu from "./TaskMenu/TaskMenu"
import FilterMenu from "./filter-menu/FilterMenu"

// import BoardCont


type Cmp = React.FC<{ onMenuClick: (actionType: string) => void }>

type ComponentMap = {
    GroupMenu: Cmp,
    TaskMenu: Cmp,
    FilterMenu: Cmp,
    // person: Cmp,
    // date: Cmp,
    // labelCmp: Cmp,
    // status: Cmp,
    // priority: Cmp,
    // location: Cmp,
    // creationLog: Cmp,
}

const keysToComponentMap: ComponentMap = {
    GroupMenu: GroupMenu,
    TaskMenu: TaskMenu,
    FilterMenu: FilterMenu,
    // person: Person,
    // date: Test2,
    // labelCmp: StatusCmp,
    // status: StatusCmp,
    // priority: StatusCmp,
    // location: Test2,
    // creationLog: CreationLog,


}





const DynamicMenuComponent: React.FC<{ menuType: string }> = ({ menuType }) => {
    const { onClickDialogMenu } = useContext(BoardContext)
    const key = menuType as string

    const onClickHandler = (actionType: string) => {
        onClickDialogMenu(actionType)
        
    }


    if (typeof keysToComponentMap[key as keyof ComponentMap] !== 'undefined') {
        return React.createElement(
            keysToComponentMap[key as keyof ComponentMap],
            {
                // id: MenuType,
                key: menuType,
                onMenuClick: onClickHandler
                // taskCol: taskCol,
                // updateCol: updateTaskHandler
            },
        )
    }
    return (
        <div>ERROR</div>

    )

}

export default DynamicMenuComponent