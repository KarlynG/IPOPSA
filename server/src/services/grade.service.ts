import gradeSchema from '../models/Grade.model';
import { Request, Response } from 'express'
import { getNodeMajorVersion } from 'typescript';

export const get = async (req: Request, res: Response) => {
    try {
        const data = await gradeSchema.find();
        return res.status(200).json(data);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ Message: 'Error' });
    }
};

export const post = async (req: Request, res: Response) => {
    try {
        const newGrade = new gradeSchema({
            grade: req.body.grade,
            code : req.body.code,
        })
        newGrade.save(() => res.status(201).json({ Message: 'Grade created correctly' }))
    }

    catch (err) {
        console.log(err);
        return res.status(500).json({ Message: 'Error', Error: err })
    }
};

export async function put(req: Request, res: Response): Promise<Response> {
    try{
    const { id } = req.params;
    const {grade,code} = req.body;
    const updatedGrade = await gradeSchema.findByIdAndUpdate(id, {
            grade,
            code
    });
    return res.json({
        message: 'Grade Successfully updated'
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
        const data = await gradeSchema.findById(id);
        return res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ Message: 'Error' })
    }
};

export async function getGrade(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const data = await gradeSchema.findById(id);
    return res.json(data);
}

export const remove = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await gradeSchema.findByIdAndRemove(id);
        return res.status(200).json({ Message: 'Grade removed succesfully' })
    } catch (err) {
        console.log(err);
        return res.status(500).json({ Message: 'Error', Error: err })
    }
};
