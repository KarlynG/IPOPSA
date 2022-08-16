import { Request, Response } from "express";
import User, { IUser } from "../models/User.model";
import jwt from "jsonwebtoken";

export const signup = async (req: Request, res: Response) => {
  const user: IUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    rol: req.body.rol,
  });

  user.password = await user.encryptPassword(user.password);

  const savedUser = await user.save();

  //token
  const token: string = jwt.sign(
    { _id: savedUser._id },
    process.env.TOKEN_SECRET || "atoken"
  );

  res.header("auth-token", token).json(savedUser);
 // res.header("auth-token", token).json(token);
};

export const signin = async (req: Request, res: Response) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).json("Email or password is wrong");

  const isCorrectPassword: boolean = await user.validatePassword(
    req.body.password
  );
  if (!isCorrectPassword) return res.status(400).json("Invalid Password");

  const token: string = jwt.sign(
    { _id: user._id },
    process.env.TOKEN_SECRET || "atoken",
    {
      expiresIn: '15s'  
    }
  );
  res.header("auth-token", token).json(token);
  
};

export const profile = async (req: Request, res: Response) => {
  const user = await User.findById(req.userId, { password: 0 });
  if (!user) return res.status(404).json("Not User found");
  res.json(user);
};

export const getRol = async (req: Request, res: Response) => {
  try{
   const data = await User.findOne({rol: req.body.rol});
   return res.status(200).json(data);
  }catch(err){
      console.log(err);
      return res.status(500).json({Message: 'Error'});
  }
 };
