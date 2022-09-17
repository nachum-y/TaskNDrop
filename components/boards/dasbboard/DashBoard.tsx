import { useContext } from "react"
import { BoardContext } from "../../../store/board"
import AccountBalance from "./AccountBalance"
import ChartByStatus from "./ChartByStatus"
import NumberView from "./NumberView"
import classes from './Dashboard.module.scss'
import ChartColumn from "./ChartColumn"
import TeamView from "./TeamView"




const DashBoard = () => {

  const { boardMembers, labelsValueBoard, priorityValueBoard, statusValueBoard } = useContext(BoardContext)
  return (
    <div className={classes['dashboard-content']} >
      <NumberView
        labelsVal={statusValueBoard}
      />

      <ChartByStatus
        classN='dashboard-item-task-by-priority'
        title='Tasks by priority'
        status='priority'
        labelsVal={priorityValueBoard}
      />
      <ChartByStatus
        classN='dashboard-item-task-by-lables'
        title='Tasks by lables'
        status='label'
        labelsVal={labelsValueBoard}

      />


      <ChartColumn
        classN='dashboard-item-task-by-status'
        title='Tasks by status'
      />


      <TeamView
        boardMembers={boardMembers} />

    </div >
  )
}

export default DashBoard