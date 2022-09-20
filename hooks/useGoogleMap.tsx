import { Loader } from '@googlemaps/js-api-loader'
import { useEffect, useState } from 'react'


const useGoogleMap = () => {

    const [loaded, setLoaded] = useState<boolean>(false)
    const { NEXT_PUBLIC_GOOGLE_MAP_KEY } = process.env


    const loader = new Loader({
        apiKey: NEXT_PUBLIC_GOOGLE_MAP_KEY as string,
        version: "weekly",
        libraries: ["places"]
    })

    useEffect(() => {
        if (loader) {
            const res = loader.load().then((google) => {
                console.log(google)
                setLoaded(true)

            })

            console.log(res)


        }
    })

    return (loaded)
}

export default useGoogleMap

