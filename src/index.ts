import express, { Express, Request, Response } from "express";
import "reflect-metadata";
import dotenv from "dotenv";
import { AppDataSource } from "./data-source";

dotenv.config();

const { PORT = 3000 } = process.env;

const app: Express = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Rose is red. Violet is blue.");
});

AppDataSource.initialize()
  .then(async () => {
    app.listen(PORT, () => {
      console.log(`[server]: Server is running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.log(error));
