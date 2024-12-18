import Express from 'express';
import indexRoute from './routes/index';

const app = Express();

app.use(Express.json());

app.use('/', indexRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
