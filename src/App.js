import * as React from 'react';

import { CardList } from './components';

import './App.css';



class App extends React.Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField: ''
        };
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ monsters: users }))
    };

    render() {
        return (
        <div className = "App">
            <h1>Monster Rolodex</h1>
            <CardList monsters={this.state.monsters} />
        </div>
        );
    }
}

export default App;