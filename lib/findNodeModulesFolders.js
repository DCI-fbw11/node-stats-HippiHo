const fs = require("fs");

const findNodeModulesFolders = path => {
  // const moduleFolderPaths = [];
  const subfolders = fs.readdirSync(path);

  const nodeModuleFolders = subfolders.map(folder => path + "/" + folder);

  const nodeModulePaths = nodeModuleFolders.filter(folderPath =>
    /node_modules/gi.test(folderPath)
  );

  return nodeModulePaths;
};

findNodeModulesFolders(
  "/home/dci/Development/node/node-stats-HippiHo/testDirectory"
);

module.exports = {
  findNodeModulesFolders
};
