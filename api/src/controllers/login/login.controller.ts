import { Request, Response } from "express";
import { loginSchemas } from "../../schemas";

export const getIndex = (req: Request, res: Response) => {
  res.json({
    message: "Hello from login index",
  });
};

export const login = (req: Request, res: Response) => {
  const { loginCredentials } = loginSchemas;

  const result = loginCredentials.safeParse(req.body);

  if (!result.success) {
    res.json({
      message: result.error.name,
      errors: result.error.errors,
    });
  } else {
    return res.json(result);
  }
};
