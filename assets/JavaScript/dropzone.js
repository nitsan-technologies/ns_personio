import Dropzone from 'dropzone';

window.onload = () => {
  const form = document.querySelector('#apply-form');

  if (document.getElementById('fileProcessLink')) {
    const url = document.getElementById('fileProcessLink').value;
    Dropzone.autoDiscover = false;
    let totalSizeCV = 0;
    let totalSizeOther = 0;
    const respondArr = [];
    const respondArrOther = [];
    let flag = false;
    const cvDropzone = new Dropzone('#document-dropzone-cv', {
      url, // Set the url for your upload script location
      paramName: 'file', // The name that will be used to transfer the file
      filesizeBase: 100000000000,
      maxFilesize: 20, // MB
      uploadMultiple: true,
      addRemoveLinks: true,
      dictTotalUploadMessage: 'Upload size exceeded',
      acceptedFiles:
                '.pdf, .pptx, .xlsx, .docx, .doc, .xls, .ppt, .ods, .odt, .7z, .gz, .rar, .zip, .bmp, .gif, .jpg, .png, .tif, .csv, .txt, .rtf, .mp4, .3gp, .mov, .avi, .wmv',
      accept(file, done) {
        if (totalSizeCV >= (1024999 * this.options.maxFilesize)) {
          // eslint-disable-next-line no-param-reassign
          file.status = Dropzone.CANCELED;
          // eslint-disable-next-line no-underscore-dangle
          this._errorProcessing([file], this.options.dictTotalUploadMessage, null);
        } else {
          done();
        }
      },
      init() {
        let messages = [];
        this.on("addedfile", function (file) {
          totalSizeCV += file.size;
        });
        this.on("removedfile", function (file) {
          if (file.status === 'queued') {
            totalSizeCV -= file.size;
          }
          if (file.upload.progress != 0) {
            totalSizeCV -= file.size;
          }
        });
        this.on('addedfiles', function (file) {
          let errorFlag = false;
          let fileWithError = false;
          let i;
          for (i = 0; i < file.length; i++) {
            if (file[i].status === 'error') {
              fileWithError = true;
            }
          }
          let temp;
          if (errorFlag || fileWithError) {
            messages.forEach((v, k) => {
              if (temp !== v) {
                alert(v);
                messages = [];
                temp = v;
              }
            });
          }
        });

        this.on('complete', (file, response) => {
        });
        this.on('error', function (file, message) {
          messages.push(message);
          totalSizeCV -= file.size;
          this.removeFile(file);
        });
      },
      success(file, response) {
        const jsonResponse = JSON.parse(response);
        if (file.status !== 'error' && jsonResponse.success !== 'false') {
          respondArr.push(JSON.parse(response));
          document.getElementById('dropzone-error').style.display = 'none';
          flag = true;
        }
        if (jsonResponse.success === false) {
          document.getElementById('dropzone-error').style.display = 'block';
          document.getElementById('dropzone-error').innerText = 'Error in CV Upload';
          document.getElementById('document-dropzone-cv').classList.add('error');
        } else {
          document.getElementById('document-dropzone-cv').classList.remove('error');
        }
      },
    });
    cvDropzone.filesize = function (bytes) {
      let selectedSize = 0;
      const units = ['kb', 'mb', 'gb', 'tb', 'b'];

      if (Math.abs(bytes) < this.options.filesizeBase) {
        selectedSize = bytes;
      } else {
        let u = -1;
        do {
          bytes /= this.options.filesizeBase;
          ++u;
        } while (
          Math.abs(bytes) >= this.options.filesizeBase
          && u < units.length - 1
        );

        selectedSize = bytes.toFixed(1);
        selectedUnit = units[u];
      }

      if (selectedSize >= 1073741824) {
        selectedSize = `${(selectedSize / 1073741824).toFixed(2)} GB`;
      } else if (selectedSize >= 1048576) {
        selectedSize = `${(selectedSize / 1048576).toFixed(2)} MB`;
      } else if (selectedSize >= 1024) {
        selectedSize = `${(selectedSize / 1024).toFixed(2)} KB`;
      } else if (selectedSize > 1) {
        selectedSize += ' B';
      } else if (selectedSize == 1) {
        selectedSize += ' byte';
      } else {
        selectedSize = '0 selectedSize';
      }
      return `${selectedSize}`;
    };

    const otherDropzone = new Dropzone('#document-dropzone-other', {
      url, // Set the url for your upload script location
      paramName: 'file', // The name that will be used to transfer the file
      filesizeBase: 100000000000,
      maxFilesize: 20, // MB
      uploadMultiple: true,
      addRemoveLinks: true,
      dictTotalUploadMessage: 'Upload size exceeded',
      acceptedFiles:
          '.pdf, .pptx, .xlsx, .docx, .doc, .xls, .ppt, .ods, .odt, .7z, .gz, .rar, .zip, .bmp, .gif, .jpg, .png, .tif, .csv, .txt, .rtf, .mp4, .3gp, .mov, .avi, .wmv',
      accept(file, done) {
        if (totalSizeOther >= (1024999 * this.options.maxFilesize)) {
          file.status = Dropzone.CANCELED;
          this._errorProcessing([file], this.options.dictTotalUploadMessage, null);
        } else {
          done();
        }
      },
      init() {
        let messages = [];
        this.on("addedfile", function (file) {
          totalSizeOther += file.size;
        });
        this.on("removedfile", function (file) {
          if (file.status === 'queued') {
            totalSizeOther -= file.size;
          }
          if (file.upload.progress != 0) {
            totalSizeOther -= file.size;
          }
        });
        this.on('addedfiles', function (file) {
          let errorFlag = false;
          let fileWithError = false;
          let i;
          for (i = 0; i < file.length; i++) {
            if (file[i].status === 'error') {
              fileWithError = true;
            }
          }
          let temp;
          if (errorFlag || fileWithError) {
            messages.forEach((v, k) => {
              if (temp !== v) {
                alert(v);
                messages = [];
                temp = v;
              }
            });
          }
        });

        this.on('complete', (file, response) => {
        });
        this.on('error', function (file, message) {
          messages.push(message);
          totalSizeOther -= file.size;
          this.removeFile(file);
        });
      },
      success: function (file, response) {
        if (file.status != 'error') {
          respondArrOther.push(JSON.parse(response));
        }
        // document.getElementById('other-upload').setAttribute('value', JSON.parse(response))
      },
    });

    otherDropzone.filesize = function (bytes) {
      let selectedSize = 0;
      const units = ['kb', 'mb', 'gb', 'tb', 'b'];
      if (Math.abs(bytes) < this.options.filesizeBase) {
        selectedSize = bytes;
      } else {
        let u = -1;
        do {
          bytes /= this.options.filesizeBase;
          ++u;
        } while (
          Math.abs(bytes) >= this.options.filesizeBase
          && u < units.length - 1
        );
        selectedSize = bytes.toFixed(1);
        selectedUnit = units[u];
      }

      if (selectedSize >= 1073741824) {
        selectedSize = `${(selectedSize / 1073741824).toFixed(2)} GB`;
      } else if (selectedSize >= 1048576) {
        selectedSize = `${(selectedSize / 1048576).toFixed(2)} MB`;
      } else if (selectedSize >= 1024) {
        selectedSize = `${(selectedSize / 1024).toFixed(2)} KB`;
      } else if (selectedSize > 1) {
        selectedSize += ' B';
      } else if (selectedSize == 1) {
        selectedSize += ' byte';
      } else {
        selectedSize = '0 selectedSize';
      }
      return `${selectedSize}`;
    };
    document.getElementById("apply-form").addEventListener("submit", function (e) {
      // get cv uploaded files and generate json data for multiple files
      var cvFiles = document.getElementById("cv-upload");
      let allValues = [];
      if ((respondArr.length == 0 && flag == false) || (cvDropzone.files.length == 0)) {
        e.preventDefault();
        document.getElementById('dropzone-error').style.display = "block";
        document.getElementById('document-dropzone-cv').classList.add('error');
      }
      else {
        for (let index = 0; index < respondArr.length; index++) {
          allValues += `"${index}"` + ":" + respondArr[index];
          if (index < respondArr.length - 1) {
            allValues += ",";
          }
        }
        cvFiles.setAttribute('value', '{' + allValues + '}');
      }

      var otherFiles = document.getElementById("other-upload");
      let allOtherValues = [];
      if (respondArrOther) {
        for (let i = 0; i < respondArrOther.length; i++) {
          allOtherValues += `"${i}"` + ":" + respondArrOther[i];
          if (i < respondArrOther.length - 1) {
            allOtherValues += ",";
          }
        }
        otherFiles.setAttribute('value', '{' + allOtherValues + '}');
      }
    });
  }
};
