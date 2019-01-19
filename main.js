import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/counter.component/counter.component'

class App extends React.Component {

  render() {
    return <Counter />;
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(<App/>, domContainer);