import FilterMenu from "../menu/filter-menu/FilterMenu"

const FilterViewMenu: React.FC<{ onMenuClick: (actionType: string) => void }> = ({ onMenuClick }) => {



    return (

        <FilterMenu onMenuClick={onMenuClick} />

    )
}

export default FilterViewMenu