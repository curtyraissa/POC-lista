import express, { json, Request, Response } from "express";
import httpStatus from "http-status";
import router from "./routers/itemRouter";
const app = express();
app.use(json());

app.get("/health", (req: Request, res: Response) => {
  res.sendStatus(httpStatus.OK);
});

app.use(router);

const port: number = parseInt(process.env.PORT) || 5000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
