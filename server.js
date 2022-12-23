import express from 'express';
import routes from './routes.js';
import db from './src/database.js';

const app = express();

app.use(express.json());
app.use(routes);

db.sync(() => console.log(`DataBase connected: ${process.eventNames.DB_NAME}`));

app.listen(3000, () => console.log("Servidor Funcionando!"))