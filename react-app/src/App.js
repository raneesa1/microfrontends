// React App.js
import React, { useState } from 'react';
import eventBus from '../../shared/eventBus';
import Home from './home';
import Login from './Login';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import store from '../../shared/store';

const App = () => {

    return (
        // <Provider store={store}>
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
        // </Provider>
    );
};

export default App;
