import 'reflect-metadata';
import express, { Express, Request, Response, Router } from 'express';
// 安全
import helmet from 'helmet';
// 跨域
import cors from 'cors';
// 日志
import morgan from 'morgan';
import rootRoutes from "./routes";
import { createConnection } from 'typeorm';


export class Application {
  app: Express;
  router: Router = express.Router();

  constructor() {
    // create express app

    this.app = express();
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(
      morgan("dev", {
        skip: () => process.env.production === "test"
      })
    );
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.get("/", (_req: Request, res: Response) => {
      res.json({
        message: "This is Charles Studio, Welcome"
      });
    });

    // register express routes from defined application routes
    rootRoutes.forEach(route => {
      this.app.use(
        "/api",
        (this.router as any)[route.method](
          route.route,
          (req: Request, res: Response, next: Function) => {
            const result = new (route.controller as any)()[route.action](
              req,
              res,
              next
            );
            if (result instanceof Promise) {
              result.then(result =>
                result !== null && result !== undefined
                  ? res.json({ code: 0, data: result })
                  : undefined
              );
            } else if (result !== null && result !== undefined) {
              res.json(result);
            }
          }
        )
      );
    });
  }

  setupDbAndServer = async () => {
    await this.setupDb();
    await this.startServer();
  };

  setupDb = async () => {
    try {
      await createConnection();
    } catch (error) {
      console.log(error);
    }
  };

  startServer = (): Promise<boolean> => {
    return new Promise((resolve, _reject) => {
      this.app
        .listen(3000, () => {
          console.log(`Server started at http://localhost:3000`);
          resolve(true);
        })
        .on("error", err => console.error(err));
    });
  };

}

export default Application;
