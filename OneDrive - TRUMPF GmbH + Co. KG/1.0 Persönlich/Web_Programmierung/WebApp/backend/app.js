const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware (z.B. für JSON-Parsen)
app.use(express.json());

// Routen
const routes = require('./routes'); // Verweise auf deine routes
app.use('/api', routes);

// Starte den Server
app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});

const logger = require('./middleware/logger');
app.use(logger);

