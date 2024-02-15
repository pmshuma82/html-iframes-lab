// Mocking the document object
const { JSDOM } = require('jsdom');
const { document } = new JSDOM('<!doctype html><html><body></body></html>').window;

// Your existing test code
require ( './helpers.js' );

const chai = require("chai");
chai.use(require("chai-dom"));
const { expect } = chai;

describe("index.html", () => {
  describe("the body", () => {
    it("contains an <iframe> tag", () => {
      const body = document.querySelector("body");

      const iframe = body.querySelector("iframe");
      const hint1 = "No <iframe> tag found";
      expect(iframe, hint1).to.exist;
    });
  });

  describe("the iframe", () => {
    before(() => {
      iframe = document.querySelector("iframe");
      const hint = "No <iframe> tag found";
      expect(iframe, hint).to.exist;
    });

    it("contains a valid URL in the src attribute", () => {
      const hint = "Include a valid URL in the 'src' attribute";
      expect(iframe, hint)
        .to.have.attribute("src")
        .to.match(/https:/);
    });

    it("contains a 'width' attribute set to '100%'", () => {
      const hint = "The width attribute should be set to '100%'";
      expect(iframe, hint).to.have.attribute("width", "100%");
    });

    it("contains a 'height' attribute set to '400px'", () => {
      const hint = "The height attribute should be set to '400px'";
      expect(iframe, hint).to.have.attribute("height", "400px");
    });

    it("contains a frameborder attribute set to '1'", () => {
      const hint = "The frameborder attribute should be set to '1'";
      expect(iframe, hint).to.have.attribute("frameborder", "1");
    });
  });
});