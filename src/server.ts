import 'reflect-metadata'
import express from 'express'
import "./database"
import router from './database/routes';

const app = express();

app.use(express.json);

app.use(router);


app.listen(6666, () => console.log("Server Started on Port 6666"))


