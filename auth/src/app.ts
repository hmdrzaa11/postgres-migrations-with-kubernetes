import express from "express";

import { signupRouter } from "./routes/signup";

let app = express();

app.use(signupRouter);

export { app };
