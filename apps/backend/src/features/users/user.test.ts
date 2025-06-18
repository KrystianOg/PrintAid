import request from "supertest";
import { describe, it, expect, beforeAll } from "vitest";
import { app } from "../../index.js";
import { pool } from "../../lib/db.js";
import * as argon2 from "argon2";

describe("User Routes", () => {
  let token: string;
  beforeAll(async () => {
    // Create an admin user directly in DB
    const passwordHash = await argon2.hash("AdminPass1");
    await pool.query(
      `INSERT INTO users (email, password_hash, is_admin)
       VALUES ($1, $2, TRUE)
       RETURNING id;`,
      ["admin@example.com", passwordHash]
    );
    const res = await request(app)
      .post("/api/auth/login")
      .send({ email: "admin@example.com", password: "AdminPass1" });
    token = res.body.token;
  });

  it("GET /api/users should list users for admin", async () => {
    const res = await request(app)
      .get("/api/users")
      .set("Authorization", `Bearer ${token}`);
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("GET /api/users/me should return current user", async () => {
    const res = await request(app)
      .get("/api/users/me")
      .set("Authorization", `Bearer ${token}`);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("email", "admin@example.com");
  });
});
