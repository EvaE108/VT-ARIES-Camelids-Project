import { Model } from "./models.js";

const partsList = ['C1','C2','C3','INT'];
const friendly = {
  C1: 'C1 (Rumen-like compartment)',
  C2: 'C2 (Fore-stomach)',
  C3: 'C3 (True stomach-like)',
  INT: 'Intestines'
};

const files = {
  OUTER: './models/CamelidGI/camelid_stomach_outer.obj',
  INNER: './models/CamelidGI/camelid_stomach_inner.obj'
};

const center = { x: 0, y: 1.0, z: 0 };
const scale  = 0.1;

const CamelidGI = new Model('CamelidGI', partsList, friendly, files, scale, center);
export default CamelidGI;
