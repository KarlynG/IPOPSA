import  userSchema from '../models/User.model';
import {Request, Response} from 'express'
import { getNodeMajorVersion } from 'typescript';

export const get = async (req: Request, res: Response) => {
   try{
    const data = await userSchema.find();
    return res.status(200).json(data);
   }catch(err){
       console.log(err);
       return res.status(500).json({Message: 'Error'});
   }
  };

  export const post = async (req: Request, res: Response) => {
    try{
        const newUser = new userSchema({
        username: req.body.username,
        email: req.body.email,
        password: req.body.pssword,
        rol: req.body.rol
        })
        newUser.save(() => res.status(200).json({Message: 'User created correctly'}))
    }

    catch(err){
        console.log(err);
        return res.status(500).json({Message: 'Error', Error: err})
    }
   };
   
   export const put = async (req:Request, res:Response)=> {
        try{
            const {id} = req.params;

            const newUser = {
                username: req.body.username,
                email: req.body.email,
                password: req.body.pssword,
                rol: req.body.rol
            }
            await userSchema.findByIdAndUpdate(id, {set: newUser}, {new:true});
            return res.status(200).json({Message: 'User updated succesfully'});
        }
        catch(err){
            console.log(err);
            return res.status(500).json({Message: 'Error', Error : err})
        }
    };

    export const getOne = async (req:Request, res:Response)=>{
        try{
            const{id} = req.params;
            const data = await userSchema.findById(id);
            return res.status(200).json(data);
        }catch(err){
            console.log(err);
            res.status(500).json({Message: 'Error'})
        }
    };

    export const remove = async (req:Request, res:Response)=>{
            try{
                const{id}= req.params;
                await userSchema.findByIdAndRemove(id);
                return res.status(200).json({Message: 'User removed succesfully'})
            }catch(err){
                console.log(err);
                return res.status(500).json({Message: 'Error' , Error: err})
            }
        };


// import userSchema from '../models/User.model'
// import{Request, Response} from 'express'
// import { getNodeMajorVersion } from 'typescript';


// export const methodsUser ={
//     async get (req:Request, res:Response){
//         console.log('get user')
//         try{
//             const data = await userSchema.find();
//             return res.status(200).json(data);
//         }catch(err){
//             console.log(err);
//             return res.status(500).json({Message: 'Error', Error: err})
//         }
//     },
//     async post(req:Request, res:Response){
//         try{
//             const newUser = new userSchema({
//                 username: req.body.username,
//                 email: req.body.email,
//                 password: req.body.password,
//                 rol: req.body.rol
//             })
//             newUser.save(() => res.status(200).json({Message: 'User created correctly'}))
//         }

//         catch(err){
//             console.log(err);
//             return res.status(500).json({Message: 'Error', Error: err})
//         }
//     },

//     async put(req:Request, res:Response){
//         try{
//             const {id} = req.params;

//             const newUser = {
//                 username: req.body.username,
//                 email: req.body.email,
//                 password: req.body.password,
//                 rol: req.body.rol
//             }
//             await userSchema.findByIdAndUpdate(id, {set: newUser}, {new:true});
//             return res.status(200).json({Message: 'User updated succesfully'});
//         }
//         catch(err){
//             console.log(err);
//             return res.status(500).json({Message: 'Error', Error : err})
//         }
//     },

//     async getOne(req:Request, res:Response){
//         try{
//             const{id} = req.params;
//             const data = await userSchema.findById(id);
//             return res.status(200).json(data);
//         }catch(err){
//             console.log(err);
//             res.status(500).json({Message: 'Error'})
//         }
//     },
//     async deleteOne(req:Request, res:Response){
//         try{
//             const{id}= req.params;
//             await userSchema.findByIdAndRemove(id);
//             return res.status(200).json({Message: 'User removed succesfully'})
//         }catch(err){
//             console.log(err);
//             return res.status(500).json({Message: 'Error' , Error: err})
//         }
//     }
// }



