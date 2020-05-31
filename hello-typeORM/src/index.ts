import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
import express, { Request, Response } from 'express';

createConnection().then(async connection => {

    // 这里使用express
    const app = express();

    app.use(express.json());


    app.get("/", async (_: Request, res: Response) => {
        const users = await connection.manager.find(User);
        res.json({ users });
    });

    app.listen("6060", () => {
        console.log('数据库启动成功');
    });

    // console.log("Inserting a new user into the database...");
    // const user = new User();
    // user.userName = "tiankun";
    // user.phone = "17826858986";
    // user.password = "123456";
    // user.email = "519440695@qq.com";
    // user.money = 2000000.0;
    // user.isAdmin = true;
    // await connection.manager.save(user);
    // console.log("Saved a new user with id: " + user.id);

    // console.log("Loading users from the database...");
    // const users = await connection.manager.find(User);
    // console.log("Loaded users: ", users);

    // console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
