import express, { Express, NextFunction, Request, Response } from "express";
import { projectsRouter } from "./routes/projects.routes";

const registerRoutes = (app: Express) => {
  app.use("/projects/", projectsRouter);
};
const registerMiddlewares = (app: Express) => {
  app.use(express.json()); // Example middleware for JSON parsing
  app.use(express.urlencoded({ extended: true })); // Example middleware for URL-encoded parsing
  // Add more middlewares as needed
};

const registerErrorMiddlewares = (app: Express) => {
  app.use((req, res, next) => {
    res.status(404).json({ message: "not found" });
  });
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json("someting went wrong");
  });
};

const runServer = () => {
  const app = express();
  registerMiddlewares(app);
  registerRoutes(app);
  registerErrorMiddlewares(app);
  const port = process.env.PORT ?? 3000;
  app.listen(port, () => console.log(`running on port ${port}`));
};
if (require.main == module) runServer();
