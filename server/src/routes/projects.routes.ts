import { Router } from "express";
import * as projectsControllers from "../controllers/projects.controllers";

export const projectsRouter = Router();
projectsRouter.get("", projectsControllers.getProjectsController);
