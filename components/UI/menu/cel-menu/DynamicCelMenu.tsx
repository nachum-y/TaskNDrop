import React, { useContext } from "react"
import { Labels } from "../../../../service/type"
import { BoardContext } from "../../../../store/board"
import StatusMenu from "./StatusMenu"


// import BoardCont


type Cmp = React.FC<{
    onMenuClick: (actionId: string) => void,
    statusList: Labels[]
}>

type ComponentMap = {
    // GroupMenu: Cmp,
    // textCmp: Cmp,
    // person: Cmp,
    // date: Cmp,
    labelCmp: Cmp,
    status: Cmp,
    priority: Cmp,
    // location: Cmp,
    // creationLog: Cmp,
}

const keysToComponentMap: ComponentMap = {
    // GroupMenu: GroupMenu,
    // textCmp: Text,
    // person: Person,
    // date: Test2,
    labelCmp: StatusMenu,
    status: StatusMenu,
    priority: StatusMenu,
    // location: Test2,
    // creationLog: CreationLog,


}

type labelsStatus = {
    status: Labels[]
    labelCmp: Labels[]
    priority: Labels[]
}




const DynamicCelMenu: React.FC<{ menuType: string }> = ({ menuType }) => {

    const { onClickDialogMenu, statusValueBoard: status, labelsValueBoard: labelCmp, priorityValueBoard: priority } = useContext(BoardContext)
    const key = menuType as string

    const labelsVal: labelsStatus = {
        status,
        labelCmp,
        priority
    }


    const statusKey = menuType as string
    const currStatus: Labels[] = labelsVal[statusKey as keyof labelsStatus]


    const onClickHandler = (actionType: string) => {
        // onClickDialogMenu(actionType)
        console.log(actionType)

    }

    


    if (typeof keysToComponentMap[key as keyof ComponentMap] !== 'undefined') {
        return React.createElement(
            keysToComponentMap[key as keyof ComponentMap],
            {
                key: menuType,
                onMenuClick: onClickHandler,
                statusList: currStatus
            },
        )
    }
    return (
        <div>ERROR</div>
    )

}

export default DynamicCelMenu