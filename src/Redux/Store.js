import {createStore,applyMiddleware} from 'redux';
import reducer from './Reducer';
import {persistStore,persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const persistConfig={
    key:"root",
    storage
}
const persistedReducer=persistReducer(persistConfig,reducer)
const store=createStore(persistedReducer,applyMiddleware(thunk));
const persistor=persistStore(store);

export {
    store,persistor
}