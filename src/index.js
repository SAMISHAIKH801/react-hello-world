import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import  './style.css'

function Hi() {
  return <div>Hello World!
    <li>1.sami</li>
    <li>2.sami</li>
    <li>3.sami</li>
    <li>4.sami</li>
    <div>14
      <img width={createContext} src="" alt="" />
    </div>
  </div>;
}

ReactDOM.render(<Hi/>, document.querySelector('#root'));