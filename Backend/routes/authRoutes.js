import express from "express";
const router = express.Router();

import { login } from "../controllers/authLoginController.js";
import { middleware } from "../middleware/middleware.js";
import { whoAmI } from "../controllers/authWhoController.js";
import { register } from "../controllers/authRegisterController.js";

router.post('/login', middleware, login);
router.get('/who-am-i', middleware, whoAmI);

router.post('/register', middleware, register);

export default router;
