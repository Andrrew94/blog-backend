import { Request, Response } from "express";

export const getProducts = (req: Request, res: Response) => {
    console.log("req body is", req.body.title);
    res.send("added product");
};
