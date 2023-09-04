import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProviderContext from './tutorial/10-useReducer/starter/store/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ProviderContext>
        <App />
    </ProviderContext>
);
