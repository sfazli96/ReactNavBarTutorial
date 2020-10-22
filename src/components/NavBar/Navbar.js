import React, { Component } from 'react'
import { Button } from '../Button'
import { MenuItems } from "./MenuItems"
import './NavBar.css'  

// In react class are called className instead of class
// We update the elements to be enclosed between <li> elements then we wrap this new list within the <ul> elements and render it.
// the <a> defines a hyperlink, which is used to link one page to another. 
// The Href attribute indicates links destination.
// In the ul we have to go through the data in the arrary and return new array. We are going to map data in that array which will utilize MAP.
// ^ We are creating new arrays with the values.
// Inside the <a className we are going to return the item of className, item of url and title from the MenuItems.

class Navbar extends Component {
    state = { clicked: false}

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }




    render() {
        return (
            <nav className = "NavBarItems"> 
               <h1 className ="navbar-logo">React<i className= "fab fa-react"></i></h1>
               <div className = "menu-icon" onClick = {this.handleClick}>
                   <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
               </div>
               <ul className = { this.state.clicked ? 'nav-menu active' : 
                'nav-menu'}>
                   {MenuItems.map((item, index) =>  {
                        return (                             
                            <li key = {index}>
                                <a className = {item.cName} href={item.url}>
                                {item.title}                           
                                </a>
                            </li>
                        )
                   })}
               </ul>
               <Button>Sign Up</Button>
            </nav>
        )
    }
}

export default Navbar;
