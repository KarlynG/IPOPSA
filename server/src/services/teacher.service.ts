import TeacherSchema from '../models/Teacher.model'
import { Request, Response } from 'express'
import { getNodeMajorVersion } from 'typescript';

export const get = async (req: Request, res: Response) => {
    try {
        const data = await TeacherSchema.find();
        return res.status(200).json(data);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ Message: 'Error' });
    }
};

export const post = async (req: Request, res: Response) => {
    try {
        const newTeacher = new TeacherSchema({
            name: req.body.name,
            lastName: req.body.lastName,
            gender: req.body.gender,
            dob: req.body.dob,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            address: req.body.address,
            code: req.body.code,
            cedula: req.body.cedula,
            image: req.body.image,
            createdDate: req.body.createdDate,
            userId: req.body.userId,
        })
        newTeacher.save(() => res.status(201).json({ Message: 'Teacher created correctly' }))
    }

    catch (err) {
        console.log(err);
        return res.status(500).json({ Message: 'Error', Error: err })
    }
};

export async function put(req: Request, res: Response): Promise<Response> {
    try{
    const { id } = req.params;
    const {name,lastName, gender, dob,email,phoneNumber,address,code, cedula, image, createdDate, userId } = req.body;
    const updatedTeacher = await TeacherSchema.findByIdAndUpdate(id, {
            name,
            lastName,
            gender,
            dob,
            email,
            phoneNumber,
            address,
            code,
            cedula, 
            image,
             createdDate,
             userId
    });
    return res.json({
        message: 'Teacher Successfully updated'
    });
}
    catch (err) {
        console.log(err);
        return res.status(500).json({ Message: 'Error' })
    }
};

export const getOne = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data = await TeacherSchema.findById(id);
        return res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ Message: 'Error' })
    }
};

export async function getTeacher(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const data = await TeacherSchema.findById(id);
    return res.json(data);
}

export const remove = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await TeacherSchema.findByIdAndRemove(id);
        return res.status(200).json({ Message: 'Teacher removed succesfully' })
    } catch (err) {
        console.log(err);
        return res.status(500).json({ Message: 'Error', Error: err })
    }
};
