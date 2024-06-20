import express,{Application, Express, NextFunction, Request, Response} from "express"
import userRoutes from './routes/userRouter'




const app=express()
const port:number=3000

app.use(express.json())


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
  app.use(userRoutes)


app.listen(port,()=>{
    console.log(`running on ${port}`);
    
})
export default app

