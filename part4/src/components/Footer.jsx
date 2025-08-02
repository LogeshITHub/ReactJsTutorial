import React from 'react'
import './footer.css'
import { useContext } from 'react'
import { UserContext } from '../App'

const Footer = () => {

    //User Global Variable not send props
    let {commondataforuser} = useContext(UserContext) 
    return (
        <footer>
            @Copy Rights by {commondataforuser.UserName} Role in {commondataforuser.Role} 
        </footer>
    )
}

export default Footer