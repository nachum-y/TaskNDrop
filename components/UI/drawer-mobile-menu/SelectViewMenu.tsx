import SubsetHeaderToolBar from "../../boards/board-header/SubsetHeaderToolbar"
import NoSsr from '@mui/base/NoSsr'

const SelectViewMenu: React.FC<{ onMenuClick: (actionType: string) => void }> = ({ onMenuClick }) => {
    return (
        <NoSsr>
            <SubsetHeaderToolBar />
        </NoSsr>
    )
}

export default SelectViewMenu