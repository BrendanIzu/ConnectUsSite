import React, { Component } from 'react';

class Counter extends Component {
    state = {  } 
    render() {
        

        return (
            <div className='container-fluid bg-primary'>
                <h1>Title for this box</h1>
                <ul>
                    <button 
                        type="button" 
                        class="btn btn-primary"
                        onClick={() => console.log("Button clicked!")}>Primary</button>
                    <li>item 2</li>
                    <li>item 3</li>
                    <li>item 4</li>
                </ul>
            </div>
        )
    }
}
 
export default Counter;