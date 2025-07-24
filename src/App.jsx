import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { ChangeName } from './redux/store'

const App = () => {

const dispatch = useDispatch()

const userInfo = useSelector(state=>state)

console.log(userInfo,'userInfo');

  return (
    <div>
      <button onClick={() => dispatch(ChangeName("Bilal")) }>Button 1</button>

      <button onClick={() => dispatch(ChangeName("Nouman")) }>Button 2</button>

      <h1></h1>

    </div>
  )
}

export default App
