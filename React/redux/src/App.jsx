
import './App.css'
import Navbar from './components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, multiply } from './redux/counter/counterSlice'

function App() {
const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.value)

  return (
    <>
    <Navbar count={count}/>
      <div>
        <button onClick={()=>dispatch(decrement())}>-</button>
        Currently count is {count}
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(multiply())}>*</button>
      </div>
    </>
  )
}

export default App
