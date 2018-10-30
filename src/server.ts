// src/server.ts
// Import the app object
import app from "./app";
// Define a const for the port
const PORT = 3000;
// Start the server !
app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
});