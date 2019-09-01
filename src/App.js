import React, {Component} from "react";
import Header from "./Components/Header";
import './App.css';
import {render} from "react-dom"
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
   clickHandler(message){
      alert(message)
   }
   render() {
   let subscribers = [
      {
         id: "1",
         name:"nehal",
         phone:"9958961516"
      },
      {
         id:"2",
         name: 'rita',
         phone: "885152623"
      }
   ]

  return (
    <fragment>
      <Header heading = "Phone Directory"/>
      <button className="btn">ADD</button><br />
      <div className= "grid-container heading-container">
      <span className= "nameHeading">NAME</span>
      <span className="phoneHeading">PHONE</span>
      </div>
      {
         subscribers.map(sub =>{
            return <div className="grid-container" key={sub.id}>
               <span className="grid-item">{sub.name}</span>
               <span className="grid-item">{sub.phone}</span>
               <button className = "grid-item  delBtn " onClick={this.clickHandler.bind(this, "dddeleted")}>Delete</button>
            </div>
         })
      }
      
    </fragment>
  );
  }
}

export default App;
