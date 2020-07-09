
import React from "react";

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
            button = <button>Log In</button>;
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