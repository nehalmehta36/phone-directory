import React,{Component} from 'react';
import Header from './Header'

class AddSubscriber extends Component{
    render(){
        return(
            <div>
                <Header />
                <div className="component-body-container">
                    <button className="custom-btn">Back</button>
                </div>
            
            </div>
        )
    }
}

export default AddSubscriber;