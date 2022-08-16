import StudentSchema from '../models/Student.model'
import { Request, Response } from 'express'
import { getNodeMajorVersion } from 'typescript';

export const get = async (req: Request, res: Response) => {
    try {
        const data = await StudentSchema.find();
        return res.status(200).json(data);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ Message: 'Error' });
    }
};

export const post = async (req: Request, res: Response) => {
    try {
        const newStudent = new StudentSchema({
            name: req.body.name,
            lastName: req.body.lastName,
            gender: req.body.gender,
            dob: req.body.dob,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            address: req.body.address,
            code: req.body.code,
            motherName: req.body.motherName,
            fatherName: req.body.fatherName,
            image: req.body.image,
            createdDate: req.body.createdDate,
            userId: req.body.userId,
        })
        newStudent.save(() => res.status(201).json({ Message: 'Student created correctly' }))
    }

    catch (err) {
        console.log(err);
        return res.status(500).json({ Message: 'Error', Error: err })
    }
};

export async function put(req: Request, res: Response): Promise<Response> {
    try{
    const { id } = req.params;
    const {name,lastName, gender, dob,email,phoneNumber,address,code, motherName, fatherName, image, createdDate, userId } = req.body;
    const updatedStudent = await StudentSchema.findByIdAndUpdate(id, {
            name,
            lastName,
            gender,
            dob,
            email,
            phoneNumber,
            address,
            code,
            motherName, 
            fatherName, 
            image,
             createdDate,
             userId
    });
    return res.json({
        message: 'Student Successfully updated'
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
        const data = await StudentSchema.findById(id);
        return res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ Message: 'Error' })
    }
};

export async function getStudent(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const data = await StudentSchema.findById(id);
    return res.json(data);
}

export const remove = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await StudentSchema.findByIdAndRemove(id);
        return res.status(200).json({ Message: 'Student removed succesfully' })
    } catch (err) {
        console.log(err);
        return res.status(500).json({ Message: 'Error', Error: err })
    }
};
