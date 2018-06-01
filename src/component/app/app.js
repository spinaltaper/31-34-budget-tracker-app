import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Dashboard from '../dashboard/dashboard';
import '../../styles/main.scss';

export default class App extends React.Component {
  render() {
    return (
            <div className="app">
                <BrowserRouter>
                    <div>
                        <header>
                            <h1>Budget Tracker</h1>
                            <nav>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/dashboard/">Dashboard</Link></li>
                                </ul>
                            </nav>
                        </header>
                    </div>
                </BrowserRouter>
            </div>
    );
  }
}
