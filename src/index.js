import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import '../bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/fontawesome';


function render() {
  ReactDOM.render(<App />, document.getElementById('app'));
}

render()

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render()
  })
}

