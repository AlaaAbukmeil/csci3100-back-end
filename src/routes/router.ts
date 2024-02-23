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
/// katie
router.post("/post", async(req: Request, res: Response, next: NextFunction) =>{
  try{
    const formData = req.body
    //do something
    res.status(201).json({success:true, data:formData})
  }catch(error){
    res.status(500).json({success:false, msg:"Error"})
  }
})
//// alaa
router.post("/post-alaa", async(req: Request, res: Response, next: NextFunction) =>{
  try{
    const formData = req.body
    //do something
    res.status(201).json({success:true, data:formData})
  }catch(error){
    res.status(500).json({success:false, msg:"Error"})
  }
})

export default router;
