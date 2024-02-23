"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const test_1 = require("../controllers/Katie/test");
const test_2 = require("../controllers/alaa/test");
require("dotenv").config();
const multerGoogleStorage = require("multer-google-storage");
const multer = require("multer");
const router = (0, express_1.Router)();
router.get("/", async (req, res, next) => {
    res.send((0, test_2.createDate)() + (0, test_1.createDateMonth)());
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
router.post("/post-alaa", async (req, res, next) => {
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
