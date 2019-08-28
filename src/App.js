import React from "react";
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="header">
      {/* <div>Phone Directory</div>
      <button>Add </button>
      <div>
        <span>Name</span>
        <span>Phone</span>
      </div> */}

      <label htmlFor = "name" defaultValue="nehal">Name: </label>
      <input id= "name" type= "text" placeholder= "Type Here"></input>
    </div>
  );
}

export default App;
