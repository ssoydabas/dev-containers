export const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;

export const isDevelopment = process.env.NODE_ENV === "development";
