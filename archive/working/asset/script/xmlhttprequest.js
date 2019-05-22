function makeXMLHttpRequestHandler(callback) {
  let handler = function(fileData) {
    if (!fileData) {
      conole.log("error");
      return true;
    } else {
      callback(fileData);
      return false;
    }
  };
  return handler;
}

function doXMLHttpRequest(path, callback) {
  let handler = makeXMLHttpRequestHandler(callback);
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      // The request is done; did it work?
      if (xhr.status == 200) {
        // ***Yes, use `xhr.responseText` here***
        callback(xhr.responseText);
      } else {
        // ***No, tell the callback the call failed***
        callback(null);
      }
    }
  };
  xhr.open("GET", path);
  xhr.send();
}