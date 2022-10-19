import {movieService} from "../../Services/movie.service";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    loading: false,
    error: null,
    currentPage:1,
    search: '',
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





const movieSlice = createSlice({

    name: 'movieSlice',
    initialState,
    reducers: {


    },
    extraReducers: builder =>
        builder

            .addCase(getPage.fulfilled, (state, action) => {
                state.movies = action.payload
                state.loading = false
            })
            .addCase(getPage.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(getPage.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(searchMovie.fulfilled, (state, action) => {
                state.movies = action.payload
                state.loading = false
            })
            .addCase('search', (state,action) =>{
                state.search = action.text;
            })


});

const {reducer: movieReducer, actions: {}} = movieSlice;

const movieActions = {
    getPage,
    searchMovie
}


export {
    movieActions,
    movieReducer
}