import * as React from 'react';

import { CardList, SearchBox } from './components';

import './App.css';



class App extends React.Component {
    constructor() {
        super();

        this.state = {
            monsterArray: [],
            searchField: ''
        };

    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ monsterArray: users }))
    };

    handleChange = (event) => {
        this.setState({searchField: event.target.value})
    }

    render() {
        const { monsterArray, searchField } = this.state;
        const filteredMonsters = monsterArray.filter(monster => 
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        )
        
        return (
        <div className = "App">
            <h1>Monster Rolodex</h1>
            <SearchBox
                onSearchValueChange={this.handleChange}
                searchPlaceholder={'Search monsters'}
            />
            <CardList monsters={filteredMonsters} />
        </div>
        );
    }
}

export default App;