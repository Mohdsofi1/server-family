import express, { request } from "express";
import register from "./controller/auth/register.js";
import getUsername from "./controller/user/getUsername.js";
import listUsers from "./controller/user/listUsers.js";
import login from "./controller/auth/login.js";
import validatorResponse from "./middleware/validatorResponse.js";
import { check } from "express-validator";
import isAuthenticated from "./middleware/isAuthenticated.js";
import cardInformation from "./controller/auth/cardInformation.js";
import Update from "./controller/user/update.js";
import logout from "./controller/auth/logout.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ status: "ok family" });
});
app.get("/public", (req, res) =>
  res.status(200).json({ massage: "public route" })
);
app.post(
  "/api/register",
  check("email").notEmpty().bail().isEmail().bail(),
  check("username").notEmpty().bail().isLength({ min: 4 }).bail(),
  check("password").notEmpty().bail().isLength({ min: 8 }).bail(),
  validatorResponse,
  register
);
app.post(
  "/api/login",
  check("identifier").notEmpty().bail(),
  check("password").notEmpty().bail().isLength({ min: 8 }).bail(),
  validatorResponse,
  login
);

app.get("/private", isAuthenticated, (req, res) =>
  res.status(200).json({ massage: "private route", username: req.user })
);
app.get("/api/users", isAuthenticated, listUsers);
app.get("/api/:username", isAuthenticated, getUsername);
app.post("/api/card", isAuthenticated, cardInformation);
app.put("/api/update", Update);
app.get("/api/logout", logout);

export default app;
