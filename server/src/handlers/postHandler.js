import { db } from "../datastore/memorydb.js";

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
        const { id, title, username } = req.body;
        if (
            !id ||
            !title ||
            typeof title !== "string" ||
            !username ||
            typeof username !== "string"
        )
            return res.status(400).json({
                success: false,
                msj: `Please insert valid id and title and username`,
            });
        const newPost = { id, title, username };
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
