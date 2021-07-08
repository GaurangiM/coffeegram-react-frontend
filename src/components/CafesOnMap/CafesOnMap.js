import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from "leaflet";
import React from 'react'
import { motion } from "framer-motion";

import { transition, animationOne } from '../../animations';
import "leaflet/dist/leaflet.css";
import './CafesOnMap.css'

const CafesOnMap = ({cafes})=> {

  const cafeIcon = new Icon({
    iconUrl: "https://image.flaticon.com/icons/png/512/4721/4721028.png",
    iconSize: [40, 40],
  })

  return (
    <motion.div initial='out'
    animate='in'
    exit='out'
    variants={animationOne}
    transition={transition} className="CafesOnMap">
      <MapContainer center={[52.3680775, 4.9041506]} zoom={13} scrollWheelZoom={false}>
        <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cafes && (
            cafes.map(cafe=> (
              <Marker position={[cafe.cafe.address.latitude, cafe.cafe.address.longitude]}
                      key={cafe.id}
                      icon={cafeIcon}>
                <Popup>
                  {cafe.cafe.name}
                  <p>{cafe.cafe.address.houseNumber} {cafe.cafe.address.streetName}, {cafe.cafe.address.postCode} {cafe.cafe.address.city}</p>
                </Popup>
              </Marker>
            ))
          )}
      </MapContainer>

    </motion.div>
  )
}

export default CafesOnMap