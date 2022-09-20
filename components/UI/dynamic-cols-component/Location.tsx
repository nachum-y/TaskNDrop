import { ClickAwayListener } from '@mui/material'
import { ReactElement, useEffect, useRef, useState } from 'react'
import { Col, LocationCol } from '../../../service/type'
import classes from './Location.module.scss'
import { Wrapper, Status } from "@googlemaps/react-wrapper"
import PlacesAutocomplete from '../PlacesAutocomplete/PlacesAutocomplete'





const Location: React.FC<{ taskCol: Col, updateCol: (newCol: Col) => void, onCelClick: (el: HTMLSpanElement) => void }> = ({ taskCol, updateCol, onCelClick }) => {



    const value: LocationCol | undefined = taskCol.value as LocationCol || undefined
    const type = taskCol.type
    const [title, setTitle] = useState<string>('Type address...')
    const [selected, setSelected] = useState<LocationCol | null>(null)

    useEffect(() => {
        if (value && typeof value !== 'number') {
            setTitle(value.title)
        }
        console.log(taskCol)

    }, [value])


    // const [value, setValue] = useState(textToDisplay)
    const [editingMode, setEditingMode] = useState(false)

    const startEditingHandler = () => {
        setEditingMode(() => true)

    }

    const ref = useRef(null)




    useEffect(() => {
        if (selected) {
            const newCol = { type, value: selected }
            updateCol(newCol)
        }
    }, [selected])

    // const [loading] = useGoogleMapsApi({ library: "places" });

    const render = (status: Status): ReactElement => {
        if (status === Status.FAILURE) return (<div >error</div>)
        return (<div >spinner</div>)



    }

    const { NEXT_PUBLIC_GOOGLE_MAP_KEY } = process.env
    return (
        <ClickAwayListener onClickAway={() => setEditingMode(false)}>
            <div className={classes['task-location']}>
                <div onClick={startEditingHandler} className={editingMode ? classes['text-cell-component-active'] : classes['text-cell-component']}>
                    {!editingMode &&
                        <span
                            className={classes['text-content']}
                        >
                            {title}
                        </span>}
                    {editingMode &&

                        <Wrapper
                            apiKey={NEXT_PUBLIC_GOOGLE_MAP_KEY as string}
                            render={render}
                            libraries={["places"]} 
                        >
                            {/* <PlacesAutocomplete setSelected={setSelected} /> */}
                        </Wrapper>
                        // <input placeholder={title} ref={ref} id='row.id' type='text' autoFocus className={classes['input-location']} onBlur={() => setEditingMode(false)} />

                    }
                    <div className={classes['icon-v2-line-location']}>
                    </div>
                </div>
            </div>
        </ClickAwayListener >
    )
}

export default Location