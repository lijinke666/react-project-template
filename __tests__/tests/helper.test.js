import assert from "power-assert";

/*eslint-disable */
describe("Helper.tests", () => {
  describe("#isPc()", () => {
    it("should return a boolean", () => {
      assert(Boolean(browser.isPC()));
    });
  });
});
