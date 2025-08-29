export default class CamelidGI {
  constructor() {
    this.name = "CamelidGI";
    this.modelInfo = "Camelid Gastrointestinal placeholder (outer/inner).";
    this.modelImageURL = "/img/camelid_gi_thumbnail.png";   // <- this file exists
    this.scale = 0.01;
    this.center = [0, 0, 0];

    this.components = ["C1", "C2", "C3", "INT"];

    // Correct file names:
    this.files = {
      OUTER: "/models/CamelidGI/camelid_stomach_outer.obj",
      INNER: "/models/CamelidGI/camelid_stomach_inner.obj"
    };
  }
}
