import { UserEntity } from "../../../../entities";
import { User } from "../../models/user";

export const addUser = async(data: UserEntity): Promise<UserEntity | null> => {
    try {
        const user = await User.create(data)
        return  user as UserEntity;
    } catch (error: any) {
        throw new Error(error);
    }
}