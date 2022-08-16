import  scoreSchema from '../models/Score.model';
import { Request, Response } from 'express'
import { getNodeMajorVersion } from 'typescript';

export const get = async (req: Request, res: Response) => {
    try { 
        const data = await scoreSchema.find();
        return res.status(200).json(data);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ Message: 'Error' });
    }
};

export const post = async (req: Request, res: Response) => {
    try {
        const newScore = new scoreSchema({
            score: req.body.score,
            createdDate: req.body.createdDate,
            studentId: req.body.studentId,
            teacherId: req.body.teacherId
        })
        newScore.save(() => res.status(201).json({ Message: 'Score created correctly' }))
    }

    catch (err) {
        console.log(err);
        return res.status(500).json({ Message: 'Error', Error: err })
    }
};


export async function put(req: Request, res: Response): Promise<Response> {
    try{
    const { id } = req.params;
    const {score,createdDate, studentId, teacherId} = req.body;
    const updatedScore = await scoreSchema.findByIdAndUpdate(id, {
            score,
            createdDate,
            studentId,
            teacherId
    });
    return res.json({
        message: 'Score Successfully updated'
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
        const data = await scoreSchema.findById(id);
        return res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ Message: 'Error' })
    }
};

export async function getScore(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const data = await scoreSchema.findById(id);
    return res.json(data);
}

export const remove = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await scoreSchema.findByIdAndRemove(id);
        return res.status(200).json({ Message: 'Score removed succesfully' })
    } catch (err) {
        console.log(err);
        return res.status(500).json({ Message: 'Error', Error: err })
    }
};
