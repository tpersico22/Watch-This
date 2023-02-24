let db = require("../database/models");
const fetch = require('node-fetch');

let homeController = {
    home: async function (req, res) {
        let movieList = await fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=bda2379e4423a63a49dc0af78212ffab')
            .then(response => response.json())
        let seriesList = await fetch('https://api.themoviedb.org/3/trending/tv/week?api_key=bda2379e4423a63a49dc0af78212ffab')
            .then(response => response.json())

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

        return res.render("index", {movieList:movieList.results, seriesList:seriesList.results, news:news});
                

    },
    about: function(req, res){
        return res.render("about");
    }
    
}

module.exports = homeController;