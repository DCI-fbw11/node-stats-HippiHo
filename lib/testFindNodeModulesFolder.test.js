const path = require("path");
const { findNodeModulesFolders } = require("./findNodeModulesFolders");

/**
 * To make this work on your machine I can not just use an absolute
 * "hard coded" path. Instead I use the path module, to construct
 * a path, in combination with the variable __dirname which is exposed
 * in a module. __dirname represents the path of the directory where
 * the current file (module) lives in.
 */

const testDir = path.join(__dirname, "..", "testDirectory");

const successDirs = [
  testDir + "firstFolder" + "/node_modules",
  testDir + "andAgain" + "/node_modules"
];

describe("Find Node Modules", () => {
  test("should find node_module folder in test directory", () => {
    expect(findNodeModulesFolders(testDir)).toEqual(successDirs);
  });

  test("Should throw on file or non existing path as input", () => {
    expect(() => findNodeModulesFolders(testDir + ".html").toThrow());
    expect(() =>
      findNodeModulesFolders(
        testDir + "/someFolderThatShouldNeverExist"
      ).toThrow()
    );
  });
});
