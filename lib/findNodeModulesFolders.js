const fs = require("fs");
const path = require("path");

const findNodeModulesFolders = inputPath => {
  if (isFileOrDoesNotExist(inputPath))
    throw Error("Provided Path is not a folder");
  let moduleFolderPaths = [];
  const subfolders = fs
    .readdirSync(inputPath)
    .map(fileOrFolder => path.join(inputPath, fileOrFolder))
    .filter(fileOrFolderPath => isDirectory(fileOrFolderPath))
    .filter(folder => isNotHidden(folder));

  //check for node_modules folder with regex
  if (subfolders.filter(FolderPath => /node_modules$/.test(FolderPath))) {
    moduleFolderPaths.push(inputPath + "/node_modules");
  } else {
    const modulesFoundInSubfolders = subfolders.map(path =>
      findNodeModulesFolders(path)
    );
    moduleFolderPaths = moduleFolderPaths.concat(...modulesFoundInSubfolders);
  }

  return moduleFolderPaths;
};

const isFileOrDoesNotExist = path => {
  try {
    return fs.statSync(path).isFile();
  } catch (e) {
    // if it does not exist stat panics and we catch it
    // and return true to satisfy our use case
    return true;
  }
};

const isDirectory = fileOrFolderPath => {
  try {
    return fs.statSync(fileOrFolderPath).isDirectory();
  } catch (e) {
    return false;
  }
};

const isNotHidden = folder => {
  const folderName = path.basename(folder);
  return folderName[0] === "." ? false : true;
};

console.log(
  findNodeModulesFolders(
    "/home/dci/Development/node/node-stats-HippiHo/testDirectory"
  )
);

module.exports = {
  findNodeModulesFolders
};
