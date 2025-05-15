import { Router, Request, Response, NextFunction } from "express";
import {
  getCurrentUser,
  listUsers,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";
import { authenticate, authorizeAdmin } from "../middlewares/auth.js";
import { updateUserSchema, validate } from "../middlewares/validation.js";

const router = Router();

// GET /api/users/me
router.get(
  "/me",
  authenticate,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.user?.id;

      if (id === undefined) {
        throw new Error();
      }

      const user = await getCurrentUser(id);
      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  },
);

// GET /api/users (admin only)
router.get(
  "/",
  authenticate,
  authorizeAdmin,
  async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await listUsers();
      res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  },
);

// PATCH /api/users/:id (admin only)
router.patch(
  "/:id",
  authenticate,
  authorizeAdmin,
  validate(updateUserSchema),
  async (req, res, next) => {
    try {
      const id = req.params.id;

      if (id === undefined) {
        throw new Error();
      }

      const updated = await updateUser(id, req.body);
      res.status(200).json(updated);
    } catch (err) {
      next(err);
    }
  },
);

// DELETE /api/users/:id (admin only)
router.delete(
  "/:id",
  authenticate,
  authorizeAdmin,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;

      if (id === undefined) {
        throw new Error();
      }
      await deleteUser(id);
      res.sendStatus(204);
    } catch (err) {
      next(err);
    }
  },
);

export default router;
