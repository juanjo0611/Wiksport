import express from "express";
import cors from 'cors';

// Import routes

/// ...

const app = express();
app.use(express.json({extends: true}));

// Enable cors
app.use(cors());

// Routes
/// ...

app.listen(8080);