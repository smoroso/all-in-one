import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import startServer from "./index.js";

chai.use(chaiHttp);

const server = startServer();

describe("API Calls", function() {
  describe("non existing endpoint", function() {
    it("fails, as expected", function(done) {
      chai.request(server)
        .get("/huh")
        .end((err, res) => {
          expect(res).to.have.status(404);
          done();
        });
    });
  });

  describe("valid endpoint", function() {
    it("returns a page", function(done) {
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
