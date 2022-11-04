const json = require('../database/fake');

module.exports = (app) => {
// Code here
    app.get('/hello', (req, res) => {
        return res.send('Hello world');
    })

    app.get('/api/fake', (req, res) => {
        try{
            return res.status(200).send(json)
        } catch(err) {
            console.error(err)
            return res.status(500).send({message: "error occured" , status: 500});
        }
    })
    app.get('/api/fake/:id', (req, res) =>{
        console.log();
        try{
            if(json.articles[req.params.id]){
                return res.status(200).send(json.articles[req.params.id])
            } throw "User not found"
        }
        catch(err){
            console.error(err)
            return res.status(500).send({message: "error occured 2" , status: 500});
        }
    })
    /*app.put('/api/fake/:id', (req, res) =>{
        try{
            let target = json.articles[req.params.id];
            if(target && req.body.name) target.name = req.body.name;
            else throw "invalide user id"
            res.status(200).send(target);
            
        }
        catch(err){
            console.error(err)
            return res.status(500).send({message: err, status: 500});
        }
    });*/
    app.put('/api/articles/:id', (req,res) => {
        try {
            if (!json.articles[req.params.id]) throw "Id not found !";
            if (!req.body) throw "body empty";
            console.log(req);
            json['articles'][req.params.id]['name'] = req.body['name'];
            
            return res.status(200).send(json.articles[req.params.id]);            
        } catch (err) {
            console.error(err)
            return res.status(500).send({message: "an error occured", status: 500}); 
        }
    })
    app.post('/api/articles', (req,res) => {
        try {
            if (!req.body) throw "body empty";
            let ret = {
                "name": req.body['name'],
                "_id": articleJson.articles.length
            }
            console.log(ret);
            articleJson['articles'].push(ret);
            return res.status(200)          
        } catch (err) {
            console.error(err)
            return res.status(500).send({message: "an error occured", status: 500}); 
        }
    })
}

// /api/user/:id