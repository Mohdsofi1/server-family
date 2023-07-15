import request from "supertest";
import app from "../../../app.js";
import { response } from "express";

describe("Test the root path", () => {
  test("it should response the GET method and return status ok", () => {
    return request(app)
      .get("/")
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body.status).toEqual("ok family");
      });
  });
});

describe("try login with empty fields", () => {
  test("it should response the GET method and return status invalid request", () => {
    return request(app)
      .post("/api/login")
      .send({ identifier: " ", password: " " })
      .then((response) => {
        expect(response.statusCode).toBe(403);
        expect(response.body.massage).toEqual("invalid");
      });
  });
});
describe("Try login with compare password string and hashing", () => {
  test("It should response status code 401 and return message and user data", () => {
    return request(app)
      .post("/api/login")
      .send({
        indentifier: "iman",
        password: "abcd1234",
      })
      .then((response) => {
        expect(response.statusCode).toBe === 401;
        expect(response.body.message).toEqual === "login unsuccessfull";
      });
  });
});
describe("Try to get all users", () => {
  test("It should response status code 200 and return message and users data", () => {
    return request(app)
      .get("/api/users")
      .then((response) => {
        expect(response.statusCode).toBe === 401;
        expect(response.body.message).toEqual === "login unsuccessfull";
      });
  });
});
