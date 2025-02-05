import express from 'express';
import countryRoutes from './routes/countryRoutes';
import cors from 'cors';


const app = express();

app.use(cors());

app.use(express.json());
app.use('/api/countries', countryRoutes);

export default app;