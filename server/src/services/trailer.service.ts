import trailerSchema from '../models/Trailer.model'
import { Request, Response } from 'express'
import { getNodeMajorVersion } from 'typescript';

export const get = async (req: Request, res: Response) => {
    try {
        const data = await trailerSchema.find();
        return res.status(200).json(data);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ Message: 'Error' });
    }
};

export const post = async (req: Request, res: Response) => {
    try {
        const newTrailer = new trailerSchema({
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            director: req.body.director,
            actors: req.body.actors,
            year: req.body.year,
            link: req.body.link,
            image: req.body.image,
            user: req.body.user
        })
        newTrailer.save(() => res.status(201).json({ Message: 'Trailer created correctly' }))
    }

    catch (err) {
        console.log(err);
        return res.status(500).json({ Message: 'Error', Error: err })
    }
};



export async function put(req: Request, res: Response): Promise<Response> {
    try{
    const { id } = req.params;
    const {name,description, category, director,actors,year,link,image } = req.body;
    const updatedTrailer = await trailerSchema.findByIdAndUpdate(id, {
            name,
            description,
            category,
            director,
            actors,
            year,
            link,
            image
    });
    return res.json({
        message: 'Trailer Successfully updated'
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
        const data = await trailerSchema.findById(id);
        return res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ Message: 'Error' })
    }
};

export async function getTrailer(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const data = await trailerSchema.findById(id);
    return res.json(data);
}

export const remove = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await trailerSchema.findByIdAndRemove(id);
        return res.status(200).json({ Message: 'Trailer removed succesfully' })
    } catch (err) {
        console.log(err);
        return res.status(500).json({ Message: 'Error', Error: err })
    }
};
