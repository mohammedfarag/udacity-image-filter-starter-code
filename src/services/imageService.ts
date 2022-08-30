import { ErrorModel } from "../models";
import { Url } from "url";
import { filterImageFromURL, isImgLink } from "../util/util";

export default class ImageService {
  //import {filterImageFromURL, deleteLocalFiles} from './util/util';
  // @TODO1 IMPLEMENT A RESTFUL ENDPOINT
  // GET /filteredimage?image_url={{URL}}
  // endpoint to filter an image from a public url.
  // IT SHOULD
  //    1
  //    1. validate the image_url query
  //    2. call filterImageFromURL(image_url) to filter the image
  //    3. send the resulting file in the response
  //    4. deletes any files on the server on finish of the response
  // QUERY PARAMATERS
  //    image_url: URL of a publicly accessible image
  // RETURNS
  //   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]

  /**************************************************************************** */

  //! END @TODO1

  public async FilterImage(url: string): Promise<string> {
    return new Promise(async (resolve, reject) => {
      //   let filteredImage: string = "test";
      //   resolve(filteredImage);
      if (!url || !isImgLink(url))
        return reject(
          new ErrorModel({ code: 400, message: "this is bad request." })
        );
      else {
        return await filterImageFromURL(url).then(
          (filteredImagePath) => {
            resolve(filteredImagePath);
          },
          (err) => {
            reject(new ErrorModel({ code: 422, message: err.message }));
          }
        );
      }
    });
  }
}
