import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import '../bootstrap.min.css';
import 'normalize.css';


function render() {
  ReactDOM.render(<App />, document.getElementById('app'));
}

render()

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render()
  })
}

