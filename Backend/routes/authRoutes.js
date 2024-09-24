import express from "express";
const router = express.Router();

import { login } from "../controllers/authLoginController.js";
import { middleware } from "../middleware/middleware.js";

router.post('/login', middleware, login);

export default router;
