import express,{ NextFunction, Request, Response} from "express"
import {dbConnection} from './database'
import router from "./routes/Route"
import {sendHello} from '../src/kafka/producer/hello'





const app=express()
const port:number=3004

app.use(express.json())
dbConnection()
sendHello()


app.use((
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    console.error(err);
      const errorResponse = {
      errors: [{ message: 'Something went wrong' }],
    };
  
    return res.status(500).json(errorResponse);
  })
app.use(router) 


app.listen(port,()=>{
    console.log(`running on ${port}`);
    
})

