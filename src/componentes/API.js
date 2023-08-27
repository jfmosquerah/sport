import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// Define el componente LocationMap
function LocationMap() {
    // Define el estado del componente
    const [location, setLocation] = useState(null);

    // Define el efecto del componente
    useEffect(() => {
        // Define la función que obtiene los datos del API
        async function fetchData() {
            // Define la URL del API
            const url = "https://www.google.com/maps/place/Bucarica+Sector+18/@7.0674809,-73.0848064,17z/data=!3m1!4b1!4m6!3m5!1s0x8e684191e17600e7:0x56b2d9d27779e3fc!8m2!3d7.0674756!4d-73.0822261!16s%2Fg%2F11n0z6r6rh?entry=ttu";
            // Realiza una petición GET al API
            const response = await fetch(url);
            // Convierte la respuesta a JSON
            const data = await response.json();
            // Actualiza el estado con los datos obtenidos
            setLocation(data);
        }
        // Invoca la función
        fetchData();
    }, []);

    // Define el método que renderiza el componente
    return (
        <div className="location-map">
            <h1>Ubicación de Google Maps</h1>
            {location ? (
                <LoadScript googleMapsApiKey="YOUR_API_KEY">
                    <GoogleMap
                        mapContainerStyle={{ width: "400px", height: "400px" }}
                        center={{ lat: location.latitude, lng: location.longitude }}
                        zoom={15}
                    >
                        <Marker position={{ lat: location.latitude, lng: location.longitude }} />
                    </GoogleMap>
                </LoadScript>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
}

// Exporta el componente
export default LocationMap;
