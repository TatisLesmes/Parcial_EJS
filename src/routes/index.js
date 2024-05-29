const router = require('express').Router()
const fs = require('fs')
const path = require('path')


//leer archivo data.json
const json_data = fs.readFileSync('src/data.json', 'utf-8')
let data = JSON.parse(json_data)
console.log(data.length)


router.get('/', (req, res) => {
    res.render('index.ejs', {
        data
})
})




router.get('/data.json', (req, res) => {
    res.json(data);
});






//Otra ruta que reciba y permita consultar por el nombre del personaje

module.exports = router