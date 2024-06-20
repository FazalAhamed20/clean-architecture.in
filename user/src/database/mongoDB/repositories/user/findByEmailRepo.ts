import { UserEntity } from "../../../../entities";
import { User } from "../../model/user";

export async function findByEmailRepo(email: string): Promise<UserEntity | null> {
    try {
        const user = await User.findOne({ email });
        return user;
        
    } catch (error) {
        throw new Error("error");
        
        
        
    }

}