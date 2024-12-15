import express from 'express';
import dotenv from 'dotenv';
import userRoute from './src/routes/userRout'
dotenv.config();

const app = express();
const PORT = process.env.PORT;


app.use('/users', userRoute)

app.listen(PORT, () => console.log(`Serving on port ${PORT}`));