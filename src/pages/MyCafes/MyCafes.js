import React, {useState, useEffect} from 'react';
import axios from 'axios'
import CafesOnMap from '../../components/CafesOnMap/CafesOnMap'

const MyCafes = ()=> {
  const [cafeList, setCafeList] = useState([]);

  useEffect(()=> {
    const fetchData = async()=> {
      const response = await axios.get("http://localhost:4000/cafes")
      console.log(response.data)
      setCafeList([...response.data.allCafes])
    }
    fetchData()
  }, [])
  return (
    <div className="MyCafes">
      <CafesOnMap cafes={cafeList}/>
    </div>
  )
}

export default MyCafes