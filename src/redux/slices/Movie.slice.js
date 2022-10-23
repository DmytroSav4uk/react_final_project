import {movieService} from "../../Services/movie.service";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    currentPage:1,
    search: '',
    oneMovie: {}
}


const getPage = createAsyncThunk('movieSlice/getPage',

    async (currentPage, {rejectWithValue}) => {

        try {
            const {data} = await movieService.getPage(currentPage)
            return data;

        } catch (e) {
            e.rejectWithValue(e.response.data)
        }
    })


const searchMovie = createAsyncThunk('movieSlice/searchMovie',

    async (query, {rejectWithValue}) => {

    try {
        const {data} = await movieService.searchMovie(query)
        return data;

    } catch (e) {
        e.rejectWithValue(e.response.data)
    }
});

const getOneMovie = createAsyncThunk('movieSlice/getOneMovie',

    async (id,{rejectWithValue}) => {
        try {
            const {data} = await movieService.getOneMovie(id)
            return data;
        } catch (e) {
            e.rejectWithValue(e.response.data)
        }
    });

const movieSlice = createSlice({

    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder

            .addCase(getPage.fulfilled, (state, action) => {
                state.movies = action.payload
               })
            .addCase(searchMovie.fulfilled, (state, action) => {
                state.movies = action.payload
            })
            .addCase('search', (state,action) =>{
                state.search = action.text;
            })
            .addCase(getOneMovie.fulfilled, (state,action)=>{
                state.oneMovie = action.payload
                console.log(action.payload)
            })


});

const {reducer: movieReducer, actions: {}} = movieSlice;

const movieActions = {
    getPage,
    searchMovie,
    getOneMovie
}


export {
    movieActions,
    movieReducer,
    getOneMovie
}


