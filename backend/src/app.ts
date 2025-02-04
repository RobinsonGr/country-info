import express from 'express';
import countryRoutes from './routes/countryRoutes';

const app = express();

app.use(express.json());
app.use('/api/countries', countryRoutes);

app.use('/s', countryRoutes);




export default app;