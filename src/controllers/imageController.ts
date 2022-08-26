import { Request, Response } from "express";
import { HttpRequestModel } from "../models";
import { BaseController } from "./baseController";

export class ImageController extends BaseController{
    init() { }

    async filterImage(req:HttpRequestModel){
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
        if (!req.query||Object.keys(req.query).length === 0 )
            return Promise.reject("not exist");
        else if (req.query.id == 0)
            throw "Whoops!ddd"
        else
            return Promise.resolve(req.query);
}
}

export default new ImageController();