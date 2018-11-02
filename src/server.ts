// src/server.ts

const express = require('express');

// app.use(express.static(__dirname + '/dist'));
// Import the app object
import app from "./app";
// Define a const for the port
const localPORT = 3000;

// Start the server !
app.listen(process.env.PORT || localPORT, () => {
    console.log('Express server listening on port ' + process.env.PORT);
});