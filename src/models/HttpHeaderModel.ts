import { Request } from "express"

export default class HttpRequestModel {
    body: string;
    query: any;
    params: string;
    ip: string;
    method: string;
    path: string;
    source: {
        ip: string,
        browser: string
    };
    headers: {
      contentType: string,
      Referer: string,
      userAgent: string
    }

    constructor(req: Request) {
        this.body = req.body;
        this.query = req.query;
        this.params = req.params;
        this.ip = req.ip;
        this.method = req.method;
        this.path = req.path;
        this.source = {
            ip: req.ip,
            browser: req.get('User-Agent')
        };
        this.headers = {
            contentType: req.get('Content-Type'),
            Referer: req.get('referer'),
            userAgent: req.get('User-Agent')
        };
    }
  };