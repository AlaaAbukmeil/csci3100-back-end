"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
require("dotenv").config();
const multerGoogleStorage = require("multer-google-storage");
const multer = require("multer");
const router = (0, express_1.Router)();
router.get("/", async (req, res, next) => {
    res.sendStatus(200);
});
router.post("/post", async (req, res, next) => {
    try {
        const formData = req.body;
        //do something
        res.status(201).json({ success: true, data: formData });
    }
    catch (error) {
        res.status(500).json({ success: false, msg: "Error" });
    }
});
exports.default = router;
