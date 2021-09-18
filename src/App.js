import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

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
    },
    {
      name: 'Babul Akter',
      age: 26,
      devType: 'front end developer',
      salary: '$100k',
      isSenior: false
    }
  ]

  return (
     <div className="webDevs">
          {devArray.map(dev => <Devs name={dev.name} age={dev.age} devType={dev.devType} salary={dev.salary} isSenior={dev.isSenior}></Devs>)}
     </div>
  )
}

function Devs(props) {
  const {name, age, devType, salary, isSenior} = props
  let senior = isSenior;
   senior = senior ? `A senior developer` : `A junior developer`
  return (
    <div className="devContainer text-center border border-warning rounded-2 p-2 w-50 mx-auto mb-2">
      <h2> name: {name} </h2>
      <h3> age: {age}</h3>
      <h4>type: {devType}</h4>
      <h5>salary: {salary}</h5>
      <h6>isSenior: {senior}</h6>
    </div>
  )
}



export default App;
