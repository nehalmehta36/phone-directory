import React, {Component} from 'react';
import './Header.css'

const Header = function(props){
    //const head = {textAlign:'center',padding:20,background:'black',textTransform:'uppercase',color:'white' };
    return(
        
        <div className= "header">
            {props.heading}
        </div>
    )
}



export default Header;