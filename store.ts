import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';

  function InitialReducer(state = {}, {payload, type}) {

    switch (type) {
        case 'START':
            return { ...state, session: payload }
        default:
            return state;
    }
}

const reducers = combineReducers({start: InitialReducer});

const persistConfig = {
    key: 'app',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, undefined, applyMiddleware(thunk));

const persistor = persistStore(store);

export { store, persistor };