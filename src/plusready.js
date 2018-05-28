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

  task: null,
  res: '',

  onStateChanged(upload, status) {
    if ( upload.state == 4 && status == 200 ) {
      // 上传完成
      this.res = upload.responseText;
    }
  },

  uploadImg(path,obj) {
    this.task = plus.uploader.createUpload( obj.url);
    this.task.addFile( path, {key:"file"} );
    if(obj.params) {
      this.task.addData( "userName", obj.params.username );
      this.task.addData( "password", obj.params.password );
    }
    this.task.addEventListener( "statechanged", onStateChanged, false );
    this.task.start();


    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve(this.res);
      }, 200)
    })
    return promise
  }
}

export default html_plus
