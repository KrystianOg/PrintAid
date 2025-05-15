import request from "supertest";
import { describe, it, expect, beforeAll } from "vitest";
import { app } from "../index.js";
import { pool } from "../lib/db.js";

describe("Authentication Routes", () => {
  beforeAll(async () => {
    // Reset DB or run migrations
    await pool.query("DELETE FROM users;");
  });

  it("should register a new user", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send({ email: "test@example.com", password: "Secret123!" });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("userId");
  });

  it("should login and receive a JWT", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({ email: "test@example.com", password: "Secret123!" });
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("token");
  });

  it("should return 401 for invalid credentials", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({ email: "test@example.com", password: "WrongPass!" });
    expect(res.status).toBe(401);
  });
});
