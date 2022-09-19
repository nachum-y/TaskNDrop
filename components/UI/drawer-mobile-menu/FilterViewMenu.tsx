import FilterMenu from "../menu/filter-menu/FilterMenu"

const FilterViewMenu: React.FC<{ onMenuClick: (actionType: string) => void }> = ({ onMenuClick }) => {



    return (
        <div>
            <FilterMenu onMenuClick={onMenuClick} />
        </div>


    )
}

export default FilterViewMenu