import { useState } from 'react'
import './App.css'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'
import Counter from './counter'
function App() {
  const [count, setCount] = useState(0)

  // Function With No Parameter

  function handleClick(){
    alert('button clicked')
  }

  const handleClickTwo = ()=>{
    alert('Button Two Clicked')
  }
  // Functiom With Parameter

  const addFive = (num) => { 
    alert(num + 5);
  }
  return (
    <>
      <h2>React Core Concepts Two</h2>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClickTwo}>Click Me Two</button>
      {/* Fat Arrow Function on Inline Event Handler in React */}
      <button onClick={()=> alert('Clickedddd')}>Click Me Three</button>

      {/* Write inline event handler with normal function But we don't do that we use fat arrow function*/}
      <button onClick={function handleClick() {alert('Hi i am here')}}>Four Button</button>
      <button onClick={function handleGuta(){alert('Guta dila')}}>Lucky Seven Button</button>

      {/* How to call a function in JSX which take parameter */}
      <button onClick={() => addFive(10)}>Five</button>
      <MyButton></MyButton>
      <Profile></Profile>


      <Counter></Counter>
      <Counter></Counter>


      <Team></Team>

      <Users></Users>

      <Friends></Friends>
    </>
  )
}

export default App


// Componenta
// Creating component and nesting components

function MyButton(){ 

  // function handleClick(){
  //   alert('Button One Clicked')
  // }

  const handleClick = () => {
    alert('Button One Clicked')
  }

  return (
    <button onClick={handleClick}>I'm a button</button>
  )
}

const user ={
  name: 'Kala Mia',
  imageUrl:'https://i.imgur.com/yXOvdOSs.jpg',
  imgaeSize: 90,

};

function Profile(){
  return (
    <div>
      <h1>{user.name}</h1>
      <img 
      src={user.imageUrl}
      alt={'Photo of' + user.name}
      style={{
        width: user.imgaeSize,
        height: user.imgaeSize,
        borderRadius: '50%',
      }} 
      />
    </div>
  )
}