import React, {Component} from 'react'
import './main.css';
import Graph from '../graphing/graph'
import Dashboard from '../templates/Dashboard';
// import axios from 'axios'

class Main extends Component { 

    render() {
        return(
            <div>
                <Dashboard></Dashboard>
            </div>
        )
    }
}

export default Main;