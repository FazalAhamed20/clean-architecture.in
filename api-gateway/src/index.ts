import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import proxy from 'express-http-proxy'
import morgan from "morgan"


const app = express();
const port = 8000;

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/user', proxy('http://localhost:3000/'));
app.use('/product',proxy("http://localhost:3001/"));
app.use("/admin",proxy("http://localhost:3004/"));
app.use('/cart',proxy("http://localhost:3002/"))

app.listen(port, () => {
    console.log('Gateway running successfully');
});