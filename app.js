import express from "express";
import morgan from "morgan";
import cors from "cors";

import contactsRouter from "./routes/contactsRouter.js";

export const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

// import express from "express";
// import morgan from "morgan";
// import cors from "cors";
// import dotenv from "dotenv";
// import mongoose from "mongoose";

// import contactsRouter from "./routes/contactsRouter.js";

// dotenv.config();
// const app = express();

// mongoose
//   .connect(process.env.DB_HOST)
//   .then(() => console.log("Database connection successful"))
//   .catch((err) => {
//     console.log(err);
//     process.exit(1);
//   });

// app.use(morgan("tiny"));
// app.use(cors());
// app.use(express.json());

// app.use("/api/contacts", contactsRouter);

// app.use((_, res) => {
//   res.status(404).json({ message: "Route not found" });
// });

// app.use((err, req, res, next) => {
//   const { status = 500, message = "Server error" } = err;
//   res.status(status).json({ message });
// });

// const { PORT } = process.env ?? 4000;

// app.listen(PORT, () => {
//   console.log(`Server is up and running on port ${PORT}`);
// });
