import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./slices/Movie.slice";
import {genresReducer} from "./slices/Genres.slice";


const rootReducer = combineReducers({
    movieReducer, genresReducer
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