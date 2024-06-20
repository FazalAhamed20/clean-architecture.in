import { UserEntity } from "../../../../entities";
import { User } from "../../model/user";

export const userLoginRepo = async (email:string): Promise<UserEntity | null> => {
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      throw new Error("No such user");
    }
    return user as UserEntity;
  } catch (error: any) {
    console.error('Error in userLoginRepo:', error.message || error);
    return null;
  }
};
