import { NextFunction, Request, Response } from "express";
import { userCreatedProducer } from "../../../kafka/producer/userProducer";


export default (dependencies: any)  => {
    const {userUseCases:{addUser}} = dependencies;

    const addUserController = async (req: Request, res: Response, next: NextFunction) => {

        try {
            const data = req.body;
            console.log(data);
            
            const addedUser = await addUser(dependencies).interactor(data);
            await userCreatedProducer(addedUser)

          
            res.status(201).json({success: true , data: addedUser, message: "user added successfully"});
        } catch (error) {
           next(error);
        }
    }
    return addUserController;
}