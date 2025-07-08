// @ imports
import express from "express";
import mainRouter from "./routes/mainRouter.js";

// @ constants
const app = express();
const port = process.env.PORT || 3000;

// @ middlewares
app.use(express.json());
app.use(mainRouter);

// @ server
app.listen(port, () =>
    console.log(`Server is running on http://localhost:${port}`)
);
