import assert from "power-assert";
import browser from "../../src/shared/libs/browser";

/*eslint-disable */
describe("Helper.tests", () => {
  describe("#isPc()", () => {
    it("should return a boolean", () => {
      assert(Boolean(browser.isPC()));
    });
  });
  describe("#language()", () => {
    it("should return language", () => {
      assert(browser.language === "zh-cn" || browser.language != "");
    });
  });
});
