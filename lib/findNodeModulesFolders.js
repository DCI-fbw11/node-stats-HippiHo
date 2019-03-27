const fs = require("fs");

const findNodeModulesFolders = path => {
  let moduleFolderPaths = [];
  const subfolders = fs.readdirSync(path);

  const nodeModuleFolders = subfolders.map(folder => path + "/" + folder);

  const nodeModulePaths = nodeModuleFolders.filter(folderPath =>
    /node_modules/gi.test(folderPath)
  );

  moduleFolderPaths = moduleFolderPaths.concat(nodeModulePaths);

  if (moduleFolderPaths.length >= 1) {
    return moduleFolderPaths;
  } else {
    const subfolderPaths = nodeModuleFolders.forEach(folder => {
      const stat = fs.lstatSync(folder);
      if (stat.isDirectory()) {
        console.log(
          fs
            .readdirSync(folder)
            .map(subfolder => folder + "/" + subfolder)
            .filter(folderPath => /node_modules/gi.test(folderPath))
        );
      }
    });
    //Returns undefined
    console.log("hey", subfolderPaths);
  }
};

findNodeModulesFolders(
  "/home/dci/Development/node/node-stats-HippiHo/testDirectory"
);

module.exports = {
  findNodeModulesFolders
};
