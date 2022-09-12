import React, { useContext } from "react"
import { Col, FullMember, Labels, Member } from "../../../../service/type"
import { BoardContext } from "../../../../store/board"
import StatusMenu from "./StatusMenu"
import PersonMenu from "./PersonMenu"
import DateMenu from "./DateMenu"


// import BoardCont


type Cmp = React.FC<{
    onMenuClick: (actionId: string | number | Member[]) => void,
    menuObj: { boardList: any, celValue: any }
}>

type ComponentMap = {
    // GroupMenu: Cmp,
    // textCmp: Cmp,
    person: Cmp,
    date: Cmp,
    labelCmp: Cmp,
    status: Cmp,
    priority: Cmp,
    // location: Cmp,
    // creationLog: Cmp,
}

const keysToComponentMap: ComponentMap = {
    // GroupMenu: GroupMenu,
    // textCmp: Text,
    person: PersonMenu,
    date: DateMenu,
    labelCmp: StatusMenu,
    status: StatusMenu,
    priority: StatusMenu,
    // location: Test2,
    // creationLog: CreationLog,


}

type labelsStatus = {
    status: Labels[]
    labelCmp: Labels[]
    priority: Labels[],
    person: FullMember[],
    date: number
}




const DynamicCelMenu: React.FC<{ menuType: Col }> = ({ menuType }) => {

    const { onClickDialogMenu,
        statusValueBoard: status,
        labelsValueBoard: labelCmp,
        priorityValueBoard: priority,
        boardMembers: person,
        updateTask,
        anchorElCel
    } = useContext(BoardContext)
    const { type, value } = menuType



    const labelsVal: labelsStatus = {
        status,
        labelCmp,
        priority,
        person,
        date: 0,
    }


    const statusKey = type as string
    const currStatus: Labels[] | FullMember[] | number = labelsVal[statusKey as keyof labelsStatus]

    console.log(statusKey)

    const menuObj = {
        boardList: currStatus,
        celValue: value
    }

    const onClickHandler = (value: string | number | Member[]) => {
        if (anchorElCel && anchorElCel.idx.groupId && anchorElCel.idx.taskId) {
            const { groupId, taskId } = anchorElCel.idx
            const idx = { groupId, taskId }
            const newCol = { type, value }
            console.log(newCol);
            updateTask(newCol, idx)
        }

    }




    if (typeof keysToComponentMap[statusKey as keyof ComponentMap] !== 'undefined') {
        return React.createElement(
            keysToComponentMap[statusKey as keyof ComponentMap],
            {
                key: type,
                onMenuClick: onClickHandler,
                menuObj: menuObj
            },
        )
    }
    return (
        <div>ERROR</div>
    )

}

export default DynamicCelMenu