import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect, useState } from 'react';

function App() {

  const devArray = [
    {
     name: 'Robiul Awal',
     age: 26,
     devType: 'full stack developer',
     salary: '$300k',
     isSenior: false
    },
    {
      name: 'Syful Isalm',
      age: 22,
      devType: 'Javascript developer',
      salary: '$400k',
      isSenior: true
    }
  ]

  return (
     <>
       <h1 className="text-center">Developer List</h1>
       <div className="d-flex justify-content-around">
       <hr />
          {devArray.map(dev => <Devs name={dev.name} age={dev.age} devType={dev.devType} salary={dev.salary} isSenior={dev.isSenior}></Devs>)}
       </div>

       <div className="learnState border border-success border-2 w-50 mx-auto m-2 mb-5">
         <LearnState></LearnState>
       </div>


       <Loadusers></Loadusers>
     </>
  )
}

function Loadusers(props) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
     .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
     <div className="mt-5 py-5 w-50 mx-auto border border-primary border-3">
       <h2 className="text-center">Load users from externeal data</h2>
       <hr />
       {users.map(user => <GenerateUsers name={user.name} id={user.id}></GenerateUsers>)}
     </div>
  )
}
function GenerateUsers(props) {
  const {name, id} = props
  return (
    <>
     <h4 className="text-center"><span className="text-danger">{id}.</span> {name}</h4>
    </>
  )
}



function LearnState(props) {
  let [count, setCount] = useState(0);
  const increaser = () => setCount(count + 1)
  const decreaser = () => setCount(count - 1)
     return (
       <div className="d-flex justify-content-center align-items-center py-5 px-3">
         <button className="btn btn-success btn-sm me-5 py-0" onClick={increaser}>increase</button>
        <h3 className="text-center">Count: {count}</h3>
        <button className="btn btn-danger ms-5 py-0" onClick={decreaser}>decrease</button>
       </div>
     )
}


function Devs(props) {
  const {name, age, devType, salary, isSenior} = props
  let senior = isSenior;
   senior = senior ? `A senior developer` : `A junior developer`
  return (
    <div className="dev border border-warning rounded-2 p-5 mb-2">
      <h2> name: {name} </h2>
      <h3> age: {age}</h3>
      <h4>type: {devType}</h4>
      <h5>salary: {salary}</h5>
      <h6>isSenior: {senior}</h6>
    </div>
  )
}



export default App;
