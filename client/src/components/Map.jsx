import { withGoogleMap, withScriptjs, GoogleMap, Marker } from "react-google-maps"
import InfoBox from 'react-google-maps/lib/components/addons/InfoBox'
const options = { closeBoxURL: '', enableEventPropagation: true };


const Map = () => {
    return (
        <>
            <div>
                <GoogleMap
                    defaultZoom={15}
                    defaultCenter={{ lat: 12.20971, lng: 109.20141 }}
                >
                    <Marker
                        icon={{
                            url: 'https://insulationpads.co.uk/wp-content/uploads/2017/10/Home.png',
                            scaledSize: new window.google.maps.Size(40, 40),
                        }}
                        position={{ lat: 12.20971, lng: 109.20141 }}
                    >

                        <InfoBox
                            options={options}
                        >
                            <>
                                <div style={{  color: 'white', fontSize:'18px' }}>
                                    Công ty cổ phần thời trang YOLO
                                </div>
                            </>
                        </InfoBox>

                    </Marker>

                </GoogleMap>
            </div>
        </>
    )
}

export default withScriptjs(withGoogleMap(Map))
