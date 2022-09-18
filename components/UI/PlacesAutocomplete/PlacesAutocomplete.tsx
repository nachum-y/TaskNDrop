import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete"

import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
} from "@reach/combobox"
import "@reach/combobox/styles.css"

import classes from './PlacesAutocomplete.module.scss'
import { useEffect, useRef } from "react"

type CelLocation = {
    title: string,
    lnglat: {
        lat: number,
        lng: number
    }
}

const PlacesAutocomplete: React.FC<{ setSelected: any }> = ({ setSelected }) => {


    const ref = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (ref.current) {
            ref.current.focus()
        }
    })

    const {
        ready,
        value,
        setValue,
        suggestions: { status, data },
        clearSuggestions,
    } = usePlacesAutocomplete()

    const handleSelect = async (address: string) => {
        setValue(address, false)
        clearSuggestions()

        const results = await getGeocode({ address })
        const { lat, lng } = await getLatLng(results[0])
        setSelected({
            title: results[0].address_components[0].long_name,
            lnglat: {
                lat: lat,
                lng: lng
            }
        })
    }
    return (
        <Combobox onSelect={handleSelect}>
            <ComboboxInput
                value={value}
                autoFocus
                onChange={(e) => setValue(e.target.value)}
                disabled={!ready}
                className={classes['input-location']}
                ref={ref}
            />
            <ComboboxPopover>
                <ComboboxList>
                    {status === "OK" &&
                        data.map(({ place_id, description }) => (
                            <ComboboxOption key={place_id} value={description} />
                        ))}
                </ComboboxList>
            </ComboboxPopover>
        </Combobox>
    )
}

export default PlacesAutocomplete