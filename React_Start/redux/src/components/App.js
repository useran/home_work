import React from "react";
import Main from './Main';
import Main2 from './Main2';
import { Provider } from 'react-redux';
import store from '../store';

const App = () => {
    return <Provider store={ store }>
        <Main />
        <Main2 />
    </Provider>
};

export default App;
