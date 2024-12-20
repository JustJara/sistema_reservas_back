import express from 'express';
import cors from 'cors';

import userRoutes from './routes/user.routes.js'
import indexRoutes from './routes/index.routes.js'
import reservasRoutes from './routes/reservas.routes.js'


const app = express();

app.use(cors({
    origin: "*"
}));

app.use(express.json());

app.use(indexRoutes);
// al ponerle el api por detrás la ruta se actualiza a /api + /employees
app.use('/api', userRoutes);
app.use('/api', reservasRoutes);

app.use((req, res, next)=> {
    res.status(404).json({
        message : 'Endpoint not found'
    })
})

export default app;