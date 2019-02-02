import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Search from '../search';
import Index from '../index';


const AppRouter = () => (
    <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/search/">Search</Link>
                    </li>
                </ul>
            </nav>
            <Route path="/" exact component={Index} />
            <Route path="/search/" exact component={Search} />
        </div>


    </Router>

)


export default AppRouter;