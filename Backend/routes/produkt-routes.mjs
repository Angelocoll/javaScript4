import express from "express";
import { getList, getById } from "../controllers/produktControllers.mjs";

const router = express.Router();

router.get("/", getList);

router.get("/:id", getById);

export default router;
