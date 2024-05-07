const NewsService = require('../services/NewsServices');

module.exports = {
    searchAll: async (rec, res)=>{
        let json = {error:'', result:[]};

        let news = await NewsService.searchAll();

        for (let i in news){
            json.result.push({
                author: news[i].author,
                date: news[i].date,
                title: news[i].title,
                image: news[i].image
            });
        }
        res.json(json);
    }
}