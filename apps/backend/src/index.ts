import express from "express";
import cors from "cors";
import routes from "./routes/index.js";
import { initDb } from "./lib/db.js";
import { loggerMiddleware } from "./middlewares/logger.js";
import { admin, _adminRouter } from "./lib/adminjs.js";
import { errorHandler } from "./middlewares/errorHandler.js";

export const app = express();
app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(express.json());
app.use(loggerMiddleware);
app.use("public/uploads", express.static("public/uploads"));
app.use("/api", routes);
app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use(admin.options.rootPath, _adminRouter);
app.use(errorHandler);

const start = async () => {
  // use amdinjs instead
  await initDb();
  app.listen(process.env.PORT, () => {
    console.log("Server running");
  });
};

start();
