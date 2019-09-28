import React, { Component } from 'react';
import "styles/index.css"

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div className="bg-gray-400 w-screen h-screen absolute">
            <div className="text-center bg-gray-200 rounded-lg w-2/5 mx-auto py-3 mt-20">
                <h1 className="text-3xl font-semibold">Tailwind CSS with Next JS</h1>
            </div>
        </div> 
        );
    }
}
 
export default Index;