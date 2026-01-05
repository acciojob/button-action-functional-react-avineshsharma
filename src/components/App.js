import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [isshow , setisshow] = useState(false)
      
  function handle(){
    setisshow(true)
  }
  return (
    <div id="main">
     <button id = "click" onClick={handle}>click</button>
    

    {isshow && (
      <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy .</p>

    )}
    </div>
  );
}


export default App;
