import areaSchema from '../models/Area.model';
import { Request, Response } from 'express'
import { getNodeMajorVersion } from 'typescript';

export const get = async (req: Request, res: Response) => {
    try {
        const data = await areaSchema.find();
        return res.status(200).json(data);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ Message: 'Error' });
    }
};

export const post = async (req: Request, res: Response) => {
    try {
        const newArea = new areaSchema({
            name: req.body.name,
            code : req.body.code,
        })
        newArea.save(() => res.status(201).json({ Message: 'Area created correctly' }))
    }

    catch (err) {
        console.log(err);
        return res.status(500).json({ Message: 'Error', Error: err })
    }
};

export async function put(req: Request, res: Response): Promise<Response> {
    try{
    const { id } = req.params;
    const {name,code,  } = req.body;
    const updatedArea = await areaSchema.findByIdAndUpdate(id, {
            name,
            code
    });
    return res.json({
        message: 'Area Successfully updated'
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
        const data = await areaSchema.findById(id);
        return res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ Message: 'Error' })
    }
};

export async function getArea(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const data = await areaSchema.findById(id);
    return res.json(data);
}

export const remove = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await areaSchema.findByIdAndRemove(id);
        return res.status(200).json({ Message: 'Area removed succesfully' })
    } catch (err) {
        console.log(err);
        return res.status(500).json({ Message: 'Error', Error: err })
    }
};
