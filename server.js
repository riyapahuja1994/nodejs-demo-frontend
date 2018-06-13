//Install express server
const express = require('express');
// const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('/dist/ang6-heroku-frontend'));
console.log(__dirname);

// app.get('/*all', function(req,res) {
    
// res.sendFile(path.join('/dist/ang6-heroku-frontend/index.html'));
// console.log("Path"+path);
// });

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);