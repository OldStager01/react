import './App.css'
import Card from './components/Card'
function App() {

  return (
    <>
      <h1 className='text-slate-400 mb-5'>Components & Props</h1>
      <div className='flex justify-around w-full'>
      <Card username="Jane Doe" btnText="View John"/>
      <Card username="Eve" btnText="Visit Adam"/>
      </div>
    </>
  )
}

export default App
