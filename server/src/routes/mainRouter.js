// @ imports
import express from "express";
import postsRouter from "./postsRoutes.js";

// @ constants
const router = express.Router();

// @ middlewares
router.use("/posts", postsRouter);

// @ exports
export default router;
