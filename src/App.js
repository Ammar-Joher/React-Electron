import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

const API = 'http://localhost:8000/api/test';
const DEFAULT_QUERY = '';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hits: [],
    };
  }

  componentDidMount() {
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits }));
  }

  render() {
    const { hits } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn react
          </a>
          <ul>
        {hits.map(hit =>
            <li key={hit.objectID}>
              <a href={hit.url}>{hit.title}</a>
            </li>
          )}
        </ul>
        </header>
      </div>
    );
  }
}

export default App;
