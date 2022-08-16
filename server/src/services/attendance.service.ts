import  attendanceSchema from '../models/Attendance.model';
import { Request, Response } from 'express'
import { getNodeMajorVersion } from 'typescript';

export const get = async (req: Request, res: Response) => {
    try { 
        const data = await attendanceSchema.find();
        return res.status(200).json(data);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ Message: 'Error' });
    }
};

export const post = async (req: Request, res: Response) => {
    try {
        const newAttendance = new attendanceSchema({
            status: req.body.status,
            createdDate: req.body.createdDate,
            studentId: req.body.studentId,
            teacherId: req.body.teacherId,
            userId: req.body.userId
        })
        newAttendance.save(() => res.status(201).json({ Message: 'Attendance created correctly' }))
    }

    catch (err) {
        console.log(err);
        return res.status(500).json({ Message: 'Error', Error: err })
    }
};

export async function put(req: Request, res: Response): Promise<Response> {
    try{
    const { id } = req.params;
    const {status,createdDate, studentId, teacherId, userId} = req.body;
    const updatedAttendance = await attendanceSchema.findByIdAndUpdate(id, {
            status,
            createdDate,
            studentId,
            teacherId,
            userId
    });
    return res.json({
        message: 'Attendance Successfully updated'
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
        const data = await attendanceSchema.findById(id);
        return res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ Message: 'Error' })
    }
};

export async function getAttendance(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const data = await attendanceSchema.findById(id);
    return res.json(data);
}

export const remove = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await attendanceSchema.findByIdAndRemove(id);
        return res.status(200).json({ Message: 'Attendance removed succesfully' })
    } catch (err) {
        console.log(err);
        return res.status(500).json({ Message: 'Error', Error: err })
    }
};
