import { NextFunction, Router } from "express";

import { Request, Response } from "express";


require("dotenv").config();

const multerGoogleStorage = require("multer-google-storage");
const multer = require("multer");

const router = Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  res.sendStatus(200);
});

router.post("/post", async(req: Request, res: Response, next: NextFunction) =>{
  try{
    const formData = req.body
    //do something
    res.status(201).json({success:true, data:formData})
  }catch(error){
    res.status(500).json({success:false, msg:"Error"})
  }
})

export default router;
