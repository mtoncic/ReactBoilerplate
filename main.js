import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/button.component/button.component'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { counter: 0, clicked: false };

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    this.setState({counter: this.state.counter + 1});
  }

  render() {
    return <div>
         <div>Counter: {this.state.counter}</div>
         <Button handleButtonClick={this.handleButtonClick}/>
      </div>;
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(<App/>, domContainer);