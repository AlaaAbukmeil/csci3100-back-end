import { NextFunction, Router } from "express";

import { Request, Response } from "express";


require("dotenv").config();

const multerGoogleStorage = require("multer-google-storage");
const multer = require("multer");

const router = Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  res.sendStatus(200);
});

export default router;
