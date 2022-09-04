import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import routes from "./v1/routes";

(async () => {
  // Init the Express application
  const app: Application = express();

  // Set the network port
  const port = process.env.PORT || 8082;

  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  app.use("/api/v1", routes);

  app.use("/", function (req: Request, res: Response) {
    res.status(200).send("Welcome to image filter service.");
  });

  // Start the Server
  app.listen(port, () => {
    console.log(`server running http://localhost:${port}`);
    console.log(`press CTRL+C to stop server`);
  });
})();
