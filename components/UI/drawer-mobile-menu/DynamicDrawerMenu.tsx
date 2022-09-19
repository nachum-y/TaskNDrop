import React, { useContext } from "react"
import { BoardContext } from "../../../store/board"
import SelectViewMenu from "./SelectViewMenu"

type Cmp = React.FC<{ onMenuClick: (actionType: string) => void }>

type ComponentMap = {
    SelectViewMenu: Cmp,
    // TaskMenu: Cmp,
    // FilterMenu: Cmp,
}

const keysToComponentMap: ComponentMap = {
    SelectViewMenu: SelectViewMenu,
    // TaskMenu: TaskMenu,
    // FilterMenu: FilterMenu,
}



const DynamicDrawerMenu: React.FC<{ menuType: string }> = ({ menuType }) => {
    const { onClickDialogMenu } = useContext(BoardContext)
    const key = menuType as string

    const onClickHandler = (actionType: string) => {
        onClickDialogMenu(actionType)

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

export default DynamicDrawerMenu