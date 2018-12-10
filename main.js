import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { text: "Hello, React!" };
  }

  render() {
    return <div>
      {this.state.text}
      </div>;
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(<App/>, domContainer);