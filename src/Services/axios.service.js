import axios from "axios";




const axiosInstance = axios.create({

    baseURL :"https://api.themoviedb.org/3/",
    headers:{
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDJiMGE2ZDA1NjU1NjQ4ODc0MWQ1ODA1NTQyZGMyMCIsInN1YiI6IjYzNGMyY2FlMzg5ZGExMDA3YzY3ZjNkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c1w0LeOj0IumSQOQ1ghNx4uL9pdtWcvCapLGtkWU2TU'
    }

})





export {axiosInstance};