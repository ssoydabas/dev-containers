import { Router } from "express";

import { isDevelopment } from "../../config";

const router = Router();

// if (isDevelopment) {
router.get("/error", () => {
  throw new Error("Testing error handling in development mode");
});
// }

export default router;
