window.onload = () => {
    const form = document.querySelector('#apply-form');

    if (document.getElementById('fileProcessLink')) {
        const url = document.getElementById('fileProcessLink').value;
        console.log(url, "kjbk");
        Dropzone.autoDiscover = false;
        var totalSizeCV = 0;
        var totalSizeOther = 0;
        let responArr = [];
        let responArrOther = [];
        let flag = false;
        let cvDropzone = new Dropzone('#document-dropzone-cv', {
            url: url, // Set the url for your upload script location
            paramName: "file", // The name that will be used to transfer the file
            filesizeBase: 100000000000,
            maxFilesize: 20, // MB
            uploadMultiple: true,
            addRemoveLinks: true,
            dictTotalUploadMessage: 'Upload-Größe überschritten,',
            acceptedFiles:
                '.pdf, .pptx, .xlsx, .docx, .doc, .xls, .ppt, .ods, .odt, .7z, .gz, .rar, .zip, .bmp, .gif, .jpg, .png, .tif, .csv, .txt, .rtf, .mp4, .3gp, .mov, .avi, .wmv',
            accept(file, done) {
                if (totalSizeCV >= (1024999 * this.options.maxFilesize)) {
                    file.status = Dropzone.CANCELED;
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
            success: function (file, response) {
                if (file.status != 'error') {
                    responArr.push(JSON.parse(response));
                }
                document.getElementById('dropzone-error').style.display = "none";
                flag = true;
            }
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
            dictTotalUploadMessage: 'Upload-Größe überschritten,',
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
                    responArrOther.push(JSON.parse(response));
                }
                // document.getElementById('other-upload').setAttribute('value', JSON.parse(response))
            }
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
        // Event listener for form submission
        document.getElementById("apply-form").addEventListener("submit", function (e) {
            // get cv uploaded files and generate json data for multiple files
            var cvFiles = document.getElementById("cv-upload");
            let allValues = [];
            if (responArr.length == 0 && flag == false) {
                e.preventDefault();
                document.getElementById('dropzone-error').style.display = "block";
            }
            else {
                for (let index = 0; index < responArr.length; index++) {
                    allValues += `"${index}"` + ":" + responArr[index];
                    if (index < responArr.length - 1) {
                        allValues += ",";
                    }
                }
                cvFiles.setAttribute('value', '{' + allValues + '}');
            }

            // get other uploaded files and generate json data for multiple files
            var otherFiles = document.getElementById("other-upload");
            let allOtherValues = [];
            if (responArrOther) {
                for (let i = 0; i < responArrOther.length; i++) {
                    allOtherValues += `"${i}"` + ":" + responArrOther[i];
                    if (i < responArrOther.length - 1) {
                        allOtherValues += ",";
                    }
                }
                otherFiles.setAttribute('value', '{' + allOtherValues + '}');
            }
        });
    }
}