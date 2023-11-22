import express from "express";
import { authControllers, userControllers } from "../controllers/index.js";

export const router = express.Router();

// user
router.get("/users", userControllers.listUsers);
router.post("/user/created", userControllers.createdUser);
router.put("/user/edit/:id", userControllers.editUser);
router.delete("/user/deleted/:id", userControllers.deleteUser);

// login
router.post("/login", authControllers.login);
