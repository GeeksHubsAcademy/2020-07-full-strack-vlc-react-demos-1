
import React from "react";
import { NavLink } from "react-router-dom";

import './header.css';

class Header extends React.Component {
    
    constructor (props) {
        super(props);

        this.state = {
            isLoggedIn : false
        }
        
    };
    
    render() {
        // const isLoggedIn = this.state.isLoggedIn;
        let button;
        if(this.state.isLoggedIn){
            button = <button>Log out</button>;
        }else{
            //Importamos NavLink y lo usamos para hacer redirección desde 
            //componentes fijados fuera del switch
            button = <div><NavLink exact to="/login">
            <button>Log In</button>
    </NavLink><NavLink exact to="/register">
            <button>Register</button>
    </NavLink>
                </div>
        }

        return(
            <div className="comp-Header">
                {/* The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in. */}
                {button}
            </div>
        );
    };
    
    
};


export default Header;