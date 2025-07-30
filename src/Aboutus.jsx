import React from 'react'
import { useDispatch } from 'react-redux'
import { ChangeName } from './redux/userSlice';


const Aboutus = () => {

    const dispatch = useDispatch();


  return (
    <div>
      <button onClick={() => dispatch(ChangeName("Huzaifa"))}>change name</button>
      
    </div>
  )
}

export default Aboutus
