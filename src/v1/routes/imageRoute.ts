import express from 'express';
import {MakeExpressCallback,ImageController} from '../../controllers'

export const imageRouts = express.Router();

imageRouts.route("/filteredimage").get(MakeExpressCallback(ImageController.filterImage))