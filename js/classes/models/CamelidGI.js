// js/classes/models/CamelidGI.js
import { Model } from "./models.js";

const model = new Model(
  "CamelidGI",
  ["C1", "C2", "C3", "INT"], // the parts list that shows in the sidebar
  0.01,                      // scale
  [0, 0, 0],                 // center
  "Camelid Gastrointestinal placeholder (outer/inner).",
  "/img/models/preview/camelid_gi_thumbnail.png" // make sure this file exists
);

// add the two OBJ files your custom loader uses
model.files = {
  OUTER: "/models/CamelidGI/camelid_stomach_outer.obj",
  INNER: "/models/CamelidGI/camelid_stomach_inner.obj",
};

export default model;
