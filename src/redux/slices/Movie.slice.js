import {movieService} from "../../Services/movie.service";
import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    loading: false,
    error: null,
    currentPage:1,
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



// const getPoster = createAsyncThunk('movieSlice/getImage',
//
//     async (currentPoster, {rejectWithValue}) => {
//
//         try {
//             const {data} = await movieService.getPoster(currentPoster)
//             return data;
//
//         } catch (e) {
//             e.rejectWithValue(e.response.data)
//         }
//     })

//***************************************************

const searchMovie = createAsyncThunk('movieSlice/searchMovie',

    async (data, {rejectWithValue}) => {

    try {
        const {data} = await movieService.searchMovie(data)
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


});

const {reducer: movieReducer, actions: {}} = movieSlice;

const movieActions = {
    getPage,
  //  getPoster
    searchMovie
}


export {
    movieActions,
    movieReducer
}