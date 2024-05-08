const NewsService = require('../services/NewsServices');

module.exports = {
    searchAll: async (rec, res)=>{
        let json = {error:'', result:[]};
        let news = await NewsService.searchAll();
        for (let i in news){
            json.result.push({
                id: news[i].id,
                author: news[i].author,
                date: news[i].date,
                title: news[i].title,
                image: news[i].image
            });
        }
        res.json(json);
    },

    searchAllReverse: async (rec, res)=>{
        let json = {error:'', result:[]};
        let news = await NewsService.searchAllReverse();
        for (let i in news){
            json.result.push({
                id: news[i].id,
                author: news[i].author,
                date: news[i].date,
                title: news[i].title,
                image: news[i].image
            });
        }
        res.json(json);
    },

    searchNew: async (rec, res)=>{
        let json = {error:'', result:{}};

        let id = rec.params.id;
        let New = await NewsService.searchNew(id);

        if(New){
            json.result = New;
        }
        res.json(json);
    }

}