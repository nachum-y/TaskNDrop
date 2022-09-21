import React, { useContext } from "react"
import { BoardContext } from "../../../store/board"
import GroupMenu from "./GroupMenu/GroupMenu"
import TaskMenu from "./TaskMenu/TaskMenu"
import FilterMenu from "./filter-menu/FilterMenu"
import ColorMenu from "./color-menu/ColorMenu"

type Cmp = React.FC<{ onMenuClick: (actionType: string, data?: string | undefined) => void }>

type ComponentMap = {
    GroupMenu: Cmp,
    TaskMenu: Cmp,
    FilterMenu: Cmp,
    ColorMenu: Cmp,
}

const keysToComponentMap: ComponentMap = {
    GroupMenu: GroupMenu,
    TaskMenu: TaskMenu,
    FilterMenu: FilterMenu,
    ColorMenu: ColorMenu,
}





const DynamicMenuComponent: React.FC<{ menuType: string, data?: string }> = ({ menuType }) => {
    const { onClickDialogMenu } = useContext(BoardContext)
    const key = menuType as string

    const onClickHandler = (actionType: string, data?: string | undefined) => {
        console.log(actionType)

        onClickDialogMenu(actionType, data)

    }


    if (typeof keysToComponentMap[key as keyof ComponentMap] !== 'undefined') {
        return React.createElement(
            keysToComponentMap[key as keyof ComponentMap],
            {
                key: menuType,
                onMenuClick: onClickHandler
            },
        )
    }
    return (
        <div>ERROR</div>

    )

}

export default DynamicMenuComponent