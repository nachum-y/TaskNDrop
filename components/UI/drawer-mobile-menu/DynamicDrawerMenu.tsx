import React, { useContext } from "react"
import { BoardContext } from "../../../store/board"
import SelectViewMenu from "./SelectViewMenu"
import FilterViewMenu from "./FilterViewMenu"
import TaskMenu from "./TaskMenu"

type Cmp = React.FC<{}>

type ComponentMap = {
    SelectViewMenu: Cmp,
    FilterViewMenu: Cmp,
    TaskMenu: Cmp,
}

const keysToComponentMap: ComponentMap = {
    SelectViewMenu: SelectViewMenu,
    FilterViewMenu: FilterViewMenu,
    TaskMenu: TaskMenu,
}



const DynamicDrawerMenu: React.FC<{ menuType: string }> = ({ menuType }) => {

    const key = menuType as string



    if (typeof keysToComponentMap[key as keyof ComponentMap] !== 'undefined') {
        return React.createElement(
            keysToComponentMap[key as keyof ComponentMap],
            {
                key: menuType,
            },
        )
    }
    return (
        <div>ERROR</div>


    )

}

export default DynamicDrawerMenu