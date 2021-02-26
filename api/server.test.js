const request = require("supertest");
const server = require("./server");
const db = require("../data/dbConfig");


const Jacob = { username: "Jacob", password: "1234" };
const Tyler = { username: "Tyler" };


beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});


beforeEach(async () => {
  await db("users").truncate();
});


afterAll(async () => {
  await db.destroy();
});


test("sanity", () => {
  expect(true).toBe(true);
});


describe("[POST] /api/auth/login", () => {
  it("Says hello to user after login", async () => {
    await request(server).post("/api/auth/register").send(Jacob);
    const res = await request(server).post("/api/auth/login").send(Jacob);
    expect(res.body.message).toMatch(`hello`);
  });
  it("returns status 400 if invalid ", async () => {
    const res = await request(server).post("/api/auth/register").send(Tyler);
    expect(res.status).toBe(401);
  });
});


describe("[POST] /api/auth/register", () => {
  it("returns newly registered user", async () => {
    const res = await request(server).post("/api/auth/register").send(Jacob);
    expect(res.body.username).toBe("Jacob");
  });
  it("status code 401 when no password", async () => {
    const res = await request(server).post("/api/auth/register").send(Tyler);
    expect(res.status).toBe(401);
  });
});


describe("[GET] /api/jokes", () => {
  it("status code 200 when logged in", async () => {
    await request(server).post("/api/auth/register").send(Jacob);
    const login = await request(server).post("/api/auth/login").send(Jacob);
    const token = login.body.token;
    const res = await request(server)
      .get("/api/jokes")
      .set({ Authorization: token });
      expect(res.status).toBe(200);
  });
  it("status code 401 when not logged in", async () => {
    const res = await request(server).get("/api/jokes");
    expect(res.status).toBe(401);
  });
});