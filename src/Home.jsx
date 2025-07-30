import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { ChangeName } from './redux/userSlice'
import { AddStudent } from './redux/studentsSlice'

const Home = () => {

    const dispatch = useDispatch()

const userInfo = useSelector(state=>state.user)

const studentInfo = useSelector(state=>state.student)

console.log(userInfo,'userInfo');

console.log(studentInfo,'studentInfo');

  return (
    <div>

        <h3><i>React Redux ToolKit implementation</i></h3>
          

         <button onClick={() => dispatch(ChangeName("Bilal")) }>Button 1</button>
   
         <button onClick={() => dispatch(ChangeName("Nouman")) }>Button 2</button>

         <button onClick={() => dispatch( AddStudent("student 1 rayyan") )}>Add student</button>
   
         <h1>{userInfo.name}</h1>

         <h2>students :: {userInfo.name} </h2>
   
       </div>
  )
}

export default Home
