import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./slices/Movie.slice";


const rootReducer = combineReducers({
    movieReducer
});

const setupStore = () => configureStore({reducer: rootReducer});
const store = setupStore();

function storeSetSearch(text) {
    store.dispatch({
        type: 'search',
        text
    });
}

export {
    store,
    storeSetSearch,
    setupStore
}
