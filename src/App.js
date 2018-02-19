import React from 'react';
import ReactDOM from 'react-dom';
import FightersContainer from './containers/FightersContainer'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
