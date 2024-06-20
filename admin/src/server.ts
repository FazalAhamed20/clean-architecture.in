import express,{Application, NextFunction, Request, Response} from "express"
import {dbConnection} from './database'
import router from "./routes/Route"





const app=express()
const port:number=3004

app.use(express.json())
dbConnection()


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

