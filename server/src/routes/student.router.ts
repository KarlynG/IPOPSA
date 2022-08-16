import {Router} from 'express'
import {get, post, put, getOne, remove, getStudent} from '../services/student.service'
import multer from '../config/multer.config'

const router = Router();
    router.get('/', get);
    router.get('/:id', getOne);
    router.post('/', multer.single('image'), post);
    router.put('/:id', put);
    router.delete('/:id', remove);

export default router;