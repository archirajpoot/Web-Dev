// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
// import Home from './Home.jsx';

// function App() {
//   const [count, setCount] = useState(0)
//   let name="archi";
//   let roll=10;

//   return (
//     <>
//       <Home data={name}/>
//     </>
//   )
// }

// export default App;

import React, { useState } from 'react'
import Form from './Form.jsx'
const App = () => {

  const [input, setInput] = useState("");
  const [data, setData] = useState("");

  function fun1(e) {
    setInput(e.target.value);

    // This prints previous value because state updates asynchronously
    console.log(e.target.value);
  }

  function func2() {
    setData(input);
  }

  return (
    <div>

      {/* <h2>Typing: {input}</h2> */}

      {/* <h2>Saved Data: {data}</h2>

      <input
        type="text"
        value={input}
        placeholder="Enter your name"
        onChange={fun1}
      />

      <button onClick={func2}>
        Done
      </button> */}
     
     <Form/>
    </div>
  )
}

export default App
