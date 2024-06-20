import express,{NextFunction, Request, Response} from "express"
import cartRouter from "./routes/cartRoutes"
import { dbConnection } from "./database/intex"


const app=express()
const port:number=3002

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
app.use(cartRouter)



app.listen(port,()=>{
    console.log(`running on ${port}`);
    
})

