import express from 'express';
import { defaultRouts } from './defaultRoute';
import { imageRouts } from './imageRoute';

const routes = express.Router();

routes.use(defaultRouts)
routes.use(imageRouts)

export default routes;