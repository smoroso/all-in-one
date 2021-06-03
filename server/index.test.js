import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import startServer from "./index.js";

chai.use(chaiHttp);

const server = startServer();

describe("API Calls", () => {
  describe("non existing endpoint", () => {
    it("fails, as expected", (done) => {
      chai.request(server)
        .get("/huh")
        .end((err, res) => {
          expect(res).to.have.status(404);
          done();
        });
    });
  });

  describe("valid endpoint", () => {
    it("returns a page", (done) => {
      chai.request(server.listen())
        .get("/about")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.html;
          expect(res.text).not.to.be.null;
          done();
        });
    });
  });
});
