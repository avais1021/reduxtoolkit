import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { ChangeName } from './redux/store'

const Home = () => {

    const dispatch = useDispatch()

const userInfo = useSelector(state=>state)

console.log(userInfo,'userInfo');

  return (
    <div>

        <h3><i>React Redux ToolKit implementation</i></h3>
          

         <button onClick={() => dispatch(ChangeName("Bilal")) }>Button 1</button>
   
         <button onClick={() => dispatch(ChangeName("Nouman")) }>Button 2</button>
   
         <h1>{userInfo.user.name}</h1>
   
       </div>
  )
}

export default Home
