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

// import React, { useState } from 'react'
// import React, { useEffect,useState } from 'react'
// import Form from './Form.jsx'
// const App = () => {

//   const [input, setInput] = useState("");
//   const [data, setData] = useState("");
  
//   function fun1(e) {
//     setInput(e.target.value);
//  const[input,setinput]=useState(0);
//     // This prints previous value because state updates asynchronously
//     console.log(e.target.value);
//   }

//   function func2() {
//     setData(input);
//   }

//   return (
//     <div>

//       {/* <h2>Typing: {input}</h2> */}

//       {/* <h2>Saved Data: {data}</h2>

//       <input
//         type="text"
//         value={input}
//         placeholder="Enter your name"
//         onChange={fun1}
//       />

//       <button onClick={func2}>
//         Done
//       </button> */}
     
//      <Form/>
//     </div>
//   )
// }
// const App=()=>{

// //  const[city,setcity]=useState("Goa");
// const [users, setUsers] = useState([]);

// useEffect(() => {
//   async function call() {
//     let res = await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await res.json();
//     setUsers(data);
//   }

//   call();
// }, []);

// //  useEffect(()=>{
// //   console.log("hello")
// //  },[city]);
//  return (
//    <div>
//     <button onClick={}>n</button>
//     {/* <h2>{input}</h2>
//     <h3>{city}</h3>
//     <button onClick={()=>setinput(input+1)}> click </button>*/}
//     {/* <button onClick={()=>setcity("manali")}> click </button>  */}
//    </div>
//  )
// };
import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    async function call() {

      let res = await fetch(
        "https://dummyjson.com/products"
      );

      let data = await res.json();

      setProducts(data.products);
    }

    call();

  }, []);
 
 function deleteCard(id) {

    let newData = products.filter((item) => {
      return item.id !== id;
    });

    setProducts(newData);
  }
}
  return (
    <div className="container">

      <div className="card-container" >

        {
          products.map((item) => (

            <div className="card" key={item.id} onClick={() => deleteCard(item.id)}>
              <h4>{item.id}</h4>
              <img
                src={item.thumbnail}
                alt=""
              />

              <h3>{item.title}</h3>

              <p>₹ {item.price}</p>

            </div>
          ))
        }
       
      </div>

    </div>
  );
};

export default App;
