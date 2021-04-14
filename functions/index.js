const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51IfxurGHWb7p2gHULTHkSDRpTYRy0K7sueWyjJU4bsk9AAneHvdBZvOry8BJuhblQLG7qEUNGGmJanl1DUWSD3va005uvv8yqh')

//API

//API config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get('/', (request, response)=> response.status(200).send('hello world'))

//Listen command