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
    cmr.captureImage( ( capturedFile ) => {
        // let promise = new Promise(function (resolve, reject) {
            plus.io.resolveLocalFileSystemURL(capturedFile, (entry) => {
              this.img_path = entry.toLocalURL();
              // resolve(entry.toLocalURL());
            },(error) => {
              // reject(error)
            })
        // })
        // return promise;
      },(error) => {
        console.log(error)
      },
      {resolution:res,format:fmt}
    );
  },

  img_path: '',
  task: null,
  respon: '',

  onStateChanged(upload, status) {
    if ( upload.state == 4 && status == 200 ) {
      // 上传完成
      this.respon = upload.responseText;
      localStorage.setItem("wrct_reg", this.respon)
      console.log(this.respon,"识别结果")
    }
  },

  uploadImg(path,obj) {
    console.log(path, "图片")
    var task = plus.uploader.createUpload( obj.url,  {}, function ( t, status ) {
      // 上传完成
      if ( status == 200 ) {
        // alert( "Upload success: " + t.url );
      } else {
        // alert( "Upload failed: " + status );
      }
    });
    task.addFile( path, {key:"file"} );
    if(obj.params) {
      task.addData( "userName", obj.params.username );
      task.addData( "password", obj.params.password );
    }
    task.addEventListener( "statechanged", this.onStateChanged, false );
    task.start();


    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.res);
      }, 200)
    })
    return promise
  }
}

export default html_plus
