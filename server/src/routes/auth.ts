import { Router } from "express";
const router: Router = Router();
import { TokenValidation } from "../lib/verifyToken";

import { signin, signup, profile } from "../services/auth.service";

router.post("/signup", signup);
router.post("/signin", signin);

router.get("/profile", TokenValidation, profile);

export default router;
