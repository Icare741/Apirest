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
    app.put('/api/fake/:id', (req, res) =>{
        try{
            let target = json.users[req.params.id];
            if(target && req.body.name) target.name = req.body.name;
            else throw "invalide user id"
            res.status(200).send(target);
            
        }
        catch(err){
            console.error(err)
            return res.status(500).send({message: err, status: 500});
        }
    });
}

// /api/user/:id