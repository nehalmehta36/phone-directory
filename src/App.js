import React from "react";
import Header from "./Components/Header";
import './App.css';
import {render} from "react-dom"
// import logo from './logo.svg';
// import './App.css';

function App() {
   let subscribers = [
      {
         name:"nehal",
         phone:"9958961516"
      },
      {
         name: 'rita',
         phone: "885152623"
      }
   ]
//   render() {
  return (
    <fragment>
      <Header />
      <button id="btn">ADD</button><br />
      <div className= "grid-container heading-container">
      <span className= "nameHeading">NAME</span>
      <span className="phoneHeading">PHONE</span>
      </div>
      {
         subscribers.map(sub =>{
            return <div className="grid-container">
               <span className="grid-item">{sub.name}</span>
               <span className="grid-item">{sub.phone}</span>
            </div>
         })
      }
    </fragment>
  );
//   }
}

export default App;
