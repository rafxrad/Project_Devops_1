const supertest = require("supertest");
const { app, startServer } = require("./../../index");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
describe("Task Controller Tests", () => {
  let server;

  // Inicia o servidor antes de todos os testes
  beforeAll(async () => {
    server = startServer();
    await prisma.task.deleteMany();
  });

  // Fecha o servidor após todos os testes
  afterAll(async () => {
    await new Promise((resolve) => server.close(resolve));
  });

  // Limpa o banco de dados antes de cada teste
  beforeEach(async () => {
    await prisma.$executeRaw`ALTER TABLE Task AUTO_INCREMENT = 1;`;
  });

  // Teste para verificar a criação de uma nova tarefa
  it("should create a new task", async () => {
    const response = await supertest(app)
      .post("/task")
      .send({ title: "Lavar o carro" });

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty(
      "message",
      "Tarefa criada com sucesso!"
    );
  });

  // Teste para recuperar todas as tarefas
  it("should retrieve all tasks", async () => {
    const response = await supertest(app).get("/tasks");

    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  // Teste para visualizar uma tarefa específica
  it("should retrieve a specific task", async () => {
    const createResponse = await supertest(app)
      .post("/task")
      .send({ title: "Lavar o carro" });
    const taskId = createResponse.body.key; // Supondo que a resposta inclui o objeto task

    const response = await supertest(app)
      .post("/select/task")
      .send({ key: taskId });
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("title", "Lavar o carro");
  });

  // Teste para atualizar uma tarefa
  it("should update a task", async () => {
    const response = await supertest(app)
      .put("/task")
      .send({ key: 1, title: "Lavar o carro e aspirar", done: true });

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty(
      "message",
      "Tarefa editada com sucesso!"
    );
  });

  // Teste para deletar uma tarefa
  it("should delete a task", async () => {
    const response = await supertest(app).post("/delete/task").send({ key: 1 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty(
      "message",
      "Tarefa deletada com sucesso!"
    );
  });
});
