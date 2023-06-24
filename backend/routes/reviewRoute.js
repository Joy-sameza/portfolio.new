const express = require("express");
const router = express.Router();
const { msgModel } = require("../models/msgModels");

router.post("/new-msg", (req, res, next) => {
  const dt = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.msg,
  };
  const newmsg = new msgModel(dt);
  newmsg
    .save()
    .then(() => {
      console.log("SAved!!");
      res.end("done");
    })
    .catch((err) => {
      console.error(err);
      res.end("error");
    });
  next();
});

router.get("/", (req, res, next) => {
  const storedMsg = [];
  msgModel
    .find()
    .then((msgs) => {
      msgs.forEach((msg) => {
        const obj = {
          name: msg.name,
          email: msg.email,
          message: msg.message,
        };
        storedMsg.push(obj);
      });
      res.status(200).send(storedMsg);
      console.log("Given review");
    })
    .catch((err) => console.error(err));
  // next();
});

module.exports = router;
