import React from 'react';
import ReactDOM from 'react-dom';

const e = React.createElement;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { text: "Hello, React!" };
  }

  render() {
    return (
      e("div",
        {},
        this.state.text
        )
    );
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(e(App), domContainer);