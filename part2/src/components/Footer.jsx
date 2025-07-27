import { Component } from "react";
import './Footer.css';


// class Component 
//shortcut: rcc
// data recevier :  props
class Footer extends Component{
    render(){
        console.log(this.props)
        return(
            <footer>
                @Copy Rights by {this.props.user}
            </footer>
        )
    }
}

export default Footer;
