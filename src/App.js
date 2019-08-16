import React from 'react';
import './stylesheets/main.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <h1>Amber's portfolio</h1>
      </header>
    </div>
    )
  }
}
