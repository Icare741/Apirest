const { request } = require("express");

function handleClick(route) {
// Code here
    let url = "http://localhost:3000/" + route;
    let el = document.getElementById("api-rawRes");

    axios.get(url).then((res) => {
        el.innerHTML = JSON.stringify(res.data);
    }).catch((err) => {
        console.error(err.message);
        el.innerHTML = err.message;
    })
}

function handleClickPut(route) {
    let url = "http://localhost:3000/" + route;
    let el = document.getElementById("api-rawRes");
    let name = document.getElementById("name").values;
    let body = {"name":name};
    let config = {
        headers: {
            'Content-Type':'application.json'
        }
    }
    axios.put(url, body,config).then((res) =>{
        el.innerHTML = JSON.stringify(res.data);
    }).catch((err) =>{
        console.error(err.message);
        el.innerHTML = err.message;
    })
}

/*function getDate(route){

    let url = "http://localhost:3000/" + route;
    return new Promise((resolve, reject) => {
        axios.get(url).then((res) => {
            return resolve(res.data);
        })
    }).catch((err) => {
        return reject(err)
    });
   
}
function handleClick(route, request){
    switch (request) {
        case 'PUT':
            putData(route).then((data) =>{
                printData(data);
            }).catch((err) => {
                handleError(err);
            })
            break;
        case 'GET':
            getData(route).then((data) => {
                printData(data);
            }).catch((err) => {
                handleError(err);
            });
            break;
    }   
}
function printDate(){
    //el innerHtml stringify
    //error
}
function handleError(err){
    console.error(err);
    printData(err.message)
}*/