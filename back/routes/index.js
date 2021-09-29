const express = require("express");
const router = express.Router();
const searchRouter = require("./search");
const authRouter = require("./auth");
const users = require("./users");
const empresas = require("./empresas");

/* GET home page. */
router.use("/users", users);
router.use("/empresas", empresas);
router.use("/search", searchRouter);
router.use("/auth", authRouter);

module.exports = router;
