import React, { Component } from 'react';

class Navbar extends Component {
    state = {  } 
    render() { 
        const styles = {
            background: {
                backgroundcolor: 'red',
                width: '100%',
            },
            lighttext: {
                color: 'lightgrey'
            }
        }

        return (
            <nav class="navbar bg-dark">
                <a class="navbar-brand ms-4 text-light" href='#'>Connect US</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>


            </nav>
        );
    }
}
 
export default Navbar;