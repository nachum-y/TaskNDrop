import React, { useContext } from "react"
import { BoardContext } from "../../../store/board"
import SelectViewMenu from "./SelectViewMenu"
import FilterViewMenu from "./FilterViewMenu"

type Cmp = React.FC<{}>

type ComponentMap = {
    SelectViewMenu: Cmp,
    // FilterViewMenu: Cmp,
    // FilterMenu: Cmp,
}

const keysToComponentMap: ComponentMap = {
    SelectViewMenu: SelectViewMenu,
    // FilterViewMenu: FilterViewMenu,
    // FilterMenu: FilterMenu,
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