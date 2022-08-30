import express from 'express';

export const defaultRouts = express.Router();

defaultRouts.route("/").get((req, res) => {
     res.send("try GET /filteredimage?image_url={{}}")
})