// const fs = require('fs');
// const entryPath = './servermain';
// const request = require('request-promise-native');

// const fsp = require('fs/promises');

// const fileObj = {};

// const dirMap = function(path, callback) {
//   let currentPath = path;
//   fs.readdir(currentPath,{withFileTypes: true}, (err, files) => {
//     if (!err) {
//       files.forEach((element) => {
//         if (element.isDirectory(element)) {
//           console.log("Current Path: ",currentPath);
//           currentPath += '/' + element.name;
//           dirMap(currentPath, callback);

//         }
//       });
//       return callback(currentPath, files);
//       // return callback(path, files);
//     }
//   });
// };


// dirMap(entryPath, (path,files) => {
//   fileObj[path] = [];
//   files.forEach(element => {
//     fileObj[path].push(element.name);
//   });
//   console.log(fileObj);
// });

// dirMap(entryPath, (path,files) => {
//   fileObj[path] = [];
//   files.forEach(element => {
//     fileObj[path].push(element.name);
//   });
//   console.log(fileObj);
// });

//------------------------------------------------------------------------------

// const fs = require('fs');

// const fileContainer = [];

// const dirWalk = (path,parentPath,filecont) => {

//   fs.promises.readdir(path,{withFileTypes:true})

//     .then((files) => {

//       files.forEach(element => {
//         if (element.isDirectory()) {
//           filecont.push({name: path, contents: [], parent: parentPath});
//           dirWalk(path + '/' + element.name,path);
//         }
//       });
//       return filecont;
//     }).then(filobj => {
//       fileContainer.unshift(filobj);
//       return fileContainer;
//     }).then((dir) => {
//       for (let fileA of dir) {
//         for (let fileB of dir) {
//           if (fileB.parent === fileA.path) {
//             fileA.contents.push(fileB);
//           }
//         }
//       }
//       console.log(dir);
//     });
// };

// dirWalk('./servermain','',fileContainer);

//------------------------------------------------------------------------------

// const fs = require('fs');
// const rootPath = "/.servermain";
// const fileBin = [];


// let fileContainer = {name: rootPath, contents: [], parent: null};

// const dirWalk = (fileContainer,path,parentPath) => {
//   return fs.promises.readdir(path, {withFileTypes:true}), path, parentPath;
// };


// const sortFiles = (files,path,parentPath) => {
//   files.forEach(element => {
//     if (files.type === 'dir') {
//       let currentfile = {};
//       currentfile.name = element.name;
//       currentfile.contents = [];
//       currentfile.path = path;
//       fileContainer.unshift(element);
//       dirMap(element.parentPath + '/' + element.path);
//     } else {
//       fileContainer.push(element);
//     }
//   });
//   return fileContainer;
// };
// const dirMap = (path,parentPath) => {

//   dirWalk(path,parentPath)
//     .then(sortFiles(files,path,parentPath))
//     .then(dir => {
//       console.log(dir);
//     }).catch();
// };

// dirMap(rootPath,'.');

//------------------------------------------------------------------------------

const fs = require('fs');
const fileBin = [];
const entryPath = "./servermain";

const dirMap = function(path,callback) {

  let parentSplit = path.split('/');
  let parentPath = parentSplit[parentSplit.length - 1];

  fs.readdir(path, {withFileTypes:true}, (err,files) => {

    let fileTempBin = [];
    if (!err) {
      files.forEach(element => {
        if (element.isDirectory()) {

          fileTempBin.push({name:`${element.name}`, path: `${path}/${element.name}`, parent: `${parentPath}`, type: "dir",contents: []});

          dirMap(`${path}/${element.name}`, callback);

        } else {

          fileTempBin.push({name:`${element.name}`, path: `${path}/${element.name}`, parent: `${parentPath}`, type: "file"});

          
        }
      });
      return callback(fileTempBin);
    }
  });
};

dirMap(entryPath, (files) => {
  console.log("In CB :\n");
  files.forEach(element => {
    fileBin.push(element);
  });
  console.log("FileBin: ",fileBin);
});