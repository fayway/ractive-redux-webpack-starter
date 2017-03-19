import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore, autoRehydrate} from 'redux-persist';
import {asyncSessionStorage} from 'redux-persist/storages';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
//
import {rootReducer}  from './rootReducer';
//
const extensions = [thunk];
let composeEnhancers = compose;

if (__IS_DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  extensions.push(createLogger());
}
//
const store = createStore(
  rootReducer,
  undefined,
  composeEnhancers(
    applyMiddleware(...extensions),
    autoRehydrate()
  )
);
//
if (window && window.sessionStorage) persistStore(store, {storage: asyncSessionStorage});
//
export default store;