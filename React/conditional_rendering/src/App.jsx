import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(true)
  const [todos, setTodos] = useState([
    {
      title: "Hey",
      desc: "i am a desc"
    },

    {
      title: "Hey i am another todo",
      desc: "i am a another desc"
    },

    {
      title: "Hey i am grocery todo",
      desc: "i am a grocery desc"
    }

  ])

  // const Todo = ({todo}) => {
  //   return (<>
  //   <div className="m-4 border-1 border-purple-500">

  //     <div className="todo">{todo.title}</div>
  //     <div className="todo">{todo.desc}</div>
  //   </div>

  //     </>)
  // }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      {/* {showbtn && <button>showbtn is true</button>} */}


      {showbtn ? <button>showbtn is true</button> : <button>showbtn is false</button>}


      {todos.map(todo => {

        // return <Todo key = {todo.title} todo = {todo}/>
        return <div key={todo.title} className="m-4 border-1 border-purple-500">

          <div className="todo">{todo.title}</div>
          <div className="todo">{todo.desc}</div>
        </div>
      })}

      <div className="card">
        <button onClick={() => setshowbtn((!showbtn))}>
          Toggle Showbtn
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
