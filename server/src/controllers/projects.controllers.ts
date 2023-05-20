import type { NextFunction, Request, Response } from "express";
export const getProjectsController = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  return res.json([{ id: "1", name: "first project", desc: "lorem ipsum" }]);
};
