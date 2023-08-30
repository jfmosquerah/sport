import React, {Component} from "react";
import GoogleMaps from "simple-react-google-maps";

export default class Maps extends Component {
    render() {
        return (
            <div className="container">
                <GoogleMaps
                    apiKey={"AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik"}
                    style={{height: "500px", width: "370px" }}
                    zoom={10}
                    center={{
                        lat: 9.423765,
                        lng: -1.664428,
                    }}
                />
            </div>
        )
    }
}
