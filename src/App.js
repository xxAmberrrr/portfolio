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
        <div className="introTxt">
          <h1>Amber Hoogland</h1>
          <p class="introParagraph">
            full-stack developer met een passie voor front-end | 22 jaar oud | Capelle a/d IJssel | klantvriendelijk | doorzetter | leergierig | structuur-junkie
          </p>
        </div>
        <div className="profileImgContainer">
        <div className="profilePic"></div>
        </div>
      </header>
    </div>
    )
  }
}
