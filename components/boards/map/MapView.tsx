const MapView = () => {
    return (
        <div className="map-location">
            <div className="map-location-title">
                <span>Map</span>
                {/* <a className="view-in"
                href="`https://www.google.com/maps/search/${resul_lat},${resul_lng}`">
                View in Google Maps
            </a> */}
            </div>
            <div className="m-6" style={{ width: '100%', height: '400px' }} />
        </div>
    )
}

export default MapView