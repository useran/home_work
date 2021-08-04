import React from "react";
import Main from './Main';
import { Provider } from 'react-redux';
import store from '../store';

const App = () => {
    return <Provider store={ store }>
        <Main />
    </Provider>
};

export default App;
