import express,{NextFunction, Request, Response} from "express"
import productRoute from './routes/productRoute'





const app=express()
const port:number=3001

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

  app.use(productRoute)



app.listen(port,()=>{
    console.log(`running on ${port}`);
    
})

export default app
