import React, { Component } from "react";
import "./UserInput.css";

// const userInput = props => {
//     return (
//         <div>
//             <input 
//                 type="text" 
//                 value={props.name} 
//                 onChange={props.change}></input>
//         </div>
//     );
// }

class UserInput extends Component  {

    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount(){
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render() {
        return (
            <div>
                <input 
                    type="text" 
                    value={this.props.name} 
                    onChange={this.props.change}
                    // ref={(inputEl) => {this.inputElement = inputEl;}}
                    ref={this.inputElementRef}
                    />
            </div>
        );
    };
}

export default UserInput;