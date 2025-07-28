// Functional Component 
// data recevier :  props

import './Header.css';

function Header(props){
    console.log(props)
    return (
        <header>
            <h1>Welcome to {props.user} Todo List Page</h1>
        </header>
    )
}
export default Header;