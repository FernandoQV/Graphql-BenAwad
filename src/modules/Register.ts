import { User } from "../entity/User";
import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import bcrypt from "bcryptjs";
import { RegisterInput } from "./user/register/RegisterInput";

@Resolver(User)
export class RegisterResolver {
  @Query(() => String)
  async hello() {
    return `Hello world`;
  }
  @FieldResolver()
  async name(@Root() parent:User) {
    return `${parent.firstName} ${parent.lastName}`
  }
   @Mutation(() => User)
  async registerUser(
   @Arg('data'){firstName,lastName,email,password}:RegisterInput
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    }).save();
    return user;
  } 
}
