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



router.get('/filtro', (req, res) => {
    res.render('filtro.ejs', { data });
});


router.get('/data.json', (req, res) => {
    res.json(data);
});



//filtro
router.post('/', (req, res) => {
    const { homeworld, species } = req.body;

    // Aplicar el filtro a tus datos aquí
    const filteredData = data.filter(item => {
        return (homeworld === "" || item.homeworld === homeworld) &&
            (species === "" || item.species === species);
    });


    res.json(filteredData);
});


// Ruta para manejar la búsqueda por nombre de personaje
router.post('/', (req, res) => {
    const characterName = req.body.characterName.toLowerCase().trim();

    const character = data.find(item=> character.name.toLowerCase() === characterName);
    if (character) {
        res.json(character);
    } else {
        res.status(404).json({ error: 'Personaje no encontrado' });
    }
});






//Otra ruta que reciba y permita consultar por el nombre del personaje

module.exports = router