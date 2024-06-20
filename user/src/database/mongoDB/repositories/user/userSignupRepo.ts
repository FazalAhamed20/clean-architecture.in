import {User} from '../../model/user'
import { UserEntity } from '../../../../entities'

export const userSignupRepo = async (credentials: UserEntity):Promise<UserEntity | null> => {
    try {
        const userData=await User.create(credentials)
        return userData as UserEntity
        
    } catch (error:any) {
        throw new Error(error?.message);
        
        
    }
    
}