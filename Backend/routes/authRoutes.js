import express from "express";
const router = express.Router();

import { login } from "../controllers/authLoginController.js";

router.get('/login', login);

export default router;
