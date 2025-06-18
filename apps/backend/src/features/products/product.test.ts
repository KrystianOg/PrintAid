import request from "supertest";
import { describe, it, expect } from "vitest";
import { app } from "../../index.js";

describe("Product Routes", () => {
  it("GET /api/products should list products", async () => {
    const res = await request(app).get("/api/products");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("GET /api/products/:id", async () => {
    const res = await request(app).get("/api/products/1");
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("id");
  });

  it("PATCH /api/products/:id", async () => {
    const res = await request(app).patch("/api/products/1");
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("id");
  });

  it("DELETE /api/products/:id", async () => {
    const res = await request(app).delete("/api/products/1");
    expect(res.status).toBe(204);
    expect(res.body).toBeUndefined();
  });
});
