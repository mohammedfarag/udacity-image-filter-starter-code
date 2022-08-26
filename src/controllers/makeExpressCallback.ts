import { debug } from "console";
import { Request, Response } from "express";
import { HttpRequestModel,ErrorModel } from "../models";

export default (controller: Function) => (req: Request, res: Response) => {
  const httpRequest = new HttpRequestModel(req);

//   // req.user coming from 'policies/token.js',
//   // after the JWT token is parsed
//   if (req.user) {
//     Sentry.setUser(req.user);
//   } else {
//     Sentry.configureScope((scope) => scope.setUser(null));
//   }

  controller(httpRequest)
    .then((httpResponse:any) => {
      res.set('Content-Type', 'application/json');
      res.type('json');
      const body = {
        success: true,
        code: 200,
        data: httpResponse
      };
      res.status(200).send(body);
    }, (err:ErrorModel) => {
      res.status(400).send({
        success: false,
        code: 400,
        error: {
          description: err
        }
      });
    })
    .catch((err:any) => {
      res.status(500).send({
        success: false,
        code: 500,
        error: {
          description: "An error occurred please try again or contact administrator."
        }
      });
    });
};