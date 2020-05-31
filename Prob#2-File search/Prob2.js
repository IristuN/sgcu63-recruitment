function searchInObject(fileToSearch, object, source, filePaths, depth){
  for(key in object){
    if( typeof object[key] == "object" ){
      let sourceOfFolder= source
      if(!key.includes("_")){
        sourceOfFolder += "/" + key 
      }
      searchInObject(fileToSearch, object[key], sourceOfFolder,filePaths, depth+1)
    }else{
      if(object[key] == fileToSearch){
        if(!Object.keys(filePaths).includes(depth+"")){
          filePaths[depth] = new Array();
        }
        var path = source + "/" + fileToSearch
        filePaths[depth].push(path)
      }
    } 
  }
}

function fileSearch(fileToSearch, filesObj){
  var filePaths = {};
  var Obj = { 
    FolderA: {
     _files: ["file1","file2"] ,
        SubfolderC: {
      _files: ["file1"]
      } ,
    SubfolderB: {
      _files : ["file1"]
       }
      }
    };
  let source = "/" + filesObj
  searchInObject(fileToSearch, Obj[filesObj], source, filePaths, 1)
  
  //sort path depth in filePaths
  let orderedPaths = {}
  Object.keys(filePaths).sort().forEach(function(key) {
    orderedPaths[key] = filePaths[key]
  });

  //sort all file path with same depth
  for(pathDepth in filePaths){
    orderedPaths[pathDepth].sort()
  }
  

  //add all paths to an array
  let pathArray = new Array()
  for(pathDepth in orderedPaths){
    orderedPaths[pathDepth].forEach(path => {
      pathArray.push(path)
    });
  }

  return pathArray
}


console.log(fileSearch("file1", "FolderA"))
