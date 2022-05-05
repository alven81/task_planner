import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App/App'

// ReactDOM.render(
//     <App />,
//   document.getElementById('todo')
// );


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);


