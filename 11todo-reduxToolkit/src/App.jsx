import './App.css'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

function App() {

  return (
    <>
      <h1 className='text-4xl text-white'>Redux-Toolkit with React</h1>
      <h1 className='text-3xl text-white mt-5'>Todo-List</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
