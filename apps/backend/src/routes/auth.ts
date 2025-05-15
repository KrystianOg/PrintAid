import { Router, Request, Response, NextFunction } from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import {
  loginSchema,
  registerSchema,
  validate,
} from "../middlewares/validation.js";

const router = Router();

// POST /api/auth/register
router.post("/register", validate(registerSchema), async (req, res, next) => {
  try {
    const result = await registerUser(req.body);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
});

// POST /api/auth/login
router.post(
  "/login",
  validate(loginSchema),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = await loginUser(req.body);
      res.status(200).json({ token });
    } catch (err) {
      next(err);
    }
  },
);

export default router;
