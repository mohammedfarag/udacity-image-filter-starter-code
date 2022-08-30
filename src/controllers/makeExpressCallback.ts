import { debug } from "console";
import { Request, Response } from "express";
import { HttpRequestModel, ErrorModel, ResponseModel } from "../models";

// controller
// Top layer generic function to handle request and response formats
export default (controller: Function) => (req: Request, res: Response) => {
  const httpRequest = new HttpRequestModel(req);

  controller(httpRequest)
    .then(
      (httpResponse: ResponseModel) => {
        res.set("Content-Type", httpResponse.contentType || "application/json");
        res.type(httpResponse.type || "json");
        res.send(httpResponse.body || null);
        if (httpResponse.callBack) httpResponse.callBack();
      },
      (err: any) => {
        res.status(err instanceof ErrorModel ? err.code : 500).send(
          err instanceof ErrorModel
            ? err
            : new ErrorModel({
                code: 500,
                message: err.message,
                trace: err,
              })
        );
      }
    )
    .catch((err: any) => {
      res.status(500).send(
        new ErrorModel({
          code: 500,
          message: "An error occured please try again or contact your admin.",
          trace: err,
        })
      );
    });
};
