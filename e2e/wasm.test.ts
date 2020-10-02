import fs from "fs";
import path from "path";
import { expect } from "chai";

describe("subgraph", () => {
  it("should have Wasm module", () => {
    const wasmfile = path.join(__dirname, "subgraph/build/Sample/Sample.wasm");
    expect(fs.existsSync(wasmfile)).to.be.true;
  });
});
