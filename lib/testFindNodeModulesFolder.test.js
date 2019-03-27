const { findNodeModulesFolders } = require("./findNodeModulesFolders");

const testDir = "/home/dci/Development/node/node-stats-HippiHo/testDirectory";

const successDir = testDir + "/node_modules";

describe("Find Node Modules", () => {
  test("should find node_module folder in test directory", () => {
    expect(findNodeModulesFolders(testDir)).toEqual([successDir]);
  });
});
