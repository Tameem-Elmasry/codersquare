import { db } from "../datastore/memorydb.js";
import crypto from "crypto";

export const listPosts = (_req, res) => {
    if (db.listPosts().length < 1 || !db.listPosts())
        return res.status(200).json({
            success: true,
            msj: `There is no posts`,
        });
    return res.status(200).json({
        success: true,
        msj: `Users fetched successfully`,
        data: db.listPosts(),
    });
};

export const createPost = (req, res) => {
    try {
        const { title, url, userId } = req.body;
        if (!url || !title || typeof title !== "string" || !userId)
            return res.status(400).json({
                success: false,
                msj: `Please insert valid id and title and username`,
            });
        const newPost = {
            id: crypto.randomUUID(),
            title,
            url,
            userId,
            postedAt: Date.now(),
        };
        db.createPost(newPost);
        return res.status(201).json({
            success: true,
            msj: `Post created successfully`,
            data: newPost,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            msj: `Error while creating new post`,
            error: err.message,
        });
    }
};
