import {createStore, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk'
<<<<<<< HEAD
=======

>>>>>>> 7edef81ed914c39383a56a95fde07c1eccf68d34
import reducer from './reducer'
const store = createStore(reducer);
// const store = createStore(reducer,applyMiddleware(thunk));
export default store;