import Box from '@mui/material/Box'
import FormLabel from '@mui/material/FormLabel'
import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormHelperText from '@mui/material/FormHelperText'
import Checkbox from '@mui/material/Checkbox'
import { useEffect, useState } from 'react'
import { ColsOrder } from '../../../service/type'

type NewState = {
    type?: boolean
}

const SelectBox: React.FC<{ selectTitle: string, kanbanColList: string[], colsOrder: ColsOrder[], setKanbanColList: (newList: string[]) => void }> = ({ selectTitle, kanbanColList, colsOrder, setKanbanColList }) => {

    const [state, setState] = useState<NewState>({})
    useEffect(() => {
        let newState: NewState = {}

        colsOrder.forEach(col => {
            console.log(kanbanColList);
            
            newState[col.type as keyof NewState] = kanbanColList.includes(col.type)
        })

        setState(() => newState)

    }, [colsOrder])




    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selected = event.target.name as string
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        })
        let newlist: string[]
        if (kanbanColList.includes(event.target.name)) {
            newlist = kanbanColList.filter((item) => item !== event.target.name)
            setKanbanColList(newlist)
        } else {
            setKanbanColList(kanbanColList.concat(selected))
        }
    }

    // const { gilad, jason, antoine } = state
    // const error = [gilad, jason, antoine].filter((v) => v).length !== 2

    return (
        <Box sx={{ display: 'flex' }}>
            <FormControl sx={{ m: 0 }} component="fieldset" variant="standard">
                <FormLabel component="legend">{selectTitle}</FormLabel>
                <FormGroup>

                    {colsOrder.slice(1).map(c => (<FormControlLabel
                        key={c.type}
                        control={
                            <Checkbox checked={state[c.type as keyof NewState] || false} onChange={handleChange} name={c.type} />
                        }
                        label={c.title}
                    />))}

                </FormGroup>
                {/* <FormHelperText>Be careful</FormHelperText> */}
            </FormControl>

        </Box>
    )

}

export default SelectBox