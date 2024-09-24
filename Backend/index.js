import express from "express";
import cors from 'cors';

// Import routes
import authRoutes from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js'

const app = express();
app.use(express.json({extends: true}));

// Enable cors
app.use(cors());


// Routes
app.use('/auth', authRoutes);
app.use('/user', userRoutes);

app.listen(8080);