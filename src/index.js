import React from 'react';
// import ReactDOM from 'react-dom/client';
import App from './App';
import {createRoot} from "react-dom/client";

const root = createRoot(document.getElementById('root'));
root.render(
    // // <div>Программа работает
    // //   <button>Кнопка</button>
    // // </div>
    // React.createElement('button', {
    //   onClick: () => console.log('click')
    // }, 'Нажми на меня')
    <App />
);
