import { Router } from "express";

import {
  corsMiddleware,
  jsonMiddleware,
  //   handleErrorMiddleware,
} from "./middlewares";
import router from "./router";

const api = Router();

api.use(corsMiddleware);
api.use(jsonMiddleware);

api.use(router);

// api.use(handleErrorMiddleware);

export default api;
