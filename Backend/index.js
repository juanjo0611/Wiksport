import express from "express";
import cors from 'cors';

// Import routes
import authRoutes from './routes/authRoutes.js'

const app = express();
app.use(express.json({extends: true}));

// Enable cors
app.use(cors());


// Routes
app.use('/auth', authRoutes);

app.listen(8080);