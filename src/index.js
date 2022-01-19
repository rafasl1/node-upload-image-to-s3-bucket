import express from 'express';
import routes from './routes';
import fileUpload from 'express-fileupload';
import 'dotenv/config'

const app = express();

app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`> Server listening on port ${port}`);
});