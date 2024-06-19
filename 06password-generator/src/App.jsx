import { useState, useCallback, useEffect,useRef,useMemo} from "react"
function App() {
  const [password,setPassword]=useState('');
  const [length,setLength]=useState(8);
  const [containsNumber,setContainsNumber]=useState(false);
  const [containsSpecialChar,setcontainsSpecialChar]=useState(false);
  const passRef=useRef(null);

  const passwordGenerator=useCallback(()=>{
    let password="";
    let passString="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    const passNum="0123456789"
    const passSpecialChar=`!@#$%^&*()_+-=[]{}|;:'",.<>?/~`
    if(containsNumber){
      passString+=passNum;
    }
    if(containsSpecialChar){
      passString+=passSpecialChar;
    }
    for(let a=0;a<length;a++){
      const charIndex=Math.floor(Math.random()*passString.length+1);
      password+=passString.charAt(charIndex);
    }
    setPassword(password);
  },[length,containsNumber,containsSpecialChar])
  
  const copyPasswordtoClipboard=useCallback(()=>{
    passRef.current?.select();
    passRef.current?.setSelectionRange(0,99);
    window.navigator.clipboard.writeText(password);
  },[password]);

  useEffect(()=>{passwordGenerator()},[length,containsNumber,containsSpecialChar,passwordGenerator,setPassword]);
  return (
   <>
   <div className="mx-auto mt-12 w-fit bg-slate-800 p-5 rounded-lg text-orange-400">
    <h1 className="text-center text-white text-4xl ">Password Generator</h1>
      <div className="flex overflow-hidden rounded-lg my-5">
        <input type="text" value={password} placeholder="password" className="w-full outline px-3 py-1 text-xl" readOnly ref={passRef}/>
        <button className="bg-blue-600 px-3 py-0.5 text-white " onClick={copyPasswordtoClipboard}>Copy</button>
      </div>
      <div className="flex overflow-hidden">
        <div>
          <input type="range" name="length" value={length} className="bg-orange-400 " min={8} max={99} onChange={(e)=>{setLength(e.target.value)}}/>
          <label htmlFor="length" className="ml-2 mr-5" >Length: {length}</label>
        </div>
        <div>
          <input type="checkbox" defaultChecked={containsNumber} onChange={()=>{setContainsNumber((prev)=>!prev)}}/>
          <label htmlFor="length" className="ml-2 mr-5" >Number</label>
        </div>
        <div>
          <input type="checkbox" defaultChecked={containsSpecialChar} onChange={()=>{setcontainsSpecialChar((prev)=>!prev)}}/>
          <label htmlFor="length" className="ml-2 mr-5" >Special Characters</label>
        </div>
      </div>
    </div>
   </>
  )
}

export default App
