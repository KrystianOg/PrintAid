import { Router } from "express";
import {
  getCurrentUser,
  listUsers,
  updateUser,
  deleteUser,
} from "../features/users/user.controller.js";
import { authenticate, authorizeAdmin } from "../middlewares/auth.js";
import { validate } from "../middlewares/validation.js";
import { updateUserSchema } from "../features/users/user.schema.js";

const router = Router();

// GET /api/users/me
router.get("/me", authenticate, async (req, res) => {
  const id = req.user?.id;

  if (id === undefined) {
    throw new Error();
  }

  const user = await getCurrentUser(id);
  res.status(200).json(user);
});

// GET /api/users (admin only)
router.get("/", authenticate, authorizeAdmin, async (_req, res) => {
  const users = await listUsers();
  res.status(200).json(users);
});

// PATCH /api/users/:id (admin only)
router.patch(
  "/:id",
  authenticate,
  authorizeAdmin,
  validate(updateUserSchema),
  async (req, res) => {
    const id = req.params.id;

    if (id === undefined) {
      throw new Error();
    }

    const updated = await updateUser(id, req.body);
    res.status(200).json(updated);
  }
);

// DELETE /api/users/:id (admin only)
router.delete("/:id", authenticate, authorizeAdmin, async (req, res) => {
  const id = req.params.id;

  if (id === undefined) {
    throw new Error();
  }
  await deleteUser(id);
  res.sendStatus(204);
});

export default router;
