import React from 'react';
import { render } from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import headerReducer from './modules/header/reducerFooter';
import footerReducer from './modules/footer/reducerHeader';
import rootSaga from './modules/saga';
import Header from './modules/footer/header';

const reducer = combineReducers({
    headerReducer,
    footerReducer
});
const store = createStore(reducer,
    applyMiddleware(SagaMiddleware));
SagaMiddleware.run(rootSaga);

class Main extends React.Component {
    render() {
        return (
            <div Provider={store}>
                <Header />
            </div>
        )
    }
}

render(<Main />, document.getElementById('root'));
