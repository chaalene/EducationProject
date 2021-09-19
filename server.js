//j'ai importé l'app from backend app
const app = require('./backend/app');

//lancer serveur w n5aliha a l'ecoute 3al port 3000
app.listen(3000, () => {
    console.log('App listening on port 3000')
});