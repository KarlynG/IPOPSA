import  subjectSchema from '../models/Subject.model';
import { Request, Response } from 'express'
import { getNodeMajorVersion } from 'typescript';

export const get = async (req: Request, res: Response) => {
    try { 
        const data = await subjectSchema.find();
        return res.status(200).json(data);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ Message: 'Error' });
    }
};

export const post = async (req: Request, res: Response) => {
    try {
        const newSubject = new subjectSchema({
            name: req.body.name,
            code: req.body.code,
            areaId: req.body.areaId
        })
        newSubject.save(() => res.status(201).json({ Message: 'Subject created correctly' }))
    }

    catch (err) {
        console.log(err);
        return res.status(500).json({ Message: 'Error', Error: err })
    }
};


export async function put(req: Request, res: Response): Promise<Response> {
    try{
    const { id } = req.params;
    const {name,code, areaId, } = req.body;
    const updatedSubject = await subjectSchema.findByIdAndUpdate(id, {
        name,
            code,
            areaId,
    });
    return res.json({
        message: 'Subject Successfully updated'
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
        const data = await subjectSchema.findById(id);
        return res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ Message: 'Error' })
    }
};

export async function getSubject(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const data = await subjectSchema.findById(id);
    return res.json(data);
}

export const remove = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await subjectSchema.findByIdAndRemove(id);
        return res.status(200).json({ Message: 'Subject removed succesfully' })
    } catch (err) {
        console.log(err);
        return res.status(500).json({ Message: 'Error', Error: err })
    }
};
