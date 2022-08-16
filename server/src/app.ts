import express, {Application} from 'express';

import morgan from 'morgan';
import path from 'path';
import cors from 'cors'

const app: Application = express();

import authRoutes from './routes/auth';
import trailerRoutes from './routes/trailer.router';
import areaRoutes from './routes/area.router';
import attendanceRoutes from './routes/attendance.router';
import gradeRoutes from './routes/grade.router';
import scoreRoutes from './routes/score.router';
import subjectRoutes from './routes/subject.router';
import studentRoute from './routes/student.router';
import teacherRoute from './routes/teacher.router';

app.use('../uploads', express.static(path.resolve('uploads')))

//settings
app.set('port', 3000);

//middlewares
app.use(cors())
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/api/area', areaRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use('/api/grade', gradeRoutes);
app.use('/api/score', scoreRoutes);
app.use('/api/subject', subjectRoutes);
app.use('/api/student', studentRoute);
app.use('/api/teacher', teacherRoute);
app.use('/api/trailer', trailerRoutes);
app.use('/api/auth', authRoutes);

export default app;