import { register as registerService, login as loginService } from "../services/auth.service.js";

export const register = async (req, res) => {
  const result = await registerService(req.body);
  res.status(result.status).json(result.body);
};

export const login = async (req, res) => {
  const result = await loginService(req.body);
  res.status(result.status).json(result.body);
};
