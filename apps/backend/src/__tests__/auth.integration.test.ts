import request from "supertest";
import { describe, it, beforeAll, expect } from "vitest";
import { app } from "../index.js";
import { pool } from "../lib/db.js";

describe("Auth Routes Integration", () => {
  beforeAll(async () => {
    // Clean up users table before tests
    await pool.query("DELETE FROM users;");
  });

  it("POST /api/auth/register → 201 & returns userId", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send({ email: "foo@bar.com", password: "Password123" });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("userId");
  });

  it.skip("POST /api/auth/login → 200 & returns token", async () => {
    const loginRes = await request(app)
      .post("/api/auth/login")
      .send({ email: "foo@bar.com", password: "Password123" });
    expect(loginRes.status).toBe(200);
    expect(loginRes.body).toHaveProperty("token");
    expect(typeof loginRes.body.token).toBe("string");
  });

  it.skip("POST /api/auth/login with bad credentials → 401", async () => {
    const badRes = await request(app)
      .post("/api/auth/login")
      .send({ email: "foo@bar.com", password: "WrongPass!" });
    expect(badRes.status).toBe(401);
    expect(badRes.body).toHaveProperty("error");
  });
});
