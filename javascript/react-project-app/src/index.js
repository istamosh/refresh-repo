import React from 'react';
import ReactDOM from 'react-dom';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// First initialization
// ReactDOM.render(
//   <div>
//     <h1>Hello World</h1>
//     <p>This is React paragraph!</p>
//   </div>
//   , document.getElementById('root')
// )

// Using unordered list from array, boiler plate
const lists = ['4 Eggs', '2 Cooking Oils', '1 Whole Chicken', '500g Chicken Nuggets'];
const listRender = lists.map(function(elements) {
  return <li> {elements} </li>;
})
ReactDOM.render(
  <div>
    <h4>Shopping List:</h4>
    <ul>
      {listRender}
    </ul>
  </div>
  , document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
