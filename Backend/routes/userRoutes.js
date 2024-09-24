import express from "express";
const router = express.Router();

import { getUserInfo } from "../controllers/userGetsController.js";
import { middleware } from "../middleware/middleware.js";

router.get('/user-info', middleware, getUserInfo);

export default router;
