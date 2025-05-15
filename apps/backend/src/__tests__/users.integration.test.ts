import request from "supertest";
import { describe, it, beforeAll, expect } from "vitest";
import { app } from "../index.js";
import { pool } from "../lib/db.js";

describe("User Routes Integration", () => {
  let token: string;

  beforeAll(async () => {
    // Clean users table and create admin user
    await pool.query("DELETE FROM users;");
    const hashed = "$2b$10$abcdefghijklmnopqrstuv"; // stub bcrypt hash
    await pool.query(
      `INSERT INTO users (id, email, password_hash, is_admin, created_at)
       VALUES ('admin-id', 'admin@pa.test', $1, TRUE, NOW());`,
      [hashed],
    );
    // Log in to get token
    const res = await request(app)
      .post("/api/auth/login")
      .send({ email: "admin@pa.test", password: "Password123" });
    token = res.body.token;
  });

  it("GET /api/users/me → 200 & returns profile", async () => {
    const res = await request(app)
      .get("/api/users/me")
      .set("Authorization", `Bearer ${token}`);
    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({ email: "admin@pa.test", isAdmin: true });
  });

  it("GET /api/users → 200 & returns an array (admin only)", async () => {
    const res = await request(app)
      .get("/api/users")
      .set("Authorization", `Bearer ${token}`);
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
