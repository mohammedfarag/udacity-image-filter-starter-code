import fs from "fs";
import { ImageService } from "../services";
import { ErrorModel, HttpRequestModel, ResponseModel } from "../models";
import { BaseController } from "./baseController";
import { deleteLocalFiles } from "../util/util";

const _service: ImageService = new ImageService();
export class ImageController extends BaseController {
  async filterImage(req: HttpRequestModel) {
    if (
      !req.query ||
      Object.keys(req.query).length === 0 ||
      !req.query.image_url
    )
      return Promise.reject(
        new ErrorModel({ code: 400, message: "this is bad request." })
      );
    return await _service.FilterImage(req.query.image_url).then(
      (filteredImagePath) => {
        return new ResponseModel({
          body: fs.readFileSync(filteredImagePath),
          contentType: "image/jpeg",
          type: "jpeg",
          callBack: () => deleteLocalFiles([filteredImagePath]),
        });
      },
      (err) => Promise.reject(err)
    );
  }
}

export default new ImageController();
