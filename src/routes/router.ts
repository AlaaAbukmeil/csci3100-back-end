import { NextFunction, Router } from "express";
import { createDateMonth } from "../controllers/Katie/test";
import { Request, Response } from "express";
import { createDate } from "../controllers/alaa/test";
require("dotenv").config();

const multerGoogleStorage = require("multer-google-storage");
const multer = require("multer");

const router = Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  res.send(createDate()+createDateMonth());
});

router.get("/one", async (req: Request, res: Response, next: NextFunction) => {
  res.send(createDate());
});

export default router;
