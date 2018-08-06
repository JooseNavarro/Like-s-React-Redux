import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './redux/reducers/index';
import LikeContainer from "./components/home/container/home.container";

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <LikeContainer
            store={store}
        />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
