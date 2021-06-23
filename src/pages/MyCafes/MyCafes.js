import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../store/user/selectors";

import CafesOnMap from '../../components/CafesOnMap/CafesOnMap'

const MyCafes = ()=> {
  const [cafeList, setCafeList] = useState([]);
  const user = useSelector(selectUser);

  useEffect(()=> {
    const fetchData = async()=> {
      const response = await axios.get(`http://localhost:4000/cafes/${user.id}/mycafes`)
      console.log(response.data.userCafes)
      setCafeList([...response.data.userCafes])
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