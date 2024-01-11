import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Counter from './components/Counter';
import { useContext } from 'react';
import { ConterContext } from './context/Counter';
import Navbar from './navbar';

function App() {
  const [name, setname] = useState("");
  const [tnc, settnc] = useState(false);
  const [interest, setinterest] = useState("");
  const [pass, setpass] = useState("");
  const [status, setStatus] = useState(true);
  const [val, setVal] = useState(null);
 const counterState = useContext(ConterContext);
 console.log(counterState)
  function getformdata(e){
   
e.preventDefault();
console.log(name,tnc,interest,pass);



  }
 

  return (
    <div className="App">
      <Navbar/>
      <Navbar/>
      {
        status?<h1>hello world</h1>:null
      }
      <button onClick={()=>setStatus(!status)}>Toggle</button>
      <h1>Handle form in react</h1>
      <form onSubmit={getformdata}>
        <input type="text" placeholder='enter name' onChange={(e)=>setname(e.target.value)}/><br /><br />
        <select onChange={(e)=>setinterest(e.target.value)}>
          <option>
       choose options
          </option>
          <option>
            marvel
          </option>
          <option>
           dc
          </option>
        </select><br /><br />
        <input type='checkbox' onChange={(e)=>settnc(e.target.checked)}/><span>Accept terms and conditions</span><br /><br />
        <input type="password"  onChange={(e)=>setpass(e.target.value)}/><br /><br />
        <button type='submit'>Submit</button>
        <p>{val}</p>
      </form>
<h1>Count is {counterState.count}</h1>
<Counter/>
<Counter/>
<Counter/>
<Counter/>


    </div>
  );
}

export default App;
