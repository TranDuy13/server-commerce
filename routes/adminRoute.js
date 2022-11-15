const express = require("express");
const router = express.Router();
const Validator = require("../authenticator/index");
const Controller = require("../Controller/admin.controller");
const authenticator = require("../authenticator/authenticator");
const jwtService = require("../services/jwt.service");
const Speakeasy = require("speakeasy");
router.get("/getAuth", jwtService.verify, Controller.getAuth);
router.post(
  "/register",
  Validator.body(authenticator.register),
  Controller.register
);

router.post("/login", Validator.body(authenticator.login), Controller.login);
router.post("/verify/seller", Controller.sendMail);
router.post("/verify/seller/:id", Controller.verifyUser);
// router.post("/verify", (request, response, next) => {
//   var secret = Speakeasy.generateSecret({ length: 20 });
//   return response.status(200).json({
//     data: secret.base32,
//     success: true
//   })
// });

module.exports = router;
