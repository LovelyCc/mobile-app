document.addEventListener("plusready",plusReady,false);

function plusReady(){
  // 5+ API code
  var ws = plus.webview.currentWebview();
  // ......
}

const html_plus = {
  captureImage() {
    var cmr = plus.camera.getCamera();
    var res = cmr.supportedImageResolutions[0];
    var fmt = cmr.supportedImageFormats[0];
    console.log("Resolution: "+res+", Format: "+fmt);
    cmr.captureImage( function( path ){
        plus.io.resolveLocalFileSystemURL(path, function(entry) {
          return entry.toLocalURL();
        }, function(e) {
          outLine("读取拍照文件错误：" + e.message);
        });
      },
      function( error ) {
        /*alert( "Capture image failed: " + error.message );*/
      },
      {resolution:res,format:fmt}
    );
  },

  uploadImg(path) {
    var task = plus.uploader.createUpload( "", {}, function ( t, status ) {
      // 上传完成
      if ( status == 200 ) {
        alert( "Upload success: " + t.url );
      } else {
        alert( "Upload failed: " + status );
      }
    });
    task.addFile( path, {key:"img"} );
    // task.addData( "string_key", "string_value" );
    //task.addEventListener( "statechanged", onStateChanged, false );
    task.start();
  }
}

export default html_plus
