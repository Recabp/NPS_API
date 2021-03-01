import 'reflect-metadata'
import express from 'express'
import "./database"

const app = express();


app.listen(6666, () => console.log("Server Started on Port 6666"))


