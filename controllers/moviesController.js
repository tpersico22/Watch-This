let db = require("../database/models");
const fetch = require('node-fetch');

let moviesController = {
    home: async function (req, res) {
        let movieList = await fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=bda2379e4423a63a49dc0af78212ffab')
            .then(response => response.json())

        return res.render("index", {movieList:movieList.results, movieDetail:movieDetail, imdbDetal:imdbDetail});
                

    },
    popularToday: async function (req, res) {
        let movieList = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=bda2379e4423a63a49dc0af78212ffab')
            .then(response => response.json())
        let seriesList = await fetch('https://api.themoviedb.org/3/trending/tv/day?api_key=bda2379e4423a63a49dc0af78212ffab')
            .then(response => response.json())

        return res.render("popularToday", {movieList:movieList.results, seriesList:seriesList.results});
                

    },
    create: function(req, res){
        db.Genre.findAll()
            .then(function(genres)
                {
                   return res.render("moviesList", {genres:genres});
                })
    },
    moviePopular: async function (req, res) {
        let movieList = await fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=bda2379e4423a63a49dc0af78212ffab')
            .then(response => response.json())

        return res.render("movieList", {movieList:movieList.results});
                

    },
    news: async function (req, res) {

        const url = 'https://movies-news1.p.rapidapi.com/movies_news/recent';

        const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '21219be2b2msh68d88eb92ea9324p11ef64jsn86a9f64fc5e8',
            'X-RapidAPI-Host': 'movies-news1.p.rapidapi.com'
        }
        };

        let news = await fetch(url, options)
        .then(response => response.json())

        return res.render("news", {news: news});        

    },
    detail: async function(req, res){
        let id = req.params.id;
        
        let movieDetail = await fetch ('https://api.themoviedb.org/3/movie/'+id+'?api_key=bda2379e4423a63a49dc0af78212ffab&language=en-US')
            .then(response => response.json())

        let imdbDetail =  await fetch ('http://www.omdbapi.com/?i='+movieDetail.imdb_id+'&apikey=f14ef577')
            .then(response => response.json())

        let videoDetail = await fetch ('https://api.themoviedb.org/3/movie/'+id+'/videos?api_key=bda2379e4423a63a49dc0af78212ffab&language=en-US')
            .then(response => response.json())

        return res.render("movieDetail", {movieDetail: movieDetail, imdbDetail:imdbDetail, videoDetail:videoDetail});

    },
    detailSerie: async function(req, res){
        let idSerie = req.params.id;
        
        let serieDetail = await fetch ('https://api.themoviedb.org/3/tv/'+idSerie+'?api_key=bda2379e4423a63a49dc0af78212ffab&language=en-US')
            .then(response => response.json())

        let serieIdExternal = await fetch ('https://api.themoviedb.org/3/tv/'+idSerie+'/external_ids?api_key=bda2379e4423a63a49dc0af78212ffab&language=en-US')
            .then(response => response.json())

        let imdbDetail =  await fetch ('http://www.omdbapi.com/?i='+serieIdExternal.imdb_id+'&apikey=f14ef577')
            .then(response => response.json())

        let videoDetail = await fetch ('https://api.themoviedb.org/3/tv/'+idSerie+'/videos?api_key=bda2379e4423a63a49dc0af78212ffab&language=en-US')
            .then(response => response.json())

        return res.render("serieDetail", {serieDetail: serieDetail, imdbDetail:imdbDetail, serieIdExternal:serieIdExternal, videoDetail: videoDetail});
    


    },
    search: async function(req, res){
        let keyword = req.body.keyword;

        let resultsDetail = await fetch ('https://api.themoviedb.org/3/search/multi?api_key=bda2379e4423a63a49dc0af78212ffab&language=en-US&query='+keyword+'&page=1&include_adult=false')
        .then(response => response.json())

        return res.render("findResults", {resultsDetail:resultsDetail});
    },
    recommended: async function (req, res) {
        let movieList = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=bda2379e4423a63a49dc0af78212ffab&language=en-US&page=1')
            .then(response => response.json())
        let seriesList = await fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=bda2379e4423a63a49dc0af78212ffab&language=en-US&page=1')
            .then(response => response.json())

        return res.render("recommended", {movieList:movieList.results, seriesList:seriesList.results});
                

    }
    
}

module.exports = moviesController;