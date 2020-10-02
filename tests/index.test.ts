import { expect } from "chai";
import { add } from "../src/index";

describe("add", () => {
  it("should correctly add two numbers", () => {
    expect(add(41, 1)).to.equal(42);
  });
});
