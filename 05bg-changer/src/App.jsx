import {useState} from "react"
function App() {
  const [bgColour,setBgColor]=useState("white");
  const changeBg=(color)=>{
    setBgColor(color);
  }
  return (
    <>
    <div className="w-full h-screen" style={{backgroundColor:bgColour}}></div>
    <div className="fixed flex justify-center bottom-12 inset-x-0 ">
      <div className="flex flex-wrap justify-center bg-white p-2 rounded-md">
        <button className="bg-red-500 px-3 py-2 rounded-md mx-2 text-white"
          onClick={()=>setBgColor("red")}>Red</button>
        <button className="bg-yellow-500 px-3 py-2 rounded-md mx-2 text-white"
          onClick={()=>setBgColor("yellow")}>Yellow</button>
        <button className="bg-blue-500 px-3 py-2 rounded-md mx-2 text-white"
          onClick={()=>setBgColor("blue")}>Blue</button>
        <button className="bg-violet-500 px-3 py-2 rounded-md mx-2 text-white"
          onClick={()=>setBgColor("violet")}>Violet</button>
        <button className="bg-red-500 px-3 py-2 rounded-md mx-2 text-white"
          onClick={()=>setBgColor("red")}>Red</button>
      </div>
    </div>
    </>
  )
}

export default App
