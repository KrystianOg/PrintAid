import { Router } from "express";
import authRouter from "./auth.js";
import usersRouter from "./users.js";
import productsRouter from "./products.js";
import playgroundRouter from "./playground.js";

const router = Router();

router.use("/auth", authRouter);

router.use("/users", usersRouter);

router.use("/products", productsRouter);

router.use("/playground", playgroundRouter);

export default router;
