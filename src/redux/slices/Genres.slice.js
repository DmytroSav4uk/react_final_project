import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genreService} from "../../Services/genre.service";
import {movieService} from "../../Services/movie.service";


const initialState = {
    genres: []
}

const getAllGenres = createAsyncThunk('genreSlice/getAllGenres',

    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getAll()
            return data;
        } catch (e) {
            e.rejectWithValue(e.response.data)
        }
    })


const searchMovieByGenreId = createAsyncThunk('genreSlice/searchMovieByGenreId',

    async (id, {rejectWithValue}) => {

        try {
            const {data} = await genreService.getMoviesByGenreId(id)
            return data;

        } catch (e) {
            e.rejectWithValue(e.response.data)
        }
    });



const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAllGenres.fulfilled, (state, action) => {
                state.genres = action.payload;
            })
            .addCase(searchMovieByGenreId.fulfilled, (state, action)=>{
                state.name = action.payload;
                console.log(JSON.stringify(state.name))
            })
});

const {reducer: genresReducer, actions: {}} = genresSlice;

const genresActions = {
    getAllGenres,
    searchMovieByGenreId
}

export {
    genresActions,
    genresReducer
}