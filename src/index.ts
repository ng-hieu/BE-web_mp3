import express from 'express';
import bodyParser from "body-parser";
import cors from 'cors';
import router from './router/router';
import { AppDataSource } from './data-source';

const app = express();
const PORT = 8000;

AppDataSource.initialize().then(() => {
    console.log('Connect Database Success')
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('', router)
app.listen(PORT, () => {
    console.log(`Server ${PORT} is running`)
})
