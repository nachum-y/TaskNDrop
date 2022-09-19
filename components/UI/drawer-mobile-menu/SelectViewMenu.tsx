import SubsetHeaderToolBar from "../../boards/board-header/SubsetHeaderToolbar"
const SelectViewMenu: React.FC<{ onMenuClick: (actionType: string) => void }> = ({ onMenuClick }) => {
    return (
        <div>
            <SubsetHeaderToolBar />
        </div>
    )
}

export default SelectViewMenu