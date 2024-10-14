import express from 'express';
import userRoutes from './routes/user.routes.js'
import indexRoutes from './routes/index.routes.js'

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.json());

app.use(indexRoutes);
// al ponerle el api por detrás la ruta se actualiza a /api + /employees
app.use('/api', userRoutes);

app.use((req, res, next)=> {
    res.status(404).json({
        message : 'Endpoint not found'
    })
})

export default app;