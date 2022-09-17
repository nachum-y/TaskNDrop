import React, { useContext } from "react"
import { BoardContext } from "../../../store/board"


type Cmp = React.FC<{ onMenuClick: (actionType: string) => void }>

type ComponentMap = {
    // GroupMenu: Cmp,
    // TaskMenu: Cmp,
    // FilterMenu: Cmp,
}

const keysToComponentMap: ComponentMap = {
    // GroupMenu: GroupMenu,
    // TaskMenu: TaskMenu,
    // FilterMenu: FilterMenu,
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