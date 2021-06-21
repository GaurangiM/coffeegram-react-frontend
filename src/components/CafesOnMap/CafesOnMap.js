import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from "leaflet";
import React from 'react'
import "leaflet/dist/leaflet.css";
import './CafesOnMap.css'

const CafesOnMap = ({cafes})=> {

  const cafeIcon = new Icon({
    iconUrl: "https://image.flaticon.com/icons/png/512/4721/4721028.png",
    iconSize: [40, 40],
  })

  return (
    <div className="CafesOnMap">
      <MapContainer center={[52.3680775, 4.9041506]} zoom={13} scrollWheelZoom={false}>
        <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cafes && (
            cafes.map(cafe=> (
              <Marker position={[cafe.address.latitude, cafe.address.longitude]}
                      key={cafe.id}
                      icon={cafeIcon}>
                <Popup>
                  {cafe.name}
                </Popup>
              </Marker>
            ))
          )}
      </MapContainer>

    </div>
  )
}

export default CafesOnMap