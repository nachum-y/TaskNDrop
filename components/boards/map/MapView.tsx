import { useEffect, useRef } from "react"

import classes from './Map.module.scss'


function MapView({
    center,
    zoom,
}: {
    center: google.maps.LatLngLiteral
    zoom: number
}) {

    const ref = useRef(null)

    useEffect(() => {
        if (ref.current) {
            new window.google.maps.Map(ref.current, {
                center,
                zoom,
            })
        }
    })

    return (

        <div className={classes['map-location']}>
            <div className={classes['map-location-title']}>
                <span>Map</span>
                <a className="view-in"
                    href="`https://www.google.com/maps/search/${resul_lat},${resul_lng}`">
                    View in Google Maps
                </a>
            </div>
            <div ref={ref} id="map" className={classes['m-6']} style={{ width: '100%', height: '400px', position: 'relative' }}></div>
        </div>
    )
}

export default MapView