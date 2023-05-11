import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../error";
import { TLoginRequest } from "../../interfaces/login.interfaces";
import * as bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const loginUsersService = async (payload: TLoginRequest) => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: {
      email: payload.email,
    },
  });

  if (!user) {
    throw new AppError("Invalid credentials", 401);
  }

  const comparePassword = await bcrypt.compare(
    payload.password,
    user?.password
  );

  if (!comparePassword) {
    throw new AppError("Invalid credentials", 401);
  }

  const token: string = jwt.sign(
    {
      admin: user?.admin,
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: process.env.EXPIRES_IN,
      subject: user?.id.toString(),
    }
  );

  return { token: token };
};
export { loginUsersService };
