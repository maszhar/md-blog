const express = require("express");
const {initApp} = require("../lib/app");

const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
chai.use(chaiHttp);

describe("initApp", () => {
  it("should handle an injected router", () => {
    const router = express.Router();
    router.get("/hello", (req, res) => {
      res.json({
        message: "Hello, World!",
      });
    });

    const server = initApp(router);
    chai.request(server)
        .get("/api/hello")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an("object");
          res.body.message.should.be.a("string").and.be.eql("Hello, World!");
        });
  });

  it("should handle another injected router", () => {
    const router = express.Router();
    router.post("/uppercase", (req, res) => {
      const msg = req.body.message;
      res.json({
        message: msg.toUpperCase(),
      });
    });

    const server = initApp(router);
    chai.request(server)
        .post("/api/uppercase")
        .send({
          message: "aKu mau bObo",
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an("object");
          res.body.message.should.be.a("string").and.be.eql("AKU MAU BOBO");
        });
  });
});
