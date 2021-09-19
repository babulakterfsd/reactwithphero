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
       <h1 className="text-center mb-2">Developer List</h1>
       <div className="devContainer">
          {devArray.map(dev => <Devs name={dev.name} age={dev.age} devType={dev.devType} salary={dev.salary} isSenior={dev.isSenior}></Devs>)}
       </div>

       <div className="learnState border border-success border-2 w-50 mx-auto m-2 mb-5">
         <LearnState></LearnState>
       </div>
       <Loadusers></Loadusers>

     <MyArticle></MyArticle>
   
    <div className="blogContainer p-5 d-flex justify-content-around">
     <Blog heading="Bolod to Boss" author="jhankar Mahbub"></Blog>
     <Blog heading="Full stack development" author="H M Nayeem"></Blog>
     <Blog heading="Javascript" author="Zonayed Ahmed"></Blog>
    </div>

    <Mobile></Mobile>
    <Todos></Todos>
     </>
  )
}

function Todos(props) {
  const [todo,setTodo] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
     .then(res => res.json())
      .then(data => setTodo(data.slice(0,20)))
  }, [])
  return (
    <div className="p-5">
      <h3 className="text-center">Data from JSONPlaceholder</h3>
    <div className="todoContainer py-2 px-5 ">
      {todo.map(singleTodo => <div className="singleTodoContainer text-center"><h6><span className="me-3">{singleTodo.id}.</span>{singleTodo.title}</h6></div>)}
    </div>
    </div>
  )
}



function Mobile(props) {
  const [battery, setBattery] = useState(100);
  const decreaseBattery = () => {
    const lowBattery = battery - 10;
    if(lowBattery >= 0) {
      setBattery(lowBattery)
    } else {
      alert('Battery can not be negative')
    }
  }
  return (
    <div className="p-5">
        <h4 className="text-center">{battery}</h4>
        <button onClick={decreaseBattery} className="btn btn-danger text-white d-block mx-auto">Battery Down</button>
    </div>
  )
}





function Blog(props) {
  const {heading, author} = props
  return (
    <div >
      <div className="singleBlog">
       <h3 className="text-center">{heading}</h3>
       <h4 className="text-center">{author}</h4>
      </div>
    </div>
  )
}

function MyArticle(props) {
  const h2Styler = {
    color: 'green',
    textAlign: 'center',
    fontStyle: 'italic'
  }
  return (
    <div className="container p-5">
      <article className="blog">
        <h2 style = {h2Styler}>This is the article heading</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio iste illum, rerum iusto eum nihil non, vitae aliquid soluta ab explicabo tempore nesciunt. Consequatur sapiente obcaecati reiciendis provident natus sint similique possimus, dolor libero asperiores ea ducimus fugiat quaerat ratione, beatae harum doloribus eos impedit dolorem ad! Odio, iste perspiciatis.
         <p style = {{color: 'red', fontSize: '14px', padding: '10px', textAlign: 'center'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt consequuntur impedit, cupiditate modi deleniti ipsam aliquam. Dolorum magni, accusantium sint facere eligendi dicta voluptatem quidem quas, optio esse beatae ducimus?</p>
        </article>
    </div>
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
    <div className="p-5 border border-warning border-1">
      <h2> name: {name} </h2>
      <h3> age: {age}</h3>
      <h4>type: {devType}</h4>
      <h5>salary: {salary}</h5>
      <h6>isSenior: {senior}</h6>
    </div>
  )
}



export default App;