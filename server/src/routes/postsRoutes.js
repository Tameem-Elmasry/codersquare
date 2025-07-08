// @ imports
import express from "express";
import { db } from "../datastore/memorydb.js";
import { createPost, listPosts } from "../handlers/postHandler.js";

// @ Constants
const router = express.Router();

// @ middlewares

// @ routes
// & Get all the posts
router.get("/", listPosts);

router.post("/", createPost);

// @ exports
export default router;
