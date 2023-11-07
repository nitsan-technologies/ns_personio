/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/JavaScript/dropzone.js":
/*!***************************************!*\
  !*** ./assets/JavaScript/dropzone.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.mjs");

window.onload = function () {
  var form = document.querySelector('#apply-form');
  if (document.getElementById('fileProcessLink')) {
    var url = document.getElementById('fileProcessLink').value;
    dropzone__WEBPACK_IMPORTED_MODULE_0__["default"].autoDiscover = false;
    var totalSizeCV = 0;
    var totalSizeOther = 0;
    var respondArr = [];
    var respondArrOther = [];
    var flag = false;
    var cvDropzone = new dropzone__WEBPACK_IMPORTED_MODULE_0__["default"]('#document-dropzone-cv', {
      url: url,
      // Set the url for your upload script location
      paramName: 'file',
      // The name that will be used to transfer the file
      filesizeBase: 100000000000,
      maxFilesize: 20,
      // MB
      uploadMultiple: true,
      addRemoveLinks: true,
      dictTotalUploadMessage: 'Upload-Größe überschritten,',
      acceptedFiles: '.pdf, .pptx, .xlsx, .docx, .doc, .xls, .ppt, .ods, .odt, .7z, .gz, .rar, .zip, .bmp, .gif, .jpg, .png, .tif, .csv, .txt, .rtf, .mp4, .3gp, .mov, .avi, .wmv',
      accept: function accept(file, done) {
        if (totalSizeCV >= 1024999 * this.options.maxFilesize) {
          // eslint-disable-next-line no-param-reassign
          file.status = dropzone__WEBPACK_IMPORTED_MODULE_0__["default"].CANCELED;
          // eslint-disable-next-line no-underscore-dangle
          this._errorProcessing([file], this.options.dictTotalUploadMessage, null);
        } else {
          done();
        }
      },
      init: function init() {
        var messages = [];
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
          var errorFlag = false;
          var fileWithError = false;
          var i;
          for (i = 0; i < file.length; i++) {
            if (file[i].status === 'error') {
              fileWithError = true;
            }
          }
          var temp;
          if (errorFlag || fileWithError) {
            messages.forEach(function (v, k) {
              if (temp !== v) {
                alert(v);
                messages = [];
                temp = v;
              }
            });
          }
        });
        this.on('complete', function (file, response) {});
        this.on('error', function (file, message) {
          messages.push(message);
          totalSizeCV -= file.size;
          this.removeFile(file);
        });
      },
      success: function success(file, response) {
        var jsonResponse = JSON.parse(response);
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
      }
    });
    cvDropzone.filesize = function (bytes) {
      var selectedSize = 0;
      var units = ['kb', 'mb', 'gb', 'tb', 'b'];
      if (Math.abs(bytes) < this.options.filesizeBase) {
        selectedSize = bytes;
      } else {
        var u = -1;
        do {
          bytes /= this.options.filesizeBase;
          ++u;
        } while (Math.abs(bytes) >= this.options.filesizeBase && u < units.length - 1);
        selectedSize = bytes.toFixed(1);
        selectedUnit = units[u];
      }
      if (selectedSize >= 1073741824) {
        selectedSize = "".concat((selectedSize / 1073741824).toFixed(2), " GB");
      } else if (selectedSize >= 1048576) {
        selectedSize = "".concat((selectedSize / 1048576).toFixed(2), " MB");
      } else if (selectedSize >= 1024) {
        selectedSize = "".concat((selectedSize / 1024).toFixed(2), " KB");
      } else if (selectedSize > 1) {
        selectedSize += ' B';
      } else if (selectedSize == 1) {
        selectedSize += ' byte';
      } else {
        selectedSize = '0 selectedSize';
      }
      return "".concat(selectedSize);
    };
    var otherDropzone = new dropzone__WEBPACK_IMPORTED_MODULE_0__["default"]('#document-dropzone-other', {
      url: url,
      // Set the url for your upload script location
      paramName: 'file',
      // The name that will be used to transfer the file
      filesizeBase: 100000000000,
      maxFilesize: 20,
      // MB
      uploadMultiple: true,
      addRemoveLinks: true,
      dictTotalUploadMessage: 'Upload-Größe überschritten,',
      acceptedFiles: '.pdf, .pptx, .xlsx, .docx, .doc, .xls, .ppt, .ods, .odt, .7z, .gz, .rar, .zip, .bmp, .gif, .jpg, .png, .tif, .csv, .txt, .rtf, .mp4, .3gp, .mov, .avi, .wmv',
      accept: function accept(file, done) {
        if (totalSizeOther >= 1024999 * this.options.maxFilesize) {
          file.status = dropzone__WEBPACK_IMPORTED_MODULE_0__["default"].CANCELED;
          this._errorProcessing([file], this.options.dictTotalUploadMessage, null);
        } else {
          done();
        }
      },
      init: function init() {
        var messages = [];
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
          var errorFlag = false;
          var fileWithError = false;
          var i;
          for (i = 0; i < file.length; i++) {
            if (file[i].status === 'error') {
              fileWithError = true;
            }
          }
          var temp;
          if (errorFlag || fileWithError) {
            messages.forEach(function (v, k) {
              if (temp !== v) {
                alert(v);
                messages = [];
                temp = v;
              }
            });
          }
        });
        this.on('complete', function (file, response) {});
        this.on('error', function (file, message) {
          messages.push(message);
          totalSizeOther -= file.size;
          this.removeFile(file);
        });
      },
      success: function success(file, response) {
        if (file.status != 'error') {
          respondArrOther.push(JSON.parse(response));
        }
        // document.getElementById('other-upload').setAttribute('value', JSON.parse(response))
      }
    });

    otherDropzone.filesize = function (bytes) {
      var selectedSize = 0;
      var units = ['kb', 'mb', 'gb', 'tb', 'b'];
      if (Math.abs(bytes) < this.options.filesizeBase) {
        selectedSize = bytes;
      } else {
        var u = -1;
        do {
          bytes /= this.options.filesizeBase;
          ++u;
        } while (Math.abs(bytes) >= this.options.filesizeBase && u < units.length - 1);
        selectedSize = bytes.toFixed(1);
        selectedUnit = units[u];
      }
      if (selectedSize >= 1073741824) {
        selectedSize = "".concat((selectedSize / 1073741824).toFixed(2), " GB");
      } else if (selectedSize >= 1048576) {
        selectedSize = "".concat((selectedSize / 1048576).toFixed(2), " MB");
      } else if (selectedSize >= 1024) {
        selectedSize = "".concat((selectedSize / 1024).toFixed(2), " KB");
      } else if (selectedSize > 1) {
        selectedSize += ' B';
      } else if (selectedSize == 1) {
        selectedSize += ' byte';
      } else {
        selectedSize = '0 selectedSize';
      }
      return "".concat(selectedSize);
    };
    document.getElementById("apply-form").addEventListener("submit", function (e) {
      // get cv uploaded files and generate json data for multiple files
      var cvFiles = document.getElementById("cv-upload");
      var allValues = [];
      if (respondArr.length == 0 && flag == false) {
        e.preventDefault();
        document.getElementById('dropzone-error').style.display = "block";
        document.getElementById('document-dropzone-cv').classList.add('error');
      } else {
        for (var index = 0; index < respondArr.length; index++) {
          allValues += "\"".concat(index, "\"") + ":" + respondArr[index];
          if (index < respondArr.length - 1) {
            allValues += ",";
          }
        }
        cvFiles.setAttribute('value', '{' + allValues + '}');
      }
      var otherFiles = document.getElementById("other-upload");
      var allOtherValues = [];
      if (respondArrOther) {
        for (var i = 0; i < respondArrOther.length; i++) {
          allOtherValues += "\"".concat(i, "\"") + ":" + respondArrOther[i];
          if (i < respondArrOther.length - 1) {
            allOtherValues += ",";
          }
        }
        otherFiles.setAttribute('value', '{' + allOtherValues + '}');
      }
    });
  }
};

/***/ }),

/***/ "./assets/JavaScript/jobs-filter.js":
/*!******************************************!*\
  !*** ./assets/JavaScript/jobs-filter.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var isotope_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isotope-layout */ "./node_modules/isotope-layout/js/isotope.js");
/* harmony import */ var isotope_layout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isotope_layout__WEBPACK_IMPORTED_MODULE_0__);

var iso = null;
function isotopFilter() {
  var jobsData = document.querySelectorAll('.job-data');
  if (jobsData) {
    jobsData.forEach(function ($grid) {
      if ($grid.classList.contains('ns-personio-jobs--list')) {
        if (iso) {
          iso.destroy();
        }
        iso = new (isotope_layout__WEBPACK_IMPORTED_MODULE_0___default())($grid, {
          itemSelector: '.ns-personio-job-item',
          layoutMode: 'packery',
          percentPosition: true,
          packery: {
            initLayout: false,
            percentPosition: true
          }
        });
      } else if ($grid.classList.contains('ns-personio-jobs--masonry')) {
        if (iso) {
          iso.destroy();
        }
        iso = new (isotope_layout__WEBPACK_IMPORTED_MODULE_0___default())($grid, {
          itemSelector: '.ns-personio-job-item',
          layoutMode: 'masonry'
        });
      }
    });
    var selectedCat = '';
    var jobsFilter = document.querySelectorAll('.jobs-tabs a');
    if (jobsFilter) {
      jobsFilter.forEach(function ($catBtn) {
        $catBtn.addEventListener('click', function (e) {
          e.preventDefault();
          selectedCat = $catBtn.getAttribute('data-filter');
          if (selectedCat === '*') {
            selectedCat = '';
          } else {
            selectedCat = $catBtn.getAttribute('data-filter');
          }
          jobsFilter.forEach(function ($btn) {
            $btn.classList.remove('active');
          });
          $catBtn.classList.add('active');
          iso.arrange({
            filter: selectedCat
          });
        });
      });
    }
  }
}
isotopFilter();
var filterButton = document.getElementById('job-filter');
var filterForm = document.getElementById('filterForm');
var jobs = document.getElementById('jobs-results');
if (filterButton) {
  filterButton.addEventListener('click', function (e) {
    e.preventDefault();
    var data = new FormData(filterForm);
    var url = filterForm.getAttribute('action');
    var http = new XMLHttpRequest();
    http.open('POST', url, true);
    http.onreadystatechange = function () {
      if (http.readyState === 4 && http.status === 200) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(http.responseText, 'text/html');
        // Get the new items
        // Render the items
        if (doc.getElementById('jobs-tabs')) {
          document.getElementById('jobs-tabs').innerHTML = doc.getElementById('jobs-tabs').innerHTML;
        }
        jobs.innerHTML = doc.getElementById('jobs-results').innerHTML;
        // ajaxPagination();
        isotopFilter();
      }
    };
    http.send(data);
  });
}

/***/ }),

/***/ "./assets/JavaScript/jobs.js":
/*!***********************************!*\
  !*** ./assets/JavaScript/jobs.js ***!
  \***********************************/
/***/ (() => {

var mainForm = document.querySelectorAll('.form');
if (mainForm.length) {
  mainForm.forEach(function (form) {
    var formInputRequired = form.querySelectorAll('.form-control');
    var formButton = form.querySelector('.ns-personio-btn[type="submit"]');
    formInputRequired.forEach(function (input) {
      if (formButton) {
        formButton.addEventListener('click', function () {
          if (!input.value) {
            input.classList.add('error');
            input.closest('.form-group').classList.add('form-group-error');
            if (input.nextElementSibling) {
              input.nextElementSibling.classList.add('invalid-feedback');
            }
            if (input.closest('.dropzone')) {
              input.closest('.dropzone').classList.add('form-group-error');
            }
          }
        });
      }
      input.addEventListener('blur', function () {
        if (input.value) {
          input.classList.remove('error');
          if (input.nextElementSibling) {
            input.nextElementSibling.classList.remove('invalid-feedback');
          }
          input.closest('.form-group').classList.remove('form-group-error');
          input.classList.add('success');
          input.closest('.form-group').classList.add('form-group-success');
        } else {
          input.classList.add('error');
          input.closest('.form-group').classList.add('form-group-error');
          input.classList.remove('success');
          input.closest('.form-group').classList.remove('form-group-success');
        }
      });
    });
    form.addEventListener('submit', function (event) {
      form.classList.add('was-validated');
      if (document.getElementById('document-dropzone-cv').classList.contains('error')) {
        form.classList.remove('was-validated');
        event.preventDefault();
        event.stopPropagation();
      }
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
    }, false);
  });
}

// Email Validation

var inputEmail = document.querySelectorAll("[type='email']");
var isEmpty = function isEmpty(str) {
  return !str.trim().length;
};
var validReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var checkEmail = function checkEmail($val) {
  if ($val.match(validReg)) {
    return true;
  }
};
if (inputEmail) {
  inputEmail.forEach(function ($email) {
    $email.addEventListener('blur', function () {
      if (!checkEmail($email.value)) {
        $email.closest('.form-group').classList.add('form-group-error');
        $email.closest('.form-group').classList.add('field-message');
      } else {
        $email.closest('.form-group').classList.remove('form-group-error');
        $email.closest('.form-group').classList.remove('field-message');
      }
      if (!isEmpty($email.value)) {
        $email.closest('.form-group').classList.remove('form-group-error');
      } else {
        $email.closest('.form-group').classList.remove('field-message');
      }
    });
  });
}

// Phone Validation
var inputPhone = document.querySelectorAll("[type='tel']");
var isEmptyPhone = function isEmptyPhone(str) {
  return !str.trim().length;
};
var validRegPhone = /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/;
var checkPhone = function checkPhone($val) {
  if ($val.match(validRegPhone)) {
    return true;
  }
};
if (inputPhone) {
  inputPhone.forEach(function ($phone) {
    $phone.addEventListener('blur', function () {
      if (!checkPhone($phone.value)) {
        $phone.closest('.form-group').classList.add('field-message');
      } else {
        $phone.closest('.form-group').classList.remove('field-message');
      }
      if (!isEmptyPhone($phone.value)) {
        $phone.closest('.form-group').classList.remove('form-group-error');
      } else {
        $phone.closest('.form-group').classList.add('field-message');
      }
    });
  });
}

/***/ }),

/***/ "./node_modules/desandro-matches-selector/matches-selector.js":
/*!********************************************************************!*\
  !*** ./node_modules/desandro-matches-selector/matches-selector.js ***!
  \********************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * matchesSelector v2.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  /*global define: false, module: false */
  'use strict';
  // universal module definition
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory() {
  'use strict';

  var matchesMethod = ( function() {
    var ElemProto = window.Element.prototype;
    // check for the standard method name first
    if ( ElemProto.matches ) {
      return 'matches';
    }
    // check un-prefixed
    if ( ElemProto.matchesSelector ) {
      return 'matchesSelector';
    }
    // check vendor prefixes
    var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];

    for ( var i=0; i < prefixes.length; i++ ) {
      var prefix = prefixes[i];
      var method = prefix + 'MatchesSelector';
      if ( ElemProto[ method ] ) {
        return method;
      }
    }
  })();

  return function matchesSelector( elem, selector ) {
    return elem[ matchesMethod ]( selector );
  };

}));


/***/ }),

/***/ "./node_modules/fizzy-ui-utils/utils.js":
/*!**********************************************!*\
  !*** ./node_modules/fizzy-ui-utils/utils.js ***!
  \**********************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Fizzy UI utils v2.0.7
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */

  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(/*! desandro-matches-selector/matches-selector */ "./node_modules/desandro-matches-selector/matches-selector.js")
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( matchesSelector ) {
      return factory( window, matchesSelector );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( window, matchesSelector ) {

'use strict';

var utils = {};

// ----- extend ----- //

// extends objects
utils.extend = function( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
};

// ----- modulo ----- //

utils.modulo = function( num, div ) {
  return ( ( num % div ) + div ) % div;
};

// ----- makeArray ----- //

var arraySlice = Array.prototype.slice;

// turn element or nodeList into an array
utils.makeArray = function( obj ) {
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    return obj;
  }
  // return empty array if undefined or null. #6
  if ( obj === null || obj === undefined ) {
    return [];
  }

  var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
  if ( isArrayLike ) {
    // convert nodeList to array
    return arraySlice.call( obj );
  }

  // array of single index
  return [ obj ];
};

// ----- removeFrom ----- //

utils.removeFrom = function( ary, obj ) {
  var index = ary.indexOf( obj );
  if ( index != -1 ) {
    ary.splice( index, 1 );
  }
};

// ----- getParent ----- //

utils.getParent = function( elem, selector ) {
  while ( elem.parentNode && elem != document.body ) {
    elem = elem.parentNode;
    if ( matchesSelector( elem, selector ) ) {
      return elem;
    }
  }
};

// ----- getQueryElement ----- //

// use element as selector string
utils.getQueryElement = function( elem ) {
  if ( typeof elem == 'string' ) {
    return document.querySelector( elem );
  }
  return elem;
};

// ----- handleEvent ----- //

// enable .ontype to trigger from .addEventListener( elem, 'type' )
utils.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

// ----- filterFindElements ----- //

utils.filterFindElements = function( elems, selector ) {
  // make array of elems
  elems = utils.makeArray( elems );
  var ffElems = [];

  elems.forEach( function( elem ) {
    // check that elem is an actual element
    if ( !( elem instanceof HTMLElement ) ) {
      return;
    }
    // add elem if no selector
    if ( !selector ) {
      ffElems.push( elem );
      return;
    }
    // filter & find items if we have a selector
    // filter
    if ( matchesSelector( elem, selector ) ) {
      ffElems.push( elem );
    }
    // find children
    var childElems = elem.querySelectorAll( selector );
    // concat childElems to filterFound array
    for ( var i=0; i < childElems.length; i++ ) {
      ffElems.push( childElems[i] );
    }
  });

  return ffElems;
};

// ----- debounceMethod ----- //

utils.debounceMethod = function( _class, methodName, threshold ) {
  threshold = threshold || 100;
  // original method
  var method = _class.prototype[ methodName ];
  var timeoutName = methodName + 'Timeout';

  _class.prototype[ methodName ] = function() {
    var timeout = this[ timeoutName ];
    clearTimeout( timeout );

    var args = arguments;
    var _this = this;
    this[ timeoutName ] = setTimeout( function() {
      method.apply( _this, args );
      delete _this[ timeoutName ];
    }, threshold );
  };
};

// ----- docReady ----- //

utils.docReady = function( callback ) {
  var readyState = document.readyState;
  if ( readyState == 'complete' || readyState == 'interactive' ) {
    // do async to allow for other scripts to run. metafizzy/flickity#441
    setTimeout( callback );
  } else {
    document.addEventListener( 'DOMContentLoaded', callback );
  }
};

// ----- htmlInit ----- //

// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
utils.toDashed = function( str ) {
  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
    return $1 + '-' + $2;
  }).toLowerCase();
};

var console = window.console;
/**
 * allow user to initialize classes via [data-namespace] or .js-namespace class
 * htmlInit( Widget, 'widgetName' )
 * options are parsed from data-namespace-options
 */
utils.htmlInit = function( WidgetClass, namespace ) {
  utils.docReady( function() {
    var dashedNamespace = utils.toDashed( namespace );
    var dataAttr = 'data-' + dashedNamespace;
    var dataAttrElems = document.querySelectorAll( '[' + dataAttr + ']' );
    var jsDashElems = document.querySelectorAll( '.js-' + dashedNamespace );
    var elems = utils.makeArray( dataAttrElems )
      .concat( utils.makeArray( jsDashElems ) );
    var dataOptionsAttr = dataAttr + '-options';
    var jQuery = window.jQuery;

    elems.forEach( function( elem ) {
      var attr = elem.getAttribute( dataAttr ) ||
        elem.getAttribute( dataOptionsAttr );
      var options;
      try {
        options = attr && JSON.parse( attr );
      } catch ( error ) {
        // log error, do not initialize
        if ( console ) {
          console.error( 'Error parsing ' + dataAttr + ' on ' + elem.className +
          ': ' + error );
        }
        return;
      }
      // initialize
      var instance = new WidgetClass( elem, options );
      // make available via $().data('namespace')
      if ( jQuery ) {
        jQuery.data( elem, namespace, instance );
      }
    });

  });
};

// -----  ----- //

return utils;

}));


/***/ }),

/***/ "./node_modules/get-size/get-size.js":
/*!*******************************************!*\
  !*** ./node_modules/get-size/get-size.js ***!
  \*******************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */
/* globals console: false */

( function( window, factory ) {
  /* jshint strict: false */ /* globals define, module */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

})( window, function factory() {
'use strict';

// -------------------------- helpers -------------------------- //

// get a number from a string, not a percentage
function getStyleSize( value ) {
  var num = parseFloat( value );
  // not a percent like '100%', and a number
  var isValid = value.indexOf('%') == -1 && !isNaN( num );
  return isValid && num;
}

function noop() {}

var logError = typeof console == 'undefined' ? noop :
  function( message ) {
    console.error( message );
  };

// -------------------------- measurements -------------------------- //

var measurements = [
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'borderLeftWidth',
  'borderRightWidth',
  'borderTopWidth',
  'borderBottomWidth'
];

var measurementsLength = measurements.length;

function getZeroSize() {
  var size = {
    width: 0,
    height: 0,
    innerWidth: 0,
    innerHeight: 0,
    outerWidth: 0,
    outerHeight: 0
  };
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    size[ measurement ] = 0;
  }
  return size;
}

// -------------------------- getStyle -------------------------- //

/**
 * getStyle, get style of element, check for Firefox bug
 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */
function getStyle( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    logError( 'Style returned ' + style +
      '. Are you running this code in a hidden iframe on Firefox? ' +
      'See https://bit.ly/getsizebug1' );
  }
  return style;
}

// -------------------------- setup -------------------------- //

var isSetup = false;

var isBoxSizeOuter;

/**
 * setup
 * check isBoxSizerOuter
 * do on first getSize() rather than on page load for Firefox bug
 */
function setup() {
  // setup once
  if ( isSetup ) {
    return;
  }
  isSetup = true;

  // -------------------------- box sizing -------------------------- //

  /**
   * Chrome & Safari measure the outer-width on style.width on border-box elems
   * IE11 & Firefox<29 measures the inner-width
   */
  var div = document.createElement('div');
  div.style.width = '200px';
  div.style.padding = '1px 2px 3px 4px';
  div.style.borderStyle = 'solid';
  div.style.borderWidth = '1px 2px 3px 4px';
  div.style.boxSizing = 'border-box';

  var body = document.body || document.documentElement;
  body.appendChild( div );
  var style = getStyle( div );
  // round value for browser zoom. desandro/masonry#928
  isBoxSizeOuter = Math.round( getStyleSize( style.width ) ) == 200;
  getSize.isBoxSizeOuter = isBoxSizeOuter;

  body.removeChild( div );
}

// -------------------------- getSize -------------------------- //

function getSize( elem ) {
  setup();

  // use querySeletor if elem is string
  if ( typeof elem == 'string' ) {
    elem = document.querySelector( elem );
  }

  // do not proceed on non-objects
  if ( !elem || typeof elem != 'object' || !elem.nodeType ) {
    return;
  }

  var style = getStyle( elem );

  // if hidden, everything is 0
  if ( style.display == 'none' ) {
    return getZeroSize();
  }

  var size = {};
  size.width = elem.offsetWidth;
  size.height = elem.offsetHeight;

  var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';

  // get all measurements
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    var value = style[ measurement ];
    var num = parseFloat( value );
    // any 'auto', 'medium' value will be 0
    size[ measurement ] = !isNaN( num ) ? num : 0;
  }

  var paddingWidth = size.paddingLeft + size.paddingRight;
  var paddingHeight = size.paddingTop + size.paddingBottom;
  var marginWidth = size.marginLeft + size.marginRight;
  var marginHeight = size.marginTop + size.marginBottom;
  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
  var borderHeight = size.borderTopWidth + size.borderBottomWidth;

  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

  // overwrite width and height if we can get it from style
  var styleWidth = getStyleSize( style.width );
  if ( styleWidth !== false ) {
    size.width = styleWidth +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
  }

  var styleHeight = getStyleSize( style.height );
  if ( styleHeight !== false ) {
    size.height = styleHeight +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
  }

  size.innerWidth = size.width - ( paddingWidth + borderWidth );
  size.innerHeight = size.height - ( paddingHeight + borderHeight );

  size.outerWidth = size.width + marginWidth;
  size.outerHeight = size.height + marginHeight;

  return size;
}

return getSize;

});


/***/ }),

/***/ "./node_modules/isotope-layout/js/isotope.js":
/*!***************************************************!*\
  !*** ./node_modules/isotope-layout/js/isotope.js ***!
  \***************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Isotope v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(/*! outlayer/outlayer */ "./node_modules/outlayer/outlayer.js"),
        __webpack_require__(/*! get-size/get-size */ "./node_modules/get-size/get-size.js"),
        __webpack_require__(/*! desandro-matches-selector/matches-selector */ "./node_modules/desandro-matches-selector/matches-selector.js"),
        __webpack_require__(/*! fizzy-ui-utils/utils */ "./node_modules/fizzy-ui-utils/utils.js"),
        __webpack_require__(/*! ./item */ "./node_modules/isotope-layout/js/item.js"),
        __webpack_require__(/*! ./layout-mode */ "./node_modules/isotope-layout/js/layout-mode.js"),
        // include default layout modes
        __webpack_require__(/*! ./layout-modes/masonry */ "./node_modules/isotope-layout/js/layout-modes/masonry.js"),
        __webpack_require__(/*! ./layout-modes/fit-rows */ "./node_modules/isotope-layout/js/layout-modes/fit-rows.js"),
        __webpack_require__(/*! ./layout-modes/vertical */ "./node_modules/isotope-layout/js/layout-modes/vertical.js")
      ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( Outlayer, getSize, matchesSelector, utils, Item, LayoutMode ) {
        return factory( window, Outlayer, getSize, matchesSelector, utils, Item, LayoutMode );
      }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( window, Outlayer, getSize, matchesSelector, utils,
  Item, LayoutMode ) {

'use strict';

// -------------------------- vars -------------------------- //

var jQuery = window.jQuery;

// -------------------------- helpers -------------------------- //

var trim = String.prototype.trim ?
  function( str ) {
    return str.trim();
  } :
  function( str ) {
    return str.replace( /^\s+|\s+$/g, '' );
  };

// -------------------------- isotopeDefinition -------------------------- //

  // create an Outlayer layout class
  var Isotope = Outlayer.create( 'isotope', {
    layoutMode: 'masonry',
    isJQueryFiltering: true,
    sortAscending: true
  });

  Isotope.Item = Item;
  Isotope.LayoutMode = LayoutMode;

  var proto = Isotope.prototype;

  proto._create = function() {
    this.itemGUID = 0;
    // functions that sort items
    this._sorters = {};
    this._getSorters();
    // call super
    Outlayer.prototype._create.call( this );

    // create layout modes
    this.modes = {};
    // start filteredItems with all items
    this.filteredItems = this.items;
    // keep of track of sortBys
    this.sortHistory = [ 'original-order' ];
    // create from registered layout modes
    for ( var name in LayoutMode.modes ) {
      this._initLayoutMode( name );
    }
  };

  proto.reloadItems = function() {
    // reset item ID counter
    this.itemGUID = 0;
    // call super
    Outlayer.prototype.reloadItems.call( this );
  };

  proto._itemize = function() {
    var items = Outlayer.prototype._itemize.apply( this, arguments );
    // assign ID for original-order
    for ( var i=0; i < items.length; i++ ) {
      var item = items[i];
      item.id = this.itemGUID++;
    }
    this._updateItemsSortData( items );
    return items;
  };


  // -------------------------- layout -------------------------- //

  proto._initLayoutMode = function( name ) {
    var Mode = LayoutMode.modes[ name ];
    // set mode options
    // HACK extend initial options, back-fill in default options
    var initialOpts = this.options[ name ] || {};
    this.options[ name ] = Mode.options ?
      utils.extend( Mode.options, initialOpts ) : initialOpts;
    // init layout mode instance
    this.modes[ name ] = new Mode( this );
  };


  proto.layout = function() {
    // if first time doing layout, do all magic
    if ( !this._isLayoutInited && this._getOption('initLayout') ) {
      this.arrange();
      return;
    }
    this._layout();
  };

  // private method to be used in layout() & magic()
  proto._layout = function() {
    // don't animate first layout
    var isInstant = this._getIsInstant();
    // layout flow
    this._resetLayout();
    this._manageStamps();
    this.layoutItems( this.filteredItems, isInstant );

    // flag for initalized
    this._isLayoutInited = true;
  };

  // filter + sort + layout
  proto.arrange = function( opts ) {
    // set any options pass
    this.option( opts );
    this._getIsInstant();
    // filter, sort, and layout

    // filter
    var filtered = this._filter( this.items );
    this.filteredItems = filtered.matches;

    this._bindArrangeComplete();

    if ( this._isInstant ) {
      this._noTransition( this._hideReveal, [ filtered ] );
    } else {
      this._hideReveal( filtered );
    }

    this._sort();
    this._layout();
  };
  // alias to _init for main plugin method
  proto._init = proto.arrange;

  proto._hideReveal = function( filtered ) {
    this.reveal( filtered.needReveal );
    this.hide( filtered.needHide );
  };

  // HACK
  // Don't animate/transition first layout
  // Or don't animate/transition other layouts
  proto._getIsInstant = function() {
    var isLayoutInstant = this._getOption('layoutInstant');
    var isInstant = isLayoutInstant !== undefined ? isLayoutInstant :
      !this._isLayoutInited;
    this._isInstant = isInstant;
    return isInstant;
  };

  // listen for layoutComplete, hideComplete and revealComplete
  // to trigger arrangeComplete
  proto._bindArrangeComplete = function() {
    // listen for 3 events to trigger arrangeComplete
    var isLayoutComplete, isHideComplete, isRevealComplete;
    var _this = this;
    function arrangeParallelCallback() {
      if ( isLayoutComplete && isHideComplete && isRevealComplete ) {
        _this.dispatchEvent( 'arrangeComplete', null, [ _this.filteredItems ] );
      }
    }
    this.once( 'layoutComplete', function() {
      isLayoutComplete = true;
      arrangeParallelCallback();
    });
    this.once( 'hideComplete', function() {
      isHideComplete = true;
      arrangeParallelCallback();
    });
    this.once( 'revealComplete', function() {
      isRevealComplete = true;
      arrangeParallelCallback();
    });
  };

  // -------------------------- filter -------------------------- //

  proto._filter = function( items ) {
    var filter = this.options.filter;
    filter = filter || '*';
    var matches = [];
    var hiddenMatched = [];
    var visibleUnmatched = [];

    var test = this._getFilterTest( filter );

    // test each item
    for ( var i=0; i < items.length; i++ ) {
      var item = items[i];
      if ( item.isIgnored ) {
        continue;
      }
      // add item to either matched or unmatched group
      var isMatched = test( item );
      // item.isFilterMatched = isMatched;
      // add to matches if its a match
      if ( isMatched ) {
        matches.push( item );
      }
      // add to additional group if item needs to be hidden or revealed
      if ( isMatched && item.isHidden ) {
        hiddenMatched.push( item );
      } else if ( !isMatched && !item.isHidden ) {
        visibleUnmatched.push( item );
      }
    }

    // return collections of items to be manipulated
    return {
      matches: matches,
      needReveal: hiddenMatched,
      needHide: visibleUnmatched
    };
  };

  // get a jQuery, function, or a matchesSelector test given the filter
  proto._getFilterTest = function( filter ) {
    if ( jQuery && this.options.isJQueryFiltering ) {
      // use jQuery
      return function( item ) {
        return jQuery( item.element ).is( filter );
      };
    }
    if ( typeof filter == 'function' ) {
      // use filter as function
      return function( item ) {
        return filter( item.element );
      };
    }
    // default, use filter as selector string
    return function( item ) {
      return matchesSelector( item.element, filter );
    };
  };

  // -------------------------- sorting -------------------------- //

  /**
   * @params {Array} elems
   * @public
   */
  proto.updateSortData = function( elems ) {
    // get items
    var items;
    if ( elems ) {
      elems = utils.makeArray( elems );
      items = this.getItems( elems );
    } else {
      // update all items if no elems provided
      items = this.items;
    }

    this._getSorters();
    this._updateItemsSortData( items );
  };

  proto._getSorters = function() {
    var getSortData = this.options.getSortData;
    for ( var key in getSortData ) {
      var sorter = getSortData[ key ];
      this._sorters[ key ] = mungeSorter( sorter );
    }
  };

  /**
   * @params {Array} items - of Isotope.Items
   * @private
   */
  proto._updateItemsSortData = function( items ) {
    // do not update if no items
    var len = items && items.length;

    for ( var i=0; len && i < len; i++ ) {
      var item = items[i];
      item.updateSortData();
    }
  };

  // ----- munge sorter ----- //

  // encapsulate this, as we just need mungeSorter
  // other functions in here are just for munging
  var mungeSorter = ( function() {
    // add a magic layer to sorters for convienent shorthands
    // `.foo-bar` will use the text of .foo-bar querySelector
    // `[foo-bar]` will use attribute
    // you can also add parser
    // `.foo-bar parseInt` will parse that as a number
    function mungeSorter( sorter ) {
      // if not a string, return function or whatever it is
      if ( typeof sorter != 'string' ) {
        return sorter;
      }
      // parse the sorter string
      var args = trim( sorter ).split(' ');
      var query = args[0];
      // check if query looks like [an-attribute]
      var attrMatch = query.match( /^\[(.+)\]$/ );
      var attr = attrMatch && attrMatch[1];
      var getValue = getValueGetter( attr, query );
      // use second argument as a parser
      var parser = Isotope.sortDataParsers[ args[1] ];
      // parse the value, if there was a parser
      sorter = parser ? function( elem ) {
        return elem && parser( getValue( elem ) );
      } :
      // otherwise just return value
      function( elem ) {
        return elem && getValue( elem );
      };

      return sorter;
    }

    // get an attribute getter, or get text of the querySelector
    function getValueGetter( attr, query ) {
      // if query looks like [foo-bar], get attribute
      if ( attr ) {
        return function getAttribute( elem ) {
          return elem.getAttribute( attr );
        };
      }

      // otherwise, assume its a querySelector, and get its text
      return function getChildText( elem ) {
        var child = elem.querySelector( query );
        return child && child.textContent;
      };
    }

    return mungeSorter;
  })();

  // parsers used in getSortData shortcut strings
  Isotope.sortDataParsers = {
    'parseInt': function( val ) {
      return parseInt( val, 10 );
    },
    'parseFloat': function( val ) {
      return parseFloat( val );
    }
  };

  // ----- sort method ----- //

  // sort filteredItem order
  proto._sort = function() {
    if ( !this.options.sortBy ) {
      return;
    }
    // keep track of sortBy History
    var sortBys = utils.makeArray( this.options.sortBy );
    if ( !this._getIsSameSortBy( sortBys ) ) {
      // concat all sortBy and sortHistory, add to front, oldest goes in last
      this.sortHistory = sortBys.concat( this.sortHistory );
    }
    // sort magic
    var itemSorter = getItemSorter( this.sortHistory, this.options.sortAscending );
    this.filteredItems.sort( itemSorter );
  };

  // check if sortBys is same as start of sortHistory
  proto._getIsSameSortBy = function( sortBys ) {
    for ( var i=0; i < sortBys.length; i++ ) {
      if ( sortBys[i] != this.sortHistory[i] ) {
        return false;
      }
    }
    return true;
  };

  // returns a function used for sorting
  function getItemSorter( sortBys, sortAsc ) {
    return function sorter( itemA, itemB ) {
      // cycle through all sortKeys
      for ( var i = 0; i < sortBys.length; i++ ) {
        var sortBy = sortBys[i];
        var a = itemA.sortData[ sortBy ];
        var b = itemB.sortData[ sortBy ];
        if ( a > b || a < b ) {
          // if sortAsc is an object, use the value given the sortBy key
          var isAscending = sortAsc[ sortBy ] !== undefined ? sortAsc[ sortBy ] : sortAsc;
          var direction = isAscending ? 1 : -1;
          return ( a > b ? 1 : -1 ) * direction;
        }
      }
      return 0;
    };
  }

  // -------------------------- methods -------------------------- //

  // get layout mode
  proto._mode = function() {
    var layoutMode = this.options.layoutMode;
    var mode = this.modes[ layoutMode ];
    if ( !mode ) {
      // TODO console.error
      throw new Error( 'No layout mode: ' + layoutMode );
    }
    // HACK sync mode's options
    // any options set after init for layout mode need to be synced
    mode.options = this.options[ layoutMode ];
    return mode;
  };

  proto._resetLayout = function() {
    // trigger original reset layout
    Outlayer.prototype._resetLayout.call( this );
    this._mode()._resetLayout();
  };

  proto._getItemLayoutPosition = function( item  ) {
    return this._mode()._getItemLayoutPosition( item );
  };

  proto._manageStamp = function( stamp ) {
    this._mode()._manageStamp( stamp );
  };

  proto._getContainerSize = function() {
    return this._mode()._getContainerSize();
  };

  proto.needsResizeLayout = function() {
    return this._mode().needsResizeLayout();
  };

  // -------------------------- adding & removing -------------------------- //

  // HEADS UP overwrites default Outlayer appended
  proto.appended = function( elems ) {
    var items = this.addItems( elems );
    if ( !items.length ) {
      return;
    }
    // filter, layout, reveal new items
    var filteredItems = this._filterRevealAdded( items );
    // add to filteredItems
    this.filteredItems = this.filteredItems.concat( filteredItems );
  };

  // HEADS UP overwrites default Outlayer prepended
  proto.prepended = function( elems ) {
    var items = this._itemize( elems );
    if ( !items.length ) {
      return;
    }
    // start new layout
    this._resetLayout();
    this._manageStamps();
    // filter, layout, reveal new items
    var filteredItems = this._filterRevealAdded( items );
    // layout previous items
    this.layoutItems( this.filteredItems );
    // add to items and filteredItems
    this.filteredItems = filteredItems.concat( this.filteredItems );
    this.items = items.concat( this.items );
  };

  proto._filterRevealAdded = function( items ) {
    var filtered = this._filter( items );
    this.hide( filtered.needHide );
    // reveal all new items
    this.reveal( filtered.matches );
    // layout new items, no transition
    this.layoutItems( filtered.matches, true );
    return filtered.matches;
  };

  /**
   * Filter, sort, and layout newly-appended item elements
   * @param {Array or NodeList or Element} elems
   */
  proto.insert = function( elems ) {
    var items = this.addItems( elems );
    if ( !items.length ) {
      return;
    }
    // append item elements
    var i, item;
    var len = items.length;
    for ( i=0; i < len; i++ ) {
      item = items[i];
      this.element.appendChild( item.element );
    }
    // filter new stuff
    var filteredInsertItems = this._filter( items ).matches;
    // set flag
    for ( i=0; i < len; i++ ) {
      items[i].isLayoutInstant = true;
    }
    this.arrange();
    // reset flag
    for ( i=0; i < len; i++ ) {
      delete items[i].isLayoutInstant;
    }
    this.reveal( filteredInsertItems );
  };

  var _remove = proto.remove;
  proto.remove = function( elems ) {
    elems = utils.makeArray( elems );
    var removeItems = this.getItems( elems );
    // do regular thing
    _remove.call( this, elems );
    // bail if no items to remove
    var len = removeItems && removeItems.length;
    // remove elems from filteredItems
    for ( var i=0; len && i < len; i++ ) {
      var item = removeItems[i];
      // remove item from collection
      utils.removeFrom( this.filteredItems, item );
    }
  };

  proto.shuffle = function() {
    // update random sortData
    for ( var i=0; i < this.items.length; i++ ) {
      var item = this.items[i];
      item.sortData.random = Math.random();
    }
    this.options.sortBy = 'random';
    this._sort();
    this._layout();
  };

  /**
   * trigger fn without transition
   * kind of hacky to have this in the first place
   * @param {Function} fn
   * @param {Array} args
   * @returns ret
   * @private
   */
  proto._noTransition = function( fn, args ) {
    // save transitionDuration before disabling
    var transitionDuration = this.options.transitionDuration;
    // disable transition
    this.options.transitionDuration = 0;
    // do it
    var returnValue = fn.apply( this, args );
    // re-enable transition for reveal
    this.options.transitionDuration = transitionDuration;
    return returnValue;
  };

  // ----- helper methods ----- //

  /**
   * getter method for getting filtered item elements
   * @returns {Array} elems - collection of item elements
   */
  proto.getFilteredItemElements = function() {
    return this.filteredItems.map( function( item ) {
      return item.element;
    });
  };

  // -----  ----- //

  return Isotope;

}));


/***/ }),

/***/ "./node_modules/isotope-layout/js/item.js":
/*!************************************************!*\
  !*** ./node_modules/isotope-layout/js/item.js ***!
  \************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Isotope Item
**/

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(/*! outlayer/outlayer */ "./node_modules/outlayer/outlayer.js")
      ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( Outlayer ) {
'use strict';

// -------------------------- Item -------------------------- //

// sub-class Outlayer Item
function Item() {
  Outlayer.Item.apply( this, arguments );
}

var proto = Item.prototype = Object.create( Outlayer.Item.prototype );

var _create = proto._create;
proto._create = function() {
  // assign id, used for original-order sorting
  this.id = this.layout.itemGUID++;
  _create.call( this );
  this.sortData = {};
};

proto.updateSortData = function() {
  if ( this.isIgnored ) {
    return;
  }
  // default sorters
  this.sortData.id = this.id;
  // for backward compatibility
  this.sortData['original-order'] = this.id;
  this.sortData.random = Math.random();
  // go thru getSortData obj and apply the sorters
  var getSortData = this.layout.options.getSortData;
  var sorters = this.layout._sorters;
  for ( var key in getSortData ) {
    var sorter = sorters[ key ];
    this.sortData[ key ] = sorter( this.element, this );
  }
};

var _destroy = proto.destroy;
proto.destroy = function() {
  // call super
  _destroy.apply( this, arguments );
  // reset display, #741
  this.css({
    display: ''
  });
};

return Item;

}));


/***/ }),

/***/ "./node_modules/isotope-layout/js/layout-mode.js":
/*!*******************************************************!*\
  !*** ./node_modules/isotope-layout/js/layout-mode.js ***!
  \*******************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Isotope LayoutMode
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(/*! get-size/get-size */ "./node_modules/get-size/get-size.js"),
        __webpack_require__(/*! outlayer/outlayer */ "./node_modules/outlayer/outlayer.js")
      ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( getSize, Outlayer ) {
  'use strict';

  // layout mode class
  function LayoutMode( isotope ) {
    this.isotope = isotope;
    // link properties
    if ( isotope ) {
      this.options = isotope.options[ this.namespace ];
      this.element = isotope.element;
      this.items = isotope.filteredItems;
      this.size = isotope.size;
    }
  }

  var proto = LayoutMode.prototype;

  /**
   * some methods should just defer to default Outlayer method
   * and reference the Isotope instance as `this`
  **/
  var facadeMethods = [
    '_resetLayout',
    '_getItemLayoutPosition',
    '_manageStamp',
    '_getContainerSize',
    '_getElementOffset',
    'needsResizeLayout',
    '_getOption'
  ];

  facadeMethods.forEach( function( methodName ) {
    proto[ methodName ] = function() {
      return Outlayer.prototype[ methodName ].apply( this.isotope, arguments );
    };
  });

  // -----  ----- //

  // for horizontal layout modes, check vertical size
  proto.needsVerticalResizeLayout = function() {
    // don't trigger if size did not change
    var size = getSize( this.isotope.element );
    // check that this.size and size are there
    // IE8 triggers resize on body size change, so they might not be
    var hasSizes = this.isotope.size && size;
    return hasSizes && size.innerHeight != this.isotope.size.innerHeight;
  };

  // ----- measurements ----- //

  proto._getMeasurement = function() {
    this.isotope._getMeasurement.apply( this, arguments );
  };

  proto.getColumnWidth = function() {
    this.getSegmentSize( 'column', 'Width' );
  };

  proto.getRowHeight = function() {
    this.getSegmentSize( 'row', 'Height' );
  };

  /**
   * get columnWidth or rowHeight
   * segment: 'column' or 'row'
   * size 'Width' or 'Height'
  **/
  proto.getSegmentSize = function( segment, size ) {
    var segmentName = segment + size;
    var outerSize = 'outer' + size;
    // columnWidth / outerWidth // rowHeight / outerHeight
    this._getMeasurement( segmentName, outerSize );
    // got rowHeight or columnWidth, we can chill
    if ( this[ segmentName ] ) {
      return;
    }
    // fall back to item of first element
    var firstItemSize = this.getFirstItemSize();
    this[ segmentName ] = firstItemSize && firstItemSize[ outerSize ] ||
      // or size of container
      this.isotope.size[ 'inner' + size ];
  };

  proto.getFirstItemSize = function() {
    var firstItem = this.isotope.filteredItems[0];
    return firstItem && firstItem.element && getSize( firstItem.element );
  };

  // ----- methods that should reference isotope ----- //

  proto.layout = function() {
    this.isotope.layout.apply( this.isotope, arguments );
  };

  proto.getSize = function() {
    this.isotope.getSize();
    this.size = this.isotope.size;
  };

  // -------------------------- create -------------------------- //

  LayoutMode.modes = {};

  LayoutMode.create = function( namespace, options ) {

    function Mode() {
      LayoutMode.apply( this, arguments );
    }

    Mode.prototype = Object.create( proto );
    Mode.prototype.constructor = Mode;

    // default options
    if ( options ) {
      Mode.options = options;
    }

    Mode.prototype.namespace = namespace;
    // register in Isotope
    LayoutMode.modes[ namespace ] = Mode;

    return Mode;
  };

  return LayoutMode;

}));


/***/ }),

/***/ "./node_modules/isotope-layout/js/layout-modes/fit-rows.js":
/*!*****************************************************************!*\
  !*** ./node_modules/isotope-layout/js/layout-modes/fit-rows.js ***!
  \*****************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * fitRows layout mode
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(/*! ../layout-mode */ "./node_modules/isotope-layout/js/layout-mode.js")
      ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( LayoutMode ) {
'use strict';

var FitRows = LayoutMode.create('fitRows');

var proto = FitRows.prototype;

proto._resetLayout = function() {
  this.x = 0;
  this.y = 0;
  this.maxY = 0;
  this._getMeasurement( 'gutter', 'outerWidth' );
};

proto._getItemLayoutPosition = function( item ) {
  item.getSize();

  var itemWidth = item.size.outerWidth + this.gutter;
  // if this element cannot fit in the current row
  var containerWidth = this.isotope.size.innerWidth + this.gutter;
  if ( this.x !== 0 && itemWidth + this.x > containerWidth ) {
    this.x = 0;
    this.y = this.maxY;
  }

  var position = {
    x: this.x,
    y: this.y
  };

  this.maxY = Math.max( this.maxY, this.y + item.size.outerHeight );
  this.x += itemWidth;

  return position;
};

proto._getContainerSize = function() {
  return { height: this.maxY };
};

return FitRows;

}));


/***/ }),

/***/ "./node_modules/isotope-layout/js/layout-modes/masonry.js":
/*!****************************************************************!*\
  !*** ./node_modules/isotope-layout/js/layout-modes/masonry.js ***!
  \****************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Masonry layout mode
 * sub-classes Masonry
 * https://masonry.desandro.com
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(/*! ../layout-mode */ "./node_modules/isotope-layout/js/layout-mode.js"),
        __webpack_require__(/*! masonry-layout/masonry */ "./node_modules/masonry-layout/masonry.js")
      ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( LayoutMode, Masonry ) {
'use strict';

// -------------------------- masonryDefinition -------------------------- //

  // create an Outlayer layout class
  var MasonryMode = LayoutMode.create('masonry');

  var proto = MasonryMode.prototype;

  var keepModeMethods = {
    _getElementOffset: true,
    layout: true,
    _getMeasurement: true
  };

  // inherit Masonry prototype
  for ( var method in Masonry.prototype ) {
    // do not inherit mode methods
    if ( !keepModeMethods[ method ] ) {
      proto[ method ] = Masonry.prototype[ method ];
    }
  }

  var measureColumns = proto.measureColumns;
  proto.measureColumns = function() {
    // set items, used if measuring first item
    this.items = this.isotope.filteredItems;
    measureColumns.call( this );
  };

  // point to mode options for fitWidth
  var _getOption = proto._getOption;
  proto._getOption = function( option ) {
    if ( option == 'fitWidth' ) {
      return this.options.isFitWidth !== undefined ?
        this.options.isFitWidth : this.options.fitWidth;
    }
    return _getOption.apply( this.isotope, arguments );
  };

  return MasonryMode;

}));


/***/ }),

/***/ "./node_modules/isotope-layout/js/layout-modes/vertical.js":
/*!*****************************************************************!*\
  !*** ./node_modules/isotope-layout/js/layout-modes/vertical.js ***!
  \*****************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * vertical layout mode
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(/*! ../layout-mode */ "./node_modules/isotope-layout/js/layout-mode.js")
      ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( LayoutMode ) {
'use strict';

var Vertical = LayoutMode.create( 'vertical', {
  horizontalAlignment: 0
});

var proto = Vertical.prototype;

proto._resetLayout = function() {
  this.y = 0;
};

proto._getItemLayoutPosition = function( item ) {
  item.getSize();
  var x = ( this.isotope.size.innerWidth - item.size.outerWidth ) *
    this.options.horizontalAlignment;
  var y = this.y;
  this.y += item.size.outerHeight;
  return { x: x, y: y };
};

proto._getContainerSize = function() {
  return { height: this.y };
};

return Vertical;

}));


/***/ }),

/***/ "./node_modules/isotope-packery/packery-mode.js":
/*!******************************************************!*\
  !*** ./node_modules/isotope-packery/packery-mode.js ***!
  \******************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Packery layout mode v2.0.1
 * sub-classes Packery
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  'use strict';
  // universal module definition
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(/*! isotope-layout/js/layout-mode */ "./node_modules/isotope-layout/js/layout-mode.js"),
        __webpack_require__(/*! packery/js/packery */ "./node_modules/packery/js/packery.js")
      ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( LayoutMode, Packery ) {
'use strict';

  // create an Outlayer layout class
  var PackeryMode = LayoutMode.create('packery');
  var proto = PackeryMode.prototype;

  var keepModeMethods = {
    _getElementOffset: true,
    _getMeasurement: true
  };

  // inherit Packery prototype
  for ( var method in Packery.prototype ) {
    // do not inherit mode methods
    if ( !keepModeMethods[ method ] ) {
      proto[ method ] = Packery.prototype[ method ];
    }
  }

  // set packer in _resetLayout
  var _resetLayout = proto._resetLayout;
  proto._resetLayout = function() {
    this.packer = this.packer || new Packery.Packer();
    this.shiftPacker = this.shiftPacker || new Packery.Packer();
    _resetLayout.apply( this, arguments );
  };

  var _getItemLayoutPosition = proto._getItemLayoutPosition;
  proto._getItemLayoutPosition = function( item ) {
    // set packery rect
    item.rect = item.rect || new Packery.Rect();
    return _getItemLayoutPosition.call( this, item );
  };

  // needsResizeLayout for vertical or horizontal
  var _needsResizeLayout = proto.needsResizeLayout;
  proto.needsResizeLayout = function() {
    if ( this._getOption('horizontal') ) {
      return this.needsVerticalResizeLayout();
    } else {
      return _needsResizeLayout.call( this );
    }
  };

  // point to mode options for horizontal
  var _getOption = proto._getOption;
  proto._getOption = function( option ) {
    if ( option == 'horizontal' ) {
      return this.options.isHorizontal !== undefined ?
        this.options.isHorizontal : this.options.horizontal;
    }
    return _getOption.apply( this.isotope, arguments );
  };

  return PackeryMode;

}));


/***/ }),

/***/ "./node_modules/just-extend/index.esm.js":
/*!***********************************************!*\
  !*** ./node_modules/just-extend/index.esm.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ objectExtend)
/* harmony export */ });
var objectExtend = extend;

/*
  var obj = {a: 3, b: 5};
  extend(obj, {a: 4, c: 8}); // {a: 4, b: 5, c: 8}
  obj; // {a: 4, b: 5, c: 8}

  var obj = {a: 3, b: 5};
  extend({}, obj, {a: 4, c: 8}); // {a: 4, b: 5, c: 8}
  obj; // {a: 3, b: 5}

  var arr = [1, 2, 3];
  var obj = {a: 3, b: 5};
  extend(obj, {c: arr}); // {a: 3, b: 5, c: [1, 2, 3]}
  arr.push(4);
  obj; // {a: 3, b: 5, c: [1, 2, 3, 4]}

  var arr = [1, 2, 3];
  var obj = {a: 3, b: 5};
  extend(true, obj, {c: arr}); // {a: 3, b: 5, c: [1, 2, 3]}
  arr.push(4);
  obj; // {a: 3, b: 5, c: [1, 2, 3]}

  extend({a: 4, b: 5}); // {a: 4, b: 5}
  extend({a: 4, b: 5}, 3); {a: 4, b: 5}
  extend({a: 4, b: 5}, true); {a: 4, b: 5}
  extend('hello', {a: 4, b: 5}); // throws
  extend(3, {a: 4, b: 5}); // throws
*/

function extend(/* [deep], obj1, obj2, [objn] */) {
  var args = [].slice.call(arguments);
  var deep = false;
  if (typeof args[0] == 'boolean') {
    deep = args.shift();
  }
  var result = args[0];
  if (isUnextendable(result)) {
    throw new Error('extendee must be an object');
  }
  var extenders = args.slice(1);
  var len = extenders.length;
  for (var i = 0; i < len; i++) {
    var extender = extenders[i];
    for (var key in extender) {
      if (Object.prototype.hasOwnProperty.call(extender, key)) {
        var value = extender[key];
        if (deep && isCloneable(value)) {
          var base = Array.isArray(value) ? [] : {};
          result[key] = extend(
            true,
            Object.prototype.hasOwnProperty.call(result, key) && !isUnextendable(result[key])
              ? result[key]
              : base,
            value
          );
        } else {
          result[key] = value;
        }
      }
    }
  }
  return result;
}

function isCloneable(obj) {
  return Array.isArray(obj) || {}.toString.call(obj) == '[object Object]';
}

function isUnextendable(val) {
  return !val || (typeof val != 'object' && typeof val != 'function');
}




/***/ }),

/***/ "./node_modules/masonry-layout/masonry.js":
/*!************************************************!*\
  !*** ./node_modules/masonry-layout/masonry.js ***!
  \************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Masonry v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(/*! outlayer/outlayer */ "./node_modules/outlayer/outlayer.js"),
        __webpack_require__(/*! get-size/get-size */ "./node_modules/get-size/get-size.js")
      ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( Outlayer, getSize ) {

'use strict';

// -------------------------- masonryDefinition -------------------------- //

  // create an Outlayer layout class
  var Masonry = Outlayer.create('masonry');
  // isFitWidth -> fitWidth
  Masonry.compatOptions.fitWidth = 'isFitWidth';

  var proto = Masonry.prototype;

  proto._resetLayout = function() {
    this.getSize();
    this._getMeasurement( 'columnWidth', 'outerWidth' );
    this._getMeasurement( 'gutter', 'outerWidth' );
    this.measureColumns();

    // reset column Y
    this.colYs = [];
    for ( var i=0; i < this.cols; i++ ) {
      this.colYs.push( 0 );
    }

    this.maxY = 0;
    this.horizontalColIndex = 0;
  };

  proto.measureColumns = function() {
    this.getContainerWidth();
    // if columnWidth is 0, default to outerWidth of first item
    if ( !this.columnWidth ) {
      var firstItem = this.items[0];
      var firstItemElem = firstItem && firstItem.element;
      // columnWidth fall back to item of first element
      this.columnWidth = firstItemElem && getSize( firstItemElem ).outerWidth ||
        // if first elem has no width, default to size of container
        this.containerWidth;
    }

    var columnWidth = this.columnWidth += this.gutter;

    // calculate columns
    var containerWidth = this.containerWidth + this.gutter;
    var cols = containerWidth / columnWidth;
    // fix rounding errors, typically with gutters
    var excess = columnWidth - containerWidth % columnWidth;
    // if overshoot is less than a pixel, round up, otherwise floor it
    var mathMethod = excess && excess < 1 ? 'round' : 'floor';
    cols = Math[ mathMethod ]( cols );
    this.cols = Math.max( cols, 1 );
  };

  proto.getContainerWidth = function() {
    // container is parent if fit width
    var isFitWidth = this._getOption('fitWidth');
    var container = isFitWidth ? this.element.parentNode : this.element;
    // check that this.size and size are there
    // IE8 triggers resize on body size change, so they might not be
    var size = getSize( container );
    this.containerWidth = size && size.innerWidth;
  };

  proto._getItemLayoutPosition = function( item ) {
    item.getSize();
    // how many columns does this brick span
    var remainder = item.size.outerWidth % this.columnWidth;
    var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
    // round if off by 1 pixel, otherwise use ceil
    var colSpan = Math[ mathMethod ]( item.size.outerWidth / this.columnWidth );
    colSpan = Math.min( colSpan, this.cols );
    // use horizontal or top column position
    var colPosMethod = this.options.horizontalOrder ?
      '_getHorizontalColPosition' : '_getTopColPosition';
    var colPosition = this[ colPosMethod ]( colSpan, item );
    // position the brick
    var position = {
      x: this.columnWidth * colPosition.col,
      y: colPosition.y
    };
    // apply setHeight to necessary columns
    var setHeight = colPosition.y + item.size.outerHeight;
    var setMax = colSpan + colPosition.col;
    for ( var i = colPosition.col; i < setMax; i++ ) {
      this.colYs[i] = setHeight;
    }

    return position;
  };

  proto._getTopColPosition = function( colSpan ) {
    var colGroup = this._getTopColGroup( colSpan );
    // get the minimum Y value from the columns
    var minimumY = Math.min.apply( Math, colGroup );

    return {
      col: colGroup.indexOf( minimumY ),
      y: minimumY,
    };
  };

  /**
   * @param {Number} colSpan - number of columns the element spans
   * @returns {Array} colGroup
   */
  proto._getTopColGroup = function( colSpan ) {
    if ( colSpan < 2 ) {
      // if brick spans only one column, use all the column Ys
      return this.colYs;
    }

    var colGroup = [];
    // how many different places could this brick fit horizontally
    var groupCount = this.cols + 1 - colSpan;
    // for each group potential horizontal position
    for ( var i = 0; i < groupCount; i++ ) {
      colGroup[i] = this._getColGroupY( i, colSpan );
    }
    return colGroup;
  };

  proto._getColGroupY = function( col, colSpan ) {
    if ( colSpan < 2 ) {
      return this.colYs[ col ];
    }
    // make an array of colY values for that one group
    var groupColYs = this.colYs.slice( col, col + colSpan );
    // and get the max value of the array
    return Math.max.apply( Math, groupColYs );
  };

  // get column position based on horizontal index. #873
  proto._getHorizontalColPosition = function( colSpan, item ) {
    var col = this.horizontalColIndex % this.cols;
    var isOver = colSpan > 1 && col + colSpan > this.cols;
    // shift to next row if item can't fit on current row
    col = isOver ? 0 : col;
    // don't let zero-size items take up space
    var hasSize = item.size.outerWidth && item.size.outerHeight;
    this.horizontalColIndex = hasSize ? col + colSpan : this.horizontalColIndex;

    return {
      col: col,
      y: this._getColGroupY( col, colSpan ),
    };
  };

  proto._manageStamp = function( stamp ) {
    var stampSize = getSize( stamp );
    var offset = this._getElementOffset( stamp );
    // get the columns that this stamp affects
    var isOriginLeft = this._getOption('originLeft');
    var firstX = isOriginLeft ? offset.left : offset.right;
    var lastX = firstX + stampSize.outerWidth;
    var firstCol = Math.floor( firstX / this.columnWidth );
    firstCol = Math.max( 0, firstCol );
    var lastCol = Math.floor( lastX / this.columnWidth );
    // lastCol should not go over if multiple of columnWidth #425
    lastCol -= lastX % this.columnWidth ? 0 : 1;
    lastCol = Math.min( this.cols - 1, lastCol );
    // set colYs to bottom of the stamp

    var isOriginTop = this._getOption('originTop');
    var stampMaxY = ( isOriginTop ? offset.top : offset.bottom ) +
      stampSize.outerHeight;
    for ( var i = firstCol; i <= lastCol; i++ ) {
      this.colYs[i] = Math.max( stampMaxY, this.colYs[i] );
    }
  };

  proto._getContainerSize = function() {
    this.maxY = Math.max.apply( Math, this.colYs );
    var size = {
      height: this.maxY
    };

    if ( this._getOption('fitWidth') ) {
      size.width = this._getContainerFitWidth();
    }

    return size;
  };

  proto._getContainerFitWidth = function() {
    var unusedCols = 0;
    // count unused columns
    var i = this.cols;
    while ( --i ) {
      if ( this.colYs[i] !== 0 ) {
        break;
      }
      unusedCols++;
    }
    // fit container to columns that have been used
    return ( this.cols - unusedCols ) * this.columnWidth - this.gutter;
  };

  proto.needsResizeLayout = function() {
    var previousWidth = this.containerWidth;
    this.getContainerWidth();
    return previousWidth != this.containerWidth;
  };

  return Masonry;

}));


/***/ }),

/***/ "./node_modules/outlayer/item.js":
/*!***************************************!*\
  !*** ./node_modules/outlayer/item.js ***!
  \***************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Outlayer Item
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if ( true ) {
    // AMD - RequireJS
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(/*! ev-emitter/ev-emitter */ "./node_modules/outlayer/node_modules/ev-emitter/ev-emitter.js"),
        __webpack_require__(/*! get-size/get-size */ "./node_modules/get-size/get-size.js")
      ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( EvEmitter, getSize ) {
'use strict';

// ----- helpers ----- //

function isEmptyObj( obj ) {
  for ( var prop in obj ) {
    return false;
  }
  prop = null;
  return true;
}

// -------------------------- CSS3 support -------------------------- //


var docElemStyle = document.documentElement.style;

var transitionProperty = typeof docElemStyle.transition == 'string' ?
  'transition' : 'WebkitTransition';
var transformProperty = typeof docElemStyle.transform == 'string' ?
  'transform' : 'WebkitTransform';

var transitionEndEvent = {
  WebkitTransition: 'webkitTransitionEnd',
  transition: 'transitionend'
}[ transitionProperty ];

// cache all vendor properties that could have vendor prefix
var vendorProperties = {
  transform: transformProperty,
  transition: transitionProperty,
  transitionDuration: transitionProperty + 'Duration',
  transitionProperty: transitionProperty + 'Property',
  transitionDelay: transitionProperty + 'Delay'
};

// -------------------------- Item -------------------------- //

function Item( element, layout ) {
  if ( !element ) {
    return;
  }

  this.element = element;
  // parent layout class, i.e. Masonry, Isotope, or Packery
  this.layout = layout;
  this.position = {
    x: 0,
    y: 0
  };

  this._create();
}

// inherit EvEmitter
var proto = Item.prototype = Object.create( EvEmitter.prototype );
proto.constructor = Item;

proto._create = function() {
  // transition objects
  this._transn = {
    ingProperties: {},
    clean: {},
    onEnd: {}
  };

  this.css({
    position: 'absolute'
  });
};

// trigger specified handler for event type
proto.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

proto.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * apply CSS styles to element
 * @param {Object} style
 */
proto.css = function( style ) {
  var elemStyle = this.element.style;

  for ( var prop in style ) {
    // use vendor property if available
    var supportedProp = vendorProperties[ prop ] || prop;
    elemStyle[ supportedProp ] = style[ prop ];
  }
};

 // measure position, and sets it
proto.getPosition = function() {
  var style = getComputedStyle( this.element );
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');
  var xValue = style[ isOriginLeft ? 'left' : 'right' ];
  var yValue = style[ isOriginTop ? 'top' : 'bottom' ];
  var x = parseFloat( xValue );
  var y = parseFloat( yValue );
  // convert percent to pixels
  var layoutSize = this.layout.size;
  if ( xValue.indexOf('%') != -1 ) {
    x = ( x / 100 ) * layoutSize.width;
  }
  if ( yValue.indexOf('%') != -1 ) {
    y = ( y / 100 ) * layoutSize.height;
  }
  // clean up 'auto' or other non-integer values
  x = isNaN( x ) ? 0 : x;
  y = isNaN( y ) ? 0 : y;
  // remove padding from measurement
  x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
  y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;

  this.position.x = x;
  this.position.y = y;
};

// set settled position, apply padding
proto.layoutPosition = function() {
  var layoutSize = this.layout.size;
  var style = {};
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');

  // x
  var xPadding = isOriginLeft ? 'paddingLeft' : 'paddingRight';
  var xProperty = isOriginLeft ? 'left' : 'right';
  var xResetProperty = isOriginLeft ? 'right' : 'left';

  var x = this.position.x + layoutSize[ xPadding ];
  // set in percentage or pixels
  style[ xProperty ] = this.getXValue( x );
  // reset other property
  style[ xResetProperty ] = '';

  // y
  var yPadding = isOriginTop ? 'paddingTop' : 'paddingBottom';
  var yProperty = isOriginTop ? 'top' : 'bottom';
  var yResetProperty = isOriginTop ? 'bottom' : 'top';

  var y = this.position.y + layoutSize[ yPadding ];
  // set in percentage or pixels
  style[ yProperty ] = this.getYValue( y );
  // reset other property
  style[ yResetProperty ] = '';

  this.css( style );
  this.emitEvent( 'layout', [ this ] );
};

proto.getXValue = function( x ) {
  var isHorizontal = this.layout._getOption('horizontal');
  return this.layout.options.percentPosition && !isHorizontal ?
    ( ( x / this.layout.size.width ) * 100 ) + '%' : x + 'px';
};

proto.getYValue = function( y ) {
  var isHorizontal = this.layout._getOption('horizontal');
  return this.layout.options.percentPosition && isHorizontal ?
    ( ( y / this.layout.size.height ) * 100 ) + '%' : y + 'px';
};

proto._transitionTo = function( x, y ) {
  this.getPosition();
  // get current x & y from top/left
  var curX = this.position.x;
  var curY = this.position.y;

  var didNotMove = x == this.position.x && y == this.position.y;

  // save end position
  this.setPosition( x, y );

  // if did not move and not transitioning, just go to layout
  if ( didNotMove && !this.isTransitioning ) {
    this.layoutPosition();
    return;
  }

  var transX = x - curX;
  var transY = y - curY;
  var transitionStyle = {};
  transitionStyle.transform = this.getTranslate( transX, transY );

  this.transition({
    to: transitionStyle,
    onTransitionEnd: {
      transform: this.layoutPosition
    },
    isCleaning: true
  });
};

proto.getTranslate = function( x, y ) {
  // flip cooridinates if origin on right or bottom
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');
  x = isOriginLeft ? x : -x;
  y = isOriginTop ? y : -y;
  return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
};

// non transition + transform support
proto.goTo = function( x, y ) {
  this.setPosition( x, y );
  this.layoutPosition();
};

proto.moveTo = proto._transitionTo;

proto.setPosition = function( x, y ) {
  this.position.x = parseFloat( x );
  this.position.y = parseFloat( y );
};

// ----- transition ----- //

/**
 * @param {Object} style - CSS
 * @param {Function} onTransitionEnd
 */

// non transition, just trigger callback
proto._nonTransition = function( args ) {
  this.css( args.to );
  if ( args.isCleaning ) {
    this._removeStyles( args.to );
  }
  for ( var prop in args.onTransitionEnd ) {
    args.onTransitionEnd[ prop ].call( this );
  }
};

/**
 * proper transition
 * @param {Object} args - arguments
 *   @param {Object} to - style to transition to
 *   @param {Object} from - style to start transition from
 *   @param {Boolean} isCleaning - removes transition styles after transition
 *   @param {Function} onTransitionEnd - callback
 */
proto.transition = function( args ) {
  // redirect to nonTransition if no transition duration
  if ( !parseFloat( this.layout.options.transitionDuration ) ) {
    this._nonTransition( args );
    return;
  }

  var _transition = this._transn;
  // keep track of onTransitionEnd callback by css property
  for ( var prop in args.onTransitionEnd ) {
    _transition.onEnd[ prop ] = args.onTransitionEnd[ prop ];
  }
  // keep track of properties that are transitioning
  for ( prop in args.to ) {
    _transition.ingProperties[ prop ] = true;
    // keep track of properties to clean up when transition is done
    if ( args.isCleaning ) {
      _transition.clean[ prop ] = true;
    }
  }

  // set from styles
  if ( args.from ) {
    this.css( args.from );
    // force redraw. http://blog.alexmaccaw.com/css-transitions
    var h = this.element.offsetHeight;
    // hack for JSHint to hush about unused var
    h = null;
  }
  // enable transition
  this.enableTransition( args.to );
  // set styles that are transitioning
  this.css( args.to );

  this.isTransitioning = true;

};

// dash before all cap letters, including first for
// WebkitTransform => -webkit-transform
function toDashedAll( str ) {
  return str.replace( /([A-Z])/g, function( $1 ) {
    return '-' + $1.toLowerCase();
  });
}

var transitionProps = 'opacity,' + toDashedAll( transformProperty );

proto.enableTransition = function(/* style */) {
  // HACK changing transitionProperty during a transition
  // will cause transition to jump
  if ( this.isTransitioning ) {
    return;
  }

  // make `transition: foo, bar, baz` from style object
  // HACK un-comment this when enableTransition can work
  // while a transition is happening
  // var transitionValues = [];
  // for ( var prop in style ) {
  //   // dash-ify camelCased properties like WebkitTransition
  //   prop = vendorProperties[ prop ] || prop;
  //   transitionValues.push( toDashedAll( prop ) );
  // }
  // munge number to millisecond, to match stagger
  var duration = this.layout.options.transitionDuration;
  duration = typeof duration == 'number' ? duration + 'ms' : duration;
  // enable transition styles
  this.css({
    transitionProperty: transitionProps,
    transitionDuration: duration,
    transitionDelay: this.staggerDelay || 0
  });
  // listen for transition end event
  this.element.addEventListener( transitionEndEvent, this, false );
};

// ----- events ----- //

proto.onwebkitTransitionEnd = function( event ) {
  this.ontransitionend( event );
};

proto.onotransitionend = function( event ) {
  this.ontransitionend( event );
};

// properties that I munge to make my life easier
var dashedVendorProperties = {
  '-webkit-transform': 'transform'
};

proto.ontransitionend = function( event ) {
  // disregard bubbled events from children
  if ( event.target !== this.element ) {
    return;
  }
  var _transition = this._transn;
  // get property name of transitioned property, convert to prefix-free
  var propertyName = dashedVendorProperties[ event.propertyName ] || event.propertyName;

  // remove property that has completed transitioning
  delete _transition.ingProperties[ propertyName ];
  // check if any properties are still transitioning
  if ( isEmptyObj( _transition.ingProperties ) ) {
    // all properties have completed transitioning
    this.disableTransition();
  }
  // clean style
  if ( propertyName in _transition.clean ) {
    // clean up style
    this.element.style[ event.propertyName ] = '';
    delete _transition.clean[ propertyName ];
  }
  // trigger onTransitionEnd callback
  if ( propertyName in _transition.onEnd ) {
    var onTransitionEnd = _transition.onEnd[ propertyName ];
    onTransitionEnd.call( this );
    delete _transition.onEnd[ propertyName ];
  }

  this.emitEvent( 'transitionEnd', [ this ] );
};

proto.disableTransition = function() {
  this.removeTransitionStyles();
  this.element.removeEventListener( transitionEndEvent, this, false );
  this.isTransitioning = false;
};

/**
 * removes style property from element
 * @param {Object} style
**/
proto._removeStyles = function( style ) {
  // clean up transition styles
  var cleanStyle = {};
  for ( var prop in style ) {
    cleanStyle[ prop ] = '';
  }
  this.css( cleanStyle );
};

var cleanTransitionStyle = {
  transitionProperty: '',
  transitionDuration: '',
  transitionDelay: ''
};

proto.removeTransitionStyles = function() {
  // remove transition
  this.css( cleanTransitionStyle );
};

// ----- stagger ----- //

proto.stagger = function( delay ) {
  delay = isNaN( delay ) ? 0 : delay;
  this.staggerDelay = delay + 'ms';
};

// ----- show/hide/remove ----- //

// remove element from DOM
proto.removeElem = function() {
  this.element.parentNode.removeChild( this.element );
  // remove display: none
  this.css({ display: '' });
  this.emitEvent( 'remove', [ this ] );
};

proto.remove = function() {
  // just remove element if no transition support or no transition
  if ( !transitionProperty || !parseFloat( this.layout.options.transitionDuration ) ) {
    this.removeElem();
    return;
  }

  // start transition
  this.once( 'transitionEnd', function() {
    this.removeElem();
  });
  this.hide();
};

proto.reveal = function() {
  delete this.isHidden;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onRevealTransitionEnd;

  this.transition({
    from: options.hiddenStyle,
    to: options.visibleStyle,
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

proto.onRevealTransitionEnd = function() {
  // check if still visible
  // during transition, item may have been hidden
  if ( !this.isHidden ) {
    this.emitEvent('reveal');
  }
};

/**
 * get style property use for hide/reveal transition end
 * @param {String} styleProperty - hiddenStyle/visibleStyle
 * @returns {String}
 */
proto.getHideRevealTransitionEndProperty = function( styleProperty ) {
  var optionStyle = this.layout.options[ styleProperty ];
  // use opacity
  if ( optionStyle.opacity ) {
    return 'opacity';
  }
  // get first property
  for ( var prop in optionStyle ) {
    return prop;
  }
};

proto.hide = function() {
  // set flag
  this.isHidden = true;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onHideTransitionEnd;

  this.transition({
    from: options.visibleStyle,
    to: options.hiddenStyle,
    // keep hidden stuff hidden
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

proto.onHideTransitionEnd = function() {
  // check if still hidden
  // during transition, item may have been un-hidden
  if ( this.isHidden ) {
    this.css({ display: 'none' });
    this.emitEvent('hide');
  }
};

proto.destroy = function() {
  this.css({
    position: '',
    left: '',
    right: '',
    top: '',
    bottom: '',
    transition: '',
    transform: ''
  });
};

return Item;

}));


/***/ }),

/***/ "./node_modules/outlayer/node_modules/ev-emitter/ev-emitter.js":
/*!*********************************************************************!*\
  !*** ./node_modules/outlayer/node_modules/ev-emitter/ev-emitter.js ***!
  \*********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

( function( global, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, window */
  if ( true ) {
    // AMD - RequireJS
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( typeof window != 'undefined' ? window : this, function() {

"use strict";

function EvEmitter() {}

var proto = EvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // set events hash
  var events = this._events = this._events || {};
  // set listeners array
  var listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( listeners.indexOf( listener ) == -1 ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  var onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  // copy over to avoid interference if .off() in listener
  listeners = listeners.slice(0);
  args = args || [];
  // once stuff
  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  for ( var i=0; i < listeners.length; i++ ) {
    var listener = listeners[i]
    var isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
  }

  return this;
};

proto.allOff = function() {
  delete this._events;
  delete this._onceEvents;
};

return EvEmitter;

}));


/***/ }),

/***/ "./node_modules/outlayer/outlayer.js":
/*!*******************************************!*\
  !*** ./node_modules/outlayer/outlayer.js ***!
  \*******************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Outlayer v2.1.1
 * the brains and guts of a layout library
 * MIT license
 */

( function( window, factory ) {
  'use strict';
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if ( true ) {
    // AMD - RequireJS
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(/*! ev-emitter/ev-emitter */ "./node_modules/outlayer/node_modules/ev-emitter/ev-emitter.js"),
        __webpack_require__(/*! get-size/get-size */ "./node_modules/get-size/get-size.js"),
        __webpack_require__(/*! fizzy-ui-utils/utils */ "./node_modules/fizzy-ui-utils/utils.js"),
        __webpack_require__(/*! ./item */ "./node_modules/outlayer/item.js")
      ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( EvEmitter, getSize, utils, Item ) {
        return factory( window, EvEmitter, getSize, utils, Item);
      }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( window, EvEmitter, getSize, utils, Item ) {
'use strict';

// ----- vars ----- //

var console = window.console;
var jQuery = window.jQuery;
var noop = function() {};

// -------------------------- Outlayer -------------------------- //

// globally unique identifiers
var GUID = 0;
// internal store of all Outlayer intances
var instances = {};


/**
 * @param {Element, String} element
 * @param {Object} options
 * @constructor
 */
function Outlayer( element, options ) {
  var queryElement = utils.getQueryElement( element );
  if ( !queryElement ) {
    if ( console ) {
      console.error( 'Bad element for ' + this.constructor.namespace +
        ': ' + ( queryElement || element ) );
    }
    return;
  }
  this.element = queryElement;
  // add jQuery
  if ( jQuery ) {
    this.$element = jQuery( this.element );
  }

  // options
  this.options = utils.extend( {}, this.constructor.defaults );
  this.option( options );

  // add id for Outlayer.getFromElement
  var id = ++GUID;
  this.element.outlayerGUID = id; // expando
  instances[ id ] = this; // associate via id

  // kick it off
  this._create();

  var isInitLayout = this._getOption('initLayout');
  if ( isInitLayout ) {
    this.layout();
  }
}

// settings are for internal use only
Outlayer.namespace = 'outlayer';
Outlayer.Item = Item;

// default options
Outlayer.defaults = {
  containerStyle: {
    position: 'relative'
  },
  initLayout: true,
  originLeft: true,
  originTop: true,
  resize: true,
  resizeContainer: true,
  // item options
  transitionDuration: '0.4s',
  hiddenStyle: {
    opacity: 0,
    transform: 'scale(0.001)'
  },
  visibleStyle: {
    opacity: 1,
    transform: 'scale(1)'
  }
};

var proto = Outlayer.prototype;
// inherit EvEmitter
utils.extend( proto, EvEmitter.prototype );

/**
 * set options
 * @param {Object} opts
 */
proto.option = function( opts ) {
  utils.extend( this.options, opts );
};

/**
 * get backwards compatible option value, check old name
 */
proto._getOption = function( option ) {
  var oldOption = this.constructor.compatOptions[ option ];
  return oldOption && this.options[ oldOption ] !== undefined ?
    this.options[ oldOption ] : this.options[ option ];
};

Outlayer.compatOptions = {
  // currentName: oldName
  initLayout: 'isInitLayout',
  horizontal: 'isHorizontal',
  layoutInstant: 'isLayoutInstant',
  originLeft: 'isOriginLeft',
  originTop: 'isOriginTop',
  resize: 'isResizeBound',
  resizeContainer: 'isResizingContainer'
};

proto._create = function() {
  // get items from children
  this.reloadItems();
  // elements that affect layout, but are not laid out
  this.stamps = [];
  this.stamp( this.options.stamp );
  // set container style
  utils.extend( this.element.style, this.options.containerStyle );

  // bind resize method
  var canBindResize = this._getOption('resize');
  if ( canBindResize ) {
    this.bindResize();
  }
};

// goes through all children again and gets bricks in proper order
proto.reloadItems = function() {
  // collection of item elements
  this.items = this._itemize( this.element.children );
};


/**
 * turn elements into Outlayer.Items to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - collection of new Outlayer Items
 */
proto._itemize = function( elems ) {

  var itemElems = this._filterFindItemElements( elems );
  var Item = this.constructor.Item;

  // create new Outlayer Items for collection
  var items = [];
  for ( var i=0; i < itemElems.length; i++ ) {
    var elem = itemElems[i];
    var item = new Item( elem, this );
    items.push( item );
  }

  return items;
};

/**
 * get item elements to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - item elements
 */
proto._filterFindItemElements = function( elems ) {
  return utils.filterFindElements( elems, this.options.itemSelector );
};

/**
 * getter method for getting item elements
 * @returns {Array} elems - collection of item elements
 */
proto.getItemElements = function() {
  return this.items.map( function( item ) {
    return item.element;
  });
};

// ----- init & layout ----- //

/**
 * lays out all items
 */
proto.layout = function() {
  this._resetLayout();
  this._manageStamps();

  // don't animate first layout
  var layoutInstant = this._getOption('layoutInstant');
  var isInstant = layoutInstant !== undefined ?
    layoutInstant : !this._isLayoutInited;
  this.layoutItems( this.items, isInstant );

  // flag for initalized
  this._isLayoutInited = true;
};

// _init is alias for layout
proto._init = proto.layout;

/**
 * logic before any new layout
 */
proto._resetLayout = function() {
  this.getSize();
};


proto.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * get measurement from option, for columnWidth, rowHeight, gutter
 * if option is String -> get element from selector string, & get size of element
 * if option is Element -> get size of element
 * else use option as a number
 *
 * @param {String} measurement
 * @param {String} size - width or height
 * @private
 */
proto._getMeasurement = function( measurement, size ) {
  var option = this.options[ measurement ];
  var elem;
  if ( !option ) {
    // default to 0
    this[ measurement ] = 0;
  } else {
    // use option as an element
    if ( typeof option == 'string' ) {
      elem = this.element.querySelector( option );
    } else if ( option instanceof HTMLElement ) {
      elem = option;
    }
    // use size of element, if element
    this[ measurement ] = elem ? getSize( elem )[ size ] : option;
  }
};

/**
 * layout a collection of item elements
 * @api public
 */
proto.layoutItems = function( items, isInstant ) {
  items = this._getItemsForLayout( items );

  this._layoutItems( items, isInstant );

  this._postLayout();
};

/**
 * get the items to be laid out
 * you may want to skip over some items
 * @param {Array} items
 * @returns {Array} items
 */
proto._getItemsForLayout = function( items ) {
  return items.filter( function( item ) {
    return !item.isIgnored;
  });
};

/**
 * layout items
 * @param {Array} items
 * @param {Boolean} isInstant
 */
proto._layoutItems = function( items, isInstant ) {
  this._emitCompleteOnItems( 'layout', items );

  if ( !items || !items.length ) {
    // no items, emit event with empty array
    return;
  }

  var queue = [];

  items.forEach( function( item ) {
    // get x/y object from method
    var position = this._getItemLayoutPosition( item );
    // enqueue
    position.item = item;
    position.isInstant = isInstant || item.isLayoutInstant;
    queue.push( position );
  }, this );

  this._processLayoutQueue( queue );
};

/**
 * get item layout position
 * @param {Outlayer.Item} item
 * @returns {Object} x and y position
 */
proto._getItemLayoutPosition = function( /* item */ ) {
  return {
    x: 0,
    y: 0
  };
};

/**
 * iterate over array and position each item
 * Reason being - separating this logic prevents 'layout invalidation'
 * thx @paul_irish
 * @param {Array} queue
 */
proto._processLayoutQueue = function( queue ) {
  this.updateStagger();
  queue.forEach( function( obj, i ) {
    this._positionItem( obj.item, obj.x, obj.y, obj.isInstant, i );
  }, this );
};

// set stagger from option in milliseconds number
proto.updateStagger = function() {
  var stagger = this.options.stagger;
  if ( stagger === null || stagger === undefined ) {
    this.stagger = 0;
    return;
  }
  this.stagger = getMilliseconds( stagger );
  return this.stagger;
};

/**
 * Sets position of item in DOM
 * @param {Outlayer.Item} item
 * @param {Number} x - horizontal position
 * @param {Number} y - vertical position
 * @param {Boolean} isInstant - disables transitions
 */
proto._positionItem = function( item, x, y, isInstant, i ) {
  if ( isInstant ) {
    // if not transition, just set CSS
    item.goTo( x, y );
  } else {
    item.stagger( i * this.stagger );
    item.moveTo( x, y );
  }
};

/**
 * Any logic you want to do after each layout,
 * i.e. size the container
 */
proto._postLayout = function() {
  this.resizeContainer();
};

proto.resizeContainer = function() {
  var isResizingContainer = this._getOption('resizeContainer');
  if ( !isResizingContainer ) {
    return;
  }
  var size = this._getContainerSize();
  if ( size ) {
    this._setContainerMeasure( size.width, true );
    this._setContainerMeasure( size.height, false );
  }
};

/**
 * Sets width or height of container if returned
 * @returns {Object} size
 *   @param {Number} width
 *   @param {Number} height
 */
proto._getContainerSize = noop;

/**
 * @param {Number} measure - size of width or height
 * @param {Boolean} isWidth
 */
proto._setContainerMeasure = function( measure, isWidth ) {
  if ( measure === undefined ) {
    return;
  }

  var elemSize = this.size;
  // add padding and border width if border box
  if ( elemSize.isBorderBox ) {
    measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
      elemSize.borderLeftWidth + elemSize.borderRightWidth :
      elemSize.paddingBottom + elemSize.paddingTop +
      elemSize.borderTopWidth + elemSize.borderBottomWidth;
  }

  measure = Math.max( measure, 0 );
  this.element.style[ isWidth ? 'width' : 'height' ] = measure + 'px';
};

/**
 * emit eventComplete on a collection of items events
 * @param {String} eventName
 * @param {Array} items - Outlayer.Items
 */
proto._emitCompleteOnItems = function( eventName, items ) {
  var _this = this;
  function onComplete() {
    _this.dispatchEvent( eventName + 'Complete', null, [ items ] );
  }

  var count = items.length;
  if ( !items || !count ) {
    onComplete();
    return;
  }

  var doneCount = 0;
  function tick() {
    doneCount++;
    if ( doneCount == count ) {
      onComplete();
    }
  }

  // bind callback
  items.forEach( function( item ) {
    item.once( eventName, tick );
  });
};

/**
 * emits events via EvEmitter and jQuery events
 * @param {String} type - name of event
 * @param {Event} event - original event
 * @param {Array} args - extra arguments
 */
proto.dispatchEvent = function( type, event, args ) {
  // add original event to arguments
  var emitArgs = event ? [ event ].concat( args ) : args;
  this.emitEvent( type, emitArgs );

  if ( jQuery ) {
    // set this.$element
    this.$element = this.$element || jQuery( this.element );
    if ( event ) {
      // create jQuery event
      var $event = jQuery.Event( event );
      $event.type = type;
      this.$element.trigger( $event, args );
    } else {
      // just trigger with type if no event available
      this.$element.trigger( type, args );
    }
  }
};

// -------------------------- ignore & stamps -------------------------- //


/**
 * keep item in collection, but do not lay it out
 * ignored items do not get skipped in layout
 * @param {Element} elem
 */
proto.ignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    item.isIgnored = true;
  }
};

/**
 * return item to layout collection
 * @param {Element} elem
 */
proto.unignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    delete item.isIgnored;
  }
};

/**
 * adds elements to stamps
 * @param {NodeList, Array, Element, or String} elems
 */
proto.stamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ) {
    return;
  }

  this.stamps = this.stamps.concat( elems );
  // ignore
  elems.forEach( this.ignore, this );
};

/**
 * removes elements to stamps
 * @param {NodeList, Array, or Element} elems
 */
proto.unstamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ){
    return;
  }

  elems.forEach( function( elem ) {
    // filter out removed stamp elements
    utils.removeFrom( this.stamps, elem );
    this.unignore( elem );
  }, this );
};

/**
 * finds child elements
 * @param {NodeList, Array, Element, or String} elems
 * @returns {Array} elems
 */
proto._find = function( elems ) {
  if ( !elems ) {
    return;
  }
  // if string, use argument as selector string
  if ( typeof elems == 'string' ) {
    elems = this.element.querySelectorAll( elems );
  }
  elems = utils.makeArray( elems );
  return elems;
};

proto._manageStamps = function() {
  if ( !this.stamps || !this.stamps.length ) {
    return;
  }

  this._getBoundingRect();

  this.stamps.forEach( this._manageStamp, this );
};

// update boundingLeft / Top
proto._getBoundingRect = function() {
  // get bounding rect for container element
  var boundingRect = this.element.getBoundingClientRect();
  var size = this.size;
  this._boundingRect = {
    left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
    top: boundingRect.top + size.paddingTop + size.borderTopWidth,
    right: boundingRect.right - ( size.paddingRight + size.borderRightWidth ),
    bottom: boundingRect.bottom - ( size.paddingBottom + size.borderBottomWidth )
  };
};

/**
 * @param {Element} stamp
**/
proto._manageStamp = noop;

/**
 * get x/y position of element relative to container element
 * @param {Element} elem
 * @returns {Object} offset - has left, top, right, bottom
 */
proto._getElementOffset = function( elem ) {
  var boundingRect = elem.getBoundingClientRect();
  var thisRect = this._boundingRect;
  var size = getSize( elem );
  var offset = {
    left: boundingRect.left - thisRect.left - size.marginLeft,
    top: boundingRect.top - thisRect.top - size.marginTop,
    right: thisRect.right - boundingRect.right - size.marginRight,
    bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
  };
  return offset;
};

// -------------------------- resize -------------------------- //

// enable event handlers for listeners
// i.e. resize -> onresize
proto.handleEvent = utils.handleEvent;

/**
 * Bind layout to window resizing
 */
proto.bindResize = function() {
  window.addEventListener( 'resize', this );
  this.isResizeBound = true;
};

/**
 * Unbind layout to window resizing
 */
proto.unbindResize = function() {
  window.removeEventListener( 'resize', this );
  this.isResizeBound = false;
};

proto.onresize = function() {
  this.resize();
};

utils.debounceMethod( Outlayer, 'onresize', 100 );

proto.resize = function() {
  // don't trigger if size did not change
  // or if resize was unbound. See #9
  if ( !this.isResizeBound || !this.needsResizeLayout() ) {
    return;
  }

  this.layout();
};

/**
 * check if layout is needed post layout
 * @returns Boolean
 */
proto.needsResizeLayout = function() {
  var size = getSize( this.element );
  // check that this.size and size are there
  // IE8 triggers resize on body size change, so they might not be
  var hasSizes = this.size && size;
  return hasSizes && size.innerWidth !== this.size.innerWidth;
};

// -------------------------- methods -------------------------- //

/**
 * add items to Outlayer instance
 * @param {Array or NodeList or Element} elems
 * @returns {Array} items - Outlayer.Items
**/
proto.addItems = function( elems ) {
  var items = this._itemize( elems );
  // add items to collection
  if ( items.length ) {
    this.items = this.items.concat( items );
  }
  return items;
};

/**
 * Layout newly-appended item elements
 * @param {Array or NodeList or Element} elems
 */
proto.appended = function( elems ) {
  var items = this.addItems( elems );
  if ( !items.length ) {
    return;
  }
  // layout and reveal just the new items
  this.layoutItems( items, true );
  this.reveal( items );
};

/**
 * Layout prepended elements
 * @param {Array or NodeList or Element} elems
 */
proto.prepended = function( elems ) {
  var items = this._itemize( elems );
  if ( !items.length ) {
    return;
  }
  // add items to beginning of collection
  var previousItems = this.items.slice(0);
  this.items = items.concat( previousItems );
  // start new layout
  this._resetLayout();
  this._manageStamps();
  // layout new stuff without transition
  this.layoutItems( items, true );
  this.reveal( items );
  // layout previous items
  this.layoutItems( previousItems );
};

/**
 * reveal a collection of items
 * @param {Array of Outlayer.Items} items
 */
proto.reveal = function( items ) {
  this._emitCompleteOnItems( 'reveal', items );
  if ( !items || !items.length ) {
    return;
  }
  var stagger = this.updateStagger();
  items.forEach( function( item, i ) {
    item.stagger( i * stagger );
    item.reveal();
  });
};

/**
 * hide a collection of items
 * @param {Array of Outlayer.Items} items
 */
proto.hide = function( items ) {
  this._emitCompleteOnItems( 'hide', items );
  if ( !items || !items.length ) {
    return;
  }
  var stagger = this.updateStagger();
  items.forEach( function( item, i ) {
    item.stagger( i * stagger );
    item.hide();
  });
};

/**
 * reveal item elements
 * @param {Array}, {Element}, {NodeList} items
 */
proto.revealItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.reveal( items );
};

/**
 * hide item elements
 * @param {Array}, {Element}, {NodeList} items
 */
proto.hideItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.hide( items );
};

/**
 * get Outlayer.Item, given an Element
 * @param {Element} elem
 * @param {Function} callback
 * @returns {Outlayer.Item} item
 */
proto.getItem = function( elem ) {
  // loop through items to get the one that matches
  for ( var i=0; i < this.items.length; i++ ) {
    var item = this.items[i];
    if ( item.element == elem ) {
      // return item
      return item;
    }
  }
};

/**
 * get collection of Outlayer.Items, given Elements
 * @param {Array} elems
 * @returns {Array} items - Outlayer.Items
 */
proto.getItems = function( elems ) {
  elems = utils.makeArray( elems );
  var items = [];
  elems.forEach( function( elem ) {
    var item = this.getItem( elem );
    if ( item ) {
      items.push( item );
    }
  }, this );

  return items;
};

/**
 * remove element(s) from instance and DOM
 * @param {Array or NodeList or Element} elems
 */
proto.remove = function( elems ) {
  var removeItems = this.getItems( elems );

  this._emitCompleteOnItems( 'remove', removeItems );

  // bail if no items to remove
  if ( !removeItems || !removeItems.length ) {
    return;
  }

  removeItems.forEach( function( item ) {
    item.remove();
    // remove item from collection
    utils.removeFrom( this.items, item );
  }, this );
};

// ----- destroy ----- //

// remove and disable Outlayer instance
proto.destroy = function() {
  // clean up dynamic styles
  var style = this.element.style;
  style.height = '';
  style.position = '';
  style.width = '';
  // destroy items
  this.items.forEach( function( item ) {
    item.destroy();
  });

  this.unbindResize();

  var id = this.element.outlayerGUID;
  delete instances[ id ]; // remove reference to instance by id
  delete this.element.outlayerGUID;
  // remove data for jQuery
  if ( jQuery ) {
    jQuery.removeData( this.element, this.constructor.namespace );
  }

};

// -------------------------- data -------------------------- //

/**
 * get Outlayer instance from element
 * @param {Element} elem
 * @returns {Outlayer}
 */
Outlayer.data = function( elem ) {
  elem = utils.getQueryElement( elem );
  var id = elem && elem.outlayerGUID;
  return id && instances[ id ];
};


// -------------------------- create Outlayer class -------------------------- //

/**
 * create a layout class
 * @param {String} namespace
 */
Outlayer.create = function( namespace, options ) {
  // sub-class Outlayer
  var Layout = subclass( Outlayer );
  // apply new options and compatOptions
  Layout.defaults = utils.extend( {}, Outlayer.defaults );
  utils.extend( Layout.defaults, options );
  Layout.compatOptions = utils.extend( {}, Outlayer.compatOptions  );

  Layout.namespace = namespace;

  Layout.data = Outlayer.data;

  // sub-class Item
  Layout.Item = subclass( Item );

  // -------------------------- declarative -------------------------- //

  utils.htmlInit( Layout, namespace );

  // -------------------------- jQuery bridge -------------------------- //

  // make into jQuery plugin
  if ( jQuery && jQuery.bridget ) {
    jQuery.bridget( namespace, Layout );
  }

  return Layout;
};

function subclass( Parent ) {
  function SubClass() {
    Parent.apply( this, arguments );
  }

  SubClass.prototype = Object.create( Parent.prototype );
  SubClass.prototype.constructor = SubClass;

  return SubClass;
}

// ----- helpers ----- //

// how many milliseconds are in each unit
var msUnits = {
  ms: 1,
  s: 1000
};

// munge time-like parameter into millisecond number
// '0.4s' -> 40
function getMilliseconds( time ) {
  if ( typeof time == 'number' ) {
    return time;
  }
  var matches = time.match( /(^\d*\.?\d*)(\w*)/ );
  var num = matches && matches[1];
  var unit = matches && matches[2];
  if ( !num.length ) {
    return 0;
  }
  num = parseFloat( num );
  var mult = msUnits[ unit ] || 1;
  return num * mult;
}

// ----- fin ----- //

// back in global
Outlayer.Item = Item;

return Outlayer;

}));


/***/ }),

/***/ "./node_modules/packery/js/item.js":
/*!*****************************************!*\
  !*** ./node_modules/packery/js/item.js ***!
  \*****************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Packery Item Element
**/

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(/*! outlayer/outlayer */ "./node_modules/outlayer/outlayer.js"),
        __webpack_require__(/*! ./rect */ "./node_modules/packery/js/rect.js")
      ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( Outlayer, Rect ) {
'use strict';

// -------------------------- Item -------------------------- //

var docElemStyle = document.documentElement.style;

var transformProperty = typeof docElemStyle.transform == 'string' ?
  'transform' : 'WebkitTransform';

// sub-class Item
var Item = function PackeryItem() {
  Outlayer.Item.apply( this, arguments );
};

var proto = Item.prototype = Object.create( Outlayer.Item.prototype );

var __create = proto._create;
proto._create = function() {
  // call default _create logic
  __create.call( this );
  this.rect = new Rect();
};

var _moveTo = proto.moveTo;
proto.moveTo = function( x, y ) {
  // don't shift 1px while dragging
  var dx = Math.abs( this.position.x - x );
  var dy = Math.abs( this.position.y - y );

  var canHackGoTo = this.layout.dragItemCount && !this.isPlacing &&
    !this.isTransitioning && dx < 1 && dy < 1;
  if ( canHackGoTo ) {
    this.goTo( x, y );
    return;
  }
  _moveTo.apply( this, arguments );
};

// -------------------------- placing -------------------------- //

proto.enablePlacing = function() {
  this.removeTransitionStyles();
  // remove transform property from transition
  if ( this.isTransitioning && transformProperty ) {
    this.element.style[ transformProperty ] = 'none';
  }
  this.isTransitioning = false;
  this.getSize();
  this.layout._setRectSize( this.element, this.rect );
  this.isPlacing = true;
};

proto.disablePlacing = function() {
  this.isPlacing = false;
};

// -----  ----- //

// remove element from DOM
proto.removeElem = function() {
  var parent = this.element.parentNode;
  if ( parent ) {
    parent.removeChild( this.element );
  }
  // add space back to packer
  this.layout.packer.addSpace( this.rect );
  this.emitEvent( 'remove', [ this ] );
};

// ----- dropPlaceholder ----- //

proto.showDropPlaceholder = function() {
  var dropPlaceholder = this.dropPlaceholder;
  if ( !dropPlaceholder ) {
    // create dropPlaceholder
    dropPlaceholder = this.dropPlaceholder = document.createElement('div');
    dropPlaceholder.className = 'packery-drop-placeholder';
    dropPlaceholder.style.position = 'absolute';
  }

  dropPlaceholder.style.width = this.size.width + 'px';
  dropPlaceholder.style.height = this.size.height + 'px';
  this.positionDropPlaceholder();
  this.layout.element.appendChild( dropPlaceholder );
};

proto.positionDropPlaceholder = function() {
  this.dropPlaceholder.style[ transformProperty ] = 'translate(' +
    this.rect.x + 'px, ' + this.rect.y + 'px)';
};

proto.hideDropPlaceholder = function() {
  // only remove once, #333
  var parent = this.dropPlaceholder.parentNode;
  if ( parent ) {
    parent.removeChild( this.dropPlaceholder );
  }
};

// -----  ----- //

return Item;

}));


/***/ }),

/***/ "./node_modules/packery/js/packer.js":
/*!*******************************************!*\
  !*** ./node_modules/packery/js/packer.js ***!
  \*******************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Packer
 * bin-packing algorithm
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(/*! ./rect */ "./node_modules/packery/js/rect.js") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var Packery; }

}( window, function factory( Rect ) {
'use strict';

// -------------------------- Packer -------------------------- //

/**
 * @param {Number} width
 * @param {Number} height
 * @param {String} sortDirection
 *   topLeft for vertical, leftTop for horizontal
 */
function Packer( width, height, sortDirection ) {
  this.width = width || 0;
  this.height = height || 0;
  this.sortDirection = sortDirection || 'downwardLeftToRight';

  this.reset();
}

var proto = Packer.prototype;

proto.reset = function() {
  this.spaces = [];

  var initialSpace = new Rect({
    x: 0,
    y: 0,
    width: this.width,
    height: this.height
  });

  this.spaces.push( initialSpace );
  // set sorter
  this.sorter = sorters[ this.sortDirection ] || sorters.downwardLeftToRight;
};

// change x and y of rect to fit with in Packer's available spaces
proto.pack = function( rect ) {
  for ( var i=0; i < this.spaces.length; i++ ) {
    var space = this.spaces[i];
    if ( space.canFit( rect ) ) {
      this.placeInSpace( rect, space );
      break;
    }
  }
};

proto.columnPack = function( rect ) {
  for ( var i=0; i < this.spaces.length; i++ ) {
    var space = this.spaces[i];
    var canFitInSpaceColumn = space.x <= rect.x &&
      space.x + space.width >= rect.x + rect.width &&
      space.height >= rect.height - 0.01; // fudge number for rounding error
    if ( canFitInSpaceColumn ) {
      rect.y = space.y;
      this.placed( rect );
      break;
    }
  }
};

proto.rowPack = function( rect ) {
  for ( var i=0; i < this.spaces.length; i++ ) {
    var space = this.spaces[i];
    var canFitInSpaceRow = space.y <= rect.y &&
      space.y + space.height >= rect.y + rect.height &&
      space.width >= rect.width - 0.01; // fudge number for rounding error
    if ( canFitInSpaceRow ) {
      rect.x = space.x;
      this.placed( rect );
      break;
    }
  }
};

proto.placeInSpace = function( rect, space ) {
  // place rect in space
  rect.x = space.x;
  rect.y = space.y;

  this.placed( rect );
};

// update spaces with placed rect
proto.placed = function( rect ) {
  // update spaces
  var revisedSpaces = [];
  for ( var i=0; i < this.spaces.length; i++ ) {
    var space = this.spaces[i];
    var newSpaces = space.getMaximalFreeRects( rect );
    // add either the original space or the new spaces to the revised spaces
    if ( newSpaces ) {
      revisedSpaces.push.apply( revisedSpaces, newSpaces );
    } else {
      revisedSpaces.push( space );
    }
  }

  this.spaces = revisedSpaces;

  this.mergeSortSpaces();
};

proto.mergeSortSpaces = function() {
  // remove redundant spaces
  Packer.mergeRects( this.spaces );
  this.spaces.sort( this.sorter );
};

// add a space back
proto.addSpace = function( rect ) {
  this.spaces.push( rect );
  this.mergeSortSpaces();
};

// -------------------------- utility functions -------------------------- //

/**
 * Remove redundant rectangle from array of rectangles
 * @param {Array} rects: an array of Rects
 * @returns {Array} rects: an array of Rects
**/
Packer.mergeRects = function( rects ) {
  var i = 0;
  var rect = rects[i];

  rectLoop:
  while ( rect ) {
    var j = 0;
    var compareRect = rects[ i + j ];

    while ( compareRect ) {
      if  ( compareRect == rect ) {
        j++; // next
      } else if ( compareRect.contains( rect ) ) {
        // remove rect
        rects.splice( i, 1 );
        rect = rects[i]; // set next rect
        continue rectLoop; // bail on compareLoop
      } else if ( rect.contains( compareRect ) ) {
        // remove compareRect
        rects.splice( i + j, 1 );
      } else {
        j++;
      }
      compareRect = rects[ i + j ]; // set next compareRect
    }
    i++;
    rect = rects[i];
  }

  return rects;
};


// -------------------------- sorters -------------------------- //

// functions for sorting rects in order
var sorters = {
  // top down, then left to right
  downwardLeftToRight: function( a, b ) {
    return a.y - b.y || a.x - b.x;
  },
  // left to right, then top down
  rightwardTopToBottom: function( a, b ) {
    return a.x - b.x || a.y - b.y;
  }
};


// --------------------------  -------------------------- //

return Packer;

}));


/***/ }),

/***/ "./node_modules/packery/js/packery.js":
/*!********************************************!*\
  !*** ./node_modules/packery/js/packery.js ***!
  \********************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Packery v2.1.2
 * Gapless, draggable grid layouts
 *
 * Licensed GPLv3 for open source use
 * or Packery Commercial License for commercial use
 *
 * http://packery.metafizzy.co
 * Copyright 2013-2018 Metafizzy
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(/*! get-size/get-size */ "./node_modules/get-size/get-size.js"),
        __webpack_require__(/*! outlayer/outlayer */ "./node_modules/outlayer/outlayer.js"),
        __webpack_require__(/*! ./rect */ "./node_modules/packery/js/rect.js"),
        __webpack_require__(/*! ./packer */ "./node_modules/packery/js/packer.js"),
        __webpack_require__(/*! ./item */ "./node_modules/packery/js/item.js")
      ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( getSize, Outlayer, Rect, Packer, Item ) {
'use strict';

// ----- Rect ----- //

// allow for pixel rounding errors IE8-IE11 & Firefox; #227
Rect.prototype.canFit = function( rect ) {
  return this.width >= rect.width - 1 && this.height >= rect.height - 1;
};

// -------------------------- Packery -------------------------- //

// create an Outlayer layout class
var Packery = Outlayer.create('packery');
Packery.Item = Item;

var proto = Packery.prototype;

proto._create = function() {
  // call super
  Outlayer.prototype._create.call( this );

  // initial properties
  this.packer = new Packer();
  // packer for drop targets
  this.shiftPacker = new Packer();
  this.isEnabled = true;

  this.dragItemCount = 0;

  // create drag handlers
  var _this = this;
  this.handleDraggabilly = {
    dragStart: function() {
      _this.itemDragStart( this.element );
    },
    dragMove: function() {
      _this.itemDragMove( this.element, this.position.x, this.position.y );
    },
    dragEnd: function() {
      _this.itemDragEnd( this.element );
    }
  };

  this.handleUIDraggable = {
    start: function handleUIDraggableStart( event, ui ) {
      // HTML5 may trigger dragstart, dismiss HTML5 dragging
      if ( !ui ) {
        return;
      }
      _this.itemDragStart( event.currentTarget );
    },
    drag: function handleUIDraggableDrag( event, ui ) {
      if ( !ui ) {
        return;
      }
      _this.itemDragMove( event.currentTarget, ui.position.left, ui.position.top );
    },
    stop: function handleUIDraggableStop( event, ui ) {
      if ( !ui ) {
        return;
      }
      _this.itemDragEnd( event.currentTarget );
    }
  };

};


// ----- init & layout ----- //

/**
 * logic before any new layout
 */
proto._resetLayout = function() {
  this.getSize();

  this._getMeasurements();

  // reset packer
  var width, height, sortDirection;
  // packer settings, if horizontal or vertical
  if ( this._getOption('horizontal') ) {
    width = Infinity;
    height = this.size.innerHeight + this.gutter;
    sortDirection = 'rightwardTopToBottom';
  } else {
    width = this.size.innerWidth + this.gutter;
    height = Infinity;
    sortDirection = 'downwardLeftToRight';
  }

  this.packer.width = this.shiftPacker.width = width;
  this.packer.height = this.shiftPacker.height = height;
  this.packer.sortDirection = this.shiftPacker.sortDirection = sortDirection;

  this.packer.reset();

  // layout
  this.maxY = 0;
  this.maxX = 0;
};

/**
 * update columnWidth, rowHeight, & gutter
 * @private
 */
proto._getMeasurements = function() {
  this._getMeasurement( 'columnWidth', 'width' );
  this._getMeasurement( 'rowHeight', 'height' );
  this._getMeasurement( 'gutter', 'width' );
};

proto._getItemLayoutPosition = function( item ) {
  this._setRectSize( item.element, item.rect );
  if ( this.isShifting || this.dragItemCount > 0 ) {
    var packMethod = this._getPackMethod();
    this.packer[ packMethod ]( item.rect );
  } else {
    this.packer.pack( item.rect );
  }

  this._setMaxXY( item.rect );
  return item.rect;
};

proto.shiftLayout = function() {
  this.isShifting = true;
  this.layout();
  delete this.isShifting;
};

proto._getPackMethod = function() {
  return this._getOption('horizontal') ? 'rowPack' : 'columnPack';
};


/**
 * set max X and Y value, for size of container
 * @param {Packery.Rect} rect
 * @private
 */
proto._setMaxXY = function( rect ) {
  this.maxX = Math.max( rect.x + rect.width, this.maxX );
  this.maxY = Math.max( rect.y + rect.height, this.maxY );
};

/**
 * set the width and height of a rect, applying columnWidth and rowHeight
 * @param {Element} elem
 * @param {Packery.Rect} rect
 */
proto._setRectSize = function( elem, rect ) {
  var size = getSize( elem );
  var w = size.outerWidth;
  var h = size.outerHeight;
  // size for columnWidth and rowHeight, if available
  // only check if size is non-zero, #177
  if ( w || h ) {
    w = this._applyGridGutter( w, this.columnWidth );
    h = this._applyGridGutter( h, this.rowHeight );
  }
  // rect must fit in packer
  rect.width = Math.min( w, this.packer.width );
  rect.height = Math.min( h, this.packer.height );
};

/**
 * fits item to columnWidth/rowHeight and adds gutter
 * @param {Number} measurement - item width or height
 * @param {Number} gridSize - columnWidth or rowHeight
 * @returns measurement
 */
proto._applyGridGutter = function( measurement, gridSize ) {
  // just add gutter if no gridSize
  if ( !gridSize ) {
    return measurement + this.gutter;
  }
  gridSize += this.gutter;
  // fit item to columnWidth/rowHeight
  var remainder = measurement % gridSize;
  var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
  measurement = Math[ mathMethod ]( measurement / gridSize ) * gridSize;
  return measurement;
};

proto._getContainerSize = function() {
  if ( this._getOption('horizontal') ) {
    return {
      width: this.maxX - this.gutter
    };
  } else {
    return {
      height: this.maxY - this.gutter
    };
  }
};


// -------------------------- stamp -------------------------- //

/**
 * makes space for element
 * @param {Element} elem
 */
proto._manageStamp = function( elem ) {

  var item = this.getItem( elem );
  var rect;
  if ( item && item.isPlacing ) {
    rect = item.rect;
  } else {
    var offset = this._getElementOffset( elem );
    rect = new Rect({
      x: this._getOption('originLeft') ? offset.left : offset.right,
      y: this._getOption('originTop') ? offset.top : offset.bottom
    });
  }

  this._setRectSize( elem, rect );
  // save its space in the packer
  this.packer.placed( rect );
  this._setMaxXY( rect );
};

// -------------------------- methods -------------------------- //

function verticalSorter( a, b ) {
  return a.position.y - b.position.y || a.position.x - b.position.x;
}

function horizontalSorter( a, b ) {
  return a.position.x - b.position.x || a.position.y - b.position.y;
}

proto.sortItemsByPosition = function() {
  var sorter = this._getOption('horizontal') ? horizontalSorter : verticalSorter;
  this.items.sort( sorter );
};

/**
 * Fit item element in its current position
 * Packery will position elements around it
 * useful for expanding elements
 *
 * @param {Element} elem
 * @param {Number} x - horizontal destination position, optional
 * @param {Number} y - vertical destination position, optional
 */
proto.fit = function( elem, x, y ) {
  var item = this.getItem( elem );
  if ( !item ) {
    return;
  }

  // stamp item to get it out of layout
  this.stamp( item.element );
  // set placing flag
  item.enablePlacing();
  this.updateShiftTargets( item );
  // fall back to current position for fitting
  x = x === undefined ? item.rect.x: x;
  y = y === undefined ? item.rect.y: y;
  // position it best at its destination
  this.shift( item, x, y );
  this._bindFitEvents( item );
  item.moveTo( item.rect.x, item.rect.y );
  // layout everything else
  this.shiftLayout();
  // return back to regularly scheduled programming
  this.unstamp( item.element );
  this.sortItemsByPosition();
  item.disablePlacing();
};

/**
 * emit event when item is fit and other items are laid out
 * @param {Packery.Item} item
 * @private
 */
proto._bindFitEvents = function( item ) {
  var _this = this;
  var ticks = 0;
  function onLayout() {
    ticks++;
    if ( ticks != 2 ) {
      return;
    }
    _this.dispatchEvent( 'fitComplete', null, [ item ] );
  }
  // when item is laid out
  item.once( 'layout', onLayout );
  // when all items are laid out
  this.once( 'layoutComplete', onLayout );
};

// -------------------------- resize -------------------------- //

// debounced, layout on resize
proto.resize = function() {
  // don't trigger if size did not change
  // or if resize was unbound. See #285, outlayer#9
  if ( !this.isResizeBound || !this.needsResizeLayout() ) {
    return;
  }

  if ( this.options.shiftPercentResize ) {
    this.resizeShiftPercentLayout();
  } else {
    this.layout();
  }
};

/**
 * check if layout is needed post layout
 * @returns Boolean
 */
proto.needsResizeLayout = function() {
  var size = getSize( this.element );
  var innerSize = this._getOption('horizontal') ? 'innerHeight' : 'innerWidth';
  return size[ innerSize ] != this.size[ innerSize ];
};

proto.resizeShiftPercentLayout = function() {
  var items = this._getItemsForLayout( this.items );

  var isHorizontal = this._getOption('horizontal');
  var coord = isHorizontal ? 'y' : 'x';
  var measure = isHorizontal ? 'height' : 'width';
  var segmentName = isHorizontal ? 'rowHeight' : 'columnWidth';
  var innerSize = isHorizontal ? 'innerHeight' : 'innerWidth';

  // proportional re-align items
  var previousSegment = this[ segmentName ];
  previousSegment = previousSegment && previousSegment + this.gutter;

  if ( previousSegment ) {
    this._getMeasurements();
    var currentSegment = this[ segmentName ] + this.gutter;
    items.forEach( function( item ) {
      var seg = Math.round( item.rect[ coord ] / previousSegment );
      item.rect[ coord ] = seg * currentSegment;
    });
  } else {
    var currentSize = getSize( this.element )[ innerSize ] + this.gutter;
    var previousSize = this.packer[ measure ];
    items.forEach( function( item ) {
      item.rect[ coord ] = ( item.rect[ coord ] / previousSize ) * currentSize;
    });
  }

  this.shiftLayout();
};

// -------------------------- drag -------------------------- //

/**
 * handle an item drag start event
 * @param {Element} elem
 */
proto.itemDragStart = function( elem ) {
  if ( !this.isEnabled ) {
    return;
  }
  this.stamp( elem );
  // this.ignore( elem );
  var item = this.getItem( elem );
  if ( !item ) {
    return;
  }

  item.enablePlacing();
  item.showDropPlaceholder();
  this.dragItemCount++;
  this.updateShiftTargets( item );
};

proto.updateShiftTargets = function( dropItem ) {
  this.shiftPacker.reset();

  // pack stamps
  this._getBoundingRect();
  var isOriginLeft = this._getOption('originLeft');
  var isOriginTop = this._getOption('originTop');
  this.stamps.forEach( function( stamp ) {
    // ignore dragged item
    var item = this.getItem( stamp );
    if ( item && item.isPlacing ) {
      return;
    }
    var offset = this._getElementOffset( stamp );
    var rect = new Rect({
      x: isOriginLeft ? offset.left : offset.right,
      y: isOriginTop ? offset.top : offset.bottom
    });
    this._setRectSize( stamp, rect );
    // save its space in the packer
    this.shiftPacker.placed( rect );
  }, this );

  // reset shiftTargets
  var isHorizontal = this._getOption('horizontal');
  var segmentName = isHorizontal ? 'rowHeight' : 'columnWidth';
  var measure = isHorizontal ? 'height' : 'width';

  this.shiftTargetKeys = [];
  this.shiftTargets = [];
  var boundsSize;
  var segment = this[ segmentName ];
  segment = segment && segment + this.gutter;

  if ( segment ) {
    var segmentSpan = Math.ceil( dropItem.rect[ measure ] / segment );
    var segs = Math.floor( ( this.shiftPacker[ measure ] + this.gutter ) / segment );
    boundsSize = ( segs - segmentSpan ) * segment;
    // add targets on top
    for ( var i=0; i < segs; i++ ) {
      var initialX = isHorizontal ? 0 : i * segment;
      var initialY = isHorizontal ? i * segment : 0;
      this._addShiftTarget( initialX, initialY, boundsSize );
    }
  } else {
    boundsSize = ( this.shiftPacker[ measure ] + this.gutter ) - dropItem.rect[ measure ];
    this._addShiftTarget( 0, 0, boundsSize );
  }

  // pack each item to measure where shiftTargets are
  var items = this._getItemsForLayout( this.items );
  var packMethod = this._getPackMethod();
  items.forEach( function( item ) {
    var rect = item.rect;
    this._setRectSize( item.element, rect );
    this.shiftPacker[ packMethod ]( rect );

    // add top left corner
    this._addShiftTarget( rect.x, rect.y, boundsSize );
    // add bottom left / top right corner
    var cornerX = isHorizontal ? rect.x + rect.width : rect.x;
    var cornerY = isHorizontal ? rect.y : rect.y + rect.height;
    this._addShiftTarget( cornerX, cornerY, boundsSize );

    if ( segment ) {
      // add targets for each column on bottom / row on right
      var segSpan = Math.round( rect[ measure ] / segment );
      for ( var i=1; i < segSpan; i++ ) {
        var segX = isHorizontal ? cornerX : rect.x + segment * i;
        var segY = isHorizontal ? rect.y + segment * i : cornerY;
        this._addShiftTarget( segX, segY, boundsSize );
      }
    }
  }, this );

};

proto._addShiftTarget = function( x, y, boundsSize ) {
  var checkCoord = this._getOption('horizontal') ? y : x;
  if ( checkCoord !== 0 && checkCoord > boundsSize ) {
    return;
  }
  // create string for a key, easier to keep track of what targets
  var key = x + ',' + y;
  var hasKey = this.shiftTargetKeys.indexOf( key ) != -1;
  if ( hasKey ) {
    return;
  }
  this.shiftTargetKeys.push( key );
  this.shiftTargets.push({ x: x, y: y });
};

// -------------------------- drop -------------------------- //

proto.shift = function( item, x, y ) {
  var shiftPosition;
  var minDistance = Infinity;
  var position = { x: x, y: y };
  this.shiftTargets.forEach( function( target ) {
    var distance = getDistance( target, position );
    if ( distance < minDistance ) {
      shiftPosition = target;
      minDistance = distance;
    }
  });
  item.rect.x = shiftPosition.x;
  item.rect.y = shiftPosition.y;
};

function getDistance( a, b ) {
  var dx = b.x - a.x;
  var dy = b.y - a.y;
  return Math.sqrt( dx * dx + dy * dy );
}

// -------------------------- drag move -------------------------- //

var DRAG_THROTTLE_TIME = 120;

/**
 * handle an item drag move event
 * @param {Element} elem
 * @param {Number} x - horizontal change in position
 * @param {Number} y - vertical change in position
 */
proto.itemDragMove = function( elem, x, y ) {
  var item = this.isEnabled && this.getItem( elem );
  if ( !item ) {
    return;
  }

  x -= this.size.paddingLeft;
  y -= this.size.paddingTop;

  var _this = this;
  function onDrag() {
    _this.shift( item, x, y );
    item.positionDropPlaceholder();
    _this.layout();
  }

  // throttle
  var now = new Date();
  var isThrottled = this._itemDragTime && now - this._itemDragTime < DRAG_THROTTLE_TIME;
  if ( isThrottled ) {
    clearTimeout( this.dragTimeout );
    this.dragTimeout = setTimeout( onDrag, DRAG_THROTTLE_TIME );
  } else {
    onDrag();
    this._itemDragTime = now;
  }
};

// -------------------------- drag end -------------------------- //

/**
 * handle an item drag end event
 * @param {Element} elem
 */
proto.itemDragEnd = function( elem ) {
  var item = this.isEnabled && this.getItem( elem );
  if ( !item ) {
    return;
  }

  clearTimeout( this.dragTimeout );
  item.element.classList.add('is-positioning-post-drag');

  var completeCount = 0;
  var _this = this;
  function onDragEndLayoutComplete() {
    completeCount++;
    if ( completeCount != 2 ) {
      return;
    }
    // reset drag item
    item.element.classList.remove('is-positioning-post-drag');
    item.hideDropPlaceholder();
    _this.dispatchEvent( 'dragItemPositioned', null, [ item ] );
  }

  item.once( 'layout', onDragEndLayoutComplete );
  this.once( 'layoutComplete', onDragEndLayoutComplete );
  item.moveTo( item.rect.x, item.rect.y );
  this.layout();
  this.dragItemCount = Math.max( 0, this.dragItemCount - 1 );
  this.sortItemsByPosition();
  item.disablePlacing();
  this.unstamp( item.element );
};

/**
 * binds Draggabilly events
 * @param {Draggabilly} draggie
 */
proto.bindDraggabillyEvents = function( draggie ) {
  this._bindDraggabillyEvents( draggie, 'on' );
};

proto.unbindDraggabillyEvents = function( draggie ) {
  this._bindDraggabillyEvents( draggie, 'off' );
};

proto._bindDraggabillyEvents = function( draggie, method ) {
  var handlers = this.handleDraggabilly;
  draggie[ method ]( 'dragStart', handlers.dragStart );
  draggie[ method ]( 'dragMove', handlers.dragMove );
  draggie[ method ]( 'dragEnd', handlers.dragEnd );
};

/**
 * binds jQuery UI Draggable events
 * @param {jQuery} $elems
 */
proto.bindUIDraggableEvents = function( $elems ) {
  this._bindUIDraggableEvents( $elems, 'on' );
};

proto.unbindUIDraggableEvents = function( $elems ) {
  this._bindUIDraggableEvents( $elems, 'off' );
};

proto._bindUIDraggableEvents = function( $elems, method ) {
  var handlers = this.handleUIDraggable;
  $elems
    [ method ]( 'dragstart', handlers.start )
    [ method ]( 'drag', handlers.drag )
    [ method ]( 'dragstop', handlers.stop );
};

// ----- destroy ----- //

var _destroy = proto.destroy;
proto.destroy = function() {
  _destroy.apply( this, arguments );
  // disable flag; prevent drag events from triggering. #72
  this.isEnabled = false;
};

// -----  ----- //

Packery.Rect = Rect;
Packery.Packer = Packer;

return Packery;

}));


/***/ }),

/***/ "./node_modules/packery/js/rect.js":
/*!*****************************************!*\
  !*** ./node_modules/packery/js/rect.js ***!
  \*****************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Rect
 * low-level utility class for basic geometry
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory() {
'use strict';

// -------------------------- Rect -------------------------- //

function Rect( props ) {
  // extend properties from defaults
  for ( var prop in Rect.defaults ) {
    this[ prop ] = Rect.defaults[ prop ];
  }

  for ( prop in props ) {
    this[ prop ] = props[ prop ];
  }

}

Rect.defaults = {
  x: 0,
  y: 0,
  width: 0,
  height: 0
};

var proto = Rect.prototype;

/**
 * Determines whether or not this rectangle wholly encloses another rectangle or point.
 * @param {Rect} rect
 * @returns {Boolean}
**/
proto.contains = function( rect ) {
  // points don't have width or height
  var otherWidth = rect.width || 0;
  var otherHeight = rect.height || 0;
  return this.x <= rect.x &&
    this.y <= rect.y &&
    this.x + this.width >= rect.x + otherWidth &&
    this.y + this.height >= rect.y + otherHeight;
};

/**
 * Determines whether or not the rectangle intersects with another.
 * @param {Rect} rect
 * @returns {Boolean}
**/
proto.overlaps = function( rect ) {
  var thisRight = this.x + this.width;
  var thisBottom = this.y + this.height;
  var rectRight = rect.x + rect.width;
  var rectBottom = rect.y + rect.height;

  // http://stackoverflow.com/a/306332
  return this.x < rectRight &&
    thisRight > rect.x &&
    this.y < rectBottom &&
    thisBottom > rect.y;
};

/**
 * @param {Rect} rect - the overlapping rect
 * @returns {Array} freeRects - rects representing the area around the rect
**/
proto.getMaximalFreeRects = function( rect ) {

  // if no intersection, return false
  if ( !this.overlaps( rect ) ) {
    return false;
  }

  var freeRects = [];
  var freeRect;

  var thisRight = this.x + this.width;
  var thisBottom = this.y + this.height;
  var rectRight = rect.x + rect.width;
  var rectBottom = rect.y + rect.height;

  // top
  if ( this.y < rect.y ) {
    freeRect = new Rect({
      x: this.x,
      y: this.y,
      width: this.width,
      height: rect.y - this.y
    });
    freeRects.push( freeRect );
  }

  // right
  if ( thisRight > rectRight ) {
    freeRect = new Rect({
      x: rectRight,
      y: this.y,
      width: thisRight - rectRight,
      height: this.height
    });
    freeRects.push( freeRect );
  }

  // bottom
  if ( thisBottom > rectBottom ) {
    freeRect = new Rect({
      x: this.x,
      y: rectBottom,
      width: this.width,
      height: thisBottom - rectBottom
    });
    freeRects.push( freeRect );
  }

  // left
  if ( this.x < rect.x ) {
    freeRect = new Rect({
      x: this.x,
      y: this.y,
      width: rect.x - this.x,
      height: this.height
    });
    freeRects.push( freeRect );
  }

  return freeRects;
};

proto.canFit = function( rect ) {
  return this.width >= rect.width && this.height >= rect.height;
};

return Rect;

}));


/***/ }),

/***/ "./node_modules/dropzone/dist/dropzone.mjs":
/*!*************************************************!*\
  !*** ./node_modules/dropzone/dist/dropzone.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dropzone: () => (/* binding */ $3ed269f2f0fb224b$export$2e2bcd8739ae039),
/* harmony export */   "default": () => (/* binding */ $3ed269f2f0fb224b$export$2e2bcd8739ae039)
/* harmony export */ });
/* harmony import */ var just_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! just-extend */ "./node_modules/just-extend/index.esm.js");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

class $4040acfd8584338d$export$2e2bcd8739ae039 {
    // Add an event listener for given event
    on(event, fn) {
        this._callbacks = this._callbacks || {
        };
        // Create namespace for this event
        if (!this._callbacks[event]) this._callbacks[event] = [];
        this._callbacks[event].push(fn);
        return this;
    }
    emit(event, ...args) {
        this._callbacks = this._callbacks || {
        };
        let callbacks = this._callbacks[event];
        if (callbacks) for (let callback of callbacks)callback.apply(this, args);
        // trigger a corresponding DOM event
        if (this.element) this.element.dispatchEvent(this.makeEvent("dropzone:" + event, {
            args: args
        }));
        return this;
    }
    makeEvent(eventName, detail) {
        let params = {
            bubbles: true,
            cancelable: true,
            detail: detail
        };
        if (typeof window.CustomEvent === "function") return new CustomEvent(eventName, params);
        else {
            // IE 11 support
            // https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
            var evt = document.createEvent("CustomEvent");
            evt.initCustomEvent(eventName, params.bubbles, params.cancelable, params.detail);
            return evt;
        }
    }
    // Remove event listener for given event. If fn is not provided, all event
    // listeners for that event will be removed. If neither is provided, all
    // event listeners will be removed.
    off(event, fn) {
        if (!this._callbacks || arguments.length === 0) {
            this._callbacks = {
            };
            return this;
        }
        // specific event
        let callbacks = this._callbacks[event];
        if (!callbacks) return this;
        // remove all handlers
        if (arguments.length === 1) {
            delete this._callbacks[event];
            return this;
        }
        // remove specific handler
        for(let i = 0; i < callbacks.length; i++){
            let callback = callbacks[i];
            if (callback === fn) {
                callbacks.splice(i, 1);
                break;
            }
        }
        return this;
    }
}



var $fd6031f88dce2e32$exports = {};
$fd6031f88dce2e32$exports = "<div class=\"dz-preview dz-file-preview\">\n  <div class=\"dz-image\"><img data-dz-thumbnail=\"\"></div>\n  <div class=\"dz-details\">\n    <div class=\"dz-size\"><span data-dz-size=\"\"></span></div>\n    <div class=\"dz-filename\"><span data-dz-name=\"\"></span></div>\n  </div>\n  <div class=\"dz-progress\">\n    <span class=\"dz-upload\" data-dz-uploadprogress=\"\"></span>\n  </div>\n  <div class=\"dz-error-message\"><span data-dz-errormessage=\"\"></span></div>\n  <div class=\"dz-success-mark\">\n    <svg width=\"54\" height=\"54\" viewBox=\"0 0 54 54\" fill=\"white\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M10.2071 29.7929L14.2929 25.7071C14.6834 25.3166 15.3166 25.3166 15.7071 25.7071L21.2929 31.2929C21.6834 31.6834 22.3166 31.6834 22.7071 31.2929L38.2929 15.7071C38.6834 15.3166 39.3166 15.3166 39.7071 15.7071L43.7929 19.7929C44.1834 20.1834 44.1834 20.8166 43.7929 21.2071L22.7071 42.2929C22.3166 42.6834 21.6834 42.6834 21.2929 42.2929L10.2071 31.2071C9.81658 30.8166 9.81658 30.1834 10.2071 29.7929Z\"></path>\n    </svg>\n  </div>\n  <div class=\"dz-error-mark\">\n    <svg width=\"54\" height=\"54\" viewBox=\"0 0 54 54\" fill=\"white\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M26.2929 20.2929L19.2071 13.2071C18.8166 12.8166 18.1834 12.8166 17.7929 13.2071L13.2071 17.7929C12.8166 18.1834 12.8166 18.8166 13.2071 19.2071L20.2929 26.2929C20.6834 26.6834 20.6834 27.3166 20.2929 27.7071L13.2071 34.7929C12.8166 35.1834 12.8166 35.8166 13.2071 36.2071L17.7929 40.7929C18.1834 41.1834 18.8166 41.1834 19.2071 40.7929L26.2929 33.7071C26.6834 33.3166 27.3166 33.3166 27.7071 33.7071L34.7929 40.7929C35.1834 41.1834 35.8166 41.1834 36.2071 40.7929L40.7929 36.2071C41.1834 35.8166 41.1834 35.1834 40.7929 34.7929L33.7071 27.7071C33.3166 27.3166 33.3166 26.6834 33.7071 26.2929L40.7929 19.2071C41.1834 18.8166 41.1834 18.1834 40.7929 17.7929L36.2071 13.2071C35.8166 12.8166 35.1834 12.8166 34.7929 13.2071L27.7071 20.2929C27.3166 20.6834 26.6834 20.6834 26.2929 20.2929Z\"></path>\n    </svg>\n  </div>\n</div>\n";


let $4ca367182776f80b$var$defaultOptions = {
    /**
   * Has to be specified on elements other than form (or when the form doesn't
   * have an `action` attribute).
   *
   * You can also provide a function that will be called with `files` and
   * `dataBlocks`  and must return the url as string.
   */ url: null,
    /**
   * Can be changed to `"put"` if necessary. You can also provide a function
   * that will be called with `files` and must return the method (since `v3.12.0`).
   */ method: "post",
    /**
   * Will be set on the XHRequest.
   */ withCredentials: false,
    /**
   * The timeout for the XHR requests in milliseconds (since `v4.4.0`).
   * If set to null or 0, no timeout is going to be set.
   */ timeout: null,
    /**
   * How many file uploads to process in parallel (See the
   * Enqueuing file uploads documentation section for more info)
   */ parallelUploads: 2,
    /**
   * Whether to send multiple files in one request. If
   * this it set to true, then the fallback file input element will
   * have the `multiple` attribute as well. This option will
   * also trigger additional events (like `processingmultiple`). See the events
   * documentation section for more information.
   */ uploadMultiple: false,
    /**
   * Whether you want files to be uploaded in chunks to your server. This can't be
   * used in combination with `uploadMultiple`.
   *
   * See [chunksUploaded](#config-chunksUploaded) for the callback to finalise an upload.
   */ chunking: false,
    /**
   * If `chunking` is enabled, this defines whether **every** file should be chunked,
   * even if the file size is below chunkSize. This means, that the additional chunk
   * form data will be submitted and the `chunksUploaded` callback will be invoked.
   */ forceChunking: false,
    /**
   * If `chunking` is `true`, then this defines the chunk size in bytes.
   */ chunkSize: 2097152,
    /**
   * If `true`, the individual chunks of a file are being uploaded simultaneously.
   */ parallelChunkUploads: false,
    /**
   * Whether a chunk should be retried if it fails.
   */ retryChunks: false,
    /**
   * If `retryChunks` is true, how many times should it be retried.
   */ retryChunksLimit: 3,
    /**
   * The maximum filesize (in MiB) that is allowed to be uploaded.
   */ maxFilesize: 256,
    /**
   * The name of the file param that gets transferred.
   * **NOTE**: If you have the option  `uploadMultiple` set to `true`, then
   * Dropzone will append `[]` to the name.
   */ paramName: "file",
    /**
   * Whether thumbnails for images should be generated
   */ createImageThumbnails: true,
    /**
   * In MB. When the filename exceeds this limit, the thumbnail will not be generated.
   */ maxThumbnailFilesize: 10,
    /**
   * If `null`, the ratio of the image will be used to calculate it.
   */ thumbnailWidth: 120,
    /**
   * The same as `thumbnailWidth`. If both are null, images will not be resized.
   */ thumbnailHeight: 120,
    /**
   * How the images should be scaled down in case both, `thumbnailWidth` and `thumbnailHeight` are provided.
   * Can be either `contain` or `crop`.
   */ thumbnailMethod: "crop",
    /**
   * If set, images will be resized to these dimensions before being **uploaded**.
   * If only one, `resizeWidth` **or** `resizeHeight` is provided, the original aspect
   * ratio of the file will be preserved.
   *
   * The `options.transformFile` function uses these options, so if the `transformFile` function
   * is overridden, these options don't do anything.
   */ resizeWidth: null,
    /**
   * See `resizeWidth`.
   */ resizeHeight: null,
    /**
   * The mime type of the resized image (before it gets uploaded to the server).
   * If `null` the original mime type will be used. To force jpeg, for example, use `image/jpeg`.
   * See `resizeWidth` for more information.
   */ resizeMimeType: null,
    /**
   * The quality of the resized images. See `resizeWidth`.
   */ resizeQuality: 0.8,
    /**
   * How the images should be scaled down in case both, `resizeWidth` and `resizeHeight` are provided.
   * Can be either `contain` or `crop`.
   */ resizeMethod: "contain",
    /**
   * The base that is used to calculate the **displayed** filesize. You can
   * change this to 1024 if you would rather display kibibytes, mebibytes,
   * etc... 1024 is technically incorrect, because `1024 bytes` are `1 kibibyte`
   * not `1 kilobyte`. You can change this to `1024` if you don't care about
   * validity.
   */ filesizeBase: 1000,
    /**
   * If not `null` defines how many files this Dropzone handles. If it exceeds,
   * the event `maxfilesexceeded` will be called. The dropzone element gets the
   * class `dz-max-files-reached` accordingly so you can provide visual
   * feedback.
   */ maxFiles: null,
    /**
   * An optional object to send additional headers to the server. Eg:
   * `{ "My-Awesome-Header": "header value" }`
   */ headers: null,
    /**
   * Should the default headers be set or not?
   * Accept: application/json <- for requesting json response
   * Cache-Control: no-cache <- Request shouldnt be cached
   * X-Requested-With: XMLHttpRequest <- We sent the request via XMLHttpRequest
   */ defaultHeaders: true,
    /**
   * If `true`, the dropzone element itself will be clickable, if `false`
   * nothing will be clickable.
   *
   * You can also pass an HTML element, a CSS selector (for multiple elements)
   * or an array of those. In that case, all of those elements will trigger an
   * upload when clicked.
   */ clickable: true,
    /**
   * Whether hidden files in directories should be ignored.
   */ ignoreHiddenFiles: true,
    /**
   * The default implementation of `accept` checks the file's mime type or
   * extension against this list. This is a comma separated list of mime
   * types or file extensions.
   *
   * Eg.: `image/*,application/pdf,.psd`
   *
   * If the Dropzone is `clickable` this option will also be used as
   * [`accept`](https://developer.mozilla.org/en-US/docs/HTML/Element/input#attr-accept)
   * parameter on the hidden file input as well.
   */ acceptedFiles: null,
    /**
   * **Deprecated!**
   * Use acceptedFiles instead.
   */ acceptedMimeTypes: null,
    /**
   * If false, files will be added to the queue but the queue will not be
   * processed automatically.
   * This can be useful if you need some additional user input before sending
   * files (or if you want want all files sent at once).
   * If you're ready to send the file simply call `myDropzone.processQueue()`.
   *
   * See the [enqueuing file uploads](#enqueuing-file-uploads) documentation
   * section for more information.
   */ autoProcessQueue: true,
    /**
   * If false, files added to the dropzone will not be queued by default.
   * You'll have to call `enqueueFile(file)` manually.
   */ autoQueue: true,
    /**
   * If `true`, this will add a link to every file preview to remove or cancel (if
   * already uploading) the file. The `dictCancelUpload`, `dictCancelUploadConfirmation`
   * and `dictRemoveFile` options are used for the wording.
   */ addRemoveLinks: false,
    /**
   * Defines where to display the file previews – if `null` the
   * Dropzone element itself is used. Can be a plain `HTMLElement` or a CSS
   * selector. The element should have the `dropzone-previews` class so
   * the previews are displayed properly.
   */ previewsContainer: null,
    /**
   * Set this to `true` if you don't want previews to be shown.
   */ disablePreviews: false,
    /**
   * This is the element the hidden input field (which is used when clicking on the
   * dropzone to trigger file selection) will be appended to. This might
   * be important in case you use frameworks to switch the content of your page.
   *
   * Can be a selector string, or an element directly.
   */ hiddenInputContainer: "body",
    /**
   * If null, no capture type will be specified
   * If camera, mobile devices will skip the file selection and choose camera
   * If microphone, mobile devices will skip the file selection and choose the microphone
   * If camcorder, mobile devices will skip the file selection and choose the camera in video mode
   * On apple devices multiple must be set to false.  AcceptedFiles may need to
   * be set to an appropriate mime type (e.g. "image/*", "audio/*", or "video/*").
   */ capture: null,
    /**
   * **Deprecated**. Use `renameFile` instead.
   */ renameFilename: null,
    /**
   * A function that is invoked before the file is uploaded to the server and renames the file.
   * This function gets the `File` as argument and can use the `file.name`. The actual name of the
   * file that gets used during the upload can be accessed through `file.upload.filename`.
   */ renameFile: null,
    /**
   * If `true` the fallback will be forced. This is very useful to test your server
   * implementations first and make sure that everything works as
   * expected without dropzone if you experience problems, and to test
   * how your fallbacks will look.
   */ forceFallback: false,
    /**
   * The text used before any files are dropped.
   */ dictDefaultMessage: "Drop files here to upload",
    /**
   * The text that replaces the default message text it the browser is not supported.
   */ dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
    /**
   * The text that will be added before the fallback form.
   * If you provide a  fallback element yourself, or if this option is `null` this will
   * be ignored.
   */ dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
    /**
   * If the filesize is too big.
   * `{{filesize}}` and `{{maxFilesize}}` will be replaced with the respective configuration values.
   */ dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
    /**
   * If the file doesn't match the file type.
   */ dictInvalidFileType: "You can't upload files of this type.",
    /**
   * If the server response was invalid.
   * `{{statusCode}}` will be replaced with the servers status code.
   */ dictResponseError: "Server responded with {{statusCode}} code.",
    /**
   * If `addRemoveLinks` is true, the text to be used for the cancel upload link.
   */ dictCancelUpload: "Cancel upload",
    /**
   * The text that is displayed if an upload was manually canceled
   */ dictUploadCanceled: "Upload canceled.",
    /**
   * If `addRemoveLinks` is true, the text to be used for confirmation when cancelling upload.
   */ dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
    /**
   * If `addRemoveLinks` is true, the text to be used to remove a file.
   */ dictRemoveFile: "Remove file",
    /**
   * If this is not null, then the user will be prompted before removing a file.
   */ dictRemoveFileConfirmation: null,
    /**
   * Displayed if `maxFiles` is st and exceeded.
   * The string `{{maxFiles}}` will be replaced by the configuration value.
   */ dictMaxFilesExceeded: "You can not upload any more files.",
    /**
   * Allows you to translate the different units. Starting with `tb` for terabytes and going down to
   * `b` for bytes.
   */ dictFileSizeUnits: {
        tb: "TB",
        gb: "GB",
        mb: "MB",
        kb: "KB",
        b: "b"
    },
    /**
   * Called when dropzone initialized
   * You can add event listeners here
   */ init () {
    },
    /**
   * Can be an **object** of additional parameters to transfer to the server, **or** a `Function`
   * that gets invoked with the `files`, `xhr` and, if it's a chunked upload, `chunk` arguments. In case
   * of a function, this needs to return a map.
   *
   * The default implementation does nothing for normal uploads, but adds relevant information for
   * chunked uploads.
   *
   * This is the same as adding hidden input fields in the form element.
   */ params (files, xhr, chunk) {
        if (chunk) return {
            dzuuid: chunk.file.upload.uuid,
            dzchunkindex: chunk.index,
            dztotalfilesize: chunk.file.size,
            dzchunksize: this.options.chunkSize,
            dztotalchunkcount: chunk.file.upload.totalChunkCount,
            dzchunkbyteoffset: chunk.index * this.options.chunkSize
        };
    },
    /**
   * A function that gets a [file](https://developer.mozilla.org/en-US/docs/DOM/File)
   * and a `done` function as parameters.
   *
   * If the done function is invoked without arguments, the file is "accepted" and will
   * be processed. If you pass an error message, the file is rejected, and the error
   * message will be displayed.
   * This function will not be called if the file is too big or doesn't match the mime types.
   */ accept (file, done) {
        return done();
    },
    /**
   * The callback that will be invoked when all chunks have been uploaded for a file.
   * It gets the file for which the chunks have been uploaded as the first parameter,
   * and the `done` function as second. `done()` needs to be invoked when everything
   * needed to finish the upload process is done.
   */ chunksUploaded: function(file, done) {
        done();
    },
    /**
   * Sends the file as binary blob in body instead of form data.
   * If this is set, the `params` option will be ignored.
   * It's an error to set this to `true` along with `uploadMultiple` since
   * multiple files cannot be in a single binary body.
   */ binaryBody: false,
    /**
   * Gets called when the browser is not supported.
   * The default implementation shows the fallback input field and adds
   * a text.
   */ fallback () {
        // This code should pass in IE7... :(
        let messageElement;
        this.element.className = `${this.element.className} dz-browser-not-supported`;
        for (let child of this.element.getElementsByTagName("div"))if (/(^| )dz-message($| )/.test(child.className)) {
            messageElement = child;
            child.className = "dz-message"; // Removes the 'dz-default' class
            break;
        }
        if (!messageElement) {
            messageElement = $3ed269f2f0fb224b$export$2e2bcd8739ae039.createElement('<div class="dz-message"><span></span></div>');
            this.element.appendChild(messageElement);
        }
        let span = messageElement.getElementsByTagName("span")[0];
        if (span) {
            if (span.textContent != null) span.textContent = this.options.dictFallbackMessage;
            else if (span.innerText != null) span.innerText = this.options.dictFallbackMessage;
        }
        return this.element.appendChild(this.getFallbackForm());
    },
    /**
   * Gets called to calculate the thumbnail dimensions.
   *
   * It gets `file`, `width` and `height` (both may be `null`) as parameters and must return an object containing:
   *
   *  - `srcWidth` & `srcHeight` (required)
   *  - `trgWidth` & `trgHeight` (required)
   *  - `srcX` & `srcY` (optional, default `0`)
   *  - `trgX` & `trgY` (optional, default `0`)
   *
   * Those values are going to be used by `ctx.drawImage()`.
   */ resize (file, width, height, resizeMethod) {
        let info = {
            srcX: 0,
            srcY: 0,
            srcWidth: file.width,
            srcHeight: file.height
        };
        let srcRatio = file.width / file.height;
        // Automatically calculate dimensions if not specified
        if (width == null && height == null) {
            width = info.srcWidth;
            height = info.srcHeight;
        } else if (width == null) width = height * srcRatio;
        else if (height == null) height = width / srcRatio;
        // Make sure images aren't upscaled
        width = Math.min(width, info.srcWidth);
        height = Math.min(height, info.srcHeight);
        let trgRatio = width / height;
        if (info.srcWidth > width || info.srcHeight > height) {
            // Image is bigger and needs rescaling
            if (resizeMethod === "crop") {
                if (srcRatio > trgRatio) {
                    info.srcHeight = file.height;
                    info.srcWidth = info.srcHeight * trgRatio;
                } else {
                    info.srcWidth = file.width;
                    info.srcHeight = info.srcWidth / trgRatio;
                }
            } else if (resizeMethod === "contain") {
                // Method 'contain'
                if (srcRatio > trgRatio) height = width / srcRatio;
                else width = height * srcRatio;
            } else throw new Error(`Unknown resizeMethod '${resizeMethod}'`);
        }
        info.srcX = (file.width - info.srcWidth) / 2;
        info.srcY = (file.height - info.srcHeight) / 2;
        info.trgWidth = width;
        info.trgHeight = height;
        return info;
    },
    /**
   * Can be used to transform the file (for example, resize an image if necessary).
   *
   * The default implementation uses `resizeWidth` and `resizeHeight` (if provided) and resizes
   * images according to those dimensions.
   *
   * Gets the `file` as the first parameter, and a `done()` function as the second, that needs
   * to be invoked with the file when the transformation is done.
   */ transformFile (file, done) {
        if ((this.options.resizeWidth || this.options.resizeHeight) && file.type.match(/image.*/)) return this.resizeImage(file, this.options.resizeWidth, this.options.resizeHeight, this.options.resizeMethod, done);
        else return done(file);
    },
    /**
   * A string that contains the template used for each dropped
   * file. Change it to fulfill your needs but make sure to properly
   * provide all elements.
   *
   * If you want to use an actual HTML element instead of providing a String
   * as a config option, you could create a div with the id `tpl`,
   * put the template inside it and provide the element like this:
   *
   *     document
   *       .querySelector('#tpl')
   *       .innerHTML
   *
   */ previewTemplate: (/*@__PURE__*/$parcel$interopDefault($fd6031f88dce2e32$exports)),
    /*
   Those functions register themselves to the events on init and handle all
   the user interface specific stuff. Overwriting them won't break the upload
   but can break the way it's displayed.
   You can overwrite them if you don't like the default behavior. If you just
   want to add an additional event handler, register it on the dropzone object
   and don't overwrite those options.
   */ // Those are self explanatory and simply concern the DragnDrop.
    drop (e) {
        return this.element.classList.remove("dz-drag-hover");
    },
    dragstart (e) {
    },
    dragend (e) {
        return this.element.classList.remove("dz-drag-hover");
    },
    dragenter (e) {
        return this.element.classList.add("dz-drag-hover");
    },
    dragover (e) {
        return this.element.classList.add("dz-drag-hover");
    },
    dragleave (e) {
        return this.element.classList.remove("dz-drag-hover");
    },
    paste (e) {
    },
    // Called whenever there are no files left in the dropzone anymore, and the
    // dropzone should be displayed as if in the initial state.
    reset () {
        return this.element.classList.remove("dz-started");
    },
    // Called when a file is added to the queue
    // Receives `file`
    addedfile (file) {
        if (this.element === this.previewsContainer) this.element.classList.add("dz-started");
        if (this.previewsContainer && !this.options.disablePreviews) {
            file.previewElement = $3ed269f2f0fb224b$export$2e2bcd8739ae039.createElement(this.options.previewTemplate.trim());
            file.previewTemplate = file.previewElement; // Backwards compatibility
            this.previewsContainer.appendChild(file.previewElement);
            for (var node of file.previewElement.querySelectorAll("[data-dz-name]"))node.textContent = file.name;
            for (node of file.previewElement.querySelectorAll("[data-dz-size]"))node.innerHTML = this.filesize(file.size);
            if (this.options.addRemoveLinks) {
                file._removeLink = $3ed269f2f0fb224b$export$2e2bcd8739ae039.createElement(`<a class="dz-remove" href="javascript:undefined;" data-dz-remove>${this.options.dictRemoveFile}</a>`);
                file.previewElement.appendChild(file._removeLink);
            }
            let removeFileEvent = (e)=>{
                e.preventDefault();
                e.stopPropagation();
                if (file.status === $3ed269f2f0fb224b$export$2e2bcd8739ae039.UPLOADING) return $3ed269f2f0fb224b$export$2e2bcd8739ae039.confirm(this.options.dictCancelUploadConfirmation, ()=>this.removeFile(file)
                );
                else {
                    if (this.options.dictRemoveFileConfirmation) return $3ed269f2f0fb224b$export$2e2bcd8739ae039.confirm(this.options.dictRemoveFileConfirmation, ()=>this.removeFile(file)
                    );
                    else return this.removeFile(file);
                }
            };
            for (let removeLink of file.previewElement.querySelectorAll("[data-dz-remove]"))removeLink.addEventListener("click", removeFileEvent);
        }
    },
    // Called whenever a file is removed.
    removedfile (file) {
        if (file.previewElement != null && file.previewElement.parentNode != null) file.previewElement.parentNode.removeChild(file.previewElement);
        return this._updateMaxFilesReachedClass();
    },
    // Called when a thumbnail has been generated
    // Receives `file` and `dataUrl`
    thumbnail (file, dataUrl) {
        if (file.previewElement) {
            file.previewElement.classList.remove("dz-file-preview");
            for (let thumbnailElement of file.previewElement.querySelectorAll("[data-dz-thumbnail]")){
                thumbnailElement.alt = file.name;
                thumbnailElement.src = dataUrl;
            }
            return setTimeout(()=>file.previewElement.classList.add("dz-image-preview")
            , 1);
        }
    },
    // Called whenever an error occurs
    // Receives `file` and `message`
    error (file, message) {
        if (file.previewElement) {
            file.previewElement.classList.add("dz-error");
            if (typeof message !== "string" && message.error) message = message.error;
            for (let node of file.previewElement.querySelectorAll("[data-dz-errormessage]"))node.textContent = message;
        }
    },
    errormultiple () {
    },
    // Called when a file gets processed. Since there is a cue, not all added
    // files are processed immediately.
    // Receives `file`
    processing (file) {
        if (file.previewElement) {
            file.previewElement.classList.add("dz-processing");
            if (file._removeLink) return file._removeLink.innerHTML = this.options.dictCancelUpload;
        }
    },
    processingmultiple () {
    },
    // Called whenever the upload progress gets updated.
    // Receives `file`, `progress` (percentage 0-100) and `bytesSent`.
    // To get the total number of bytes of the file, use `file.size`
    uploadprogress (file, progress, bytesSent) {
        if (file.previewElement) for (let node of file.previewElement.querySelectorAll("[data-dz-uploadprogress]"))node.nodeName === "PROGRESS" ? node.value = progress : node.style.width = `${progress}%`;
    },
    // Called whenever the total upload progress gets updated.
    // Called with totalUploadProgress (0-100), totalBytes and totalBytesSent
    totaluploadprogress () {
    },
    // Called just before the file is sent. Gets the `xhr` object as second
    // parameter, so you can modify it (for example to add a CSRF token) and a
    // `formData` object to add additional information.
    sending () {
    },
    sendingmultiple () {
    },
    // When the complete upload is finished and successful
    // Receives `file`
    success (file) {
        if (file.previewElement) return file.previewElement.classList.add("dz-success");
    },
    successmultiple () {
    },
    // When the upload is canceled.
    canceled (file) {
        return this.emit("error", file, this.options.dictUploadCanceled);
    },
    canceledmultiple () {
    },
    // When the upload is finished, either with success or an error.
    // Receives `file`
    complete (file) {
        if (file._removeLink) file._removeLink.innerHTML = this.options.dictRemoveFile;
        if (file.previewElement) return file.previewElement.classList.add("dz-complete");
    },
    completemultiple () {
    },
    maxfilesexceeded () {
    },
    maxfilesreached () {
    },
    queuecomplete () {
    },
    addedfiles () {
    }
};
var $4ca367182776f80b$export$2e2bcd8739ae039 = $4ca367182776f80b$var$defaultOptions;


class $3ed269f2f0fb224b$export$2e2bcd8739ae039 extends $4040acfd8584338d$export$2e2bcd8739ae039 {
    static initClass() {
        // Exposing the emitter class, mainly for tests
        this.prototype.Emitter = $4040acfd8584338d$export$2e2bcd8739ae039;
        /*
     This is a list of all available events you can register on a dropzone object.

     You can register an event handler like this:

     dropzone.on("dragEnter", function() { });

     */ this.prototype.events = [
            "drop",
            "dragstart",
            "dragend",
            "dragenter",
            "dragover",
            "dragleave",
            "addedfile",
            "addedfiles",
            "removedfile",
            "thumbnail",
            "error",
            "errormultiple",
            "processing",
            "processingmultiple",
            "uploadprogress",
            "totaluploadprogress",
            "sending",
            "sendingmultiple",
            "success",
            "successmultiple",
            "canceled",
            "canceledmultiple",
            "complete",
            "completemultiple",
            "reset",
            "maxfilesexceeded",
            "maxfilesreached",
            "queuecomplete", 
        ];
        this.prototype._thumbnailQueue = [];
        this.prototype._processingThumbnail = false;
    }
    // Returns all files that have been accepted
    getAcceptedFiles() {
        return this.files.filter((file)=>file.accepted
        ).map((file)=>file
        );
    }
    // Returns all files that have been rejected
    // Not sure when that's going to be useful, but added for completeness.
    getRejectedFiles() {
        return this.files.filter((file)=>!file.accepted
        ).map((file)=>file
        );
    }
    getFilesWithStatus(status) {
        return this.files.filter((file)=>file.status === status
        ).map((file)=>file
        );
    }
    // Returns all files that are in the queue
    getQueuedFiles() {
        return this.getFilesWithStatus($3ed269f2f0fb224b$export$2e2bcd8739ae039.QUEUED);
    }
    getUploadingFiles() {
        return this.getFilesWithStatus($3ed269f2f0fb224b$export$2e2bcd8739ae039.UPLOADING);
    }
    getAddedFiles() {
        return this.getFilesWithStatus($3ed269f2f0fb224b$export$2e2bcd8739ae039.ADDED);
    }
    // Files that are either queued or uploading
    getActiveFiles() {
        return this.files.filter((file)=>file.status === $3ed269f2f0fb224b$export$2e2bcd8739ae039.UPLOADING || file.status === $3ed269f2f0fb224b$export$2e2bcd8739ae039.QUEUED
        ).map((file)=>file
        );
    }
    // The function that gets called when Dropzone is initialized. You
    // can (and should) setup event listeners inside this function.
    init() {
        // In case it isn't set already
        if (this.element.tagName === "form") this.element.setAttribute("enctype", "multipart/form-data");
        if (this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message")) this.element.appendChild($3ed269f2f0fb224b$export$2e2bcd8739ae039.createElement(`<div class="dz-default dz-message"><button class="dz-button" type="button">${this.options.dictDefaultMessage}</button></div>`));
        if (this.clickableElements.length) {
            let setupHiddenFileInput = ()=>{
                if (this.hiddenFileInput) this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput);
                this.hiddenFileInput = document.createElement("input");
                this.hiddenFileInput.setAttribute("type", "file");
                if (this.options.maxFiles === null || this.options.maxFiles > 1) this.hiddenFileInput.setAttribute("multiple", "multiple");
                this.hiddenFileInput.className = "dz-hidden-input";
                if (this.options.acceptedFiles !== null) this.hiddenFileInput.setAttribute("accept", this.options.acceptedFiles);
                if (this.options.capture !== null) this.hiddenFileInput.setAttribute("capture", this.options.capture);
                // Making sure that no one can "tab" into this field.
                this.hiddenFileInput.setAttribute("tabindex", "-1");
                // Not setting `display="none"` because some browsers don't accept clicks
                // on elements that aren't displayed.
                this.hiddenFileInput.style.visibility = "hidden";
                this.hiddenFileInput.style.position = "absolute";
                this.hiddenFileInput.style.top = "0";
                this.hiddenFileInput.style.left = "0";
                this.hiddenFileInput.style.height = "0";
                this.hiddenFileInput.style.width = "0";
                $3ed269f2f0fb224b$export$2e2bcd8739ae039.getElement(this.options.hiddenInputContainer, "hiddenInputContainer").appendChild(this.hiddenFileInput);
                this.hiddenFileInput.addEventListener("change", ()=>{
                    let { files: files  } = this.hiddenFileInput;
                    if (files.length) for (let file of files)this.addFile(file);
                    this.emit("addedfiles", files);
                    setupHiddenFileInput();
                });
            };
            setupHiddenFileInput();
        }
        this.URL = window.URL !== null ? window.URL : window.webkitURL;
        // Setup all event listeners on the Dropzone object itself.
        // They're not in @setupEventListeners() because they shouldn't be removed
        // again when the dropzone gets disabled.
        for (let eventName of this.events)this.on(eventName, this.options[eventName]);
        this.on("uploadprogress", ()=>this.updateTotalUploadProgress()
        );
        this.on("removedfile", ()=>this.updateTotalUploadProgress()
        );
        this.on("canceled", (file)=>this.emit("complete", file)
        );
        // Emit a `queuecomplete` event if all files finished uploading.
        this.on("complete", (file)=>{
            if (this.getAddedFiles().length === 0 && this.getUploadingFiles().length === 0 && this.getQueuedFiles().length === 0) // This needs to be deferred so that `queuecomplete` really triggers after `complete`
            return setTimeout(()=>this.emit("queuecomplete")
            , 0);
        });
        const containsFiles = function(e) {
            if (e.dataTransfer.types) // Because e.dataTransfer.types is an Object in
            // IE, we need to iterate like this instead of
            // using e.dataTransfer.types.some()
            for(var i = 0; i < e.dataTransfer.types.length; i++){
                if (e.dataTransfer.types[i] === "Files") return true;
            }
            return false;
        };
        let noPropagation = function(e) {
            // If there are no files, we don't want to stop
            // propagation so we don't interfere with other
            // drag and drop behaviour.
            if (!containsFiles(e)) return;
            e.stopPropagation();
            if (e.preventDefault) return e.preventDefault();
            else return e.returnValue = false;
        };
        // Create the listeners
        this.listeners = [
            {
                element: this.element,
                events: {
                    dragstart: (e)=>{
                        return this.emit("dragstart", e);
                    },
                    dragenter: (e)=>{
                        noPropagation(e);
                        return this.emit("dragenter", e);
                    },
                    dragover: (e)=>{
                        // Makes it possible to drag files from chrome's download bar
                        // http://stackoverflow.com/questions/19526430/drag-and-drop-file-uploads-from-chrome-downloads-bar
                        // Try is required to prevent bug in Internet Explorer 11 (SCRIPT65535 exception)
                        let efct;
                        try {
                            efct = e.dataTransfer.effectAllowed;
                        } catch (error) {
                        }
                        e.dataTransfer.dropEffect = "move" === efct || "linkMove" === efct ? "move" : "copy";
                        noPropagation(e);
                        return this.emit("dragover", e);
                    },
                    dragleave: (e)=>{
                        return this.emit("dragleave", e);
                    },
                    drop: (e)=>{
                        noPropagation(e);
                        return this.drop(e);
                    },
                    dragend: (e)=>{
                        return this.emit("dragend", e);
                    }
                }
            }, 
        ];
        this.clickableElements.forEach((clickableElement)=>{
            return this.listeners.push({
                element: clickableElement,
                events: {
                    click: (evt)=>{
                        // Only the actual dropzone or the message element should trigger file selection
                        if (clickableElement !== this.element || evt.target === this.element || $3ed269f2f0fb224b$export$2e2bcd8739ae039.elementInside(evt.target, this.element.querySelector(".dz-message"))) this.hiddenFileInput.click(); // Forward the click
                        return true;
                    }
                }
            });
        });
        this.enable();
        return this.options.init.call(this);
    }
    // Not fully tested yet
    destroy() {
        this.disable();
        this.removeAllFiles(true);
        if (this.hiddenFileInput != null ? this.hiddenFileInput.parentNode : undefined) {
            this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput);
            this.hiddenFileInput = null;
        }
        delete this.element.dropzone;
        return $3ed269f2f0fb224b$export$2e2bcd8739ae039.instances.splice($3ed269f2f0fb224b$export$2e2bcd8739ae039.instances.indexOf(this), 1);
    }
    updateTotalUploadProgress() {
        let totalUploadProgress;
        let totalBytesSent = 0;
        let totalBytes = 0;
        let activeFiles = this.getActiveFiles();
        if (activeFiles.length) {
            for (let file of this.getActiveFiles()){
                totalBytesSent += file.upload.bytesSent;
                totalBytes += file.upload.total;
            }
            totalUploadProgress = 100 * totalBytesSent / totalBytes;
        } else totalUploadProgress = 100;
        return this.emit("totaluploadprogress", totalUploadProgress, totalBytes, totalBytesSent);
    }
    // @options.paramName can be a function taking one parameter rather than a string.
    // A parameter name for a file is obtained simply by calling this with an index number.
    _getParamName(n) {
        if (typeof this.options.paramName === "function") return this.options.paramName(n);
        else return `${this.options.paramName}${this.options.uploadMultiple ? `[${n}]` : ""}`;
    }
    // If @options.renameFile is a function,
    // the function will be used to rename the file.name before appending it to the formData
    _renameFile(file) {
        if (typeof this.options.renameFile !== "function") return file.name;
        return this.options.renameFile(file);
    }
    // Returns a form that can be used as fallback if the browser does not support DragnDrop
    //
    // If the dropzone is already a form, only the input field and button are returned. Otherwise a complete form element is provided.
    // This code has to pass in IE7 :(
    getFallbackForm() {
        let existingFallback, form;
        if (existingFallback = this.getExistingFallback()) return existingFallback;
        let fieldsString = '<div class="dz-fallback">';
        if (this.options.dictFallbackText) fieldsString += `<p>${this.options.dictFallbackText}</p>`;
        fieldsString += `<input type="file" name="${this._getParamName(0)}" ${this.options.uploadMultiple ? 'multiple="multiple"' : undefined} /><input type="submit" value="Upload!"></div>`;
        let fields = $3ed269f2f0fb224b$export$2e2bcd8739ae039.createElement(fieldsString);
        if (this.element.tagName !== "FORM") {
            form = $3ed269f2f0fb224b$export$2e2bcd8739ae039.createElement(`<form action="${this.options.url}" enctype="multipart/form-data" method="${this.options.method}"></form>`);
            form.appendChild(fields);
        } else {
            // Make sure that the enctype and method attributes are set properly
            this.element.setAttribute("enctype", "multipart/form-data");
            this.element.setAttribute("method", this.options.method);
        }
        return form != null ? form : fields;
    }
    // Returns the fallback elements if they exist already
    //
    // This code has to pass in IE7 :(
    getExistingFallback() {
        let getFallback = function(elements) {
            for (let el of elements){
                if (/(^| )fallback($| )/.test(el.className)) return el;
            }
        };
        for (let tagName of [
            "div",
            "form"
        ]){
            var fallback;
            if (fallback = getFallback(this.element.getElementsByTagName(tagName))) return fallback;
        }
    }
    // Activates all listeners stored in @listeners
    setupEventListeners() {
        return this.listeners.map((elementListeners)=>(()=>{
                let result = [];
                for(let event in elementListeners.events){
                    let listener = elementListeners.events[event];
                    result.push(elementListeners.element.addEventListener(event, listener, false));
                }
                return result;
            })()
        );
    }
    // Deactivates all listeners stored in @listeners
    removeEventListeners() {
        return this.listeners.map((elementListeners)=>(()=>{
                let result = [];
                for(let event in elementListeners.events){
                    let listener = elementListeners.events[event];
                    result.push(elementListeners.element.removeEventListener(event, listener, false));
                }
                return result;
            })()
        );
    }
    // Removes all event listeners and cancels all files in the queue or being processed.
    disable() {
        this.clickableElements.forEach((element)=>element.classList.remove("dz-clickable")
        );
        this.removeEventListeners();
        this.disabled = true;
        return this.files.map((file)=>this.cancelUpload(file)
        );
    }
    enable() {
        delete this.disabled;
        this.clickableElements.forEach((element)=>element.classList.add("dz-clickable")
        );
        return this.setupEventListeners();
    }
    // Returns a nicely formatted filesize
    filesize(size) {
        let selectedSize = 0;
        let selectedUnit = "b";
        if (size > 0) {
            let units = [
                "tb",
                "gb",
                "mb",
                "kb",
                "b"
            ];
            for(let i = 0; i < units.length; i++){
                let unit = units[i];
                let cutoff = Math.pow(this.options.filesizeBase, 4 - i) / 10;
                if (size >= cutoff) {
                    selectedSize = size / Math.pow(this.options.filesizeBase, 4 - i);
                    selectedUnit = unit;
                    break;
                }
            }
            selectedSize = Math.round(10 * selectedSize) / 10; // Cutting of digits
        }
        return `<strong>${selectedSize}</strong> ${this.options.dictFileSizeUnits[selectedUnit]}`;
    }
    // Adds or removes the `dz-max-files-reached` class from the form.
    _updateMaxFilesReachedClass() {
        if (this.options.maxFiles != null && this.getAcceptedFiles().length >= this.options.maxFiles) {
            if (this.getAcceptedFiles().length === this.options.maxFiles) this.emit("maxfilesreached", this.files);
            return this.element.classList.add("dz-max-files-reached");
        } else return this.element.classList.remove("dz-max-files-reached");
    }
    drop(e) {
        if (!e.dataTransfer) return;
        this.emit("drop", e);
        // Convert the FileList to an Array
        // This is necessary for IE11
        let files = [];
        for(let i = 0; i < e.dataTransfer.files.length; i++)files[i] = e.dataTransfer.files[i];
        // Even if it's a folder, files.length will contain the folders.
        if (files.length) {
            let { items: items  } = e.dataTransfer;
            if (items && items.length && items[0].webkitGetAsEntry != null) // The browser supports dropping of folders, so handle items instead of files
            this._addFilesFromItems(items);
            else this.handleFiles(files);
        }
        this.emit("addedfiles", files);
    }
    paste(e) {
        if ($3ed269f2f0fb224b$var$__guard__(e != null ? e.clipboardData : undefined, (x)=>x.items
        ) == null) return;
        this.emit("paste", e);
        let { items: items  } = e.clipboardData;
        if (items.length) return this._addFilesFromItems(items);
    }
    handleFiles(files) {
        for (let file of files)this.addFile(file);
    }
    // When a folder is dropped (or files are pasted), items must be handled
    // instead of files.
    _addFilesFromItems(items) {
        return (()=>{
            let result = [];
            for (let item of items){
                var entry;
                if (item.webkitGetAsEntry != null && (entry = item.webkitGetAsEntry())) {
                    if (entry.isFile) result.push(this.addFile(item.getAsFile()));
                    else if (entry.isDirectory) // Append all files from that directory to files
                    result.push(this._addFilesFromDirectory(entry, entry.name));
                    else result.push(undefined);
                } else if (item.getAsFile != null) {
                    if (item.kind == null || item.kind === "file") result.push(this.addFile(item.getAsFile()));
                    else result.push(undefined);
                } else result.push(undefined);
            }
            return result;
        })();
    }
    // Goes through the directory, and adds each file it finds recursively
    _addFilesFromDirectory(directory, path) {
        let dirReader = directory.createReader();
        let errorHandler = (error)=>$3ed269f2f0fb224b$var$__guardMethod__(console, "log", (o)=>o.log(error)
            )
        ;
        var readEntries = ()=>{
            return dirReader.readEntries((entries)=>{
                if (entries.length > 0) {
                    for (let entry of entries){
                        if (entry.isFile) entry.file((file)=>{
                            if (this.options.ignoreHiddenFiles && file.name.substring(0, 1) === ".") return;
                            file.fullPath = `${path}/${file.name}`;
                            return this.addFile(file);
                        });
                        else if (entry.isDirectory) this._addFilesFromDirectory(entry, `${path}/${entry.name}`);
                    }
                    // Recursively call readEntries() again, since browser only handle
                    // the first 100 entries.
                    // See: https://developer.mozilla.org/en-US/docs/Web/API/DirectoryReader#readEntries
                    readEntries();
                }
                return null;
            }, errorHandler);
        };
        return readEntries();
    }
    // If `done()` is called without argument the file is accepted
    // If you call it with an error message, the file is rejected
    // (This allows for asynchronous validation)
    //
    // This function checks the filesize, and if the file.type passes the
    // `acceptedFiles` check.
    accept(file, done) {
        if (this.options.maxFilesize && file.size > this.options.maxFilesize * 1048576) done(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(file.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize));
        else if (!$3ed269f2f0fb224b$export$2e2bcd8739ae039.isValidFile(file, this.options.acceptedFiles)) done(this.options.dictInvalidFileType);
        else if (this.options.maxFiles != null && this.getAcceptedFiles().length >= this.options.maxFiles) {
            done(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles));
            this.emit("maxfilesexceeded", file);
        } else this.options.accept.call(this, file, done);
    }
    addFile(file) {
        file.upload = {
            uuid: $3ed269f2f0fb224b$export$2e2bcd8739ae039.uuidv4(),
            progress: 0,
            // Setting the total upload size to file.size for the beginning
            // It's actual different than the size to be transmitted.
            total: file.size,
            bytesSent: 0,
            filename: this._renameFile(file)
        };
        this.files.push(file);
        file.status = $3ed269f2f0fb224b$export$2e2bcd8739ae039.ADDED;
        this.emit("addedfile", file);
        this._enqueueThumbnail(file);
        this.accept(file, (error)=>{
            if (error) {
                file.accepted = false;
                this._errorProcessing([
                    file
                ], error); // Will set the file.status
            } else {
                file.accepted = true;
                if (this.options.autoQueue) this.enqueueFile(file);
                 // Will set .accepted = true
            }
            this._updateMaxFilesReachedClass();
        });
    }
    // Wrapper for enqueueFile
    enqueueFiles(files) {
        for (let file of files)this.enqueueFile(file);
        return null;
    }
    enqueueFile(file) {
        if (file.status === $3ed269f2f0fb224b$export$2e2bcd8739ae039.ADDED && file.accepted === true) {
            file.status = $3ed269f2f0fb224b$export$2e2bcd8739ae039.QUEUED;
            if (this.options.autoProcessQueue) return setTimeout(()=>this.processQueue()
            , 0); // Deferring the call
        } else throw new Error("This file can't be queued because it has already been processed or was rejected.");
    }
    _enqueueThumbnail(file) {
        if (this.options.createImageThumbnails && file.type.match(/image.*/) && file.size <= this.options.maxThumbnailFilesize * 1048576) {
            this._thumbnailQueue.push(file);
            return setTimeout(()=>this._processThumbnailQueue()
            , 0); // Deferring the call
        }
    }
    _processThumbnailQueue() {
        if (this._processingThumbnail || this._thumbnailQueue.length === 0) return;
        this._processingThumbnail = true;
        let file = this._thumbnailQueue.shift();
        return this.createThumbnail(file, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, true, (dataUrl)=>{
            this.emit("thumbnail", file, dataUrl);
            this._processingThumbnail = false;
            return this._processThumbnailQueue();
        });
    }
    // Can be called by the user to remove a file
    removeFile(file) {
        if (file.status === $3ed269f2f0fb224b$export$2e2bcd8739ae039.UPLOADING) this.cancelUpload(file);
        this.files = $3ed269f2f0fb224b$var$without(this.files, file);
        this.emit("removedfile", file);
        if (this.files.length === 0) return this.emit("reset");
    }
    // Removes all files that aren't currently processed from the list
    removeAllFiles(cancelIfNecessary) {
        // Create a copy of files since removeFile() changes the @files array.
        if (cancelIfNecessary == null) cancelIfNecessary = false;
        for (let file of this.files.slice())if (file.status !== $3ed269f2f0fb224b$export$2e2bcd8739ae039.UPLOADING || cancelIfNecessary) this.removeFile(file);
        return null;
    }
    // Resizes an image before it gets sent to the server. This function is the default behavior of
    // `options.transformFile` if `resizeWidth` or `resizeHeight` are set. The callback is invoked with
    // the resized blob.
    resizeImage(file, width, height, resizeMethod, callback) {
        return this.createThumbnail(file, width, height, resizeMethod, true, (dataUrl, canvas)=>{
            if (canvas == null) // The image has not been resized
            return callback(file);
            else {
                let { resizeMimeType: resizeMimeType  } = this.options;
                if (resizeMimeType == null) resizeMimeType = file.type;
                let resizedDataURL = canvas.toDataURL(resizeMimeType, this.options.resizeQuality);
                if (resizeMimeType === "image/jpeg" || resizeMimeType === "image/jpg") // Now add the original EXIF information
                resizedDataURL = $3ed269f2f0fb224b$var$ExifRestore.restore(file.dataURL, resizedDataURL);
                return callback($3ed269f2f0fb224b$export$2e2bcd8739ae039.dataURItoBlob(resizedDataURL));
            }
        });
    }
    createThumbnail(file, width, height, resizeMethod, fixOrientation, callback) {
        let fileReader = new FileReader();
        fileReader.onload = ()=>{
            file.dataURL = fileReader.result;
            // Don't bother creating a thumbnail for SVG images since they're vector
            if (file.type === "image/svg+xml") {
                if (callback != null) callback(fileReader.result);
                return;
            }
            this.createThumbnailFromUrl(file, width, height, resizeMethod, fixOrientation, callback);
        };
        fileReader.readAsDataURL(file);
    }
    // `mockFile` needs to have these attributes:
    //
    //     { name: 'name', size: 12345, imageUrl: '' }
    //
    // `callback` will be invoked when the image has been downloaded and displayed.
    // `crossOrigin` will be added to the `img` tag when accessing the file.
    displayExistingFile(mockFile, imageUrl, callback, crossOrigin, resizeThumbnail = true) {
        this.emit("addedfile", mockFile);
        this.emit("complete", mockFile);
        if (!resizeThumbnail) {
            this.emit("thumbnail", mockFile, imageUrl);
            if (callback) callback();
        } else {
            let onDone = (thumbnail)=>{
                this.emit("thumbnail", mockFile, thumbnail);
                if (callback) callback();
            };
            mockFile.dataURL = imageUrl;
            this.createThumbnailFromUrl(mockFile, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, this.options.fixOrientation, onDone, crossOrigin);
        }
    }
    createThumbnailFromUrl(file, width, height, resizeMethod, fixOrientation, callback, crossOrigin) {
        // Not using `new Image` here because of a bug in latest Chrome versions.
        // See https://github.com/enyo/dropzone/pull/226
        let img = document.createElement("img");
        if (crossOrigin) img.crossOrigin = crossOrigin;
        // fixOrientation is not needed anymore with browsers handling imageOrientation
        fixOrientation = getComputedStyle(document.body)["imageOrientation"] == "from-image" ? false : fixOrientation;
        img.onload = ()=>{
            let loadExif = (callback)=>callback(1)
            ;
            if (typeof EXIF !== "undefined" && EXIF !== null && fixOrientation) loadExif = (callback)=>EXIF.getData(img, function() {
                    return callback(EXIF.getTag(this, "Orientation"));
                })
            ;
            return loadExif((orientation)=>{
                file.width = img.width;
                file.height = img.height;
                let resizeInfo = this.options.resize.call(this, file, width, height, resizeMethod);
                let canvas = document.createElement("canvas");
                let ctx = canvas.getContext("2d");
                canvas.width = resizeInfo.trgWidth;
                canvas.height = resizeInfo.trgHeight;
                if (orientation > 4) {
                    canvas.width = resizeInfo.trgHeight;
                    canvas.height = resizeInfo.trgWidth;
                }
                switch(orientation){
                    case 2:
                        // horizontal flip
                        ctx.translate(canvas.width, 0);
                        ctx.scale(-1, 1);
                        break;
                    case 3:
                        // 180° rotate left
                        ctx.translate(canvas.width, canvas.height);
                        ctx.rotate(Math.PI);
                        break;
                    case 4:
                        // vertical flip
                        ctx.translate(0, canvas.height);
                        ctx.scale(1, -1);
                        break;
                    case 5:
                        // vertical flip + 90 rotate right
                        ctx.rotate(0.5 * Math.PI);
                        ctx.scale(1, -1);
                        break;
                    case 6:
                        // 90° rotate right
                        ctx.rotate(0.5 * Math.PI);
                        ctx.translate(0, -canvas.width);
                        break;
                    case 7:
                        // horizontal flip + 90 rotate right
                        ctx.rotate(0.5 * Math.PI);
                        ctx.translate(canvas.height, -canvas.width);
                        ctx.scale(-1, 1);
                        break;
                    case 8:
                        // 90° rotate left
                        ctx.rotate(-0.5 * Math.PI);
                        ctx.translate(-canvas.height, 0);
                        break;
                }
                // This is a bugfix for iOS' scaling bug.
                $3ed269f2f0fb224b$var$drawImageIOSFix(ctx, img, resizeInfo.srcX != null ? resizeInfo.srcX : 0, resizeInfo.srcY != null ? resizeInfo.srcY : 0, resizeInfo.srcWidth, resizeInfo.srcHeight, resizeInfo.trgX != null ? resizeInfo.trgX : 0, resizeInfo.trgY != null ? resizeInfo.trgY : 0, resizeInfo.trgWidth, resizeInfo.trgHeight);
                let thumbnail = canvas.toDataURL("image/png");
                if (callback != null) return callback(thumbnail, canvas);
            });
        };
        if (callback != null) img.onerror = callback;
        return img.src = file.dataURL;
    }
    // Goes through the queue and processes files if there aren't too many already.
    processQueue() {
        let { parallelUploads: parallelUploads  } = this.options;
        let processingLength = this.getUploadingFiles().length;
        let i = processingLength;
        // There are already at least as many files uploading than should be
        if (processingLength >= parallelUploads) return;
        let queuedFiles = this.getQueuedFiles();
        if (!(queuedFiles.length > 0)) return;
        if (this.options.uploadMultiple) // The files should be uploaded in one request
        return this.processFiles(queuedFiles.slice(0, parallelUploads - processingLength));
        else while(i < parallelUploads){
            if (!queuedFiles.length) return;
             // Nothing left to process
            this.processFile(queuedFiles.shift());
            i++;
        }
    }
    // Wrapper for `processFiles`
    processFile(file) {
        return this.processFiles([
            file
        ]);
    }
    // Loads the file, then calls finishedLoading()
    processFiles(files) {
        for (let file of files){
            file.processing = true; // Backwards compatibility
            file.status = $3ed269f2f0fb224b$export$2e2bcd8739ae039.UPLOADING;
            this.emit("processing", file);
        }
        if (this.options.uploadMultiple) this.emit("processingmultiple", files);
        return this.uploadFiles(files);
    }
    _getFilesWithXhr(xhr) {
        let files;
        return files = this.files.filter((file)=>file.xhr === xhr
        ).map((file)=>file
        );
    }
    // Cancels the file upload and sets the status to CANCELED
    // **if** the file is actually being uploaded.
    // If it's still in the queue, the file is being removed from it and the status
    // set to CANCELED.
    cancelUpload(file) {
        if (file.status === $3ed269f2f0fb224b$export$2e2bcd8739ae039.UPLOADING) {
            let groupedFiles = this._getFilesWithXhr(file.xhr);
            for (let groupedFile of groupedFiles)groupedFile.status = $3ed269f2f0fb224b$export$2e2bcd8739ae039.CANCELED;
            if (typeof file.xhr !== "undefined") file.xhr.abort();
            for (let groupedFile1 of groupedFiles)this.emit("canceled", groupedFile1);
            if (this.options.uploadMultiple) this.emit("canceledmultiple", groupedFiles);
        } else if (file.status === $3ed269f2f0fb224b$export$2e2bcd8739ae039.ADDED || file.status === $3ed269f2f0fb224b$export$2e2bcd8739ae039.QUEUED) {
            file.status = $3ed269f2f0fb224b$export$2e2bcd8739ae039.CANCELED;
            this.emit("canceled", file);
            if (this.options.uploadMultiple) this.emit("canceledmultiple", [
                file
            ]);
        }
        if (this.options.autoProcessQueue) return this.processQueue();
    }
    resolveOption(option, ...args) {
        if (typeof option === "function") return option.apply(this, args);
        return option;
    }
    uploadFile(file) {
        return this.uploadFiles([
            file
        ]);
    }
    uploadFiles(files) {
        this._transformFiles(files, (transformedFiles)=>{
            if (this.options.chunking) {
                // Chunking is not allowed to be used with `uploadMultiple` so we know
                // that there is only __one__file.
                let transformedFile = transformedFiles[0];
                files[0].upload.chunked = this.options.chunking && (this.options.forceChunking || transformedFile.size > this.options.chunkSize);
                files[0].upload.totalChunkCount = Math.ceil(transformedFile.size / this.options.chunkSize);
            }
            if (files[0].upload.chunked) {
                // This file should be sent in chunks!
                // If the chunking option is set, we **know** that there can only be **one** file, since
                // uploadMultiple is not allowed with this option.
                let file = files[0];
                let transformedFile = transformedFiles[0];
                let startedChunkCount = 0;
                file.upload.chunks = [];
                let handleNextChunk = ()=>{
                    let chunkIndex = 0;
                    // Find the next item in file.upload.chunks that is not defined yet.
                    while(file.upload.chunks[chunkIndex] !== undefined)chunkIndex++;
                    // This means, that all chunks have already been started.
                    if (chunkIndex >= file.upload.totalChunkCount) return;
                    startedChunkCount++;
                    let start = chunkIndex * this.options.chunkSize;
                    let end = Math.min(start + this.options.chunkSize, transformedFile.size);
                    let dataBlock = {
                        name: this._getParamName(0),
                        data: transformedFile.webkitSlice ? transformedFile.webkitSlice(start, end) : transformedFile.slice(start, end),
                        filename: file.upload.filename,
                        chunkIndex: chunkIndex
                    };
                    file.upload.chunks[chunkIndex] = {
                        file: file,
                        index: chunkIndex,
                        dataBlock: dataBlock,
                        status: $3ed269f2f0fb224b$export$2e2bcd8739ae039.UPLOADING,
                        progress: 0,
                        retries: 0
                    };
                    this._uploadData(files, [
                        dataBlock
                    ]);
                };
                file.upload.finishedChunkUpload = (chunk, response)=>{
                    let allFinished = true;
                    chunk.status = $3ed269f2f0fb224b$export$2e2bcd8739ae039.SUCCESS;
                    // Clear the data from the chunk
                    chunk.dataBlock = null;
                    chunk.response = chunk.xhr.responseText;
                    chunk.responseHeaders = chunk.xhr.getAllResponseHeaders();
                    // Leaving this reference to xhr will cause memory leaks.
                    chunk.xhr = null;
                    for(let i = 0; i < file.upload.totalChunkCount; i++){
                        if (file.upload.chunks[i] === undefined) return handleNextChunk();
                        if (file.upload.chunks[i].status !== $3ed269f2f0fb224b$export$2e2bcd8739ae039.SUCCESS) allFinished = false;
                    }
                    if (allFinished) this.options.chunksUploaded(file, ()=>{
                        this._finished(files, response, null);
                    });
                };
                if (this.options.parallelChunkUploads) for(let i = 0; i < file.upload.totalChunkCount; i++)handleNextChunk();
                else handleNextChunk();
            } else {
                let dataBlocks = [];
                for(let i = 0; i < files.length; i++)dataBlocks[i] = {
                    name: this._getParamName(i),
                    data: transformedFiles[i],
                    filename: files[i].upload.filename
                };
                this._uploadData(files, dataBlocks);
            }
        });
    }
    /// Returns the right chunk for given file and xhr
    _getChunk(file, xhr) {
        for(let i = 0; i < file.upload.totalChunkCount; i++){
            if (file.upload.chunks[i] !== undefined && file.upload.chunks[i].xhr === xhr) return file.upload.chunks[i];
        }
    }
    // This function actually uploads the file(s) to the server.
    //
    //  If dataBlocks contains the actual data to upload (meaning, that this could
    // either be transformed files, or individual chunks for chunked upload) then
    // they will be used for the actual data to upload.
    _uploadData(files, dataBlocks) {
        let xhr = new XMLHttpRequest();
        // Put the xhr object in the file objects to be able to reference it later.
        for (let file of files)file.xhr = xhr;
        if (files[0].upload.chunked) // Put the xhr object in the right chunk object, so it can be associated
        // later, and found with _getChunk.
        files[0].upload.chunks[dataBlocks[0].chunkIndex].xhr = xhr;
        let method = this.resolveOption(this.options.method, files, dataBlocks);
        let url = this.resolveOption(this.options.url, files, dataBlocks);
        xhr.open(method, url, true);
        // Setting the timeout after open because of IE11 issue: https://gitlab.com/meno/dropzone/issues/8
        let timeout = this.resolveOption(this.options.timeout, files);
        if (timeout) xhr.timeout = this.resolveOption(this.options.timeout, files);
        // Has to be after `.open()`. See https://github.com/enyo/dropzone/issues/179
        xhr.withCredentials = !!this.options.withCredentials;
        xhr.onload = (e)=>{
            this._finishedUploading(files, xhr, e);
        };
        xhr.ontimeout = ()=>{
            this._handleUploadError(files, xhr, `Request timedout after ${this.options.timeout / 1000} seconds`);
        };
        xhr.onerror = ()=>{
            this._handleUploadError(files, xhr);
        };
        // Some browsers do not have the .upload property
        let progressObj = xhr.upload != null ? xhr.upload : xhr;
        progressObj.onprogress = (e)=>this._updateFilesUploadProgress(files, xhr, e)
        ;
        let headers = this.options.defaultHeaders ? {
            Accept: "application/json",
            "Cache-Control": "no-cache",
            "X-Requested-With": "XMLHttpRequest"
        } : {
        };
        if (this.options.binaryBody) headers["Content-Type"] = files[0].type;
        if (this.options.headers) (0,just_extend__WEBPACK_IMPORTED_MODULE_0__["default"])(headers, this.options.headers);
        for(let headerName in headers){
            let headerValue = headers[headerName];
            if (headerValue) xhr.setRequestHeader(headerName, headerValue);
        }
        if (this.options.binaryBody) {
            // Since the file is going to be sent as binary body, it doesn't make
            // any sense to generate `FormData` for it.
            for (let file of files)this.emit("sending", file, xhr);
            if (this.options.uploadMultiple) this.emit("sendingmultiple", files, xhr);
            this.submitRequest(xhr, null, files);
        } else {
            let formData = new FormData();
            // Adding all @options parameters
            if (this.options.params) {
                let additionalParams = this.options.params;
                if (typeof additionalParams === "function") additionalParams = additionalParams.call(this, files, xhr, files[0].upload.chunked ? this._getChunk(files[0], xhr) : null);
                for(let key in additionalParams){
                    let value = additionalParams[key];
                    if (Array.isArray(value)) // The additional parameter contains an array,
                    // so lets iterate over it to attach each value
                    // individually.
                    for(let i = 0; i < value.length; i++)formData.append(key, value[i]);
                    else formData.append(key, value);
                }
            }
            // Let the user add additional data if necessary
            for (let file of files)this.emit("sending", file, xhr, formData);
            if (this.options.uploadMultiple) this.emit("sendingmultiple", files, xhr, formData);
            this._addFormElementData(formData);
            // Finally add the files
            // Has to be last because some servers (eg: S3) expect the file to be the last parameter
            for(let i = 0; i < dataBlocks.length; i++){
                let dataBlock = dataBlocks[i];
                formData.append(dataBlock.name, dataBlock.data, dataBlock.filename);
            }
            this.submitRequest(xhr, formData, files);
        }
    }
    // Transforms all files with this.options.transformFile and invokes done with the transformed files when done.
    _transformFiles(files, done) {
        let transformedFiles = [];
        // Clumsy way of handling asynchronous calls, until I get to add a proper Future library.
        let doneCounter = 0;
        for(let i = 0; i < files.length; i++)this.options.transformFile.call(this, files[i], (transformedFile)=>{
            transformedFiles[i] = transformedFile;
            if (++doneCounter === files.length) done(transformedFiles);
        });
    }
    // Takes care of adding other input elements of the form to the AJAX request
    _addFormElementData(formData) {
        // Take care of other input elements
        if (this.element.tagName === "FORM") for (let input of this.element.querySelectorAll("input, textarea, select, button")){
            let inputName = input.getAttribute("name");
            let inputType = input.getAttribute("type");
            if (inputType) inputType = inputType.toLowerCase();
            // If the input doesn't have a name, we can't use it.
            if (typeof inputName === "undefined" || inputName === null) continue;
            if (input.tagName === "SELECT" && input.hasAttribute("multiple")) {
                // Possibly multiple values
                for (let option of input.options)if (option.selected) formData.append(inputName, option.value);
            } else if (!inputType || inputType !== "checkbox" && inputType !== "radio" || input.checked) formData.append(inputName, input.value);
        }
    }
    // Invoked when there is new progress information about given files.
    // If e is not provided, it is assumed that the upload is finished.
    _updateFilesUploadProgress(files, xhr, e) {
        if (!files[0].upload.chunked) // Handle file uploads without chunking
        for (let file of files){
            if (file.upload.total && file.upload.bytesSent && file.upload.bytesSent == file.upload.total) continue;
            if (e) {
                file.upload.progress = 100 * e.loaded / e.total;
                file.upload.total = e.total;
                file.upload.bytesSent = e.loaded;
            } else {
                // No event, so we're at 100%
                file.upload.progress = 100;
                file.upload.bytesSent = file.upload.total;
            }
            this.emit("uploadprogress", file, file.upload.progress, file.upload.bytesSent);
        }
        else {
            // Handle chunked file uploads
            // Chunked upload is not compatible with uploading multiple files in one
            // request, so we know there's only one file.
            let file = files[0];
            // Since this is a chunked upload, we need to update the appropriate chunk
            // progress.
            let chunk = this._getChunk(file, xhr);
            if (e) {
                chunk.progress = 100 * e.loaded / e.total;
                chunk.total = e.total;
                chunk.bytesSent = e.loaded;
            } else {
                // No event, so we're at 100%
                chunk.progress = 100;
                chunk.bytesSent = chunk.total;
            }
            // Now tally the *file* upload progress from its individual chunks
            file.upload.progress = 0;
            file.upload.total = 0;
            file.upload.bytesSent = 0;
            for(let i = 0; i < file.upload.totalChunkCount; i++)if (file.upload.chunks[i] && typeof file.upload.chunks[i].progress !== "undefined") {
                file.upload.progress += file.upload.chunks[i].progress;
                file.upload.total += file.upload.chunks[i].total;
                file.upload.bytesSent += file.upload.chunks[i].bytesSent;
            }
            // Since the process is a percentage, we need to divide by the amount of
            // chunks we've used.
            file.upload.progress = file.upload.progress / file.upload.totalChunkCount;
            this.emit("uploadprogress", file, file.upload.progress, file.upload.bytesSent);
        }
    }
    _finishedUploading(files, xhr, e) {
        let response;
        if (files[0].status === $3ed269f2f0fb224b$export$2e2bcd8739ae039.CANCELED) return;
        if (xhr.readyState !== 4) return;
        if (xhr.responseType !== "arraybuffer" && xhr.responseType !== "blob") {
            response = xhr.responseText;
            if (xhr.getResponseHeader("content-type") && ~xhr.getResponseHeader("content-type").indexOf("application/json")) try {
                response = JSON.parse(response);
            } catch (error) {
                e = error;
                response = "Invalid JSON response from server.";
            }
        }
        this._updateFilesUploadProgress(files, xhr);
        if (!(200 <= xhr.status && xhr.status < 300)) this._handleUploadError(files, xhr, response);
        else if (files[0].upload.chunked) files[0].upload.finishedChunkUpload(this._getChunk(files[0], xhr), response);
        else this._finished(files, response, e);
    }
    _handleUploadError(files, xhr, response) {
        if (files[0].status === $3ed269f2f0fb224b$export$2e2bcd8739ae039.CANCELED) return;
        if (files[0].upload.chunked && this.options.retryChunks) {
            let chunk = this._getChunk(files[0], xhr);
            if ((chunk.retries++) < this.options.retryChunksLimit) {
                this._uploadData(files, [
                    chunk.dataBlock
                ]);
                return;
            } else console.warn("Retried this chunk too often. Giving up.");
        }
        this._errorProcessing(files, response || this.options.dictResponseError.replace("{{statusCode}}", xhr.status), xhr);
    }
    submitRequest(xhr, formData, files) {
        if (xhr.readyState != 1) {
            console.warn("Cannot send this request because the XMLHttpRequest.readyState is not OPENED.");
            return;
        }
        if (this.options.binaryBody) {
            if (files[0].upload.chunked) {
                const chunk = this._getChunk(files[0], xhr);
                xhr.send(chunk.dataBlock.data);
            } else xhr.send(files[0]);
        } else xhr.send(formData);
    }
    // Called internally when processing is finished.
    // Individual callbacks have to be called in the appropriate sections.
    _finished(files, responseText, e) {
        for (let file of files){
            file.status = $3ed269f2f0fb224b$export$2e2bcd8739ae039.SUCCESS;
            this.emit("success", file, responseText, e);
            this.emit("complete", file);
        }
        if (this.options.uploadMultiple) {
            this.emit("successmultiple", files, responseText, e);
            this.emit("completemultiple", files);
        }
        if (this.options.autoProcessQueue) return this.processQueue();
    }
    // Called internally when processing is finished.
    // Individual callbacks have to be called in the appropriate sections.
    _errorProcessing(files, message, xhr) {
        for (let file of files){
            file.status = $3ed269f2f0fb224b$export$2e2bcd8739ae039.ERROR;
            this.emit("error", file, message, xhr);
            this.emit("complete", file);
        }
        if (this.options.uploadMultiple) {
            this.emit("errormultiple", files, message, xhr);
            this.emit("completemultiple", files);
        }
        if (this.options.autoProcessQueue) return this.processQueue();
    }
    static uuidv4() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
            let r = Math.random() * 16 | 0, v = c === "x" ? r : r & 3 | 8;
            return v.toString(16);
        });
    }
    constructor(el, options){
        super();
        let fallback, left;
        this.element = el;
        this.clickableElements = [];
        this.listeners = [];
        this.files = []; // All files
        if (typeof this.element === "string") this.element = document.querySelector(this.element);
        // Not checking if instance of HTMLElement or Element since IE9 is extremely weird.
        if (!this.element || this.element.nodeType == null) throw new Error("Invalid dropzone element.");
        if (this.element.dropzone) throw new Error("Dropzone already attached.");
        // Now add this dropzone to the instances.
        $3ed269f2f0fb224b$export$2e2bcd8739ae039.instances.push(this);
        // Put the dropzone inside the element itself.
        this.element.dropzone = this;
        let elementOptions = (left = $3ed269f2f0fb224b$export$2e2bcd8739ae039.optionsForElement(this.element)) != null ? left : {
        };
        this.options = (0,just_extend__WEBPACK_IMPORTED_MODULE_0__["default"])(true, {
        }, $4ca367182776f80b$export$2e2bcd8739ae039, elementOptions, options != null ? options : {
        });
        this.options.previewTemplate = this.options.previewTemplate.replace(/\n*/g, "");
        // If the browser failed, just call the fallback and leave
        if (this.options.forceFallback || !$3ed269f2f0fb224b$export$2e2bcd8739ae039.isBrowserSupported()) return this.options.fallback.call(this);
        // @options.url = @element.getAttribute "action" unless @options.url?
        if (this.options.url == null) this.options.url = this.element.getAttribute("action");
        if (!this.options.url) throw new Error("No URL provided.");
        if (this.options.acceptedFiles && this.options.acceptedMimeTypes) throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
        if (this.options.uploadMultiple && this.options.chunking) throw new Error("You cannot set both: uploadMultiple and chunking.");
        if (this.options.binaryBody && this.options.uploadMultiple) throw new Error("You cannot set both: binaryBody and uploadMultiple.");
        // Backwards compatibility
        if (this.options.acceptedMimeTypes) {
            this.options.acceptedFiles = this.options.acceptedMimeTypes;
            delete this.options.acceptedMimeTypes;
        }
        // Backwards compatibility
        if (this.options.renameFilename != null) this.options.renameFile = (file)=>this.options.renameFilename.call(this, file.name, file)
        ;
        if (typeof this.options.method === "string") this.options.method = this.options.method.toUpperCase();
        if ((fallback = this.getExistingFallback()) && fallback.parentNode) // Remove the fallback
        fallback.parentNode.removeChild(fallback);
        // Display previews in the previewsContainer element or the Dropzone element unless explicitly set to false
        if (this.options.previewsContainer !== false) {
            if (this.options.previewsContainer) this.previewsContainer = $3ed269f2f0fb224b$export$2e2bcd8739ae039.getElement(this.options.previewsContainer, "previewsContainer");
            else this.previewsContainer = this.element;
        }
        if (this.options.clickable) {
            if (this.options.clickable === true) this.clickableElements = [
                this.element
            ];
            else this.clickableElements = $3ed269f2f0fb224b$export$2e2bcd8739ae039.getElements(this.options.clickable, "clickable");
        }
        this.init();
    }
}
$3ed269f2f0fb224b$export$2e2bcd8739ae039.initClass();
// This is a map of options for your different dropzones. Add configurations
// to this object for your different dropzone elemens.
//
// Example:
//
//     Dropzone.options.myDropzoneElementId = { maxFilesize: 1 };
//
// And in html:
//
//     <form action="/upload" id="my-dropzone-element-id" class="dropzone"></form>
$3ed269f2f0fb224b$export$2e2bcd8739ae039.options = {
};
// Returns the options for an element or undefined if none available.
$3ed269f2f0fb224b$export$2e2bcd8739ae039.optionsForElement = function(element) {
    // Get the `Dropzone.options.elementId` for this element if it exists
    if (element.getAttribute("id")) return $3ed269f2f0fb224b$export$2e2bcd8739ae039.options[$3ed269f2f0fb224b$var$camelize(element.getAttribute("id"))];
    else return undefined;
};
// Holds a list of all dropzone instances
$3ed269f2f0fb224b$export$2e2bcd8739ae039.instances = [];
// Returns the dropzone for given element if any
$3ed269f2f0fb224b$export$2e2bcd8739ae039.forElement = function(element) {
    if (typeof element === "string") element = document.querySelector(element);
    if ((element != null ? element.dropzone : undefined) == null) throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
    return element.dropzone;
};
// Looks for all .dropzone elements and creates a dropzone for them
$3ed269f2f0fb224b$export$2e2bcd8739ae039.discover = function() {
    let dropzones;
    if (document.querySelectorAll) dropzones = document.querySelectorAll(".dropzone");
    else {
        dropzones = [];
        // IE :(
        let checkElements = (elements)=>(()=>{
                let result = [];
                for (let el of elements)if (/(^| )dropzone($| )/.test(el.className)) result.push(dropzones.push(el));
                else result.push(undefined);
                return result;
            })()
        ;
        checkElements(document.getElementsByTagName("div"));
        checkElements(document.getElementsByTagName("form"));
    }
    return (()=>{
        let result = [];
        for (let dropzone of dropzones)// Create a dropzone unless auto discover has been disabled for specific element
        if ($3ed269f2f0fb224b$export$2e2bcd8739ae039.optionsForElement(dropzone) !== false) result.push(new $3ed269f2f0fb224b$export$2e2bcd8739ae039(dropzone));
        else result.push(undefined);
        return result;
    })();
};
// Some browsers support drag and drog functionality, but not correctly.
//
// So I created a blocklist of userAgents. Yes, yes. Browser sniffing, I know.
// But what to do when browsers *theoretically* support an API, but crash
// when using it.
//
// This is a list of regular expressions tested against navigator.userAgent
//
// ** It should only be used on browser that *do* support the API, but
// incorrectly **
$3ed269f2f0fb224b$export$2e2bcd8739ae039.blockedBrowsers = [
    // The mac os and windows phone version of opera 12 seems to have a problem with the File drag'n'drop API.
    /opera.*(Macintosh|Windows Phone).*version\/12/i, 
];
// Checks if the browser is supported
$3ed269f2f0fb224b$export$2e2bcd8739ae039.isBrowserSupported = function() {
    let capableBrowser = true;
    if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector) {
        if (!("classList" in document.createElement("a"))) capableBrowser = false;
        else {
            if ($3ed269f2f0fb224b$export$2e2bcd8739ae039.blacklistedBrowsers !== undefined) // Since this has been renamed, this makes sure we don't break older
            // configuration.
            $3ed269f2f0fb224b$export$2e2bcd8739ae039.blockedBrowsers = $3ed269f2f0fb224b$export$2e2bcd8739ae039.blacklistedBrowsers;
            // The browser supports the API, but may be blocked.
            for (let regex of $3ed269f2f0fb224b$export$2e2bcd8739ae039.blockedBrowsers)if (regex.test(navigator.userAgent)) {
                capableBrowser = false;
                continue;
            }
        }
    } else capableBrowser = false;
    return capableBrowser;
};
$3ed269f2f0fb224b$export$2e2bcd8739ae039.dataURItoBlob = function(dataURI) {
    // convert base64 to raw binary data held in a string
    // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
    let byteString = atob(dataURI.split(",")[1]);
    // separate out the mime component
    let mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
    // write the bytes of the string to an ArrayBuffer
    let ab = new ArrayBuffer(byteString.length);
    let ia = new Uint8Array(ab);
    for(let i = 0, end = byteString.length, asc = 0 <= end; asc ? i <= end : i >= end; asc ? i++ : i--)ia[i] = byteString.charCodeAt(i);
    // write the ArrayBuffer to a blob
    return new Blob([
        ab
    ], {
        type: mimeString
    });
};
// Returns an array without the rejected item
const $3ed269f2f0fb224b$var$without = (list, rejectedItem)=>list.filter((item)=>item !== rejectedItem
    ).map((item)=>item
    )
;
// abc-def_ghi -> abcDefGhi
const $3ed269f2f0fb224b$var$camelize = (str)=>str.replace(/[\-_](\w)/g, (match)=>match.charAt(1).toUpperCase()
    )
;
// Creates an element from string
$3ed269f2f0fb224b$export$2e2bcd8739ae039.createElement = function(string) {
    let div = document.createElement("div");
    div.innerHTML = string;
    return div.childNodes[0];
};
// Tests if given element is inside (or simply is) the container
$3ed269f2f0fb224b$export$2e2bcd8739ae039.elementInside = function(element, container) {
    if (element === container) return true;
     // Coffeescript doesn't support do/while loops
    while(element = element.parentNode){
        if (element === container) return true;
    }
    return false;
};
$3ed269f2f0fb224b$export$2e2bcd8739ae039.getElement = function(el, name) {
    let element;
    if (typeof el === "string") element = document.querySelector(el);
    else if (el.nodeType != null) element = el;
    if (element == null) throw new Error(`Invalid \`${name}\` option provided. Please provide a CSS selector or a plain HTML element.`);
    return element;
};
$3ed269f2f0fb224b$export$2e2bcd8739ae039.getElements = function(els, name) {
    let el, elements;
    if (els instanceof Array) {
        elements = [];
        try {
            for (el of els)elements.push(this.getElement(el, name));
        } catch (e) {
            elements = null;
        }
    } else if (typeof els === "string") {
        elements = [];
        for (el of document.querySelectorAll(els))elements.push(el);
    } else if (els.nodeType != null) elements = [
        els
    ];
    if (elements == null || !elements.length) throw new Error(`Invalid \`${name}\` option provided. Please provide a CSS selector, a plain HTML element or a list of those.`);
    return elements;
};
// Asks the user the question and calls accepted or rejected accordingly
//
// The default implementation just uses `window.confirm` and then calls the
// appropriate callback.
$3ed269f2f0fb224b$export$2e2bcd8739ae039.confirm = function(question, accepted, rejected) {
    if (window.confirm(question)) return accepted();
    else if (rejected != null) return rejected();
};
// Validates the mime type like this:
//
// https://developer.mozilla.org/en-US/docs/HTML/Element/input#attr-accept
$3ed269f2f0fb224b$export$2e2bcd8739ae039.isValidFile = function(file, acceptedFiles) {
    if (!acceptedFiles) return true;
     // If there are no accepted mime types, it's OK
    acceptedFiles = acceptedFiles.split(",");
    let mimeType = file.type;
    let baseMimeType = mimeType.replace(/\/.*$/, "");
    for (let validType of acceptedFiles){
        validType = validType.trim();
        if (validType.charAt(0) === ".") {
            if (file.name.toLowerCase().indexOf(validType.toLowerCase(), file.name.length - validType.length) !== -1) return true;
        } else if (/\/\*$/.test(validType)) {
            // This is something like a image/* mime type
            if (baseMimeType === validType.replace(/\/.*$/, "")) return true;
        } else {
            if (mimeType === validType) return true;
        }
    }
    return false;
};
// Augment jQuery
if (typeof jQuery !== "undefined" && jQuery !== null) jQuery.fn.dropzone = function(options) {
    return this.each(function() {
        return new $3ed269f2f0fb224b$export$2e2bcd8739ae039(this, options);
    });
};
// Dropzone file status codes
$3ed269f2f0fb224b$export$2e2bcd8739ae039.ADDED = "added";
$3ed269f2f0fb224b$export$2e2bcd8739ae039.QUEUED = "queued";
// For backwards compatibility. Now, if a file is accepted, it's either queued
// or uploading.
$3ed269f2f0fb224b$export$2e2bcd8739ae039.ACCEPTED = $3ed269f2f0fb224b$export$2e2bcd8739ae039.QUEUED;
$3ed269f2f0fb224b$export$2e2bcd8739ae039.UPLOADING = "uploading";
$3ed269f2f0fb224b$export$2e2bcd8739ae039.PROCESSING = $3ed269f2f0fb224b$export$2e2bcd8739ae039.UPLOADING; // alias
$3ed269f2f0fb224b$export$2e2bcd8739ae039.CANCELED = "canceled";
$3ed269f2f0fb224b$export$2e2bcd8739ae039.ERROR = "error";
$3ed269f2f0fb224b$export$2e2bcd8739ae039.SUCCESS = "success";
/*

 Bugfix for iOS 6 and 7
 Source: http://stackoverflow.com/questions/11929099/html5-canvas-drawimage-ratio-bug-ios
 based on the work of https://github.com/stomita/ios-imagefile-megapixel

 */ // Detecting vertical squash in loaded image.
// Fixes a bug which squash image vertically while drawing into canvas for some images.
// This is a bug in iOS6 devices. This function from https://github.com/stomita/ios-imagefile-megapixel
let $3ed269f2f0fb224b$var$detectVerticalSquash = function(img) {
    let iw = img.naturalWidth;
    let ih = img.naturalHeight;
    let canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = ih;
    let ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    let { data: data  } = ctx.getImageData(1, 0, 1, ih);
    // search image edge pixel position in case it is squashed vertically.
    let sy = 0;
    let ey = ih;
    let py = ih;
    while(py > sy){
        let alpha = data[(py - 1) * 4 + 3];
        if (alpha === 0) ey = py;
        else sy = py;
        py = ey + sy >> 1;
    }
    let ratio = py / ih;
    if (ratio === 0) return 1;
    else return ratio;
};
// A replacement for context.drawImage
// (args are for source and destination).
var $3ed269f2f0fb224b$var$drawImageIOSFix = function(ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) {
    let vertSquashRatio = $3ed269f2f0fb224b$var$detectVerticalSquash(img);
    return ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
};
// Based on MinifyJpeg
// Source: http://www.perry.cz/files/ExifRestorer.js
// http://elicon.blog57.fc2.com/blog-entry-206.html
class $3ed269f2f0fb224b$var$ExifRestore {
    static initClass() {
        this.KEY_STR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    }
    static encode64(input) {
        let output = "";
        let chr1 = undefined;
        let chr2 = undefined;
        let chr3 = "";
        let enc1 = undefined;
        let enc2 = undefined;
        let enc3 = undefined;
        let enc4 = "";
        let i = 0;
        while(true){
            chr1 = input[i++];
            chr2 = input[i++];
            chr3 = input[i++];
            enc1 = chr1 >> 2;
            enc2 = (chr1 & 3) << 4 | chr2 >> 4;
            enc3 = (chr2 & 15) << 2 | chr3 >> 6;
            enc4 = chr3 & 63;
            if (isNaN(chr2)) enc3 = enc4 = 64;
            else if (isNaN(chr3)) enc4 = 64;
            output = output + this.KEY_STR.charAt(enc1) + this.KEY_STR.charAt(enc2) + this.KEY_STR.charAt(enc3) + this.KEY_STR.charAt(enc4);
            chr1 = chr2 = chr3 = "";
            enc1 = enc2 = enc3 = enc4 = "";
            if (!(i < input.length)) break;
        }
        return output;
    }
    static restore(origFileBase64, resizedFileBase64) {
        if (!origFileBase64.match("data:image/jpeg;base64,")) return resizedFileBase64;
        let rawImage = this.decode64(origFileBase64.replace("data:image/jpeg;base64,", ""));
        let segments = this.slice2Segments(rawImage);
        let image = this.exifManipulation(resizedFileBase64, segments);
        return `data:image/jpeg;base64,${this.encode64(image)}`;
    }
    static exifManipulation(resizedFileBase64, segments) {
        let exifArray = this.getExifArray(segments);
        let newImageArray = this.insertExif(resizedFileBase64, exifArray);
        let aBuffer = new Uint8Array(newImageArray);
        return aBuffer;
    }
    static getExifArray(segments) {
        let seg = undefined;
        let x = 0;
        while(x < segments.length){
            seg = segments[x];
            if (seg[0] === 255 & seg[1] === 225) return seg;
            x++;
        }
        return [];
    }
    static insertExif(resizedFileBase64, exifArray) {
        let imageData = resizedFileBase64.replace("data:image/jpeg;base64,", "");
        let buf = this.decode64(imageData);
        let separatePoint = buf.indexOf(255, 3);
        let mae = buf.slice(0, separatePoint);
        let ato = buf.slice(separatePoint);
        let array = mae;
        array = array.concat(exifArray);
        array = array.concat(ato);
        return array;
    }
    static slice2Segments(rawImageArray) {
        let head = 0;
        let segments = [];
        while(true){
            var length;
            if (rawImageArray[head] === 255 & rawImageArray[head + 1] === 218) break;
            if (rawImageArray[head] === 255 & rawImageArray[head + 1] === 216) head += 2;
            else {
                length = rawImageArray[head + 2] * 256 + rawImageArray[head + 3];
                let endPoint = head + length + 2;
                let seg = rawImageArray.slice(head, endPoint);
                segments.push(seg);
                head = endPoint;
            }
            if (head > rawImageArray.length) break;
        }
        return segments;
    }
    static decode64(input) {
        let output = "";
        let chr1 = undefined;
        let chr2 = undefined;
        let chr3 = "";
        let enc1 = undefined;
        let enc2 = undefined;
        let enc3 = undefined;
        let enc4 = "";
        let i = 0;
        let buf = [];
        // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
        let base64test = /[^A-Za-z0-9\+\/\=]/g;
        if (base64test.exec(input)) console.warn("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding.");
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while(true){
            enc1 = this.KEY_STR.indexOf(input.charAt(i++));
            enc2 = this.KEY_STR.indexOf(input.charAt(i++));
            enc3 = this.KEY_STR.indexOf(input.charAt(i++));
            enc4 = this.KEY_STR.indexOf(input.charAt(i++));
            chr1 = enc1 << 2 | enc2 >> 4;
            chr2 = (enc2 & 15) << 4 | enc3 >> 2;
            chr3 = (enc3 & 3) << 6 | enc4;
            buf.push(chr1);
            if (enc3 !== 64) buf.push(chr2);
            if (enc4 !== 64) buf.push(chr3);
            chr1 = chr2 = chr3 = "";
            enc1 = enc2 = enc3 = enc4 = "";
            if (!(i < input.length)) break;
        }
        return buf;
    }
}
$3ed269f2f0fb224b$var$ExifRestore.initClass();
/*
 * contentloaded.js
 *
 * Author: Diego Perini (diego.perini at gmail.com)
 * Summary: cross-browser wrapper for DOMContentLoaded
 * Updated: 20101020
 * License: MIT
 * Version: 1.2
 *
 * URL:
 * http://javascript.nwbox.com/ContentLoaded/
 * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
 */ // @win window reference
// @fn function reference
let $3ed269f2f0fb224b$var$contentLoaded = function(win, fn) {
    let done = false;
    let top = true;
    let doc = win.document;
    let root = doc.documentElement;
    let add = doc.addEventListener ? "addEventListener" : "attachEvent";
    let rem = doc.addEventListener ? "removeEventListener" : "detachEvent";
    let pre = doc.addEventListener ? "" : "on";
    var init = function(e) {
        if (e.type === "readystatechange" && doc.readyState !== "complete") return;
        (e.type === "load" ? win : doc)[rem](pre + e.type, init, false);
        if (!done && (done = true)) return fn.call(win, e.type || e);
    };
    var poll = function() {
        try {
            root.doScroll("left");
        } catch (e) {
            setTimeout(poll, 50);
            return;
        }
        return init("poll");
    };
    if (doc.readyState !== "complete") {
        if (doc.createEventObject && root.doScroll) {
            try {
                top = !win.frameElement;
            } catch (error) {
            }
            if (top) poll();
        }
        doc[add](pre + "DOMContentLoaded", init, false);
        doc[add](pre + "readystatechange", init, false);
        return win[add](pre + "load", init, false);
    }
};
function $3ed269f2f0fb224b$var$__guard__(value, transform) {
    return typeof value !== "undefined" && value !== null ? transform(value) : undefined;
}
function $3ed269f2f0fb224b$var$__guardMethod__(obj, methodName, transform) {
    if (typeof obj !== "undefined" && obj !== null && typeof obj[methodName] === "function") return transform(obj, methodName);
    else return undefined;
}



//# sourceMappingURL=dropzone.mjs.map


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************************!*\
  !*** ./assets/JavaScript/theme.js ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var isotope_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isotope-layout */ "./node_modules/isotope-layout/js/isotope.js");
/* harmony import */ var isotope_layout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isotope_layout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isotope_packery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isotope-packery */ "./node_modules/isotope-packery/packery-mode.js");
/* harmony import */ var isotope_packery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isotope_packery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dropzone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropzone */ "./assets/JavaScript/dropzone.js");
/* harmony import */ var _jobs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jobs */ "./assets/JavaScript/jobs.js");
/* harmony import */ var _jobs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_jobs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _jobs_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jobs-filter */ "./assets/JavaScript/jobs-filter.js");
//
// theme.js
//

// Plugins



// Theme



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxZQUFZO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsZ0JBQWdCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixjQUFjO0FBQzFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQzs7Ozs7Ozs7Ozs7QUM5T0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sSUFBeUM7QUFDaEQ7QUFDQSxJQUFJLGlDQUFRO0FBQ1osUUFBUSxpSEFBdUI7QUFDL0IsUUFBUSxtRkFBbUI7QUFDM0IsT0FBTyxvQ0FDRCxPQUFPO0FBQUE7QUFBQTtBQUFBLGtHQUNSO0FBQ0wsSUFBSSxLQUFLLEVBYU47O0FBRUgsQ0FBQztBQUNEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsVUFBVTtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxTQUFTO0FBQ3RCLGFBQWEsVUFBVTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsVUFBVTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixhQUFhO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixZQUFZO0FBQ3ZDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLENBQUM7Ozs7Ozs7Ozs7O0FDM3BCRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLElBQXlDO0FBQ2hEO0FBQ0EsSUFBSSxvQ0FBUSxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0dBQUU7QUFDckIsSUFBSSxLQUFLLEVBT047O0FBRUgsQ0FBQztBQUNEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLGFBQWEsT0FBTztBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2SjJDOztBQUU1QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxQ0FBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLFVBQVUsU0FBUyxhQUFhO0FBQ3hDLDBDQUEwQyxVQUFVLHNCQUFzQixhQUFhO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLFlBQVk7QUFDcEIsa0RBQWtELGFBQWE7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixVQUFVO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyx3QkFBd0I7QUFDNUQ7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxjQUFjLDhDQUE4QyxhQUFhO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RDtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJJQUEySSxtQkFBbUIsNEJBQTRCO0FBQzFMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ01BQWdNLFNBQVM7QUFDek0sS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLDRDQUE0Qzs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGtDQUFrQztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxvQ0FBb0M7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsaUNBQWlDO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxzRUFBc0UsaUNBQWlDO0FBQ3ZHO0FBQ0EsY0FBYztBQUNkO0FBQ0EsK0JBQStCLGtCQUFrQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGlDQUFpQztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBMEUsNkJBQTZCO0FBQ3ZHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0Esa0NBQWtDLHVEQUFpQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxrQkFBa0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHVCQUF1QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtCQUFrQjtBQUN6QztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixpQ0FBaUM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBLDJGQUEyRixZQUFZO0FBQ3ZHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsdURBQWlCO0FBQ3hDLFNBQVM7QUFDVCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUU7QUFDakU7QUFDQTtBQUNBO0FBQ0EsNERBQTRELDJCQUEyQjtBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsS0FBSztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsMkVBQTJFLEtBQUs7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEdBQTBHO0FBQzFHO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxjQUFjO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25ELDZFQUE2RTtBQUM3RTtBQUNBO0FBQ0EsZ0NBQWdDLFNBQVMscUJBQXFCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHbUg7QUFDbkg7Ozs7Ozs7VUM5akVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTs7QUFFQTtBQUN3QjtBQUNDOztBQUV6QjtBQUNvQjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFzZXNpdGUvLi9hc3NldHMvSmF2YVNjcmlwdC9kcm9wem9uZS5qcyIsIndlYnBhY2s6Ly9iYXNlc2l0ZS8uL2Fzc2V0cy9KYXZhU2NyaXB0L2pvYnMtZmlsdGVyLmpzIiwid2VicGFjazovL2Jhc2VzaXRlLy4vYXNzZXRzL0phdmFTY3JpcHQvam9icy5qcyIsIndlYnBhY2s6Ly9iYXNlc2l0ZS8uL25vZGVfbW9kdWxlcy9kZXNhbmRyby1tYXRjaGVzLXNlbGVjdG9yL21hdGNoZXMtc2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmFzZXNpdGUvLi9ub2RlX21vZHVsZXMvZml6enktdWktdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vYmFzZXNpdGUvLi9ub2RlX21vZHVsZXMvZ2V0LXNpemUvZ2V0LXNpemUuanMiLCJ3ZWJwYWNrOi8vYmFzZXNpdGUvLi9ub2RlX21vZHVsZXMvaXNvdG9wZS1sYXlvdXQvanMvaXNvdG9wZS5qcyIsIndlYnBhY2s6Ly9iYXNlc2l0ZS8uL25vZGVfbW9kdWxlcy9pc290b3BlLWxheW91dC9qcy9pdGVtLmpzIiwid2VicGFjazovL2Jhc2VzaXRlLy4vbm9kZV9tb2R1bGVzL2lzb3RvcGUtbGF5b3V0L2pzL2xheW91dC1tb2RlLmpzIiwid2VicGFjazovL2Jhc2VzaXRlLy4vbm9kZV9tb2R1bGVzL2lzb3RvcGUtbGF5b3V0L2pzL2xheW91dC1tb2Rlcy9maXQtcm93cy5qcyIsIndlYnBhY2s6Ly9iYXNlc2l0ZS8uL25vZGVfbW9kdWxlcy9pc290b3BlLWxheW91dC9qcy9sYXlvdXQtbW9kZXMvbWFzb25yeS5qcyIsIndlYnBhY2s6Ly9iYXNlc2l0ZS8uL25vZGVfbW9kdWxlcy9pc290b3BlLWxheW91dC9qcy9sYXlvdXQtbW9kZXMvdmVydGljYWwuanMiLCJ3ZWJwYWNrOi8vYmFzZXNpdGUvLi9ub2RlX21vZHVsZXMvaXNvdG9wZS1wYWNrZXJ5L3BhY2tlcnktbW9kZS5qcyIsIndlYnBhY2s6Ly9iYXNlc2l0ZS8uL25vZGVfbW9kdWxlcy9qdXN0LWV4dGVuZC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vYmFzZXNpdGUvLi9ub2RlX21vZHVsZXMvbWFzb25yeS1sYXlvdXQvbWFzb25yeS5qcyIsIndlYnBhY2s6Ly9iYXNlc2l0ZS8uL25vZGVfbW9kdWxlcy9vdXRsYXllci9pdGVtLmpzIiwid2VicGFjazovL2Jhc2VzaXRlLy4vbm9kZV9tb2R1bGVzL291dGxheWVyL25vZGVfbW9kdWxlcy9ldi1lbWl0dGVyL2V2LWVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vYmFzZXNpdGUvLi9ub2RlX21vZHVsZXMvb3V0bGF5ZXIvb3V0bGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmFzZXNpdGUvLi9ub2RlX21vZHVsZXMvcGFja2VyeS9qcy9pdGVtLmpzIiwid2VicGFjazovL2Jhc2VzaXRlLy4vbm9kZV9tb2R1bGVzL3BhY2tlcnkvanMvcGFja2VyLmpzIiwid2VicGFjazovL2Jhc2VzaXRlLy4vbm9kZV9tb2R1bGVzL3BhY2tlcnkvanMvcGFja2VyeS5qcyIsIndlYnBhY2s6Ly9iYXNlc2l0ZS8uL25vZGVfbW9kdWxlcy9wYWNrZXJ5L2pzL3JlY3QuanMiLCJ3ZWJwYWNrOi8vYmFzZXNpdGUvLi9ub2RlX21vZHVsZXMvZHJvcHpvbmUvZGlzdC9kcm9wem9uZS5tanMiLCJ3ZWJwYWNrOi8vYmFzZXNpdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmFzZXNpdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmFzZXNpdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Jhc2VzaXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmFzZXNpdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXNlc2l0ZS8uL2Fzc2V0cy9KYXZhU2NyaXB0L3RoZW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEcm9wem9uZSBmcm9tICdkcm9wem9uZSc7XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwbHktZm9ybScpO1xuXG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZVByb2Nlc3NMaW5rJykpIHtcbiAgICBjb25zdCB1cmwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZVByb2Nlc3NMaW5rJykudmFsdWU7XG4gICAgRHJvcHpvbmUuYXV0b0Rpc2NvdmVyID0gZmFsc2U7XG4gICAgbGV0IHRvdGFsU2l6ZUNWID0gMDtcbiAgICBsZXQgdG90YWxTaXplT3RoZXIgPSAwO1xuICAgIGNvbnN0IHJlc3BvbmRBcnIgPSBbXTtcbiAgICBjb25zdCByZXNwb25kQXJyT3RoZXIgPSBbXTtcbiAgICBsZXQgZmxhZyA9IGZhbHNlO1xuICAgIGNvbnN0IGN2RHJvcHpvbmUgPSBuZXcgRHJvcHpvbmUoJyNkb2N1bWVudC1kcm9wem9uZS1jdicsIHtcbiAgICAgIHVybCwgLy8gU2V0IHRoZSB1cmwgZm9yIHlvdXIgdXBsb2FkIHNjcmlwdCBsb2NhdGlvblxuICAgICAgcGFyYW1OYW1lOiAnZmlsZScsIC8vIFRoZSBuYW1lIHRoYXQgd2lsbCBiZSB1c2VkIHRvIHRyYW5zZmVyIHRoZSBmaWxlXG4gICAgICBmaWxlc2l6ZUJhc2U6IDEwMDAwMDAwMDAwMCxcbiAgICAgIG1heEZpbGVzaXplOiAyMCwgLy8gTUJcbiAgICAgIHVwbG9hZE11bHRpcGxlOiB0cnVlLFxuICAgICAgYWRkUmVtb3ZlTGlua3M6IHRydWUsXG4gICAgICBkaWN0VG90YWxVcGxvYWRNZXNzYWdlOiAnVXBsb2FkLUdyw7bDn2Ugw7xiZXJzY2hyaXR0ZW4sJyxcbiAgICAgIGFjY2VwdGVkRmlsZXM6XG4gICAgICAgICAgICAgICAgJy5wZGYsIC5wcHR4LCAueGxzeCwgLmRvY3gsIC5kb2MsIC54bHMsIC5wcHQsIC5vZHMsIC5vZHQsIC43eiwgLmd6LCAucmFyLCAuemlwLCAuYm1wLCAuZ2lmLCAuanBnLCAucG5nLCAudGlmLCAuY3N2LCAudHh0LCAucnRmLCAubXA0LCAuM2dwLCAubW92LCAuYXZpLCAud212JyxcbiAgICAgIGFjY2VwdChmaWxlLCBkb25lKSB7XG4gICAgICAgIGlmICh0b3RhbFNpemVDViA+PSAoMTAyNDk5OSAqIHRoaXMub3B0aW9ucy5tYXhGaWxlc2l6ZSkpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgICBmaWxlLnN0YXR1cyA9IERyb3B6b25lLkNBTkNFTEVEO1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZVxuICAgICAgICAgIHRoaXMuX2Vycm9yUHJvY2Vzc2luZyhbZmlsZV0sIHRoaXMub3B0aW9ucy5kaWN0VG90YWxVcGxvYWRNZXNzYWdlLCBudWxsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkb25lKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBpbml0KCkge1xuICAgICAgICBsZXQgbWVzc2FnZXMgPSBbXTtcbiAgICAgICAgdGhpcy5vbihcImFkZGVkZmlsZVwiLCBmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgICAgIHRvdGFsU2l6ZUNWICs9IGZpbGUuc2l6ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMub24oXCJyZW1vdmVkZmlsZVwiLCBmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgICAgIGlmIChmaWxlLnN0YXR1cyA9PT0gJ3F1ZXVlZCcpIHtcbiAgICAgICAgICAgIHRvdGFsU2l6ZUNWIC09IGZpbGUuc2l6ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGZpbGUudXBsb2FkLnByb2dyZXNzICE9IDApIHtcbiAgICAgICAgICAgIHRvdGFsU2l6ZUNWIC09IGZpbGUuc2l6ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm9uKCdhZGRlZGZpbGVzJywgZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgICAgICBsZXQgZXJyb3JGbGFnID0gZmFsc2U7XG4gICAgICAgICAgbGV0IGZpbGVXaXRoRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICBsZXQgaTtcbiAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZmlsZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGZpbGVbaV0uc3RhdHVzID09PSAnZXJyb3InKSB7XG4gICAgICAgICAgICAgIGZpbGVXaXRoRXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgdGVtcDtcbiAgICAgICAgICBpZiAoZXJyb3JGbGFnIHx8IGZpbGVXaXRoRXJyb3IpIHtcbiAgICAgICAgICAgIG1lc3NhZ2VzLmZvckVhY2goKHYsIGspID0+IHtcbiAgICAgICAgICAgICAgaWYgKHRlbXAgIT09IHYpIHtcbiAgICAgICAgICAgICAgICBhbGVydCh2KTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlcyA9IFtdO1xuICAgICAgICAgICAgICAgIHRlbXAgPSB2O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMub24oJ2NvbXBsZXRlJywgKGZpbGUsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm9uKCdlcnJvcicsIGZ1bmN0aW9uIChmaWxlLCBtZXNzYWdlKSB7XG4gICAgICAgICAgbWVzc2FnZXMucHVzaChtZXNzYWdlKTtcbiAgICAgICAgICB0b3RhbFNpemVDViAtPSBmaWxlLnNpemU7XG4gICAgICAgICAgdGhpcy5yZW1vdmVGaWxlKGZpbGUpO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzKGZpbGUsIHJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnN0IGpzb25SZXNwb25zZSA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xuICAgICAgICBpZiAoZmlsZS5zdGF0dXMgIT09ICdlcnJvcicgJiYganNvblJlc3BvbnNlLnN1Y2Nlc3MgIT09ICdmYWxzZScpIHtcbiAgICAgICAgICByZXNwb25kQXJyLnB1c2goSlNPTi5wYXJzZShyZXNwb25zZSkpO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkcm9wem9uZS1lcnJvcicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgZmxhZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGpzb25SZXNwb25zZS5zdWNjZXNzID09PSBmYWxzZSkge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkcm9wem9uZS1lcnJvcicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkcm9wem9uZS1lcnJvcicpLmlubmVyVGV4dCA9ICdFcnJvciBpbiBDViBVcGxvYWQnO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb2N1bWVudC1kcm9wem9uZS1jdicpLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RvY3VtZW50LWRyb3B6b25lLWN2JykuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KTtcbiAgICBjdkRyb3B6b25lLmZpbGVzaXplID0gZnVuY3Rpb24gKGJ5dGVzKSB7XG4gICAgICBsZXQgc2VsZWN0ZWRTaXplID0gMDtcbiAgICAgIGNvbnN0IHVuaXRzID0gWydrYicsICdtYicsICdnYicsICd0YicsICdiJ107XG5cbiAgICAgIGlmIChNYXRoLmFicyhieXRlcykgPCB0aGlzLm9wdGlvbnMuZmlsZXNpemVCYXNlKSB7XG4gICAgICAgIHNlbGVjdGVkU2l6ZSA9IGJ5dGVzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHUgPSAtMTtcbiAgICAgICAgZG8ge1xuICAgICAgICAgIGJ5dGVzIC89IHRoaXMub3B0aW9ucy5maWxlc2l6ZUJhc2U7XG4gICAgICAgICAgKyt1O1xuICAgICAgICB9IHdoaWxlIChcbiAgICAgICAgICBNYXRoLmFicyhieXRlcykgPj0gdGhpcy5vcHRpb25zLmZpbGVzaXplQmFzZVxuICAgICAgICAgICYmIHUgPCB1bml0cy5sZW5ndGggLSAxXG4gICAgICAgICk7XG5cbiAgICAgICAgc2VsZWN0ZWRTaXplID0gYnl0ZXMudG9GaXhlZCgxKTtcbiAgICAgICAgc2VsZWN0ZWRVbml0ID0gdW5pdHNbdV07XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWxlY3RlZFNpemUgPj0gMTA3Mzc0MTgyNCkge1xuICAgICAgICBzZWxlY3RlZFNpemUgPSBgJHsoc2VsZWN0ZWRTaXplIC8gMTA3Mzc0MTgyNCkudG9GaXhlZCgyKX0gR0JgO1xuICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZFNpemUgPj0gMTA0ODU3Nikge1xuICAgICAgICBzZWxlY3RlZFNpemUgPSBgJHsoc2VsZWN0ZWRTaXplIC8gMTA0ODU3NikudG9GaXhlZCgyKX0gTUJgO1xuICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZFNpemUgPj0gMTAyNCkge1xuICAgICAgICBzZWxlY3RlZFNpemUgPSBgJHsoc2VsZWN0ZWRTaXplIC8gMTAyNCkudG9GaXhlZCgyKX0gS0JgO1xuICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZFNpemUgPiAxKSB7XG4gICAgICAgIHNlbGVjdGVkU2l6ZSArPSAnIEInO1xuICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZFNpemUgPT0gMSkge1xuICAgICAgICBzZWxlY3RlZFNpemUgKz0gJyBieXRlJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGVjdGVkU2l6ZSA9ICcwIHNlbGVjdGVkU2l6ZSc7XG4gICAgICB9XG4gICAgICByZXR1cm4gYCR7c2VsZWN0ZWRTaXplfWA7XG4gICAgfTtcblxuICAgIGNvbnN0IG90aGVyRHJvcHpvbmUgPSBuZXcgRHJvcHpvbmUoJyNkb2N1bWVudC1kcm9wem9uZS1vdGhlcicsIHtcbiAgICAgIHVybCwgLy8gU2V0IHRoZSB1cmwgZm9yIHlvdXIgdXBsb2FkIHNjcmlwdCBsb2NhdGlvblxuICAgICAgcGFyYW1OYW1lOiAnZmlsZScsIC8vIFRoZSBuYW1lIHRoYXQgd2lsbCBiZSB1c2VkIHRvIHRyYW5zZmVyIHRoZSBmaWxlXG4gICAgICBmaWxlc2l6ZUJhc2U6IDEwMDAwMDAwMDAwMCxcbiAgICAgIG1heEZpbGVzaXplOiAyMCwgLy8gTUJcbiAgICAgIHVwbG9hZE11bHRpcGxlOiB0cnVlLFxuICAgICAgYWRkUmVtb3ZlTGlua3M6IHRydWUsXG4gICAgICBkaWN0VG90YWxVcGxvYWRNZXNzYWdlOiAnVXBsb2FkLUdyw7bDn2Ugw7xiZXJzY2hyaXR0ZW4sJyxcbiAgICAgIGFjY2VwdGVkRmlsZXM6XG4gICAgICAgICAgJy5wZGYsIC5wcHR4LCAueGxzeCwgLmRvY3gsIC5kb2MsIC54bHMsIC5wcHQsIC5vZHMsIC5vZHQsIC43eiwgLmd6LCAucmFyLCAuemlwLCAuYm1wLCAuZ2lmLCAuanBnLCAucG5nLCAudGlmLCAuY3N2LCAudHh0LCAucnRmLCAubXA0LCAuM2dwLCAubW92LCAuYXZpLCAud212JyxcbiAgICAgIGFjY2VwdChmaWxlLCBkb25lKSB7XG4gICAgICAgIGlmICh0b3RhbFNpemVPdGhlciA+PSAoMTAyNDk5OSAqIHRoaXMub3B0aW9ucy5tYXhGaWxlc2l6ZSkpIHtcbiAgICAgICAgICBmaWxlLnN0YXR1cyA9IERyb3B6b25lLkNBTkNFTEVEO1xuICAgICAgICAgIHRoaXMuX2Vycm9yUHJvY2Vzc2luZyhbZmlsZV0sIHRoaXMub3B0aW9ucy5kaWN0VG90YWxVcGxvYWRNZXNzYWdlLCBudWxsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkb25lKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBpbml0KCkge1xuICAgICAgICBsZXQgbWVzc2FnZXMgPSBbXTtcbiAgICAgICAgdGhpcy5vbihcImFkZGVkZmlsZVwiLCBmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgICAgIHRvdGFsU2l6ZU90aGVyICs9IGZpbGUuc2l6ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMub24oXCJyZW1vdmVkZmlsZVwiLCBmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgICAgIGlmIChmaWxlLnN0YXR1cyA9PT0gJ3F1ZXVlZCcpIHtcbiAgICAgICAgICAgIHRvdGFsU2l6ZU90aGVyIC09IGZpbGUuc2l6ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGZpbGUudXBsb2FkLnByb2dyZXNzICE9IDApIHtcbiAgICAgICAgICAgIHRvdGFsU2l6ZU90aGVyIC09IGZpbGUuc2l6ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm9uKCdhZGRlZGZpbGVzJywgZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgICAgICBsZXQgZXJyb3JGbGFnID0gZmFsc2U7XG4gICAgICAgICAgbGV0IGZpbGVXaXRoRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICBsZXQgaTtcbiAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZmlsZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGZpbGVbaV0uc3RhdHVzID09PSAnZXJyb3InKSB7XG4gICAgICAgICAgICAgIGZpbGVXaXRoRXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgdGVtcDtcbiAgICAgICAgICBpZiAoZXJyb3JGbGFnIHx8IGZpbGVXaXRoRXJyb3IpIHtcbiAgICAgICAgICAgIG1lc3NhZ2VzLmZvckVhY2goKHYsIGspID0+IHtcbiAgICAgICAgICAgICAgaWYgKHRlbXAgIT09IHYpIHtcbiAgICAgICAgICAgICAgICBhbGVydCh2KTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlcyA9IFtdO1xuICAgICAgICAgICAgICAgIHRlbXAgPSB2O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMub24oJ2NvbXBsZXRlJywgKGZpbGUsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm9uKCdlcnJvcicsIGZ1bmN0aW9uIChmaWxlLCBtZXNzYWdlKSB7XG4gICAgICAgICAgbWVzc2FnZXMucHVzaChtZXNzYWdlKTtcbiAgICAgICAgICB0b3RhbFNpemVPdGhlciAtPSBmaWxlLnNpemU7XG4gICAgICAgICAgdGhpcy5yZW1vdmVGaWxlKGZpbGUpO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZmlsZSwgcmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKGZpbGUuc3RhdHVzICE9ICdlcnJvcicpIHtcbiAgICAgICAgICByZXNwb25kQXJyT3RoZXIucHVzaChKU09OLnBhcnNlKHJlc3BvbnNlKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ290aGVyLXVwbG9hZCcpLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBKU09OLnBhcnNlKHJlc3BvbnNlKSlcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBvdGhlckRyb3B6b25lLmZpbGVzaXplID0gZnVuY3Rpb24gKGJ5dGVzKSB7XG4gICAgICBsZXQgc2VsZWN0ZWRTaXplID0gMDtcbiAgICAgIGNvbnN0IHVuaXRzID0gWydrYicsICdtYicsICdnYicsICd0YicsICdiJ107XG4gICAgICBpZiAoTWF0aC5hYnMoYnl0ZXMpIDwgdGhpcy5vcHRpb25zLmZpbGVzaXplQmFzZSkge1xuICAgICAgICBzZWxlY3RlZFNpemUgPSBieXRlcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCB1ID0gLTE7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICBieXRlcyAvPSB0aGlzLm9wdGlvbnMuZmlsZXNpemVCYXNlO1xuICAgICAgICAgICsrdTtcbiAgICAgICAgfSB3aGlsZSAoXG4gICAgICAgICAgTWF0aC5hYnMoYnl0ZXMpID49IHRoaXMub3B0aW9ucy5maWxlc2l6ZUJhc2VcbiAgICAgICAgICAmJiB1IDwgdW5pdHMubGVuZ3RoIC0gMVxuICAgICAgICApO1xuICAgICAgICBzZWxlY3RlZFNpemUgPSBieXRlcy50b0ZpeGVkKDEpO1xuICAgICAgICBzZWxlY3RlZFVuaXQgPSB1bml0c1t1XTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNlbGVjdGVkU2l6ZSA+PSAxMDczNzQxODI0KSB7XG4gICAgICAgIHNlbGVjdGVkU2l6ZSA9IGAkeyhzZWxlY3RlZFNpemUgLyAxMDczNzQxODI0KS50b0ZpeGVkKDIpfSBHQmA7XG4gICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkU2l6ZSA+PSAxMDQ4NTc2KSB7XG4gICAgICAgIHNlbGVjdGVkU2l6ZSA9IGAkeyhzZWxlY3RlZFNpemUgLyAxMDQ4NTc2KS50b0ZpeGVkKDIpfSBNQmA7XG4gICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkU2l6ZSA+PSAxMDI0KSB7XG4gICAgICAgIHNlbGVjdGVkU2l6ZSA9IGAkeyhzZWxlY3RlZFNpemUgLyAxMDI0KS50b0ZpeGVkKDIpfSBLQmA7XG4gICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkU2l6ZSA+IDEpIHtcbiAgICAgICAgc2VsZWN0ZWRTaXplICs9ICcgQic7XG4gICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkU2l6ZSA9PSAxKSB7XG4gICAgICAgIHNlbGVjdGVkU2l6ZSArPSAnIGJ5dGUnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZWN0ZWRTaXplID0gJzAgc2VsZWN0ZWRTaXplJztcbiAgICAgIH1cbiAgICAgIHJldHVybiBgJHtzZWxlY3RlZFNpemV9YDtcbiAgICB9O1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwbHktZm9ybVwiKS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAvLyBnZXQgY3YgdXBsb2FkZWQgZmlsZXMgYW5kIGdlbmVyYXRlIGpzb24gZGF0YSBmb3IgbXVsdGlwbGUgZmlsZXNcbiAgICAgIHZhciBjdkZpbGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdi11cGxvYWRcIik7XG4gICAgICBsZXQgYWxsVmFsdWVzID0gW107XG4gICAgICBpZiAocmVzcG9uZEFyci5sZW5ndGggPT0gMCAmJiBmbGFnID09IGZhbHNlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ryb3B6b25lLWVycm9yJykuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RvY3VtZW50LWRyb3B6b25lLWN2JykuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcmVzcG9uZEFyci5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICBhbGxWYWx1ZXMgKz0gYFwiJHtpbmRleH1cImAgKyBcIjpcIiArIHJlc3BvbmRBcnJbaW5kZXhdO1xuICAgICAgICAgIGlmIChpbmRleCA8IHJlc3BvbmRBcnIubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgYWxsVmFsdWVzICs9IFwiLFwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjdkZpbGVzLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAneycgKyBhbGxWYWx1ZXMgKyAnfScpO1xuICAgICAgfVxuXG4gICAgICB2YXIgb3RoZXJGaWxlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3RoZXItdXBsb2FkXCIpO1xuICAgICAgbGV0IGFsbE90aGVyVmFsdWVzID0gW107XG4gICAgICBpZiAocmVzcG9uZEFyck90aGVyKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzcG9uZEFyck90aGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYWxsT3RoZXJWYWx1ZXMgKz0gYFwiJHtpfVwiYCArIFwiOlwiICsgcmVzcG9uZEFyck90aGVyW2ldO1xuICAgICAgICAgIGlmIChpIDwgcmVzcG9uZEFyck90aGVyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIGFsbE90aGVyVmFsdWVzICs9IFwiLFwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBvdGhlckZpbGVzLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAneycgKyBhbGxPdGhlclZhbHVlcyArICd9Jyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG4iLCJpbXBvcnQgSXNvdG9wZSBmcm9tICdpc290b3BlLWxheW91dCc7XG5cbmxldCBpc28gPSBudWxsO1xuZnVuY3Rpb24gaXNvdG9wRmlsdGVyKCkge1xuICBjb25zdCBqb2JzRGF0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qb2ItZGF0YScpO1xuXG4gIGlmIChqb2JzRGF0YSkge1xuICAgIGpvYnNEYXRhLmZvckVhY2goKCRncmlkKSA9PiB7XG4gICAgICBpZiAoJGdyaWQuY2xhc3NMaXN0LmNvbnRhaW5zKCducy1wZXJzb25pby1qb2JzLS1saXN0JykpIHtcbiAgICAgICAgaWYgKGlzbykge1xuICAgICAgICAgIGlzby5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgaXNvID0gbmV3IElzb3RvcGUoKCRncmlkKSwge1xuICAgICAgICAgIGl0ZW1TZWxlY3RvcjogJy5ucy1wZXJzb25pby1qb2ItaXRlbScsXG4gICAgICAgICAgbGF5b3V0TW9kZTogJ3BhY2tlcnknLFxuICAgICAgICAgIHBlcmNlbnRQb3NpdGlvbjogdHJ1ZSxcbiAgICAgICAgICBwYWNrZXJ5OiB7XG4gICAgICAgICAgICBpbml0TGF5b3V0OiBmYWxzZSxcbiAgICAgICAgICAgIHBlcmNlbnRQb3NpdGlvbjogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoJGdyaWQuY2xhc3NMaXN0LmNvbnRhaW5zKCducy1wZXJzb25pby1qb2JzLS1tYXNvbnJ5JykpIHtcbiAgICAgICAgaWYgKGlzbykge1xuICAgICAgICAgIGlzby5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgaXNvID0gbmV3IElzb3RvcGUoKCRncmlkKSwge1xuICAgICAgICAgIGl0ZW1TZWxlY3RvcjogJy5ucy1wZXJzb25pby1qb2ItaXRlbScsXG4gICAgICAgICAgbGF5b3V0TW9kZTogJ21hc29ucnknLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGxldCBzZWxlY3RlZENhdCA9ICcnO1xuICAgIGNvbnN0IGpvYnNGaWx0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuam9icy10YWJzIGEnKTtcbiAgICBpZiAoam9ic0ZpbHRlcikge1xuICAgICAgam9ic0ZpbHRlci5mb3JFYWNoKCgkY2F0QnRuKSA9PiB7XG4gICAgICAgICRjYXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBzZWxlY3RlZENhdCA9ICRjYXRCdG4uZ2V0QXR0cmlidXRlKCdkYXRhLWZpbHRlcicpO1xuICAgICAgICAgIGlmIChzZWxlY3RlZENhdCA9PT0gJyonKSB7XG4gICAgICAgICAgICBzZWxlY3RlZENhdCA9ICcnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxlY3RlZENhdCA9ICRjYXRCdG4uZ2V0QXR0cmlidXRlKCdkYXRhLWZpbHRlcicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBqb2JzRmlsdGVyLmZvckVhY2goKCRidG4pID0+IHtcbiAgICAgICAgICAgICRidG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgJGNhdEJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICBpc28uYXJyYW5nZSh7IGZpbHRlcjogc2VsZWN0ZWRDYXQgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5pc290b3BGaWx0ZXIoKTtcbmNvbnN0IGZpbHRlckJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqb2ItZmlsdGVyJyk7XG5jb25zdCBmaWx0ZXJGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlckZvcm0nKTtcblxuY29uc3Qgam9icyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqb2JzLXJlc3VsdHMnKTtcblxuaWYgKGZpbHRlckJ1dHRvbikge1xuICBmaWx0ZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKGZpbHRlckZvcm0pO1xuICAgIGNvbnN0IHVybCA9IGZpbHRlckZvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKTtcbiAgICBjb25zdCBodHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgaHR0cC5vcGVuKCdQT1NUJywgdXJsLCB0cnVlKTtcbiAgICBodHRwLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgIGlmIChodHRwLnJlYWR5U3RhdGUgPT09IDQgJiYgaHR0cC5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgICAgIGNvbnN0IGRvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoaHR0cC5yZXNwb25zZVRleHQsICd0ZXh0L2h0bWwnKTtcbiAgICAgICAgLy8gR2V0IHRoZSBuZXcgaXRlbXNcbiAgICAgICAgLy8gUmVuZGVyIHRoZSBpdGVtc1xuICAgICAgICBpZiAoZG9jLmdldEVsZW1lbnRCeUlkKCdqb2JzLXRhYnMnKSkge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqb2JzLXRhYnMnKS5pbm5lckhUTUwgPSBkb2MuZ2V0RWxlbWVudEJ5SWQoJ2pvYnMtdGFicycpLmlubmVySFRNTDtcbiAgICAgICAgfVxuICAgICAgICBqb2JzLmlubmVySFRNTCA9IGRvYy5nZXRFbGVtZW50QnlJZCgnam9icy1yZXN1bHRzJykuaW5uZXJIVE1MO1xuICAgICAgICAvLyBhamF4UGFnaW5hdGlvbigpO1xuICAgICAgICBpc290b3BGaWx0ZXIoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGh0dHAuc2VuZChkYXRhKTtcbiAgfSk7XG59XG4iLCJjb25zdCBtYWluRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtJyk7XG5pZiAobWFpbkZvcm0ubGVuZ3RoKSB7XG4gIG1haW5Gb3JtLmZvckVhY2goKGZvcm0pID0+IHtcbiAgICBjb25zdCBmb3JtSW5wdXRSZXF1aXJlZCA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0tY29udHJvbCcpO1xuICAgIGNvbnN0IGZvcm1CdXR0b24gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5ucy1wZXJzb25pby1idG5bdHlwZT1cInN1Ym1pdFwiXScpO1xuXG4gICAgZm9ybUlucHV0UmVxdWlyZWQuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgIGlmIChmb3JtQnV0dG9uKSB7XG4gICAgICAgIGZvcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKCFpbnB1dC52YWx1ZSkge1xuICAgICAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbiAgICAgICAgICAgIGlucHV0LmNsb3Nlc3QoJy5mb3JtLWdyb3VwJykuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cC1lcnJvcicpO1xuICAgICAgICAgICAgaWYgKGlucHV0Lm5leHRFbGVtZW50U2libGluZykge1xuICAgICAgICAgICAgICBpbnB1dC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnaW52YWxpZC1mZWVkYmFjaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlucHV0LmNsb3Nlc3QoJy5kcm9wem9uZScpKSB7XG4gICAgICAgICAgICAgIGlucHV0LmNsb3Nlc3QoJy5kcm9wem9uZScpLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAtZXJyb3InKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICAgICAgICBpZiAoaW5wdXQudmFsdWUpIHtcbiAgICAgICAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xuICAgICAgICAgIGlmIChpbnB1dC5uZXh0RWxlbWVudFNpYmxpbmcpIHtcbiAgICAgICAgICAgIGlucHV0Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkLWZlZWRiYWNrJylcbiAgICAgICAgICB9XG4gICAgICAgICAgaW5wdXQuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKS5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLWdyb3VwLWVycm9yJyk7XG4gICAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnc3VjY2VzcycpO1xuICAgICAgICAgIGlucHV0LmNsb3Nlc3QoJy5mb3JtLWdyb3VwJykuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cC1zdWNjZXNzJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbiAgICAgICAgICBpbnB1dC5jbG9zZXN0KCcuZm9ybS1ncm91cCcpLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAtZXJyb3InKTtcbiAgICAgICAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdzdWNjZXNzJyk7XG4gICAgICAgICAgaW5wdXQuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKS5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLWdyb3VwLXN1Y2Nlc3MnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCd3YXMtdmFsaWRhdGVkJyk7XG4gICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RvY3VtZW50LWRyb3B6b25lLWN2JykuY2xhc3NMaXN0LmNvbnRhaW5zKCdlcnJvcicpKSB7XG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnd2FzLXZhbGlkYXRlZCcpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cbiAgICAgIGlmICghZm9ybS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9XG4gICAgfSwgZmFsc2UpO1xuICB9KTtcbn1cblxuLy8gRW1haWwgVmFsaWRhdGlvblxuXG5jb25zdCBpbnB1dEVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIlt0eXBlPSdlbWFpbCddXCIpO1xuY29uc3QgaXNFbXB0eSA9IChzdHIpID0+ICFzdHIudHJpbSgpLmxlbmd0aDtcbmNvbnN0IHZhbGlkUmVnID0gL15bYS16QS1aMC05LiEjJCUmJyorLz0/Xl9ge3x9fi1dK0BbYS16QS1aMC05LV0rKD86XFwuW2EtekEtWjAtOS1dKykqJC87XG5cbmNvbnN0IGNoZWNrRW1haWwgPSAoJHZhbCkgPT4ge1xuICBpZiAoJHZhbC5tYXRjaCh2YWxpZFJlZykpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuaWYgKGlucHV0RW1haWwpIHtcbiAgaW5wdXRFbWFpbC5mb3JFYWNoKCgkZW1haWwpID0+IHtcbiAgICAkZW1haWwuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgICAgIGlmICghY2hlY2tFbWFpbCgkZW1haWwudmFsdWUpKSB7XG4gICAgICAgICRlbWFpbC5jbG9zZXN0KCcuZm9ybS1ncm91cCcpLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAtZXJyb3InKTtcbiAgICAgICAgJGVtYWlsLmNsb3Nlc3QoJy5mb3JtLWdyb3VwJykuY2xhc3NMaXN0LmFkZCgnZmllbGQtbWVzc2FnZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGVtYWlsLmNsb3Nlc3QoJy5mb3JtLWdyb3VwJykuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1ncm91cC1lcnJvcicpO1xuICAgICAgICAkZW1haWwuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKS5jbGFzc0xpc3QucmVtb3ZlKCdmaWVsZC1tZXNzYWdlJyk7XG4gICAgICB9XG4gICAgICBpZiAoIWlzRW1wdHkoJGVtYWlsLnZhbHVlKSkge1xuICAgICAgICAkZW1haWwuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKS5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLWdyb3VwLWVycm9yJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkZW1haWwuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKS5jbGFzc0xpc3QucmVtb3ZlKCdmaWVsZC1tZXNzYWdlJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG4vLyBQaG9uZSBWYWxpZGF0aW9uXG5jb25zdCBpbnB1dFBob25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIlt0eXBlPSd0ZWwnXVwiKTtcblxuY29uc3QgaXNFbXB0eVBob25lID0gKHN0cikgPT4gIXN0ci50cmltKCkubGVuZ3RoO1xuY29uc3QgdmFsaWRSZWdQaG9uZSA9IC9eKChcXCtcXGR7MSwzfSgtfCApP1xcKD9cXGRcXCk/KC18ICk/XFxkezEsNX0pfChcXCg/XFxkezIsNn1cXCk/KSkoLXwgKT8oXFxkezMsNH0pKC18ICk/KFxcZHs0fSkoKCB4fCBleHQpXFxkezEsNX0pezAsMX0kLztcblxuY29uc3QgY2hlY2tQaG9uZSA9ICgkdmFsKSA9PiB7XG4gIGlmICgkdmFsLm1hdGNoKHZhbGlkUmVnUGhvbmUpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cbmlmIChpbnB1dFBob25lKSB7XG4gIGlucHV0UGhvbmUuZm9yRWFjaCgoJHBob25lKSA9PiB7XG4gICAgJHBob25lLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XG4gICAgICBpZiAoIWNoZWNrUGhvbmUoJHBob25lLnZhbHVlKSkge1xuICAgICAgICAkcGhvbmUuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKS5jbGFzc0xpc3QuYWRkKCdmaWVsZC1tZXNzYWdlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkcGhvbmUuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKS5jbGFzc0xpc3QucmVtb3ZlKCdmaWVsZC1tZXNzYWdlJyk7XG4gICAgICB9XG4gICAgICBpZiAoIWlzRW1wdHlQaG9uZSgkcGhvbmUudmFsdWUpKSB7XG4gICAgICAgICRwaG9uZS5jbG9zZXN0KCcuZm9ybS1ncm91cCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tZ3JvdXAtZXJyb3InKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRwaG9uZS5jbG9zZXN0KCcuZm9ybS1ncm91cCcpLmNsYXNzTGlzdC5hZGQoJ2ZpZWxkLW1lc3NhZ2UnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG4iLCIvKipcbiAqIG1hdGNoZXNTZWxlY3RvciB2Mi4wLjJcbiAqIG1hdGNoZXNTZWxlY3RvciggZWxlbWVudCwgJy5zZWxlY3RvcicgKVxuICogTUlUIGxpY2Vuc2VcbiAqL1xuXG4vKmpzaGludCBicm93c2VyOiB0cnVlLCBzdHJpY3Q6IHRydWUsIHVuZGVmOiB0cnVlLCB1bnVzZWQ6IHRydWUgKi9cblxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvKmdsb2JhbCBkZWZpbmU6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG4gICd1c2Ugc3RyaWN0JztcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBmYWN0b3J5ICk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIHdpbmRvdy5tYXRjaGVzU2VsZWN0b3IgPSBmYWN0b3J5KCk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIG1hdGNoZXNNZXRob2QgPSAoIGZ1bmN0aW9uKCkge1xuICAgIHZhciBFbGVtUHJvdG8gPSB3aW5kb3cuRWxlbWVudC5wcm90b3R5cGU7XG4gICAgLy8gY2hlY2sgZm9yIHRoZSBzdGFuZGFyZCBtZXRob2QgbmFtZSBmaXJzdFxuICAgIGlmICggRWxlbVByb3RvLm1hdGNoZXMgKSB7XG4gICAgICByZXR1cm4gJ21hdGNoZXMnO1xuICAgIH1cbiAgICAvLyBjaGVjayB1bi1wcmVmaXhlZFxuICAgIGlmICggRWxlbVByb3RvLm1hdGNoZXNTZWxlY3RvciApIHtcbiAgICAgIHJldHVybiAnbWF0Y2hlc1NlbGVjdG9yJztcbiAgICB9XG4gICAgLy8gY2hlY2sgdmVuZG9yIHByZWZpeGVzXG4gICAgdmFyIHByZWZpeGVzID0gWyAnd2Via2l0JywgJ21veicsICdtcycsICdvJyBdO1xuXG4gICAgZm9yICggdmFyIGk9MDsgaSA8IHByZWZpeGVzLmxlbmd0aDsgaSsrICkge1xuICAgICAgdmFyIHByZWZpeCA9IHByZWZpeGVzW2ldO1xuICAgICAgdmFyIG1ldGhvZCA9IHByZWZpeCArICdNYXRjaGVzU2VsZWN0b3InO1xuICAgICAgaWYgKCBFbGVtUHJvdG9bIG1ldGhvZCBdICkge1xuICAgICAgICByZXR1cm4gbWV0aG9kO1xuICAgICAgfVxuICAgIH1cbiAgfSkoKTtcblxuICByZXR1cm4gZnVuY3Rpb24gbWF0Y2hlc1NlbGVjdG9yKCBlbGVtLCBzZWxlY3RvciApIHtcbiAgICByZXR1cm4gZWxlbVsgbWF0Y2hlc01ldGhvZCBdKCBzZWxlY3RvciApO1xuICB9O1xuXG59KSk7XG4iLCIvKipcbiAqIEZpenp5IFVJIHV0aWxzIHYyLjAuN1xuICogTUlUIGxpY2Vuc2VcbiAqL1xuXG4vKmpzaGludCBicm93c2VyOiB0cnVlLCB1bmRlZjogdHJ1ZSwgdW51c2VkOiB0cnVlLCBzdHJpY3Q6IHRydWUgKi9cblxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgLypqc2hpbnQgc3RyaWN0OiBmYWxzZSAqLyAvKmdsb2JhbHMgZGVmaW5lLCBtb2R1bGUsIHJlcXVpcmUgKi9cblxuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggW1xuICAgICAgJ2Rlc2FuZHJvLW1hdGNoZXMtc2VsZWN0b3IvbWF0Y2hlcy1zZWxlY3RvcidcbiAgICBdLCBmdW5jdGlvbiggbWF0Y2hlc1NlbGVjdG9yICkge1xuICAgICAgcmV0dXJuIGZhY3RvcnkoIHdpbmRvdywgbWF0Y2hlc1NlbGVjdG9yICk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICByZXF1aXJlKCdkZXNhbmRyby1tYXRjaGVzLXNlbGVjdG9yJylcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgd2luZG93LmZpenp5VUlVdGlscyA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICB3aW5kb3cubWF0Y2hlc1NlbGVjdG9yXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIHdpbmRvdywgbWF0Y2hlc1NlbGVjdG9yICkge1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHt9O1xuXG4vLyAtLS0tLSBleHRlbmQgLS0tLS0gLy9cblxuLy8gZXh0ZW5kcyBvYmplY3RzXG51dGlscy5leHRlbmQgPSBmdW5jdGlvbiggYSwgYiApIHtcbiAgZm9yICggdmFyIHByb3AgaW4gYiApIHtcbiAgICBhWyBwcm9wIF0gPSBiWyBwcm9wIF07XG4gIH1cbiAgcmV0dXJuIGE7XG59O1xuXG4vLyAtLS0tLSBtb2R1bG8gLS0tLS0gLy9cblxudXRpbHMubW9kdWxvID0gZnVuY3Rpb24oIG51bSwgZGl2ICkge1xuICByZXR1cm4gKCAoIG51bSAlIGRpdiApICsgZGl2ICkgJSBkaXY7XG59O1xuXG4vLyAtLS0tLSBtYWtlQXJyYXkgLS0tLS0gLy9cblxudmFyIGFycmF5U2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cbi8vIHR1cm4gZWxlbWVudCBvciBub2RlTGlzdCBpbnRvIGFuIGFycmF5XG51dGlscy5tYWtlQXJyYXkgPSBmdW5jdGlvbiggb2JqICkge1xuICBpZiAoIEFycmF5LmlzQXJyYXkoIG9iaiApICkge1xuICAgIC8vIHVzZSBvYmplY3QgaWYgYWxyZWFkeSBhbiBhcnJheVxuICAgIHJldHVybiBvYmo7XG4gIH1cbiAgLy8gcmV0dXJuIGVtcHR5IGFycmF5IGlmIHVuZGVmaW5lZCBvciBudWxsLiAjNlxuICBpZiAoIG9iaiA9PT0gbnVsbCB8fCBvYmogPT09IHVuZGVmaW5lZCApIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICB2YXIgaXNBcnJheUxpa2UgPSB0eXBlb2Ygb2JqID09ICdvYmplY3QnICYmIHR5cGVvZiBvYmoubGVuZ3RoID09ICdudW1iZXInO1xuICBpZiAoIGlzQXJyYXlMaWtlICkge1xuICAgIC8vIGNvbnZlcnQgbm9kZUxpc3QgdG8gYXJyYXlcbiAgICByZXR1cm4gYXJyYXlTbGljZS5jYWxsKCBvYmogKTtcbiAgfVxuXG4gIC8vIGFycmF5IG9mIHNpbmdsZSBpbmRleFxuICByZXR1cm4gWyBvYmogXTtcbn07XG5cbi8vIC0tLS0tIHJlbW92ZUZyb20gLS0tLS0gLy9cblxudXRpbHMucmVtb3ZlRnJvbSA9IGZ1bmN0aW9uKCBhcnksIG9iaiApIHtcbiAgdmFyIGluZGV4ID0gYXJ5LmluZGV4T2YoIG9iaiApO1xuICBpZiAoIGluZGV4ICE9IC0xICkge1xuICAgIGFyeS5zcGxpY2UoIGluZGV4LCAxICk7XG4gIH1cbn07XG5cbi8vIC0tLS0tIGdldFBhcmVudCAtLS0tLSAvL1xuXG51dGlscy5nZXRQYXJlbnQgPSBmdW5jdGlvbiggZWxlbSwgc2VsZWN0b3IgKSB7XG4gIHdoaWxlICggZWxlbS5wYXJlbnROb2RlICYmIGVsZW0gIT0gZG9jdW1lbnQuYm9keSApIHtcbiAgICBlbGVtID0gZWxlbS5wYXJlbnROb2RlO1xuICAgIGlmICggbWF0Y2hlc1NlbGVjdG9yKCBlbGVtLCBzZWxlY3RvciApICkge1xuICAgICAgcmV0dXJuIGVsZW07XG4gICAgfVxuICB9XG59O1xuXG4vLyAtLS0tLSBnZXRRdWVyeUVsZW1lbnQgLS0tLS0gLy9cblxuLy8gdXNlIGVsZW1lbnQgYXMgc2VsZWN0b3Igc3RyaW5nXG51dGlscy5nZXRRdWVyeUVsZW1lbnQgPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgaWYgKCB0eXBlb2YgZWxlbSA9PSAnc3RyaW5nJyApIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggZWxlbSApO1xuICB9XG4gIHJldHVybiBlbGVtO1xufTtcblxuLy8gLS0tLS0gaGFuZGxlRXZlbnQgLS0tLS0gLy9cblxuLy8gZW5hYmxlIC5vbnR5cGUgdG8gdHJpZ2dlciBmcm9tIC5hZGRFdmVudExpc3RlbmVyKCBlbGVtLCAndHlwZScgKVxudXRpbHMuaGFuZGxlRXZlbnQgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIHZhciBtZXRob2QgPSAnb24nICsgZXZlbnQudHlwZTtcbiAgaWYgKCB0aGlzWyBtZXRob2QgXSApIHtcbiAgICB0aGlzWyBtZXRob2QgXSggZXZlbnQgKTtcbiAgfVxufTtcblxuLy8gLS0tLS0gZmlsdGVyRmluZEVsZW1lbnRzIC0tLS0tIC8vXG5cbnV0aWxzLmZpbHRlckZpbmRFbGVtZW50cyA9IGZ1bmN0aW9uKCBlbGVtcywgc2VsZWN0b3IgKSB7XG4gIC8vIG1ha2UgYXJyYXkgb2YgZWxlbXNcbiAgZWxlbXMgPSB1dGlscy5tYWtlQXJyYXkoIGVsZW1zICk7XG4gIHZhciBmZkVsZW1zID0gW107XG5cbiAgZWxlbXMuZm9yRWFjaCggZnVuY3Rpb24oIGVsZW0gKSB7XG4gICAgLy8gY2hlY2sgdGhhdCBlbGVtIGlzIGFuIGFjdHVhbCBlbGVtZW50XG4gICAgaWYgKCAhKCBlbGVtIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgKSApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gYWRkIGVsZW0gaWYgbm8gc2VsZWN0b3JcbiAgICBpZiAoICFzZWxlY3RvciApIHtcbiAgICAgIGZmRWxlbXMucHVzaCggZWxlbSApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBmaWx0ZXIgJiBmaW5kIGl0ZW1zIGlmIHdlIGhhdmUgYSBzZWxlY3RvclxuICAgIC8vIGZpbHRlclxuICAgIGlmICggbWF0Y2hlc1NlbGVjdG9yKCBlbGVtLCBzZWxlY3RvciApICkge1xuICAgICAgZmZFbGVtcy5wdXNoKCBlbGVtICk7XG4gICAgfVxuICAgIC8vIGZpbmQgY2hpbGRyZW5cbiAgICB2YXIgY2hpbGRFbGVtcyA9IGVsZW0ucXVlcnlTZWxlY3RvckFsbCggc2VsZWN0b3IgKTtcbiAgICAvLyBjb25jYXQgY2hpbGRFbGVtcyB0byBmaWx0ZXJGb3VuZCBhcnJheVxuICAgIGZvciAoIHZhciBpPTA7IGkgPCBjaGlsZEVsZW1zLmxlbmd0aDsgaSsrICkge1xuICAgICAgZmZFbGVtcy5wdXNoKCBjaGlsZEVsZW1zW2ldICk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZmZFbGVtcztcbn07XG5cbi8vIC0tLS0tIGRlYm91bmNlTWV0aG9kIC0tLS0tIC8vXG5cbnV0aWxzLmRlYm91bmNlTWV0aG9kID0gZnVuY3Rpb24oIF9jbGFzcywgbWV0aG9kTmFtZSwgdGhyZXNob2xkICkge1xuICB0aHJlc2hvbGQgPSB0aHJlc2hvbGQgfHwgMTAwO1xuICAvLyBvcmlnaW5hbCBtZXRob2RcbiAgdmFyIG1ldGhvZCA9IF9jbGFzcy5wcm90b3R5cGVbIG1ldGhvZE5hbWUgXTtcbiAgdmFyIHRpbWVvdXROYW1lID0gbWV0aG9kTmFtZSArICdUaW1lb3V0JztcblxuICBfY2xhc3MucHJvdG90eXBlWyBtZXRob2ROYW1lIF0gPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdGltZW91dCA9IHRoaXNbIHRpbWVvdXROYW1lIF07XG4gICAgY2xlYXJUaW1lb3V0KCB0aW1lb3V0ICk7XG5cbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHRoaXNbIHRpbWVvdXROYW1lIF0gPSBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcbiAgICAgIG1ldGhvZC5hcHBseSggX3RoaXMsIGFyZ3MgKTtcbiAgICAgIGRlbGV0ZSBfdGhpc1sgdGltZW91dE5hbWUgXTtcbiAgICB9LCB0aHJlc2hvbGQgKTtcbiAgfTtcbn07XG5cbi8vIC0tLS0tIGRvY1JlYWR5IC0tLS0tIC8vXG5cbnV0aWxzLmRvY1JlYWR5ID0gZnVuY3Rpb24oIGNhbGxiYWNrICkge1xuICB2YXIgcmVhZHlTdGF0ZSA9IGRvY3VtZW50LnJlYWR5U3RhdGU7XG4gIGlmICggcmVhZHlTdGF0ZSA9PSAnY29tcGxldGUnIHx8IHJlYWR5U3RhdGUgPT0gJ2ludGVyYWN0aXZlJyApIHtcbiAgICAvLyBkbyBhc3luYyB0byBhbGxvdyBmb3Igb3RoZXIgc2NyaXB0cyB0byBydW4uIG1ldGFmaXp6eS9mbGlja2l0eSM0NDFcbiAgICBzZXRUaW1lb3V0KCBjYWxsYmFjayApO1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdET01Db250ZW50TG9hZGVkJywgY2FsbGJhY2sgKTtcbiAgfVxufTtcblxuLy8gLS0tLS0gaHRtbEluaXQgLS0tLS0gLy9cblxuLy8gaHR0cDovL2phbWVzcm9iZXJ0cy5uYW1lL2Jsb2cvMjAxMC8wMi8yMi9zdHJpbmctZnVuY3Rpb25zLWZvci1qYXZhc2NyaXB0LXRyaW0tdG8tY2FtZWwtY2FzZS10by1kYXNoZWQtYW5kLXRvLXVuZGVyc2NvcmUvXG51dGlscy50b0Rhc2hlZCA9IGZ1bmN0aW9uKCBzdHIgKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSggLyguKShbQS1aXSkvZywgZnVuY3Rpb24oIG1hdGNoLCAkMSwgJDIgKSB7XG4gICAgcmV0dXJuICQxICsgJy0nICsgJDI7XG4gIH0pLnRvTG93ZXJDYXNlKCk7XG59O1xuXG52YXIgY29uc29sZSA9IHdpbmRvdy5jb25zb2xlO1xuLyoqXG4gKiBhbGxvdyB1c2VyIHRvIGluaXRpYWxpemUgY2xhc3NlcyB2aWEgW2RhdGEtbmFtZXNwYWNlXSBvciAuanMtbmFtZXNwYWNlIGNsYXNzXG4gKiBodG1sSW5pdCggV2lkZ2V0LCAnd2lkZ2V0TmFtZScgKVxuICogb3B0aW9ucyBhcmUgcGFyc2VkIGZyb20gZGF0YS1uYW1lc3BhY2Utb3B0aW9uc1xuICovXG51dGlscy5odG1sSW5pdCA9IGZ1bmN0aW9uKCBXaWRnZXRDbGFzcywgbmFtZXNwYWNlICkge1xuICB1dGlscy5kb2NSZWFkeSggZnVuY3Rpb24oKSB7XG4gICAgdmFyIGRhc2hlZE5hbWVzcGFjZSA9IHV0aWxzLnRvRGFzaGVkKCBuYW1lc3BhY2UgKTtcbiAgICB2YXIgZGF0YUF0dHIgPSAnZGF0YS0nICsgZGFzaGVkTmFtZXNwYWNlO1xuICAgIHZhciBkYXRhQXR0ckVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJ1snICsgZGF0YUF0dHIgKyAnXScgKTtcbiAgICB2YXIganNEYXNoRWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCAnLmpzLScgKyBkYXNoZWROYW1lc3BhY2UgKTtcbiAgICB2YXIgZWxlbXMgPSB1dGlscy5tYWtlQXJyYXkoIGRhdGFBdHRyRWxlbXMgKVxuICAgICAgLmNvbmNhdCggdXRpbHMubWFrZUFycmF5KCBqc0Rhc2hFbGVtcyApICk7XG4gICAgdmFyIGRhdGFPcHRpb25zQXR0ciA9IGRhdGFBdHRyICsgJy1vcHRpb25zJztcbiAgICB2YXIgalF1ZXJ5ID0gd2luZG93LmpRdWVyeTtcblxuICAgIGVsZW1zLmZvckVhY2goIGZ1bmN0aW9uKCBlbGVtICkge1xuICAgICAgdmFyIGF0dHIgPSBlbGVtLmdldEF0dHJpYnV0ZSggZGF0YUF0dHIgKSB8fFxuICAgICAgICBlbGVtLmdldEF0dHJpYnV0ZSggZGF0YU9wdGlvbnNBdHRyICk7XG4gICAgICB2YXIgb3B0aW9ucztcbiAgICAgIHRyeSB7XG4gICAgICAgIG9wdGlvbnMgPSBhdHRyICYmIEpTT04ucGFyc2UoIGF0dHIgKTtcbiAgICAgIH0gY2F0Y2ggKCBlcnJvciApIHtcbiAgICAgICAgLy8gbG9nIGVycm9yLCBkbyBub3QgaW5pdGlhbGl6ZVxuICAgICAgICBpZiAoIGNvbnNvbGUgKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvciggJ0Vycm9yIHBhcnNpbmcgJyArIGRhdGFBdHRyICsgJyBvbiAnICsgZWxlbS5jbGFzc05hbWUgK1xuICAgICAgICAgICc6ICcgKyBlcnJvciApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIGluaXRpYWxpemVcbiAgICAgIHZhciBpbnN0YW5jZSA9IG5ldyBXaWRnZXRDbGFzcyggZWxlbSwgb3B0aW9ucyApO1xuICAgICAgLy8gbWFrZSBhdmFpbGFibGUgdmlhICQoKS5kYXRhKCduYW1lc3BhY2UnKVxuICAgICAgaWYgKCBqUXVlcnkgKSB7XG4gICAgICAgIGpRdWVyeS5kYXRhKCBlbGVtLCBuYW1lc3BhY2UsIGluc3RhbmNlICk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgfSk7XG59O1xuXG4vLyAtLS0tLSAgLS0tLS0gLy9cblxucmV0dXJuIHV0aWxzO1xuXG59KSk7XG4iLCIvKiFcbiAqIGdldFNpemUgdjIuMC4zXG4gKiBtZWFzdXJlIHNpemUgb2YgZWxlbWVudHNcbiAqIE1JVCBsaWNlbnNlXG4gKi9cblxuLyoganNoaW50IGJyb3dzZXI6IHRydWUsIHN0cmljdDogdHJ1ZSwgdW5kZWY6IHRydWUsIHVudXNlZDogdHJ1ZSAqL1xuLyogZ2xvYmFscyBjb25zb2xlOiBmYWxzZSAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8qIGpzaGludCBzdHJpY3Q6IGZhbHNlICovIC8qIGdsb2JhbHMgZGVmaW5lLCBtb2R1bGUgKi9cbiAgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAvLyBBTURcbiAgICBkZWZpbmUoIGZhY3RvcnkgKTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgd2luZG93LmdldFNpemUgPSBmYWN0b3J5KCk7XG4gIH1cblxufSkoIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSgpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gaGVscGVycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vLyBnZXQgYSBudW1iZXIgZnJvbSBhIHN0cmluZywgbm90IGEgcGVyY2VudGFnZVxuZnVuY3Rpb24gZ2V0U3R5bGVTaXplKCB2YWx1ZSApIHtcbiAgdmFyIG51bSA9IHBhcnNlRmxvYXQoIHZhbHVlICk7XG4gIC8vIG5vdCBhIHBlcmNlbnQgbGlrZSAnMTAwJScsIGFuZCBhIG51bWJlclxuICB2YXIgaXNWYWxpZCA9IHZhbHVlLmluZGV4T2YoJyUnKSA9PSAtMSAmJiAhaXNOYU4oIG51bSApO1xuICByZXR1cm4gaXNWYWxpZCAmJiBudW07XG59XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG52YXIgbG9nRXJyb3IgPSB0eXBlb2YgY29uc29sZSA9PSAndW5kZWZpbmVkJyA/IG5vb3AgOlxuICBmdW5jdGlvbiggbWVzc2FnZSApIHtcbiAgICBjb25zb2xlLmVycm9yKCBtZXNzYWdlICk7XG4gIH07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG1lYXN1cmVtZW50cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG52YXIgbWVhc3VyZW1lbnRzID0gW1xuICAncGFkZGluZ0xlZnQnLFxuICAncGFkZGluZ1JpZ2h0JyxcbiAgJ3BhZGRpbmdUb3AnLFxuICAncGFkZGluZ0JvdHRvbScsXG4gICdtYXJnaW5MZWZ0JyxcbiAgJ21hcmdpblJpZ2h0JyxcbiAgJ21hcmdpblRvcCcsXG4gICdtYXJnaW5Cb3R0b20nLFxuICAnYm9yZGVyTGVmdFdpZHRoJyxcbiAgJ2JvcmRlclJpZ2h0V2lkdGgnLFxuICAnYm9yZGVyVG9wV2lkdGgnLFxuICAnYm9yZGVyQm90dG9tV2lkdGgnXG5dO1xuXG52YXIgbWVhc3VyZW1lbnRzTGVuZ3RoID0gbWVhc3VyZW1lbnRzLmxlbmd0aDtcblxuZnVuY3Rpb24gZ2V0WmVyb1NpemUoKSB7XG4gIHZhciBzaXplID0ge1xuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMCxcbiAgICBpbm5lcldpZHRoOiAwLFxuICAgIGlubmVySGVpZ2h0OiAwLFxuICAgIG91dGVyV2lkdGg6IDAsXG4gICAgb3V0ZXJIZWlnaHQ6IDBcbiAgfTtcbiAgZm9yICggdmFyIGk9MDsgaSA8IG1lYXN1cmVtZW50c0xlbmd0aDsgaSsrICkge1xuICAgIHZhciBtZWFzdXJlbWVudCA9IG1lYXN1cmVtZW50c1tpXTtcbiAgICBzaXplWyBtZWFzdXJlbWVudCBdID0gMDtcbiAgfVxuICByZXR1cm4gc2l6ZTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2V0U3R5bGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLyoqXG4gKiBnZXRTdHlsZSwgZ2V0IHN0eWxlIG9mIGVsZW1lbnQsIGNoZWNrIGZvciBGaXJlZm94IGJ1Z1xuICogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NTQ4Mzk3XG4gKi9cbmZ1bmN0aW9uIGdldFN0eWxlKCBlbGVtICkge1xuICB2YXIgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKCBlbGVtICk7XG4gIGlmICggIXN0eWxlICkge1xuICAgIGxvZ0Vycm9yKCAnU3R5bGUgcmV0dXJuZWQgJyArIHN0eWxlICtcbiAgICAgICcuIEFyZSB5b3UgcnVubmluZyB0aGlzIGNvZGUgaW4gYSBoaWRkZW4gaWZyYW1lIG9uIEZpcmVmb3g/ICcgK1xuICAgICAgJ1NlZSBodHRwczovL2JpdC5seS9nZXRzaXplYnVnMScgKTtcbiAgfVxuICByZXR1cm4gc3R5bGU7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHNldHVwIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnZhciBpc1NldHVwID0gZmFsc2U7XG5cbnZhciBpc0JveFNpemVPdXRlcjtcblxuLyoqXG4gKiBzZXR1cFxuICogY2hlY2sgaXNCb3hTaXplck91dGVyXG4gKiBkbyBvbiBmaXJzdCBnZXRTaXplKCkgcmF0aGVyIHRoYW4gb24gcGFnZSBsb2FkIGZvciBGaXJlZm94IGJ1Z1xuICovXG5mdW5jdGlvbiBzZXR1cCgpIHtcbiAgLy8gc2V0dXAgb25jZVxuICBpZiAoIGlzU2V0dXAgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlzU2V0dXAgPSB0cnVlO1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGJveCBzaXppbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuICAvKipcbiAgICogQ2hyb21lICYgU2FmYXJpIG1lYXN1cmUgdGhlIG91dGVyLXdpZHRoIG9uIHN0eWxlLndpZHRoIG9uIGJvcmRlci1ib3ggZWxlbXNcbiAgICogSUUxMSAmIEZpcmVmb3g8MjkgbWVhc3VyZXMgdGhlIGlubmVyLXdpZHRoXG4gICAqL1xuICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5zdHlsZS53aWR0aCA9ICcyMDBweCc7XG4gIGRpdi5zdHlsZS5wYWRkaW5nID0gJzFweCAycHggM3B4IDRweCc7XG4gIGRpdi5zdHlsZS5ib3JkZXJTdHlsZSA9ICdzb2xpZCc7XG4gIGRpdi5zdHlsZS5ib3JkZXJXaWR0aCA9ICcxcHggMnB4IDNweCA0cHgnO1xuICBkaXYuc3R5bGUuYm94U2l6aW5nID0gJ2JvcmRlci1ib3gnO1xuXG4gIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoIGRpdiApO1xuICB2YXIgc3R5bGUgPSBnZXRTdHlsZSggZGl2ICk7XG4gIC8vIHJvdW5kIHZhbHVlIGZvciBicm93c2VyIHpvb20uIGRlc2FuZHJvL21hc29ucnkjOTI4XG4gIGlzQm94U2l6ZU91dGVyID0gTWF0aC5yb3VuZCggZ2V0U3R5bGVTaXplKCBzdHlsZS53aWR0aCApICkgPT0gMjAwO1xuICBnZXRTaXplLmlzQm94U2l6ZU91dGVyID0gaXNCb3hTaXplT3V0ZXI7XG5cbiAgYm9keS5yZW1vdmVDaGlsZCggZGl2ICk7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdldFNpemUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuZnVuY3Rpb24gZ2V0U2l6ZSggZWxlbSApIHtcbiAgc2V0dXAoKTtcblxuICAvLyB1c2UgcXVlcnlTZWxldG9yIGlmIGVsZW0gaXMgc3RyaW5nXG4gIGlmICggdHlwZW9mIGVsZW0gPT0gJ3N0cmluZycgKSB7XG4gICAgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIGVsZW0gKTtcbiAgfVxuXG4gIC8vIGRvIG5vdCBwcm9jZWVkIG9uIG5vbi1vYmplY3RzXG4gIGlmICggIWVsZW0gfHwgdHlwZW9mIGVsZW0gIT0gJ29iamVjdCcgfHwgIWVsZW0ubm9kZVR5cGUgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHN0eWxlID0gZ2V0U3R5bGUoIGVsZW0gKTtcblxuICAvLyBpZiBoaWRkZW4sIGV2ZXJ5dGhpbmcgaXMgMFxuICBpZiAoIHN0eWxlLmRpc3BsYXkgPT0gJ25vbmUnICkge1xuICAgIHJldHVybiBnZXRaZXJvU2l6ZSgpO1xuICB9XG5cbiAgdmFyIHNpemUgPSB7fTtcbiAgc2l6ZS53aWR0aCA9IGVsZW0ub2Zmc2V0V2lkdGg7XG4gIHNpemUuaGVpZ2h0ID0gZWxlbS5vZmZzZXRIZWlnaHQ7XG5cbiAgdmFyIGlzQm9yZGVyQm94ID0gc2l6ZS5pc0JvcmRlckJveCA9IHN0eWxlLmJveFNpemluZyA9PSAnYm9yZGVyLWJveCc7XG5cbiAgLy8gZ2V0IGFsbCBtZWFzdXJlbWVudHNcbiAgZm9yICggdmFyIGk9MDsgaSA8IG1lYXN1cmVtZW50c0xlbmd0aDsgaSsrICkge1xuICAgIHZhciBtZWFzdXJlbWVudCA9IG1lYXN1cmVtZW50c1tpXTtcbiAgICB2YXIgdmFsdWUgPSBzdHlsZVsgbWVhc3VyZW1lbnQgXTtcbiAgICB2YXIgbnVtID0gcGFyc2VGbG9hdCggdmFsdWUgKTtcbiAgICAvLyBhbnkgJ2F1dG8nLCAnbWVkaXVtJyB2YWx1ZSB3aWxsIGJlIDBcbiAgICBzaXplWyBtZWFzdXJlbWVudCBdID0gIWlzTmFOKCBudW0gKSA/IG51bSA6IDA7XG4gIH1cblxuICB2YXIgcGFkZGluZ1dpZHRoID0gc2l6ZS5wYWRkaW5nTGVmdCArIHNpemUucGFkZGluZ1JpZ2h0O1xuICB2YXIgcGFkZGluZ0hlaWdodCA9IHNpemUucGFkZGluZ1RvcCArIHNpemUucGFkZGluZ0JvdHRvbTtcbiAgdmFyIG1hcmdpbldpZHRoID0gc2l6ZS5tYXJnaW5MZWZ0ICsgc2l6ZS5tYXJnaW5SaWdodDtcbiAgdmFyIG1hcmdpbkhlaWdodCA9IHNpemUubWFyZ2luVG9wICsgc2l6ZS5tYXJnaW5Cb3R0b207XG4gIHZhciBib3JkZXJXaWR0aCA9IHNpemUuYm9yZGVyTGVmdFdpZHRoICsgc2l6ZS5ib3JkZXJSaWdodFdpZHRoO1xuICB2YXIgYm9yZGVySGVpZ2h0ID0gc2l6ZS5ib3JkZXJUb3BXaWR0aCArIHNpemUuYm9yZGVyQm90dG9tV2lkdGg7XG5cbiAgdmFyIGlzQm9yZGVyQm94U2l6ZU91dGVyID0gaXNCb3JkZXJCb3ggJiYgaXNCb3hTaXplT3V0ZXI7XG5cbiAgLy8gb3ZlcndyaXRlIHdpZHRoIGFuZCBoZWlnaHQgaWYgd2UgY2FuIGdldCBpdCBmcm9tIHN0eWxlXG4gIHZhciBzdHlsZVdpZHRoID0gZ2V0U3R5bGVTaXplKCBzdHlsZS53aWR0aCApO1xuICBpZiAoIHN0eWxlV2lkdGggIT09IGZhbHNlICkge1xuICAgIHNpemUud2lkdGggPSBzdHlsZVdpZHRoICtcbiAgICAgIC8vIGFkZCBwYWRkaW5nIGFuZCBib3JkZXIgdW5sZXNzIGl0J3MgYWxyZWFkeSBpbmNsdWRpbmcgaXRcbiAgICAgICggaXNCb3JkZXJCb3hTaXplT3V0ZXIgPyAwIDogcGFkZGluZ1dpZHRoICsgYm9yZGVyV2lkdGggKTtcbiAgfVxuXG4gIHZhciBzdHlsZUhlaWdodCA9IGdldFN0eWxlU2l6ZSggc3R5bGUuaGVpZ2h0ICk7XG4gIGlmICggc3R5bGVIZWlnaHQgIT09IGZhbHNlICkge1xuICAgIHNpemUuaGVpZ2h0ID0gc3R5bGVIZWlnaHQgK1xuICAgICAgLy8gYWRkIHBhZGRpbmcgYW5kIGJvcmRlciB1bmxlc3MgaXQncyBhbHJlYWR5IGluY2x1ZGluZyBpdFxuICAgICAgKCBpc0JvcmRlckJveFNpemVPdXRlciA/IDAgOiBwYWRkaW5nSGVpZ2h0ICsgYm9yZGVySGVpZ2h0ICk7XG4gIH1cblxuICBzaXplLmlubmVyV2lkdGggPSBzaXplLndpZHRoIC0gKCBwYWRkaW5nV2lkdGggKyBib3JkZXJXaWR0aCApO1xuICBzaXplLmlubmVySGVpZ2h0ID0gc2l6ZS5oZWlnaHQgLSAoIHBhZGRpbmdIZWlnaHQgKyBib3JkZXJIZWlnaHQgKTtcblxuICBzaXplLm91dGVyV2lkdGggPSBzaXplLndpZHRoICsgbWFyZ2luV2lkdGg7XG4gIHNpemUub3V0ZXJIZWlnaHQgPSBzaXplLmhlaWdodCArIG1hcmdpbkhlaWdodDtcblxuICByZXR1cm4gc2l6ZTtcbn1cblxucmV0dXJuIGdldFNpemU7XG5cbn0pO1xuIiwiLyohXG4gKiBJc290b3BlIHYzLjAuNlxuICpcbiAqIExpY2Vuc2VkIEdQTHYzIGZvciBvcGVuIHNvdXJjZSB1c2VcbiAqIG9yIElzb3RvcGUgQ29tbWVyY2lhbCBMaWNlbnNlIGZvciBjb21tZXJjaWFsIHVzZVxuICpcbiAqIGh0dHBzOi8vaXNvdG9wZS5tZXRhZml6enkuY29cbiAqIENvcHlyaWdodCAyMDEwLTIwMTggTWV0YWZpenp5XG4gKi9cblxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgLyoganNoaW50IHN0cmljdDogZmFsc2UgKi8gLypnbG9iYWxzIGRlZmluZSwgbW9kdWxlLCByZXF1aXJlICovXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBbXG4gICAgICAgICdvdXRsYXllci9vdXRsYXllcicsXG4gICAgICAgICdnZXQtc2l6ZS9nZXQtc2l6ZScsXG4gICAgICAgICdkZXNhbmRyby1tYXRjaGVzLXNlbGVjdG9yL21hdGNoZXMtc2VsZWN0b3InLFxuICAgICAgICAnZml6enktdWktdXRpbHMvdXRpbHMnLFxuICAgICAgICAnLi9pdGVtJyxcbiAgICAgICAgJy4vbGF5b3V0LW1vZGUnLFxuICAgICAgICAvLyBpbmNsdWRlIGRlZmF1bHQgbGF5b3V0IG1vZGVzXG4gICAgICAgICcuL2xheW91dC1tb2Rlcy9tYXNvbnJ5JyxcbiAgICAgICAgJy4vbGF5b3V0LW1vZGVzL2ZpdC1yb3dzJyxcbiAgICAgICAgJy4vbGF5b3V0LW1vZGVzL3ZlcnRpY2FsJ1xuICAgICAgXSxcbiAgICAgIGZ1bmN0aW9uKCBPdXRsYXllciwgZ2V0U2l6ZSwgbWF0Y2hlc1NlbGVjdG9yLCB1dGlscywgSXRlbSwgTGF5b3V0TW9kZSApIHtcbiAgICAgICAgcmV0dXJuIGZhY3RvcnkoIHdpbmRvdywgT3V0bGF5ZXIsIGdldFNpemUsIG1hdGNoZXNTZWxlY3RvciwgdXRpbHMsIEl0ZW0sIExheW91dE1vZGUgKTtcbiAgICAgIH0pO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgcmVxdWlyZSgnb3V0bGF5ZXInKSxcbiAgICAgIHJlcXVpcmUoJ2dldC1zaXplJyksXG4gICAgICByZXF1aXJlKCdkZXNhbmRyby1tYXRjaGVzLXNlbGVjdG9yJyksXG4gICAgICByZXF1aXJlKCdmaXp6eS11aS11dGlscycpLFxuICAgICAgcmVxdWlyZSgnLi9pdGVtJyksXG4gICAgICByZXF1aXJlKCcuL2xheW91dC1tb2RlJyksXG4gICAgICAvLyBpbmNsdWRlIGRlZmF1bHQgbGF5b3V0IG1vZGVzXG4gICAgICByZXF1aXJlKCcuL2xheW91dC1tb2Rlcy9tYXNvbnJ5JyksXG4gICAgICByZXF1aXJlKCcuL2xheW91dC1tb2Rlcy9maXQtcm93cycpLFxuICAgICAgcmVxdWlyZSgnLi9sYXlvdXQtbW9kZXMvdmVydGljYWwnKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICB3aW5kb3cuSXNvdG9wZSA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICB3aW5kb3cuT3V0bGF5ZXIsXG4gICAgICB3aW5kb3cuZ2V0U2l6ZSxcbiAgICAgIHdpbmRvdy5tYXRjaGVzU2VsZWN0b3IsXG4gICAgICB3aW5kb3cuZml6enlVSVV0aWxzLFxuICAgICAgd2luZG93Lklzb3RvcGUuSXRlbSxcbiAgICAgIHdpbmRvdy5Jc290b3BlLkxheW91dE1vZGVcbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggd2luZG93LCBPdXRsYXllciwgZ2V0U2l6ZSwgbWF0Y2hlc1NlbGVjdG9yLCB1dGlscyxcbiAgSXRlbSwgTGF5b3V0TW9kZSApIHtcblxuJ3VzZSBzdHJpY3QnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB2YXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnZhciBqUXVlcnkgPSB3aW5kb3cualF1ZXJ5O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBoZWxwZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnZhciB0cmltID0gU3RyaW5nLnByb3RvdHlwZS50cmltID9cbiAgZnVuY3Rpb24oIHN0ciApIHtcbiAgICByZXR1cm4gc3RyLnRyaW0oKTtcbiAgfSA6XG4gIGZ1bmN0aW9uKCBzdHIgKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKCAvXlxccyt8XFxzKyQvZywgJycgKTtcbiAgfTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gaXNvdG9wZURlZmluaXRpb24gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuICAvLyBjcmVhdGUgYW4gT3V0bGF5ZXIgbGF5b3V0IGNsYXNzXG4gIHZhciBJc290b3BlID0gT3V0bGF5ZXIuY3JlYXRlKCAnaXNvdG9wZScsIHtcbiAgICBsYXlvdXRNb2RlOiAnbWFzb25yeScsXG4gICAgaXNKUXVlcnlGaWx0ZXJpbmc6IHRydWUsXG4gICAgc29ydEFzY2VuZGluZzogdHJ1ZVxuICB9KTtcblxuICBJc290b3BlLkl0ZW0gPSBJdGVtO1xuICBJc290b3BlLkxheW91dE1vZGUgPSBMYXlvdXRNb2RlO1xuXG4gIHZhciBwcm90byA9IElzb3RvcGUucHJvdG90eXBlO1xuXG4gIHByb3RvLl9jcmVhdGUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLml0ZW1HVUlEID0gMDtcbiAgICAvLyBmdW5jdGlvbnMgdGhhdCBzb3J0IGl0ZW1zXG4gICAgdGhpcy5fc29ydGVycyA9IHt9O1xuICAgIHRoaXMuX2dldFNvcnRlcnMoKTtcbiAgICAvLyBjYWxsIHN1cGVyXG4gICAgT3V0bGF5ZXIucHJvdG90eXBlLl9jcmVhdGUuY2FsbCggdGhpcyApO1xuXG4gICAgLy8gY3JlYXRlIGxheW91dCBtb2Rlc1xuICAgIHRoaXMubW9kZXMgPSB7fTtcbiAgICAvLyBzdGFydCBmaWx0ZXJlZEl0ZW1zIHdpdGggYWxsIGl0ZW1zXG4gICAgdGhpcy5maWx0ZXJlZEl0ZW1zID0gdGhpcy5pdGVtcztcbiAgICAvLyBrZWVwIG9mIHRyYWNrIG9mIHNvcnRCeXNcbiAgICB0aGlzLnNvcnRIaXN0b3J5ID0gWyAnb3JpZ2luYWwtb3JkZXInIF07XG4gICAgLy8gY3JlYXRlIGZyb20gcmVnaXN0ZXJlZCBsYXlvdXQgbW9kZXNcbiAgICBmb3IgKCB2YXIgbmFtZSBpbiBMYXlvdXRNb2RlLm1vZGVzICkge1xuICAgICAgdGhpcy5faW5pdExheW91dE1vZGUoIG5hbWUgKTtcbiAgICB9XG4gIH07XG5cbiAgcHJvdG8ucmVsb2FkSXRlbXMgPSBmdW5jdGlvbigpIHtcbiAgICAvLyByZXNldCBpdGVtIElEIGNvdW50ZXJcbiAgICB0aGlzLml0ZW1HVUlEID0gMDtcbiAgICAvLyBjYWxsIHN1cGVyXG4gICAgT3V0bGF5ZXIucHJvdG90eXBlLnJlbG9hZEl0ZW1zLmNhbGwoIHRoaXMgKTtcbiAgfTtcblxuICBwcm90by5faXRlbWl6ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IE91dGxheWVyLnByb3RvdHlwZS5faXRlbWl6ZS5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG4gICAgLy8gYXNzaWduIElEIGZvciBvcmlnaW5hbC1vcmRlclxuICAgIGZvciAoIHZhciBpPTA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKyApIHtcbiAgICAgIHZhciBpdGVtID0gaXRlbXNbaV07XG4gICAgICBpdGVtLmlkID0gdGhpcy5pdGVtR1VJRCsrO1xuICAgIH1cbiAgICB0aGlzLl91cGRhdGVJdGVtc1NvcnREYXRhKCBpdGVtcyApO1xuICAgIHJldHVybiBpdGVtcztcbiAgfTtcblxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGxheW91dCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4gIHByb3RvLl9pbml0TGF5b3V0TW9kZSA9IGZ1bmN0aW9uKCBuYW1lICkge1xuICAgIHZhciBNb2RlID0gTGF5b3V0TW9kZS5tb2Rlc1sgbmFtZSBdO1xuICAgIC8vIHNldCBtb2RlIG9wdGlvbnNcbiAgICAvLyBIQUNLIGV4dGVuZCBpbml0aWFsIG9wdGlvbnMsIGJhY2stZmlsbCBpbiBkZWZhdWx0IG9wdGlvbnNcbiAgICB2YXIgaW5pdGlhbE9wdHMgPSB0aGlzLm9wdGlvbnNbIG5hbWUgXSB8fCB7fTtcbiAgICB0aGlzLm9wdGlvbnNbIG5hbWUgXSA9IE1vZGUub3B0aW9ucyA/XG4gICAgICB1dGlscy5leHRlbmQoIE1vZGUub3B0aW9ucywgaW5pdGlhbE9wdHMgKSA6IGluaXRpYWxPcHRzO1xuICAgIC8vIGluaXQgbGF5b3V0IG1vZGUgaW5zdGFuY2VcbiAgICB0aGlzLm1vZGVzWyBuYW1lIF0gPSBuZXcgTW9kZSggdGhpcyApO1xuICB9O1xuXG5cbiAgcHJvdG8ubGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gaWYgZmlyc3QgdGltZSBkb2luZyBsYXlvdXQsIGRvIGFsbCBtYWdpY1xuICAgIGlmICggIXRoaXMuX2lzTGF5b3V0SW5pdGVkICYmIHRoaXMuX2dldE9wdGlvbignaW5pdExheW91dCcpICkge1xuICAgICAgdGhpcy5hcnJhbmdlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2xheW91dCgpO1xuICB9O1xuXG4gIC8vIHByaXZhdGUgbWV0aG9kIHRvIGJlIHVzZWQgaW4gbGF5b3V0KCkgJiBtYWdpYygpXG4gIHByb3RvLl9sYXlvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBkb24ndCBhbmltYXRlIGZpcnN0IGxheW91dFxuICAgIHZhciBpc0luc3RhbnQgPSB0aGlzLl9nZXRJc0luc3RhbnQoKTtcbiAgICAvLyBsYXlvdXQgZmxvd1xuICAgIHRoaXMuX3Jlc2V0TGF5b3V0KCk7XG4gICAgdGhpcy5fbWFuYWdlU3RhbXBzKCk7XG4gICAgdGhpcy5sYXlvdXRJdGVtcyggdGhpcy5maWx0ZXJlZEl0ZW1zLCBpc0luc3RhbnQgKTtcblxuICAgIC8vIGZsYWcgZm9yIGluaXRhbGl6ZWRcbiAgICB0aGlzLl9pc0xheW91dEluaXRlZCA9IHRydWU7XG4gIH07XG5cbiAgLy8gZmlsdGVyICsgc29ydCArIGxheW91dFxuICBwcm90by5hcnJhbmdlID0gZnVuY3Rpb24oIG9wdHMgKSB7XG4gICAgLy8gc2V0IGFueSBvcHRpb25zIHBhc3NcbiAgICB0aGlzLm9wdGlvbiggb3B0cyApO1xuICAgIHRoaXMuX2dldElzSW5zdGFudCgpO1xuICAgIC8vIGZpbHRlciwgc29ydCwgYW5kIGxheW91dFxuXG4gICAgLy8gZmlsdGVyXG4gICAgdmFyIGZpbHRlcmVkID0gdGhpcy5fZmlsdGVyKCB0aGlzLml0ZW1zICk7XG4gICAgdGhpcy5maWx0ZXJlZEl0ZW1zID0gZmlsdGVyZWQubWF0Y2hlcztcblxuICAgIHRoaXMuX2JpbmRBcnJhbmdlQ29tcGxldGUoKTtcblxuICAgIGlmICggdGhpcy5faXNJbnN0YW50ICkge1xuICAgICAgdGhpcy5fbm9UcmFuc2l0aW9uKCB0aGlzLl9oaWRlUmV2ZWFsLCBbIGZpbHRlcmVkIF0gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faGlkZVJldmVhbCggZmlsdGVyZWQgKTtcbiAgICB9XG5cbiAgICB0aGlzLl9zb3J0KCk7XG4gICAgdGhpcy5fbGF5b3V0KCk7XG4gIH07XG4gIC8vIGFsaWFzIHRvIF9pbml0IGZvciBtYWluIHBsdWdpbiBtZXRob2RcbiAgcHJvdG8uX2luaXQgPSBwcm90by5hcnJhbmdlO1xuXG4gIHByb3RvLl9oaWRlUmV2ZWFsID0gZnVuY3Rpb24oIGZpbHRlcmVkICkge1xuICAgIHRoaXMucmV2ZWFsKCBmaWx0ZXJlZC5uZWVkUmV2ZWFsICk7XG4gICAgdGhpcy5oaWRlKCBmaWx0ZXJlZC5uZWVkSGlkZSApO1xuICB9O1xuXG4gIC8vIEhBQ0tcbiAgLy8gRG9uJ3QgYW5pbWF0ZS90cmFuc2l0aW9uIGZpcnN0IGxheW91dFxuICAvLyBPciBkb24ndCBhbmltYXRlL3RyYW5zaXRpb24gb3RoZXIgbGF5b3V0c1xuICBwcm90by5fZ2V0SXNJbnN0YW50ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGlzTGF5b3V0SW5zdGFudCA9IHRoaXMuX2dldE9wdGlvbignbGF5b3V0SW5zdGFudCcpO1xuICAgIHZhciBpc0luc3RhbnQgPSBpc0xheW91dEluc3RhbnQgIT09IHVuZGVmaW5lZCA/IGlzTGF5b3V0SW5zdGFudCA6XG4gICAgICAhdGhpcy5faXNMYXlvdXRJbml0ZWQ7XG4gICAgdGhpcy5faXNJbnN0YW50ID0gaXNJbnN0YW50O1xuICAgIHJldHVybiBpc0luc3RhbnQ7XG4gIH07XG5cbiAgLy8gbGlzdGVuIGZvciBsYXlvdXRDb21wbGV0ZSwgaGlkZUNvbXBsZXRlIGFuZCByZXZlYWxDb21wbGV0ZVxuICAvLyB0byB0cmlnZ2VyIGFycmFuZ2VDb21wbGV0ZVxuICBwcm90by5fYmluZEFycmFuZ2VDb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIGxpc3RlbiBmb3IgMyBldmVudHMgdG8gdHJpZ2dlciBhcnJhbmdlQ29tcGxldGVcbiAgICB2YXIgaXNMYXlvdXRDb21wbGV0ZSwgaXNIaWRlQ29tcGxldGUsIGlzUmV2ZWFsQ29tcGxldGU7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICBmdW5jdGlvbiBhcnJhbmdlUGFyYWxsZWxDYWxsYmFjaygpIHtcbiAgICAgIGlmICggaXNMYXlvdXRDb21wbGV0ZSAmJiBpc0hpZGVDb21wbGV0ZSAmJiBpc1JldmVhbENvbXBsZXRlICkge1xuICAgICAgICBfdGhpcy5kaXNwYXRjaEV2ZW50KCAnYXJyYW5nZUNvbXBsZXRlJywgbnVsbCwgWyBfdGhpcy5maWx0ZXJlZEl0ZW1zIF0gKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5vbmNlKCAnbGF5b3V0Q29tcGxldGUnLCBmdW5jdGlvbigpIHtcbiAgICAgIGlzTGF5b3V0Q29tcGxldGUgPSB0cnVlO1xuICAgICAgYXJyYW5nZVBhcmFsbGVsQ2FsbGJhY2soKTtcbiAgICB9KTtcbiAgICB0aGlzLm9uY2UoICdoaWRlQ29tcGxldGUnLCBmdW5jdGlvbigpIHtcbiAgICAgIGlzSGlkZUNvbXBsZXRlID0gdHJ1ZTtcbiAgICAgIGFycmFuZ2VQYXJhbGxlbENhbGxiYWNrKCk7XG4gICAgfSk7XG4gICAgdGhpcy5vbmNlKCAncmV2ZWFsQ29tcGxldGUnLCBmdW5jdGlvbigpIHtcbiAgICAgIGlzUmV2ZWFsQ29tcGxldGUgPSB0cnVlO1xuICAgICAgYXJyYW5nZVBhcmFsbGVsQ2FsbGJhY2soKTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBmaWx0ZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuICBwcm90by5fZmlsdGVyID0gZnVuY3Rpb24oIGl0ZW1zICkge1xuICAgIHZhciBmaWx0ZXIgPSB0aGlzLm9wdGlvbnMuZmlsdGVyO1xuICAgIGZpbHRlciA9IGZpbHRlciB8fCAnKic7XG4gICAgdmFyIG1hdGNoZXMgPSBbXTtcbiAgICB2YXIgaGlkZGVuTWF0Y2hlZCA9IFtdO1xuICAgIHZhciB2aXNpYmxlVW5tYXRjaGVkID0gW107XG5cbiAgICB2YXIgdGVzdCA9IHRoaXMuX2dldEZpbHRlclRlc3QoIGZpbHRlciApO1xuXG4gICAgLy8gdGVzdCBlYWNoIGl0ZW1cbiAgICBmb3IgKCB2YXIgaT0wOyBpIDwgaXRlbXMubGVuZ3RoOyBpKysgKSB7XG4gICAgICB2YXIgaXRlbSA9IGl0ZW1zW2ldO1xuICAgICAgaWYgKCBpdGVtLmlzSWdub3JlZCApIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICAvLyBhZGQgaXRlbSB0byBlaXRoZXIgbWF0Y2hlZCBvciB1bm1hdGNoZWQgZ3JvdXBcbiAgICAgIHZhciBpc01hdGNoZWQgPSB0ZXN0KCBpdGVtICk7XG4gICAgICAvLyBpdGVtLmlzRmlsdGVyTWF0Y2hlZCA9IGlzTWF0Y2hlZDtcbiAgICAgIC8vIGFkZCB0byBtYXRjaGVzIGlmIGl0cyBhIG1hdGNoXG4gICAgICBpZiAoIGlzTWF0Y2hlZCApIHtcbiAgICAgICAgbWF0Y2hlcy5wdXNoKCBpdGVtICk7XG4gICAgICB9XG4gICAgICAvLyBhZGQgdG8gYWRkaXRpb25hbCBncm91cCBpZiBpdGVtIG5lZWRzIHRvIGJlIGhpZGRlbiBvciByZXZlYWxlZFxuICAgICAgaWYgKCBpc01hdGNoZWQgJiYgaXRlbS5pc0hpZGRlbiApIHtcbiAgICAgICAgaGlkZGVuTWF0Y2hlZC5wdXNoKCBpdGVtICk7XG4gICAgICB9IGVsc2UgaWYgKCAhaXNNYXRjaGVkICYmICFpdGVtLmlzSGlkZGVuICkge1xuICAgICAgICB2aXNpYmxlVW5tYXRjaGVkLnB1c2goIGl0ZW0gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyByZXR1cm4gY29sbGVjdGlvbnMgb2YgaXRlbXMgdG8gYmUgbWFuaXB1bGF0ZWRcbiAgICByZXR1cm4ge1xuICAgICAgbWF0Y2hlczogbWF0Y2hlcyxcbiAgICAgIG5lZWRSZXZlYWw6IGhpZGRlbk1hdGNoZWQsXG4gICAgICBuZWVkSGlkZTogdmlzaWJsZVVubWF0Y2hlZFxuICAgIH07XG4gIH07XG5cbiAgLy8gZ2V0IGEgalF1ZXJ5LCBmdW5jdGlvbiwgb3IgYSBtYXRjaGVzU2VsZWN0b3IgdGVzdCBnaXZlbiB0aGUgZmlsdGVyXG4gIHByb3RvLl9nZXRGaWx0ZXJUZXN0ID0gZnVuY3Rpb24oIGZpbHRlciApIHtcbiAgICBpZiAoIGpRdWVyeSAmJiB0aGlzLm9wdGlvbnMuaXNKUXVlcnlGaWx0ZXJpbmcgKSB7XG4gICAgICAvLyB1c2UgalF1ZXJ5XG4gICAgICByZXR1cm4gZnVuY3Rpb24oIGl0ZW0gKSB7XG4gICAgICAgIHJldHVybiBqUXVlcnkoIGl0ZW0uZWxlbWVudCApLmlzKCBmaWx0ZXIgKTtcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICggdHlwZW9mIGZpbHRlciA9PSAnZnVuY3Rpb24nICkge1xuICAgICAgLy8gdXNlIGZpbHRlciBhcyBmdW5jdGlvblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCBpdGVtICkge1xuICAgICAgICByZXR1cm4gZmlsdGVyKCBpdGVtLmVsZW1lbnQgKTtcbiAgICAgIH07XG4gICAgfVxuICAgIC8vIGRlZmF1bHQsIHVzZSBmaWx0ZXIgYXMgc2VsZWN0b3Igc3RyaW5nXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCBpdGVtICkge1xuICAgICAgcmV0dXJuIG1hdGNoZXNTZWxlY3RvciggaXRlbS5lbGVtZW50LCBmaWx0ZXIgKTtcbiAgICB9O1xuICB9O1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHNvcnRpbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuICAvKipcbiAgICogQHBhcmFtcyB7QXJyYXl9IGVsZW1zXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIHByb3RvLnVwZGF0ZVNvcnREYXRhID0gZnVuY3Rpb24oIGVsZW1zICkge1xuICAgIC8vIGdldCBpdGVtc1xuICAgIHZhciBpdGVtcztcbiAgICBpZiAoIGVsZW1zICkge1xuICAgICAgZWxlbXMgPSB1dGlscy5tYWtlQXJyYXkoIGVsZW1zICk7XG4gICAgICBpdGVtcyA9IHRoaXMuZ2V0SXRlbXMoIGVsZW1zICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHVwZGF0ZSBhbGwgaXRlbXMgaWYgbm8gZWxlbXMgcHJvdmlkZWRcbiAgICAgIGl0ZW1zID0gdGhpcy5pdGVtcztcbiAgICB9XG5cbiAgICB0aGlzLl9nZXRTb3J0ZXJzKCk7XG4gICAgdGhpcy5fdXBkYXRlSXRlbXNTb3J0RGF0YSggaXRlbXMgKTtcbiAgfTtcblxuICBwcm90by5fZ2V0U29ydGVycyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBnZXRTb3J0RGF0YSA9IHRoaXMub3B0aW9ucy5nZXRTb3J0RGF0YTtcbiAgICBmb3IgKCB2YXIga2V5IGluIGdldFNvcnREYXRhICkge1xuICAgICAgdmFyIHNvcnRlciA9IGdldFNvcnREYXRhWyBrZXkgXTtcbiAgICAgIHRoaXMuX3NvcnRlcnNbIGtleSBdID0gbXVuZ2VTb3J0ZXIoIHNvcnRlciApO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtcyB7QXJyYXl9IGl0ZW1zIC0gb2YgSXNvdG9wZS5JdGVtc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJvdG8uX3VwZGF0ZUl0ZW1zU29ydERhdGEgPSBmdW5jdGlvbiggaXRlbXMgKSB7XG4gICAgLy8gZG8gbm90IHVwZGF0ZSBpZiBubyBpdGVtc1xuICAgIHZhciBsZW4gPSBpdGVtcyAmJiBpdGVtcy5sZW5ndGg7XG5cbiAgICBmb3IgKCB2YXIgaT0wOyBsZW4gJiYgaSA8IGxlbjsgaSsrICkge1xuICAgICAgdmFyIGl0ZW0gPSBpdGVtc1tpXTtcbiAgICAgIGl0ZW0udXBkYXRlU29ydERhdGEoKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gLS0tLS0gbXVuZ2Ugc29ydGVyIC0tLS0tIC8vXG5cbiAgLy8gZW5jYXBzdWxhdGUgdGhpcywgYXMgd2UganVzdCBuZWVkIG11bmdlU29ydGVyXG4gIC8vIG90aGVyIGZ1bmN0aW9ucyBpbiBoZXJlIGFyZSBqdXN0IGZvciBtdW5naW5nXG4gIHZhciBtdW5nZVNvcnRlciA9ICggZnVuY3Rpb24oKSB7XG4gICAgLy8gYWRkIGEgbWFnaWMgbGF5ZXIgdG8gc29ydGVycyBmb3IgY29udmllbmVudCBzaG9ydGhhbmRzXG4gICAgLy8gYC5mb28tYmFyYCB3aWxsIHVzZSB0aGUgdGV4dCBvZiAuZm9vLWJhciBxdWVyeVNlbGVjdG9yXG4gICAgLy8gYFtmb28tYmFyXWAgd2lsbCB1c2UgYXR0cmlidXRlXG4gICAgLy8geW91IGNhbiBhbHNvIGFkZCBwYXJzZXJcbiAgICAvLyBgLmZvby1iYXIgcGFyc2VJbnRgIHdpbGwgcGFyc2UgdGhhdCBhcyBhIG51bWJlclxuICAgIGZ1bmN0aW9uIG11bmdlU29ydGVyKCBzb3J0ZXIgKSB7XG4gICAgICAvLyBpZiBub3QgYSBzdHJpbmcsIHJldHVybiBmdW5jdGlvbiBvciB3aGF0ZXZlciBpdCBpc1xuICAgICAgaWYgKCB0eXBlb2Ygc29ydGVyICE9ICdzdHJpbmcnICkge1xuICAgICAgICByZXR1cm4gc29ydGVyO1xuICAgICAgfVxuICAgICAgLy8gcGFyc2UgdGhlIHNvcnRlciBzdHJpbmdcbiAgICAgIHZhciBhcmdzID0gdHJpbSggc29ydGVyICkuc3BsaXQoJyAnKTtcbiAgICAgIHZhciBxdWVyeSA9IGFyZ3NbMF07XG4gICAgICAvLyBjaGVjayBpZiBxdWVyeSBsb29rcyBsaWtlIFthbi1hdHRyaWJ1dGVdXG4gICAgICB2YXIgYXR0ck1hdGNoID0gcXVlcnkubWF0Y2goIC9eXFxbKC4rKVxcXSQvICk7XG4gICAgICB2YXIgYXR0ciA9IGF0dHJNYXRjaCAmJiBhdHRyTWF0Y2hbMV07XG4gICAgICB2YXIgZ2V0VmFsdWUgPSBnZXRWYWx1ZUdldHRlciggYXR0ciwgcXVlcnkgKTtcbiAgICAgIC8vIHVzZSBzZWNvbmQgYXJndW1lbnQgYXMgYSBwYXJzZXJcbiAgICAgIHZhciBwYXJzZXIgPSBJc290b3BlLnNvcnREYXRhUGFyc2Vyc1sgYXJnc1sxXSBdO1xuICAgICAgLy8gcGFyc2UgdGhlIHZhbHVlLCBpZiB0aGVyZSB3YXMgYSBwYXJzZXJcbiAgICAgIHNvcnRlciA9IHBhcnNlciA/IGZ1bmN0aW9uKCBlbGVtICkge1xuICAgICAgICByZXR1cm4gZWxlbSAmJiBwYXJzZXIoIGdldFZhbHVlKCBlbGVtICkgKTtcbiAgICAgIH0gOlxuICAgICAgLy8gb3RoZXJ3aXNlIGp1c3QgcmV0dXJuIHZhbHVlXG4gICAgICBmdW5jdGlvbiggZWxlbSApIHtcbiAgICAgICAgcmV0dXJuIGVsZW0gJiYgZ2V0VmFsdWUoIGVsZW0gKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBzb3J0ZXI7XG4gICAgfVxuXG4gICAgLy8gZ2V0IGFuIGF0dHJpYnV0ZSBnZXR0ZXIsIG9yIGdldCB0ZXh0IG9mIHRoZSBxdWVyeVNlbGVjdG9yXG4gICAgZnVuY3Rpb24gZ2V0VmFsdWVHZXR0ZXIoIGF0dHIsIHF1ZXJ5ICkge1xuICAgICAgLy8gaWYgcXVlcnkgbG9va3MgbGlrZSBbZm9vLWJhcl0sIGdldCBhdHRyaWJ1dGVcbiAgICAgIGlmICggYXR0ciApIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGdldEF0dHJpYnV0ZSggZWxlbSApIHtcbiAgICAgICAgICByZXR1cm4gZWxlbS5nZXRBdHRyaWJ1dGUoIGF0dHIgKTtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgLy8gb3RoZXJ3aXNlLCBhc3N1bWUgaXRzIGEgcXVlcnlTZWxlY3RvciwgYW5kIGdldCBpdHMgdGV4dFxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGdldENoaWxkVGV4dCggZWxlbSApIHtcbiAgICAgICAgdmFyIGNoaWxkID0gZWxlbS5xdWVyeVNlbGVjdG9yKCBxdWVyeSApO1xuICAgICAgICByZXR1cm4gY2hpbGQgJiYgY2hpbGQudGV4dENvbnRlbnQ7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBtdW5nZVNvcnRlcjtcbiAgfSkoKTtcblxuICAvLyBwYXJzZXJzIHVzZWQgaW4gZ2V0U29ydERhdGEgc2hvcnRjdXQgc3RyaW5nc1xuICBJc290b3BlLnNvcnREYXRhUGFyc2VycyA9IHtcbiAgICAncGFyc2VJbnQnOiBmdW5jdGlvbiggdmFsICkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KCB2YWwsIDEwICk7XG4gICAgfSxcbiAgICAncGFyc2VGbG9hdCc6IGZ1bmN0aW9uKCB2YWwgKSB7XG4gICAgICByZXR1cm4gcGFyc2VGbG9hdCggdmFsICk7XG4gICAgfVxuICB9O1xuXG4gIC8vIC0tLS0tIHNvcnQgbWV0aG9kIC0tLS0tIC8vXG5cbiAgLy8gc29ydCBmaWx0ZXJlZEl0ZW0gb3JkZXJcbiAgcHJvdG8uX3NvcnQgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoICF0aGlzLm9wdGlvbnMuc29ydEJ5ICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBrZWVwIHRyYWNrIG9mIHNvcnRCeSBIaXN0b3J5XG4gICAgdmFyIHNvcnRCeXMgPSB1dGlscy5tYWtlQXJyYXkoIHRoaXMub3B0aW9ucy5zb3J0QnkgKTtcbiAgICBpZiAoICF0aGlzLl9nZXRJc1NhbWVTb3J0QnkoIHNvcnRCeXMgKSApIHtcbiAgICAgIC8vIGNvbmNhdCBhbGwgc29ydEJ5IGFuZCBzb3J0SGlzdG9yeSwgYWRkIHRvIGZyb250LCBvbGRlc3QgZ29lcyBpbiBsYXN0XG4gICAgICB0aGlzLnNvcnRIaXN0b3J5ID0gc29ydEJ5cy5jb25jYXQoIHRoaXMuc29ydEhpc3RvcnkgKTtcbiAgICB9XG4gICAgLy8gc29ydCBtYWdpY1xuICAgIHZhciBpdGVtU29ydGVyID0gZ2V0SXRlbVNvcnRlciggdGhpcy5zb3J0SGlzdG9yeSwgdGhpcy5vcHRpb25zLnNvcnRBc2NlbmRpbmcgKTtcbiAgICB0aGlzLmZpbHRlcmVkSXRlbXMuc29ydCggaXRlbVNvcnRlciApO1xuICB9O1xuXG4gIC8vIGNoZWNrIGlmIHNvcnRCeXMgaXMgc2FtZSBhcyBzdGFydCBvZiBzb3J0SGlzdG9yeVxuICBwcm90by5fZ2V0SXNTYW1lU29ydEJ5ID0gZnVuY3Rpb24oIHNvcnRCeXMgKSB7XG4gICAgZm9yICggdmFyIGk9MDsgaSA8IHNvcnRCeXMubGVuZ3RoOyBpKysgKSB7XG4gICAgICBpZiAoIHNvcnRCeXNbaV0gIT0gdGhpcy5zb3J0SGlzdG9yeVtpXSApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICAvLyByZXR1cm5zIGEgZnVuY3Rpb24gdXNlZCBmb3Igc29ydGluZ1xuICBmdW5jdGlvbiBnZXRJdGVtU29ydGVyKCBzb3J0QnlzLCBzb3J0QXNjICkge1xuICAgIHJldHVybiBmdW5jdGlvbiBzb3J0ZXIoIGl0ZW1BLCBpdGVtQiApIHtcbiAgICAgIC8vIGN5Y2xlIHRocm91Z2ggYWxsIHNvcnRLZXlzXG4gICAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCBzb3J0QnlzLmxlbmd0aDsgaSsrICkge1xuICAgICAgICB2YXIgc29ydEJ5ID0gc29ydEJ5c1tpXTtcbiAgICAgICAgdmFyIGEgPSBpdGVtQS5zb3J0RGF0YVsgc29ydEJ5IF07XG4gICAgICAgIHZhciBiID0gaXRlbUIuc29ydERhdGFbIHNvcnRCeSBdO1xuICAgICAgICBpZiAoIGEgPiBiIHx8IGEgPCBiICkge1xuICAgICAgICAgIC8vIGlmIHNvcnRBc2MgaXMgYW4gb2JqZWN0LCB1c2UgdGhlIHZhbHVlIGdpdmVuIHRoZSBzb3J0Qnkga2V5XG4gICAgICAgICAgdmFyIGlzQXNjZW5kaW5nID0gc29ydEFzY1sgc29ydEJ5IF0gIT09IHVuZGVmaW5lZCA/IHNvcnRBc2NbIHNvcnRCeSBdIDogc29ydEFzYztcbiAgICAgICAgICB2YXIgZGlyZWN0aW9uID0gaXNBc2NlbmRpbmcgPyAxIDogLTE7XG4gICAgICAgICAgcmV0dXJuICggYSA+IGIgPyAxIDogLTEgKSAqIGRpcmVjdGlvbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIDA7XG4gICAgfTtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG1ldGhvZHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuICAvLyBnZXQgbGF5b3V0IG1vZGVcbiAgcHJvdG8uX21vZGUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbGF5b3V0TW9kZSA9IHRoaXMub3B0aW9ucy5sYXlvdXRNb2RlO1xuICAgIHZhciBtb2RlID0gdGhpcy5tb2Rlc1sgbGF5b3V0TW9kZSBdO1xuICAgIGlmICggIW1vZGUgKSB7XG4gICAgICAvLyBUT0RPIGNvbnNvbGUuZXJyb3JcbiAgICAgIHRocm93IG5ldyBFcnJvciggJ05vIGxheW91dCBtb2RlOiAnICsgbGF5b3V0TW9kZSApO1xuICAgIH1cbiAgICAvLyBIQUNLIHN5bmMgbW9kZSdzIG9wdGlvbnNcbiAgICAvLyBhbnkgb3B0aW9ucyBzZXQgYWZ0ZXIgaW5pdCBmb3IgbGF5b3V0IG1vZGUgbmVlZCB0byBiZSBzeW5jZWRcbiAgICBtb2RlLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnNbIGxheW91dE1vZGUgXTtcbiAgICByZXR1cm4gbW9kZTtcbiAgfTtcblxuICBwcm90by5fcmVzZXRMYXlvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAvLyB0cmlnZ2VyIG9yaWdpbmFsIHJlc2V0IGxheW91dFxuICAgIE91dGxheWVyLnByb3RvdHlwZS5fcmVzZXRMYXlvdXQuY2FsbCggdGhpcyApO1xuICAgIHRoaXMuX21vZGUoKS5fcmVzZXRMYXlvdXQoKTtcbiAgfTtcblxuICBwcm90by5fZ2V0SXRlbUxheW91dFBvc2l0aW9uID0gZnVuY3Rpb24oIGl0ZW0gICkge1xuICAgIHJldHVybiB0aGlzLl9tb2RlKCkuX2dldEl0ZW1MYXlvdXRQb3NpdGlvbiggaXRlbSApO1xuICB9O1xuXG4gIHByb3RvLl9tYW5hZ2VTdGFtcCA9IGZ1bmN0aW9uKCBzdGFtcCApIHtcbiAgICB0aGlzLl9tb2RlKCkuX21hbmFnZVN0YW1wKCBzdGFtcCApO1xuICB9O1xuXG4gIHByb3RvLl9nZXRDb250YWluZXJTaXplID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGUoKS5fZ2V0Q29udGFpbmVyU2l6ZSgpO1xuICB9O1xuXG4gIHByb3RvLm5lZWRzUmVzaXplTGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGUoKS5uZWVkc1Jlc2l6ZUxheW91dCgpO1xuICB9O1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGFkZGluZyAmIHJlbW92aW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbiAgLy8gSEVBRFMgVVAgb3ZlcndyaXRlcyBkZWZhdWx0IE91dGxheWVyIGFwcGVuZGVkXG4gIHByb3RvLmFwcGVuZGVkID0gZnVuY3Rpb24oIGVsZW1zICkge1xuICAgIHZhciBpdGVtcyA9IHRoaXMuYWRkSXRlbXMoIGVsZW1zICk7XG4gICAgaWYgKCAhaXRlbXMubGVuZ3RoICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBmaWx0ZXIsIGxheW91dCwgcmV2ZWFsIG5ldyBpdGVtc1xuICAgIHZhciBmaWx0ZXJlZEl0ZW1zID0gdGhpcy5fZmlsdGVyUmV2ZWFsQWRkZWQoIGl0ZW1zICk7XG4gICAgLy8gYWRkIHRvIGZpbHRlcmVkSXRlbXNcbiAgICB0aGlzLmZpbHRlcmVkSXRlbXMgPSB0aGlzLmZpbHRlcmVkSXRlbXMuY29uY2F0KCBmaWx0ZXJlZEl0ZW1zICk7XG4gIH07XG5cbiAgLy8gSEVBRFMgVVAgb3ZlcndyaXRlcyBkZWZhdWx0IE91dGxheWVyIHByZXBlbmRlZFxuICBwcm90by5wcmVwZW5kZWQgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gICAgdmFyIGl0ZW1zID0gdGhpcy5faXRlbWl6ZSggZWxlbXMgKTtcbiAgICBpZiAoICFpdGVtcy5sZW5ndGggKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIHN0YXJ0IG5ldyBsYXlvdXRcbiAgICB0aGlzLl9yZXNldExheW91dCgpO1xuICAgIHRoaXMuX21hbmFnZVN0YW1wcygpO1xuICAgIC8vIGZpbHRlciwgbGF5b3V0LCByZXZlYWwgbmV3IGl0ZW1zXG4gICAgdmFyIGZpbHRlcmVkSXRlbXMgPSB0aGlzLl9maWx0ZXJSZXZlYWxBZGRlZCggaXRlbXMgKTtcbiAgICAvLyBsYXlvdXQgcHJldmlvdXMgaXRlbXNcbiAgICB0aGlzLmxheW91dEl0ZW1zKCB0aGlzLmZpbHRlcmVkSXRlbXMgKTtcbiAgICAvLyBhZGQgdG8gaXRlbXMgYW5kIGZpbHRlcmVkSXRlbXNcbiAgICB0aGlzLmZpbHRlcmVkSXRlbXMgPSBmaWx0ZXJlZEl0ZW1zLmNvbmNhdCggdGhpcy5maWx0ZXJlZEl0ZW1zICk7XG4gICAgdGhpcy5pdGVtcyA9IGl0ZW1zLmNvbmNhdCggdGhpcy5pdGVtcyApO1xuICB9O1xuXG4gIHByb3RvLl9maWx0ZXJSZXZlYWxBZGRlZCA9IGZ1bmN0aW9uKCBpdGVtcyApIHtcbiAgICB2YXIgZmlsdGVyZWQgPSB0aGlzLl9maWx0ZXIoIGl0ZW1zICk7XG4gICAgdGhpcy5oaWRlKCBmaWx0ZXJlZC5uZWVkSGlkZSApO1xuICAgIC8vIHJldmVhbCBhbGwgbmV3IGl0ZW1zXG4gICAgdGhpcy5yZXZlYWwoIGZpbHRlcmVkLm1hdGNoZXMgKTtcbiAgICAvLyBsYXlvdXQgbmV3IGl0ZW1zLCBubyB0cmFuc2l0aW9uXG4gICAgdGhpcy5sYXlvdXRJdGVtcyggZmlsdGVyZWQubWF0Y2hlcywgdHJ1ZSApO1xuICAgIHJldHVybiBmaWx0ZXJlZC5tYXRjaGVzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBGaWx0ZXIsIHNvcnQsIGFuZCBsYXlvdXQgbmV3bHktYXBwZW5kZWQgaXRlbSBlbGVtZW50c1xuICAgKiBAcGFyYW0ge0FycmF5IG9yIE5vZGVMaXN0IG9yIEVsZW1lbnR9IGVsZW1zXG4gICAqL1xuICBwcm90by5pbnNlcnQgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gICAgdmFyIGl0ZW1zID0gdGhpcy5hZGRJdGVtcyggZWxlbXMgKTtcbiAgICBpZiAoICFpdGVtcy5sZW5ndGggKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGFwcGVuZCBpdGVtIGVsZW1lbnRzXG4gICAgdmFyIGksIGl0ZW07XG4gICAgdmFyIGxlbiA9IGl0ZW1zLmxlbmd0aDtcbiAgICBmb3IgKCBpPTA7IGkgPCBsZW47IGkrKyApIHtcbiAgICAgIGl0ZW0gPSBpdGVtc1tpXTtcbiAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCggaXRlbS5lbGVtZW50ICk7XG4gICAgfVxuICAgIC8vIGZpbHRlciBuZXcgc3R1ZmZcbiAgICB2YXIgZmlsdGVyZWRJbnNlcnRJdGVtcyA9IHRoaXMuX2ZpbHRlciggaXRlbXMgKS5tYXRjaGVzO1xuICAgIC8vIHNldCBmbGFnXG4gICAgZm9yICggaT0wOyBpIDwgbGVuOyBpKysgKSB7XG4gICAgICBpdGVtc1tpXS5pc0xheW91dEluc3RhbnQgPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLmFycmFuZ2UoKTtcbiAgICAvLyByZXNldCBmbGFnXG4gICAgZm9yICggaT0wOyBpIDwgbGVuOyBpKysgKSB7XG4gICAgICBkZWxldGUgaXRlbXNbaV0uaXNMYXlvdXRJbnN0YW50O1xuICAgIH1cbiAgICB0aGlzLnJldmVhbCggZmlsdGVyZWRJbnNlcnRJdGVtcyApO1xuICB9O1xuXG4gIHZhciBfcmVtb3ZlID0gcHJvdG8ucmVtb3ZlO1xuICBwcm90by5yZW1vdmUgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gICAgZWxlbXMgPSB1dGlscy5tYWtlQXJyYXkoIGVsZW1zICk7XG4gICAgdmFyIHJlbW92ZUl0ZW1zID0gdGhpcy5nZXRJdGVtcyggZWxlbXMgKTtcbiAgICAvLyBkbyByZWd1bGFyIHRoaW5nXG4gICAgX3JlbW92ZS5jYWxsKCB0aGlzLCBlbGVtcyApO1xuICAgIC8vIGJhaWwgaWYgbm8gaXRlbXMgdG8gcmVtb3ZlXG4gICAgdmFyIGxlbiA9IHJlbW92ZUl0ZW1zICYmIHJlbW92ZUl0ZW1zLmxlbmd0aDtcbiAgICAvLyByZW1vdmUgZWxlbXMgZnJvbSBmaWx0ZXJlZEl0ZW1zXG4gICAgZm9yICggdmFyIGk9MDsgbGVuICYmIGkgPCBsZW47IGkrKyApIHtcbiAgICAgIHZhciBpdGVtID0gcmVtb3ZlSXRlbXNbaV07XG4gICAgICAvLyByZW1vdmUgaXRlbSBmcm9tIGNvbGxlY3Rpb25cbiAgICAgIHV0aWxzLnJlbW92ZUZyb20oIHRoaXMuZmlsdGVyZWRJdGVtcywgaXRlbSApO1xuICAgIH1cbiAgfTtcblxuICBwcm90by5zaHVmZmxlID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gdXBkYXRlIHJhbmRvbSBzb3J0RGF0YVxuICAgIGZvciAoIHZhciBpPTA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrICkge1xuICAgICAgdmFyIGl0ZW0gPSB0aGlzLml0ZW1zW2ldO1xuICAgICAgaXRlbS5zb3J0RGF0YS5yYW5kb20gPSBNYXRoLnJhbmRvbSgpO1xuICAgIH1cbiAgICB0aGlzLm9wdGlvbnMuc29ydEJ5ID0gJ3JhbmRvbSc7XG4gICAgdGhpcy5fc29ydCgpO1xuICAgIHRoaXMuX2xheW91dCgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiB0cmlnZ2VyIGZuIHdpdGhvdXQgdHJhbnNpdGlvblxuICAgKiBraW5kIG9mIGhhY2t5IHRvIGhhdmUgdGhpcyBpbiB0aGUgZmlyc3QgcGxhY2VcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAgICogQHBhcmFtIHtBcnJheX0gYXJnc1xuICAgKiBAcmV0dXJucyByZXRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByb3RvLl9ub1RyYW5zaXRpb24gPSBmdW5jdGlvbiggZm4sIGFyZ3MgKSB7XG4gICAgLy8gc2F2ZSB0cmFuc2l0aW9uRHVyYXRpb24gYmVmb3JlIGRpc2FibGluZ1xuICAgIHZhciB0cmFuc2l0aW9uRHVyYXRpb24gPSB0aGlzLm9wdGlvbnMudHJhbnNpdGlvbkR1cmF0aW9uO1xuICAgIC8vIGRpc2FibGUgdHJhbnNpdGlvblxuICAgIHRoaXMub3B0aW9ucy50cmFuc2l0aW9uRHVyYXRpb24gPSAwO1xuICAgIC8vIGRvIGl0XG4gICAgdmFyIHJldHVyblZhbHVlID0gZm4uYXBwbHkoIHRoaXMsIGFyZ3MgKTtcbiAgICAvLyByZS1lbmFibGUgdHJhbnNpdGlvbiBmb3IgcmV2ZWFsXG4gICAgdGhpcy5vcHRpb25zLnRyYW5zaXRpb25EdXJhdGlvbiA9IHRyYW5zaXRpb25EdXJhdGlvbjtcbiAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG4gIH07XG5cbiAgLy8gLS0tLS0gaGVscGVyIG1ldGhvZHMgLS0tLS0gLy9cblxuICAvKipcbiAgICogZ2V0dGVyIG1ldGhvZCBmb3IgZ2V0dGluZyBmaWx0ZXJlZCBpdGVtIGVsZW1lbnRzXG4gICAqIEByZXR1cm5zIHtBcnJheX0gZWxlbXMgLSBjb2xsZWN0aW9uIG9mIGl0ZW0gZWxlbWVudHNcbiAgICovXG4gIHByb3RvLmdldEZpbHRlcmVkSXRlbUVsZW1lbnRzID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyZWRJdGVtcy5tYXAoIGZ1bmN0aW9uKCBpdGVtICkge1xuICAgICAgcmV0dXJuIGl0ZW0uZWxlbWVudDtcbiAgICB9KTtcbiAgfTtcblxuICAvLyAtLS0tLSAgLS0tLS0gLy9cblxuICByZXR1cm4gSXNvdG9wZTtcblxufSkpO1xuIiwiLyoqXG4gKiBJc290b3BlIEl0ZW1cbioqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICAvKiBqc2hpbnQgc3RyaWN0OiBmYWxzZSAqLyAvKmdsb2JhbHMgZGVmaW5lLCBtb2R1bGUsIHJlcXVpcmUgKi9cbiAgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAvLyBBTURcbiAgICBkZWZpbmUoIFtcbiAgICAgICAgJ291dGxheWVyL291dGxheWVyJ1xuICAgICAgXSxcbiAgICAgIGZhY3RvcnkgKTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgIHJlcXVpcmUoJ291dGxheWVyJylcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgd2luZG93Lklzb3RvcGUgPSB3aW5kb3cuSXNvdG9wZSB8fCB7fTtcbiAgICB3aW5kb3cuSXNvdG9wZS5JdGVtID0gZmFjdG9yeShcbiAgICAgIHdpbmRvdy5PdXRsYXllclxuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCBPdXRsYXllciApIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gSXRlbSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vLyBzdWItY2xhc3MgT3V0bGF5ZXIgSXRlbVxuZnVuY3Rpb24gSXRlbSgpIHtcbiAgT3V0bGF5ZXIuSXRlbS5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG59XG5cbnZhciBwcm90byA9IEl0ZW0ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggT3V0bGF5ZXIuSXRlbS5wcm90b3R5cGUgKTtcblxudmFyIF9jcmVhdGUgPSBwcm90by5fY3JlYXRlO1xucHJvdG8uX2NyZWF0ZSA9IGZ1bmN0aW9uKCkge1xuICAvLyBhc3NpZ24gaWQsIHVzZWQgZm9yIG9yaWdpbmFsLW9yZGVyIHNvcnRpbmdcbiAgdGhpcy5pZCA9IHRoaXMubGF5b3V0Lml0ZW1HVUlEKys7XG4gIF9jcmVhdGUuY2FsbCggdGhpcyApO1xuICB0aGlzLnNvcnREYXRhID0ge307XG59O1xuXG5wcm90by51cGRhdGVTb3J0RGF0YSA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIHRoaXMuaXNJZ25vcmVkICkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBkZWZhdWx0IHNvcnRlcnNcbiAgdGhpcy5zb3J0RGF0YS5pZCA9IHRoaXMuaWQ7XG4gIC8vIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG4gIHRoaXMuc29ydERhdGFbJ29yaWdpbmFsLW9yZGVyJ10gPSB0aGlzLmlkO1xuICB0aGlzLnNvcnREYXRhLnJhbmRvbSA9IE1hdGgucmFuZG9tKCk7XG4gIC8vIGdvIHRocnUgZ2V0U29ydERhdGEgb2JqIGFuZCBhcHBseSB0aGUgc29ydGVyc1xuICB2YXIgZ2V0U29ydERhdGEgPSB0aGlzLmxheW91dC5vcHRpb25zLmdldFNvcnREYXRhO1xuICB2YXIgc29ydGVycyA9IHRoaXMubGF5b3V0Ll9zb3J0ZXJzO1xuICBmb3IgKCB2YXIga2V5IGluIGdldFNvcnREYXRhICkge1xuICAgIHZhciBzb3J0ZXIgPSBzb3J0ZXJzWyBrZXkgXTtcbiAgICB0aGlzLnNvcnREYXRhWyBrZXkgXSA9IHNvcnRlciggdGhpcy5lbGVtZW50LCB0aGlzICk7XG4gIH1cbn07XG5cbnZhciBfZGVzdHJveSA9IHByb3RvLmRlc3Ryb3k7XG5wcm90by5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gIC8vIGNhbGwgc3VwZXJcbiAgX2Rlc3Ryb3kuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuICAvLyByZXNldCBkaXNwbGF5LCAjNzQxXG4gIHRoaXMuY3NzKHtcbiAgICBkaXNwbGF5OiAnJ1xuICB9KTtcbn07XG5cbnJldHVybiBJdGVtO1xuXG59KSk7XG4iLCIvKipcbiAqIElzb3RvcGUgTGF5b3V0TW9kZVxuICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qIGpzaGludCBzdHJpY3Q6IGZhbHNlICovIC8qZ2xvYmFscyBkZWZpbmUsIG1vZHVsZSwgcmVxdWlyZSAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggW1xuICAgICAgICAnZ2V0LXNpemUvZ2V0LXNpemUnLFxuICAgICAgICAnb3V0bGF5ZXIvb3V0bGF5ZXInXG4gICAgICBdLFxuICAgICAgZmFjdG9yeSApO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgcmVxdWlyZSgnZ2V0LXNpemUnKSxcbiAgICAgIHJlcXVpcmUoJ291dGxheWVyJylcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgd2luZG93Lklzb3RvcGUgPSB3aW5kb3cuSXNvdG9wZSB8fCB7fTtcbiAgICB3aW5kb3cuSXNvdG9wZS5MYXlvdXRNb2RlID0gZmFjdG9yeShcbiAgICAgIHdpbmRvdy5nZXRTaXplLFxuICAgICAgd2luZG93Lk91dGxheWVyXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIGdldFNpemUsIE91dGxheWVyICkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gbGF5b3V0IG1vZGUgY2xhc3NcbiAgZnVuY3Rpb24gTGF5b3V0TW9kZSggaXNvdG9wZSApIHtcbiAgICB0aGlzLmlzb3RvcGUgPSBpc290b3BlO1xuICAgIC8vIGxpbmsgcHJvcGVydGllc1xuICAgIGlmICggaXNvdG9wZSApIHtcbiAgICAgIHRoaXMub3B0aW9ucyA9IGlzb3RvcGUub3B0aW9uc1sgdGhpcy5uYW1lc3BhY2UgXTtcbiAgICAgIHRoaXMuZWxlbWVudCA9IGlzb3RvcGUuZWxlbWVudDtcbiAgICAgIHRoaXMuaXRlbXMgPSBpc290b3BlLmZpbHRlcmVkSXRlbXM7XG4gICAgICB0aGlzLnNpemUgPSBpc290b3BlLnNpemU7XG4gICAgfVxuICB9XG5cbiAgdmFyIHByb3RvID0gTGF5b3V0TW9kZS5wcm90b3R5cGU7XG5cbiAgLyoqXG4gICAqIHNvbWUgbWV0aG9kcyBzaG91bGQganVzdCBkZWZlciB0byBkZWZhdWx0IE91dGxheWVyIG1ldGhvZFxuICAgKiBhbmQgcmVmZXJlbmNlIHRoZSBJc290b3BlIGluc3RhbmNlIGFzIGB0aGlzYFxuICAqKi9cbiAgdmFyIGZhY2FkZU1ldGhvZHMgPSBbXG4gICAgJ19yZXNldExheW91dCcsXG4gICAgJ19nZXRJdGVtTGF5b3V0UG9zaXRpb24nLFxuICAgICdfbWFuYWdlU3RhbXAnLFxuICAgICdfZ2V0Q29udGFpbmVyU2l6ZScsXG4gICAgJ19nZXRFbGVtZW50T2Zmc2V0JyxcbiAgICAnbmVlZHNSZXNpemVMYXlvdXQnLFxuICAgICdfZ2V0T3B0aW9uJ1xuICBdO1xuXG4gIGZhY2FkZU1ldGhvZHMuZm9yRWFjaCggZnVuY3Rpb24oIG1ldGhvZE5hbWUgKSB7XG4gICAgcHJvdG9bIG1ldGhvZE5hbWUgXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIE91dGxheWVyLnByb3RvdHlwZVsgbWV0aG9kTmFtZSBdLmFwcGx5KCB0aGlzLmlzb3RvcGUsIGFyZ3VtZW50cyApO1xuICAgIH07XG4gIH0pO1xuXG4gIC8vIC0tLS0tICAtLS0tLSAvL1xuXG4gIC8vIGZvciBob3Jpem9udGFsIGxheW91dCBtb2RlcywgY2hlY2sgdmVydGljYWwgc2l6ZVxuICBwcm90by5uZWVkc1ZlcnRpY2FsUmVzaXplTGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gZG9uJ3QgdHJpZ2dlciBpZiBzaXplIGRpZCBub3QgY2hhbmdlXG4gICAgdmFyIHNpemUgPSBnZXRTaXplKCB0aGlzLmlzb3RvcGUuZWxlbWVudCApO1xuICAgIC8vIGNoZWNrIHRoYXQgdGhpcy5zaXplIGFuZCBzaXplIGFyZSB0aGVyZVxuICAgIC8vIElFOCB0cmlnZ2VycyByZXNpemUgb24gYm9keSBzaXplIGNoYW5nZSwgc28gdGhleSBtaWdodCBub3QgYmVcbiAgICB2YXIgaGFzU2l6ZXMgPSB0aGlzLmlzb3RvcGUuc2l6ZSAmJiBzaXplO1xuICAgIHJldHVybiBoYXNTaXplcyAmJiBzaXplLmlubmVySGVpZ2h0ICE9IHRoaXMuaXNvdG9wZS5zaXplLmlubmVySGVpZ2h0O1xuICB9O1xuXG4gIC8vIC0tLS0tIG1lYXN1cmVtZW50cyAtLS0tLSAvL1xuXG4gIHByb3RvLl9nZXRNZWFzdXJlbWVudCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaXNvdG9wZS5fZ2V0TWVhc3VyZW1lbnQuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuICB9O1xuXG4gIHByb3RvLmdldENvbHVtbldpZHRoID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5nZXRTZWdtZW50U2l6ZSggJ2NvbHVtbicsICdXaWR0aCcgKTtcbiAgfTtcblxuICBwcm90by5nZXRSb3dIZWlnaHQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmdldFNlZ21lbnRTaXplKCAncm93JywgJ0hlaWdodCcgKTtcbiAgfTtcblxuICAvKipcbiAgICogZ2V0IGNvbHVtbldpZHRoIG9yIHJvd0hlaWdodFxuICAgKiBzZWdtZW50OiAnY29sdW1uJyBvciAncm93J1xuICAgKiBzaXplICdXaWR0aCcgb3IgJ0hlaWdodCdcbiAgKiovXG4gIHByb3RvLmdldFNlZ21lbnRTaXplID0gZnVuY3Rpb24oIHNlZ21lbnQsIHNpemUgKSB7XG4gICAgdmFyIHNlZ21lbnROYW1lID0gc2VnbWVudCArIHNpemU7XG4gICAgdmFyIG91dGVyU2l6ZSA9ICdvdXRlcicgKyBzaXplO1xuICAgIC8vIGNvbHVtbldpZHRoIC8gb3V0ZXJXaWR0aCAvLyByb3dIZWlnaHQgLyBvdXRlckhlaWdodFxuICAgIHRoaXMuX2dldE1lYXN1cmVtZW50KCBzZWdtZW50TmFtZSwgb3V0ZXJTaXplICk7XG4gICAgLy8gZ290IHJvd0hlaWdodCBvciBjb2x1bW5XaWR0aCwgd2UgY2FuIGNoaWxsXG4gICAgaWYgKCB0aGlzWyBzZWdtZW50TmFtZSBdICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBmYWxsIGJhY2sgdG8gaXRlbSBvZiBmaXJzdCBlbGVtZW50XG4gICAgdmFyIGZpcnN0SXRlbVNpemUgPSB0aGlzLmdldEZpcnN0SXRlbVNpemUoKTtcbiAgICB0aGlzWyBzZWdtZW50TmFtZSBdID0gZmlyc3RJdGVtU2l6ZSAmJiBmaXJzdEl0ZW1TaXplWyBvdXRlclNpemUgXSB8fFxuICAgICAgLy8gb3Igc2l6ZSBvZiBjb250YWluZXJcbiAgICAgIHRoaXMuaXNvdG9wZS5zaXplWyAnaW5uZXInICsgc2l6ZSBdO1xuICB9O1xuXG4gIHByb3RvLmdldEZpcnN0SXRlbVNpemUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZmlyc3RJdGVtID0gdGhpcy5pc290b3BlLmZpbHRlcmVkSXRlbXNbMF07XG4gICAgcmV0dXJuIGZpcnN0SXRlbSAmJiBmaXJzdEl0ZW0uZWxlbWVudCAmJiBnZXRTaXplKCBmaXJzdEl0ZW0uZWxlbWVudCApO1xuICB9O1xuXG4gIC8vIC0tLS0tIG1ldGhvZHMgdGhhdCBzaG91bGQgcmVmZXJlbmNlIGlzb3RvcGUgLS0tLS0gLy9cblxuICBwcm90by5sYXlvdXQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmlzb3RvcGUubGF5b3V0LmFwcGx5KCB0aGlzLmlzb3RvcGUsIGFyZ3VtZW50cyApO1xuICB9O1xuXG4gIHByb3RvLmdldFNpemUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmlzb3RvcGUuZ2V0U2l6ZSgpO1xuICAgIHRoaXMuc2l6ZSA9IHRoaXMuaXNvdG9wZS5zaXplO1xuICB9O1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGNyZWF0ZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4gIExheW91dE1vZGUubW9kZXMgPSB7fTtcblxuICBMYXlvdXRNb2RlLmNyZWF0ZSA9IGZ1bmN0aW9uKCBuYW1lc3BhY2UsIG9wdGlvbnMgKSB7XG5cbiAgICBmdW5jdGlvbiBNb2RlKCkge1xuICAgICAgTGF5b3V0TW9kZS5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG4gICAgfVxuXG4gICAgTW9kZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBwcm90byApO1xuICAgIE1vZGUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTW9kZTtcblxuICAgIC8vIGRlZmF1bHQgb3B0aW9uc1xuICAgIGlmICggb3B0aW9ucyApIHtcbiAgICAgIE1vZGUub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgfVxuXG4gICAgTW9kZS5wcm90b3R5cGUubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuICAgIC8vIHJlZ2lzdGVyIGluIElzb3RvcGVcbiAgICBMYXlvdXRNb2RlLm1vZGVzWyBuYW1lc3BhY2UgXSA9IE1vZGU7XG5cbiAgICByZXR1cm4gTW9kZTtcbiAgfTtcblxuICByZXR1cm4gTGF5b3V0TW9kZTtcblxufSkpO1xuIiwiLyoqXG4gKiBmaXRSb3dzIGxheW91dCBtb2RlXG4gKi9cblxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgLyoganNoaW50IHN0cmljdDogZmFsc2UgKi8gLypnbG9iYWxzIGRlZmluZSwgbW9kdWxlLCByZXF1aXJlICovXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBbXG4gICAgICAgICcuLi9sYXlvdXQtbW9kZSdcbiAgICAgIF0sXG4gICAgICBmYWN0b3J5ICk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgcmVxdWlyZSgnLi4vbGF5b3V0LW1vZGUnKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICBmYWN0b3J5KFxuICAgICAgd2luZG93Lklzb3RvcGUuTGF5b3V0TW9kZVxuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCBMYXlvdXRNb2RlICkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgRml0Um93cyA9IExheW91dE1vZGUuY3JlYXRlKCdmaXRSb3dzJyk7XG5cbnZhciBwcm90byA9IEZpdFJvd3MucHJvdG90eXBlO1xuXG5wcm90by5fcmVzZXRMYXlvdXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy54ID0gMDtcbiAgdGhpcy55ID0gMDtcbiAgdGhpcy5tYXhZID0gMDtcbiAgdGhpcy5fZ2V0TWVhc3VyZW1lbnQoICdndXR0ZXInLCAnb3V0ZXJXaWR0aCcgKTtcbn07XG5cbnByb3RvLl9nZXRJdGVtTGF5b3V0UG9zaXRpb24gPSBmdW5jdGlvbiggaXRlbSApIHtcbiAgaXRlbS5nZXRTaXplKCk7XG5cbiAgdmFyIGl0ZW1XaWR0aCA9IGl0ZW0uc2l6ZS5vdXRlcldpZHRoICsgdGhpcy5ndXR0ZXI7XG4gIC8vIGlmIHRoaXMgZWxlbWVudCBjYW5ub3QgZml0IGluIHRoZSBjdXJyZW50IHJvd1xuICB2YXIgY29udGFpbmVyV2lkdGggPSB0aGlzLmlzb3RvcGUuc2l6ZS5pbm5lcldpZHRoICsgdGhpcy5ndXR0ZXI7XG4gIGlmICggdGhpcy54ICE9PSAwICYmIGl0ZW1XaWR0aCArIHRoaXMueCA+IGNvbnRhaW5lcldpZHRoICkge1xuICAgIHRoaXMueCA9IDA7XG4gICAgdGhpcy55ID0gdGhpcy5tYXhZO1xuICB9XG5cbiAgdmFyIHBvc2l0aW9uID0ge1xuICAgIHg6IHRoaXMueCxcbiAgICB5OiB0aGlzLnlcbiAgfTtcblxuICB0aGlzLm1heFkgPSBNYXRoLm1heCggdGhpcy5tYXhZLCB0aGlzLnkgKyBpdGVtLnNpemUub3V0ZXJIZWlnaHQgKTtcbiAgdGhpcy54ICs9IGl0ZW1XaWR0aDtcblxuICByZXR1cm4gcG9zaXRpb247XG59O1xuXG5wcm90by5fZ2V0Q29udGFpbmVyU2l6ZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4geyBoZWlnaHQ6IHRoaXMubWF4WSB9O1xufTtcblxucmV0dXJuIEZpdFJvd3M7XG5cbn0pKTtcbiIsIi8qIVxuICogTWFzb25yeSBsYXlvdXQgbW9kZVxuICogc3ViLWNsYXNzZXMgTWFzb25yeVxuICogaHR0cHM6Ly9tYXNvbnJ5LmRlc2FuZHJvLmNvbVxuICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qIGpzaGludCBzdHJpY3Q6IGZhbHNlICovIC8qZ2xvYmFscyBkZWZpbmUsIG1vZHVsZSwgcmVxdWlyZSAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggW1xuICAgICAgICAnLi4vbGF5b3V0LW1vZGUnLFxuICAgICAgICAnbWFzb25yeS1sYXlvdXQvbWFzb25yeSdcbiAgICAgIF0sXG4gICAgICBmYWN0b3J5ICk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICByZXF1aXJlKCcuLi9sYXlvdXQtbW9kZScpLFxuICAgICAgcmVxdWlyZSgnbWFzb25yeS1sYXlvdXQnKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICBmYWN0b3J5KFxuICAgICAgd2luZG93Lklzb3RvcGUuTGF5b3V0TW9kZSxcbiAgICAgIHdpbmRvdy5NYXNvbnJ5XG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIExheW91dE1vZGUsIE1hc29ucnkgKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG1hc29ucnlEZWZpbml0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbiAgLy8gY3JlYXRlIGFuIE91dGxheWVyIGxheW91dCBjbGFzc1xuICB2YXIgTWFzb25yeU1vZGUgPSBMYXlvdXRNb2RlLmNyZWF0ZSgnbWFzb25yeScpO1xuXG4gIHZhciBwcm90byA9IE1hc29ucnlNb2RlLnByb3RvdHlwZTtcblxuICB2YXIga2VlcE1vZGVNZXRob2RzID0ge1xuICAgIF9nZXRFbGVtZW50T2Zmc2V0OiB0cnVlLFxuICAgIGxheW91dDogdHJ1ZSxcbiAgICBfZ2V0TWVhc3VyZW1lbnQ6IHRydWVcbiAgfTtcblxuICAvLyBpbmhlcml0IE1hc29ucnkgcHJvdG90eXBlXG4gIGZvciAoIHZhciBtZXRob2QgaW4gTWFzb25yeS5wcm90b3R5cGUgKSB7XG4gICAgLy8gZG8gbm90IGluaGVyaXQgbW9kZSBtZXRob2RzXG4gICAgaWYgKCAha2VlcE1vZGVNZXRob2RzWyBtZXRob2QgXSApIHtcbiAgICAgIHByb3RvWyBtZXRob2QgXSA9IE1hc29ucnkucHJvdG90eXBlWyBtZXRob2QgXTtcbiAgICB9XG4gIH1cblxuICB2YXIgbWVhc3VyZUNvbHVtbnMgPSBwcm90by5tZWFzdXJlQ29sdW1ucztcbiAgcHJvdG8ubWVhc3VyZUNvbHVtbnMgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBzZXQgaXRlbXMsIHVzZWQgaWYgbWVhc3VyaW5nIGZpcnN0IGl0ZW1cbiAgICB0aGlzLml0ZW1zID0gdGhpcy5pc290b3BlLmZpbHRlcmVkSXRlbXM7XG4gICAgbWVhc3VyZUNvbHVtbnMuY2FsbCggdGhpcyApO1xuICB9O1xuXG4gIC8vIHBvaW50IHRvIG1vZGUgb3B0aW9ucyBmb3IgZml0V2lkdGhcbiAgdmFyIF9nZXRPcHRpb24gPSBwcm90by5fZ2V0T3B0aW9uO1xuICBwcm90by5fZ2V0T3B0aW9uID0gZnVuY3Rpb24oIG9wdGlvbiApIHtcbiAgICBpZiAoIG9wdGlvbiA9PSAnZml0V2lkdGgnICkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5pc0ZpdFdpZHRoICE9PSB1bmRlZmluZWQgP1xuICAgICAgICB0aGlzLm9wdGlvbnMuaXNGaXRXaWR0aCA6IHRoaXMub3B0aW9ucy5maXRXaWR0aDtcbiAgICB9XG4gICAgcmV0dXJuIF9nZXRPcHRpb24uYXBwbHkoIHRoaXMuaXNvdG9wZSwgYXJndW1lbnRzICk7XG4gIH07XG5cbiAgcmV0dXJuIE1hc29ucnlNb2RlO1xuXG59KSk7XG4iLCIvKipcbiAqIHZlcnRpY2FsIGxheW91dCBtb2RlXG4gKi9cblxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgLyoganNoaW50IHN0cmljdDogZmFsc2UgKi8gLypnbG9iYWxzIGRlZmluZSwgbW9kdWxlLCByZXF1aXJlICovXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBbXG4gICAgICAgICcuLi9sYXlvdXQtbW9kZSdcbiAgICAgIF0sXG4gICAgICBmYWN0b3J5ICk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICByZXF1aXJlKCcuLi9sYXlvdXQtbW9kZScpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIGZhY3RvcnkoXG4gICAgICB3aW5kb3cuSXNvdG9wZS5MYXlvdXRNb2RlXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIExheW91dE1vZGUgKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBWZXJ0aWNhbCA9IExheW91dE1vZGUuY3JlYXRlKCAndmVydGljYWwnLCB7XG4gIGhvcml6b250YWxBbGlnbm1lbnQ6IDBcbn0pO1xuXG52YXIgcHJvdG8gPSBWZXJ0aWNhbC5wcm90b3R5cGU7XG5cbnByb3RvLl9yZXNldExheW91dCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnkgPSAwO1xufTtcblxucHJvdG8uX2dldEl0ZW1MYXlvdXRQb3NpdGlvbiA9IGZ1bmN0aW9uKCBpdGVtICkge1xuICBpdGVtLmdldFNpemUoKTtcbiAgdmFyIHggPSAoIHRoaXMuaXNvdG9wZS5zaXplLmlubmVyV2lkdGggLSBpdGVtLnNpemUub3V0ZXJXaWR0aCApICpcbiAgICB0aGlzLm9wdGlvbnMuaG9yaXpvbnRhbEFsaWdubWVudDtcbiAgdmFyIHkgPSB0aGlzLnk7XG4gIHRoaXMueSArPSBpdGVtLnNpemUub3V0ZXJIZWlnaHQ7XG4gIHJldHVybiB7IHg6IHgsIHk6IHkgfTtcbn07XG5cbnByb3RvLl9nZXRDb250YWluZXJTaXplID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB7IGhlaWdodDogdGhpcy55IH07XG59O1xuXG5yZXR1cm4gVmVydGljYWw7XG5cbn0pKTtcbiIsIi8qIVxuICogUGFja2VyeSBsYXlvdXQgbW9kZSB2Mi4wLjFcbiAqIHN1Yi1jbGFzc2VzIFBhY2tlcnlcbiAqL1xuXG4vKmpzaGludCBicm93c2VyOiB0cnVlLCBzdHJpY3Q6IHRydWUsIHVuZGVmOiB0cnVlLCB1bnVzZWQ6IHRydWUgKi9cblxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAndXNlIHN0cmljdCc7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggW1xuICAgICAgICAnaXNvdG9wZS1sYXlvdXQvanMvbGF5b3V0LW1vZGUnLFxuICAgICAgICAncGFja2VyeS9qcy9wYWNrZXJ5J1xuICAgICAgXSxcbiAgICAgIGZhY3RvcnkgKTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgIHJlcXVpcmUoJ2lzb3RvcGUtbGF5b3V0L2pzL2xheW91dC1tb2RlJyksXG4gICAgICByZXF1aXJlKCdwYWNrZXJ5JylcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgZmFjdG9yeShcbiAgICAgIHdpbmRvdy5Jc290b3BlLkxheW91dE1vZGUsXG4gICAgICB3aW5kb3cuUGFja2VyeVxuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCBMYXlvdXRNb2RlLCBQYWNrZXJ5ICkge1xuJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIGNyZWF0ZSBhbiBPdXRsYXllciBsYXlvdXQgY2xhc3NcbiAgdmFyIFBhY2tlcnlNb2RlID0gTGF5b3V0TW9kZS5jcmVhdGUoJ3BhY2tlcnknKTtcbiAgdmFyIHByb3RvID0gUGFja2VyeU1vZGUucHJvdG90eXBlO1xuXG4gIHZhciBrZWVwTW9kZU1ldGhvZHMgPSB7XG4gICAgX2dldEVsZW1lbnRPZmZzZXQ6IHRydWUsXG4gICAgX2dldE1lYXN1cmVtZW50OiB0cnVlXG4gIH07XG5cbiAgLy8gaW5oZXJpdCBQYWNrZXJ5IHByb3RvdHlwZVxuICBmb3IgKCB2YXIgbWV0aG9kIGluIFBhY2tlcnkucHJvdG90eXBlICkge1xuICAgIC8vIGRvIG5vdCBpbmhlcml0IG1vZGUgbWV0aG9kc1xuICAgIGlmICggIWtlZXBNb2RlTWV0aG9kc1sgbWV0aG9kIF0gKSB7XG4gICAgICBwcm90b1sgbWV0aG9kIF0gPSBQYWNrZXJ5LnByb3RvdHlwZVsgbWV0aG9kIF07XG4gICAgfVxuICB9XG5cbiAgLy8gc2V0IHBhY2tlciBpbiBfcmVzZXRMYXlvdXRcbiAgdmFyIF9yZXNldExheW91dCA9IHByb3RvLl9yZXNldExheW91dDtcbiAgcHJvdG8uX3Jlc2V0TGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5wYWNrZXIgPSB0aGlzLnBhY2tlciB8fCBuZXcgUGFja2VyeS5QYWNrZXIoKTtcbiAgICB0aGlzLnNoaWZ0UGFja2VyID0gdGhpcy5zaGlmdFBhY2tlciB8fCBuZXcgUGFja2VyeS5QYWNrZXIoKTtcbiAgICBfcmVzZXRMYXlvdXQuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuICB9O1xuXG4gIHZhciBfZ2V0SXRlbUxheW91dFBvc2l0aW9uID0gcHJvdG8uX2dldEl0ZW1MYXlvdXRQb3NpdGlvbjtcbiAgcHJvdG8uX2dldEl0ZW1MYXlvdXRQb3NpdGlvbiA9IGZ1bmN0aW9uKCBpdGVtICkge1xuICAgIC8vIHNldCBwYWNrZXJ5IHJlY3RcbiAgICBpdGVtLnJlY3QgPSBpdGVtLnJlY3QgfHwgbmV3IFBhY2tlcnkuUmVjdCgpO1xuICAgIHJldHVybiBfZ2V0SXRlbUxheW91dFBvc2l0aW9uLmNhbGwoIHRoaXMsIGl0ZW0gKTtcbiAgfTtcblxuICAvLyBuZWVkc1Jlc2l6ZUxheW91dCBmb3IgdmVydGljYWwgb3IgaG9yaXpvbnRhbFxuICB2YXIgX25lZWRzUmVzaXplTGF5b3V0ID0gcHJvdG8ubmVlZHNSZXNpemVMYXlvdXQ7XG4gIHByb3RvLm5lZWRzUmVzaXplTGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCB0aGlzLl9nZXRPcHRpb24oJ2hvcml6b250YWwnKSApIHtcbiAgICAgIHJldHVybiB0aGlzLm5lZWRzVmVydGljYWxSZXNpemVMYXlvdXQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIF9uZWVkc1Jlc2l6ZUxheW91dC5jYWxsKCB0aGlzICk7XG4gICAgfVxuICB9O1xuXG4gIC8vIHBvaW50IHRvIG1vZGUgb3B0aW9ucyBmb3IgaG9yaXpvbnRhbFxuICB2YXIgX2dldE9wdGlvbiA9IHByb3RvLl9nZXRPcHRpb247XG4gIHByb3RvLl9nZXRPcHRpb24gPSBmdW5jdGlvbiggb3B0aW9uICkge1xuICAgIGlmICggb3B0aW9uID09ICdob3Jpem9udGFsJyApIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaXNIb3Jpem9udGFsICE9PSB1bmRlZmluZWQgP1xuICAgICAgICB0aGlzLm9wdGlvbnMuaXNIb3Jpem9udGFsIDogdGhpcy5vcHRpb25zLmhvcml6b250YWw7XG4gICAgfVxuICAgIHJldHVybiBfZ2V0T3B0aW9uLmFwcGx5KCB0aGlzLmlzb3RvcGUsIGFyZ3VtZW50cyApO1xuICB9O1xuXG4gIHJldHVybiBQYWNrZXJ5TW9kZTtcblxufSkpO1xuIiwidmFyIG9iamVjdEV4dGVuZCA9IGV4dGVuZDtcblxuLypcbiAgdmFyIG9iaiA9IHthOiAzLCBiOiA1fTtcbiAgZXh0ZW5kKG9iaiwge2E6IDQsIGM6IDh9KTsgLy8ge2E6IDQsIGI6IDUsIGM6IDh9XG4gIG9iajsgLy8ge2E6IDQsIGI6IDUsIGM6IDh9XG5cbiAgdmFyIG9iaiA9IHthOiAzLCBiOiA1fTtcbiAgZXh0ZW5kKHt9LCBvYmosIHthOiA0LCBjOiA4fSk7IC8vIHthOiA0LCBiOiA1LCBjOiA4fVxuICBvYmo7IC8vIHthOiAzLCBiOiA1fVxuXG4gIHZhciBhcnIgPSBbMSwgMiwgM107XG4gIHZhciBvYmogPSB7YTogMywgYjogNX07XG4gIGV4dGVuZChvYmosIHtjOiBhcnJ9KTsgLy8ge2E6IDMsIGI6IDUsIGM6IFsxLCAyLCAzXX1cbiAgYXJyLnB1c2goNCk7XG4gIG9iajsgLy8ge2E6IDMsIGI6IDUsIGM6IFsxLCAyLCAzLCA0XX1cblxuICB2YXIgYXJyID0gWzEsIDIsIDNdO1xuICB2YXIgb2JqID0ge2E6IDMsIGI6IDV9O1xuICBleHRlbmQodHJ1ZSwgb2JqLCB7YzogYXJyfSk7IC8vIHthOiAzLCBiOiA1LCBjOiBbMSwgMiwgM119XG4gIGFyci5wdXNoKDQpO1xuICBvYmo7IC8vIHthOiAzLCBiOiA1LCBjOiBbMSwgMiwgM119XG5cbiAgZXh0ZW5kKHthOiA0LCBiOiA1fSk7IC8vIHthOiA0LCBiOiA1fVxuICBleHRlbmQoe2E6IDQsIGI6IDV9LCAzKTsge2E6IDQsIGI6IDV9XG4gIGV4dGVuZCh7YTogNCwgYjogNX0sIHRydWUpOyB7YTogNCwgYjogNX1cbiAgZXh0ZW5kKCdoZWxsbycsIHthOiA0LCBiOiA1fSk7IC8vIHRocm93c1xuICBleHRlbmQoMywge2E6IDQsIGI6IDV9KTsgLy8gdGhyb3dzXG4qL1xuXG5mdW5jdGlvbiBleHRlbmQoLyogW2RlZXBdLCBvYmoxLCBvYmoyLCBbb2Jqbl0gKi8pIHtcbiAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gIHZhciBkZWVwID0gZmFsc2U7XG4gIGlmICh0eXBlb2YgYXJnc1swXSA9PSAnYm9vbGVhbicpIHtcbiAgICBkZWVwID0gYXJncy5zaGlmdCgpO1xuICB9XG4gIHZhciByZXN1bHQgPSBhcmdzWzBdO1xuICBpZiAoaXNVbmV4dGVuZGFibGUocmVzdWx0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcignZXh0ZW5kZWUgbXVzdCBiZSBhbiBvYmplY3QnKTtcbiAgfVxuICB2YXIgZXh0ZW5kZXJzID0gYXJncy5zbGljZSgxKTtcbiAgdmFyIGxlbiA9IGV4dGVuZGVycy5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgZXh0ZW5kZXIgPSBleHRlbmRlcnNbaV07XG4gICAgZm9yICh2YXIga2V5IGluIGV4dGVuZGVyKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4dGVuZGVyLCBrZXkpKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGV4dGVuZGVyW2tleV07XG4gICAgICAgIGlmIChkZWVwICYmIGlzQ2xvbmVhYmxlKHZhbHVlKSkge1xuICAgICAgICAgIHZhciBiYXNlID0gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyBbXSA6IHt9O1xuICAgICAgICAgIHJlc3VsdFtrZXldID0gZXh0ZW5kKFxuICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChyZXN1bHQsIGtleSkgJiYgIWlzVW5leHRlbmRhYmxlKHJlc3VsdFtrZXldKVxuICAgICAgICAgICAgICA/IHJlc3VsdFtrZXldXG4gICAgICAgICAgICAgIDogYmFzZSxcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHRba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGlzQ2xvbmVhYmxlKG9iaikge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShvYmopIHx8IHt9LnRvU3RyaW5nLmNhbGwob2JqKSA9PSAnW29iamVjdCBPYmplY3RdJztcbn1cblxuZnVuY3Rpb24gaXNVbmV4dGVuZGFibGUodmFsKSB7XG4gIHJldHVybiAhdmFsIHx8ICh0eXBlb2YgdmFsICE9ICdvYmplY3QnICYmIHR5cGVvZiB2YWwgIT0gJ2Z1bmN0aW9uJyk7XG59XG5cbmV4cG9ydCB7b2JqZWN0RXh0ZW5kIGFzIGRlZmF1bHR9O1xuIiwiLyohXG4gKiBNYXNvbnJ5IHY0LjIuMlxuICogQ2FzY2FkaW5nIGdyaWQgbGF5b3V0IGxpYnJhcnlcbiAqIGh0dHBzOi8vbWFzb25yeS5kZXNhbmRyby5jb21cbiAqIE1JVCBMaWNlbnNlXG4gKiBieSBEYXZpZCBEZVNhbmRyb1xuICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qIGpzaGludCBzdHJpY3Q6IGZhbHNlICovIC8qZ2xvYmFscyBkZWZpbmUsIG1vZHVsZSwgcmVxdWlyZSAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggW1xuICAgICAgICAnb3V0bGF5ZXIvb3V0bGF5ZXInLFxuICAgICAgICAnZ2V0LXNpemUvZ2V0LXNpemUnXG4gICAgICBdLFxuICAgICAgZmFjdG9yeSApO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgcmVxdWlyZSgnb3V0bGF5ZXInKSxcbiAgICAgIHJlcXVpcmUoJ2dldC1zaXplJylcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgd2luZG93Lk1hc29ucnkgPSBmYWN0b3J5KFxuICAgICAgd2luZG93Lk91dGxheWVyLFxuICAgICAgd2luZG93LmdldFNpemVcbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggT3V0bGF5ZXIsIGdldFNpemUgKSB7XG5cbid1c2Ugc3RyaWN0JztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbWFzb25yeURlZmluaXRpb24gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuICAvLyBjcmVhdGUgYW4gT3V0bGF5ZXIgbGF5b3V0IGNsYXNzXG4gIHZhciBNYXNvbnJ5ID0gT3V0bGF5ZXIuY3JlYXRlKCdtYXNvbnJ5Jyk7XG4gIC8vIGlzRml0V2lkdGggLT4gZml0V2lkdGhcbiAgTWFzb25yeS5jb21wYXRPcHRpb25zLmZpdFdpZHRoID0gJ2lzRml0V2lkdGgnO1xuXG4gIHZhciBwcm90byA9IE1hc29ucnkucHJvdG90eXBlO1xuXG4gIHByb3RvLl9yZXNldExheW91dCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZ2V0U2l6ZSgpO1xuICAgIHRoaXMuX2dldE1lYXN1cmVtZW50KCAnY29sdW1uV2lkdGgnLCAnb3V0ZXJXaWR0aCcgKTtcbiAgICB0aGlzLl9nZXRNZWFzdXJlbWVudCggJ2d1dHRlcicsICdvdXRlcldpZHRoJyApO1xuICAgIHRoaXMubWVhc3VyZUNvbHVtbnMoKTtcblxuICAgIC8vIHJlc2V0IGNvbHVtbiBZXG4gICAgdGhpcy5jb2xZcyA9IFtdO1xuICAgIGZvciAoIHZhciBpPTA7IGkgPCB0aGlzLmNvbHM7IGkrKyApIHtcbiAgICAgIHRoaXMuY29sWXMucHVzaCggMCApO1xuICAgIH1cblxuICAgIHRoaXMubWF4WSA9IDA7XG4gICAgdGhpcy5ob3Jpem9udGFsQ29sSW5kZXggPSAwO1xuICB9O1xuXG4gIHByb3RvLm1lYXN1cmVDb2x1bW5zID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5nZXRDb250YWluZXJXaWR0aCgpO1xuICAgIC8vIGlmIGNvbHVtbldpZHRoIGlzIDAsIGRlZmF1bHQgdG8gb3V0ZXJXaWR0aCBvZiBmaXJzdCBpdGVtXG4gICAgaWYgKCAhdGhpcy5jb2x1bW5XaWR0aCApIHtcbiAgICAgIHZhciBmaXJzdEl0ZW0gPSB0aGlzLml0ZW1zWzBdO1xuICAgICAgdmFyIGZpcnN0SXRlbUVsZW0gPSBmaXJzdEl0ZW0gJiYgZmlyc3RJdGVtLmVsZW1lbnQ7XG4gICAgICAvLyBjb2x1bW5XaWR0aCBmYWxsIGJhY2sgdG8gaXRlbSBvZiBmaXJzdCBlbGVtZW50XG4gICAgICB0aGlzLmNvbHVtbldpZHRoID0gZmlyc3RJdGVtRWxlbSAmJiBnZXRTaXplKCBmaXJzdEl0ZW1FbGVtICkub3V0ZXJXaWR0aCB8fFxuICAgICAgICAvLyBpZiBmaXJzdCBlbGVtIGhhcyBubyB3aWR0aCwgZGVmYXVsdCB0byBzaXplIG9mIGNvbnRhaW5lclxuICAgICAgICB0aGlzLmNvbnRhaW5lcldpZHRoO1xuICAgIH1cblxuICAgIHZhciBjb2x1bW5XaWR0aCA9IHRoaXMuY29sdW1uV2lkdGggKz0gdGhpcy5ndXR0ZXI7XG5cbiAgICAvLyBjYWxjdWxhdGUgY29sdW1uc1xuICAgIHZhciBjb250YWluZXJXaWR0aCA9IHRoaXMuY29udGFpbmVyV2lkdGggKyB0aGlzLmd1dHRlcjtcbiAgICB2YXIgY29scyA9IGNvbnRhaW5lcldpZHRoIC8gY29sdW1uV2lkdGg7XG4gICAgLy8gZml4IHJvdW5kaW5nIGVycm9ycywgdHlwaWNhbGx5IHdpdGggZ3V0dGVyc1xuICAgIHZhciBleGNlc3MgPSBjb2x1bW5XaWR0aCAtIGNvbnRhaW5lcldpZHRoICUgY29sdW1uV2lkdGg7XG4gICAgLy8gaWYgb3ZlcnNob290IGlzIGxlc3MgdGhhbiBhIHBpeGVsLCByb3VuZCB1cCwgb3RoZXJ3aXNlIGZsb29yIGl0XG4gICAgdmFyIG1hdGhNZXRob2QgPSBleGNlc3MgJiYgZXhjZXNzIDwgMSA/ICdyb3VuZCcgOiAnZmxvb3InO1xuICAgIGNvbHMgPSBNYXRoWyBtYXRoTWV0aG9kIF0oIGNvbHMgKTtcbiAgICB0aGlzLmNvbHMgPSBNYXRoLm1heCggY29scywgMSApO1xuICB9O1xuXG4gIHByb3RvLmdldENvbnRhaW5lcldpZHRoID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gY29udGFpbmVyIGlzIHBhcmVudCBpZiBmaXQgd2lkdGhcbiAgICB2YXIgaXNGaXRXaWR0aCA9IHRoaXMuX2dldE9wdGlvbignZml0V2lkdGgnKTtcbiAgICB2YXIgY29udGFpbmVyID0gaXNGaXRXaWR0aCA/IHRoaXMuZWxlbWVudC5wYXJlbnROb2RlIDogdGhpcy5lbGVtZW50O1xuICAgIC8vIGNoZWNrIHRoYXQgdGhpcy5zaXplIGFuZCBzaXplIGFyZSB0aGVyZVxuICAgIC8vIElFOCB0cmlnZ2VycyByZXNpemUgb24gYm9keSBzaXplIGNoYW5nZSwgc28gdGhleSBtaWdodCBub3QgYmVcbiAgICB2YXIgc2l6ZSA9IGdldFNpemUoIGNvbnRhaW5lciApO1xuICAgIHRoaXMuY29udGFpbmVyV2lkdGggPSBzaXplICYmIHNpemUuaW5uZXJXaWR0aDtcbiAgfTtcblxuICBwcm90by5fZ2V0SXRlbUxheW91dFBvc2l0aW9uID0gZnVuY3Rpb24oIGl0ZW0gKSB7XG4gICAgaXRlbS5nZXRTaXplKCk7XG4gICAgLy8gaG93IG1hbnkgY29sdW1ucyBkb2VzIHRoaXMgYnJpY2sgc3BhblxuICAgIHZhciByZW1haW5kZXIgPSBpdGVtLnNpemUub3V0ZXJXaWR0aCAlIHRoaXMuY29sdW1uV2lkdGg7XG4gICAgdmFyIG1hdGhNZXRob2QgPSByZW1haW5kZXIgJiYgcmVtYWluZGVyIDwgMSA/ICdyb3VuZCcgOiAnY2VpbCc7XG4gICAgLy8gcm91bmQgaWYgb2ZmIGJ5IDEgcGl4ZWwsIG90aGVyd2lzZSB1c2UgY2VpbFxuICAgIHZhciBjb2xTcGFuID0gTWF0aFsgbWF0aE1ldGhvZCBdKCBpdGVtLnNpemUub3V0ZXJXaWR0aCAvIHRoaXMuY29sdW1uV2lkdGggKTtcbiAgICBjb2xTcGFuID0gTWF0aC5taW4oIGNvbFNwYW4sIHRoaXMuY29scyApO1xuICAgIC8vIHVzZSBob3Jpem9udGFsIG9yIHRvcCBjb2x1bW4gcG9zaXRpb25cbiAgICB2YXIgY29sUG9zTWV0aG9kID0gdGhpcy5vcHRpb25zLmhvcml6b250YWxPcmRlciA/XG4gICAgICAnX2dldEhvcml6b250YWxDb2xQb3NpdGlvbicgOiAnX2dldFRvcENvbFBvc2l0aW9uJztcbiAgICB2YXIgY29sUG9zaXRpb24gPSB0aGlzWyBjb2xQb3NNZXRob2QgXSggY29sU3BhbiwgaXRlbSApO1xuICAgIC8vIHBvc2l0aW9uIHRoZSBicmlja1xuICAgIHZhciBwb3NpdGlvbiA9IHtcbiAgICAgIHg6IHRoaXMuY29sdW1uV2lkdGggKiBjb2xQb3NpdGlvbi5jb2wsXG4gICAgICB5OiBjb2xQb3NpdGlvbi55XG4gICAgfTtcbiAgICAvLyBhcHBseSBzZXRIZWlnaHQgdG8gbmVjZXNzYXJ5IGNvbHVtbnNcbiAgICB2YXIgc2V0SGVpZ2h0ID0gY29sUG9zaXRpb24ueSArIGl0ZW0uc2l6ZS5vdXRlckhlaWdodDtcbiAgICB2YXIgc2V0TWF4ID0gY29sU3BhbiArIGNvbFBvc2l0aW9uLmNvbDtcbiAgICBmb3IgKCB2YXIgaSA9IGNvbFBvc2l0aW9uLmNvbDsgaSA8IHNldE1heDsgaSsrICkge1xuICAgICAgdGhpcy5jb2xZc1tpXSA9IHNldEhlaWdodDtcbiAgICB9XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH07XG5cbiAgcHJvdG8uX2dldFRvcENvbFBvc2l0aW9uID0gZnVuY3Rpb24oIGNvbFNwYW4gKSB7XG4gICAgdmFyIGNvbEdyb3VwID0gdGhpcy5fZ2V0VG9wQ29sR3JvdXAoIGNvbFNwYW4gKTtcbiAgICAvLyBnZXQgdGhlIG1pbmltdW0gWSB2YWx1ZSBmcm9tIHRoZSBjb2x1bW5zXG4gICAgdmFyIG1pbmltdW1ZID0gTWF0aC5taW4uYXBwbHkoIE1hdGgsIGNvbEdyb3VwICk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgY29sOiBjb2xHcm91cC5pbmRleE9mKCBtaW5pbXVtWSApLFxuICAgICAgeTogbWluaW11bVksXG4gICAgfTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbFNwYW4gLSBudW1iZXIgb2YgY29sdW1ucyB0aGUgZWxlbWVudCBzcGFuc1xuICAgKiBAcmV0dXJucyB7QXJyYXl9IGNvbEdyb3VwXG4gICAqL1xuICBwcm90by5fZ2V0VG9wQ29sR3JvdXAgPSBmdW5jdGlvbiggY29sU3BhbiApIHtcbiAgICBpZiAoIGNvbFNwYW4gPCAyICkge1xuICAgICAgLy8gaWYgYnJpY2sgc3BhbnMgb25seSBvbmUgY29sdW1uLCB1c2UgYWxsIHRoZSBjb2x1bW4gWXNcbiAgICAgIHJldHVybiB0aGlzLmNvbFlzO1xuICAgIH1cblxuICAgIHZhciBjb2xHcm91cCA9IFtdO1xuICAgIC8vIGhvdyBtYW55IGRpZmZlcmVudCBwbGFjZXMgY291bGQgdGhpcyBicmljayBmaXQgaG9yaXpvbnRhbGx5XG4gICAgdmFyIGdyb3VwQ291bnQgPSB0aGlzLmNvbHMgKyAxIC0gY29sU3BhbjtcbiAgICAvLyBmb3IgZWFjaCBncm91cCBwb3RlbnRpYWwgaG9yaXpvbnRhbCBwb3NpdGlvblxuICAgIGZvciAoIHZhciBpID0gMDsgaSA8IGdyb3VwQ291bnQ7IGkrKyApIHtcbiAgICAgIGNvbEdyb3VwW2ldID0gdGhpcy5fZ2V0Q29sR3JvdXBZKCBpLCBjb2xTcGFuICk7XG4gICAgfVxuICAgIHJldHVybiBjb2xHcm91cDtcbiAgfTtcblxuICBwcm90by5fZ2V0Q29sR3JvdXBZID0gZnVuY3Rpb24oIGNvbCwgY29sU3BhbiApIHtcbiAgICBpZiAoIGNvbFNwYW4gPCAyICkge1xuICAgICAgcmV0dXJuIHRoaXMuY29sWXNbIGNvbCBdO1xuICAgIH1cbiAgICAvLyBtYWtlIGFuIGFycmF5IG9mIGNvbFkgdmFsdWVzIGZvciB0aGF0IG9uZSBncm91cFxuICAgIHZhciBncm91cENvbFlzID0gdGhpcy5jb2xZcy5zbGljZSggY29sLCBjb2wgKyBjb2xTcGFuICk7XG4gICAgLy8gYW5kIGdldCB0aGUgbWF4IHZhbHVlIG9mIHRoZSBhcnJheVxuICAgIHJldHVybiBNYXRoLm1heC5hcHBseSggTWF0aCwgZ3JvdXBDb2xZcyApO1xuICB9O1xuXG4gIC8vIGdldCBjb2x1bW4gcG9zaXRpb24gYmFzZWQgb24gaG9yaXpvbnRhbCBpbmRleC4gIzg3M1xuICBwcm90by5fZ2V0SG9yaXpvbnRhbENvbFBvc2l0aW9uID0gZnVuY3Rpb24oIGNvbFNwYW4sIGl0ZW0gKSB7XG4gICAgdmFyIGNvbCA9IHRoaXMuaG9yaXpvbnRhbENvbEluZGV4ICUgdGhpcy5jb2xzO1xuICAgIHZhciBpc092ZXIgPSBjb2xTcGFuID4gMSAmJiBjb2wgKyBjb2xTcGFuID4gdGhpcy5jb2xzO1xuICAgIC8vIHNoaWZ0IHRvIG5leHQgcm93IGlmIGl0ZW0gY2FuJ3QgZml0IG9uIGN1cnJlbnQgcm93XG4gICAgY29sID0gaXNPdmVyID8gMCA6IGNvbDtcbiAgICAvLyBkb24ndCBsZXQgemVyby1zaXplIGl0ZW1zIHRha2UgdXAgc3BhY2VcbiAgICB2YXIgaGFzU2l6ZSA9IGl0ZW0uc2l6ZS5vdXRlcldpZHRoICYmIGl0ZW0uc2l6ZS5vdXRlckhlaWdodDtcbiAgICB0aGlzLmhvcml6b250YWxDb2xJbmRleCA9IGhhc1NpemUgPyBjb2wgKyBjb2xTcGFuIDogdGhpcy5ob3Jpem9udGFsQ29sSW5kZXg7XG5cbiAgICByZXR1cm4ge1xuICAgICAgY29sOiBjb2wsXG4gICAgICB5OiB0aGlzLl9nZXRDb2xHcm91cFkoIGNvbCwgY29sU3BhbiApLFxuICAgIH07XG4gIH07XG5cbiAgcHJvdG8uX21hbmFnZVN0YW1wID0gZnVuY3Rpb24oIHN0YW1wICkge1xuICAgIHZhciBzdGFtcFNpemUgPSBnZXRTaXplKCBzdGFtcCApO1xuICAgIHZhciBvZmZzZXQgPSB0aGlzLl9nZXRFbGVtZW50T2Zmc2V0KCBzdGFtcCApO1xuICAgIC8vIGdldCB0aGUgY29sdW1ucyB0aGF0IHRoaXMgc3RhbXAgYWZmZWN0c1xuICAgIHZhciBpc09yaWdpbkxlZnQgPSB0aGlzLl9nZXRPcHRpb24oJ29yaWdpbkxlZnQnKTtcbiAgICB2YXIgZmlyc3RYID0gaXNPcmlnaW5MZWZ0ID8gb2Zmc2V0LmxlZnQgOiBvZmZzZXQucmlnaHQ7XG4gICAgdmFyIGxhc3RYID0gZmlyc3RYICsgc3RhbXBTaXplLm91dGVyV2lkdGg7XG4gICAgdmFyIGZpcnN0Q29sID0gTWF0aC5mbG9vciggZmlyc3RYIC8gdGhpcy5jb2x1bW5XaWR0aCApO1xuICAgIGZpcnN0Q29sID0gTWF0aC5tYXgoIDAsIGZpcnN0Q29sICk7XG4gICAgdmFyIGxhc3RDb2wgPSBNYXRoLmZsb29yKCBsYXN0WCAvIHRoaXMuY29sdW1uV2lkdGggKTtcbiAgICAvLyBsYXN0Q29sIHNob3VsZCBub3QgZ28gb3ZlciBpZiBtdWx0aXBsZSBvZiBjb2x1bW5XaWR0aCAjNDI1XG4gICAgbGFzdENvbCAtPSBsYXN0WCAlIHRoaXMuY29sdW1uV2lkdGggPyAwIDogMTtcbiAgICBsYXN0Q29sID0gTWF0aC5taW4oIHRoaXMuY29scyAtIDEsIGxhc3RDb2wgKTtcbiAgICAvLyBzZXQgY29sWXMgdG8gYm90dG9tIG9mIHRoZSBzdGFtcFxuXG4gICAgdmFyIGlzT3JpZ2luVG9wID0gdGhpcy5fZ2V0T3B0aW9uKCdvcmlnaW5Ub3AnKTtcbiAgICB2YXIgc3RhbXBNYXhZID0gKCBpc09yaWdpblRvcCA/IG9mZnNldC50b3AgOiBvZmZzZXQuYm90dG9tICkgK1xuICAgICAgc3RhbXBTaXplLm91dGVySGVpZ2h0O1xuICAgIGZvciAoIHZhciBpID0gZmlyc3RDb2w7IGkgPD0gbGFzdENvbDsgaSsrICkge1xuICAgICAgdGhpcy5jb2xZc1tpXSA9IE1hdGgubWF4KCBzdGFtcE1heFksIHRoaXMuY29sWXNbaV0gKTtcbiAgICB9XG4gIH07XG5cbiAgcHJvdG8uX2dldENvbnRhaW5lclNpemUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLm1heFkgPSBNYXRoLm1heC5hcHBseSggTWF0aCwgdGhpcy5jb2xZcyApO1xuICAgIHZhciBzaXplID0ge1xuICAgICAgaGVpZ2h0OiB0aGlzLm1heFlcbiAgICB9O1xuXG4gICAgaWYgKCB0aGlzLl9nZXRPcHRpb24oJ2ZpdFdpZHRoJykgKSB7XG4gICAgICBzaXplLndpZHRoID0gdGhpcy5fZ2V0Q29udGFpbmVyRml0V2lkdGgoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2l6ZTtcbiAgfTtcblxuICBwcm90by5fZ2V0Q29udGFpbmVyRml0V2lkdGggPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdW51c2VkQ29scyA9IDA7XG4gICAgLy8gY291bnQgdW51c2VkIGNvbHVtbnNcbiAgICB2YXIgaSA9IHRoaXMuY29scztcbiAgICB3aGlsZSAoIC0taSApIHtcbiAgICAgIGlmICggdGhpcy5jb2xZc1tpXSAhPT0gMCApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB1bnVzZWRDb2xzKys7XG4gICAgfVxuICAgIC8vIGZpdCBjb250YWluZXIgdG8gY29sdW1ucyB0aGF0IGhhdmUgYmVlbiB1c2VkXG4gICAgcmV0dXJuICggdGhpcy5jb2xzIC0gdW51c2VkQ29scyApICogdGhpcy5jb2x1bW5XaWR0aCAtIHRoaXMuZ3V0dGVyO1xuICB9O1xuXG4gIHByb3RvLm5lZWRzUmVzaXplTGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHByZXZpb3VzV2lkdGggPSB0aGlzLmNvbnRhaW5lcldpZHRoO1xuICAgIHRoaXMuZ2V0Q29udGFpbmVyV2lkdGgoKTtcbiAgICByZXR1cm4gcHJldmlvdXNXaWR0aCAhPSB0aGlzLmNvbnRhaW5lcldpZHRoO1xuICB9O1xuXG4gIHJldHVybiBNYXNvbnJ5O1xuXG59KSk7XG4iLCIvKipcbiAqIE91dGxheWVyIEl0ZW1cbiAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICAvKiBqc2hpbnQgc3RyaWN0OiBmYWxzZSAqLyAvKiBnbG9iYWxzIGRlZmluZSwgbW9kdWxlLCByZXF1aXJlICovXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EIC0gUmVxdWlyZUpTXG4gICAgZGVmaW5lKCBbXG4gICAgICAgICdldi1lbWl0dGVyL2V2LWVtaXR0ZXInLFxuICAgICAgICAnZ2V0LXNpemUvZ2V0LXNpemUnXG4gICAgICBdLFxuICAgICAgZmFjdG9yeVxuICAgICk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlMgLSBCcm93c2VyaWZ5LCBXZWJwYWNrXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgcmVxdWlyZSgnZXYtZW1pdHRlcicpLFxuICAgICAgcmVxdWlyZSgnZ2V0LXNpemUnKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICB3aW5kb3cuT3V0bGF5ZXIgPSB7fTtcbiAgICB3aW5kb3cuT3V0bGF5ZXIuSXRlbSA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3cuRXZFbWl0dGVyLFxuICAgICAgd2luZG93LmdldFNpemVcbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggRXZFbWl0dGVyLCBnZXRTaXplICkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyAtLS0tLSBoZWxwZXJzIC0tLS0tIC8vXG5cbmZ1bmN0aW9uIGlzRW1wdHlPYmooIG9iaiApIHtcbiAgZm9yICggdmFyIHByb3AgaW4gb2JqICkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBwcm9wID0gbnVsbDtcbiAgcmV0dXJuIHRydWU7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIENTUzMgc3VwcG9ydCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cbnZhciBkb2NFbGVtU3R5bGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGU7XG5cbnZhciB0cmFuc2l0aW9uUHJvcGVydHkgPSB0eXBlb2YgZG9jRWxlbVN0eWxlLnRyYW5zaXRpb24gPT0gJ3N0cmluZycgP1xuICAndHJhbnNpdGlvbicgOiAnV2Via2l0VHJhbnNpdGlvbic7XG52YXIgdHJhbnNmb3JtUHJvcGVydHkgPSB0eXBlb2YgZG9jRWxlbVN0eWxlLnRyYW5zZm9ybSA9PSAnc3RyaW5nJyA/XG4gICd0cmFuc2Zvcm0nIDogJ1dlYmtpdFRyYW5zZm9ybSc7XG5cbnZhciB0cmFuc2l0aW9uRW5kRXZlbnQgPSB7XG4gIFdlYmtpdFRyYW5zaXRpb246ICd3ZWJraXRUcmFuc2l0aW9uRW5kJyxcbiAgdHJhbnNpdGlvbjogJ3RyYW5zaXRpb25lbmQnXG59WyB0cmFuc2l0aW9uUHJvcGVydHkgXTtcblxuLy8gY2FjaGUgYWxsIHZlbmRvciBwcm9wZXJ0aWVzIHRoYXQgY291bGQgaGF2ZSB2ZW5kb3IgcHJlZml4XG52YXIgdmVuZG9yUHJvcGVydGllcyA9IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2Zvcm1Qcm9wZXJ0eSxcbiAgdHJhbnNpdGlvbjogdHJhbnNpdGlvblByb3BlcnR5LFxuICB0cmFuc2l0aW9uRHVyYXRpb246IHRyYW5zaXRpb25Qcm9wZXJ0eSArICdEdXJhdGlvbicsXG4gIHRyYW5zaXRpb25Qcm9wZXJ0eTogdHJhbnNpdGlvblByb3BlcnR5ICsgJ1Byb3BlcnR5JyxcbiAgdHJhbnNpdGlvbkRlbGF5OiB0cmFuc2l0aW9uUHJvcGVydHkgKyAnRGVsYXknXG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBJdGVtIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbmZ1bmN0aW9uIEl0ZW0oIGVsZW1lbnQsIGxheW91dCApIHtcbiAgaWYgKCAhZWxlbWVudCApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAvLyBwYXJlbnQgbGF5b3V0IGNsYXNzLCBpLmUuIE1hc29ucnksIElzb3RvcGUsIG9yIFBhY2tlcnlcbiAgdGhpcy5sYXlvdXQgPSBsYXlvdXQ7XG4gIHRoaXMucG9zaXRpb24gPSB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH07XG5cbiAgdGhpcy5fY3JlYXRlKCk7XG59XG5cbi8vIGluaGVyaXQgRXZFbWl0dGVyXG52YXIgcHJvdG8gPSBJdGVtLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEV2RW1pdHRlci5wcm90b3R5cGUgKTtcbnByb3RvLmNvbnN0cnVjdG9yID0gSXRlbTtcblxucHJvdG8uX2NyZWF0ZSA9IGZ1bmN0aW9uKCkge1xuICAvLyB0cmFuc2l0aW9uIG9iamVjdHNcbiAgdGhpcy5fdHJhbnNuID0ge1xuICAgIGluZ1Byb3BlcnRpZXM6IHt9LFxuICAgIGNsZWFuOiB7fSxcbiAgICBvbkVuZDoge31cbiAgfTtcblxuICB0aGlzLmNzcyh7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbiAgfSk7XG59O1xuXG4vLyB0cmlnZ2VyIHNwZWNpZmllZCBoYW5kbGVyIGZvciBldmVudCB0eXBlXG5wcm90by5oYW5kbGVFdmVudCA9IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgdmFyIG1ldGhvZCA9ICdvbicgKyBldmVudC50eXBlO1xuICBpZiAoIHRoaXNbIG1ldGhvZCBdICkge1xuICAgIHRoaXNbIG1ldGhvZCBdKCBldmVudCApO1xuICB9XG59O1xuXG5wcm90by5nZXRTaXplID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuc2l6ZSA9IGdldFNpemUoIHRoaXMuZWxlbWVudCApO1xufTtcblxuLyoqXG4gKiBhcHBseSBDU1Mgc3R5bGVzIHRvIGVsZW1lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdHlsZVxuICovXG5wcm90by5jc3MgPSBmdW5jdGlvbiggc3R5bGUgKSB7XG4gIHZhciBlbGVtU3R5bGUgPSB0aGlzLmVsZW1lbnQuc3R5bGU7XG5cbiAgZm9yICggdmFyIHByb3AgaW4gc3R5bGUgKSB7XG4gICAgLy8gdXNlIHZlbmRvciBwcm9wZXJ0eSBpZiBhdmFpbGFibGVcbiAgICB2YXIgc3VwcG9ydGVkUHJvcCA9IHZlbmRvclByb3BlcnRpZXNbIHByb3AgXSB8fCBwcm9wO1xuICAgIGVsZW1TdHlsZVsgc3VwcG9ydGVkUHJvcCBdID0gc3R5bGVbIHByb3AgXTtcbiAgfVxufTtcblxuIC8vIG1lYXN1cmUgcG9zaXRpb24sIGFuZCBzZXRzIGl0XG5wcm90by5nZXRQb3NpdGlvbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKCB0aGlzLmVsZW1lbnQgKTtcbiAgdmFyIGlzT3JpZ2luTGVmdCA9IHRoaXMubGF5b3V0Ll9nZXRPcHRpb24oJ29yaWdpbkxlZnQnKTtcbiAgdmFyIGlzT3JpZ2luVG9wID0gdGhpcy5sYXlvdXQuX2dldE9wdGlvbignb3JpZ2luVG9wJyk7XG4gIHZhciB4VmFsdWUgPSBzdHlsZVsgaXNPcmlnaW5MZWZ0ID8gJ2xlZnQnIDogJ3JpZ2h0JyBdO1xuICB2YXIgeVZhbHVlID0gc3R5bGVbIGlzT3JpZ2luVG9wID8gJ3RvcCcgOiAnYm90dG9tJyBdO1xuICB2YXIgeCA9IHBhcnNlRmxvYXQoIHhWYWx1ZSApO1xuICB2YXIgeSA9IHBhcnNlRmxvYXQoIHlWYWx1ZSApO1xuICAvLyBjb252ZXJ0IHBlcmNlbnQgdG8gcGl4ZWxzXG4gIHZhciBsYXlvdXRTaXplID0gdGhpcy5sYXlvdXQuc2l6ZTtcbiAgaWYgKCB4VmFsdWUuaW5kZXhPZignJScpICE9IC0xICkge1xuICAgIHggPSAoIHggLyAxMDAgKSAqIGxheW91dFNpemUud2lkdGg7XG4gIH1cbiAgaWYgKCB5VmFsdWUuaW5kZXhPZignJScpICE9IC0xICkge1xuICAgIHkgPSAoIHkgLyAxMDAgKSAqIGxheW91dFNpemUuaGVpZ2h0O1xuICB9XG4gIC8vIGNsZWFuIHVwICdhdXRvJyBvciBvdGhlciBub24taW50ZWdlciB2YWx1ZXNcbiAgeCA9IGlzTmFOKCB4ICkgPyAwIDogeDtcbiAgeSA9IGlzTmFOKCB5ICkgPyAwIDogeTtcbiAgLy8gcmVtb3ZlIHBhZGRpbmcgZnJvbSBtZWFzdXJlbWVudFxuICB4IC09IGlzT3JpZ2luTGVmdCA/IGxheW91dFNpemUucGFkZGluZ0xlZnQgOiBsYXlvdXRTaXplLnBhZGRpbmdSaWdodDtcbiAgeSAtPSBpc09yaWdpblRvcCA/IGxheW91dFNpemUucGFkZGluZ1RvcCA6IGxheW91dFNpemUucGFkZGluZ0JvdHRvbTtcblxuICB0aGlzLnBvc2l0aW9uLnggPSB4O1xuICB0aGlzLnBvc2l0aW9uLnkgPSB5O1xufTtcblxuLy8gc2V0IHNldHRsZWQgcG9zaXRpb24sIGFwcGx5IHBhZGRpbmdcbnByb3RvLmxheW91dFBvc2l0aW9uID0gZnVuY3Rpb24oKSB7XG4gIHZhciBsYXlvdXRTaXplID0gdGhpcy5sYXlvdXQuc2l6ZTtcbiAgdmFyIHN0eWxlID0ge307XG4gIHZhciBpc09yaWdpbkxlZnQgPSB0aGlzLmxheW91dC5fZ2V0T3B0aW9uKCdvcmlnaW5MZWZ0Jyk7XG4gIHZhciBpc09yaWdpblRvcCA9IHRoaXMubGF5b3V0Ll9nZXRPcHRpb24oJ29yaWdpblRvcCcpO1xuXG4gIC8vIHhcbiAgdmFyIHhQYWRkaW5nID0gaXNPcmlnaW5MZWZ0ID8gJ3BhZGRpbmdMZWZ0JyA6ICdwYWRkaW5nUmlnaHQnO1xuICB2YXIgeFByb3BlcnR5ID0gaXNPcmlnaW5MZWZ0ID8gJ2xlZnQnIDogJ3JpZ2h0JztcbiAgdmFyIHhSZXNldFByb3BlcnR5ID0gaXNPcmlnaW5MZWZ0ID8gJ3JpZ2h0JyA6ICdsZWZ0JztcblxuICB2YXIgeCA9IHRoaXMucG9zaXRpb24ueCArIGxheW91dFNpemVbIHhQYWRkaW5nIF07XG4gIC8vIHNldCBpbiBwZXJjZW50YWdlIG9yIHBpeGVsc1xuICBzdHlsZVsgeFByb3BlcnR5IF0gPSB0aGlzLmdldFhWYWx1ZSggeCApO1xuICAvLyByZXNldCBvdGhlciBwcm9wZXJ0eVxuICBzdHlsZVsgeFJlc2V0UHJvcGVydHkgXSA9ICcnO1xuXG4gIC8vIHlcbiAgdmFyIHlQYWRkaW5nID0gaXNPcmlnaW5Ub3AgPyAncGFkZGluZ1RvcCcgOiAncGFkZGluZ0JvdHRvbSc7XG4gIHZhciB5UHJvcGVydHkgPSBpc09yaWdpblRvcCA/ICd0b3AnIDogJ2JvdHRvbSc7XG4gIHZhciB5UmVzZXRQcm9wZXJ0eSA9IGlzT3JpZ2luVG9wID8gJ2JvdHRvbScgOiAndG9wJztcblxuICB2YXIgeSA9IHRoaXMucG9zaXRpb24ueSArIGxheW91dFNpemVbIHlQYWRkaW5nIF07XG4gIC8vIHNldCBpbiBwZXJjZW50YWdlIG9yIHBpeGVsc1xuICBzdHlsZVsgeVByb3BlcnR5IF0gPSB0aGlzLmdldFlWYWx1ZSggeSApO1xuICAvLyByZXNldCBvdGhlciBwcm9wZXJ0eVxuICBzdHlsZVsgeVJlc2V0UHJvcGVydHkgXSA9ICcnO1xuXG4gIHRoaXMuY3NzKCBzdHlsZSApO1xuICB0aGlzLmVtaXRFdmVudCggJ2xheW91dCcsIFsgdGhpcyBdICk7XG59O1xuXG5wcm90by5nZXRYVmFsdWUgPSBmdW5jdGlvbiggeCApIHtcbiAgdmFyIGlzSG9yaXpvbnRhbCA9IHRoaXMubGF5b3V0Ll9nZXRPcHRpb24oJ2hvcml6b250YWwnKTtcbiAgcmV0dXJuIHRoaXMubGF5b3V0Lm9wdGlvbnMucGVyY2VudFBvc2l0aW9uICYmICFpc0hvcml6b250YWwgP1xuICAgICggKCB4IC8gdGhpcy5sYXlvdXQuc2l6ZS53aWR0aCApICogMTAwICkgKyAnJScgOiB4ICsgJ3B4Jztcbn07XG5cbnByb3RvLmdldFlWYWx1ZSA9IGZ1bmN0aW9uKCB5ICkge1xuICB2YXIgaXNIb3Jpem9udGFsID0gdGhpcy5sYXlvdXQuX2dldE9wdGlvbignaG9yaXpvbnRhbCcpO1xuICByZXR1cm4gdGhpcy5sYXlvdXQub3B0aW9ucy5wZXJjZW50UG9zaXRpb24gJiYgaXNIb3Jpem9udGFsID9cbiAgICAoICggeSAvIHRoaXMubGF5b3V0LnNpemUuaGVpZ2h0ICkgKiAxMDAgKSArICclJyA6IHkgKyAncHgnO1xufTtcblxucHJvdG8uX3RyYW5zaXRpb25UbyA9IGZ1bmN0aW9uKCB4LCB5ICkge1xuICB0aGlzLmdldFBvc2l0aW9uKCk7XG4gIC8vIGdldCBjdXJyZW50IHggJiB5IGZyb20gdG9wL2xlZnRcbiAgdmFyIGN1clggPSB0aGlzLnBvc2l0aW9uLng7XG4gIHZhciBjdXJZID0gdGhpcy5wb3NpdGlvbi55O1xuXG4gIHZhciBkaWROb3RNb3ZlID0geCA9PSB0aGlzLnBvc2l0aW9uLnggJiYgeSA9PSB0aGlzLnBvc2l0aW9uLnk7XG5cbiAgLy8gc2F2ZSBlbmQgcG9zaXRpb25cbiAgdGhpcy5zZXRQb3NpdGlvbiggeCwgeSApO1xuXG4gIC8vIGlmIGRpZCBub3QgbW92ZSBhbmQgbm90IHRyYW5zaXRpb25pbmcsIGp1c3QgZ28gdG8gbGF5b3V0XG4gIGlmICggZGlkTm90TW92ZSAmJiAhdGhpcy5pc1RyYW5zaXRpb25pbmcgKSB7XG4gICAgdGhpcy5sYXlvdXRQb3NpdGlvbigpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciB0cmFuc1ggPSB4IC0gY3VyWDtcbiAgdmFyIHRyYW5zWSA9IHkgLSBjdXJZO1xuICB2YXIgdHJhbnNpdGlvblN0eWxlID0ge307XG4gIHRyYW5zaXRpb25TdHlsZS50cmFuc2Zvcm0gPSB0aGlzLmdldFRyYW5zbGF0ZSggdHJhbnNYLCB0cmFuc1kgKTtcblxuICB0aGlzLnRyYW5zaXRpb24oe1xuICAgIHRvOiB0cmFuc2l0aW9uU3R5bGUsXG4gICAgb25UcmFuc2l0aW9uRW5kOiB7XG4gICAgICB0cmFuc2Zvcm06IHRoaXMubGF5b3V0UG9zaXRpb25cbiAgICB9LFxuICAgIGlzQ2xlYW5pbmc6IHRydWVcbiAgfSk7XG59O1xuXG5wcm90by5nZXRUcmFuc2xhdGUgPSBmdW5jdGlvbiggeCwgeSApIHtcbiAgLy8gZmxpcCBjb29yaWRpbmF0ZXMgaWYgb3JpZ2luIG9uIHJpZ2h0IG9yIGJvdHRvbVxuICB2YXIgaXNPcmlnaW5MZWZ0ID0gdGhpcy5sYXlvdXQuX2dldE9wdGlvbignb3JpZ2luTGVmdCcpO1xuICB2YXIgaXNPcmlnaW5Ub3AgPSB0aGlzLmxheW91dC5fZ2V0T3B0aW9uKCdvcmlnaW5Ub3AnKTtcbiAgeCA9IGlzT3JpZ2luTGVmdCA/IHggOiAteDtcbiAgeSA9IGlzT3JpZ2luVG9wID8geSA6IC15O1xuICByZXR1cm4gJ3RyYW5zbGF0ZTNkKCcgKyB4ICsgJ3B4LCAnICsgeSArICdweCwgMCknO1xufTtcblxuLy8gbm9uIHRyYW5zaXRpb24gKyB0cmFuc2Zvcm0gc3VwcG9ydFxucHJvdG8uZ29UbyA9IGZ1bmN0aW9uKCB4LCB5ICkge1xuICB0aGlzLnNldFBvc2l0aW9uKCB4LCB5ICk7XG4gIHRoaXMubGF5b3V0UG9zaXRpb24oKTtcbn07XG5cbnByb3RvLm1vdmVUbyA9IHByb3RvLl90cmFuc2l0aW9uVG87XG5cbnByb3RvLnNldFBvc2l0aW9uID0gZnVuY3Rpb24oIHgsIHkgKSB7XG4gIHRoaXMucG9zaXRpb24ueCA9IHBhcnNlRmxvYXQoIHggKTtcbiAgdGhpcy5wb3NpdGlvbi55ID0gcGFyc2VGbG9hdCggeSApO1xufTtcblxuLy8gLS0tLS0gdHJhbnNpdGlvbiAtLS0tLSAvL1xuXG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdHlsZSAtIENTU1xuICogQHBhcmFtIHtGdW5jdGlvbn0gb25UcmFuc2l0aW9uRW5kXG4gKi9cblxuLy8gbm9uIHRyYW5zaXRpb24sIGp1c3QgdHJpZ2dlciBjYWxsYmFja1xucHJvdG8uX25vblRyYW5zaXRpb24gPSBmdW5jdGlvbiggYXJncyApIHtcbiAgdGhpcy5jc3MoIGFyZ3MudG8gKTtcbiAgaWYgKCBhcmdzLmlzQ2xlYW5pbmcgKSB7XG4gICAgdGhpcy5fcmVtb3ZlU3R5bGVzKCBhcmdzLnRvICk7XG4gIH1cbiAgZm9yICggdmFyIHByb3AgaW4gYXJncy5vblRyYW5zaXRpb25FbmQgKSB7XG4gICAgYXJncy5vblRyYW5zaXRpb25FbmRbIHByb3AgXS5jYWxsKCB0aGlzICk7XG4gIH1cbn07XG5cbi8qKlxuICogcHJvcGVyIHRyYW5zaXRpb25cbiAqIEBwYXJhbSB7T2JqZWN0fSBhcmdzIC0gYXJndW1lbnRzXG4gKiAgIEBwYXJhbSB7T2JqZWN0fSB0byAtIHN0eWxlIHRvIHRyYW5zaXRpb24gdG9cbiAqICAgQHBhcmFtIHtPYmplY3R9IGZyb20gLSBzdHlsZSB0byBzdGFydCB0cmFuc2l0aW9uIGZyb21cbiAqICAgQHBhcmFtIHtCb29sZWFufSBpc0NsZWFuaW5nIC0gcmVtb3ZlcyB0cmFuc2l0aW9uIHN0eWxlcyBhZnRlciB0cmFuc2l0aW9uXG4gKiAgIEBwYXJhbSB7RnVuY3Rpb259IG9uVHJhbnNpdGlvbkVuZCAtIGNhbGxiYWNrXG4gKi9cbnByb3RvLnRyYW5zaXRpb24gPSBmdW5jdGlvbiggYXJncyApIHtcbiAgLy8gcmVkaXJlY3QgdG8gbm9uVHJhbnNpdGlvbiBpZiBubyB0cmFuc2l0aW9uIGR1cmF0aW9uXG4gIGlmICggIXBhcnNlRmxvYXQoIHRoaXMubGF5b3V0Lm9wdGlvbnMudHJhbnNpdGlvbkR1cmF0aW9uICkgKSB7XG4gICAgdGhpcy5fbm9uVHJhbnNpdGlvbiggYXJncyApO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBfdHJhbnNpdGlvbiA9IHRoaXMuX3RyYW5zbjtcbiAgLy8ga2VlcCB0cmFjayBvZiBvblRyYW5zaXRpb25FbmQgY2FsbGJhY2sgYnkgY3NzIHByb3BlcnR5XG4gIGZvciAoIHZhciBwcm9wIGluIGFyZ3Mub25UcmFuc2l0aW9uRW5kICkge1xuICAgIF90cmFuc2l0aW9uLm9uRW5kWyBwcm9wIF0gPSBhcmdzLm9uVHJhbnNpdGlvbkVuZFsgcHJvcCBdO1xuICB9XG4gIC8vIGtlZXAgdHJhY2sgb2YgcHJvcGVydGllcyB0aGF0IGFyZSB0cmFuc2l0aW9uaW5nXG4gIGZvciAoIHByb3AgaW4gYXJncy50byApIHtcbiAgICBfdHJhbnNpdGlvbi5pbmdQcm9wZXJ0aWVzWyBwcm9wIF0gPSB0cnVlO1xuICAgIC8vIGtlZXAgdHJhY2sgb2YgcHJvcGVydGllcyB0byBjbGVhbiB1cCB3aGVuIHRyYW5zaXRpb24gaXMgZG9uZVxuICAgIGlmICggYXJncy5pc0NsZWFuaW5nICkge1xuICAgICAgX3RyYW5zaXRpb24uY2xlYW5bIHByb3AgXSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgLy8gc2V0IGZyb20gc3R5bGVzXG4gIGlmICggYXJncy5mcm9tICkge1xuICAgIHRoaXMuY3NzKCBhcmdzLmZyb20gKTtcbiAgICAvLyBmb3JjZSByZWRyYXcuIGh0dHA6Ly9ibG9nLmFsZXhtYWNjYXcuY29tL2Nzcy10cmFuc2l0aW9uc1xuICAgIHZhciBoID0gdGhpcy5lbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAvLyBoYWNrIGZvciBKU0hpbnQgdG8gaHVzaCBhYm91dCB1bnVzZWQgdmFyXG4gICAgaCA9IG51bGw7XG4gIH1cbiAgLy8gZW5hYmxlIHRyYW5zaXRpb25cbiAgdGhpcy5lbmFibGVUcmFuc2l0aW9uKCBhcmdzLnRvICk7XG4gIC8vIHNldCBzdHlsZXMgdGhhdCBhcmUgdHJhbnNpdGlvbmluZ1xuICB0aGlzLmNzcyggYXJncy50byApO1xuXG4gIHRoaXMuaXNUcmFuc2l0aW9uaW5nID0gdHJ1ZTtcblxufTtcblxuLy8gZGFzaCBiZWZvcmUgYWxsIGNhcCBsZXR0ZXJzLCBpbmNsdWRpbmcgZmlyc3QgZm9yXG4vLyBXZWJraXRUcmFuc2Zvcm0gPT4gLXdlYmtpdC10cmFuc2Zvcm1cbmZ1bmN0aW9uIHRvRGFzaGVkQWxsKCBzdHIgKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSggLyhbQS1aXSkvZywgZnVuY3Rpb24oICQxICkge1xuICAgIHJldHVybiAnLScgKyAkMS50b0xvd2VyQ2FzZSgpO1xuICB9KTtcbn1cblxudmFyIHRyYW5zaXRpb25Qcm9wcyA9ICdvcGFjaXR5LCcgKyB0b0Rhc2hlZEFsbCggdHJhbnNmb3JtUHJvcGVydHkgKTtcblxucHJvdG8uZW5hYmxlVHJhbnNpdGlvbiA9IGZ1bmN0aW9uKC8qIHN0eWxlICovKSB7XG4gIC8vIEhBQ0sgY2hhbmdpbmcgdHJhbnNpdGlvblByb3BlcnR5IGR1cmluZyBhIHRyYW5zaXRpb25cbiAgLy8gd2lsbCBjYXVzZSB0cmFuc2l0aW9uIHRvIGp1bXBcbiAgaWYgKCB0aGlzLmlzVHJhbnNpdGlvbmluZyApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBtYWtlIGB0cmFuc2l0aW9uOiBmb28sIGJhciwgYmF6YCBmcm9tIHN0eWxlIG9iamVjdFxuICAvLyBIQUNLIHVuLWNvbW1lbnQgdGhpcyB3aGVuIGVuYWJsZVRyYW5zaXRpb24gY2FuIHdvcmtcbiAgLy8gd2hpbGUgYSB0cmFuc2l0aW9uIGlzIGhhcHBlbmluZ1xuICAvLyB2YXIgdHJhbnNpdGlvblZhbHVlcyA9IFtdO1xuICAvLyBmb3IgKCB2YXIgcHJvcCBpbiBzdHlsZSApIHtcbiAgLy8gICAvLyBkYXNoLWlmeSBjYW1lbENhc2VkIHByb3BlcnRpZXMgbGlrZSBXZWJraXRUcmFuc2l0aW9uXG4gIC8vICAgcHJvcCA9IHZlbmRvclByb3BlcnRpZXNbIHByb3AgXSB8fCBwcm9wO1xuICAvLyAgIHRyYW5zaXRpb25WYWx1ZXMucHVzaCggdG9EYXNoZWRBbGwoIHByb3AgKSApO1xuICAvLyB9XG4gIC8vIG11bmdlIG51bWJlciB0byBtaWxsaXNlY29uZCwgdG8gbWF0Y2ggc3RhZ2dlclxuICB2YXIgZHVyYXRpb24gPSB0aGlzLmxheW91dC5vcHRpb25zLnRyYW5zaXRpb25EdXJhdGlvbjtcbiAgZHVyYXRpb24gPSB0eXBlb2YgZHVyYXRpb24gPT0gJ251bWJlcicgPyBkdXJhdGlvbiArICdtcycgOiBkdXJhdGlvbjtcbiAgLy8gZW5hYmxlIHRyYW5zaXRpb24gc3R5bGVzXG4gIHRoaXMuY3NzKHtcbiAgICB0cmFuc2l0aW9uUHJvcGVydHk6IHRyYW5zaXRpb25Qcm9wcyxcbiAgICB0cmFuc2l0aW9uRHVyYXRpb246IGR1cmF0aW9uLFxuICAgIHRyYW5zaXRpb25EZWxheTogdGhpcy5zdGFnZ2VyRGVsYXkgfHwgMFxuICB9KTtcbiAgLy8gbGlzdGVuIGZvciB0cmFuc2l0aW9uIGVuZCBldmVudFxuICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggdHJhbnNpdGlvbkVuZEV2ZW50LCB0aGlzLCBmYWxzZSApO1xufTtcblxuLy8gLS0tLS0gZXZlbnRzIC0tLS0tIC8vXG5cbnByb3RvLm9ud2Via2l0VHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgdGhpcy5vbnRyYW5zaXRpb25lbmQoIGV2ZW50ICk7XG59O1xuXG5wcm90by5vbm90cmFuc2l0aW9uZW5kID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICB0aGlzLm9udHJhbnNpdGlvbmVuZCggZXZlbnQgKTtcbn07XG5cbi8vIHByb3BlcnRpZXMgdGhhdCBJIG11bmdlIHRvIG1ha2UgbXkgbGlmZSBlYXNpZXJcbnZhciBkYXNoZWRWZW5kb3JQcm9wZXJ0aWVzID0ge1xuICAnLXdlYmtpdC10cmFuc2Zvcm0nOiAndHJhbnNmb3JtJ1xufTtcblxucHJvdG8ub250cmFuc2l0aW9uZW5kID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICAvLyBkaXNyZWdhcmQgYnViYmxlZCBldmVudHMgZnJvbSBjaGlsZHJlblxuICBpZiAoIGV2ZW50LnRhcmdldCAhPT0gdGhpcy5lbGVtZW50ICkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgX3RyYW5zaXRpb24gPSB0aGlzLl90cmFuc247XG4gIC8vIGdldCBwcm9wZXJ0eSBuYW1lIG9mIHRyYW5zaXRpb25lZCBwcm9wZXJ0eSwgY29udmVydCB0byBwcmVmaXgtZnJlZVxuICB2YXIgcHJvcGVydHlOYW1lID0gZGFzaGVkVmVuZG9yUHJvcGVydGllc1sgZXZlbnQucHJvcGVydHlOYW1lIF0gfHwgZXZlbnQucHJvcGVydHlOYW1lO1xuXG4gIC8vIHJlbW92ZSBwcm9wZXJ0eSB0aGF0IGhhcyBjb21wbGV0ZWQgdHJhbnNpdGlvbmluZ1xuICBkZWxldGUgX3RyYW5zaXRpb24uaW5nUHJvcGVydGllc1sgcHJvcGVydHlOYW1lIF07XG4gIC8vIGNoZWNrIGlmIGFueSBwcm9wZXJ0aWVzIGFyZSBzdGlsbCB0cmFuc2l0aW9uaW5nXG4gIGlmICggaXNFbXB0eU9iaiggX3RyYW5zaXRpb24uaW5nUHJvcGVydGllcyApICkge1xuICAgIC8vIGFsbCBwcm9wZXJ0aWVzIGhhdmUgY29tcGxldGVkIHRyYW5zaXRpb25pbmdcbiAgICB0aGlzLmRpc2FibGVUcmFuc2l0aW9uKCk7XG4gIH1cbiAgLy8gY2xlYW4gc3R5bGVcbiAgaWYgKCBwcm9wZXJ0eU5hbWUgaW4gX3RyYW5zaXRpb24uY2xlYW4gKSB7XG4gICAgLy8gY2xlYW4gdXAgc3R5bGVcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGVbIGV2ZW50LnByb3BlcnR5TmFtZSBdID0gJyc7XG4gICAgZGVsZXRlIF90cmFuc2l0aW9uLmNsZWFuWyBwcm9wZXJ0eU5hbWUgXTtcbiAgfVxuICAvLyB0cmlnZ2VyIG9uVHJhbnNpdGlvbkVuZCBjYWxsYmFja1xuICBpZiAoIHByb3BlcnR5TmFtZSBpbiBfdHJhbnNpdGlvbi5vbkVuZCApIHtcbiAgICB2YXIgb25UcmFuc2l0aW9uRW5kID0gX3RyYW5zaXRpb24ub25FbmRbIHByb3BlcnR5TmFtZSBdO1xuICAgIG9uVHJhbnNpdGlvbkVuZC5jYWxsKCB0aGlzICk7XG4gICAgZGVsZXRlIF90cmFuc2l0aW9uLm9uRW5kWyBwcm9wZXJ0eU5hbWUgXTtcbiAgfVxuXG4gIHRoaXMuZW1pdEV2ZW50KCAndHJhbnNpdGlvbkVuZCcsIFsgdGhpcyBdICk7XG59O1xuXG5wcm90by5kaXNhYmxlVHJhbnNpdGlvbiA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnJlbW92ZVRyYW5zaXRpb25TdHlsZXMoKTtcbiAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoIHRyYW5zaXRpb25FbmRFdmVudCwgdGhpcywgZmFsc2UgKTtcbiAgdGhpcy5pc1RyYW5zaXRpb25pbmcgPSBmYWxzZTtcbn07XG5cbi8qKlxuICogcmVtb3ZlcyBzdHlsZSBwcm9wZXJ0eSBmcm9tIGVsZW1lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdHlsZVxuKiovXG5wcm90by5fcmVtb3ZlU3R5bGVzID0gZnVuY3Rpb24oIHN0eWxlICkge1xuICAvLyBjbGVhbiB1cCB0cmFuc2l0aW9uIHN0eWxlc1xuICB2YXIgY2xlYW5TdHlsZSA9IHt9O1xuICBmb3IgKCB2YXIgcHJvcCBpbiBzdHlsZSApIHtcbiAgICBjbGVhblN0eWxlWyBwcm9wIF0gPSAnJztcbiAgfVxuICB0aGlzLmNzcyggY2xlYW5TdHlsZSApO1xufTtcblxudmFyIGNsZWFuVHJhbnNpdGlvblN0eWxlID0ge1xuICB0cmFuc2l0aW9uUHJvcGVydHk6ICcnLFxuICB0cmFuc2l0aW9uRHVyYXRpb246ICcnLFxuICB0cmFuc2l0aW9uRGVsYXk6ICcnXG59O1xuXG5wcm90by5yZW1vdmVUcmFuc2l0aW9uU3R5bGVzID0gZnVuY3Rpb24oKSB7XG4gIC8vIHJlbW92ZSB0cmFuc2l0aW9uXG4gIHRoaXMuY3NzKCBjbGVhblRyYW5zaXRpb25TdHlsZSApO1xufTtcblxuLy8gLS0tLS0gc3RhZ2dlciAtLS0tLSAvL1xuXG5wcm90by5zdGFnZ2VyID0gZnVuY3Rpb24oIGRlbGF5ICkge1xuICBkZWxheSA9IGlzTmFOKCBkZWxheSApID8gMCA6IGRlbGF5O1xuICB0aGlzLnN0YWdnZXJEZWxheSA9IGRlbGF5ICsgJ21zJztcbn07XG5cbi8vIC0tLS0tIHNob3cvaGlkZS9yZW1vdmUgLS0tLS0gLy9cblxuLy8gcmVtb3ZlIGVsZW1lbnQgZnJvbSBET01cbnByb3RvLnJlbW92ZUVsZW0gPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoIHRoaXMuZWxlbWVudCApO1xuICAvLyByZW1vdmUgZGlzcGxheTogbm9uZVxuICB0aGlzLmNzcyh7IGRpc3BsYXk6ICcnIH0pO1xuICB0aGlzLmVtaXRFdmVudCggJ3JlbW92ZScsIFsgdGhpcyBdICk7XG59O1xuXG5wcm90by5yZW1vdmUgPSBmdW5jdGlvbigpIHtcbiAgLy8ganVzdCByZW1vdmUgZWxlbWVudCBpZiBubyB0cmFuc2l0aW9uIHN1cHBvcnQgb3Igbm8gdHJhbnNpdGlvblxuICBpZiAoICF0cmFuc2l0aW9uUHJvcGVydHkgfHwgIXBhcnNlRmxvYXQoIHRoaXMubGF5b3V0Lm9wdGlvbnMudHJhbnNpdGlvbkR1cmF0aW9uICkgKSB7XG4gICAgdGhpcy5yZW1vdmVFbGVtKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gc3RhcnQgdHJhbnNpdGlvblxuICB0aGlzLm9uY2UoICd0cmFuc2l0aW9uRW5kJywgZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5yZW1vdmVFbGVtKCk7XG4gIH0pO1xuICB0aGlzLmhpZGUoKTtcbn07XG5cbnByb3RvLnJldmVhbCA9IGZ1bmN0aW9uKCkge1xuICBkZWxldGUgdGhpcy5pc0hpZGRlbjtcbiAgLy8gcmVtb3ZlIGRpc3BsYXk6IG5vbmVcbiAgdGhpcy5jc3MoeyBkaXNwbGF5OiAnJyB9KTtcblxuICB2YXIgb3B0aW9ucyA9IHRoaXMubGF5b3V0Lm9wdGlvbnM7XG5cbiAgdmFyIG9uVHJhbnNpdGlvbkVuZCA9IHt9O1xuICB2YXIgdHJhbnNpdGlvbkVuZFByb3BlcnR5ID0gdGhpcy5nZXRIaWRlUmV2ZWFsVHJhbnNpdGlvbkVuZFByb3BlcnR5KCd2aXNpYmxlU3R5bGUnKTtcbiAgb25UcmFuc2l0aW9uRW5kWyB0cmFuc2l0aW9uRW5kUHJvcGVydHkgXSA9IHRoaXMub25SZXZlYWxUcmFuc2l0aW9uRW5kO1xuXG4gIHRoaXMudHJhbnNpdGlvbih7XG4gICAgZnJvbTogb3B0aW9ucy5oaWRkZW5TdHlsZSxcbiAgICB0bzogb3B0aW9ucy52aXNpYmxlU3R5bGUsXG4gICAgaXNDbGVhbmluZzogdHJ1ZSxcbiAgICBvblRyYW5zaXRpb25FbmQ6IG9uVHJhbnNpdGlvbkVuZFxuICB9KTtcbn07XG5cbnByb3RvLm9uUmV2ZWFsVHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uKCkge1xuICAvLyBjaGVjayBpZiBzdGlsbCB2aXNpYmxlXG4gIC8vIGR1cmluZyB0cmFuc2l0aW9uLCBpdGVtIG1heSBoYXZlIGJlZW4gaGlkZGVuXG4gIGlmICggIXRoaXMuaXNIaWRkZW4gKSB7XG4gICAgdGhpcy5lbWl0RXZlbnQoJ3JldmVhbCcpO1xuICB9XG59O1xuXG4vKipcbiAqIGdldCBzdHlsZSBwcm9wZXJ0eSB1c2UgZm9yIGhpZGUvcmV2ZWFsIHRyYW5zaXRpb24gZW5kXG4gKiBAcGFyYW0ge1N0cmluZ30gc3R5bGVQcm9wZXJ0eSAtIGhpZGRlblN0eWxlL3Zpc2libGVTdHlsZVxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xucHJvdG8uZ2V0SGlkZVJldmVhbFRyYW5zaXRpb25FbmRQcm9wZXJ0eSA9IGZ1bmN0aW9uKCBzdHlsZVByb3BlcnR5ICkge1xuICB2YXIgb3B0aW9uU3R5bGUgPSB0aGlzLmxheW91dC5vcHRpb25zWyBzdHlsZVByb3BlcnR5IF07XG4gIC8vIHVzZSBvcGFjaXR5XG4gIGlmICggb3B0aW9uU3R5bGUub3BhY2l0eSApIHtcbiAgICByZXR1cm4gJ29wYWNpdHknO1xuICB9XG4gIC8vIGdldCBmaXJzdCBwcm9wZXJ0eVxuICBmb3IgKCB2YXIgcHJvcCBpbiBvcHRpb25TdHlsZSApIHtcbiAgICByZXR1cm4gcHJvcDtcbiAgfVxufTtcblxucHJvdG8uaGlkZSA9IGZ1bmN0aW9uKCkge1xuICAvLyBzZXQgZmxhZ1xuICB0aGlzLmlzSGlkZGVuID0gdHJ1ZTtcbiAgLy8gcmVtb3ZlIGRpc3BsYXk6IG5vbmVcbiAgdGhpcy5jc3MoeyBkaXNwbGF5OiAnJyB9KTtcblxuICB2YXIgb3B0aW9ucyA9IHRoaXMubGF5b3V0Lm9wdGlvbnM7XG5cbiAgdmFyIG9uVHJhbnNpdGlvbkVuZCA9IHt9O1xuICB2YXIgdHJhbnNpdGlvbkVuZFByb3BlcnR5ID0gdGhpcy5nZXRIaWRlUmV2ZWFsVHJhbnNpdGlvbkVuZFByb3BlcnR5KCdoaWRkZW5TdHlsZScpO1xuICBvblRyYW5zaXRpb25FbmRbIHRyYW5zaXRpb25FbmRQcm9wZXJ0eSBdID0gdGhpcy5vbkhpZGVUcmFuc2l0aW9uRW5kO1xuXG4gIHRoaXMudHJhbnNpdGlvbih7XG4gICAgZnJvbTogb3B0aW9ucy52aXNpYmxlU3R5bGUsXG4gICAgdG86IG9wdGlvbnMuaGlkZGVuU3R5bGUsXG4gICAgLy8ga2VlcCBoaWRkZW4gc3R1ZmYgaGlkZGVuXG4gICAgaXNDbGVhbmluZzogdHJ1ZSxcbiAgICBvblRyYW5zaXRpb25FbmQ6IG9uVHJhbnNpdGlvbkVuZFxuICB9KTtcbn07XG5cbnByb3RvLm9uSGlkZVRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbigpIHtcbiAgLy8gY2hlY2sgaWYgc3RpbGwgaGlkZGVuXG4gIC8vIGR1cmluZyB0cmFuc2l0aW9uLCBpdGVtIG1heSBoYXZlIGJlZW4gdW4taGlkZGVuXG4gIGlmICggdGhpcy5pc0hpZGRlbiApIHtcbiAgICB0aGlzLmNzcyh7IGRpc3BsYXk6ICdub25lJyB9KTtcbiAgICB0aGlzLmVtaXRFdmVudCgnaGlkZScpO1xuICB9XG59O1xuXG5wcm90by5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuY3NzKHtcbiAgICBwb3NpdGlvbjogJycsXG4gICAgbGVmdDogJycsXG4gICAgcmlnaHQ6ICcnLFxuICAgIHRvcDogJycsXG4gICAgYm90dG9tOiAnJyxcbiAgICB0cmFuc2l0aW9uOiAnJyxcbiAgICB0cmFuc2Zvcm06ICcnXG4gIH0pO1xufTtcblxucmV0dXJuIEl0ZW07XG5cbn0pKTtcbiIsIi8qKlxuICogRXZFbWl0dGVyIHYxLjEuMFxuICogTGlsJyBldmVudCBlbWl0dGVyXG4gKiBNSVQgTGljZW5zZVxuICovXG5cbi8qIGpzaGludCB1bnVzZWQ6IHRydWUsIHVuZGVmOiB0cnVlLCBzdHJpY3Q6IHRydWUgKi9cblxuKCBmdW5jdGlvbiggZ2xvYmFsLCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgLyoganNoaW50IHN0cmljdDogZmFsc2UgKi8gLyogZ2xvYmFscyBkZWZpbmUsIG1vZHVsZSwgd2luZG93ICovXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EIC0gUmVxdWlyZUpTXG4gICAgZGVmaW5lKCBmYWN0b3J5ICk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlMgLSBCcm93c2VyaWZ5LCBXZWJwYWNrXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gQnJvd3NlciBnbG9iYWxzXG4gICAgZ2xvYmFsLkV2RW1pdHRlciA9IGZhY3RvcnkoKTtcbiAgfVxuXG59KCB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnID8gd2luZG93IDogdGhpcywgZnVuY3Rpb24oKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBFdkVtaXR0ZXIoKSB7fVxuXG52YXIgcHJvdG8gPSBFdkVtaXR0ZXIucHJvdG90eXBlO1xuXG5wcm90by5vbiA9IGZ1bmN0aW9uKCBldmVudE5hbWUsIGxpc3RlbmVyICkge1xuICBpZiAoICFldmVudE5hbWUgfHwgIWxpc3RlbmVyICkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBzZXQgZXZlbnRzIGhhc2hcbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cyA9IHRoaXMuX2V2ZW50cyB8fCB7fTtcbiAgLy8gc2V0IGxpc3RlbmVycyBhcnJheVxuICB2YXIgbGlzdGVuZXJzID0gZXZlbnRzWyBldmVudE5hbWUgXSA9IGV2ZW50c1sgZXZlbnROYW1lIF0gfHwgW107XG4gIC8vIG9ubHkgYWRkIG9uY2VcbiAgaWYgKCBsaXN0ZW5lcnMuaW5kZXhPZiggbGlzdGVuZXIgKSA9PSAtMSApIHtcbiAgICBsaXN0ZW5lcnMucHVzaCggbGlzdGVuZXIgKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxucHJvdG8ub25jZSA9IGZ1bmN0aW9uKCBldmVudE5hbWUsIGxpc3RlbmVyICkge1xuICBpZiAoICFldmVudE5hbWUgfHwgIWxpc3RlbmVyICkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBhZGQgZXZlbnRcbiAgdGhpcy5vbiggZXZlbnROYW1lLCBsaXN0ZW5lciApO1xuICAvLyBzZXQgb25jZSBmbGFnXG4gIC8vIHNldCBvbmNlRXZlbnRzIGhhc2hcbiAgdmFyIG9uY2VFdmVudHMgPSB0aGlzLl9vbmNlRXZlbnRzID0gdGhpcy5fb25jZUV2ZW50cyB8fCB7fTtcbiAgLy8gc2V0IG9uY2VMaXN0ZW5lcnMgb2JqZWN0XG4gIHZhciBvbmNlTGlzdGVuZXJzID0gb25jZUV2ZW50c1sgZXZlbnROYW1lIF0gPSBvbmNlRXZlbnRzWyBldmVudE5hbWUgXSB8fCB7fTtcbiAgLy8gc2V0IGZsYWdcbiAgb25jZUxpc3RlbmVyc1sgbGlzdGVuZXIgXSA9IHRydWU7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5wcm90by5vZmYgPSBmdW5jdGlvbiggZXZlbnROYW1lLCBsaXN0ZW5lciApIHtcbiAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50cyAmJiB0aGlzLl9ldmVudHNbIGV2ZW50TmFtZSBdO1xuICBpZiAoICFsaXN0ZW5lcnMgfHwgIWxpc3RlbmVycy5sZW5ndGggKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBpbmRleCA9IGxpc3RlbmVycy5pbmRleE9mKCBsaXN0ZW5lciApO1xuICBpZiAoIGluZGV4ICE9IC0xICkge1xuICAgIGxpc3RlbmVycy5zcGxpY2UoIGluZGV4LCAxICk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbnByb3RvLmVtaXRFdmVudCA9IGZ1bmN0aW9uKCBldmVudE5hbWUsIGFyZ3MgKSB7XG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHMgJiYgdGhpcy5fZXZlbnRzWyBldmVudE5hbWUgXTtcbiAgaWYgKCAhbGlzdGVuZXJzIHx8ICFsaXN0ZW5lcnMubGVuZ3RoICkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBjb3B5IG92ZXIgdG8gYXZvaWQgaW50ZXJmZXJlbmNlIGlmIC5vZmYoKSBpbiBsaXN0ZW5lclxuICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuc2xpY2UoMCk7XG4gIGFyZ3MgPSBhcmdzIHx8IFtdO1xuICAvLyBvbmNlIHN0dWZmXG4gIHZhciBvbmNlTGlzdGVuZXJzID0gdGhpcy5fb25jZUV2ZW50cyAmJiB0aGlzLl9vbmNlRXZlbnRzWyBldmVudE5hbWUgXTtcblxuICBmb3IgKCB2YXIgaT0wOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrICkge1xuICAgIHZhciBsaXN0ZW5lciA9IGxpc3RlbmVyc1tpXVxuICAgIHZhciBpc09uY2UgPSBvbmNlTGlzdGVuZXJzICYmIG9uY2VMaXN0ZW5lcnNbIGxpc3RlbmVyIF07XG4gICAgaWYgKCBpc09uY2UgKSB7XG4gICAgICAvLyByZW1vdmUgbGlzdGVuZXJcbiAgICAgIC8vIHJlbW92ZSBiZWZvcmUgdHJpZ2dlciB0byBwcmV2ZW50IHJlY3Vyc2lvblxuICAgICAgdGhpcy5vZmYoIGV2ZW50TmFtZSwgbGlzdGVuZXIgKTtcbiAgICAgIC8vIHVuc2V0IG9uY2UgZmxhZ1xuICAgICAgZGVsZXRlIG9uY2VMaXN0ZW5lcnNbIGxpc3RlbmVyIF07XG4gICAgfVxuICAgIC8vIHRyaWdnZXIgbGlzdGVuZXJcbiAgICBsaXN0ZW5lci5hcHBseSggdGhpcywgYXJncyApO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5wcm90by5hbGxPZmYgPSBmdW5jdGlvbigpIHtcbiAgZGVsZXRlIHRoaXMuX2V2ZW50cztcbiAgZGVsZXRlIHRoaXMuX29uY2VFdmVudHM7XG59O1xuXG5yZXR1cm4gRXZFbWl0dGVyO1xuXG59KSk7XG4iLCIvKiFcbiAqIE91dGxheWVyIHYyLjEuMVxuICogdGhlIGJyYWlucyBhbmQgZ3V0cyBvZiBhIGxheW91dCBsaWJyYXJ5XG4gKiBNSVQgbGljZW5zZVxuICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgLyoganNoaW50IHN0cmljdDogZmFsc2UgKi8gLyogZ2xvYmFscyBkZWZpbmUsIG1vZHVsZSwgcmVxdWlyZSAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRCAtIFJlcXVpcmVKU1xuICAgIGRlZmluZSggW1xuICAgICAgICAnZXYtZW1pdHRlci9ldi1lbWl0dGVyJyxcbiAgICAgICAgJ2dldC1zaXplL2dldC1zaXplJyxcbiAgICAgICAgJ2Zpenp5LXVpLXV0aWxzL3V0aWxzJyxcbiAgICAgICAgJy4vaXRlbSdcbiAgICAgIF0sXG4gICAgICBmdW5jdGlvbiggRXZFbWl0dGVyLCBnZXRTaXplLCB1dGlscywgSXRlbSApIHtcbiAgICAgICAgcmV0dXJuIGZhY3RvcnkoIHdpbmRvdywgRXZFbWl0dGVyLCBnZXRTaXplLCB1dGlscywgSXRlbSk7XG4gICAgICB9XG4gICAgKTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KUyAtIEJyb3dzZXJpZnksIFdlYnBhY2tcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICByZXF1aXJlKCdldi1lbWl0dGVyJyksXG4gICAgICByZXF1aXJlKCdnZXQtc2l6ZScpLFxuICAgICAgcmVxdWlyZSgnZml6enktdWktdXRpbHMnKSxcbiAgICAgIHJlcXVpcmUoJy4vaXRlbScpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIHdpbmRvdy5PdXRsYXllciA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICB3aW5kb3cuRXZFbWl0dGVyLFxuICAgICAgd2luZG93LmdldFNpemUsXG4gICAgICB3aW5kb3cuZml6enlVSVV0aWxzLFxuICAgICAgd2luZG93Lk91dGxheWVyLkl0ZW1cbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggd2luZG93LCBFdkVtaXR0ZXIsIGdldFNpemUsIHV0aWxzLCBJdGVtICkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyAtLS0tLSB2YXJzIC0tLS0tIC8vXG5cbnZhciBjb25zb2xlID0gd2luZG93LmNvbnNvbGU7XG52YXIgalF1ZXJ5ID0gd2luZG93LmpRdWVyeTtcbnZhciBub29wID0gZnVuY3Rpb24oKSB7fTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gT3V0bGF5ZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLy8gZ2xvYmFsbHkgdW5pcXVlIGlkZW50aWZpZXJzXG52YXIgR1VJRCA9IDA7XG4vLyBpbnRlcm5hbCBzdG9yZSBvZiBhbGwgT3V0bGF5ZXIgaW50YW5jZXNcbnZhciBpbnN0YW5jZXMgPSB7fTtcblxuXG4vKipcbiAqIEBwYXJhbSB7RWxlbWVudCwgU3RyaW5nfSBlbGVtZW50XG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIE91dGxheWVyKCBlbGVtZW50LCBvcHRpb25zICkge1xuICB2YXIgcXVlcnlFbGVtZW50ID0gdXRpbHMuZ2V0UXVlcnlFbGVtZW50KCBlbGVtZW50ICk7XG4gIGlmICggIXF1ZXJ5RWxlbWVudCApIHtcbiAgICBpZiAoIGNvbnNvbGUgKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCAnQmFkIGVsZW1lbnQgZm9yICcgKyB0aGlzLmNvbnN0cnVjdG9yLm5hbWVzcGFjZSArXG4gICAgICAgICc6ICcgKyAoIHF1ZXJ5RWxlbWVudCB8fCBlbGVtZW50ICkgKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMuZWxlbWVudCA9IHF1ZXJ5RWxlbWVudDtcbiAgLy8gYWRkIGpRdWVyeVxuICBpZiAoIGpRdWVyeSApIHtcbiAgICB0aGlzLiRlbGVtZW50ID0galF1ZXJ5KCB0aGlzLmVsZW1lbnQgKTtcbiAgfVxuXG4gIC8vIG9wdGlvbnNcbiAgdGhpcy5vcHRpb25zID0gdXRpbHMuZXh0ZW5kKCB7fSwgdGhpcy5jb25zdHJ1Y3Rvci5kZWZhdWx0cyApO1xuICB0aGlzLm9wdGlvbiggb3B0aW9ucyApO1xuXG4gIC8vIGFkZCBpZCBmb3IgT3V0bGF5ZXIuZ2V0RnJvbUVsZW1lbnRcbiAgdmFyIGlkID0gKytHVUlEO1xuICB0aGlzLmVsZW1lbnQub3V0bGF5ZXJHVUlEID0gaWQ7IC8vIGV4cGFuZG9cbiAgaW5zdGFuY2VzWyBpZCBdID0gdGhpczsgLy8gYXNzb2NpYXRlIHZpYSBpZFxuXG4gIC8vIGtpY2sgaXQgb2ZmXG4gIHRoaXMuX2NyZWF0ZSgpO1xuXG4gIHZhciBpc0luaXRMYXlvdXQgPSB0aGlzLl9nZXRPcHRpb24oJ2luaXRMYXlvdXQnKTtcbiAgaWYgKCBpc0luaXRMYXlvdXQgKSB7XG4gICAgdGhpcy5sYXlvdXQoKTtcbiAgfVxufVxuXG4vLyBzZXR0aW5ncyBhcmUgZm9yIGludGVybmFsIHVzZSBvbmx5XG5PdXRsYXllci5uYW1lc3BhY2UgPSAnb3V0bGF5ZXInO1xuT3V0bGF5ZXIuSXRlbSA9IEl0ZW07XG5cbi8vIGRlZmF1bHQgb3B0aW9uc1xuT3V0bGF5ZXIuZGVmYXVsdHMgPSB7XG4gIGNvbnRhaW5lclN0eWxlOiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgfSxcbiAgaW5pdExheW91dDogdHJ1ZSxcbiAgb3JpZ2luTGVmdDogdHJ1ZSxcbiAgb3JpZ2luVG9wOiB0cnVlLFxuICByZXNpemU6IHRydWUsXG4gIHJlc2l6ZUNvbnRhaW5lcjogdHJ1ZSxcbiAgLy8gaXRlbSBvcHRpb25zXG4gIHRyYW5zaXRpb25EdXJhdGlvbjogJzAuNHMnLFxuICBoaWRkZW5TdHlsZToge1xuICAgIG9wYWNpdHk6IDAsXG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMC4wMDEpJ1xuICB9LFxuICB2aXNpYmxlU3R5bGU6IHtcbiAgICBvcGFjaXR5OiAxLFxuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJ1xuICB9XG59O1xuXG52YXIgcHJvdG8gPSBPdXRsYXllci5wcm90b3R5cGU7XG4vLyBpbmhlcml0IEV2RW1pdHRlclxudXRpbHMuZXh0ZW5kKCBwcm90bywgRXZFbWl0dGVyLnByb3RvdHlwZSApO1xuXG4vKipcbiAqIHNldCBvcHRpb25zXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICovXG5wcm90by5vcHRpb24gPSBmdW5jdGlvbiggb3B0cyApIHtcbiAgdXRpbHMuZXh0ZW5kKCB0aGlzLm9wdGlvbnMsIG9wdHMgKTtcbn07XG5cbi8qKlxuICogZ2V0IGJhY2t3YXJkcyBjb21wYXRpYmxlIG9wdGlvbiB2YWx1ZSwgY2hlY2sgb2xkIG5hbWVcbiAqL1xucHJvdG8uX2dldE9wdGlvbiA9IGZ1bmN0aW9uKCBvcHRpb24gKSB7XG4gIHZhciBvbGRPcHRpb24gPSB0aGlzLmNvbnN0cnVjdG9yLmNvbXBhdE9wdGlvbnNbIG9wdGlvbiBdO1xuICByZXR1cm4gb2xkT3B0aW9uICYmIHRoaXMub3B0aW9uc1sgb2xkT3B0aW9uIF0gIT09IHVuZGVmaW5lZCA/XG4gICAgdGhpcy5vcHRpb25zWyBvbGRPcHRpb24gXSA6IHRoaXMub3B0aW9uc1sgb3B0aW9uIF07XG59O1xuXG5PdXRsYXllci5jb21wYXRPcHRpb25zID0ge1xuICAvLyBjdXJyZW50TmFtZTogb2xkTmFtZVxuICBpbml0TGF5b3V0OiAnaXNJbml0TGF5b3V0JyxcbiAgaG9yaXpvbnRhbDogJ2lzSG9yaXpvbnRhbCcsXG4gIGxheW91dEluc3RhbnQ6ICdpc0xheW91dEluc3RhbnQnLFxuICBvcmlnaW5MZWZ0OiAnaXNPcmlnaW5MZWZ0JyxcbiAgb3JpZ2luVG9wOiAnaXNPcmlnaW5Ub3AnLFxuICByZXNpemU6ICdpc1Jlc2l6ZUJvdW5kJyxcbiAgcmVzaXplQ29udGFpbmVyOiAnaXNSZXNpemluZ0NvbnRhaW5lcidcbn07XG5cbnByb3RvLl9jcmVhdGUgPSBmdW5jdGlvbigpIHtcbiAgLy8gZ2V0IGl0ZW1zIGZyb20gY2hpbGRyZW5cbiAgdGhpcy5yZWxvYWRJdGVtcygpO1xuICAvLyBlbGVtZW50cyB0aGF0IGFmZmVjdCBsYXlvdXQsIGJ1dCBhcmUgbm90IGxhaWQgb3V0XG4gIHRoaXMuc3RhbXBzID0gW107XG4gIHRoaXMuc3RhbXAoIHRoaXMub3B0aW9ucy5zdGFtcCApO1xuICAvLyBzZXQgY29udGFpbmVyIHN0eWxlXG4gIHV0aWxzLmV4dGVuZCggdGhpcy5lbGVtZW50LnN0eWxlLCB0aGlzLm9wdGlvbnMuY29udGFpbmVyU3R5bGUgKTtcblxuICAvLyBiaW5kIHJlc2l6ZSBtZXRob2RcbiAgdmFyIGNhbkJpbmRSZXNpemUgPSB0aGlzLl9nZXRPcHRpb24oJ3Jlc2l6ZScpO1xuICBpZiAoIGNhbkJpbmRSZXNpemUgKSB7XG4gICAgdGhpcy5iaW5kUmVzaXplKCk7XG4gIH1cbn07XG5cbi8vIGdvZXMgdGhyb3VnaCBhbGwgY2hpbGRyZW4gYWdhaW4gYW5kIGdldHMgYnJpY2tzIGluIHByb3BlciBvcmRlclxucHJvdG8ucmVsb2FkSXRlbXMgPSBmdW5jdGlvbigpIHtcbiAgLy8gY29sbGVjdGlvbiBvZiBpdGVtIGVsZW1lbnRzXG4gIHRoaXMuaXRlbXMgPSB0aGlzLl9pdGVtaXplKCB0aGlzLmVsZW1lbnQuY2hpbGRyZW4gKTtcbn07XG5cblxuLyoqXG4gKiB0dXJuIGVsZW1lbnRzIGludG8gT3V0bGF5ZXIuSXRlbXMgdG8gYmUgdXNlZCBpbiBsYXlvdXRcbiAqIEBwYXJhbSB7QXJyYXkgb3IgTm9kZUxpc3Qgb3IgSFRNTEVsZW1lbnR9IGVsZW1zXG4gKiBAcmV0dXJucyB7QXJyYXl9IGl0ZW1zIC0gY29sbGVjdGlvbiBvZiBuZXcgT3V0bGF5ZXIgSXRlbXNcbiAqL1xucHJvdG8uX2l0ZW1pemUgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG5cbiAgdmFyIGl0ZW1FbGVtcyA9IHRoaXMuX2ZpbHRlckZpbmRJdGVtRWxlbWVudHMoIGVsZW1zICk7XG4gIHZhciBJdGVtID0gdGhpcy5jb25zdHJ1Y3Rvci5JdGVtO1xuXG4gIC8vIGNyZWF0ZSBuZXcgT3V0bGF5ZXIgSXRlbXMgZm9yIGNvbGxlY3Rpb25cbiAgdmFyIGl0ZW1zID0gW107XG4gIGZvciAoIHZhciBpPTA7IGkgPCBpdGVtRWxlbXMubGVuZ3RoOyBpKysgKSB7XG4gICAgdmFyIGVsZW0gPSBpdGVtRWxlbXNbaV07XG4gICAgdmFyIGl0ZW0gPSBuZXcgSXRlbSggZWxlbSwgdGhpcyApO1xuICAgIGl0ZW1zLnB1c2goIGl0ZW0gKTtcbiAgfVxuXG4gIHJldHVybiBpdGVtcztcbn07XG5cbi8qKlxuICogZ2V0IGl0ZW0gZWxlbWVudHMgdG8gYmUgdXNlZCBpbiBsYXlvdXRcbiAqIEBwYXJhbSB7QXJyYXkgb3IgTm9kZUxpc3Qgb3IgSFRNTEVsZW1lbnR9IGVsZW1zXG4gKiBAcmV0dXJucyB7QXJyYXl9IGl0ZW1zIC0gaXRlbSBlbGVtZW50c1xuICovXG5wcm90by5fZmlsdGVyRmluZEl0ZW1FbGVtZW50cyA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgcmV0dXJuIHV0aWxzLmZpbHRlckZpbmRFbGVtZW50cyggZWxlbXMsIHRoaXMub3B0aW9ucy5pdGVtU2VsZWN0b3IgKTtcbn07XG5cbi8qKlxuICogZ2V0dGVyIG1ldGhvZCBmb3IgZ2V0dGluZyBpdGVtIGVsZW1lbnRzXG4gKiBAcmV0dXJucyB7QXJyYXl9IGVsZW1zIC0gY29sbGVjdGlvbiBvZiBpdGVtIGVsZW1lbnRzXG4gKi9cbnByb3RvLmdldEl0ZW1FbGVtZW50cyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5pdGVtcy5tYXAoIGZ1bmN0aW9uKCBpdGVtICkge1xuICAgIHJldHVybiBpdGVtLmVsZW1lbnQ7XG4gIH0pO1xufTtcblxuLy8gLS0tLS0gaW5pdCAmIGxheW91dCAtLS0tLSAvL1xuXG4vKipcbiAqIGxheXMgb3V0IGFsbCBpdGVtc1xuICovXG5wcm90by5sYXlvdXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fcmVzZXRMYXlvdXQoKTtcbiAgdGhpcy5fbWFuYWdlU3RhbXBzKCk7XG5cbiAgLy8gZG9uJ3QgYW5pbWF0ZSBmaXJzdCBsYXlvdXRcbiAgdmFyIGxheW91dEluc3RhbnQgPSB0aGlzLl9nZXRPcHRpb24oJ2xheW91dEluc3RhbnQnKTtcbiAgdmFyIGlzSW5zdGFudCA9IGxheW91dEluc3RhbnQgIT09IHVuZGVmaW5lZCA/XG4gICAgbGF5b3V0SW5zdGFudCA6ICF0aGlzLl9pc0xheW91dEluaXRlZDtcbiAgdGhpcy5sYXlvdXRJdGVtcyggdGhpcy5pdGVtcywgaXNJbnN0YW50ICk7XG5cbiAgLy8gZmxhZyBmb3IgaW5pdGFsaXplZFxuICB0aGlzLl9pc0xheW91dEluaXRlZCA9IHRydWU7XG59O1xuXG4vLyBfaW5pdCBpcyBhbGlhcyBmb3IgbGF5b3V0XG5wcm90by5faW5pdCA9IHByb3RvLmxheW91dDtcblxuLyoqXG4gKiBsb2dpYyBiZWZvcmUgYW55IG5ldyBsYXlvdXRcbiAqL1xucHJvdG8uX3Jlc2V0TGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZ2V0U2l6ZSgpO1xufTtcblxuXG5wcm90by5nZXRTaXplID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuc2l6ZSA9IGdldFNpemUoIHRoaXMuZWxlbWVudCApO1xufTtcblxuLyoqXG4gKiBnZXQgbWVhc3VyZW1lbnQgZnJvbSBvcHRpb24sIGZvciBjb2x1bW5XaWR0aCwgcm93SGVpZ2h0LCBndXR0ZXJcbiAqIGlmIG9wdGlvbiBpcyBTdHJpbmcgLT4gZ2V0IGVsZW1lbnQgZnJvbSBzZWxlY3RvciBzdHJpbmcsICYgZ2V0IHNpemUgb2YgZWxlbWVudFxuICogaWYgb3B0aW9uIGlzIEVsZW1lbnQgLT4gZ2V0IHNpemUgb2YgZWxlbWVudFxuICogZWxzZSB1c2Ugb3B0aW9uIGFzIGEgbnVtYmVyXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1lYXN1cmVtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gc2l6ZSAtIHdpZHRoIG9yIGhlaWdodFxuICogQHByaXZhdGVcbiAqL1xucHJvdG8uX2dldE1lYXN1cmVtZW50ID0gZnVuY3Rpb24oIG1lYXN1cmVtZW50LCBzaXplICkge1xuICB2YXIgb3B0aW9uID0gdGhpcy5vcHRpb25zWyBtZWFzdXJlbWVudCBdO1xuICB2YXIgZWxlbTtcbiAgaWYgKCAhb3B0aW9uICkge1xuICAgIC8vIGRlZmF1bHQgdG8gMFxuICAgIHRoaXNbIG1lYXN1cmVtZW50IF0gPSAwO1xuICB9IGVsc2Uge1xuICAgIC8vIHVzZSBvcHRpb24gYXMgYW4gZWxlbWVudFxuICAgIGlmICggdHlwZW9mIG9wdGlvbiA9PSAnc3RyaW5nJyApIHtcbiAgICAgIGVsZW0gPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3Rvciggb3B0aW9uICk7XG4gICAgfSBlbHNlIGlmICggb3B0aW9uIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgKSB7XG4gICAgICBlbGVtID0gb3B0aW9uO1xuICAgIH1cbiAgICAvLyB1c2Ugc2l6ZSBvZiBlbGVtZW50LCBpZiBlbGVtZW50XG4gICAgdGhpc1sgbWVhc3VyZW1lbnQgXSA9IGVsZW0gPyBnZXRTaXplKCBlbGVtIClbIHNpemUgXSA6IG9wdGlvbjtcbiAgfVxufTtcblxuLyoqXG4gKiBsYXlvdXQgYSBjb2xsZWN0aW9uIG9mIGl0ZW0gZWxlbWVudHNcbiAqIEBhcGkgcHVibGljXG4gKi9cbnByb3RvLmxheW91dEl0ZW1zID0gZnVuY3Rpb24oIGl0ZW1zLCBpc0luc3RhbnQgKSB7XG4gIGl0ZW1zID0gdGhpcy5fZ2V0SXRlbXNGb3JMYXlvdXQoIGl0ZW1zICk7XG5cbiAgdGhpcy5fbGF5b3V0SXRlbXMoIGl0ZW1zLCBpc0luc3RhbnQgKTtcblxuICB0aGlzLl9wb3N0TGF5b3V0KCk7XG59O1xuXG4vKipcbiAqIGdldCB0aGUgaXRlbXMgdG8gYmUgbGFpZCBvdXRcbiAqIHlvdSBtYXkgd2FudCB0byBza2lwIG92ZXIgc29tZSBpdGVtc1xuICogQHBhcmFtIHtBcnJheX0gaXRlbXNcbiAqIEByZXR1cm5zIHtBcnJheX0gaXRlbXNcbiAqL1xucHJvdG8uX2dldEl0ZW1zRm9yTGF5b3V0ID0gZnVuY3Rpb24oIGl0ZW1zICkge1xuICByZXR1cm4gaXRlbXMuZmlsdGVyKCBmdW5jdGlvbiggaXRlbSApIHtcbiAgICByZXR1cm4gIWl0ZW0uaXNJZ25vcmVkO1xuICB9KTtcbn07XG5cbi8qKlxuICogbGF5b3V0IGl0ZW1zXG4gKiBAcGFyYW0ge0FycmF5fSBpdGVtc1xuICogQHBhcmFtIHtCb29sZWFufSBpc0luc3RhbnRcbiAqL1xucHJvdG8uX2xheW91dEl0ZW1zID0gZnVuY3Rpb24oIGl0ZW1zLCBpc0luc3RhbnQgKSB7XG4gIHRoaXMuX2VtaXRDb21wbGV0ZU9uSXRlbXMoICdsYXlvdXQnLCBpdGVtcyApO1xuXG4gIGlmICggIWl0ZW1zIHx8ICFpdGVtcy5sZW5ndGggKSB7XG4gICAgLy8gbm8gaXRlbXMsIGVtaXQgZXZlbnQgd2l0aCBlbXB0eSBhcnJheVxuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBxdWV1ZSA9IFtdO1xuXG4gIGl0ZW1zLmZvckVhY2goIGZ1bmN0aW9uKCBpdGVtICkge1xuICAgIC8vIGdldCB4L3kgb2JqZWN0IGZyb20gbWV0aG9kXG4gICAgdmFyIHBvc2l0aW9uID0gdGhpcy5fZ2V0SXRlbUxheW91dFBvc2l0aW9uKCBpdGVtICk7XG4gICAgLy8gZW5xdWV1ZVxuICAgIHBvc2l0aW9uLml0ZW0gPSBpdGVtO1xuICAgIHBvc2l0aW9uLmlzSW5zdGFudCA9IGlzSW5zdGFudCB8fCBpdGVtLmlzTGF5b3V0SW5zdGFudDtcbiAgICBxdWV1ZS5wdXNoKCBwb3NpdGlvbiApO1xuICB9LCB0aGlzICk7XG5cbiAgdGhpcy5fcHJvY2Vzc0xheW91dFF1ZXVlKCBxdWV1ZSApO1xufTtcblxuLyoqXG4gKiBnZXQgaXRlbSBsYXlvdXQgcG9zaXRpb25cbiAqIEBwYXJhbSB7T3V0bGF5ZXIuSXRlbX0gaXRlbVxuICogQHJldHVybnMge09iamVjdH0geCBhbmQgeSBwb3NpdGlvblxuICovXG5wcm90by5fZ2V0SXRlbUxheW91dFBvc2l0aW9uID0gZnVuY3Rpb24oIC8qIGl0ZW0gKi8gKSB7XG4gIHJldHVybiB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH07XG59O1xuXG4vKipcbiAqIGl0ZXJhdGUgb3ZlciBhcnJheSBhbmQgcG9zaXRpb24gZWFjaCBpdGVtXG4gKiBSZWFzb24gYmVpbmcgLSBzZXBhcmF0aW5nIHRoaXMgbG9naWMgcHJldmVudHMgJ2xheW91dCBpbnZhbGlkYXRpb24nXG4gKiB0aHggQHBhdWxfaXJpc2hcbiAqIEBwYXJhbSB7QXJyYXl9IHF1ZXVlXG4gKi9cbnByb3RvLl9wcm9jZXNzTGF5b3V0UXVldWUgPSBmdW5jdGlvbiggcXVldWUgKSB7XG4gIHRoaXMudXBkYXRlU3RhZ2dlcigpO1xuICBxdWV1ZS5mb3JFYWNoKCBmdW5jdGlvbiggb2JqLCBpICkge1xuICAgIHRoaXMuX3Bvc2l0aW9uSXRlbSggb2JqLml0ZW0sIG9iai54LCBvYmoueSwgb2JqLmlzSW5zdGFudCwgaSApO1xuICB9LCB0aGlzICk7XG59O1xuXG4vLyBzZXQgc3RhZ2dlciBmcm9tIG9wdGlvbiBpbiBtaWxsaXNlY29uZHMgbnVtYmVyXG5wcm90by51cGRhdGVTdGFnZ2VyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzdGFnZ2VyID0gdGhpcy5vcHRpb25zLnN0YWdnZXI7XG4gIGlmICggc3RhZ2dlciA9PT0gbnVsbCB8fCBzdGFnZ2VyID09PSB1bmRlZmluZWQgKSB7XG4gICAgdGhpcy5zdGFnZ2VyID0gMDtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy5zdGFnZ2VyID0gZ2V0TWlsbGlzZWNvbmRzKCBzdGFnZ2VyICk7XG4gIHJldHVybiB0aGlzLnN0YWdnZXI7XG59O1xuXG4vKipcbiAqIFNldHMgcG9zaXRpb24gb2YgaXRlbSBpbiBET01cbiAqIEBwYXJhbSB7T3V0bGF5ZXIuSXRlbX0gaXRlbVxuICogQHBhcmFtIHtOdW1iZXJ9IHggLSBob3Jpem9udGFsIHBvc2l0aW9uXG4gKiBAcGFyYW0ge051bWJlcn0geSAtIHZlcnRpY2FsIHBvc2l0aW9uXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzSW5zdGFudCAtIGRpc2FibGVzIHRyYW5zaXRpb25zXG4gKi9cbnByb3RvLl9wb3NpdGlvbkl0ZW0gPSBmdW5jdGlvbiggaXRlbSwgeCwgeSwgaXNJbnN0YW50LCBpICkge1xuICBpZiAoIGlzSW5zdGFudCApIHtcbiAgICAvLyBpZiBub3QgdHJhbnNpdGlvbiwganVzdCBzZXQgQ1NTXG4gICAgaXRlbS5nb1RvKCB4LCB5ICk7XG4gIH0gZWxzZSB7XG4gICAgaXRlbS5zdGFnZ2VyKCBpICogdGhpcy5zdGFnZ2VyICk7XG4gICAgaXRlbS5tb3ZlVG8oIHgsIHkgKTtcbiAgfVxufTtcblxuLyoqXG4gKiBBbnkgbG9naWMgeW91IHdhbnQgdG8gZG8gYWZ0ZXIgZWFjaCBsYXlvdXQsXG4gKiBpLmUuIHNpemUgdGhlIGNvbnRhaW5lclxuICovXG5wcm90by5fcG9zdExheW91dCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnJlc2l6ZUNvbnRhaW5lcigpO1xufTtcblxucHJvdG8ucmVzaXplQ29udGFpbmVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBpc1Jlc2l6aW5nQ29udGFpbmVyID0gdGhpcy5fZ2V0T3B0aW9uKCdyZXNpemVDb250YWluZXInKTtcbiAgaWYgKCAhaXNSZXNpemluZ0NvbnRhaW5lciApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIHNpemUgPSB0aGlzLl9nZXRDb250YWluZXJTaXplKCk7XG4gIGlmICggc2l6ZSApIHtcbiAgICB0aGlzLl9zZXRDb250YWluZXJNZWFzdXJlKCBzaXplLndpZHRoLCB0cnVlICk7XG4gICAgdGhpcy5fc2V0Q29udGFpbmVyTWVhc3VyZSggc2l6ZS5oZWlnaHQsIGZhbHNlICk7XG4gIH1cbn07XG5cbi8qKlxuICogU2V0cyB3aWR0aCBvciBoZWlnaHQgb2YgY29udGFpbmVyIGlmIHJldHVybmVkXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBzaXplXG4gKiAgIEBwYXJhbSB7TnVtYmVyfSB3aWR0aFxuICogICBAcGFyYW0ge051bWJlcn0gaGVpZ2h0XG4gKi9cbnByb3RvLl9nZXRDb250YWluZXJTaXplID0gbm9vcDtcblxuLyoqXG4gKiBAcGFyYW0ge051bWJlcn0gbWVhc3VyZSAtIHNpemUgb2Ygd2lkdGggb3IgaGVpZ2h0XG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzV2lkdGhcbiAqL1xucHJvdG8uX3NldENvbnRhaW5lck1lYXN1cmUgPSBmdW5jdGlvbiggbWVhc3VyZSwgaXNXaWR0aCApIHtcbiAgaWYgKCBtZWFzdXJlID09PSB1bmRlZmluZWQgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGVsZW1TaXplID0gdGhpcy5zaXplO1xuICAvLyBhZGQgcGFkZGluZyBhbmQgYm9yZGVyIHdpZHRoIGlmIGJvcmRlciBib3hcbiAgaWYgKCBlbGVtU2l6ZS5pc0JvcmRlckJveCApIHtcbiAgICBtZWFzdXJlICs9IGlzV2lkdGggPyBlbGVtU2l6ZS5wYWRkaW5nTGVmdCArIGVsZW1TaXplLnBhZGRpbmdSaWdodCArXG4gICAgICBlbGVtU2l6ZS5ib3JkZXJMZWZ0V2lkdGggKyBlbGVtU2l6ZS5ib3JkZXJSaWdodFdpZHRoIDpcbiAgICAgIGVsZW1TaXplLnBhZGRpbmdCb3R0b20gKyBlbGVtU2l6ZS5wYWRkaW5nVG9wICtcbiAgICAgIGVsZW1TaXplLmJvcmRlclRvcFdpZHRoICsgZWxlbVNpemUuYm9yZGVyQm90dG9tV2lkdGg7XG4gIH1cblxuICBtZWFzdXJlID0gTWF0aC5tYXgoIG1lYXN1cmUsIDAgKTtcbiAgdGhpcy5lbGVtZW50LnN0eWxlWyBpc1dpZHRoID8gJ3dpZHRoJyA6ICdoZWlnaHQnIF0gPSBtZWFzdXJlICsgJ3B4Jztcbn07XG5cbi8qKlxuICogZW1pdCBldmVudENvbXBsZXRlIG9uIGEgY29sbGVjdGlvbiBvZiBpdGVtcyBldmVudHNcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudE5hbWVcbiAqIEBwYXJhbSB7QXJyYXl9IGl0ZW1zIC0gT3V0bGF5ZXIuSXRlbXNcbiAqL1xucHJvdG8uX2VtaXRDb21wbGV0ZU9uSXRlbXMgPSBmdW5jdGlvbiggZXZlbnROYW1lLCBpdGVtcyApIHtcbiAgdmFyIF90aGlzID0gdGhpcztcbiAgZnVuY3Rpb24gb25Db21wbGV0ZSgpIHtcbiAgICBfdGhpcy5kaXNwYXRjaEV2ZW50KCBldmVudE5hbWUgKyAnQ29tcGxldGUnLCBudWxsLCBbIGl0ZW1zIF0gKTtcbiAgfVxuXG4gIHZhciBjb3VudCA9IGl0ZW1zLmxlbmd0aDtcbiAgaWYgKCAhaXRlbXMgfHwgIWNvdW50ICkge1xuICAgIG9uQ29tcGxldGUoKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgZG9uZUNvdW50ID0gMDtcbiAgZnVuY3Rpb24gdGljaygpIHtcbiAgICBkb25lQ291bnQrKztcbiAgICBpZiAoIGRvbmVDb3VudCA9PSBjb3VudCApIHtcbiAgICAgIG9uQ29tcGxldGUoKTtcbiAgICB9XG4gIH1cblxuICAvLyBiaW5kIGNhbGxiYWNrXG4gIGl0ZW1zLmZvckVhY2goIGZ1bmN0aW9uKCBpdGVtICkge1xuICAgIGl0ZW0ub25jZSggZXZlbnROYW1lLCB0aWNrICk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBlbWl0cyBldmVudHMgdmlhIEV2RW1pdHRlciBhbmQgalF1ZXJ5IGV2ZW50c1xuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgLSBuYW1lIG9mIGV2ZW50XG4gKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIG9yaWdpbmFsIGV2ZW50XG4gKiBAcGFyYW0ge0FycmF5fSBhcmdzIC0gZXh0cmEgYXJndW1lbnRzXG4gKi9cbnByb3RvLmRpc3BhdGNoRXZlbnQgPSBmdW5jdGlvbiggdHlwZSwgZXZlbnQsIGFyZ3MgKSB7XG4gIC8vIGFkZCBvcmlnaW5hbCBldmVudCB0byBhcmd1bWVudHNcbiAgdmFyIGVtaXRBcmdzID0gZXZlbnQgPyBbIGV2ZW50IF0uY29uY2F0KCBhcmdzICkgOiBhcmdzO1xuICB0aGlzLmVtaXRFdmVudCggdHlwZSwgZW1pdEFyZ3MgKTtcblxuICBpZiAoIGpRdWVyeSApIHtcbiAgICAvLyBzZXQgdGhpcy4kZWxlbWVudFxuICAgIHRoaXMuJGVsZW1lbnQgPSB0aGlzLiRlbGVtZW50IHx8IGpRdWVyeSggdGhpcy5lbGVtZW50ICk7XG4gICAgaWYgKCBldmVudCApIHtcbiAgICAgIC8vIGNyZWF0ZSBqUXVlcnkgZXZlbnRcbiAgICAgIHZhciAkZXZlbnQgPSBqUXVlcnkuRXZlbnQoIGV2ZW50ICk7XG4gICAgICAkZXZlbnQudHlwZSA9IHR5cGU7XG4gICAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoICRldmVudCwgYXJncyApO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBqdXN0IHRyaWdnZXIgd2l0aCB0eXBlIGlmIG5vIGV2ZW50IGF2YWlsYWJsZVxuICAgICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCB0eXBlLCBhcmdzICk7XG4gICAgfVxuICB9XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBpZ25vcmUgJiBzdGFtcHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXG4vKipcbiAqIGtlZXAgaXRlbSBpbiBjb2xsZWN0aW9uLCBidXQgZG8gbm90IGxheSBpdCBvdXRcbiAqIGlnbm9yZWQgaXRlbXMgZG8gbm90IGdldCBza2lwcGVkIGluIGxheW91dFxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtXG4gKi9cbnByb3RvLmlnbm9yZSA9IGZ1bmN0aW9uKCBlbGVtICkge1xuICB2YXIgaXRlbSA9IHRoaXMuZ2V0SXRlbSggZWxlbSApO1xuICBpZiAoIGl0ZW0gKSB7XG4gICAgaXRlbS5pc0lnbm9yZWQgPSB0cnVlO1xuICB9XG59O1xuXG4vKipcbiAqIHJldHVybiBpdGVtIHRvIGxheW91dCBjb2xsZWN0aW9uXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1cbiAqL1xucHJvdG8udW5pZ25vcmUgPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgdmFyIGl0ZW0gPSB0aGlzLmdldEl0ZW0oIGVsZW0gKTtcbiAgaWYgKCBpdGVtICkge1xuICAgIGRlbGV0ZSBpdGVtLmlzSWdub3JlZDtcbiAgfVxufTtcblxuLyoqXG4gKiBhZGRzIGVsZW1lbnRzIHRvIHN0YW1wc1xuICogQHBhcmFtIHtOb2RlTGlzdCwgQXJyYXksIEVsZW1lbnQsIG9yIFN0cmluZ30gZWxlbXNcbiAqL1xucHJvdG8uc3RhbXAgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gIGVsZW1zID0gdGhpcy5fZmluZCggZWxlbXMgKTtcbiAgaWYgKCAhZWxlbXMgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGhpcy5zdGFtcHMgPSB0aGlzLnN0YW1wcy5jb25jYXQoIGVsZW1zICk7XG4gIC8vIGlnbm9yZVxuICBlbGVtcy5mb3JFYWNoKCB0aGlzLmlnbm9yZSwgdGhpcyApO1xufTtcblxuLyoqXG4gKiByZW1vdmVzIGVsZW1lbnRzIHRvIHN0YW1wc1xuICogQHBhcmFtIHtOb2RlTGlzdCwgQXJyYXksIG9yIEVsZW1lbnR9IGVsZW1zXG4gKi9cbnByb3RvLnVuc3RhbXAgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gIGVsZW1zID0gdGhpcy5fZmluZCggZWxlbXMgKTtcbiAgaWYgKCAhZWxlbXMgKXtcbiAgICByZXR1cm47XG4gIH1cblxuICBlbGVtcy5mb3JFYWNoKCBmdW5jdGlvbiggZWxlbSApIHtcbiAgICAvLyBmaWx0ZXIgb3V0IHJlbW92ZWQgc3RhbXAgZWxlbWVudHNcbiAgICB1dGlscy5yZW1vdmVGcm9tKCB0aGlzLnN0YW1wcywgZWxlbSApO1xuICAgIHRoaXMudW5pZ25vcmUoIGVsZW0gKTtcbiAgfSwgdGhpcyApO1xufTtcblxuLyoqXG4gKiBmaW5kcyBjaGlsZCBlbGVtZW50c1xuICogQHBhcmFtIHtOb2RlTGlzdCwgQXJyYXksIEVsZW1lbnQsIG9yIFN0cmluZ30gZWxlbXNcbiAqIEByZXR1cm5zIHtBcnJheX0gZWxlbXNcbiAqL1xucHJvdG8uX2ZpbmQgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gIGlmICggIWVsZW1zICkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBpZiBzdHJpbmcsIHVzZSBhcmd1bWVudCBhcyBzZWxlY3RvciBzdHJpbmdcbiAgaWYgKCB0eXBlb2YgZWxlbXMgPT0gJ3N0cmluZycgKSB7XG4gICAgZWxlbXMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCggZWxlbXMgKTtcbiAgfVxuICBlbGVtcyA9IHV0aWxzLm1ha2VBcnJheSggZWxlbXMgKTtcbiAgcmV0dXJuIGVsZW1zO1xufTtcblxucHJvdG8uX21hbmFnZVN0YW1wcyA9IGZ1bmN0aW9uKCkge1xuICBpZiAoICF0aGlzLnN0YW1wcyB8fCAhdGhpcy5zdGFtcHMubGVuZ3RoICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMuX2dldEJvdW5kaW5nUmVjdCgpO1xuXG4gIHRoaXMuc3RhbXBzLmZvckVhY2goIHRoaXMuX21hbmFnZVN0YW1wLCB0aGlzICk7XG59O1xuXG4vLyB1cGRhdGUgYm91bmRpbmdMZWZ0IC8gVG9wXG5wcm90by5fZ2V0Qm91bmRpbmdSZWN0ID0gZnVuY3Rpb24oKSB7XG4gIC8vIGdldCBib3VuZGluZyByZWN0IGZvciBjb250YWluZXIgZWxlbWVudFxuICB2YXIgYm91bmRpbmdSZWN0ID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB2YXIgc2l6ZSA9IHRoaXMuc2l6ZTtcbiAgdGhpcy5fYm91bmRpbmdSZWN0ID0ge1xuICAgIGxlZnQ6IGJvdW5kaW5nUmVjdC5sZWZ0ICsgc2l6ZS5wYWRkaW5nTGVmdCArIHNpemUuYm9yZGVyTGVmdFdpZHRoLFxuICAgIHRvcDogYm91bmRpbmdSZWN0LnRvcCArIHNpemUucGFkZGluZ1RvcCArIHNpemUuYm9yZGVyVG9wV2lkdGgsXG4gICAgcmlnaHQ6IGJvdW5kaW5nUmVjdC5yaWdodCAtICggc2l6ZS5wYWRkaW5nUmlnaHQgKyBzaXplLmJvcmRlclJpZ2h0V2lkdGggKSxcbiAgICBib3R0b206IGJvdW5kaW5nUmVjdC5ib3R0b20gLSAoIHNpemUucGFkZGluZ0JvdHRvbSArIHNpemUuYm9yZGVyQm90dG9tV2lkdGggKVxuICB9O1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHN0YW1wXG4qKi9cbnByb3RvLl9tYW5hZ2VTdGFtcCA9IG5vb3A7XG5cbi8qKlxuICogZ2V0IHgveSBwb3NpdGlvbiBvZiBlbGVtZW50IHJlbGF0aXZlIHRvIGNvbnRhaW5lciBlbGVtZW50XG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1cbiAqIEByZXR1cm5zIHtPYmplY3R9IG9mZnNldCAtIGhhcyBsZWZ0LCB0b3AsIHJpZ2h0LCBib3R0b21cbiAqL1xucHJvdG8uX2dldEVsZW1lbnRPZmZzZXQgPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgdmFyIGJvdW5kaW5nUmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHZhciB0aGlzUmVjdCA9IHRoaXMuX2JvdW5kaW5nUmVjdDtcbiAgdmFyIHNpemUgPSBnZXRTaXplKCBlbGVtICk7XG4gIHZhciBvZmZzZXQgPSB7XG4gICAgbGVmdDogYm91bmRpbmdSZWN0LmxlZnQgLSB0aGlzUmVjdC5sZWZ0IC0gc2l6ZS5tYXJnaW5MZWZ0LFxuICAgIHRvcDogYm91bmRpbmdSZWN0LnRvcCAtIHRoaXNSZWN0LnRvcCAtIHNpemUubWFyZ2luVG9wLFxuICAgIHJpZ2h0OiB0aGlzUmVjdC5yaWdodCAtIGJvdW5kaW5nUmVjdC5yaWdodCAtIHNpemUubWFyZ2luUmlnaHQsXG4gICAgYm90dG9tOiB0aGlzUmVjdC5ib3R0b20gLSBib3VuZGluZ1JlY3QuYm90dG9tIC0gc2l6ZS5tYXJnaW5Cb3R0b21cbiAgfTtcbiAgcmV0dXJuIG9mZnNldDtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHJlc2l6ZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vLyBlbmFibGUgZXZlbnQgaGFuZGxlcnMgZm9yIGxpc3RlbmVyc1xuLy8gaS5lLiByZXNpemUgLT4gb25yZXNpemVcbnByb3RvLmhhbmRsZUV2ZW50ID0gdXRpbHMuaGFuZGxlRXZlbnQ7XG5cbi8qKlxuICogQmluZCBsYXlvdXQgdG8gd2luZG93IHJlc2l6aW5nXG4gKi9cbnByb3RvLmJpbmRSZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdyZXNpemUnLCB0aGlzICk7XG4gIHRoaXMuaXNSZXNpemVCb3VuZCA9IHRydWU7XG59O1xuXG4vKipcbiAqIFVuYmluZCBsYXlvdXQgdG8gd2luZG93IHJlc2l6aW5nXG4gKi9cbnByb3RvLnVuYmluZFJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3Jlc2l6ZScsIHRoaXMgKTtcbiAgdGhpcy5pc1Jlc2l6ZUJvdW5kID0gZmFsc2U7XG59O1xuXG5wcm90by5vbnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnJlc2l6ZSgpO1xufTtcblxudXRpbHMuZGVib3VuY2VNZXRob2QoIE91dGxheWVyLCAnb25yZXNpemUnLCAxMDAgKTtcblxucHJvdG8ucmVzaXplID0gZnVuY3Rpb24oKSB7XG4gIC8vIGRvbid0IHRyaWdnZXIgaWYgc2l6ZSBkaWQgbm90IGNoYW5nZVxuICAvLyBvciBpZiByZXNpemUgd2FzIHVuYm91bmQuIFNlZSAjOVxuICBpZiAoICF0aGlzLmlzUmVzaXplQm91bmQgfHwgIXRoaXMubmVlZHNSZXNpemVMYXlvdXQoKSApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLmxheW91dCgpO1xufTtcblxuLyoqXG4gKiBjaGVjayBpZiBsYXlvdXQgaXMgbmVlZGVkIHBvc3QgbGF5b3V0XG4gKiBAcmV0dXJucyBCb29sZWFuXG4gKi9cbnByb3RvLm5lZWRzUmVzaXplTGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzaXplID0gZ2V0U2l6ZSggdGhpcy5lbGVtZW50ICk7XG4gIC8vIGNoZWNrIHRoYXQgdGhpcy5zaXplIGFuZCBzaXplIGFyZSB0aGVyZVxuICAvLyBJRTggdHJpZ2dlcnMgcmVzaXplIG9uIGJvZHkgc2l6ZSBjaGFuZ2UsIHNvIHRoZXkgbWlnaHQgbm90IGJlXG4gIHZhciBoYXNTaXplcyA9IHRoaXMuc2l6ZSAmJiBzaXplO1xuICByZXR1cm4gaGFzU2l6ZXMgJiYgc2l6ZS5pbm5lcldpZHRoICE9PSB0aGlzLnNpemUuaW5uZXJXaWR0aDtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG1ldGhvZHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLyoqXG4gKiBhZGQgaXRlbXMgdG8gT3V0bGF5ZXIgaW5zdGFuY2VcbiAqIEBwYXJhbSB7QXJyYXkgb3IgTm9kZUxpc3Qgb3IgRWxlbWVudH0gZWxlbXNcbiAqIEByZXR1cm5zIHtBcnJheX0gaXRlbXMgLSBPdXRsYXllci5JdGVtc1xuKiovXG5wcm90by5hZGRJdGVtcyA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgdmFyIGl0ZW1zID0gdGhpcy5faXRlbWl6ZSggZWxlbXMgKTtcbiAgLy8gYWRkIGl0ZW1zIHRvIGNvbGxlY3Rpb25cbiAgaWYgKCBpdGVtcy5sZW5ndGggKSB7XG4gICAgdGhpcy5pdGVtcyA9IHRoaXMuaXRlbXMuY29uY2F0KCBpdGVtcyApO1xuICB9XG4gIHJldHVybiBpdGVtcztcbn07XG5cbi8qKlxuICogTGF5b3V0IG5ld2x5LWFwcGVuZGVkIGl0ZW0gZWxlbWVudHNcbiAqIEBwYXJhbSB7QXJyYXkgb3IgTm9kZUxpc3Qgb3IgRWxlbWVudH0gZWxlbXNcbiAqL1xucHJvdG8uYXBwZW5kZWQgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gIHZhciBpdGVtcyA9IHRoaXMuYWRkSXRlbXMoIGVsZW1zICk7XG4gIGlmICggIWl0ZW1zLmxlbmd0aCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gbGF5b3V0IGFuZCByZXZlYWwganVzdCB0aGUgbmV3IGl0ZW1zXG4gIHRoaXMubGF5b3V0SXRlbXMoIGl0ZW1zLCB0cnVlICk7XG4gIHRoaXMucmV2ZWFsKCBpdGVtcyApO1xufTtcblxuLyoqXG4gKiBMYXlvdXQgcHJlcGVuZGVkIGVsZW1lbnRzXG4gKiBAcGFyYW0ge0FycmF5IG9yIE5vZGVMaXN0IG9yIEVsZW1lbnR9IGVsZW1zXG4gKi9cbnByb3RvLnByZXBlbmRlZCA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgdmFyIGl0ZW1zID0gdGhpcy5faXRlbWl6ZSggZWxlbXMgKTtcbiAgaWYgKCAhaXRlbXMubGVuZ3RoICkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBhZGQgaXRlbXMgdG8gYmVnaW5uaW5nIG9mIGNvbGxlY3Rpb25cbiAgdmFyIHByZXZpb3VzSXRlbXMgPSB0aGlzLml0ZW1zLnNsaWNlKDApO1xuICB0aGlzLml0ZW1zID0gaXRlbXMuY29uY2F0KCBwcmV2aW91c0l0ZW1zICk7XG4gIC8vIHN0YXJ0IG5ldyBsYXlvdXRcbiAgdGhpcy5fcmVzZXRMYXlvdXQoKTtcbiAgdGhpcy5fbWFuYWdlU3RhbXBzKCk7XG4gIC8vIGxheW91dCBuZXcgc3R1ZmYgd2l0aG91dCB0cmFuc2l0aW9uXG4gIHRoaXMubGF5b3V0SXRlbXMoIGl0ZW1zLCB0cnVlICk7XG4gIHRoaXMucmV2ZWFsKCBpdGVtcyApO1xuICAvLyBsYXlvdXQgcHJldmlvdXMgaXRlbXNcbiAgdGhpcy5sYXlvdXRJdGVtcyggcHJldmlvdXNJdGVtcyApO1xufTtcblxuLyoqXG4gKiByZXZlYWwgYSBjb2xsZWN0aW9uIG9mIGl0ZW1zXG4gKiBAcGFyYW0ge0FycmF5IG9mIE91dGxheWVyLkl0ZW1zfSBpdGVtc1xuICovXG5wcm90by5yZXZlYWwgPSBmdW5jdGlvbiggaXRlbXMgKSB7XG4gIHRoaXMuX2VtaXRDb21wbGV0ZU9uSXRlbXMoICdyZXZlYWwnLCBpdGVtcyApO1xuICBpZiAoICFpdGVtcyB8fCAhaXRlbXMubGVuZ3RoICkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgc3RhZ2dlciA9IHRoaXMudXBkYXRlU3RhZ2dlcigpO1xuICBpdGVtcy5mb3JFYWNoKCBmdW5jdGlvbiggaXRlbSwgaSApIHtcbiAgICBpdGVtLnN0YWdnZXIoIGkgKiBzdGFnZ2VyICk7XG4gICAgaXRlbS5yZXZlYWwoKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIGhpZGUgYSBjb2xsZWN0aW9uIG9mIGl0ZW1zXG4gKiBAcGFyYW0ge0FycmF5IG9mIE91dGxheWVyLkl0ZW1zfSBpdGVtc1xuICovXG5wcm90by5oaWRlID0gZnVuY3Rpb24oIGl0ZW1zICkge1xuICB0aGlzLl9lbWl0Q29tcGxldGVPbkl0ZW1zKCAnaGlkZScsIGl0ZW1zICk7XG4gIGlmICggIWl0ZW1zIHx8ICFpdGVtcy5sZW5ndGggKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBzdGFnZ2VyID0gdGhpcy51cGRhdGVTdGFnZ2VyKCk7XG4gIGl0ZW1zLmZvckVhY2goIGZ1bmN0aW9uKCBpdGVtLCBpICkge1xuICAgIGl0ZW0uc3RhZ2dlciggaSAqIHN0YWdnZXIgKTtcbiAgICBpdGVtLmhpZGUoKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIHJldmVhbCBpdGVtIGVsZW1lbnRzXG4gKiBAcGFyYW0ge0FycmF5fSwge0VsZW1lbnR9LCB7Tm9kZUxpc3R9IGl0ZW1zXG4gKi9cbnByb3RvLnJldmVhbEl0ZW1FbGVtZW50cyA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgdmFyIGl0ZW1zID0gdGhpcy5nZXRJdGVtcyggZWxlbXMgKTtcbiAgdGhpcy5yZXZlYWwoIGl0ZW1zICk7XG59O1xuXG4vKipcbiAqIGhpZGUgaXRlbSBlbGVtZW50c1xuICogQHBhcmFtIHtBcnJheX0sIHtFbGVtZW50fSwge05vZGVMaXN0fSBpdGVtc1xuICovXG5wcm90by5oaWRlSXRlbUVsZW1lbnRzID0gZnVuY3Rpb24oIGVsZW1zICkge1xuICB2YXIgaXRlbXMgPSB0aGlzLmdldEl0ZW1zKCBlbGVtcyApO1xuICB0aGlzLmhpZGUoIGl0ZW1zICk7XG59O1xuXG4vKipcbiAqIGdldCBPdXRsYXllci5JdGVtLCBnaXZlbiBhbiBFbGVtZW50XG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJucyB7T3V0bGF5ZXIuSXRlbX0gaXRlbVxuICovXG5wcm90by5nZXRJdGVtID0gZnVuY3Rpb24oIGVsZW0gKSB7XG4gIC8vIGxvb3AgdGhyb3VnaCBpdGVtcyB0byBnZXQgdGhlIG9uZSB0aGF0IG1hdGNoZXNcbiAgZm9yICggdmFyIGk9MDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKysgKSB7XG4gICAgdmFyIGl0ZW0gPSB0aGlzLml0ZW1zW2ldO1xuICAgIGlmICggaXRlbS5lbGVtZW50ID09IGVsZW0gKSB7XG4gICAgICAvLyByZXR1cm4gaXRlbVxuICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIGdldCBjb2xsZWN0aW9uIG9mIE91dGxheWVyLkl0ZW1zLCBnaXZlbiBFbGVtZW50c1xuICogQHBhcmFtIHtBcnJheX0gZWxlbXNcbiAqIEByZXR1cm5zIHtBcnJheX0gaXRlbXMgLSBPdXRsYXllci5JdGVtc1xuICovXG5wcm90by5nZXRJdGVtcyA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgZWxlbXMgPSB1dGlscy5tYWtlQXJyYXkoIGVsZW1zICk7XG4gIHZhciBpdGVtcyA9IFtdO1xuICBlbGVtcy5mb3JFYWNoKCBmdW5jdGlvbiggZWxlbSApIHtcbiAgICB2YXIgaXRlbSA9IHRoaXMuZ2V0SXRlbSggZWxlbSApO1xuICAgIGlmICggaXRlbSApIHtcbiAgICAgIGl0ZW1zLnB1c2goIGl0ZW0gKTtcbiAgICB9XG4gIH0sIHRoaXMgKTtcblxuICByZXR1cm4gaXRlbXM7XG59O1xuXG4vKipcbiAqIHJlbW92ZSBlbGVtZW50KHMpIGZyb20gaW5zdGFuY2UgYW5kIERPTVxuICogQHBhcmFtIHtBcnJheSBvciBOb2RlTGlzdCBvciBFbGVtZW50fSBlbGVtc1xuICovXG5wcm90by5yZW1vdmUgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gIHZhciByZW1vdmVJdGVtcyA9IHRoaXMuZ2V0SXRlbXMoIGVsZW1zICk7XG5cbiAgdGhpcy5fZW1pdENvbXBsZXRlT25JdGVtcyggJ3JlbW92ZScsIHJlbW92ZUl0ZW1zICk7XG5cbiAgLy8gYmFpbCBpZiBubyBpdGVtcyB0byByZW1vdmVcbiAgaWYgKCAhcmVtb3ZlSXRlbXMgfHwgIXJlbW92ZUl0ZW1zLmxlbmd0aCApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICByZW1vdmVJdGVtcy5mb3JFYWNoKCBmdW5jdGlvbiggaXRlbSApIHtcbiAgICBpdGVtLnJlbW92ZSgpO1xuICAgIC8vIHJlbW92ZSBpdGVtIGZyb20gY29sbGVjdGlvblxuICAgIHV0aWxzLnJlbW92ZUZyb20oIHRoaXMuaXRlbXMsIGl0ZW0gKTtcbiAgfSwgdGhpcyApO1xufTtcblxuLy8gLS0tLS0gZGVzdHJveSAtLS0tLSAvL1xuXG4vLyByZW1vdmUgYW5kIGRpc2FibGUgT3V0bGF5ZXIgaW5zdGFuY2VcbnByb3RvLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgLy8gY2xlYW4gdXAgZHluYW1pYyBzdHlsZXNcbiAgdmFyIHN0eWxlID0gdGhpcy5lbGVtZW50LnN0eWxlO1xuICBzdHlsZS5oZWlnaHQgPSAnJztcbiAgc3R5bGUucG9zaXRpb24gPSAnJztcbiAgc3R5bGUud2lkdGggPSAnJztcbiAgLy8gZGVzdHJveSBpdGVtc1xuICB0aGlzLml0ZW1zLmZvckVhY2goIGZ1bmN0aW9uKCBpdGVtICkge1xuICAgIGl0ZW0uZGVzdHJveSgpO1xuICB9KTtcblxuICB0aGlzLnVuYmluZFJlc2l6ZSgpO1xuXG4gIHZhciBpZCA9IHRoaXMuZWxlbWVudC5vdXRsYXllckdVSUQ7XG4gIGRlbGV0ZSBpbnN0YW5jZXNbIGlkIF07IC8vIHJlbW92ZSByZWZlcmVuY2UgdG8gaW5zdGFuY2UgYnkgaWRcbiAgZGVsZXRlIHRoaXMuZWxlbWVudC5vdXRsYXllckdVSUQ7XG4gIC8vIHJlbW92ZSBkYXRhIGZvciBqUXVlcnlcbiAgaWYgKCBqUXVlcnkgKSB7XG4gICAgalF1ZXJ5LnJlbW92ZURhdGEoIHRoaXMuZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lc3BhY2UgKTtcbiAgfVxuXG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBkYXRhIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8qKlxuICogZ2V0IE91dGxheWVyIGluc3RhbmNlIGZyb20gZWxlbWVudFxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtXG4gKiBAcmV0dXJucyB7T3V0bGF5ZXJ9XG4gKi9cbk91dGxheWVyLmRhdGEgPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgZWxlbSA9IHV0aWxzLmdldFF1ZXJ5RWxlbWVudCggZWxlbSApO1xuICB2YXIgaWQgPSBlbGVtICYmIGVsZW0ub3V0bGF5ZXJHVUlEO1xuICByZXR1cm4gaWQgJiYgaW5zdGFuY2VzWyBpZCBdO1xufTtcblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBjcmVhdGUgT3V0bGF5ZXIgY2xhc3MgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLyoqXG4gKiBjcmVhdGUgYSBsYXlvdXQgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VcbiAqL1xuT3V0bGF5ZXIuY3JlYXRlID0gZnVuY3Rpb24oIG5hbWVzcGFjZSwgb3B0aW9ucyApIHtcbiAgLy8gc3ViLWNsYXNzIE91dGxheWVyXG4gIHZhciBMYXlvdXQgPSBzdWJjbGFzcyggT3V0bGF5ZXIgKTtcbiAgLy8gYXBwbHkgbmV3IG9wdGlvbnMgYW5kIGNvbXBhdE9wdGlvbnNcbiAgTGF5b3V0LmRlZmF1bHRzID0gdXRpbHMuZXh0ZW5kKCB7fSwgT3V0bGF5ZXIuZGVmYXVsdHMgKTtcbiAgdXRpbHMuZXh0ZW5kKCBMYXlvdXQuZGVmYXVsdHMsIG9wdGlvbnMgKTtcbiAgTGF5b3V0LmNvbXBhdE9wdGlvbnMgPSB1dGlscy5leHRlbmQoIHt9LCBPdXRsYXllci5jb21wYXRPcHRpb25zICApO1xuXG4gIExheW91dC5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG5cbiAgTGF5b3V0LmRhdGEgPSBPdXRsYXllci5kYXRhO1xuXG4gIC8vIHN1Yi1jbGFzcyBJdGVtXG4gIExheW91dC5JdGVtID0gc3ViY2xhc3MoIEl0ZW0gKTtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBkZWNsYXJhdGl2ZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4gIHV0aWxzLmh0bWxJbml0KCBMYXlvdXQsIG5hbWVzcGFjZSApO1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGpRdWVyeSBicmlkZ2UgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuICAvLyBtYWtlIGludG8galF1ZXJ5IHBsdWdpblxuICBpZiAoIGpRdWVyeSAmJiBqUXVlcnkuYnJpZGdldCApIHtcbiAgICBqUXVlcnkuYnJpZGdldCggbmFtZXNwYWNlLCBMYXlvdXQgKTtcbiAgfVxuXG4gIHJldHVybiBMYXlvdXQ7XG59O1xuXG5mdW5jdGlvbiBzdWJjbGFzcyggUGFyZW50ICkge1xuICBmdW5jdGlvbiBTdWJDbGFzcygpIHtcbiAgICBQYXJlbnQuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuICB9XG5cbiAgU3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggUGFyZW50LnByb3RvdHlwZSApO1xuICBTdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTdWJDbGFzcztcblxuICByZXR1cm4gU3ViQ2xhc3M7XG59XG5cbi8vIC0tLS0tIGhlbHBlcnMgLS0tLS0gLy9cblxuLy8gaG93IG1hbnkgbWlsbGlzZWNvbmRzIGFyZSBpbiBlYWNoIHVuaXRcbnZhciBtc1VuaXRzID0ge1xuICBtczogMSxcbiAgczogMTAwMFxufTtcblxuLy8gbXVuZ2UgdGltZS1saWtlIHBhcmFtZXRlciBpbnRvIG1pbGxpc2Vjb25kIG51bWJlclxuLy8gJzAuNHMnIC0+IDQwXG5mdW5jdGlvbiBnZXRNaWxsaXNlY29uZHMoIHRpbWUgKSB7XG4gIGlmICggdHlwZW9mIHRpbWUgPT0gJ251bWJlcicgKSB7XG4gICAgcmV0dXJuIHRpbWU7XG4gIH1cbiAgdmFyIG1hdGNoZXMgPSB0aW1lLm1hdGNoKCAvKF5cXGQqXFwuP1xcZCopKFxcdyopLyApO1xuICB2YXIgbnVtID0gbWF0Y2hlcyAmJiBtYXRjaGVzWzFdO1xuICB2YXIgdW5pdCA9IG1hdGNoZXMgJiYgbWF0Y2hlc1syXTtcbiAgaWYgKCAhbnVtLmxlbmd0aCApIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICBudW0gPSBwYXJzZUZsb2F0KCBudW0gKTtcbiAgdmFyIG11bHQgPSBtc1VuaXRzWyB1bml0IF0gfHwgMTtcbiAgcmV0dXJuIG51bSAqIG11bHQ7XG59XG5cbi8vIC0tLS0tIGZpbiAtLS0tLSAvL1xuXG4vLyBiYWNrIGluIGdsb2JhbFxuT3V0bGF5ZXIuSXRlbSA9IEl0ZW07XG5cbnJldHVybiBPdXRsYXllcjtcblxufSkpO1xuIiwiLyoqXG4gKiBQYWNrZXJ5IEl0ZW0gRWxlbWVudFxuKiovXG5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qIGpzaGludCBzdHJpY3Q6IGZhbHNlICovIC8qIGdsb2JhbHMgZGVmaW5lLCBtb2R1bGUsIHJlcXVpcmUgKi9cbiAgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAvLyBBTURcbiAgICBkZWZpbmUoIFtcbiAgICAgICAgJ291dGxheWVyL291dGxheWVyJyxcbiAgICAgICAgJy4vcmVjdCdcbiAgICAgIF0sXG4gICAgICBmYWN0b3J5ICk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICByZXF1aXJlKCdvdXRsYXllcicpLFxuICAgICAgcmVxdWlyZSgnLi9yZWN0JylcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgd2luZG93LlBhY2tlcnkuSXRlbSA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3cuT3V0bGF5ZXIsXG4gICAgICB3aW5kb3cuUGFja2VyeS5SZWN0XG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIE91dGxheWVyLCBSZWN0ICkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBJdGVtIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnZhciBkb2NFbGVtU3R5bGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGU7XG5cbnZhciB0cmFuc2Zvcm1Qcm9wZXJ0eSA9IHR5cGVvZiBkb2NFbGVtU3R5bGUudHJhbnNmb3JtID09ICdzdHJpbmcnID9cbiAgJ3RyYW5zZm9ybScgOiAnV2Via2l0VHJhbnNmb3JtJztcblxuLy8gc3ViLWNsYXNzIEl0ZW1cbnZhciBJdGVtID0gZnVuY3Rpb24gUGFja2VyeUl0ZW0oKSB7XG4gIE91dGxheWVyLkl0ZW0uYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xufTtcblxudmFyIHByb3RvID0gSXRlbS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBPdXRsYXllci5JdGVtLnByb3RvdHlwZSApO1xuXG52YXIgX19jcmVhdGUgPSBwcm90by5fY3JlYXRlO1xucHJvdG8uX2NyZWF0ZSA9IGZ1bmN0aW9uKCkge1xuICAvLyBjYWxsIGRlZmF1bHQgX2NyZWF0ZSBsb2dpY1xuICBfX2NyZWF0ZS5jYWxsKCB0aGlzICk7XG4gIHRoaXMucmVjdCA9IG5ldyBSZWN0KCk7XG59O1xuXG52YXIgX21vdmVUbyA9IHByb3RvLm1vdmVUbztcbnByb3RvLm1vdmVUbyA9IGZ1bmN0aW9uKCB4LCB5ICkge1xuICAvLyBkb24ndCBzaGlmdCAxcHggd2hpbGUgZHJhZ2dpbmdcbiAgdmFyIGR4ID0gTWF0aC5hYnMoIHRoaXMucG9zaXRpb24ueCAtIHggKTtcbiAgdmFyIGR5ID0gTWF0aC5hYnMoIHRoaXMucG9zaXRpb24ueSAtIHkgKTtcblxuICB2YXIgY2FuSGFja0dvVG8gPSB0aGlzLmxheW91dC5kcmFnSXRlbUNvdW50ICYmICF0aGlzLmlzUGxhY2luZyAmJlxuICAgICF0aGlzLmlzVHJhbnNpdGlvbmluZyAmJiBkeCA8IDEgJiYgZHkgPCAxO1xuICBpZiAoIGNhbkhhY2tHb1RvICkge1xuICAgIHRoaXMuZ29UbyggeCwgeSApO1xuICAgIHJldHVybjtcbiAgfVxuICBfbW92ZVRvLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHBsYWNpbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxucHJvdG8uZW5hYmxlUGxhY2luZyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnJlbW92ZVRyYW5zaXRpb25TdHlsZXMoKTtcbiAgLy8gcmVtb3ZlIHRyYW5zZm9ybSBwcm9wZXJ0eSBmcm9tIHRyYW5zaXRpb25cbiAgaWYgKCB0aGlzLmlzVHJhbnNpdGlvbmluZyAmJiB0cmFuc2Zvcm1Qcm9wZXJ0eSApIHtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGVbIHRyYW5zZm9ybVByb3BlcnR5IF0gPSAnbm9uZSc7XG4gIH1cbiAgdGhpcy5pc1RyYW5zaXRpb25pbmcgPSBmYWxzZTtcbiAgdGhpcy5nZXRTaXplKCk7XG4gIHRoaXMubGF5b3V0Ll9zZXRSZWN0U2l6ZSggdGhpcy5lbGVtZW50LCB0aGlzLnJlY3QgKTtcbiAgdGhpcy5pc1BsYWNpbmcgPSB0cnVlO1xufTtcblxucHJvdG8uZGlzYWJsZVBsYWNpbmcgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5pc1BsYWNpbmcgPSBmYWxzZTtcbn07XG5cbi8vIC0tLS0tICAtLS0tLSAvL1xuXG4vLyByZW1vdmUgZWxlbWVudCBmcm9tIERPTVxucHJvdG8ucmVtb3ZlRWxlbSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcGFyZW50ID0gdGhpcy5lbGVtZW50LnBhcmVudE5vZGU7XG4gIGlmICggcGFyZW50ICkge1xuICAgIHBhcmVudC5yZW1vdmVDaGlsZCggdGhpcy5lbGVtZW50ICk7XG4gIH1cbiAgLy8gYWRkIHNwYWNlIGJhY2sgdG8gcGFja2VyXG4gIHRoaXMubGF5b3V0LnBhY2tlci5hZGRTcGFjZSggdGhpcy5yZWN0ICk7XG4gIHRoaXMuZW1pdEV2ZW50KCAncmVtb3ZlJywgWyB0aGlzIF0gKTtcbn07XG5cbi8vIC0tLS0tIGRyb3BQbGFjZWhvbGRlciAtLS0tLSAvL1xuXG5wcm90by5zaG93RHJvcFBsYWNlaG9sZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBkcm9wUGxhY2Vob2xkZXIgPSB0aGlzLmRyb3BQbGFjZWhvbGRlcjtcbiAgaWYgKCAhZHJvcFBsYWNlaG9sZGVyICkge1xuICAgIC8vIGNyZWF0ZSBkcm9wUGxhY2Vob2xkZXJcbiAgICBkcm9wUGxhY2Vob2xkZXIgPSB0aGlzLmRyb3BQbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRyb3BQbGFjZWhvbGRlci5jbGFzc05hbWUgPSAncGFja2VyeS1kcm9wLXBsYWNlaG9sZGVyJztcbiAgICBkcm9wUGxhY2Vob2xkZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICB9XG5cbiAgZHJvcFBsYWNlaG9sZGVyLnN0eWxlLndpZHRoID0gdGhpcy5zaXplLndpZHRoICsgJ3B4JztcbiAgZHJvcFBsYWNlaG9sZGVyLnN0eWxlLmhlaWdodCA9IHRoaXMuc2l6ZS5oZWlnaHQgKyAncHgnO1xuICB0aGlzLnBvc2l0aW9uRHJvcFBsYWNlaG9sZGVyKCk7XG4gIHRoaXMubGF5b3V0LmVsZW1lbnQuYXBwZW5kQ2hpbGQoIGRyb3BQbGFjZWhvbGRlciApO1xufTtcblxucHJvdG8ucG9zaXRpb25Ecm9wUGxhY2Vob2xkZXIgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5kcm9wUGxhY2Vob2xkZXIuc3R5bGVbIHRyYW5zZm9ybVByb3BlcnR5IF0gPSAndHJhbnNsYXRlKCcgK1xuICAgIHRoaXMucmVjdC54ICsgJ3B4LCAnICsgdGhpcy5yZWN0LnkgKyAncHgpJztcbn07XG5cbnByb3RvLmhpZGVEcm9wUGxhY2Vob2xkZXIgPSBmdW5jdGlvbigpIHtcbiAgLy8gb25seSByZW1vdmUgb25jZSwgIzMzM1xuICB2YXIgcGFyZW50ID0gdGhpcy5kcm9wUGxhY2Vob2xkZXIucGFyZW50Tm9kZTtcbiAgaWYgKCBwYXJlbnQgKSB7XG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKCB0aGlzLmRyb3BQbGFjZWhvbGRlciApO1xuICB9XG59O1xuXG4vLyAtLS0tLSAgLS0tLS0gLy9cblxucmV0dXJuIEl0ZW07XG5cbn0pKTtcbiIsIi8qKlxuICogUGFja2VyXG4gKiBiaW4tcGFja2luZyBhbGdvcml0aG1cbiAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICAvKiBqc2hpbnQgc3RyaWN0OiBmYWxzZSAqLyAvKiBnbG9iYWxzIGRlZmluZSwgbW9kdWxlLCByZXF1aXJlICovXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBbICcuL3JlY3QnIF0sIGZhY3RvcnkgKTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgIHJlcXVpcmUoJy4vcmVjdCcpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIHZhciBQYWNrZXJ5ID0gd2luZG93LlBhY2tlcnkgPSB3aW5kb3cuUGFja2VyeSB8fCB7fTtcbiAgICBQYWNrZXJ5LlBhY2tlciA9IGZhY3RvcnkoIFBhY2tlcnkuUmVjdCApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggUmVjdCApIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gUGFja2VyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8qKlxuICogQHBhcmFtIHtOdW1iZXJ9IHdpZHRoXG4gKiBAcGFyYW0ge051bWJlcn0gaGVpZ2h0XG4gKiBAcGFyYW0ge1N0cmluZ30gc29ydERpcmVjdGlvblxuICogICB0b3BMZWZ0IGZvciB2ZXJ0aWNhbCwgbGVmdFRvcCBmb3IgaG9yaXpvbnRhbFxuICovXG5mdW5jdGlvbiBQYWNrZXIoIHdpZHRoLCBoZWlnaHQsIHNvcnREaXJlY3Rpb24gKSB7XG4gIHRoaXMud2lkdGggPSB3aWR0aCB8fCAwO1xuICB0aGlzLmhlaWdodCA9IGhlaWdodCB8fCAwO1xuICB0aGlzLnNvcnREaXJlY3Rpb24gPSBzb3J0RGlyZWN0aW9uIHx8ICdkb3dud2FyZExlZnRUb1JpZ2h0JztcblxuICB0aGlzLnJlc2V0KCk7XG59XG5cbnZhciBwcm90byA9IFBhY2tlci5wcm90b3R5cGU7XG5cbnByb3RvLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuc3BhY2VzID0gW107XG5cbiAgdmFyIGluaXRpYWxTcGFjZSA9IG5ldyBSZWN0KHtcbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgaGVpZ2h0OiB0aGlzLmhlaWdodFxuICB9KTtcblxuICB0aGlzLnNwYWNlcy5wdXNoKCBpbml0aWFsU3BhY2UgKTtcbiAgLy8gc2V0IHNvcnRlclxuICB0aGlzLnNvcnRlciA9IHNvcnRlcnNbIHRoaXMuc29ydERpcmVjdGlvbiBdIHx8IHNvcnRlcnMuZG93bndhcmRMZWZ0VG9SaWdodDtcbn07XG5cbi8vIGNoYW5nZSB4IGFuZCB5IG9mIHJlY3QgdG8gZml0IHdpdGggaW4gUGFja2VyJ3MgYXZhaWxhYmxlIHNwYWNlc1xucHJvdG8ucGFjayA9IGZ1bmN0aW9uKCByZWN0ICkge1xuICBmb3IgKCB2YXIgaT0wOyBpIDwgdGhpcy5zcGFjZXMubGVuZ3RoOyBpKysgKSB7XG4gICAgdmFyIHNwYWNlID0gdGhpcy5zcGFjZXNbaV07XG4gICAgaWYgKCBzcGFjZS5jYW5GaXQoIHJlY3QgKSApIHtcbiAgICAgIHRoaXMucGxhY2VJblNwYWNlKCByZWN0LCBzcGFjZSApO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59O1xuXG5wcm90by5jb2x1bW5QYWNrID0gZnVuY3Rpb24oIHJlY3QgKSB7XG4gIGZvciAoIHZhciBpPTA7IGkgPCB0aGlzLnNwYWNlcy5sZW5ndGg7IGkrKyApIHtcbiAgICB2YXIgc3BhY2UgPSB0aGlzLnNwYWNlc1tpXTtcbiAgICB2YXIgY2FuRml0SW5TcGFjZUNvbHVtbiA9IHNwYWNlLnggPD0gcmVjdC54ICYmXG4gICAgICBzcGFjZS54ICsgc3BhY2Uud2lkdGggPj0gcmVjdC54ICsgcmVjdC53aWR0aCAmJlxuICAgICAgc3BhY2UuaGVpZ2h0ID49IHJlY3QuaGVpZ2h0IC0gMC4wMTsgLy8gZnVkZ2UgbnVtYmVyIGZvciByb3VuZGluZyBlcnJvclxuICAgIGlmICggY2FuRml0SW5TcGFjZUNvbHVtbiApIHtcbiAgICAgIHJlY3QueSA9IHNwYWNlLnk7XG4gICAgICB0aGlzLnBsYWNlZCggcmVjdCApO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59O1xuXG5wcm90by5yb3dQYWNrID0gZnVuY3Rpb24oIHJlY3QgKSB7XG4gIGZvciAoIHZhciBpPTA7IGkgPCB0aGlzLnNwYWNlcy5sZW5ndGg7IGkrKyApIHtcbiAgICB2YXIgc3BhY2UgPSB0aGlzLnNwYWNlc1tpXTtcbiAgICB2YXIgY2FuRml0SW5TcGFjZVJvdyA9IHNwYWNlLnkgPD0gcmVjdC55ICYmXG4gICAgICBzcGFjZS55ICsgc3BhY2UuaGVpZ2h0ID49IHJlY3QueSArIHJlY3QuaGVpZ2h0ICYmXG4gICAgICBzcGFjZS53aWR0aCA+PSByZWN0LndpZHRoIC0gMC4wMTsgLy8gZnVkZ2UgbnVtYmVyIGZvciByb3VuZGluZyBlcnJvclxuICAgIGlmICggY2FuRml0SW5TcGFjZVJvdyApIHtcbiAgICAgIHJlY3QueCA9IHNwYWNlLng7XG4gICAgICB0aGlzLnBsYWNlZCggcmVjdCApO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59O1xuXG5wcm90by5wbGFjZUluU3BhY2UgPSBmdW5jdGlvbiggcmVjdCwgc3BhY2UgKSB7XG4gIC8vIHBsYWNlIHJlY3QgaW4gc3BhY2VcbiAgcmVjdC54ID0gc3BhY2UueDtcbiAgcmVjdC55ID0gc3BhY2UueTtcblxuICB0aGlzLnBsYWNlZCggcmVjdCApO1xufTtcblxuLy8gdXBkYXRlIHNwYWNlcyB3aXRoIHBsYWNlZCByZWN0XG5wcm90by5wbGFjZWQgPSBmdW5jdGlvbiggcmVjdCApIHtcbiAgLy8gdXBkYXRlIHNwYWNlc1xuICB2YXIgcmV2aXNlZFNwYWNlcyA9IFtdO1xuICBmb3IgKCB2YXIgaT0wOyBpIDwgdGhpcy5zcGFjZXMubGVuZ3RoOyBpKysgKSB7XG4gICAgdmFyIHNwYWNlID0gdGhpcy5zcGFjZXNbaV07XG4gICAgdmFyIG5ld1NwYWNlcyA9IHNwYWNlLmdldE1heGltYWxGcmVlUmVjdHMoIHJlY3QgKTtcbiAgICAvLyBhZGQgZWl0aGVyIHRoZSBvcmlnaW5hbCBzcGFjZSBvciB0aGUgbmV3IHNwYWNlcyB0byB0aGUgcmV2aXNlZCBzcGFjZXNcbiAgICBpZiAoIG5ld1NwYWNlcyApIHtcbiAgICAgIHJldmlzZWRTcGFjZXMucHVzaC5hcHBseSggcmV2aXNlZFNwYWNlcywgbmV3U3BhY2VzICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldmlzZWRTcGFjZXMucHVzaCggc3BhY2UgKTtcbiAgICB9XG4gIH1cblxuICB0aGlzLnNwYWNlcyA9IHJldmlzZWRTcGFjZXM7XG5cbiAgdGhpcy5tZXJnZVNvcnRTcGFjZXMoKTtcbn07XG5cbnByb3RvLm1lcmdlU29ydFNwYWNlcyA9IGZ1bmN0aW9uKCkge1xuICAvLyByZW1vdmUgcmVkdW5kYW50IHNwYWNlc1xuICBQYWNrZXIubWVyZ2VSZWN0cyggdGhpcy5zcGFjZXMgKTtcbiAgdGhpcy5zcGFjZXMuc29ydCggdGhpcy5zb3J0ZXIgKTtcbn07XG5cbi8vIGFkZCBhIHNwYWNlIGJhY2tcbnByb3RvLmFkZFNwYWNlID0gZnVuY3Rpb24oIHJlY3QgKSB7XG4gIHRoaXMuc3BhY2VzLnB1c2goIHJlY3QgKTtcbiAgdGhpcy5tZXJnZVNvcnRTcGFjZXMoKTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHV0aWxpdHkgZnVuY3Rpb25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8qKlxuICogUmVtb3ZlIHJlZHVuZGFudCByZWN0YW5nbGUgZnJvbSBhcnJheSBvZiByZWN0YW5nbGVzXG4gKiBAcGFyYW0ge0FycmF5fSByZWN0czogYW4gYXJyYXkgb2YgUmVjdHNcbiAqIEByZXR1cm5zIHtBcnJheX0gcmVjdHM6IGFuIGFycmF5IG9mIFJlY3RzXG4qKi9cblBhY2tlci5tZXJnZVJlY3RzID0gZnVuY3Rpb24oIHJlY3RzICkge1xuICB2YXIgaSA9IDA7XG4gIHZhciByZWN0ID0gcmVjdHNbaV07XG5cbiAgcmVjdExvb3A6XG4gIHdoaWxlICggcmVjdCApIHtcbiAgICB2YXIgaiA9IDA7XG4gICAgdmFyIGNvbXBhcmVSZWN0ID0gcmVjdHNbIGkgKyBqIF07XG5cbiAgICB3aGlsZSAoIGNvbXBhcmVSZWN0ICkge1xuICAgICAgaWYgICggY29tcGFyZVJlY3QgPT0gcmVjdCApIHtcbiAgICAgICAgaisrOyAvLyBuZXh0XG4gICAgICB9IGVsc2UgaWYgKCBjb21wYXJlUmVjdC5jb250YWlucyggcmVjdCApICkge1xuICAgICAgICAvLyByZW1vdmUgcmVjdFxuICAgICAgICByZWN0cy5zcGxpY2UoIGksIDEgKTtcbiAgICAgICAgcmVjdCA9IHJlY3RzW2ldOyAvLyBzZXQgbmV4dCByZWN0XG4gICAgICAgIGNvbnRpbnVlIHJlY3RMb29wOyAvLyBiYWlsIG9uIGNvbXBhcmVMb29wXG4gICAgICB9IGVsc2UgaWYgKCByZWN0LmNvbnRhaW5zKCBjb21wYXJlUmVjdCApICkge1xuICAgICAgICAvLyByZW1vdmUgY29tcGFyZVJlY3RcbiAgICAgICAgcmVjdHMuc3BsaWNlKCBpICsgaiwgMSApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaisrO1xuICAgICAgfVxuICAgICAgY29tcGFyZVJlY3QgPSByZWN0c1sgaSArIGogXTsgLy8gc2V0IG5leHQgY29tcGFyZVJlY3RcbiAgICB9XG4gICAgaSsrO1xuICAgIHJlY3QgPSByZWN0c1tpXTtcbiAgfVxuXG4gIHJldHVybiByZWN0cztcbn07XG5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gc29ydGVycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vLyBmdW5jdGlvbnMgZm9yIHNvcnRpbmcgcmVjdHMgaW4gb3JkZXJcbnZhciBzb3J0ZXJzID0ge1xuICAvLyB0b3AgZG93biwgdGhlbiBsZWZ0IHRvIHJpZ2h0XG4gIGRvd253YXJkTGVmdFRvUmlnaHQ6IGZ1bmN0aW9uKCBhLCBiICkge1xuICAgIHJldHVybiBhLnkgLSBiLnkgfHwgYS54IC0gYi54O1xuICB9LFxuICAvLyBsZWZ0IHRvIHJpZ2h0LCB0aGVuIHRvcCBkb3duXG4gIHJpZ2h0d2FyZFRvcFRvQm90dG9tOiBmdW5jdGlvbiggYSwgYiApIHtcbiAgICByZXR1cm4gYS54IC0gYi54IHx8IGEueSAtIGIueTtcbiAgfVxufTtcblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxucmV0dXJuIFBhY2tlcjtcblxufSkpO1xuIiwiLyohXG4gKiBQYWNrZXJ5IHYyLjEuMlxuICogR2FwbGVzcywgZHJhZ2dhYmxlIGdyaWQgbGF5b3V0c1xuICpcbiAqIExpY2Vuc2VkIEdQTHYzIGZvciBvcGVuIHNvdXJjZSB1c2VcbiAqIG9yIFBhY2tlcnkgQ29tbWVyY2lhbCBMaWNlbnNlIGZvciBjb21tZXJjaWFsIHVzZVxuICpcbiAqIGh0dHA6Ly9wYWNrZXJ5Lm1ldGFmaXp6eS5jb1xuICogQ29weXJpZ2h0IDIwMTMtMjAxOCBNZXRhZml6enlcbiAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICAvKiBqc2hpbnQgc3RyaWN0OiBmYWxzZSAqLyAvKiBnbG9iYWxzIGRlZmluZSwgbW9kdWxlLCByZXF1aXJlICovXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBbXG4gICAgICAgICdnZXQtc2l6ZS9nZXQtc2l6ZScsXG4gICAgICAgICdvdXRsYXllci9vdXRsYXllcicsXG4gICAgICAgICcuL3JlY3QnLFxuICAgICAgICAnLi9wYWNrZXInLFxuICAgICAgICAnLi9pdGVtJ1xuICAgICAgXSxcbiAgICAgIGZhY3RvcnkgKTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgIHJlcXVpcmUoJ2dldC1zaXplJyksXG4gICAgICByZXF1aXJlKCdvdXRsYXllcicpLFxuICAgICAgcmVxdWlyZSgnLi9yZWN0JyksXG4gICAgICByZXF1aXJlKCcuL3BhY2tlcicpLFxuICAgICAgcmVxdWlyZSgnLi9pdGVtJylcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgd2luZG93LlBhY2tlcnkgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LmdldFNpemUsXG4gICAgICB3aW5kb3cuT3V0bGF5ZXIsXG4gICAgICB3aW5kb3cuUGFja2VyeS5SZWN0LFxuICAgICAgd2luZG93LlBhY2tlcnkuUGFja2VyLFxuICAgICAgd2luZG93LlBhY2tlcnkuSXRlbVxuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCBnZXRTaXplLCBPdXRsYXllciwgUmVjdCwgUGFja2VyLCBJdGVtICkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyAtLS0tLSBSZWN0IC0tLS0tIC8vXG5cbi8vIGFsbG93IGZvciBwaXhlbCByb3VuZGluZyBlcnJvcnMgSUU4LUlFMTEgJiBGaXJlZm94OyAjMjI3XG5SZWN0LnByb3RvdHlwZS5jYW5GaXQgPSBmdW5jdGlvbiggcmVjdCApIHtcbiAgcmV0dXJuIHRoaXMud2lkdGggPj0gcmVjdC53aWR0aCAtIDEgJiYgdGhpcy5oZWlnaHQgPj0gcmVjdC5oZWlnaHQgLSAxO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gUGFja2VyeSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vLyBjcmVhdGUgYW4gT3V0bGF5ZXIgbGF5b3V0IGNsYXNzXG52YXIgUGFja2VyeSA9IE91dGxheWVyLmNyZWF0ZSgncGFja2VyeScpO1xuUGFja2VyeS5JdGVtID0gSXRlbTtcblxudmFyIHByb3RvID0gUGFja2VyeS5wcm90b3R5cGU7XG5cbnByb3RvLl9jcmVhdGUgPSBmdW5jdGlvbigpIHtcbiAgLy8gY2FsbCBzdXBlclxuICBPdXRsYXllci5wcm90b3R5cGUuX2NyZWF0ZS5jYWxsKCB0aGlzICk7XG5cbiAgLy8gaW5pdGlhbCBwcm9wZXJ0aWVzXG4gIHRoaXMucGFja2VyID0gbmV3IFBhY2tlcigpO1xuICAvLyBwYWNrZXIgZm9yIGRyb3AgdGFyZ2V0c1xuICB0aGlzLnNoaWZ0UGFja2VyID0gbmV3IFBhY2tlcigpO1xuICB0aGlzLmlzRW5hYmxlZCA9IHRydWU7XG5cbiAgdGhpcy5kcmFnSXRlbUNvdW50ID0gMDtcblxuICAvLyBjcmVhdGUgZHJhZyBoYW5kbGVyc1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuICB0aGlzLmhhbmRsZURyYWdnYWJpbGx5ID0ge1xuICAgIGRyYWdTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgICBfdGhpcy5pdGVtRHJhZ1N0YXJ0KCB0aGlzLmVsZW1lbnQgKTtcbiAgICB9LFxuICAgIGRyYWdNb3ZlOiBmdW5jdGlvbigpIHtcbiAgICAgIF90aGlzLml0ZW1EcmFnTW92ZSggdGhpcy5lbGVtZW50LCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSApO1xuICAgIH0sXG4gICAgZHJhZ0VuZDogZnVuY3Rpb24oKSB7XG4gICAgICBfdGhpcy5pdGVtRHJhZ0VuZCggdGhpcy5lbGVtZW50ICk7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMuaGFuZGxlVUlEcmFnZ2FibGUgPSB7XG4gICAgc3RhcnQ6IGZ1bmN0aW9uIGhhbmRsZVVJRHJhZ2dhYmxlU3RhcnQoIGV2ZW50LCB1aSApIHtcbiAgICAgIC8vIEhUTUw1IG1heSB0cmlnZ2VyIGRyYWdzdGFydCwgZGlzbWlzcyBIVE1MNSBkcmFnZ2luZ1xuICAgICAgaWYgKCAhdWkgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIF90aGlzLml0ZW1EcmFnU3RhcnQoIGV2ZW50LmN1cnJlbnRUYXJnZXQgKTtcbiAgICB9LFxuICAgIGRyYWc6IGZ1bmN0aW9uIGhhbmRsZVVJRHJhZ2dhYmxlRHJhZyggZXZlbnQsIHVpICkge1xuICAgICAgaWYgKCAhdWkgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIF90aGlzLml0ZW1EcmFnTW92ZSggZXZlbnQuY3VycmVudFRhcmdldCwgdWkucG9zaXRpb24ubGVmdCwgdWkucG9zaXRpb24udG9wICk7XG4gICAgfSxcbiAgICBzdG9wOiBmdW5jdGlvbiBoYW5kbGVVSURyYWdnYWJsZVN0b3AoIGV2ZW50LCB1aSApIHtcbiAgICAgIGlmICggIXVpICkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBfdGhpcy5pdGVtRHJhZ0VuZCggZXZlbnQuY3VycmVudFRhcmdldCApO1xuICAgIH1cbiAgfTtcblxufTtcblxuXG4vLyAtLS0tLSBpbml0ICYgbGF5b3V0IC0tLS0tIC8vXG5cbi8qKlxuICogbG9naWMgYmVmb3JlIGFueSBuZXcgbGF5b3V0XG4gKi9cbnByb3RvLl9yZXNldExheW91dCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmdldFNpemUoKTtcblxuICB0aGlzLl9nZXRNZWFzdXJlbWVudHMoKTtcblxuICAvLyByZXNldCBwYWNrZXJcbiAgdmFyIHdpZHRoLCBoZWlnaHQsIHNvcnREaXJlY3Rpb247XG4gIC8vIHBhY2tlciBzZXR0aW5ncywgaWYgaG9yaXpvbnRhbCBvciB2ZXJ0aWNhbFxuICBpZiAoIHRoaXMuX2dldE9wdGlvbignaG9yaXpvbnRhbCcpICkge1xuICAgIHdpZHRoID0gSW5maW5pdHk7XG4gICAgaGVpZ2h0ID0gdGhpcy5zaXplLmlubmVySGVpZ2h0ICsgdGhpcy5ndXR0ZXI7XG4gICAgc29ydERpcmVjdGlvbiA9ICdyaWdodHdhcmRUb3BUb0JvdHRvbSc7XG4gIH0gZWxzZSB7XG4gICAgd2lkdGggPSB0aGlzLnNpemUuaW5uZXJXaWR0aCArIHRoaXMuZ3V0dGVyO1xuICAgIGhlaWdodCA9IEluZmluaXR5O1xuICAgIHNvcnREaXJlY3Rpb24gPSAnZG93bndhcmRMZWZ0VG9SaWdodCc7XG4gIH1cblxuICB0aGlzLnBhY2tlci53aWR0aCA9IHRoaXMuc2hpZnRQYWNrZXIud2lkdGggPSB3aWR0aDtcbiAgdGhpcy5wYWNrZXIuaGVpZ2h0ID0gdGhpcy5zaGlmdFBhY2tlci5oZWlnaHQgPSBoZWlnaHQ7XG4gIHRoaXMucGFja2VyLnNvcnREaXJlY3Rpb24gPSB0aGlzLnNoaWZ0UGFja2VyLnNvcnREaXJlY3Rpb24gPSBzb3J0RGlyZWN0aW9uO1xuXG4gIHRoaXMucGFja2VyLnJlc2V0KCk7XG5cbiAgLy8gbGF5b3V0XG4gIHRoaXMubWF4WSA9IDA7XG4gIHRoaXMubWF4WCA9IDA7XG59O1xuXG4vKipcbiAqIHVwZGF0ZSBjb2x1bW5XaWR0aCwgcm93SGVpZ2h0LCAmIGd1dHRlclxuICogQHByaXZhdGVcbiAqL1xucHJvdG8uX2dldE1lYXN1cmVtZW50cyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9nZXRNZWFzdXJlbWVudCggJ2NvbHVtbldpZHRoJywgJ3dpZHRoJyApO1xuICB0aGlzLl9nZXRNZWFzdXJlbWVudCggJ3Jvd0hlaWdodCcsICdoZWlnaHQnICk7XG4gIHRoaXMuX2dldE1lYXN1cmVtZW50KCAnZ3V0dGVyJywgJ3dpZHRoJyApO1xufTtcblxucHJvdG8uX2dldEl0ZW1MYXlvdXRQb3NpdGlvbiA9IGZ1bmN0aW9uKCBpdGVtICkge1xuICB0aGlzLl9zZXRSZWN0U2l6ZSggaXRlbS5lbGVtZW50LCBpdGVtLnJlY3QgKTtcbiAgaWYgKCB0aGlzLmlzU2hpZnRpbmcgfHwgdGhpcy5kcmFnSXRlbUNvdW50ID4gMCApIHtcbiAgICB2YXIgcGFja01ldGhvZCA9IHRoaXMuX2dldFBhY2tNZXRob2QoKTtcbiAgICB0aGlzLnBhY2tlclsgcGFja01ldGhvZCBdKCBpdGVtLnJlY3QgKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnBhY2tlci5wYWNrKCBpdGVtLnJlY3QgKTtcbiAgfVxuXG4gIHRoaXMuX3NldE1heFhZKCBpdGVtLnJlY3QgKTtcbiAgcmV0dXJuIGl0ZW0ucmVjdDtcbn07XG5cbnByb3RvLnNoaWZ0TGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuaXNTaGlmdGluZyA9IHRydWU7XG4gIHRoaXMubGF5b3V0KCk7XG4gIGRlbGV0ZSB0aGlzLmlzU2hpZnRpbmc7XG59O1xuXG5wcm90by5fZ2V0UGFja01ldGhvZCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKCdob3Jpem9udGFsJykgPyAncm93UGFjaycgOiAnY29sdW1uUGFjayc7XG59O1xuXG5cbi8qKlxuICogc2V0IG1heCBYIGFuZCBZIHZhbHVlLCBmb3Igc2l6ZSBvZiBjb250YWluZXJcbiAqIEBwYXJhbSB7UGFja2VyeS5SZWN0fSByZWN0XG4gKiBAcHJpdmF0ZVxuICovXG5wcm90by5fc2V0TWF4WFkgPSBmdW5jdGlvbiggcmVjdCApIHtcbiAgdGhpcy5tYXhYID0gTWF0aC5tYXgoIHJlY3QueCArIHJlY3Qud2lkdGgsIHRoaXMubWF4WCApO1xuICB0aGlzLm1heFkgPSBNYXRoLm1heCggcmVjdC55ICsgcmVjdC5oZWlnaHQsIHRoaXMubWF4WSApO1xufTtcblxuLyoqXG4gKiBzZXQgdGhlIHdpZHRoIGFuZCBoZWlnaHQgb2YgYSByZWN0LCBhcHBseWluZyBjb2x1bW5XaWR0aCBhbmQgcm93SGVpZ2h0XG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1cbiAqIEBwYXJhbSB7UGFja2VyeS5SZWN0fSByZWN0XG4gKi9cbnByb3RvLl9zZXRSZWN0U2l6ZSA9IGZ1bmN0aW9uKCBlbGVtLCByZWN0ICkge1xuICB2YXIgc2l6ZSA9IGdldFNpemUoIGVsZW0gKTtcbiAgdmFyIHcgPSBzaXplLm91dGVyV2lkdGg7XG4gIHZhciBoID0gc2l6ZS5vdXRlckhlaWdodDtcbiAgLy8gc2l6ZSBmb3IgY29sdW1uV2lkdGggYW5kIHJvd0hlaWdodCwgaWYgYXZhaWxhYmxlXG4gIC8vIG9ubHkgY2hlY2sgaWYgc2l6ZSBpcyBub24temVybywgIzE3N1xuICBpZiAoIHcgfHwgaCApIHtcbiAgICB3ID0gdGhpcy5fYXBwbHlHcmlkR3V0dGVyKCB3LCB0aGlzLmNvbHVtbldpZHRoICk7XG4gICAgaCA9IHRoaXMuX2FwcGx5R3JpZEd1dHRlciggaCwgdGhpcy5yb3dIZWlnaHQgKTtcbiAgfVxuICAvLyByZWN0IG11c3QgZml0IGluIHBhY2tlclxuICByZWN0LndpZHRoID0gTWF0aC5taW4oIHcsIHRoaXMucGFja2VyLndpZHRoICk7XG4gIHJlY3QuaGVpZ2h0ID0gTWF0aC5taW4oIGgsIHRoaXMucGFja2VyLmhlaWdodCApO1xufTtcblxuLyoqXG4gKiBmaXRzIGl0ZW0gdG8gY29sdW1uV2lkdGgvcm93SGVpZ2h0IGFuZCBhZGRzIGd1dHRlclxuICogQHBhcmFtIHtOdW1iZXJ9IG1lYXN1cmVtZW50IC0gaXRlbSB3aWR0aCBvciBoZWlnaHRcbiAqIEBwYXJhbSB7TnVtYmVyfSBncmlkU2l6ZSAtIGNvbHVtbldpZHRoIG9yIHJvd0hlaWdodFxuICogQHJldHVybnMgbWVhc3VyZW1lbnRcbiAqL1xucHJvdG8uX2FwcGx5R3JpZEd1dHRlciA9IGZ1bmN0aW9uKCBtZWFzdXJlbWVudCwgZ3JpZFNpemUgKSB7XG4gIC8vIGp1c3QgYWRkIGd1dHRlciBpZiBubyBncmlkU2l6ZVxuICBpZiAoICFncmlkU2l6ZSApIHtcbiAgICByZXR1cm4gbWVhc3VyZW1lbnQgKyB0aGlzLmd1dHRlcjtcbiAgfVxuICBncmlkU2l6ZSArPSB0aGlzLmd1dHRlcjtcbiAgLy8gZml0IGl0ZW0gdG8gY29sdW1uV2lkdGgvcm93SGVpZ2h0XG4gIHZhciByZW1haW5kZXIgPSBtZWFzdXJlbWVudCAlIGdyaWRTaXplO1xuICB2YXIgbWF0aE1ldGhvZCA9IHJlbWFpbmRlciAmJiByZW1haW5kZXIgPCAxID8gJ3JvdW5kJyA6ICdjZWlsJztcbiAgbWVhc3VyZW1lbnQgPSBNYXRoWyBtYXRoTWV0aG9kIF0oIG1lYXN1cmVtZW50IC8gZ3JpZFNpemUgKSAqIGdyaWRTaXplO1xuICByZXR1cm4gbWVhc3VyZW1lbnQ7XG59O1xuXG5wcm90by5fZ2V0Q29udGFpbmVyU2l6ZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIHRoaXMuX2dldE9wdGlvbignaG9yaXpvbnRhbCcpICkge1xuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogdGhpcy5tYXhYIC0gdGhpcy5ndXR0ZXJcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB7XG4gICAgICBoZWlnaHQ6IHRoaXMubWF4WSAtIHRoaXMuZ3V0dGVyXG4gICAgfTtcbiAgfVxufTtcblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBzdGFtcCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vKipcbiAqIG1ha2VzIHNwYWNlIGZvciBlbGVtZW50XG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1cbiAqL1xucHJvdG8uX21hbmFnZVN0YW1wID0gZnVuY3Rpb24oIGVsZW0gKSB7XG5cbiAgdmFyIGl0ZW0gPSB0aGlzLmdldEl0ZW0oIGVsZW0gKTtcbiAgdmFyIHJlY3Q7XG4gIGlmICggaXRlbSAmJiBpdGVtLmlzUGxhY2luZyApIHtcbiAgICByZWN0ID0gaXRlbS5yZWN0O1xuICB9IGVsc2Uge1xuICAgIHZhciBvZmZzZXQgPSB0aGlzLl9nZXRFbGVtZW50T2Zmc2V0KCBlbGVtICk7XG4gICAgcmVjdCA9IG5ldyBSZWN0KHtcbiAgICAgIHg6IHRoaXMuX2dldE9wdGlvbignb3JpZ2luTGVmdCcpID8gb2Zmc2V0LmxlZnQgOiBvZmZzZXQucmlnaHQsXG4gICAgICB5OiB0aGlzLl9nZXRPcHRpb24oJ29yaWdpblRvcCcpID8gb2Zmc2V0LnRvcCA6IG9mZnNldC5ib3R0b21cbiAgICB9KTtcbiAgfVxuXG4gIHRoaXMuX3NldFJlY3RTaXplKCBlbGVtLCByZWN0ICk7XG4gIC8vIHNhdmUgaXRzIHNwYWNlIGluIHRoZSBwYWNrZXJcbiAgdGhpcy5wYWNrZXIucGxhY2VkKCByZWN0ICk7XG4gIHRoaXMuX3NldE1heFhZKCByZWN0ICk7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBtZXRob2RzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbmZ1bmN0aW9uIHZlcnRpY2FsU29ydGVyKCBhLCBiICkge1xuICByZXR1cm4gYS5wb3NpdGlvbi55IC0gYi5wb3NpdGlvbi55IHx8IGEucG9zaXRpb24ueCAtIGIucG9zaXRpb24ueDtcbn1cblxuZnVuY3Rpb24gaG9yaXpvbnRhbFNvcnRlciggYSwgYiApIHtcbiAgcmV0dXJuIGEucG9zaXRpb24ueCAtIGIucG9zaXRpb24ueCB8fCBhLnBvc2l0aW9uLnkgLSBiLnBvc2l0aW9uLnk7XG59XG5cbnByb3RvLnNvcnRJdGVtc0J5UG9zaXRpb24gPSBmdW5jdGlvbigpIHtcbiAgdmFyIHNvcnRlciA9IHRoaXMuX2dldE9wdGlvbignaG9yaXpvbnRhbCcpID8gaG9yaXpvbnRhbFNvcnRlciA6IHZlcnRpY2FsU29ydGVyO1xuICB0aGlzLml0ZW1zLnNvcnQoIHNvcnRlciApO1xufTtcblxuLyoqXG4gKiBGaXQgaXRlbSBlbGVtZW50IGluIGl0cyBjdXJyZW50IHBvc2l0aW9uXG4gKiBQYWNrZXJ5IHdpbGwgcG9zaXRpb24gZWxlbWVudHMgYXJvdW5kIGl0XG4gKiB1c2VmdWwgZm9yIGV4cGFuZGluZyBlbGVtZW50c1xuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbVxuICogQHBhcmFtIHtOdW1iZXJ9IHggLSBob3Jpem9udGFsIGRlc3RpbmF0aW9uIHBvc2l0aW9uLCBvcHRpb25hbFxuICogQHBhcmFtIHtOdW1iZXJ9IHkgLSB2ZXJ0aWNhbCBkZXN0aW5hdGlvbiBwb3NpdGlvbiwgb3B0aW9uYWxcbiAqL1xucHJvdG8uZml0ID0gZnVuY3Rpb24oIGVsZW0sIHgsIHkgKSB7XG4gIHZhciBpdGVtID0gdGhpcy5nZXRJdGVtKCBlbGVtICk7XG4gIGlmICggIWl0ZW0gKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gc3RhbXAgaXRlbSB0byBnZXQgaXQgb3V0IG9mIGxheW91dFxuICB0aGlzLnN0YW1wKCBpdGVtLmVsZW1lbnQgKTtcbiAgLy8gc2V0IHBsYWNpbmcgZmxhZ1xuICBpdGVtLmVuYWJsZVBsYWNpbmcoKTtcbiAgdGhpcy51cGRhdGVTaGlmdFRhcmdldHMoIGl0ZW0gKTtcbiAgLy8gZmFsbCBiYWNrIHRvIGN1cnJlbnQgcG9zaXRpb24gZm9yIGZpdHRpbmdcbiAgeCA9IHggPT09IHVuZGVmaW5lZCA/IGl0ZW0ucmVjdC54OiB4O1xuICB5ID0geSA9PT0gdW5kZWZpbmVkID8gaXRlbS5yZWN0Lnk6IHk7XG4gIC8vIHBvc2l0aW9uIGl0IGJlc3QgYXQgaXRzIGRlc3RpbmF0aW9uXG4gIHRoaXMuc2hpZnQoIGl0ZW0sIHgsIHkgKTtcbiAgdGhpcy5fYmluZEZpdEV2ZW50cyggaXRlbSApO1xuICBpdGVtLm1vdmVUbyggaXRlbS5yZWN0LngsIGl0ZW0ucmVjdC55ICk7XG4gIC8vIGxheW91dCBldmVyeXRoaW5nIGVsc2VcbiAgdGhpcy5zaGlmdExheW91dCgpO1xuICAvLyByZXR1cm4gYmFjayB0byByZWd1bGFybHkgc2NoZWR1bGVkIHByb2dyYW1taW5nXG4gIHRoaXMudW5zdGFtcCggaXRlbS5lbGVtZW50ICk7XG4gIHRoaXMuc29ydEl0ZW1zQnlQb3NpdGlvbigpO1xuICBpdGVtLmRpc2FibGVQbGFjaW5nKCk7XG59O1xuXG4vKipcbiAqIGVtaXQgZXZlbnQgd2hlbiBpdGVtIGlzIGZpdCBhbmQgb3RoZXIgaXRlbXMgYXJlIGxhaWQgb3V0XG4gKiBAcGFyYW0ge1BhY2tlcnkuSXRlbX0gaXRlbVxuICogQHByaXZhdGVcbiAqL1xucHJvdG8uX2JpbmRGaXRFdmVudHMgPSBmdW5jdGlvbiggaXRlbSApIHtcbiAgdmFyIF90aGlzID0gdGhpcztcbiAgdmFyIHRpY2tzID0gMDtcbiAgZnVuY3Rpb24gb25MYXlvdXQoKSB7XG4gICAgdGlja3MrKztcbiAgICBpZiAoIHRpY2tzICE9IDIgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIF90aGlzLmRpc3BhdGNoRXZlbnQoICdmaXRDb21wbGV0ZScsIG51bGwsIFsgaXRlbSBdICk7XG4gIH1cbiAgLy8gd2hlbiBpdGVtIGlzIGxhaWQgb3V0XG4gIGl0ZW0ub25jZSggJ2xheW91dCcsIG9uTGF5b3V0ICk7XG4gIC8vIHdoZW4gYWxsIGl0ZW1zIGFyZSBsYWlkIG91dFxuICB0aGlzLm9uY2UoICdsYXlvdXRDb21wbGV0ZScsIG9uTGF5b3V0ICk7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSByZXNpemUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLy8gZGVib3VuY2VkLCBsYXlvdXQgb24gcmVzaXplXG5wcm90by5yZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgLy8gZG9uJ3QgdHJpZ2dlciBpZiBzaXplIGRpZCBub3QgY2hhbmdlXG4gIC8vIG9yIGlmIHJlc2l6ZSB3YXMgdW5ib3VuZC4gU2VlICMyODUsIG91dGxheWVyIzlcbiAgaWYgKCAhdGhpcy5pc1Jlc2l6ZUJvdW5kIHx8ICF0aGlzLm5lZWRzUmVzaXplTGF5b3V0KCkgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCB0aGlzLm9wdGlvbnMuc2hpZnRQZXJjZW50UmVzaXplICkge1xuICAgIHRoaXMucmVzaXplU2hpZnRQZXJjZW50TGF5b3V0KCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5sYXlvdXQoKTtcbiAgfVxufTtcblxuLyoqXG4gKiBjaGVjayBpZiBsYXlvdXQgaXMgbmVlZGVkIHBvc3QgbGF5b3V0XG4gKiBAcmV0dXJucyBCb29sZWFuXG4gKi9cbnByb3RvLm5lZWRzUmVzaXplTGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzaXplID0gZ2V0U2l6ZSggdGhpcy5lbGVtZW50ICk7XG4gIHZhciBpbm5lclNpemUgPSB0aGlzLl9nZXRPcHRpb24oJ2hvcml6b250YWwnKSA/ICdpbm5lckhlaWdodCcgOiAnaW5uZXJXaWR0aCc7XG4gIHJldHVybiBzaXplWyBpbm5lclNpemUgXSAhPSB0aGlzLnNpemVbIGlubmVyU2l6ZSBdO1xufTtcblxucHJvdG8ucmVzaXplU2hpZnRQZXJjZW50TGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBpdGVtcyA9IHRoaXMuX2dldEl0ZW1zRm9yTGF5b3V0KCB0aGlzLml0ZW1zICk7XG5cbiAgdmFyIGlzSG9yaXpvbnRhbCA9IHRoaXMuX2dldE9wdGlvbignaG9yaXpvbnRhbCcpO1xuICB2YXIgY29vcmQgPSBpc0hvcml6b250YWwgPyAneScgOiAneCc7XG4gIHZhciBtZWFzdXJlID0gaXNIb3Jpem9udGFsID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuICB2YXIgc2VnbWVudE5hbWUgPSBpc0hvcml6b250YWwgPyAncm93SGVpZ2h0JyA6ICdjb2x1bW5XaWR0aCc7XG4gIHZhciBpbm5lclNpemUgPSBpc0hvcml6b250YWwgPyAnaW5uZXJIZWlnaHQnIDogJ2lubmVyV2lkdGgnO1xuXG4gIC8vIHByb3BvcnRpb25hbCByZS1hbGlnbiBpdGVtc1xuICB2YXIgcHJldmlvdXNTZWdtZW50ID0gdGhpc1sgc2VnbWVudE5hbWUgXTtcbiAgcHJldmlvdXNTZWdtZW50ID0gcHJldmlvdXNTZWdtZW50ICYmIHByZXZpb3VzU2VnbWVudCArIHRoaXMuZ3V0dGVyO1xuXG4gIGlmICggcHJldmlvdXNTZWdtZW50ICkge1xuICAgIHRoaXMuX2dldE1lYXN1cmVtZW50cygpO1xuICAgIHZhciBjdXJyZW50U2VnbWVudCA9IHRoaXNbIHNlZ21lbnROYW1lIF0gKyB0aGlzLmd1dHRlcjtcbiAgICBpdGVtcy5mb3JFYWNoKCBmdW5jdGlvbiggaXRlbSApIHtcbiAgICAgIHZhciBzZWcgPSBNYXRoLnJvdW5kKCBpdGVtLnJlY3RbIGNvb3JkIF0gLyBwcmV2aW91c1NlZ21lbnQgKTtcbiAgICAgIGl0ZW0ucmVjdFsgY29vcmQgXSA9IHNlZyAqIGN1cnJlbnRTZWdtZW50O1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHZhciBjdXJyZW50U2l6ZSA9IGdldFNpemUoIHRoaXMuZWxlbWVudCApWyBpbm5lclNpemUgXSArIHRoaXMuZ3V0dGVyO1xuICAgIHZhciBwcmV2aW91c1NpemUgPSB0aGlzLnBhY2tlclsgbWVhc3VyZSBdO1xuICAgIGl0ZW1zLmZvckVhY2goIGZ1bmN0aW9uKCBpdGVtICkge1xuICAgICAgaXRlbS5yZWN0WyBjb29yZCBdID0gKCBpdGVtLnJlY3RbIGNvb3JkIF0gLyBwcmV2aW91c1NpemUgKSAqIGN1cnJlbnRTaXplO1xuICAgIH0pO1xuICB9XG5cbiAgdGhpcy5zaGlmdExheW91dCgpO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZHJhZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vKipcbiAqIGhhbmRsZSBhbiBpdGVtIGRyYWcgc3RhcnQgZXZlbnRcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbVxuICovXG5wcm90by5pdGVtRHJhZ1N0YXJ0ID0gZnVuY3Rpb24oIGVsZW0gKSB7XG4gIGlmICggIXRoaXMuaXNFbmFibGVkICkge1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLnN0YW1wKCBlbGVtICk7XG4gIC8vIHRoaXMuaWdub3JlKCBlbGVtICk7XG4gIHZhciBpdGVtID0gdGhpcy5nZXRJdGVtKCBlbGVtICk7XG4gIGlmICggIWl0ZW0gKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaXRlbS5lbmFibGVQbGFjaW5nKCk7XG4gIGl0ZW0uc2hvd0Ryb3BQbGFjZWhvbGRlcigpO1xuICB0aGlzLmRyYWdJdGVtQ291bnQrKztcbiAgdGhpcy51cGRhdGVTaGlmdFRhcmdldHMoIGl0ZW0gKTtcbn07XG5cbnByb3RvLnVwZGF0ZVNoaWZ0VGFyZ2V0cyA9IGZ1bmN0aW9uKCBkcm9wSXRlbSApIHtcbiAgdGhpcy5zaGlmdFBhY2tlci5yZXNldCgpO1xuXG4gIC8vIHBhY2sgc3RhbXBzXG4gIHRoaXMuX2dldEJvdW5kaW5nUmVjdCgpO1xuICB2YXIgaXNPcmlnaW5MZWZ0ID0gdGhpcy5fZ2V0T3B0aW9uKCdvcmlnaW5MZWZ0Jyk7XG4gIHZhciBpc09yaWdpblRvcCA9IHRoaXMuX2dldE9wdGlvbignb3JpZ2luVG9wJyk7XG4gIHRoaXMuc3RhbXBzLmZvckVhY2goIGZ1bmN0aW9uKCBzdGFtcCApIHtcbiAgICAvLyBpZ25vcmUgZHJhZ2dlZCBpdGVtXG4gICAgdmFyIGl0ZW0gPSB0aGlzLmdldEl0ZW0oIHN0YW1wICk7XG4gICAgaWYgKCBpdGVtICYmIGl0ZW0uaXNQbGFjaW5nICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgb2Zmc2V0ID0gdGhpcy5fZ2V0RWxlbWVudE9mZnNldCggc3RhbXAgKTtcbiAgICB2YXIgcmVjdCA9IG5ldyBSZWN0KHtcbiAgICAgIHg6IGlzT3JpZ2luTGVmdCA/IG9mZnNldC5sZWZ0IDogb2Zmc2V0LnJpZ2h0LFxuICAgICAgeTogaXNPcmlnaW5Ub3AgPyBvZmZzZXQudG9wIDogb2Zmc2V0LmJvdHRvbVxuICAgIH0pO1xuICAgIHRoaXMuX3NldFJlY3RTaXplKCBzdGFtcCwgcmVjdCApO1xuICAgIC8vIHNhdmUgaXRzIHNwYWNlIGluIHRoZSBwYWNrZXJcbiAgICB0aGlzLnNoaWZ0UGFja2VyLnBsYWNlZCggcmVjdCApO1xuICB9LCB0aGlzICk7XG5cbiAgLy8gcmVzZXQgc2hpZnRUYXJnZXRzXG4gIHZhciBpc0hvcml6b250YWwgPSB0aGlzLl9nZXRPcHRpb24oJ2hvcml6b250YWwnKTtcbiAgdmFyIHNlZ21lbnROYW1lID0gaXNIb3Jpem9udGFsID8gJ3Jvd0hlaWdodCcgOiAnY29sdW1uV2lkdGgnO1xuICB2YXIgbWVhc3VyZSA9IGlzSG9yaXpvbnRhbCA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICB0aGlzLnNoaWZ0VGFyZ2V0S2V5cyA9IFtdO1xuICB0aGlzLnNoaWZ0VGFyZ2V0cyA9IFtdO1xuICB2YXIgYm91bmRzU2l6ZTtcbiAgdmFyIHNlZ21lbnQgPSB0aGlzWyBzZWdtZW50TmFtZSBdO1xuICBzZWdtZW50ID0gc2VnbWVudCAmJiBzZWdtZW50ICsgdGhpcy5ndXR0ZXI7XG5cbiAgaWYgKCBzZWdtZW50ICkge1xuICAgIHZhciBzZWdtZW50U3BhbiA9IE1hdGguY2VpbCggZHJvcEl0ZW0ucmVjdFsgbWVhc3VyZSBdIC8gc2VnbWVudCApO1xuICAgIHZhciBzZWdzID0gTWF0aC5mbG9vciggKCB0aGlzLnNoaWZ0UGFja2VyWyBtZWFzdXJlIF0gKyB0aGlzLmd1dHRlciApIC8gc2VnbWVudCApO1xuICAgIGJvdW5kc1NpemUgPSAoIHNlZ3MgLSBzZWdtZW50U3BhbiApICogc2VnbWVudDtcbiAgICAvLyBhZGQgdGFyZ2V0cyBvbiB0b3BcbiAgICBmb3IgKCB2YXIgaT0wOyBpIDwgc2VnczsgaSsrICkge1xuICAgICAgdmFyIGluaXRpYWxYID0gaXNIb3Jpem9udGFsID8gMCA6IGkgKiBzZWdtZW50O1xuICAgICAgdmFyIGluaXRpYWxZID0gaXNIb3Jpem9udGFsID8gaSAqIHNlZ21lbnQgOiAwO1xuICAgICAgdGhpcy5fYWRkU2hpZnRUYXJnZXQoIGluaXRpYWxYLCBpbml0aWFsWSwgYm91bmRzU2l6ZSApO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBib3VuZHNTaXplID0gKCB0aGlzLnNoaWZ0UGFja2VyWyBtZWFzdXJlIF0gKyB0aGlzLmd1dHRlciApIC0gZHJvcEl0ZW0ucmVjdFsgbWVhc3VyZSBdO1xuICAgIHRoaXMuX2FkZFNoaWZ0VGFyZ2V0KCAwLCAwLCBib3VuZHNTaXplICk7XG4gIH1cblxuICAvLyBwYWNrIGVhY2ggaXRlbSB0byBtZWFzdXJlIHdoZXJlIHNoaWZ0VGFyZ2V0cyBhcmVcbiAgdmFyIGl0ZW1zID0gdGhpcy5fZ2V0SXRlbXNGb3JMYXlvdXQoIHRoaXMuaXRlbXMgKTtcbiAgdmFyIHBhY2tNZXRob2QgPSB0aGlzLl9nZXRQYWNrTWV0aG9kKCk7XG4gIGl0ZW1zLmZvckVhY2goIGZ1bmN0aW9uKCBpdGVtICkge1xuICAgIHZhciByZWN0ID0gaXRlbS5yZWN0O1xuICAgIHRoaXMuX3NldFJlY3RTaXplKCBpdGVtLmVsZW1lbnQsIHJlY3QgKTtcbiAgICB0aGlzLnNoaWZ0UGFja2VyWyBwYWNrTWV0aG9kIF0oIHJlY3QgKTtcblxuICAgIC8vIGFkZCB0b3AgbGVmdCBjb3JuZXJcbiAgICB0aGlzLl9hZGRTaGlmdFRhcmdldCggcmVjdC54LCByZWN0LnksIGJvdW5kc1NpemUgKTtcbiAgICAvLyBhZGQgYm90dG9tIGxlZnQgLyB0b3AgcmlnaHQgY29ybmVyXG4gICAgdmFyIGNvcm5lclggPSBpc0hvcml6b250YWwgPyByZWN0LnggKyByZWN0LndpZHRoIDogcmVjdC54O1xuICAgIHZhciBjb3JuZXJZID0gaXNIb3Jpem9udGFsID8gcmVjdC55IDogcmVjdC55ICsgcmVjdC5oZWlnaHQ7XG4gICAgdGhpcy5fYWRkU2hpZnRUYXJnZXQoIGNvcm5lclgsIGNvcm5lclksIGJvdW5kc1NpemUgKTtcblxuICAgIGlmICggc2VnbWVudCApIHtcbiAgICAgIC8vIGFkZCB0YXJnZXRzIGZvciBlYWNoIGNvbHVtbiBvbiBib3R0b20gLyByb3cgb24gcmlnaHRcbiAgICAgIHZhciBzZWdTcGFuID0gTWF0aC5yb3VuZCggcmVjdFsgbWVhc3VyZSBdIC8gc2VnbWVudCApO1xuICAgICAgZm9yICggdmFyIGk9MTsgaSA8IHNlZ1NwYW47IGkrKyApIHtcbiAgICAgICAgdmFyIHNlZ1ggPSBpc0hvcml6b250YWwgPyBjb3JuZXJYIDogcmVjdC54ICsgc2VnbWVudCAqIGk7XG4gICAgICAgIHZhciBzZWdZID0gaXNIb3Jpem9udGFsID8gcmVjdC55ICsgc2VnbWVudCAqIGkgOiBjb3JuZXJZO1xuICAgICAgICB0aGlzLl9hZGRTaGlmdFRhcmdldCggc2VnWCwgc2VnWSwgYm91bmRzU2l6ZSApO1xuICAgICAgfVxuICAgIH1cbiAgfSwgdGhpcyApO1xuXG59O1xuXG5wcm90by5fYWRkU2hpZnRUYXJnZXQgPSBmdW5jdGlvbiggeCwgeSwgYm91bmRzU2l6ZSApIHtcbiAgdmFyIGNoZWNrQ29vcmQgPSB0aGlzLl9nZXRPcHRpb24oJ2hvcml6b250YWwnKSA/IHkgOiB4O1xuICBpZiAoIGNoZWNrQ29vcmQgIT09IDAgJiYgY2hlY2tDb29yZCA+IGJvdW5kc1NpemUgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGNyZWF0ZSBzdHJpbmcgZm9yIGEga2V5LCBlYXNpZXIgdG8ga2VlcCB0cmFjayBvZiB3aGF0IHRhcmdldHNcbiAgdmFyIGtleSA9IHggKyAnLCcgKyB5O1xuICB2YXIgaGFzS2V5ID0gdGhpcy5zaGlmdFRhcmdldEtleXMuaW5kZXhPZigga2V5ICkgIT0gLTE7XG4gIGlmICggaGFzS2V5ICkge1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLnNoaWZ0VGFyZ2V0S2V5cy5wdXNoKCBrZXkgKTtcbiAgdGhpcy5zaGlmdFRhcmdldHMucHVzaCh7IHg6IHgsIHk6IHkgfSk7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBkcm9wIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnByb3RvLnNoaWZ0ID0gZnVuY3Rpb24oIGl0ZW0sIHgsIHkgKSB7XG4gIHZhciBzaGlmdFBvc2l0aW9uO1xuICB2YXIgbWluRGlzdGFuY2UgPSBJbmZpbml0eTtcbiAgdmFyIHBvc2l0aW9uID0geyB4OiB4LCB5OiB5IH07XG4gIHRoaXMuc2hpZnRUYXJnZXRzLmZvckVhY2goIGZ1bmN0aW9uKCB0YXJnZXQgKSB7XG4gICAgdmFyIGRpc3RhbmNlID0gZ2V0RGlzdGFuY2UoIHRhcmdldCwgcG9zaXRpb24gKTtcbiAgICBpZiAoIGRpc3RhbmNlIDwgbWluRGlzdGFuY2UgKSB7XG4gICAgICBzaGlmdFBvc2l0aW9uID0gdGFyZ2V0O1xuICAgICAgbWluRGlzdGFuY2UgPSBkaXN0YW5jZTtcbiAgICB9XG4gIH0pO1xuICBpdGVtLnJlY3QueCA9IHNoaWZ0UG9zaXRpb24ueDtcbiAgaXRlbS5yZWN0LnkgPSBzaGlmdFBvc2l0aW9uLnk7XG59O1xuXG5mdW5jdGlvbiBnZXREaXN0YW5jZSggYSwgYiApIHtcbiAgdmFyIGR4ID0gYi54IC0gYS54O1xuICB2YXIgZHkgPSBiLnkgLSBhLnk7XG4gIHJldHVybiBNYXRoLnNxcnQoIGR4ICogZHggKyBkeSAqIGR5ICk7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGRyYWcgbW92ZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG52YXIgRFJBR19USFJPVFRMRV9USU1FID0gMTIwO1xuXG4vKipcbiAqIGhhbmRsZSBhbiBpdGVtIGRyYWcgbW92ZSBldmVudFxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtXG4gKiBAcGFyYW0ge051bWJlcn0geCAtIGhvcml6b250YWwgY2hhbmdlIGluIHBvc2l0aW9uXG4gKiBAcGFyYW0ge051bWJlcn0geSAtIHZlcnRpY2FsIGNoYW5nZSBpbiBwb3NpdGlvblxuICovXG5wcm90by5pdGVtRHJhZ01vdmUgPSBmdW5jdGlvbiggZWxlbSwgeCwgeSApIHtcbiAgdmFyIGl0ZW0gPSB0aGlzLmlzRW5hYmxlZCAmJiB0aGlzLmdldEl0ZW0oIGVsZW0gKTtcbiAgaWYgKCAhaXRlbSApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB4IC09IHRoaXMuc2l6ZS5wYWRkaW5nTGVmdDtcbiAgeSAtPSB0aGlzLnNpemUucGFkZGluZ1RvcDtcblxuICB2YXIgX3RoaXMgPSB0aGlzO1xuICBmdW5jdGlvbiBvbkRyYWcoKSB7XG4gICAgX3RoaXMuc2hpZnQoIGl0ZW0sIHgsIHkgKTtcbiAgICBpdGVtLnBvc2l0aW9uRHJvcFBsYWNlaG9sZGVyKCk7XG4gICAgX3RoaXMubGF5b3V0KCk7XG4gIH1cblxuICAvLyB0aHJvdHRsZVxuICB2YXIgbm93ID0gbmV3IERhdGUoKTtcbiAgdmFyIGlzVGhyb3R0bGVkID0gdGhpcy5faXRlbURyYWdUaW1lICYmIG5vdyAtIHRoaXMuX2l0ZW1EcmFnVGltZSA8IERSQUdfVEhST1RUTEVfVElNRTtcbiAgaWYgKCBpc1Rocm90dGxlZCApIHtcbiAgICBjbGVhclRpbWVvdXQoIHRoaXMuZHJhZ1RpbWVvdXQgKTtcbiAgICB0aGlzLmRyYWdUaW1lb3V0ID0gc2V0VGltZW91dCggb25EcmFnLCBEUkFHX1RIUk9UVExFX1RJTUUgKTtcbiAgfSBlbHNlIHtcbiAgICBvbkRyYWcoKTtcbiAgICB0aGlzLl9pdGVtRHJhZ1RpbWUgPSBub3c7XG4gIH1cbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGRyYWcgZW5kIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8qKlxuICogaGFuZGxlIGFuIGl0ZW0gZHJhZyBlbmQgZXZlbnRcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbVxuICovXG5wcm90by5pdGVtRHJhZ0VuZCA9IGZ1bmN0aW9uKCBlbGVtICkge1xuICB2YXIgaXRlbSA9IHRoaXMuaXNFbmFibGVkICYmIHRoaXMuZ2V0SXRlbSggZWxlbSApO1xuICBpZiAoICFpdGVtICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNsZWFyVGltZW91dCggdGhpcy5kcmFnVGltZW91dCApO1xuICBpdGVtLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXMtcG9zaXRpb25pbmctcG9zdC1kcmFnJyk7XG5cbiAgdmFyIGNvbXBsZXRlQ291bnQgPSAwO1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuICBmdW5jdGlvbiBvbkRyYWdFbmRMYXlvdXRDb21wbGV0ZSgpIHtcbiAgICBjb21wbGV0ZUNvdW50Kys7XG4gICAgaWYgKCBjb21wbGV0ZUNvdW50ICE9IDIgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIHJlc2V0IGRyYWcgaXRlbVxuICAgIGl0ZW0uZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1wb3NpdGlvbmluZy1wb3N0LWRyYWcnKTtcbiAgICBpdGVtLmhpZGVEcm9wUGxhY2Vob2xkZXIoKTtcbiAgICBfdGhpcy5kaXNwYXRjaEV2ZW50KCAnZHJhZ0l0ZW1Qb3NpdGlvbmVkJywgbnVsbCwgWyBpdGVtIF0gKTtcbiAgfVxuXG4gIGl0ZW0ub25jZSggJ2xheW91dCcsIG9uRHJhZ0VuZExheW91dENvbXBsZXRlICk7XG4gIHRoaXMub25jZSggJ2xheW91dENvbXBsZXRlJywgb25EcmFnRW5kTGF5b3V0Q29tcGxldGUgKTtcbiAgaXRlbS5tb3ZlVG8oIGl0ZW0ucmVjdC54LCBpdGVtLnJlY3QueSApO1xuICB0aGlzLmxheW91dCgpO1xuICB0aGlzLmRyYWdJdGVtQ291bnQgPSBNYXRoLm1heCggMCwgdGhpcy5kcmFnSXRlbUNvdW50IC0gMSApO1xuICB0aGlzLnNvcnRJdGVtc0J5UG9zaXRpb24oKTtcbiAgaXRlbS5kaXNhYmxlUGxhY2luZygpO1xuICB0aGlzLnVuc3RhbXAoIGl0ZW0uZWxlbWVudCApO1xufTtcblxuLyoqXG4gKiBiaW5kcyBEcmFnZ2FiaWxseSBldmVudHNcbiAqIEBwYXJhbSB7RHJhZ2dhYmlsbHl9IGRyYWdnaWVcbiAqL1xucHJvdG8uYmluZERyYWdnYWJpbGx5RXZlbnRzID0gZnVuY3Rpb24oIGRyYWdnaWUgKSB7XG4gIHRoaXMuX2JpbmREcmFnZ2FiaWxseUV2ZW50cyggZHJhZ2dpZSwgJ29uJyApO1xufTtcblxucHJvdG8udW5iaW5kRHJhZ2dhYmlsbHlFdmVudHMgPSBmdW5jdGlvbiggZHJhZ2dpZSApIHtcbiAgdGhpcy5fYmluZERyYWdnYWJpbGx5RXZlbnRzKCBkcmFnZ2llLCAnb2ZmJyApO1xufTtcblxucHJvdG8uX2JpbmREcmFnZ2FiaWxseUV2ZW50cyA9IGZ1bmN0aW9uKCBkcmFnZ2llLCBtZXRob2QgKSB7XG4gIHZhciBoYW5kbGVycyA9IHRoaXMuaGFuZGxlRHJhZ2dhYmlsbHk7XG4gIGRyYWdnaWVbIG1ldGhvZCBdKCAnZHJhZ1N0YXJ0JywgaGFuZGxlcnMuZHJhZ1N0YXJ0ICk7XG4gIGRyYWdnaWVbIG1ldGhvZCBdKCAnZHJhZ01vdmUnLCBoYW5kbGVycy5kcmFnTW92ZSApO1xuICBkcmFnZ2llWyBtZXRob2QgXSggJ2RyYWdFbmQnLCBoYW5kbGVycy5kcmFnRW5kICk7XG59O1xuXG4vKipcbiAqIGJpbmRzIGpRdWVyeSBVSSBEcmFnZ2FibGUgZXZlbnRzXG4gKiBAcGFyYW0ge2pRdWVyeX0gJGVsZW1zXG4gKi9cbnByb3RvLmJpbmRVSURyYWdnYWJsZUV2ZW50cyA9IGZ1bmN0aW9uKCAkZWxlbXMgKSB7XG4gIHRoaXMuX2JpbmRVSURyYWdnYWJsZUV2ZW50cyggJGVsZW1zLCAnb24nICk7XG59O1xuXG5wcm90by51bmJpbmRVSURyYWdnYWJsZUV2ZW50cyA9IGZ1bmN0aW9uKCAkZWxlbXMgKSB7XG4gIHRoaXMuX2JpbmRVSURyYWdnYWJsZUV2ZW50cyggJGVsZW1zLCAnb2ZmJyApO1xufTtcblxucHJvdG8uX2JpbmRVSURyYWdnYWJsZUV2ZW50cyA9IGZ1bmN0aW9uKCAkZWxlbXMsIG1ldGhvZCApIHtcbiAgdmFyIGhhbmRsZXJzID0gdGhpcy5oYW5kbGVVSURyYWdnYWJsZTtcbiAgJGVsZW1zXG4gICAgWyBtZXRob2QgXSggJ2RyYWdzdGFydCcsIGhhbmRsZXJzLnN0YXJ0IClcbiAgICBbIG1ldGhvZCBdKCAnZHJhZycsIGhhbmRsZXJzLmRyYWcgKVxuICAgIFsgbWV0aG9kIF0oICdkcmFnc3RvcCcsIGhhbmRsZXJzLnN0b3AgKTtcbn07XG5cbi8vIC0tLS0tIGRlc3Ryb3kgLS0tLS0gLy9cblxudmFyIF9kZXN0cm95ID0gcHJvdG8uZGVzdHJveTtcbnByb3RvLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgX2Rlc3Ryb3kuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuICAvLyBkaXNhYmxlIGZsYWc7IHByZXZlbnQgZHJhZyBldmVudHMgZnJvbSB0cmlnZ2VyaW5nLiAjNzJcbiAgdGhpcy5pc0VuYWJsZWQgPSBmYWxzZTtcbn07XG5cbi8vIC0tLS0tICAtLS0tLSAvL1xuXG5QYWNrZXJ5LlJlY3QgPSBSZWN0O1xuUGFja2VyeS5QYWNrZXIgPSBQYWNrZXI7XG5cbnJldHVybiBQYWNrZXJ5O1xuXG59KSk7XG4iLCIvKipcbiAqIFJlY3RcbiAqIGxvdy1sZXZlbCB1dGlsaXR5IGNsYXNzIGZvciBiYXNpYyBnZW9tZXRyeVxuICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qIGpzaGludCBzdHJpY3Q6IGZhbHNlICovIC8qIGdsb2JhbHMgZGVmaW5lLCBtb2R1bGUgKi9cbiAgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAvLyBBTURcbiAgICBkZWZpbmUoIGZhY3RvcnkgKTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgd2luZG93LlBhY2tlcnkgPSB3aW5kb3cuUGFja2VyeSB8fCB7fTtcbiAgICB3aW5kb3cuUGFja2VyeS5SZWN0ID0gZmFjdG9yeSgpO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSgpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gUmVjdCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5mdW5jdGlvbiBSZWN0KCBwcm9wcyApIHtcbiAgLy8gZXh0ZW5kIHByb3BlcnRpZXMgZnJvbSBkZWZhdWx0c1xuICBmb3IgKCB2YXIgcHJvcCBpbiBSZWN0LmRlZmF1bHRzICkge1xuICAgIHRoaXNbIHByb3AgXSA9IFJlY3QuZGVmYXVsdHNbIHByb3AgXTtcbiAgfVxuXG4gIGZvciAoIHByb3AgaW4gcHJvcHMgKSB7XG4gICAgdGhpc1sgcHJvcCBdID0gcHJvcHNbIHByb3AgXTtcbiAgfVxuXG59XG5cblJlY3QuZGVmYXVsdHMgPSB7XG4gIHg6IDAsXG4gIHk6IDAsXG4gIHdpZHRoOiAwLFxuICBoZWlnaHQ6IDBcbn07XG5cbnZhciBwcm90byA9IFJlY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBvciBub3QgdGhpcyByZWN0YW5nbGUgd2hvbGx5IGVuY2xvc2VzIGFub3RoZXIgcmVjdGFuZ2xlIG9yIHBvaW50LlxuICogQHBhcmFtIHtSZWN0fSByZWN0XG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbioqL1xucHJvdG8uY29udGFpbnMgPSBmdW5jdGlvbiggcmVjdCApIHtcbiAgLy8gcG9pbnRzIGRvbid0IGhhdmUgd2lkdGggb3IgaGVpZ2h0XG4gIHZhciBvdGhlcldpZHRoID0gcmVjdC53aWR0aCB8fCAwO1xuICB2YXIgb3RoZXJIZWlnaHQgPSByZWN0LmhlaWdodCB8fCAwO1xuICByZXR1cm4gdGhpcy54IDw9IHJlY3QueCAmJlxuICAgIHRoaXMueSA8PSByZWN0LnkgJiZcbiAgICB0aGlzLnggKyB0aGlzLndpZHRoID49IHJlY3QueCArIG90aGVyV2lkdGggJiZcbiAgICB0aGlzLnkgKyB0aGlzLmhlaWdodCA+PSByZWN0LnkgKyBvdGhlckhlaWdodDtcbn07XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0aGUgcmVjdGFuZ2xlIGludGVyc2VjdHMgd2l0aCBhbm90aGVyLlxuICogQHBhcmFtIHtSZWN0fSByZWN0XG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbioqL1xucHJvdG8ub3ZlcmxhcHMgPSBmdW5jdGlvbiggcmVjdCApIHtcbiAgdmFyIHRoaXNSaWdodCA9IHRoaXMueCArIHRoaXMud2lkdGg7XG4gIHZhciB0aGlzQm90dG9tID0gdGhpcy55ICsgdGhpcy5oZWlnaHQ7XG4gIHZhciByZWN0UmlnaHQgPSByZWN0LnggKyByZWN0LndpZHRoO1xuICB2YXIgcmVjdEJvdHRvbSA9IHJlY3QueSArIHJlY3QuaGVpZ2h0O1xuXG4gIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzMwNjMzMlxuICByZXR1cm4gdGhpcy54IDwgcmVjdFJpZ2h0ICYmXG4gICAgdGhpc1JpZ2h0ID4gcmVjdC54ICYmXG4gICAgdGhpcy55IDwgcmVjdEJvdHRvbSAmJlxuICAgIHRoaXNCb3R0b20gPiByZWN0Lnk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7UmVjdH0gcmVjdCAtIHRoZSBvdmVybGFwcGluZyByZWN0XG4gKiBAcmV0dXJucyB7QXJyYXl9IGZyZWVSZWN0cyAtIHJlY3RzIHJlcHJlc2VudGluZyB0aGUgYXJlYSBhcm91bmQgdGhlIHJlY3RcbioqL1xucHJvdG8uZ2V0TWF4aW1hbEZyZWVSZWN0cyA9IGZ1bmN0aW9uKCByZWN0ICkge1xuXG4gIC8vIGlmIG5vIGludGVyc2VjdGlvbiwgcmV0dXJuIGZhbHNlXG4gIGlmICggIXRoaXMub3ZlcmxhcHMoIHJlY3QgKSApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgZnJlZVJlY3RzID0gW107XG4gIHZhciBmcmVlUmVjdDtcblxuICB2YXIgdGhpc1JpZ2h0ID0gdGhpcy54ICsgdGhpcy53aWR0aDtcbiAgdmFyIHRoaXNCb3R0b20gPSB0aGlzLnkgKyB0aGlzLmhlaWdodDtcbiAgdmFyIHJlY3RSaWdodCA9IHJlY3QueCArIHJlY3Qud2lkdGg7XG4gIHZhciByZWN0Qm90dG9tID0gcmVjdC55ICsgcmVjdC5oZWlnaHQ7XG5cbiAgLy8gdG9wXG4gIGlmICggdGhpcy55IDwgcmVjdC55ICkge1xuICAgIGZyZWVSZWN0ID0gbmV3IFJlY3Qoe1xuICAgICAgeDogdGhpcy54LFxuICAgICAgeTogdGhpcy55LFxuICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgICBoZWlnaHQ6IHJlY3QueSAtIHRoaXMueVxuICAgIH0pO1xuICAgIGZyZWVSZWN0cy5wdXNoKCBmcmVlUmVjdCApO1xuICB9XG5cbiAgLy8gcmlnaHRcbiAgaWYgKCB0aGlzUmlnaHQgPiByZWN0UmlnaHQgKSB7XG4gICAgZnJlZVJlY3QgPSBuZXcgUmVjdCh7XG4gICAgICB4OiByZWN0UmlnaHQsXG4gICAgICB5OiB0aGlzLnksXG4gICAgICB3aWR0aDogdGhpc1JpZ2h0IC0gcmVjdFJpZ2h0LFxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodFxuICAgIH0pO1xuICAgIGZyZWVSZWN0cy5wdXNoKCBmcmVlUmVjdCApO1xuICB9XG5cbiAgLy8gYm90dG9tXG4gIGlmICggdGhpc0JvdHRvbSA+IHJlY3RCb3R0b20gKSB7XG4gICAgZnJlZVJlY3QgPSBuZXcgUmVjdCh7XG4gICAgICB4OiB0aGlzLngsXG4gICAgICB5OiByZWN0Qm90dG9tLFxuICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXNCb3R0b20gLSByZWN0Qm90dG9tXG4gICAgfSk7XG4gICAgZnJlZVJlY3RzLnB1c2goIGZyZWVSZWN0ICk7XG4gIH1cblxuICAvLyBsZWZ0XG4gIGlmICggdGhpcy54IDwgcmVjdC54ICkge1xuICAgIGZyZWVSZWN0ID0gbmV3IFJlY3Qoe1xuICAgICAgeDogdGhpcy54LFxuICAgICAgeTogdGhpcy55LFxuICAgICAgd2lkdGg6IHJlY3QueCAtIHRoaXMueCxcbiAgICAgIGhlaWdodDogdGhpcy5oZWlnaHRcbiAgICB9KTtcbiAgICBmcmVlUmVjdHMucHVzaCggZnJlZVJlY3QgKTtcbiAgfVxuXG4gIHJldHVybiBmcmVlUmVjdHM7XG59O1xuXG5wcm90by5jYW5GaXQgPSBmdW5jdGlvbiggcmVjdCApIHtcbiAgcmV0dXJuIHRoaXMud2lkdGggPj0gcmVjdC53aWR0aCAmJiB0aGlzLmhlaWdodCA+PSByZWN0LmhlaWdodDtcbn07XG5cbnJldHVybiBSZWN0O1xuXG59KSk7XG4iLCJpbXBvcnQgJGV3Qkt5JGp1c3RleHRlbmQgZnJvbSBcImp1c3QtZXh0ZW5kXCI7XG5cbmZ1bmN0aW9uICRwYXJjZWwkaW50ZXJvcERlZmF1bHQoYSkge1xuICByZXR1cm4gYSAmJiBhLl9fZXNNb2R1bGUgPyBhLmRlZmF1bHQgOiBhO1xufVxuXG5jbGFzcyAkNDA0MGFjZmQ4NTg0MzM4ZCRleHBvcnQkMmUyYmNkODczOWFlMDM5IHtcbiAgICAvLyBBZGQgYW4gZXZlbnQgbGlzdGVuZXIgZm9yIGdpdmVuIGV2ZW50XG4gICAgb24oZXZlbnQsIGZuKSB7XG4gICAgICAgIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7XG4gICAgICAgIH07XG4gICAgICAgIC8vIENyZWF0ZSBuYW1lc3BhY2UgZm9yIHRoaXMgZXZlbnRcbiAgICAgICAgaWYgKCF0aGlzLl9jYWxsYmFja3NbZXZlbnRdKSB0aGlzLl9jYWxsYmFja3NbZXZlbnRdID0gW107XG4gICAgICAgIHRoaXMuX2NhbGxiYWNrc1tldmVudF0ucHVzaChmbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBlbWl0KGV2ZW50LCAuLi5hcmdzKSB7XG4gICAgICAgIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7XG4gICAgICAgIH07XG4gICAgICAgIGxldCBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3NbZXZlbnRdO1xuICAgICAgICBpZiAoY2FsbGJhY2tzKSBmb3IgKGxldCBjYWxsYmFjayBvZiBjYWxsYmFja3MpY2FsbGJhY2suYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgIC8vIHRyaWdnZXIgYSBjb3JyZXNwb25kaW5nIERPTSBldmVudFxuICAgICAgICBpZiAodGhpcy5lbGVtZW50KSB0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudCh0aGlzLm1ha2VFdmVudChcImRyb3B6b25lOlwiICsgZXZlbnQsIHtcbiAgICAgICAgICAgIGFyZ3M6IGFyZ3NcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgbWFrZUV2ZW50KGV2ZW50TmFtZSwgZGV0YWlsKSB7XG4gICAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGRldGFpbDogZGV0YWlsXG4gICAgICAgIH07XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBuZXcgQ3VzdG9tRXZlbnQoZXZlbnROYW1lLCBwYXJhbXMpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIElFIDExIHN1cHBvcnRcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DdXN0b21FdmVudC9DdXN0b21FdmVudFxuICAgICAgICAgICAgdmFyIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiQ3VzdG9tRXZlbnRcIik7XG4gICAgICAgICAgICBldnQuaW5pdEN1c3RvbUV2ZW50KGV2ZW50TmFtZSwgcGFyYW1zLmJ1YmJsZXMsIHBhcmFtcy5jYW5jZWxhYmxlLCBwYXJhbXMuZGV0YWlsKTtcbiAgICAgICAgICAgIHJldHVybiBldnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gUmVtb3ZlIGV2ZW50IGxpc3RlbmVyIGZvciBnaXZlbiBldmVudC4gSWYgZm4gaXMgbm90IHByb3ZpZGVkLCBhbGwgZXZlbnRcbiAgICAvLyBsaXN0ZW5lcnMgZm9yIHRoYXQgZXZlbnQgd2lsbCBiZSByZW1vdmVkLiBJZiBuZWl0aGVyIGlzIHByb3ZpZGVkLCBhbGxcbiAgICAvLyBldmVudCBsaXN0ZW5lcnMgd2lsbCBiZSByZW1vdmVkLlxuICAgIG9mZihldmVudCwgZm4pIHtcbiAgICAgICAgaWYgKCF0aGlzLl9jYWxsYmFja3MgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2tzID0ge1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIC8vIHNwZWNpZmljIGV2ZW50XG4gICAgICAgIGxldCBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3NbZXZlbnRdO1xuICAgICAgICBpZiAoIWNhbGxiYWNrcykgcmV0dXJuIHRoaXM7XG4gICAgICAgIC8vIHJlbW92ZSBhbGwgaGFuZGxlcnNcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbZXZlbnRdO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmVtb3ZlIHNwZWNpZmljIGhhbmRsZXJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBsZXQgY2FsbGJhY2sgPSBjYWxsYmFja3NbaV07XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sgPT09IGZuKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5cblxuXG52YXIgJGZkNjAzMWY4OGRjZTJlMzIkZXhwb3J0cyA9IHt9O1xuJGZkNjAzMWY4OGRjZTJlMzIkZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiZHotcHJldmlldyBkei1maWxlLXByZXZpZXdcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiZHotaW1hZ2VcXFwiPjxpbWcgZGF0YS1kei10aHVtYm5haWw9XFxcIlxcXCI+PC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJkei1kZXRhaWxzXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZHotc2l6ZVxcXCI+PHNwYW4gZGF0YS1kei1zaXplPVxcXCJcXFwiPjwvc3Bhbj48L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZHotZmlsZW5hbWVcXFwiPjxzcGFuIGRhdGEtZHotbmFtZT1cXFwiXFxcIj48L3NwYW4+PC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcImR6LXByb2dyZXNzXFxcIj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImR6LXVwbG9hZFxcXCIgZGF0YS1kei11cGxvYWRwcm9ncmVzcz1cXFwiXFxcIj48L3NwYW4+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcImR6LWVycm9yLW1lc3NhZ2VcXFwiPjxzcGFuIGRhdGEtZHotZXJyb3JtZXNzYWdlPVxcXCJcXFwiPjwvc3Bhbj48L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcImR6LXN1Y2Nlc3MtbWFya1xcXCI+XFxuICAgIDxzdmcgd2lkdGg9XFxcIjU0XFxcIiBoZWlnaHQ9XFxcIjU0XFxcIiB2aWV3Qm94PVxcXCIwIDAgNTQgNTRcXFwiIGZpbGw9XFxcIndoaXRlXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPlxcbiAgICAgIDxwYXRoIGQ9XFxcIk0xMC4yMDcxIDI5Ljc5MjlMMTQuMjkyOSAyNS43MDcxQzE0LjY4MzQgMjUuMzE2NiAxNS4zMTY2IDI1LjMxNjYgMTUuNzA3MSAyNS43MDcxTDIxLjI5MjkgMzEuMjkyOUMyMS42ODM0IDMxLjY4MzQgMjIuMzE2NiAzMS42ODM0IDIyLjcwNzEgMzEuMjkyOUwzOC4yOTI5IDE1LjcwNzFDMzguNjgzNCAxNS4zMTY2IDM5LjMxNjYgMTUuMzE2NiAzOS43MDcxIDE1LjcwNzFMNDMuNzkyOSAxOS43OTI5QzQ0LjE4MzQgMjAuMTgzNCA0NC4xODM0IDIwLjgxNjYgNDMuNzkyOSAyMS4yMDcxTDIyLjcwNzEgNDIuMjkyOUMyMi4zMTY2IDQyLjY4MzQgMjEuNjgzNCA0Mi42ODM0IDIxLjI5MjkgNDIuMjkyOUwxMC4yMDcxIDMxLjIwNzFDOS44MTY1OCAzMC44MTY2IDkuODE2NTggMzAuMTgzNCAxMC4yMDcxIDI5Ljc5MjlaXFxcIj48L3BhdGg+XFxuICAgIDwvc3ZnPlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJkei1lcnJvci1tYXJrXFxcIj5cXG4gICAgPHN2ZyB3aWR0aD1cXFwiNTRcXFwiIGhlaWdodD1cXFwiNTRcXFwiIHZpZXdCb3g9XFxcIjAgMCA1NCA1NFxcXCIgZmlsbD1cXFwid2hpdGVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+XFxuICAgICAgPHBhdGggZD1cXFwiTTI2LjI5MjkgMjAuMjkyOUwxOS4yMDcxIDEzLjIwNzFDMTguODE2NiAxMi44MTY2IDE4LjE4MzQgMTIuODE2NiAxNy43OTI5IDEzLjIwNzFMMTMuMjA3MSAxNy43OTI5QzEyLjgxNjYgMTguMTgzNCAxMi44MTY2IDE4LjgxNjYgMTMuMjA3MSAxOS4yMDcxTDIwLjI5MjkgMjYuMjkyOUMyMC42ODM0IDI2LjY4MzQgMjAuNjgzNCAyNy4zMTY2IDIwLjI5MjkgMjcuNzA3MUwxMy4yMDcxIDM0Ljc5MjlDMTIuODE2NiAzNS4xODM0IDEyLjgxNjYgMzUuODE2NiAxMy4yMDcxIDM2LjIwNzFMMTcuNzkyOSA0MC43OTI5QzE4LjE4MzQgNDEuMTgzNCAxOC44MTY2IDQxLjE4MzQgMTkuMjA3MSA0MC43OTI5TDI2LjI5MjkgMzMuNzA3MUMyNi42ODM0IDMzLjMxNjYgMjcuMzE2NiAzMy4zMTY2IDI3LjcwNzEgMzMuNzA3MUwzNC43OTI5IDQwLjc5MjlDMzUuMTgzNCA0MS4xODM0IDM1LjgxNjYgNDEuMTgzNCAzNi4yMDcxIDQwLjc5MjlMNDAuNzkyOSAzNi4yMDcxQzQxLjE4MzQgMzUuODE2NiA0MS4xODM0IDM1LjE4MzQgNDAuNzkyOSAzNC43OTI5TDMzLjcwNzEgMjcuNzA3MUMzMy4zMTY2IDI3LjMxNjYgMzMuMzE2NiAyNi42ODM0IDMzLjcwNzEgMjYuMjkyOUw0MC43OTI5IDE5LjIwNzFDNDEuMTgzNCAxOC44MTY2IDQxLjE4MzQgMTguMTgzNCA0MC43OTI5IDE3Ljc5MjlMMzYuMjA3MSAxMy4yMDcxQzM1LjgxNjYgMTIuODE2NiAzNS4xODM0IDEyLjgxNjYgMzQuNzkyOSAxMy4yMDcxTDI3LjcwNzEgMjAuMjkyOUMyNy4zMTY2IDIwLjY4MzQgMjYuNjgzNCAyMC42ODM0IDI2LjI5MjkgMjAuMjkyOVpcXFwiPjwvcGF0aD5cXG4gICAgPC9zdmc+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG5cIjtcblxuXG5sZXQgJDRjYTM2NzE4Mjc3NmY4MGIkdmFyJGRlZmF1bHRPcHRpb25zID0ge1xuICAgIC8qKlxuICAgKiBIYXMgdG8gYmUgc3BlY2lmaWVkIG9uIGVsZW1lbnRzIG90aGVyIHRoYW4gZm9ybSAob3Igd2hlbiB0aGUgZm9ybSBkb2Vzbid0XG4gICAqIGhhdmUgYW4gYGFjdGlvbmAgYXR0cmlidXRlKS5cbiAgICpcbiAgICogWW91IGNhbiBhbHNvIHByb3ZpZGUgYSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdpdGggYGZpbGVzYCBhbmRcbiAgICogYGRhdGFCbG9ja3NgICBhbmQgbXVzdCByZXR1cm4gdGhlIHVybCBhcyBzdHJpbmcuXG4gICAqLyB1cmw6IG51bGwsXG4gICAgLyoqXG4gICAqIENhbiBiZSBjaGFuZ2VkIHRvIGBcInB1dFwiYCBpZiBuZWNlc3NhcnkuIFlvdSBjYW4gYWxzbyBwcm92aWRlIGEgZnVuY3Rpb25cbiAgICogdGhhdCB3aWxsIGJlIGNhbGxlZCB3aXRoIGBmaWxlc2AgYW5kIG11c3QgcmV0dXJuIHRoZSBtZXRob2QgKHNpbmNlIGB2My4xMi4wYCkuXG4gICAqLyBtZXRob2Q6IFwicG9zdFwiLFxuICAgIC8qKlxuICAgKiBXaWxsIGJlIHNldCBvbiB0aGUgWEhSZXF1ZXN0LlxuICAgKi8gd2l0aENyZWRlbnRpYWxzOiBmYWxzZSxcbiAgICAvKipcbiAgICogVGhlIHRpbWVvdXQgZm9yIHRoZSBYSFIgcmVxdWVzdHMgaW4gbWlsbGlzZWNvbmRzIChzaW5jZSBgdjQuNC4wYCkuXG4gICAqIElmIHNldCB0byBudWxsIG9yIDAsIG5vIHRpbWVvdXQgaXMgZ29pbmcgdG8gYmUgc2V0LlxuICAgKi8gdGltZW91dDogbnVsbCxcbiAgICAvKipcbiAgICogSG93IG1hbnkgZmlsZSB1cGxvYWRzIHRvIHByb2Nlc3MgaW4gcGFyYWxsZWwgKFNlZSB0aGVcbiAgICogRW5xdWV1aW5nIGZpbGUgdXBsb2FkcyBkb2N1bWVudGF0aW9uIHNlY3Rpb24gZm9yIG1vcmUgaW5mbylcbiAgICovIHBhcmFsbGVsVXBsb2FkczogMixcbiAgICAvKipcbiAgICogV2hldGhlciB0byBzZW5kIG11bHRpcGxlIGZpbGVzIGluIG9uZSByZXF1ZXN0LiBJZlxuICAgKiB0aGlzIGl0IHNldCB0byB0cnVlLCB0aGVuIHRoZSBmYWxsYmFjayBmaWxlIGlucHV0IGVsZW1lbnQgd2lsbFxuICAgKiBoYXZlIHRoZSBgbXVsdGlwbGVgIGF0dHJpYnV0ZSBhcyB3ZWxsLiBUaGlzIG9wdGlvbiB3aWxsXG4gICAqIGFsc28gdHJpZ2dlciBhZGRpdGlvbmFsIGV2ZW50cyAobGlrZSBgcHJvY2Vzc2luZ211bHRpcGxlYCkuIFNlZSB0aGUgZXZlbnRzXG4gICAqIGRvY3VtZW50YXRpb24gc2VjdGlvbiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICovIHVwbG9hZE11bHRpcGxlOiBmYWxzZSxcbiAgICAvKipcbiAgICogV2hldGhlciB5b3Ugd2FudCBmaWxlcyB0byBiZSB1cGxvYWRlZCBpbiBjaHVua3MgdG8geW91ciBzZXJ2ZXIuIFRoaXMgY2FuJ3QgYmVcbiAgICogdXNlZCBpbiBjb21iaW5hdGlvbiB3aXRoIGB1cGxvYWRNdWx0aXBsZWAuXG4gICAqXG4gICAqIFNlZSBbY2h1bmtzVXBsb2FkZWRdKCNjb25maWctY2h1bmtzVXBsb2FkZWQpIGZvciB0aGUgY2FsbGJhY2sgdG8gZmluYWxpc2UgYW4gdXBsb2FkLlxuICAgKi8gY2h1bmtpbmc6IGZhbHNlLFxuICAgIC8qKlxuICAgKiBJZiBgY2h1bmtpbmdgIGlzIGVuYWJsZWQsIHRoaXMgZGVmaW5lcyB3aGV0aGVyICoqZXZlcnkqKiBmaWxlIHNob3VsZCBiZSBjaHVua2VkLFxuICAgKiBldmVuIGlmIHRoZSBmaWxlIHNpemUgaXMgYmVsb3cgY2h1bmtTaXplLiBUaGlzIG1lYW5zLCB0aGF0IHRoZSBhZGRpdGlvbmFsIGNodW5rXG4gICAqIGZvcm0gZGF0YSB3aWxsIGJlIHN1Ym1pdHRlZCBhbmQgdGhlIGBjaHVua3NVcGxvYWRlZGAgY2FsbGJhY2sgd2lsbCBiZSBpbnZva2VkLlxuICAgKi8gZm9yY2VDaHVua2luZzogZmFsc2UsXG4gICAgLyoqXG4gICAqIElmIGBjaHVua2luZ2AgaXMgYHRydWVgLCB0aGVuIHRoaXMgZGVmaW5lcyB0aGUgY2h1bmsgc2l6ZSBpbiBieXRlcy5cbiAgICovIGNodW5rU2l6ZTogMjA5NzE1MixcbiAgICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgaW5kaXZpZHVhbCBjaHVua3Mgb2YgYSBmaWxlIGFyZSBiZWluZyB1cGxvYWRlZCBzaW11bHRhbmVvdXNseS5cbiAgICovIHBhcmFsbGVsQ2h1bmtVcGxvYWRzOiBmYWxzZSxcbiAgICAvKipcbiAgICogV2hldGhlciBhIGNodW5rIHNob3VsZCBiZSByZXRyaWVkIGlmIGl0IGZhaWxzLlxuICAgKi8gcmV0cnlDaHVua3M6IGZhbHNlLFxuICAgIC8qKlxuICAgKiBJZiBgcmV0cnlDaHVua3NgIGlzIHRydWUsIGhvdyBtYW55IHRpbWVzIHNob3VsZCBpdCBiZSByZXRyaWVkLlxuICAgKi8gcmV0cnlDaHVua3NMaW1pdDogMyxcbiAgICAvKipcbiAgICogVGhlIG1heGltdW0gZmlsZXNpemUgKGluIE1pQikgdGhhdCBpcyBhbGxvd2VkIHRvIGJlIHVwbG9hZGVkLlxuICAgKi8gbWF4RmlsZXNpemU6IDI1NixcbiAgICAvKipcbiAgICogVGhlIG5hbWUgb2YgdGhlIGZpbGUgcGFyYW0gdGhhdCBnZXRzIHRyYW5zZmVycmVkLlxuICAgKiAqKk5PVEUqKjogSWYgeW91IGhhdmUgdGhlIG9wdGlvbiAgYHVwbG9hZE11bHRpcGxlYCBzZXQgdG8gYHRydWVgLCB0aGVuXG4gICAqIERyb3B6b25lIHdpbGwgYXBwZW5kIGBbXWAgdG8gdGhlIG5hbWUuXG4gICAqLyBwYXJhbU5hbWU6IFwiZmlsZVwiLFxuICAgIC8qKlxuICAgKiBXaGV0aGVyIHRodW1ibmFpbHMgZm9yIGltYWdlcyBzaG91bGQgYmUgZ2VuZXJhdGVkXG4gICAqLyBjcmVhdGVJbWFnZVRodW1ibmFpbHM6IHRydWUsXG4gICAgLyoqXG4gICAqIEluIE1CLiBXaGVuIHRoZSBmaWxlbmFtZSBleGNlZWRzIHRoaXMgbGltaXQsIHRoZSB0aHVtYm5haWwgd2lsbCBub3QgYmUgZ2VuZXJhdGVkLlxuICAgKi8gbWF4VGh1bWJuYWlsRmlsZXNpemU6IDEwLFxuICAgIC8qKlxuICAgKiBJZiBgbnVsbGAsIHRoZSByYXRpbyBvZiB0aGUgaW1hZ2Ugd2lsbCBiZSB1c2VkIHRvIGNhbGN1bGF0ZSBpdC5cbiAgICovIHRodW1ibmFpbFdpZHRoOiAxMjAsXG4gICAgLyoqXG4gICAqIFRoZSBzYW1lIGFzIGB0aHVtYm5haWxXaWR0aGAuIElmIGJvdGggYXJlIG51bGwsIGltYWdlcyB3aWxsIG5vdCBiZSByZXNpemVkLlxuICAgKi8gdGh1bWJuYWlsSGVpZ2h0OiAxMjAsXG4gICAgLyoqXG4gICAqIEhvdyB0aGUgaW1hZ2VzIHNob3VsZCBiZSBzY2FsZWQgZG93biBpbiBjYXNlIGJvdGgsIGB0aHVtYm5haWxXaWR0aGAgYW5kIGB0aHVtYm5haWxIZWlnaHRgIGFyZSBwcm92aWRlZC5cbiAgICogQ2FuIGJlIGVpdGhlciBgY29udGFpbmAgb3IgYGNyb3BgLlxuICAgKi8gdGh1bWJuYWlsTWV0aG9kOiBcImNyb3BcIixcbiAgICAvKipcbiAgICogSWYgc2V0LCBpbWFnZXMgd2lsbCBiZSByZXNpemVkIHRvIHRoZXNlIGRpbWVuc2lvbnMgYmVmb3JlIGJlaW5nICoqdXBsb2FkZWQqKi5cbiAgICogSWYgb25seSBvbmUsIGByZXNpemVXaWR0aGAgKipvcioqIGByZXNpemVIZWlnaHRgIGlzIHByb3ZpZGVkLCB0aGUgb3JpZ2luYWwgYXNwZWN0XG4gICAqIHJhdGlvIG9mIHRoZSBmaWxlIHdpbGwgYmUgcHJlc2VydmVkLlxuICAgKlxuICAgKiBUaGUgYG9wdGlvbnMudHJhbnNmb3JtRmlsZWAgZnVuY3Rpb24gdXNlcyB0aGVzZSBvcHRpb25zLCBzbyBpZiB0aGUgYHRyYW5zZm9ybUZpbGVgIGZ1bmN0aW9uXG4gICAqIGlzIG92ZXJyaWRkZW4sIHRoZXNlIG9wdGlvbnMgZG9uJ3QgZG8gYW55dGhpbmcuXG4gICAqLyByZXNpemVXaWR0aDogbnVsbCxcbiAgICAvKipcbiAgICogU2VlIGByZXNpemVXaWR0aGAuXG4gICAqLyByZXNpemVIZWlnaHQ6IG51bGwsXG4gICAgLyoqXG4gICAqIFRoZSBtaW1lIHR5cGUgb2YgdGhlIHJlc2l6ZWQgaW1hZ2UgKGJlZm9yZSBpdCBnZXRzIHVwbG9hZGVkIHRvIHRoZSBzZXJ2ZXIpLlxuICAgKiBJZiBgbnVsbGAgdGhlIG9yaWdpbmFsIG1pbWUgdHlwZSB3aWxsIGJlIHVzZWQuIFRvIGZvcmNlIGpwZWcsIGZvciBleGFtcGxlLCB1c2UgYGltYWdlL2pwZWdgLlxuICAgKiBTZWUgYHJlc2l6ZVdpZHRoYCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICovIHJlc2l6ZU1pbWVUeXBlOiBudWxsLFxuICAgIC8qKlxuICAgKiBUaGUgcXVhbGl0eSBvZiB0aGUgcmVzaXplZCBpbWFnZXMuIFNlZSBgcmVzaXplV2lkdGhgLlxuICAgKi8gcmVzaXplUXVhbGl0eTogMC44LFxuICAgIC8qKlxuICAgKiBIb3cgdGhlIGltYWdlcyBzaG91bGQgYmUgc2NhbGVkIGRvd24gaW4gY2FzZSBib3RoLCBgcmVzaXplV2lkdGhgIGFuZCBgcmVzaXplSGVpZ2h0YCBhcmUgcHJvdmlkZWQuXG4gICAqIENhbiBiZSBlaXRoZXIgYGNvbnRhaW5gIG9yIGBjcm9wYC5cbiAgICovIHJlc2l6ZU1ldGhvZDogXCJjb250YWluXCIsXG4gICAgLyoqXG4gICAqIFRoZSBiYXNlIHRoYXQgaXMgdXNlZCB0byBjYWxjdWxhdGUgdGhlICoqZGlzcGxheWVkKiogZmlsZXNpemUuIFlvdSBjYW5cbiAgICogY2hhbmdlIHRoaXMgdG8gMTAyNCBpZiB5b3Ugd291bGQgcmF0aGVyIGRpc3BsYXkga2liaWJ5dGVzLCBtZWJpYnl0ZXMsXG4gICAqIGV0Yy4uLiAxMDI0IGlzIHRlY2huaWNhbGx5IGluY29ycmVjdCwgYmVjYXVzZSBgMTAyNCBieXRlc2AgYXJlIGAxIGtpYmlieXRlYFxuICAgKiBub3QgYDEga2lsb2J5dGVgLiBZb3UgY2FuIGNoYW5nZSB0aGlzIHRvIGAxMDI0YCBpZiB5b3UgZG9uJ3QgY2FyZSBhYm91dFxuICAgKiB2YWxpZGl0eS5cbiAgICovIGZpbGVzaXplQmFzZTogMTAwMCxcbiAgICAvKipcbiAgICogSWYgbm90IGBudWxsYCBkZWZpbmVzIGhvdyBtYW55IGZpbGVzIHRoaXMgRHJvcHpvbmUgaGFuZGxlcy4gSWYgaXQgZXhjZWVkcyxcbiAgICogdGhlIGV2ZW50IGBtYXhmaWxlc2V4Y2VlZGVkYCB3aWxsIGJlIGNhbGxlZC4gVGhlIGRyb3B6b25lIGVsZW1lbnQgZ2V0cyB0aGVcbiAgICogY2xhc3MgYGR6LW1heC1maWxlcy1yZWFjaGVkYCBhY2NvcmRpbmdseSBzbyB5b3UgY2FuIHByb3ZpZGUgdmlzdWFsXG4gICAqIGZlZWRiYWNrLlxuICAgKi8gbWF4RmlsZXM6IG51bGwsXG4gICAgLyoqXG4gICAqIEFuIG9wdGlvbmFsIG9iamVjdCB0byBzZW5kIGFkZGl0aW9uYWwgaGVhZGVycyB0byB0aGUgc2VydmVyLiBFZzpcbiAgICogYHsgXCJNeS1Bd2Vzb21lLUhlYWRlclwiOiBcImhlYWRlciB2YWx1ZVwiIH1gXG4gICAqLyBoZWFkZXJzOiBudWxsLFxuICAgIC8qKlxuICAgKiBTaG91bGQgdGhlIGRlZmF1bHQgaGVhZGVycyBiZSBzZXQgb3Igbm90P1xuICAgKiBBY2NlcHQ6IGFwcGxpY2F0aW9uL2pzb24gPC0gZm9yIHJlcXVlc3RpbmcganNvbiByZXNwb25zZVxuICAgKiBDYWNoZS1Db250cm9sOiBuby1jYWNoZSA8LSBSZXF1ZXN0IHNob3VsZG50IGJlIGNhY2hlZFxuICAgKiBYLVJlcXVlc3RlZC1XaXRoOiBYTUxIdHRwUmVxdWVzdCA8LSBXZSBzZW50IHRoZSByZXF1ZXN0IHZpYSBYTUxIdHRwUmVxdWVzdFxuICAgKi8gZGVmYXVsdEhlYWRlcnM6IHRydWUsXG4gICAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGRyb3B6b25lIGVsZW1lbnQgaXRzZWxmIHdpbGwgYmUgY2xpY2thYmxlLCBpZiBgZmFsc2VgXG4gICAqIG5vdGhpbmcgd2lsbCBiZSBjbGlja2FibGUuXG4gICAqXG4gICAqIFlvdSBjYW4gYWxzbyBwYXNzIGFuIEhUTUwgZWxlbWVudCwgYSBDU1Mgc2VsZWN0b3IgKGZvciBtdWx0aXBsZSBlbGVtZW50cylcbiAgICogb3IgYW4gYXJyYXkgb2YgdGhvc2UuIEluIHRoYXQgY2FzZSwgYWxsIG9mIHRob3NlIGVsZW1lbnRzIHdpbGwgdHJpZ2dlciBhblxuICAgKiB1cGxvYWQgd2hlbiBjbGlja2VkLlxuICAgKi8gY2xpY2thYmxlOiB0cnVlLFxuICAgIC8qKlxuICAgKiBXaGV0aGVyIGhpZGRlbiBmaWxlcyBpbiBkaXJlY3RvcmllcyBzaG91bGQgYmUgaWdub3JlZC5cbiAgICovIGlnbm9yZUhpZGRlbkZpbGVzOiB0cnVlLFxuICAgIC8qKlxuICAgKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiBgYWNjZXB0YCBjaGVja3MgdGhlIGZpbGUncyBtaW1lIHR5cGUgb3JcbiAgICogZXh0ZW5zaW9uIGFnYWluc3QgdGhpcyBsaXN0LiBUaGlzIGlzIGEgY29tbWEgc2VwYXJhdGVkIGxpc3Qgb2YgbWltZVxuICAgKiB0eXBlcyBvciBmaWxlIGV4dGVuc2lvbnMuXG4gICAqXG4gICAqIEVnLjogYGltYWdlLyosYXBwbGljYXRpb24vcGRmLC5wc2RgXG4gICAqXG4gICAqIElmIHRoZSBEcm9wem9uZSBpcyBgY2xpY2thYmxlYCB0aGlzIG9wdGlvbiB3aWxsIGFsc28gYmUgdXNlZCBhc1xuICAgKiBbYGFjY2VwdGBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvSFRNTC9FbGVtZW50L2lucHV0I2F0dHItYWNjZXB0KVxuICAgKiBwYXJhbWV0ZXIgb24gdGhlIGhpZGRlbiBmaWxlIGlucHV0IGFzIHdlbGwuXG4gICAqLyBhY2NlcHRlZEZpbGVzOiBudWxsLFxuICAgIC8qKlxuICAgKiAqKkRlcHJlY2F0ZWQhKipcbiAgICogVXNlIGFjY2VwdGVkRmlsZXMgaW5zdGVhZC5cbiAgICovIGFjY2VwdGVkTWltZVR5cGVzOiBudWxsLFxuICAgIC8qKlxuICAgKiBJZiBmYWxzZSwgZmlsZXMgd2lsbCBiZSBhZGRlZCB0byB0aGUgcXVldWUgYnV0IHRoZSBxdWV1ZSB3aWxsIG5vdCBiZVxuICAgKiBwcm9jZXNzZWQgYXV0b21hdGljYWxseS5cbiAgICogVGhpcyBjYW4gYmUgdXNlZnVsIGlmIHlvdSBuZWVkIHNvbWUgYWRkaXRpb25hbCB1c2VyIGlucHV0IGJlZm9yZSBzZW5kaW5nXG4gICAqIGZpbGVzIChvciBpZiB5b3Ugd2FudCB3YW50IGFsbCBmaWxlcyBzZW50IGF0IG9uY2UpLlxuICAgKiBJZiB5b3UncmUgcmVhZHkgdG8gc2VuZCB0aGUgZmlsZSBzaW1wbHkgY2FsbCBgbXlEcm9wem9uZS5wcm9jZXNzUXVldWUoKWAuXG4gICAqXG4gICAqIFNlZSB0aGUgW2VucXVldWluZyBmaWxlIHVwbG9hZHNdKCNlbnF1ZXVpbmctZmlsZS11cGxvYWRzKSBkb2N1bWVudGF0aW9uXG4gICAqIHNlY3Rpb24gZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gICAqLyBhdXRvUHJvY2Vzc1F1ZXVlOiB0cnVlLFxuICAgIC8qKlxuICAgKiBJZiBmYWxzZSwgZmlsZXMgYWRkZWQgdG8gdGhlIGRyb3B6b25lIHdpbGwgbm90IGJlIHF1ZXVlZCBieSBkZWZhdWx0LlxuICAgKiBZb3UnbGwgaGF2ZSB0byBjYWxsIGBlbnF1ZXVlRmlsZShmaWxlKWAgbWFudWFsbHkuXG4gICAqLyBhdXRvUXVldWU6IHRydWUsXG4gICAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhpcyB3aWxsIGFkZCBhIGxpbmsgdG8gZXZlcnkgZmlsZSBwcmV2aWV3IHRvIHJlbW92ZSBvciBjYW5jZWwgKGlmXG4gICAqIGFscmVhZHkgdXBsb2FkaW5nKSB0aGUgZmlsZS4gVGhlIGBkaWN0Q2FuY2VsVXBsb2FkYCwgYGRpY3RDYW5jZWxVcGxvYWRDb25maXJtYXRpb25gXG4gICAqIGFuZCBgZGljdFJlbW92ZUZpbGVgIG9wdGlvbnMgYXJlIHVzZWQgZm9yIHRoZSB3b3JkaW5nLlxuICAgKi8gYWRkUmVtb3ZlTGlua3M6IGZhbHNlLFxuICAgIC8qKlxuICAgKiBEZWZpbmVzIHdoZXJlIHRvIGRpc3BsYXkgdGhlIGZpbGUgcHJldmlld3Mg4oCTIGlmIGBudWxsYCB0aGVcbiAgICogRHJvcHpvbmUgZWxlbWVudCBpdHNlbGYgaXMgdXNlZC4gQ2FuIGJlIGEgcGxhaW4gYEhUTUxFbGVtZW50YCBvciBhIENTU1xuICAgKiBzZWxlY3Rvci4gVGhlIGVsZW1lbnQgc2hvdWxkIGhhdmUgdGhlIGBkcm9wem9uZS1wcmV2aWV3c2AgY2xhc3Mgc29cbiAgICogdGhlIHByZXZpZXdzIGFyZSBkaXNwbGF5ZWQgcHJvcGVybHkuXG4gICAqLyBwcmV2aWV3c0NvbnRhaW5lcjogbnVsbCxcbiAgICAvKipcbiAgICogU2V0IHRoaXMgdG8gYHRydWVgIGlmIHlvdSBkb24ndCB3YW50IHByZXZpZXdzIHRvIGJlIHNob3duLlxuICAgKi8gZGlzYWJsZVByZXZpZXdzOiBmYWxzZSxcbiAgICAvKipcbiAgICogVGhpcyBpcyB0aGUgZWxlbWVudCB0aGUgaGlkZGVuIGlucHV0IGZpZWxkICh3aGljaCBpcyB1c2VkIHdoZW4gY2xpY2tpbmcgb24gdGhlXG4gICAqIGRyb3B6b25lIHRvIHRyaWdnZXIgZmlsZSBzZWxlY3Rpb24pIHdpbGwgYmUgYXBwZW5kZWQgdG8uIFRoaXMgbWlnaHRcbiAgICogYmUgaW1wb3J0YW50IGluIGNhc2UgeW91IHVzZSBmcmFtZXdvcmtzIHRvIHN3aXRjaCB0aGUgY29udGVudCBvZiB5b3VyIHBhZ2UuXG4gICAqXG4gICAqIENhbiBiZSBhIHNlbGVjdG9yIHN0cmluZywgb3IgYW4gZWxlbWVudCBkaXJlY3RseS5cbiAgICovIGhpZGRlbklucHV0Q29udGFpbmVyOiBcImJvZHlcIixcbiAgICAvKipcbiAgICogSWYgbnVsbCwgbm8gY2FwdHVyZSB0eXBlIHdpbGwgYmUgc3BlY2lmaWVkXG4gICAqIElmIGNhbWVyYSwgbW9iaWxlIGRldmljZXMgd2lsbCBza2lwIHRoZSBmaWxlIHNlbGVjdGlvbiBhbmQgY2hvb3NlIGNhbWVyYVxuICAgKiBJZiBtaWNyb3Bob25lLCBtb2JpbGUgZGV2aWNlcyB3aWxsIHNraXAgdGhlIGZpbGUgc2VsZWN0aW9uIGFuZCBjaG9vc2UgdGhlIG1pY3JvcGhvbmVcbiAgICogSWYgY2FtY29yZGVyLCBtb2JpbGUgZGV2aWNlcyB3aWxsIHNraXAgdGhlIGZpbGUgc2VsZWN0aW9uIGFuZCBjaG9vc2UgdGhlIGNhbWVyYSBpbiB2aWRlbyBtb2RlXG4gICAqIE9uIGFwcGxlIGRldmljZXMgbXVsdGlwbGUgbXVzdCBiZSBzZXQgdG8gZmFsc2UuICBBY2NlcHRlZEZpbGVzIG1heSBuZWVkIHRvXG4gICAqIGJlIHNldCB0byBhbiBhcHByb3ByaWF0ZSBtaW1lIHR5cGUgKGUuZy4gXCJpbWFnZS8qXCIsIFwiYXVkaW8vKlwiLCBvciBcInZpZGVvLypcIikuXG4gICAqLyBjYXB0dXJlOiBudWxsLFxuICAgIC8qKlxuICAgKiAqKkRlcHJlY2F0ZWQqKi4gVXNlIGByZW5hbWVGaWxlYCBpbnN0ZWFkLlxuICAgKi8gcmVuYW1lRmlsZW5hbWU6IG51bGwsXG4gICAgLyoqXG4gICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBpbnZva2VkIGJlZm9yZSB0aGUgZmlsZSBpcyB1cGxvYWRlZCB0byB0aGUgc2VydmVyIGFuZCByZW5hbWVzIHRoZSBmaWxlLlxuICAgKiBUaGlzIGZ1bmN0aW9uIGdldHMgdGhlIGBGaWxlYCBhcyBhcmd1bWVudCBhbmQgY2FuIHVzZSB0aGUgYGZpbGUubmFtZWAuIFRoZSBhY3R1YWwgbmFtZSBvZiB0aGVcbiAgICogZmlsZSB0aGF0IGdldHMgdXNlZCBkdXJpbmcgdGhlIHVwbG9hZCBjYW4gYmUgYWNjZXNzZWQgdGhyb3VnaCBgZmlsZS51cGxvYWQuZmlsZW5hbWVgLlxuICAgKi8gcmVuYW1lRmlsZTogbnVsbCxcbiAgICAvKipcbiAgICogSWYgYHRydWVgIHRoZSBmYWxsYmFjayB3aWxsIGJlIGZvcmNlZC4gVGhpcyBpcyB2ZXJ5IHVzZWZ1bCB0byB0ZXN0IHlvdXIgc2VydmVyXG4gICAqIGltcGxlbWVudGF0aW9ucyBmaXJzdCBhbmQgbWFrZSBzdXJlIHRoYXQgZXZlcnl0aGluZyB3b3JrcyBhc1xuICAgKiBleHBlY3RlZCB3aXRob3V0IGRyb3B6b25lIGlmIHlvdSBleHBlcmllbmNlIHByb2JsZW1zLCBhbmQgdG8gdGVzdFxuICAgKiBob3cgeW91ciBmYWxsYmFja3Mgd2lsbCBsb29rLlxuICAgKi8gZm9yY2VGYWxsYmFjazogZmFsc2UsXG4gICAgLyoqXG4gICAqIFRoZSB0ZXh0IHVzZWQgYmVmb3JlIGFueSBmaWxlcyBhcmUgZHJvcHBlZC5cbiAgICovIGRpY3REZWZhdWx0TWVzc2FnZTogXCJEcm9wIGZpbGVzIGhlcmUgdG8gdXBsb2FkXCIsXG4gICAgLyoqXG4gICAqIFRoZSB0ZXh0IHRoYXQgcmVwbGFjZXMgdGhlIGRlZmF1bHQgbWVzc2FnZSB0ZXh0IGl0IHRoZSBicm93c2VyIGlzIG5vdCBzdXBwb3J0ZWQuXG4gICAqLyBkaWN0RmFsbGJhY2tNZXNzYWdlOiBcIllvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IGRyYWcnbidkcm9wIGZpbGUgdXBsb2Fkcy5cIixcbiAgICAvKipcbiAgICogVGhlIHRleHQgdGhhdCB3aWxsIGJlIGFkZGVkIGJlZm9yZSB0aGUgZmFsbGJhY2sgZm9ybS5cbiAgICogSWYgeW91IHByb3ZpZGUgYSAgZmFsbGJhY2sgZWxlbWVudCB5b3Vyc2VsZiwgb3IgaWYgdGhpcyBvcHRpb24gaXMgYG51bGxgIHRoaXMgd2lsbFxuICAgKiBiZSBpZ25vcmVkLlxuICAgKi8gZGljdEZhbGxiYWNrVGV4dDogXCJQbGVhc2UgdXNlIHRoZSBmYWxsYmFjayBmb3JtIGJlbG93IHRvIHVwbG9hZCB5b3VyIGZpbGVzIGxpa2UgaW4gdGhlIG9sZGVuIGRheXMuXCIsXG4gICAgLyoqXG4gICAqIElmIHRoZSBmaWxlc2l6ZSBpcyB0b28gYmlnLlxuICAgKiBge3tmaWxlc2l6ZX19YCBhbmQgYHt7bWF4RmlsZXNpemV9fWAgd2lsbCBiZSByZXBsYWNlZCB3aXRoIHRoZSByZXNwZWN0aXZlIGNvbmZpZ3VyYXRpb24gdmFsdWVzLlxuICAgKi8gZGljdEZpbGVUb29CaWc6IFwiRmlsZSBpcyB0b28gYmlnICh7e2ZpbGVzaXplfX1NaUIpLiBNYXggZmlsZXNpemU6IHt7bWF4RmlsZXNpemV9fU1pQi5cIixcbiAgICAvKipcbiAgICogSWYgdGhlIGZpbGUgZG9lc24ndCBtYXRjaCB0aGUgZmlsZSB0eXBlLlxuICAgKi8gZGljdEludmFsaWRGaWxlVHlwZTogXCJZb3UgY2FuJ3QgdXBsb2FkIGZpbGVzIG9mIHRoaXMgdHlwZS5cIixcbiAgICAvKipcbiAgICogSWYgdGhlIHNlcnZlciByZXNwb25zZSB3YXMgaW52YWxpZC5cbiAgICogYHt7c3RhdHVzQ29kZX19YCB3aWxsIGJlIHJlcGxhY2VkIHdpdGggdGhlIHNlcnZlcnMgc3RhdHVzIGNvZGUuXG4gICAqLyBkaWN0UmVzcG9uc2VFcnJvcjogXCJTZXJ2ZXIgcmVzcG9uZGVkIHdpdGgge3tzdGF0dXNDb2RlfX0gY29kZS5cIixcbiAgICAvKipcbiAgICogSWYgYGFkZFJlbW92ZUxpbmtzYCBpcyB0cnVlLCB0aGUgdGV4dCB0byBiZSB1c2VkIGZvciB0aGUgY2FuY2VsIHVwbG9hZCBsaW5rLlxuICAgKi8gZGljdENhbmNlbFVwbG9hZDogXCJDYW5jZWwgdXBsb2FkXCIsXG4gICAgLyoqXG4gICAqIFRoZSB0ZXh0IHRoYXQgaXMgZGlzcGxheWVkIGlmIGFuIHVwbG9hZCB3YXMgbWFudWFsbHkgY2FuY2VsZWRcbiAgICovIGRpY3RVcGxvYWRDYW5jZWxlZDogXCJVcGxvYWQgY2FuY2VsZWQuXCIsXG4gICAgLyoqXG4gICAqIElmIGBhZGRSZW1vdmVMaW5rc2AgaXMgdHJ1ZSwgdGhlIHRleHQgdG8gYmUgdXNlZCBmb3IgY29uZmlybWF0aW9uIHdoZW4gY2FuY2VsbGluZyB1cGxvYWQuXG4gICAqLyBkaWN0Q2FuY2VsVXBsb2FkQ29uZmlybWF0aW9uOiBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjYW5jZWwgdGhpcyB1cGxvYWQ/XCIsXG4gICAgLyoqXG4gICAqIElmIGBhZGRSZW1vdmVMaW5rc2AgaXMgdHJ1ZSwgdGhlIHRleHQgdG8gYmUgdXNlZCB0byByZW1vdmUgYSBmaWxlLlxuICAgKi8gZGljdFJlbW92ZUZpbGU6IFwiUmVtb3ZlIGZpbGVcIixcbiAgICAvKipcbiAgICogSWYgdGhpcyBpcyBub3QgbnVsbCwgdGhlbiB0aGUgdXNlciB3aWxsIGJlIHByb21wdGVkIGJlZm9yZSByZW1vdmluZyBhIGZpbGUuXG4gICAqLyBkaWN0UmVtb3ZlRmlsZUNvbmZpcm1hdGlvbjogbnVsbCxcbiAgICAvKipcbiAgICogRGlzcGxheWVkIGlmIGBtYXhGaWxlc2AgaXMgc3QgYW5kIGV4Y2VlZGVkLlxuICAgKiBUaGUgc3RyaW5nIGB7e21heEZpbGVzfX1gIHdpbGwgYmUgcmVwbGFjZWQgYnkgdGhlIGNvbmZpZ3VyYXRpb24gdmFsdWUuXG4gICAqLyBkaWN0TWF4RmlsZXNFeGNlZWRlZDogXCJZb3UgY2FuIG5vdCB1cGxvYWQgYW55IG1vcmUgZmlsZXMuXCIsXG4gICAgLyoqXG4gICAqIEFsbG93cyB5b3UgdG8gdHJhbnNsYXRlIHRoZSBkaWZmZXJlbnQgdW5pdHMuIFN0YXJ0aW5nIHdpdGggYHRiYCBmb3IgdGVyYWJ5dGVzIGFuZCBnb2luZyBkb3duIHRvXG4gICAqIGBiYCBmb3IgYnl0ZXMuXG4gICAqLyBkaWN0RmlsZVNpemVVbml0czoge1xuICAgICAgICB0YjogXCJUQlwiLFxuICAgICAgICBnYjogXCJHQlwiLFxuICAgICAgICBtYjogXCJNQlwiLFxuICAgICAgICBrYjogXCJLQlwiLFxuICAgICAgICBiOiBcImJcIlxuICAgIH0sXG4gICAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGRyb3B6b25lIGluaXRpYWxpemVkXG4gICAqIFlvdSBjYW4gYWRkIGV2ZW50IGxpc3RlbmVycyBoZXJlXG4gICAqLyBpbml0ICgpIHtcbiAgICB9LFxuICAgIC8qKlxuICAgKiBDYW4gYmUgYW4gKipvYmplY3QqKiBvZiBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgdG8gdHJhbnNmZXIgdG8gdGhlIHNlcnZlciwgKipvcioqIGEgYEZ1bmN0aW9uYFxuICAgKiB0aGF0IGdldHMgaW52b2tlZCB3aXRoIHRoZSBgZmlsZXNgLCBgeGhyYCBhbmQsIGlmIGl0J3MgYSBjaHVua2VkIHVwbG9hZCwgYGNodW5rYCBhcmd1bWVudHMuIEluIGNhc2VcbiAgICogb2YgYSBmdW5jdGlvbiwgdGhpcyBuZWVkcyB0byByZXR1cm4gYSBtYXAuXG4gICAqXG4gICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIGRvZXMgbm90aGluZyBmb3Igbm9ybWFsIHVwbG9hZHMsIGJ1dCBhZGRzIHJlbGV2YW50IGluZm9ybWF0aW9uIGZvclxuICAgKiBjaHVua2VkIHVwbG9hZHMuXG4gICAqXG4gICAqIFRoaXMgaXMgdGhlIHNhbWUgYXMgYWRkaW5nIGhpZGRlbiBpbnB1dCBmaWVsZHMgaW4gdGhlIGZvcm0gZWxlbWVudC5cbiAgICovIHBhcmFtcyAoZmlsZXMsIHhociwgY2h1bmspIHtcbiAgICAgICAgaWYgKGNodW5rKSByZXR1cm4ge1xuICAgICAgICAgICAgZHp1dWlkOiBjaHVuay5maWxlLnVwbG9hZC51dWlkLFxuICAgICAgICAgICAgZHpjaHVua2luZGV4OiBjaHVuay5pbmRleCxcbiAgICAgICAgICAgIGR6dG90YWxmaWxlc2l6ZTogY2h1bmsuZmlsZS5zaXplLFxuICAgICAgICAgICAgZHpjaHVua3NpemU6IHRoaXMub3B0aW9ucy5jaHVua1NpemUsXG4gICAgICAgICAgICBkenRvdGFsY2h1bmtjb3VudDogY2h1bmsuZmlsZS51cGxvYWQudG90YWxDaHVua0NvdW50LFxuICAgICAgICAgICAgZHpjaHVua2J5dGVvZmZzZXQ6IGNodW5rLmluZGV4ICogdGhpcy5vcHRpb25zLmNodW5rU2l6ZVxuICAgICAgICB9O1xuICAgIH0sXG4gICAgLyoqXG4gICAqIEEgZnVuY3Rpb24gdGhhdCBnZXRzIGEgW2ZpbGVdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvRE9NL0ZpbGUpXG4gICAqIGFuZCBhIGBkb25lYCBmdW5jdGlvbiBhcyBwYXJhbWV0ZXJzLlxuICAgKlxuICAgKiBJZiB0aGUgZG9uZSBmdW5jdGlvbiBpcyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCB0aGUgZmlsZSBpcyBcImFjY2VwdGVkXCIgYW5kIHdpbGxcbiAgICogYmUgcHJvY2Vzc2VkLiBJZiB5b3UgcGFzcyBhbiBlcnJvciBtZXNzYWdlLCB0aGUgZmlsZSBpcyByZWplY3RlZCwgYW5kIHRoZSBlcnJvclxuICAgKiBtZXNzYWdlIHdpbGwgYmUgZGlzcGxheWVkLlxuICAgKiBUaGlzIGZ1bmN0aW9uIHdpbGwgbm90IGJlIGNhbGxlZCBpZiB0aGUgZmlsZSBpcyB0b28gYmlnIG9yIGRvZXNuJ3QgbWF0Y2ggdGhlIG1pbWUgdHlwZXMuXG4gICAqLyBhY2NlcHQgKGZpbGUsIGRvbmUpIHtcbiAgICAgICAgcmV0dXJuIGRvbmUoKTtcbiAgICB9LFxuICAgIC8qKlxuICAgKiBUaGUgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGludm9rZWQgd2hlbiBhbGwgY2h1bmtzIGhhdmUgYmVlbiB1cGxvYWRlZCBmb3IgYSBmaWxlLlxuICAgKiBJdCBnZXRzIHRoZSBmaWxlIGZvciB3aGljaCB0aGUgY2h1bmtzIGhhdmUgYmVlbiB1cGxvYWRlZCBhcyB0aGUgZmlyc3QgcGFyYW1ldGVyLFxuICAgKiBhbmQgdGhlIGBkb25lYCBmdW5jdGlvbiBhcyBzZWNvbmQuIGBkb25lKClgIG5lZWRzIHRvIGJlIGludm9rZWQgd2hlbiBldmVyeXRoaW5nXG4gICAqIG5lZWRlZCB0byBmaW5pc2ggdGhlIHVwbG9hZCBwcm9jZXNzIGlzIGRvbmUuXG4gICAqLyBjaHVua3NVcGxvYWRlZDogZnVuY3Rpb24oZmlsZSwgZG9uZSkge1xuICAgICAgICBkb25lKCk7XG4gICAgfSxcbiAgICAvKipcbiAgICogU2VuZHMgdGhlIGZpbGUgYXMgYmluYXJ5IGJsb2IgaW4gYm9keSBpbnN0ZWFkIG9mIGZvcm0gZGF0YS5cbiAgICogSWYgdGhpcyBpcyBzZXQsIHRoZSBgcGFyYW1zYCBvcHRpb24gd2lsbCBiZSBpZ25vcmVkLlxuICAgKiBJdCdzIGFuIGVycm9yIHRvIHNldCB0aGlzIHRvIGB0cnVlYCBhbG9uZyB3aXRoIGB1cGxvYWRNdWx0aXBsZWAgc2luY2VcbiAgICogbXVsdGlwbGUgZmlsZXMgY2Fubm90IGJlIGluIGEgc2luZ2xlIGJpbmFyeSBib2R5LlxuICAgKi8gYmluYXJ5Qm9keTogZmFsc2UsXG4gICAgLyoqXG4gICAqIEdldHMgY2FsbGVkIHdoZW4gdGhlIGJyb3dzZXIgaXMgbm90IHN1cHBvcnRlZC5cbiAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gc2hvd3MgdGhlIGZhbGxiYWNrIGlucHV0IGZpZWxkIGFuZCBhZGRzXG4gICAqIGEgdGV4dC5cbiAgICovIGZhbGxiYWNrICgpIHtcbiAgICAgICAgLy8gVGhpcyBjb2RlIHNob3VsZCBwYXNzIGluIElFNy4uLiA6KFxuICAgICAgICBsZXQgbWVzc2FnZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc05hbWUgPSBgJHt0aGlzLmVsZW1lbnQuY2xhc3NOYW1lfSBkei1icm93c2VyLW5vdC1zdXBwb3J0ZWRgO1xuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLmVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJkaXZcIikpaWYgKC8oXnwgKWR6LW1lc3NhZ2UoJHwgKS8udGVzdChjaGlsZC5jbGFzc05hbWUpKSB7XG4gICAgICAgICAgICBtZXNzYWdlRWxlbWVudCA9IGNoaWxkO1xuICAgICAgICAgICAgY2hpbGQuY2xhc3NOYW1lID0gXCJkei1tZXNzYWdlXCI7IC8vIFJlbW92ZXMgdGhlICdkei1kZWZhdWx0JyBjbGFzc1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFtZXNzYWdlRWxlbWVudCkge1xuICAgICAgICAgICAgbWVzc2FnZUVsZW1lbnQgPSAkM2VkMjY5ZjJmMGZiMjI0YiRleHBvcnQkMmUyYmNkODczOWFlMDM5LmNyZWF0ZUVsZW1lbnQoJzxkaXYgY2xhc3M9XCJkei1tZXNzYWdlXCI+PHNwYW4+PC9zcGFuPjwvZGl2PicpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKG1lc3NhZ2VFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc3BhbiA9IG1lc3NhZ2VFbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic3BhblwiKVswXTtcbiAgICAgICAgaWYgKHNwYW4pIHtcbiAgICAgICAgICAgIGlmIChzcGFuLnRleHRDb250ZW50ICE9IG51bGwpIHNwYW4udGV4dENvbnRlbnQgPSB0aGlzLm9wdGlvbnMuZGljdEZhbGxiYWNrTWVzc2FnZTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHNwYW4uaW5uZXJUZXh0ICE9IG51bGwpIHNwYW4uaW5uZXJUZXh0ID0gdGhpcy5vcHRpb25zLmRpY3RGYWxsYmFja01lc3NhZ2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmdldEZhbGxiYWNrRm9ybSgpKTtcbiAgICB9LFxuICAgIC8qKlxuICAgKiBHZXRzIGNhbGxlZCB0byBjYWxjdWxhdGUgdGhlIHRodW1ibmFpbCBkaW1lbnNpb25zLlxuICAgKlxuICAgKiBJdCBnZXRzIGBmaWxlYCwgYHdpZHRoYCBhbmQgYGhlaWdodGAgKGJvdGggbWF5IGJlIGBudWxsYCkgYXMgcGFyYW1ldGVycyBhbmQgbXVzdCByZXR1cm4gYW4gb2JqZWN0IGNvbnRhaW5pbmc6XG4gICAqXG4gICAqICAtIGBzcmNXaWR0aGAgJiBgc3JjSGVpZ2h0YCAocmVxdWlyZWQpXG4gICAqICAtIGB0cmdXaWR0aGAgJiBgdHJnSGVpZ2h0YCAocmVxdWlyZWQpXG4gICAqICAtIGBzcmNYYCAmIGBzcmNZYCAob3B0aW9uYWwsIGRlZmF1bHQgYDBgKVxuICAgKiAgLSBgdHJnWGAgJiBgdHJnWWAgKG9wdGlvbmFsLCBkZWZhdWx0IGAwYClcbiAgICpcbiAgICogVGhvc2UgdmFsdWVzIGFyZSBnb2luZyB0byBiZSB1c2VkIGJ5IGBjdHguZHJhd0ltYWdlKClgLlxuICAgKi8gcmVzaXplIChmaWxlLCB3aWR0aCwgaGVpZ2h0LCByZXNpemVNZXRob2QpIHtcbiAgICAgICAgbGV0IGluZm8gPSB7XG4gICAgICAgICAgICBzcmNYOiAwLFxuICAgICAgICAgICAgc3JjWTogMCxcbiAgICAgICAgICAgIHNyY1dpZHRoOiBmaWxlLndpZHRoLFxuICAgICAgICAgICAgc3JjSGVpZ2h0OiBmaWxlLmhlaWdodFxuICAgICAgICB9O1xuICAgICAgICBsZXQgc3JjUmF0aW8gPSBmaWxlLndpZHRoIC8gZmlsZS5oZWlnaHQ7XG4gICAgICAgIC8vIEF1dG9tYXRpY2FsbHkgY2FsY3VsYXRlIGRpbWVuc2lvbnMgaWYgbm90IHNwZWNpZmllZFxuICAgICAgICBpZiAod2lkdGggPT0gbnVsbCAmJiBoZWlnaHQgPT0gbnVsbCkge1xuICAgICAgICAgICAgd2lkdGggPSBpbmZvLnNyY1dpZHRoO1xuICAgICAgICAgICAgaGVpZ2h0ID0gaW5mby5zcmNIZWlnaHQ7XG4gICAgICAgIH0gZWxzZSBpZiAod2lkdGggPT0gbnVsbCkgd2lkdGggPSBoZWlnaHQgKiBzcmNSYXRpbztcbiAgICAgICAgZWxzZSBpZiAoaGVpZ2h0ID09IG51bGwpIGhlaWdodCA9IHdpZHRoIC8gc3JjUmF0aW87XG4gICAgICAgIC8vIE1ha2Ugc3VyZSBpbWFnZXMgYXJlbid0IHVwc2NhbGVkXG4gICAgICAgIHdpZHRoID0gTWF0aC5taW4od2lkdGgsIGluZm8uc3JjV2lkdGgpO1xuICAgICAgICBoZWlnaHQgPSBNYXRoLm1pbihoZWlnaHQsIGluZm8uc3JjSGVpZ2h0KTtcbiAgICAgICAgbGV0IHRyZ1JhdGlvID0gd2lkdGggLyBoZWlnaHQ7XG4gICAgICAgIGlmIChpbmZvLnNyY1dpZHRoID4gd2lkdGggfHwgaW5mby5zcmNIZWlnaHQgPiBoZWlnaHQpIHtcbiAgICAgICAgICAgIC8vIEltYWdlIGlzIGJpZ2dlciBhbmQgbmVlZHMgcmVzY2FsaW5nXG4gICAgICAgICAgICBpZiAocmVzaXplTWV0aG9kID09PSBcImNyb3BcIikge1xuICAgICAgICAgICAgICAgIGlmIChzcmNSYXRpbyA+IHRyZ1JhdGlvKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZm8uc3JjSGVpZ2h0ID0gZmlsZS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGluZm8uc3JjV2lkdGggPSBpbmZvLnNyY0hlaWdodCAqIHRyZ1JhdGlvO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGluZm8uc3JjV2lkdGggPSBmaWxlLndpZHRoO1xuICAgICAgICAgICAgICAgICAgICBpbmZvLnNyY0hlaWdodCA9IGluZm8uc3JjV2lkdGggLyB0cmdSYXRpbztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc2l6ZU1ldGhvZCA9PT0gXCJjb250YWluXCIpIHtcbiAgICAgICAgICAgICAgICAvLyBNZXRob2QgJ2NvbnRhaW4nXG4gICAgICAgICAgICAgICAgaWYgKHNyY1JhdGlvID4gdHJnUmF0aW8pIGhlaWdodCA9IHdpZHRoIC8gc3JjUmF0aW87XG4gICAgICAgICAgICAgICAgZWxzZSB3aWR0aCA9IGhlaWdodCAqIHNyY1JhdGlvO1xuICAgICAgICAgICAgfSBlbHNlIHRocm93IG5ldyBFcnJvcihgVW5rbm93biByZXNpemVNZXRob2QgJyR7cmVzaXplTWV0aG9kfSdgKTtcbiAgICAgICAgfVxuICAgICAgICBpbmZvLnNyY1ggPSAoZmlsZS53aWR0aCAtIGluZm8uc3JjV2lkdGgpIC8gMjtcbiAgICAgICAgaW5mby5zcmNZID0gKGZpbGUuaGVpZ2h0IC0gaW5mby5zcmNIZWlnaHQpIC8gMjtcbiAgICAgICAgaW5mby50cmdXaWR0aCA9IHdpZHRoO1xuICAgICAgICBpbmZvLnRyZ0hlaWdodCA9IGhlaWdodDtcbiAgICAgICAgcmV0dXJuIGluZm87XG4gICAgfSxcbiAgICAvKipcbiAgICogQ2FuIGJlIHVzZWQgdG8gdHJhbnNmb3JtIHRoZSBmaWxlIChmb3IgZXhhbXBsZSwgcmVzaXplIGFuIGltYWdlIGlmIG5lY2Vzc2FyeSkuXG4gICAqXG4gICAqIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIHVzZXMgYHJlc2l6ZVdpZHRoYCBhbmQgYHJlc2l6ZUhlaWdodGAgKGlmIHByb3ZpZGVkKSBhbmQgcmVzaXplc1xuICAgKiBpbWFnZXMgYWNjb3JkaW5nIHRvIHRob3NlIGRpbWVuc2lvbnMuXG4gICAqXG4gICAqIEdldHMgdGhlIGBmaWxlYCBhcyB0aGUgZmlyc3QgcGFyYW1ldGVyLCBhbmQgYSBgZG9uZSgpYCBmdW5jdGlvbiBhcyB0aGUgc2Vjb25kLCB0aGF0IG5lZWRzXG4gICAqIHRvIGJlIGludm9rZWQgd2l0aCB0aGUgZmlsZSB3aGVuIHRoZSB0cmFuc2Zvcm1hdGlvbiBpcyBkb25lLlxuICAgKi8gdHJhbnNmb3JtRmlsZSAoZmlsZSwgZG9uZSkge1xuICAgICAgICBpZiAoKHRoaXMub3B0aW9ucy5yZXNpemVXaWR0aCB8fCB0aGlzLm9wdGlvbnMucmVzaXplSGVpZ2h0KSAmJiBmaWxlLnR5cGUubWF0Y2goL2ltYWdlLiovKSkgcmV0dXJuIHRoaXMucmVzaXplSW1hZ2UoZmlsZSwgdGhpcy5vcHRpb25zLnJlc2l6ZVdpZHRoLCB0aGlzLm9wdGlvbnMucmVzaXplSGVpZ2h0LCB0aGlzLm9wdGlvbnMucmVzaXplTWV0aG9kLCBkb25lKTtcbiAgICAgICAgZWxzZSByZXR1cm4gZG9uZShmaWxlKTtcbiAgICB9LFxuICAgIC8qKlxuICAgKiBBIHN0cmluZyB0aGF0IGNvbnRhaW5zIHRoZSB0ZW1wbGF0ZSB1c2VkIGZvciBlYWNoIGRyb3BwZWRcbiAgICogZmlsZS4gQ2hhbmdlIGl0IHRvIGZ1bGZpbGwgeW91ciBuZWVkcyBidXQgbWFrZSBzdXJlIHRvIHByb3Blcmx5XG4gICAqIHByb3ZpZGUgYWxsIGVsZW1lbnRzLlxuICAgKlxuICAgKiBJZiB5b3Ugd2FudCB0byB1c2UgYW4gYWN0dWFsIEhUTUwgZWxlbWVudCBpbnN0ZWFkIG9mIHByb3ZpZGluZyBhIFN0cmluZ1xuICAgKiBhcyBhIGNvbmZpZyBvcHRpb24sIHlvdSBjb3VsZCBjcmVhdGUgYSBkaXYgd2l0aCB0aGUgaWQgYHRwbGAsXG4gICAqIHB1dCB0aGUgdGVtcGxhdGUgaW5zaWRlIGl0IGFuZCBwcm92aWRlIHRoZSBlbGVtZW50IGxpa2UgdGhpczpcbiAgICpcbiAgICogICAgIGRvY3VtZW50XG4gICAqICAgICAgIC5xdWVyeVNlbGVjdG9yKCcjdHBsJylcbiAgICogICAgICAgLmlubmVySFRNTFxuICAgKlxuICAgKi8gcHJldmlld1RlbXBsYXRlOiAoLypAX19QVVJFX18qLyRwYXJjZWwkaW50ZXJvcERlZmF1bHQoJGZkNjAzMWY4OGRjZTJlMzIkZXhwb3J0cykpLFxuICAgIC8qXG4gICBUaG9zZSBmdW5jdGlvbnMgcmVnaXN0ZXIgdGhlbXNlbHZlcyB0byB0aGUgZXZlbnRzIG9uIGluaXQgYW5kIGhhbmRsZSBhbGxcbiAgIHRoZSB1c2VyIGludGVyZmFjZSBzcGVjaWZpYyBzdHVmZi4gT3ZlcndyaXRpbmcgdGhlbSB3b24ndCBicmVhayB0aGUgdXBsb2FkXG4gICBidXQgY2FuIGJyZWFrIHRoZSB3YXkgaXQncyBkaXNwbGF5ZWQuXG4gICBZb3UgY2FuIG92ZXJ3cml0ZSB0aGVtIGlmIHlvdSBkb24ndCBsaWtlIHRoZSBkZWZhdWx0IGJlaGF2aW9yLiBJZiB5b3UganVzdFxuICAgd2FudCB0byBhZGQgYW4gYWRkaXRpb25hbCBldmVudCBoYW5kbGVyLCByZWdpc3RlciBpdCBvbiB0aGUgZHJvcHpvbmUgb2JqZWN0XG4gICBhbmQgZG9uJ3Qgb3ZlcndyaXRlIHRob3NlIG9wdGlvbnMuXG4gICAqLyAvLyBUaG9zZSBhcmUgc2VsZiBleHBsYW5hdG9yeSBhbmQgc2ltcGx5IGNvbmNlcm4gdGhlIERyYWduRHJvcC5cbiAgICBkcm9wIChlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImR6LWRyYWctaG92ZXJcIik7XG4gICAgfSxcbiAgICBkcmFnc3RhcnQgKGUpIHtcbiAgICB9LFxuICAgIGRyYWdlbmQgKGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZHotZHJhZy1ob3ZlclwiKTtcbiAgICB9LFxuICAgIGRyYWdlbnRlciAoZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkei1kcmFnLWhvdmVyXCIpO1xuICAgIH0sXG4gICAgZHJhZ292ZXIgKGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZHotZHJhZy1ob3ZlclwiKTtcbiAgICB9LFxuICAgIGRyYWdsZWF2ZSAoZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkei1kcmFnLWhvdmVyXCIpO1xuICAgIH0sXG4gICAgcGFzdGUgKGUpIHtcbiAgICB9LFxuICAgIC8vIENhbGxlZCB3aGVuZXZlciB0aGVyZSBhcmUgbm8gZmlsZXMgbGVmdCBpbiB0aGUgZHJvcHpvbmUgYW55bW9yZSwgYW5kIHRoZVxuICAgIC8vIGRyb3B6b25lIHNob3VsZCBiZSBkaXNwbGF5ZWQgYXMgaWYgaW4gdGhlIGluaXRpYWwgc3RhdGUuXG4gICAgcmVzZXQgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkei1zdGFydGVkXCIpO1xuICAgIH0sXG4gICAgLy8gQ2FsbGVkIHdoZW4gYSBmaWxlIGlzIGFkZGVkIHRvIHRoZSBxdWV1ZVxuICAgIC8vIFJlY2VpdmVzIGBmaWxlYFxuICAgIGFkZGVkZmlsZSAoZmlsZSkge1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50ID09PSB0aGlzLnByZXZpZXdzQ29udGFpbmVyKSB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImR6LXN0YXJ0ZWRcIik7XG4gICAgICAgIGlmICh0aGlzLnByZXZpZXdzQ29udGFpbmVyICYmICF0aGlzLm9wdGlvbnMuZGlzYWJsZVByZXZpZXdzKSB7XG4gICAgICAgICAgICBmaWxlLnByZXZpZXdFbGVtZW50ID0gJDNlZDI2OWYyZjBmYjIyNGIkZXhwb3J0JDJlMmJjZDg3MzlhZTAzOS5jcmVhdGVFbGVtZW50KHRoaXMub3B0aW9ucy5wcmV2aWV3VGVtcGxhdGUudHJpbSgpKTtcbiAgICAgICAgICAgIGZpbGUucHJldmlld1RlbXBsYXRlID0gZmlsZS5wcmV2aWV3RWxlbWVudDsgLy8gQmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbiAgICAgICAgICAgIHRoaXMucHJldmlld3NDb250YWluZXIuYXBwZW5kQ2hpbGQoZmlsZS5wcmV2aWV3RWxlbWVudCk7XG4gICAgICAgICAgICBmb3IgKHZhciBub2RlIG9mIGZpbGUucHJldmlld0VsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWR6LW5hbWVdXCIpKW5vZGUudGV4dENvbnRlbnQgPSBmaWxlLm5hbWU7XG4gICAgICAgICAgICBmb3IgKG5vZGUgb2YgZmlsZS5wcmV2aWV3RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtZHotc2l6ZV1cIikpbm9kZS5pbm5lckhUTUwgPSB0aGlzLmZpbGVzaXplKGZpbGUuc2l6ZSk7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmFkZFJlbW92ZUxpbmtzKSB7XG4gICAgICAgICAgICAgICAgZmlsZS5fcmVtb3ZlTGluayA9ICQzZWQyNjlmMmYwZmIyMjRiJGV4cG9ydCQyZTJiY2Q4NzM5YWUwMzkuY3JlYXRlRWxlbWVudChgPGEgY2xhc3M9XCJkei1yZW1vdmVcIiBocmVmPVwiamF2YXNjcmlwdDp1bmRlZmluZWQ7XCIgZGF0YS1kei1yZW1vdmU+JHt0aGlzLm9wdGlvbnMuZGljdFJlbW92ZUZpbGV9PC9hPmApO1xuICAgICAgICAgICAgICAgIGZpbGUucHJldmlld0VsZW1lbnQuYXBwZW5kQ2hpbGQoZmlsZS5fcmVtb3ZlTGluayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgcmVtb3ZlRmlsZUV2ZW50ID0gKGUpPT57XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgaWYgKGZpbGUuc3RhdHVzID09PSAkM2VkMjY5ZjJmMGZiMjI0YiRleHBvcnQkMmUyYmNkODczOWFlMDM5LlVQTE9BRElORykgcmV0dXJuICQzZWQyNjlmMmYwZmIyMjRiJGV4cG9ydCQyZTJiY2Q4NzM5YWUwMzkuY29uZmlybSh0aGlzLm9wdGlvbnMuZGljdENhbmNlbFVwbG9hZENvbmZpcm1hdGlvbiwgKCk9PnRoaXMucmVtb3ZlRmlsZShmaWxlKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZGljdFJlbW92ZUZpbGVDb25maXJtYXRpb24pIHJldHVybiAkM2VkMjY5ZjJmMGZiMjI0YiRleHBvcnQkMmUyYmNkODczOWFlMDM5LmNvbmZpcm0odGhpcy5vcHRpb25zLmRpY3RSZW1vdmVGaWxlQ29uZmlybWF0aW9uLCAoKT0+dGhpcy5yZW1vdmVGaWxlKGZpbGUpXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIHRoaXMucmVtb3ZlRmlsZShmaWxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZm9yIChsZXQgcmVtb3ZlTGluayBvZiBmaWxlLnByZXZpZXdFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1kei1yZW1vdmVdXCIpKXJlbW92ZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZUZpbGVFdmVudCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIENhbGxlZCB3aGVuZXZlciBhIGZpbGUgaXMgcmVtb3ZlZC5cbiAgICByZW1vdmVkZmlsZSAoZmlsZSkge1xuICAgICAgICBpZiAoZmlsZS5wcmV2aWV3RWxlbWVudCAhPSBudWxsICYmIGZpbGUucHJldmlld0VsZW1lbnQucGFyZW50Tm9kZSAhPSBudWxsKSBmaWxlLnByZXZpZXdFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZmlsZS5wcmV2aWV3RWxlbWVudCk7XG4gICAgICAgIHJldHVybiB0aGlzLl91cGRhdGVNYXhGaWxlc1JlYWNoZWRDbGFzcygpO1xuICAgIH0sXG4gICAgLy8gQ2FsbGVkIHdoZW4gYSB0aHVtYm5haWwgaGFzIGJlZW4gZ2VuZXJhdGVkXG4gICAgLy8gUmVjZWl2ZXMgYGZpbGVgIGFuZCBgZGF0YVVybGBcbiAgICB0aHVtYm5haWwgKGZpbGUsIGRhdGFVcmwpIHtcbiAgICAgICAgaWYgKGZpbGUucHJldmlld0VsZW1lbnQpIHtcbiAgICAgICAgICAgIGZpbGUucHJldmlld0VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImR6LWZpbGUtcHJldmlld1wiKTtcbiAgICAgICAgICAgIGZvciAobGV0IHRodW1ibmFpbEVsZW1lbnQgb2YgZmlsZS5wcmV2aWV3RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtZHotdGh1bWJuYWlsXVwiKSl7XG4gICAgICAgICAgICAgICAgdGh1bWJuYWlsRWxlbWVudC5hbHQgPSBmaWxlLm5hbWU7XG4gICAgICAgICAgICAgICAgdGh1bWJuYWlsRWxlbWVudC5zcmMgPSBkYXRhVXJsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoKCk9PmZpbGUucHJldmlld0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcImR6LWltYWdlLXByZXZpZXdcIilcbiAgICAgICAgICAgICwgMSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIENhbGxlZCB3aGVuZXZlciBhbiBlcnJvciBvY2N1cnNcbiAgICAvLyBSZWNlaXZlcyBgZmlsZWAgYW5kIGBtZXNzYWdlYFxuICAgIGVycm9yIChmaWxlLCBtZXNzYWdlKSB7XG4gICAgICAgIGlmIChmaWxlLnByZXZpZXdFbGVtZW50KSB7XG4gICAgICAgICAgICBmaWxlLnByZXZpZXdFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkei1lcnJvclwiKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbWVzc2FnZSAhPT0gXCJzdHJpbmdcIiAmJiBtZXNzYWdlLmVycm9yKSBtZXNzYWdlID0gbWVzc2FnZS5lcnJvcjtcbiAgICAgICAgICAgIGZvciAobGV0IG5vZGUgb2YgZmlsZS5wcmV2aWV3RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtZHotZXJyb3JtZXNzYWdlXVwiKSlub2RlLnRleHRDb250ZW50ID0gbWVzc2FnZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZXJyb3JtdWx0aXBsZSAoKSB7XG4gICAgfSxcbiAgICAvLyBDYWxsZWQgd2hlbiBhIGZpbGUgZ2V0cyBwcm9jZXNzZWQuIFNpbmNlIHRoZXJlIGlzIGEgY3VlLCBub3QgYWxsIGFkZGVkXG4gICAgLy8gZmlsZXMgYXJlIHByb2Nlc3NlZCBpbW1lZGlhdGVseS5cbiAgICAvLyBSZWNlaXZlcyBgZmlsZWBcbiAgICBwcm9jZXNzaW5nIChmaWxlKSB7XG4gICAgICAgIGlmIChmaWxlLnByZXZpZXdFbGVtZW50KSB7XG4gICAgICAgICAgICBmaWxlLnByZXZpZXdFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkei1wcm9jZXNzaW5nXCIpO1xuICAgICAgICAgICAgaWYgKGZpbGUuX3JlbW92ZUxpbmspIHJldHVybiBmaWxlLl9yZW1vdmVMaW5rLmlubmVySFRNTCA9IHRoaXMub3B0aW9ucy5kaWN0Q2FuY2VsVXBsb2FkO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBwcm9jZXNzaW5nbXVsdGlwbGUgKCkge1xuICAgIH0sXG4gICAgLy8gQ2FsbGVkIHdoZW5ldmVyIHRoZSB1cGxvYWQgcHJvZ3Jlc3MgZ2V0cyB1cGRhdGVkLlxuICAgIC8vIFJlY2VpdmVzIGBmaWxlYCwgYHByb2dyZXNzYCAocGVyY2VudGFnZSAwLTEwMCkgYW5kIGBieXRlc1NlbnRgLlxuICAgIC8vIFRvIGdldCB0aGUgdG90YWwgbnVtYmVyIG9mIGJ5dGVzIG9mIHRoZSBmaWxlLCB1c2UgYGZpbGUuc2l6ZWBcbiAgICB1cGxvYWRwcm9ncmVzcyAoZmlsZSwgcHJvZ3Jlc3MsIGJ5dGVzU2VudCkge1xuICAgICAgICBpZiAoZmlsZS5wcmV2aWV3RWxlbWVudCkgZm9yIChsZXQgbm9kZSBvZiBmaWxlLnByZXZpZXdFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1kei11cGxvYWRwcm9ncmVzc11cIikpbm9kZS5ub2RlTmFtZSA9PT0gXCJQUk9HUkVTU1wiID8gbm9kZS52YWx1ZSA9IHByb2dyZXNzIDogbm9kZS5zdHlsZS53aWR0aCA9IGAke3Byb2dyZXNzfSVgO1xuICAgIH0sXG4gICAgLy8gQ2FsbGVkIHdoZW5ldmVyIHRoZSB0b3RhbCB1cGxvYWQgcHJvZ3Jlc3MgZ2V0cyB1cGRhdGVkLlxuICAgIC8vIENhbGxlZCB3aXRoIHRvdGFsVXBsb2FkUHJvZ3Jlc3MgKDAtMTAwKSwgdG90YWxCeXRlcyBhbmQgdG90YWxCeXRlc1NlbnRcbiAgICB0b3RhbHVwbG9hZHByb2dyZXNzICgpIHtcbiAgICB9LFxuICAgIC8vIENhbGxlZCBqdXN0IGJlZm9yZSB0aGUgZmlsZSBpcyBzZW50LiBHZXRzIHRoZSBgeGhyYCBvYmplY3QgYXMgc2Vjb25kXG4gICAgLy8gcGFyYW1ldGVyLCBzbyB5b3UgY2FuIG1vZGlmeSBpdCAoZm9yIGV4YW1wbGUgdG8gYWRkIGEgQ1NSRiB0b2tlbikgYW5kIGFcbiAgICAvLyBgZm9ybURhdGFgIG9iamVjdCB0byBhZGQgYWRkaXRpb25hbCBpbmZvcm1hdGlvbi5cbiAgICBzZW5kaW5nICgpIHtcbiAgICB9LFxuICAgIHNlbmRpbmdtdWx0aXBsZSAoKSB7XG4gICAgfSxcbiAgICAvLyBXaGVuIHRoZSBjb21wbGV0ZSB1cGxvYWQgaXMgZmluaXNoZWQgYW5kIHN1Y2Nlc3NmdWxcbiAgICAvLyBSZWNlaXZlcyBgZmlsZWBcbiAgICBzdWNjZXNzIChmaWxlKSB7XG4gICAgICAgIGlmIChmaWxlLnByZXZpZXdFbGVtZW50KSByZXR1cm4gZmlsZS5wcmV2aWV3RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZHotc3VjY2Vzc1wiKTtcbiAgICB9LFxuICAgIHN1Y2Nlc3NtdWx0aXBsZSAoKSB7XG4gICAgfSxcbiAgICAvLyBXaGVuIHRoZSB1cGxvYWQgaXMgY2FuY2VsZWQuXG4gICAgY2FuY2VsZWQgKGZpbGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW1pdChcImVycm9yXCIsIGZpbGUsIHRoaXMub3B0aW9ucy5kaWN0VXBsb2FkQ2FuY2VsZWQpO1xuICAgIH0sXG4gICAgY2FuY2VsZWRtdWx0aXBsZSAoKSB7XG4gICAgfSxcbiAgICAvLyBXaGVuIHRoZSB1cGxvYWQgaXMgZmluaXNoZWQsIGVpdGhlciB3aXRoIHN1Y2Nlc3Mgb3IgYW4gZXJyb3IuXG4gICAgLy8gUmVjZWl2ZXMgYGZpbGVgXG4gICAgY29tcGxldGUgKGZpbGUpIHtcbiAgICAgICAgaWYgKGZpbGUuX3JlbW92ZUxpbmspIGZpbGUuX3JlbW92ZUxpbmsuaW5uZXJIVE1MID0gdGhpcy5vcHRpb25zLmRpY3RSZW1vdmVGaWxlO1xuICAgICAgICBpZiAoZmlsZS5wcmV2aWV3RWxlbWVudCkgcmV0dXJuIGZpbGUucHJldmlld0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcImR6LWNvbXBsZXRlXCIpO1xuICAgIH0sXG4gICAgY29tcGxldGVtdWx0aXBsZSAoKSB7XG4gICAgfSxcbiAgICBtYXhmaWxlc2V4Y2VlZGVkICgpIHtcbiAgICB9LFxuICAgIG1heGZpbGVzcmVhY2hlZCAoKSB7XG4gICAgfSxcbiAgICBxdWV1ZWNvbXBsZXRlICgpIHtcbiAgICB9LFxuICAgIGFkZGVkZmlsZXMgKCkge1xuICAgIH1cbn07XG52YXIgJDRjYTM2NzE4Mjc3NmY4MGIkZXhwb3J0JDJlMmJjZDg3MzlhZTAzOSA9ICQ0Y2EzNjcxODI3NzZmODBiJHZhciRkZWZhdWx0T3B0aW9ucztcblxuXG5jbGFzcyAkM2VkMjY5ZjJmMGZiMjI0YiRleHBvcnQkMmUyYmNkODczOWFlMDM5IGV4dGVuZHMgJDQwNDBhY2ZkODU4NDMzOGQkZXhwb3J0JDJlMmJjZDg3MzlhZTAzOSB7XG4gICAgc3RhdGljIGluaXRDbGFzcygpIHtcbiAgICAgICAgLy8gRXhwb3NpbmcgdGhlIGVtaXR0ZXIgY2xhc3MsIG1haW5seSBmb3IgdGVzdHNcbiAgICAgICAgdGhpcy5wcm90b3R5cGUuRW1pdHRlciA9ICQ0MDQwYWNmZDg1ODQzMzhkJGV4cG9ydCQyZTJiY2Q4NzM5YWUwMzk7XG4gICAgICAgIC8qXG4gICAgIFRoaXMgaXMgYSBsaXN0IG9mIGFsbCBhdmFpbGFibGUgZXZlbnRzIHlvdSBjYW4gcmVnaXN0ZXIgb24gYSBkcm9wem9uZSBvYmplY3QuXG5cbiAgICAgWW91IGNhbiByZWdpc3RlciBhbiBldmVudCBoYW5kbGVyIGxpa2UgdGhpczpcblxuICAgICBkcm9wem9uZS5vbihcImRyYWdFbnRlclwiLCBmdW5jdGlvbigpIHsgfSk7XG5cbiAgICAgKi8gdGhpcy5wcm90b3R5cGUuZXZlbnRzID0gW1xuICAgICAgICAgICAgXCJkcm9wXCIsXG4gICAgICAgICAgICBcImRyYWdzdGFydFwiLFxuICAgICAgICAgICAgXCJkcmFnZW5kXCIsXG4gICAgICAgICAgICBcImRyYWdlbnRlclwiLFxuICAgICAgICAgICAgXCJkcmFnb3ZlclwiLFxuICAgICAgICAgICAgXCJkcmFnbGVhdmVcIixcbiAgICAgICAgICAgIFwiYWRkZWRmaWxlXCIsXG4gICAgICAgICAgICBcImFkZGVkZmlsZXNcIixcbiAgICAgICAgICAgIFwicmVtb3ZlZGZpbGVcIixcbiAgICAgICAgICAgIFwidGh1bWJuYWlsXCIsXG4gICAgICAgICAgICBcImVycm9yXCIsXG4gICAgICAgICAgICBcImVycm9ybXVsdGlwbGVcIixcbiAgICAgICAgICAgIFwicHJvY2Vzc2luZ1wiLFxuICAgICAgICAgICAgXCJwcm9jZXNzaW5nbXVsdGlwbGVcIixcbiAgICAgICAgICAgIFwidXBsb2FkcHJvZ3Jlc3NcIixcbiAgICAgICAgICAgIFwidG90YWx1cGxvYWRwcm9ncmVzc1wiLFxuICAgICAgICAgICAgXCJzZW5kaW5nXCIsXG4gICAgICAgICAgICBcInNlbmRpbmdtdWx0aXBsZVwiLFxuICAgICAgICAgICAgXCJzdWNjZXNzXCIsXG4gICAgICAgICAgICBcInN1Y2Nlc3NtdWx0aXBsZVwiLFxuICAgICAgICAgICAgXCJjYW5jZWxlZFwiLFxuICAgICAgICAgICAgXCJjYW5jZWxlZG11bHRpcGxlXCIsXG4gICAgICAgICAgICBcImNvbXBsZXRlXCIsXG4gICAgICAgICAgICBcImNvbXBsZXRlbXVsdGlwbGVcIixcbiAgICAgICAgICAgIFwicmVzZXRcIixcbiAgICAgICAgICAgIFwibWF4ZmlsZXNleGNlZWRlZFwiLFxuICAgICAgICAgICAgXCJtYXhmaWxlc3JlYWNoZWRcIixcbiAgICAgICAgICAgIFwicXVldWVjb21wbGV0ZVwiLCBcbiAgICAgICAgXTtcbiAgICAgICAgdGhpcy5wcm90b3R5cGUuX3RodW1ibmFpbFF1ZXVlID0gW107XG4gICAgICAgIHRoaXMucHJvdG90eXBlLl9wcm9jZXNzaW5nVGh1bWJuYWlsID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIFJldHVybnMgYWxsIGZpbGVzIHRoYXQgaGF2ZSBiZWVuIGFjY2VwdGVkXG4gICAgZ2V0QWNjZXB0ZWRGaWxlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsZXMuZmlsdGVyKChmaWxlKT0+ZmlsZS5hY2NlcHRlZFxuICAgICAgICApLm1hcCgoZmlsZSk9PmZpbGVcbiAgICAgICAgKTtcbiAgICB9XG4gICAgLy8gUmV0dXJucyBhbGwgZmlsZXMgdGhhdCBoYXZlIGJlZW4gcmVqZWN0ZWRcbiAgICAvLyBOb3Qgc3VyZSB3aGVuIHRoYXQncyBnb2luZyB0byBiZSB1c2VmdWwsIGJ1dCBhZGRlZCBmb3IgY29tcGxldGVuZXNzLlxuICAgIGdldFJlamVjdGVkRmlsZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbGVzLmZpbHRlcigoZmlsZSk9PiFmaWxlLmFjY2VwdGVkXG4gICAgICAgICkubWFwKChmaWxlKT0+ZmlsZVxuICAgICAgICApO1xuICAgIH1cbiAgICBnZXRGaWxlc1dpdGhTdGF0dXMoc3RhdHVzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbGVzLmZpbHRlcigoZmlsZSk9PmZpbGUuc3RhdHVzID09PSBzdGF0dXNcbiAgICAgICAgKS5tYXAoKGZpbGUpPT5maWxlXG4gICAgICAgICk7XG4gICAgfVxuICAgIC8vIFJldHVybnMgYWxsIGZpbGVzIHRoYXQgYXJlIGluIHRoZSBxdWV1ZVxuICAgIGdldFF1ZXVlZEZpbGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRGaWxlc1dpdGhTdGF0dXMoJDNlZDI2OWYyZjBmYjIyNGIkZXhwb3J0JDJlMmJjZDg3MzlhZTAzOS5RVUVVRUQpO1xuICAgIH1cbiAgICBnZXRVcGxvYWRpbmdGaWxlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RmlsZXNXaXRoU3RhdHVzKCQzZWQyNjlmMmYwZmIyMjRiJGV4cG9ydCQyZTJiY2Q4NzM5YWUwMzkuVVBMT0FESU5HKTtcbiAgICB9XG4gICAgZ2V0QWRkZWRGaWxlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RmlsZXNXaXRoU3RhdHVzKCQzZWQyNjlmMmYwZmIyMjRiJGV4cG9ydCQyZTJiY2Q4NzM5YWUwMzkuQURERUQpO1xuICAgIH1cbiAgICAvLyBGaWxlcyB0aGF0IGFyZSBlaXRoZXIgcXVldWVkIG9yIHVwbG9hZGluZ1xuICAgIGdldEFjdGl2ZUZpbGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5maWxlcy5maWx0ZXIoKGZpbGUpPT5maWxlLnN0YXR1cyA9PT0gJDNlZDI2OWYyZjBmYjIyNGIkZXhwb3J0JDJlMmJjZDg3MzlhZTAzOS5VUExPQURJTkcgfHwgZmlsZS5zdGF0dXMgPT09ICQzZWQyNjlmMmYwZmIyMjRiJGV4cG9ydCQyZTJiY2Q4NzM5YWUwMzkuUVVFVUVEXG4gICAgICAgICkubWFwKChmaWxlKT0+ZmlsZVxuICAgICAgICApO1xuICAgIH1cbiAgICAvLyBUaGUgZnVuY3Rpb24gdGhhdCBnZXRzIGNhbGxlZCB3aGVuIERyb3B6b25lIGlzIGluaXRpYWxpemVkLiBZb3VcbiAgICAvLyBjYW4gKGFuZCBzaG91bGQpIHNldHVwIGV2ZW50IGxpc3RlbmVycyBpbnNpZGUgdGhpcyBmdW5jdGlvbi5cbiAgICBpbml0KCkge1xuICAgICAgICAvLyBJbiBjYXNlIGl0IGlzbid0IHNldCBhbHJlYWR5XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQudGFnTmFtZSA9PT0gXCJmb3JtXCIpIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJlbmN0eXBlXCIsIFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiKTtcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJkcm9wem9uZVwiKSAmJiAhdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHotbWVzc2FnZVwiKSkgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKCQzZWQyNjlmMmYwZmIyMjRiJGV4cG9ydCQyZTJiY2Q4NzM5YWUwMzkuY3JlYXRlRWxlbWVudChgPGRpdiBjbGFzcz1cImR6LWRlZmF1bHQgZHotbWVzc2FnZVwiPjxidXR0b24gY2xhc3M9XCJkei1idXR0b25cIiB0eXBlPVwiYnV0dG9uXCI+JHt0aGlzLm9wdGlvbnMuZGljdERlZmF1bHRNZXNzYWdlfTwvYnV0dG9uPjwvZGl2PmApKTtcbiAgICAgICAgaWYgKHRoaXMuY2xpY2thYmxlRWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBsZXQgc2V0dXBIaWRkZW5GaWxlSW5wdXQgPSAoKT0+e1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhpZGRlbkZpbGVJbnB1dCkgdGhpcy5oaWRkZW5GaWxlSW5wdXQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmhpZGRlbkZpbGVJbnB1dCk7XG4gICAgICAgICAgICAgICAgdGhpcy5oaWRkZW5GaWxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5oaWRkZW5GaWxlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImZpbGVcIik7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tYXhGaWxlcyA9PT0gbnVsbCB8fCB0aGlzLm9wdGlvbnMubWF4RmlsZXMgPiAxKSB0aGlzLmhpZGRlbkZpbGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtdWx0aXBsZVwiLCBcIm11bHRpcGxlXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZGVuRmlsZUlucHV0LmNsYXNzTmFtZSA9IFwiZHotaGlkZGVuLWlucHV0XCI7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hY2NlcHRlZEZpbGVzICE9PSBudWxsKSB0aGlzLmhpZGRlbkZpbGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJhY2NlcHRcIiwgdGhpcy5vcHRpb25zLmFjY2VwdGVkRmlsZXMpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuY2FwdHVyZSAhPT0gbnVsbCkgdGhpcy5oaWRkZW5GaWxlSW5wdXQuc2V0QXR0cmlidXRlKFwiY2FwdHVyZVwiLCB0aGlzLm9wdGlvbnMuY2FwdHVyZSk7XG4gICAgICAgICAgICAgICAgLy8gTWFraW5nIHN1cmUgdGhhdCBubyBvbmUgY2FuIFwidGFiXCIgaW50byB0aGlzIGZpZWxkLlxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZGVuRmlsZUlucHV0LnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiLTFcIik7XG4gICAgICAgICAgICAgICAgLy8gTm90IHNldHRpbmcgYGRpc3BsYXk9XCJub25lXCJgIGJlY2F1c2Ugc29tZSBicm93c2VycyBkb24ndCBhY2NlcHQgY2xpY2tzXG4gICAgICAgICAgICAgICAgLy8gb24gZWxlbWVudHMgdGhhdCBhcmVuJ3QgZGlzcGxheWVkLlxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZGVuRmlsZUlucHV0LnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZGVuRmlsZUlucHV0LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZGVuRmlsZUlucHV0LnN0eWxlLnRvcCA9IFwiMFwiO1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZGVuRmlsZUlucHV0LnN0eWxlLmxlZnQgPSBcIjBcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGRlbkZpbGVJbnB1dC5zdHlsZS5oZWlnaHQgPSBcIjBcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGRlbkZpbGVJbnB1dC5zdHlsZS53aWR0aCA9IFwiMFwiO1xuICAgICAgICAgICAgICAgICQzZWQyNjlmMmYwZmIyMjRiJGV4cG9ydCQyZTJiY2Q4NzM5YWUwMzkuZ2V0RWxlbWVudCh0aGlzLm9wdGlvbnMuaGlkZGVuSW5wdXRDb250YWluZXIsIFwiaGlkZGVuSW5wdXRDb250YWluZXJcIikuYXBwZW5kQ2hpbGQodGhpcy5oaWRkZW5GaWxlSW5wdXQpO1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZGVuRmlsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCk9PntcbiAgICAgICAgICAgICAgICAgICAgbGV0IHsgZmlsZXM6IGZpbGVzICB9ID0gdGhpcy5oaWRkZW5GaWxlSW5wdXQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWxlcy5sZW5ndGgpIGZvciAobGV0IGZpbGUgb2YgZmlsZXMpdGhpcy5hZGRGaWxlKGZpbGUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJhZGRlZGZpbGVzXCIsIGZpbGVzKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0dXBIaWRkZW5GaWxlSW5wdXQoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzZXR1cEhpZGRlbkZpbGVJbnB1dCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuVVJMID0gd2luZG93LlVSTCAhPT0gbnVsbCA/IHdpbmRvdy5VUkwgOiB3aW5kb3cud2Via2l0VVJMO1xuICAgICAgICAvLyBTZXR1cCBhbGwgZXZlbnQgbGlzdGVuZXJzIG9uIHRoZSBEcm9wem9uZSBvYmplY3QgaXRzZWxmLlxuICAgICAgICAvLyBUaGV5J3JlIG5vdCBpbiBAc2V0dXBFdmVudExpc3RlbmVycygpIGJlY2F1c2UgdGhleSBzaG91bGRuJ3QgYmUgcmVtb3ZlZFxuICAgICAgICAvLyBhZ2FpbiB3aGVuIHRoZSBkcm9wem9uZSBnZXRzIGRpc2FibGVkLlxuICAgICAgICBmb3IgKGxldCBldmVudE5hbWUgb2YgdGhpcy5ldmVudHMpdGhpcy5vbihldmVudE5hbWUsIHRoaXMub3B0aW9uc1tldmVudE5hbWVdKTtcbiAgICAgICAgdGhpcy5vbihcInVwbG9hZHByb2dyZXNzXCIsICgpPT50aGlzLnVwZGF0ZVRvdGFsVXBsb2FkUHJvZ3Jlc3MoKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLm9uKFwicmVtb3ZlZGZpbGVcIiwgKCk9PnRoaXMudXBkYXRlVG90YWxVcGxvYWRQcm9ncmVzcygpXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMub24oXCJjYW5jZWxlZFwiLCAoZmlsZSk9PnRoaXMuZW1pdChcImNvbXBsZXRlXCIsIGZpbGUpXG4gICAgICAgICk7XG4gICAgICAgIC8vIEVtaXQgYSBgcXVldWVjb21wbGV0ZWAgZXZlbnQgaWYgYWxsIGZpbGVzIGZpbmlzaGVkIHVwbG9hZGluZy5cbiAgICAgICAgdGhpcy5vbihcImNvbXBsZXRlXCIsIChmaWxlKT0+e1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0QWRkZWRGaWxlcygpLmxlbmd0aCA9PT0gMCAmJiB0aGlzLmdldFVwbG9hZGluZ0ZpbGVzKCkubGVuZ3RoID09PSAwICYmIHRoaXMuZ2V0UXVldWVkRmlsZXMoKS5sZW5ndGggPT09IDApIC8vIFRoaXMgbmVlZHMgdG8gYmUgZGVmZXJyZWQgc28gdGhhdCBgcXVldWVjb21wbGV0ZWAgcmVhbGx5IHRyaWdnZXJzIGFmdGVyIGBjb21wbGV0ZWBcbiAgICAgICAgICAgIHJldHVybiBzZXRUaW1lb3V0KCgpPT50aGlzLmVtaXQoXCJxdWV1ZWNvbXBsZXRlXCIpXG4gICAgICAgICAgICAsIDApO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgY29udGFpbnNGaWxlcyA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmIChlLmRhdGFUcmFuc2Zlci50eXBlcykgLy8gQmVjYXVzZSBlLmRhdGFUcmFuc2Zlci50eXBlcyBpcyBhbiBPYmplY3QgaW5cbiAgICAgICAgICAgIC8vIElFLCB3ZSBuZWVkIHRvIGl0ZXJhdGUgbGlrZSB0aGlzIGluc3RlYWQgb2ZcbiAgICAgICAgICAgIC8vIHVzaW5nIGUuZGF0YVRyYW5zZmVyLnR5cGVzLnNvbWUoKVxuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGUuZGF0YVRyYW5zZmVyLnR5cGVzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBpZiAoZS5kYXRhVHJhbnNmZXIudHlwZXNbaV0gPT09IFwiRmlsZXNcIikgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH07XG4gICAgICAgIGxldCBub1Byb3BhZ2F0aW9uID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIGZpbGVzLCB3ZSBkb24ndCB3YW50IHRvIHN0b3BcbiAgICAgICAgICAgIC8vIHByb3BhZ2F0aW9uIHNvIHdlIGRvbid0IGludGVyZmVyZSB3aXRoIG90aGVyXG4gICAgICAgICAgICAvLyBkcmFnIGFuZCBkcm9wIGJlaGF2aW91ci5cbiAgICAgICAgICAgIGlmICghY29udGFpbnNGaWxlcyhlKSkgcmV0dXJuO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZWxzZSByZXR1cm4gZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgICAvLyBDcmVhdGUgdGhlIGxpc3RlbmVyc1xuICAgICAgICB0aGlzLmxpc3RlbmVycyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnQsXG4gICAgICAgICAgICAgICAgZXZlbnRzOiB7XG4gICAgICAgICAgICAgICAgICAgIGRyYWdzdGFydDogKGUpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lbWl0KFwiZHJhZ3N0YXJ0XCIsIGUpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBkcmFnZW50ZXI6IChlKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9Qcm9wYWdhdGlvbihlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVtaXQoXCJkcmFnZW50ZXJcIiwgZSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGRyYWdvdmVyOiAoZSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1ha2VzIGl0IHBvc3NpYmxlIHRvIGRyYWcgZmlsZXMgZnJvbSBjaHJvbWUncyBkb3dubG9hZCBiYXJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTk1MjY0MzAvZHJhZy1hbmQtZHJvcC1maWxlLXVwbG9hZHMtZnJvbS1jaHJvbWUtZG93bmxvYWRzLWJhclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVHJ5IGlzIHJlcXVpcmVkIHRvIHByZXZlbnQgYnVnIGluIEludGVybmV0IEV4cGxvcmVyIDExIChTQ1JJUFQ2NTUzNSBleGNlcHRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZWZjdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWZjdCA9IGUuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IFwibW92ZVwiID09PSBlZmN0IHx8IFwibGlua01vdmVcIiA9PT0gZWZjdCA/IFwibW92ZVwiIDogXCJjb3B5XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBub1Byb3BhZ2F0aW9uKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW1pdChcImRyYWdvdmVyXCIsIGUpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBkcmFnbGVhdmU6IChlKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW1pdChcImRyYWdsZWF2ZVwiLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZHJvcDogKGUpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBub1Byb3BhZ2F0aW9uKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZHJvcChlKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZHJhZ2VuZDogKGUpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lbWl0KFwiZHJhZ2VuZFwiLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIFxuICAgICAgICBdO1xuICAgICAgICB0aGlzLmNsaWNrYWJsZUVsZW1lbnRzLmZvckVhY2goKGNsaWNrYWJsZUVsZW1lbnQpPT57XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5saXN0ZW5lcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgZWxlbWVudDogY2xpY2thYmxlRWxlbWVudCxcbiAgICAgICAgICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IChldnQpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPbmx5IHRoZSBhY3R1YWwgZHJvcHpvbmUgb3IgdGhlIG1lc3NhZ2UgZWxlbWVudCBzaG91bGQgdHJpZ2dlciBmaWxlIHNlbGVjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNsaWNrYWJsZUVsZW1lbnQgIT09IHRoaXMuZWxlbWVudCB8fCBldnQudGFyZ2V0ID09PSB0aGlzLmVsZW1lbnQgfHwgJDNlZDI2OWYyZjBmYjIyNGIkZXhwb3J0JDJlMmJjZDg3MzlhZTAzOS5lbGVtZW50SW5zaWRlKGV2dC50YXJnZXQsIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmR6LW1lc3NhZ2VcIikpKSB0aGlzLmhpZGRlbkZpbGVJbnB1dC5jbGljaygpOyAvLyBGb3J3YXJkIHRoZSBjbGlja1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZW5hYmxlKCk7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaW5pdC5jYWxsKHRoaXMpO1xuICAgIH1cbiAgICAvLyBOb3QgZnVsbHkgdGVzdGVkIHlldFxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuZGlzYWJsZSgpO1xuICAgICAgICB0aGlzLnJlbW92ZUFsbEZpbGVzKHRydWUpO1xuICAgICAgICBpZiAodGhpcy5oaWRkZW5GaWxlSW5wdXQgIT0gbnVsbCA/IHRoaXMuaGlkZGVuRmlsZUlucHV0LnBhcmVudE5vZGUgOiB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZGVuRmlsZUlucHV0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5oaWRkZW5GaWxlSW5wdXQpO1xuICAgICAgICAgICAgdGhpcy5oaWRkZW5GaWxlSW5wdXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSB0aGlzLmVsZW1lbnQuZHJvcHpvbmU7XG4gICAgICAgIHJldHVybiAkM2VkMjY5ZjJmMGZiMjI0YiRleHBvcnQkMmUyYmNkODczOWFlMDM5Lmluc3RhbmNlcy5zcGxpY2UoJDNlZDI2OWYyZjBmYjIyNGIkZXhwb3J0JDJlMmJjZDg3MzlhZTAzOS5pbnN0YW5jZXMuaW5kZXhPZih0aGlzKSwgMSk7XG4gICAgfVxuICAgIHVwZGF0ZVRvdGFsVXBsb2FkUHJvZ3Jlc3MoKSB7XG4gICAgICAgIGxldCB0b3RhbFVwbG9hZFByb2dyZXNzO1xuICAgICAgICBsZXQgdG90YWxCeXRlc1NlbnQgPSAwO1xuICAgICAgICBsZXQgdG90YWxCeXRlcyA9IDA7XG4gICAgICAgIGxldCBhY3RpdmVGaWxlcyA9IHRoaXMuZ2V0QWN0aXZlRmlsZXMoKTtcbiAgICAgICAgaWYgKGFjdGl2ZUZpbGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgZm9yIChsZXQgZmlsZSBvZiB0aGlzLmdldEFjdGl2ZUZpbGVzKCkpe1xuICAgICAgICAgICAgICAgIHRvdGFsQnl0ZXNTZW50ICs9IGZpbGUudXBsb2FkLmJ5dGVzU2VudDtcbiAgICAgICAgICAgICAgICB0b3RhbEJ5dGVzICs9IGZpbGUudXBsb2FkLnRvdGFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG90YWxVcGxvYWRQcm9ncmVzcyA9IDEwMCAqIHRvdGFsQnl0ZXNTZW50IC8gdG90YWxCeXRlcztcbiAgICAgICAgfSBlbHNlIHRvdGFsVXBsb2FkUHJvZ3Jlc3MgPSAxMDA7XG4gICAgICAgIHJldHVybiB0aGlzLmVtaXQoXCJ0b3RhbHVwbG9hZHByb2dyZXNzXCIsIHRvdGFsVXBsb2FkUHJvZ3Jlc3MsIHRvdGFsQnl0ZXMsIHRvdGFsQnl0ZXNTZW50KTtcbiAgICB9XG4gICAgLy8gQG9wdGlvbnMucGFyYW1OYW1lIGNhbiBiZSBhIGZ1bmN0aW9uIHRha2luZyBvbmUgcGFyYW1ldGVyIHJhdGhlciB0aGFuIGEgc3RyaW5nLlxuICAgIC8vIEEgcGFyYW1ldGVyIG5hbWUgZm9yIGEgZmlsZSBpcyBvYnRhaW5lZCBzaW1wbHkgYnkgY2FsbGluZyB0aGlzIHdpdGggYW4gaW5kZXggbnVtYmVyLlxuICAgIF9nZXRQYXJhbU5hbWUobikge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5wYXJhbU5hbWUgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRoaXMub3B0aW9ucy5wYXJhbU5hbWUobik7XG4gICAgICAgIGVsc2UgcmV0dXJuIGAke3RoaXMub3B0aW9ucy5wYXJhbU5hbWV9JHt0aGlzLm9wdGlvbnMudXBsb2FkTXVsdGlwbGUgPyBgWyR7bn1dYCA6IFwiXCJ9YDtcbiAgICB9XG4gICAgLy8gSWYgQG9wdGlvbnMucmVuYW1lRmlsZSBpcyBhIGZ1bmN0aW9uLFxuICAgIC8vIHRoZSBmdW5jdGlvbiB3aWxsIGJlIHVzZWQgdG8gcmVuYW1lIHRoZSBmaWxlLm5hbWUgYmVmb3JlIGFwcGVuZGluZyBpdCB0byB0aGUgZm9ybURhdGFcbiAgICBfcmVuYW1lRmlsZShmaWxlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLnJlbmFtZUZpbGUgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIGZpbGUubmFtZTtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5yZW5hbWVGaWxlKGZpbGUpO1xuICAgIH1cbiAgICAvLyBSZXR1cm5zIGEgZm9ybSB0aGF0IGNhbiBiZSB1c2VkIGFzIGZhbGxiYWNrIGlmIHRoZSBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgRHJhZ25Ecm9wXG4gICAgLy9cbiAgICAvLyBJZiB0aGUgZHJvcHpvbmUgaXMgYWxyZWFkeSBhIGZvcm0sIG9ubHkgdGhlIGlucHV0IGZpZWxkIGFuZCBidXR0b24gYXJlIHJldHVybmVkLiBPdGhlcndpc2UgYSBjb21wbGV0ZSBmb3JtIGVsZW1lbnQgaXMgcHJvdmlkZWQuXG4gICAgLy8gVGhpcyBjb2RlIGhhcyB0byBwYXNzIGluIElFNyA6KFxuICAgIGdldEZhbGxiYWNrRm9ybSgpIHtcbiAgICAgICAgbGV0IGV4aXN0aW5nRmFsbGJhY2ssIGZvcm07XG4gICAgICAgIGlmIChleGlzdGluZ0ZhbGxiYWNrID0gdGhpcy5nZXRFeGlzdGluZ0ZhbGxiYWNrKCkpIHJldHVybiBleGlzdGluZ0ZhbGxiYWNrO1xuICAgICAgICBsZXQgZmllbGRzU3RyaW5nID0gJzxkaXYgY2xhc3M9XCJkei1mYWxsYmFja1wiPic7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZGljdEZhbGxiYWNrVGV4dCkgZmllbGRzU3RyaW5nICs9IGA8cD4ke3RoaXMub3B0aW9ucy5kaWN0RmFsbGJhY2tUZXh0fTwvcD5gO1xuICAgICAgICBmaWVsZHNTdHJpbmcgKz0gYDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCIke3RoaXMuX2dldFBhcmFtTmFtZSgwKX1cIiAke3RoaXMub3B0aW9ucy51cGxvYWRNdWx0aXBsZSA/ICdtdWx0aXBsZT1cIm11bHRpcGxlXCInIDogdW5kZWZpbmVkfSAvPjxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJVcGxvYWQhXCI+PC9kaXY+YDtcbiAgICAgICAgbGV0IGZpZWxkcyA9ICQzZWQyNjlmMmYwZmIyMjRiJGV4cG9ydCQyZTJiY2Q4NzM5YWUwMzkuY3JlYXRlRWxlbWVudChmaWVsZHNTdHJpbmcpO1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50LnRhZ05hbWUgIT09IFwiRk9STVwiKSB7XG4gICAgICAgICAgICBmb3JtID0gJDNlZDI2OWYyZjBmYjIyNGIkZXhwb3J0JDJlMmJjZDg3MzlhZTAzOS5jcmVhdGVFbGVtZW50KGA8Zm9ybSBhY3Rpb249XCIke3RoaXMub3B0aW9ucy51cmx9XCIgZW5jdHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIiBtZXRob2Q9XCIke3RoaXMub3B0aW9ucy5tZXRob2R9XCI+PC9mb3JtPmApO1xuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChmaWVsZHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHRoYXQgdGhlIGVuY3R5cGUgYW5kIG1ldGhvZCBhdHRyaWJ1dGVzIGFyZSBzZXQgcHJvcGVybHlcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJlbmN0eXBlXCIsIFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZXRob2RcIiwgdGhpcy5vcHRpb25zLm1ldGhvZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZvcm0gIT0gbnVsbCA/IGZvcm0gOiBmaWVsZHM7XG4gICAgfVxuICAgIC8vIFJldHVybnMgdGhlIGZhbGxiYWNrIGVsZW1lbnRzIGlmIHRoZXkgZXhpc3QgYWxyZWFkeVxuICAgIC8vXG4gICAgLy8gVGhpcyBjb2RlIGhhcyB0byBwYXNzIGluIElFNyA6KFxuICAgIGdldEV4aXN0aW5nRmFsbGJhY2soKSB7XG4gICAgICAgIGxldCBnZXRGYWxsYmFjayA9IGZ1bmN0aW9uKGVsZW1lbnRzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBlbCBvZiBlbGVtZW50cyl7XG4gICAgICAgICAgICAgICAgaWYgKC8oXnwgKWZhbGxiYWNrKCR8ICkvLnRlc3QoZWwuY2xhc3NOYW1lKSkgcmV0dXJuIGVsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKGxldCB0YWdOYW1lIG9mIFtcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBcImZvcm1cIlxuICAgICAgICBdKXtcbiAgICAgICAgICAgIHZhciBmYWxsYmFjaztcbiAgICAgICAgICAgIGlmIChmYWxsYmFjayA9IGdldEZhbGxiYWNrKHRoaXMuZWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSh0YWdOYW1lKSkpIHJldHVybiBmYWxsYmFjaztcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBBY3RpdmF0ZXMgYWxsIGxpc3RlbmVycyBzdG9yZWQgaW4gQGxpc3RlbmVyc1xuICAgIHNldHVwRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxpc3RlbmVycy5tYXAoKGVsZW1lbnRMaXN0ZW5lcnMpPT4oKCk9PntcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgICAgICAgICAgICAgZm9yKGxldCBldmVudCBpbiBlbGVtZW50TGlzdGVuZXJzLmV2ZW50cyl7XG4gICAgICAgICAgICAgICAgICAgIGxldCBsaXN0ZW5lciA9IGVsZW1lbnRMaXN0ZW5lcnMuZXZlbnRzW2V2ZW50XTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goZWxlbWVudExpc3RlbmVycy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyLCBmYWxzZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfSkoKVxuICAgICAgICApO1xuICAgIH1cbiAgICAvLyBEZWFjdGl2YXRlcyBhbGwgbGlzdGVuZXJzIHN0b3JlZCBpbiBAbGlzdGVuZXJzXG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxpc3RlbmVycy5tYXAoKGVsZW1lbnRMaXN0ZW5lcnMpPT4oKCk9PntcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgICAgICAgICAgICAgZm9yKGxldCBldmVudCBpbiBlbGVtZW50TGlzdGVuZXJzLmV2ZW50cyl7XG4gICAgICAgICAgICAgICAgICAgIGxldCBsaXN0ZW5lciA9IGVsZW1lbnRMaXN0ZW5lcnMuZXZlbnRzW2V2ZW50XTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goZWxlbWVudExpc3RlbmVycy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyLCBmYWxzZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfSkoKVxuICAgICAgICApO1xuICAgIH1cbiAgICAvLyBSZW1vdmVzIGFsbCBldmVudCBsaXN0ZW5lcnMgYW5kIGNhbmNlbHMgYWxsIGZpbGVzIGluIHRoZSBxdWV1ZSBvciBiZWluZyBwcm9jZXNzZWQuXG4gICAgZGlzYWJsZSgpIHtcbiAgICAgICAgdGhpcy5jbGlja2FibGVFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KT0+ZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZHotY2xpY2thYmxlXCIpXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbGVzLm1hcCgoZmlsZSk9PnRoaXMuY2FuY2VsVXBsb2FkKGZpbGUpXG4gICAgICAgICk7XG4gICAgfVxuICAgIGVuYWJsZSgpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuZGlzYWJsZWQ7XG4gICAgICAgIHRoaXMuY2xpY2thYmxlRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCk9PmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImR6LWNsaWNrYWJsZVwiKVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gdGhpcy5zZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuICAgIC8vIFJldHVybnMgYSBuaWNlbHkgZm9ybWF0dGVkIGZpbGVzaXplXG4gICAgZmlsZXNpemUoc2l6ZSkge1xuICAgICAgICBsZXQgc2VsZWN0ZWRTaXplID0gMDtcbiAgICAgICAgbGV0IHNlbGVjdGVkVW5pdCA9IFwiYlwiO1xuICAgICAgICBpZiAoc2l6ZSA+IDApIHtcbiAgICAgICAgICAgIGxldCB1bml0cyA9IFtcbiAgICAgICAgICAgICAgICBcInRiXCIsXG4gICAgICAgICAgICAgICAgXCJnYlwiLFxuICAgICAgICAgICAgICAgIFwibWJcIixcbiAgICAgICAgICAgICAgICBcImtiXCIsXG4gICAgICAgICAgICAgICAgXCJiXCJcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdW5pdHMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGxldCB1bml0ID0gdW5pdHNbaV07XG4gICAgICAgICAgICAgICAgbGV0IGN1dG9mZiA9IE1hdGgucG93KHRoaXMub3B0aW9ucy5maWxlc2l6ZUJhc2UsIDQgLSBpKSAvIDEwO1xuICAgICAgICAgICAgICAgIGlmIChzaXplID49IGN1dG9mZikge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFNpemUgPSBzaXplIC8gTWF0aC5wb3codGhpcy5vcHRpb25zLmZpbGVzaXplQmFzZSwgNCAtIGkpO1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFVuaXQgPSB1bml0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxlY3RlZFNpemUgPSBNYXRoLnJvdW5kKDEwICogc2VsZWN0ZWRTaXplKSAvIDEwOyAvLyBDdXR0aW5nIG9mIGRpZ2l0c1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgPHN0cm9uZz4ke3NlbGVjdGVkU2l6ZX08L3N0cm9uZz4gJHt0aGlzLm9wdGlvbnMuZGljdEZpbGVTaXplVW5pdHNbc2VsZWN0ZWRVbml0XX1gO1xuICAgIH1cbiAgICAvLyBBZGRzIG9yIHJlbW92ZXMgdGhlIGBkei1tYXgtZmlsZXMtcmVhY2hlZGAgY2xhc3MgZnJvbSB0aGUgZm9ybS5cbiAgICBfdXBkYXRlTWF4RmlsZXNSZWFjaGVkQ2xhc3MoKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubWF4RmlsZXMgIT0gbnVsbCAmJiB0aGlzLmdldEFjY2VwdGVkRmlsZXMoKS5sZW5ndGggPj0gdGhpcy5vcHRpb25zLm1heEZpbGVzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5nZXRBY2NlcHRlZEZpbGVzKCkubGVuZ3RoID09PSB0aGlzLm9wdGlvbnMubWF4RmlsZXMpIHRoaXMuZW1pdChcIm1heGZpbGVzcmVhY2hlZFwiLCB0aGlzLmZpbGVzKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImR6LW1heC1maWxlcy1yZWFjaGVkXCIpO1xuICAgICAgICB9IGVsc2UgcmV0dXJuIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZHotbWF4LWZpbGVzLXJlYWNoZWRcIik7XG4gICAgfVxuICAgIGRyb3AoZSkge1xuICAgICAgICBpZiAoIWUuZGF0YVRyYW5zZmVyKSByZXR1cm47XG4gICAgICAgIHRoaXMuZW1pdChcImRyb3BcIiwgZSk7XG4gICAgICAgIC8vIENvbnZlcnQgdGhlIEZpbGVMaXN0IHRvIGFuIEFycmF5XG4gICAgICAgIC8vIFRoaXMgaXMgbmVjZXNzYXJ5IGZvciBJRTExXG4gICAgICAgIGxldCBmaWxlcyA9IFtdO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZS5kYXRhVHJhbnNmZXIuZmlsZXMubGVuZ3RoOyBpKyspZmlsZXNbaV0gPSBlLmRhdGFUcmFuc2Zlci5maWxlc1tpXTtcbiAgICAgICAgLy8gRXZlbiBpZiBpdCdzIGEgZm9sZGVyLCBmaWxlcy5sZW5ndGggd2lsbCBjb250YWluIHRoZSBmb2xkZXJzLlxuICAgICAgICBpZiAoZmlsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBsZXQgeyBpdGVtczogaXRlbXMgIH0gPSBlLmRhdGFUcmFuc2ZlcjtcbiAgICAgICAgICAgIGlmIChpdGVtcyAmJiBpdGVtcy5sZW5ndGggJiYgaXRlbXNbMF0ud2Via2l0R2V0QXNFbnRyeSAhPSBudWxsKSAvLyBUaGUgYnJvd3NlciBzdXBwb3J0cyBkcm9wcGluZyBvZiBmb2xkZXJzLCBzbyBoYW5kbGUgaXRlbXMgaW5zdGVhZCBvZiBmaWxlc1xuICAgICAgICAgICAgdGhpcy5fYWRkRmlsZXNGcm9tSXRlbXMoaXRlbXMpO1xuICAgICAgICAgICAgZWxzZSB0aGlzLmhhbmRsZUZpbGVzKGZpbGVzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVtaXQoXCJhZGRlZGZpbGVzXCIsIGZpbGVzKTtcbiAgICB9XG4gICAgcGFzdGUoZSkge1xuICAgICAgICBpZiAoJDNlZDI2OWYyZjBmYjIyNGIkdmFyJF9fZ3VhcmRfXyhlICE9IG51bGwgPyBlLmNsaXBib2FyZERhdGEgOiB1bmRlZmluZWQsICh4KT0+eC5pdGVtc1xuICAgICAgICApID09IG51bGwpIHJldHVybjtcbiAgICAgICAgdGhpcy5lbWl0KFwicGFzdGVcIiwgZSk7XG4gICAgICAgIGxldCB7IGl0ZW1zOiBpdGVtcyAgfSA9IGUuY2xpcGJvYXJkRGF0YTtcbiAgICAgICAgaWYgKGl0ZW1zLmxlbmd0aCkgcmV0dXJuIHRoaXMuX2FkZEZpbGVzRnJvbUl0ZW1zKGl0ZW1zKTtcbiAgICB9XG4gICAgaGFuZGxlRmlsZXMoZmlsZXMpIHtcbiAgICAgICAgZm9yIChsZXQgZmlsZSBvZiBmaWxlcyl0aGlzLmFkZEZpbGUoZmlsZSk7XG4gICAgfVxuICAgIC8vIFdoZW4gYSBmb2xkZXIgaXMgZHJvcHBlZCAob3IgZmlsZXMgYXJlIHBhc3RlZCksIGl0ZW1zIG11c3QgYmUgaGFuZGxlZFxuICAgIC8vIGluc3RlYWQgb2YgZmlsZXMuXG4gICAgX2FkZEZpbGVzRnJvbUl0ZW1zKGl0ZW1zKSB7XG4gICAgICAgIHJldHVybiAoKCk9PntcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgaXRlbXMpe1xuICAgICAgICAgICAgICAgIHZhciBlbnRyeTtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS53ZWJraXRHZXRBc0VudHJ5ICE9IG51bGwgJiYgKGVudHJ5ID0gaXRlbS53ZWJraXRHZXRBc0VudHJ5KCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0ZpbGUpIHJlc3VsdC5wdXNoKHRoaXMuYWRkRmlsZShpdGVtLmdldEFzRmlsZSgpKSk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGVudHJ5LmlzRGlyZWN0b3J5KSAvLyBBcHBlbmQgYWxsIGZpbGVzIGZyb20gdGhhdCBkaXJlY3RvcnkgdG8gZmlsZXNcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy5fYWRkRmlsZXNGcm9tRGlyZWN0b3J5KGVudHJ5LCBlbnRyeS5uYW1lKSk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgcmVzdWx0LnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uZ2V0QXNGaWxlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0ua2luZCA9PSBudWxsIHx8IGl0ZW0ua2luZCA9PT0gXCJmaWxlXCIpIHJlc3VsdC5wdXNoKHRoaXMuYWRkRmlsZShpdGVtLmdldEFzRmlsZSgpKSk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgcmVzdWx0LnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgcmVzdWx0LnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pKCk7XG4gICAgfVxuICAgIC8vIEdvZXMgdGhyb3VnaCB0aGUgZGlyZWN0b3J5LCBhbmQgYWRkcyBlYWNoIGZpbGUgaXQgZmluZHMgcmVjdXJzaXZlbHlcbiAgICBfYWRkRmlsZXNGcm9tRGlyZWN0b3J5KGRpcmVjdG9yeSwgcGF0aCkge1xuICAgICAgICBsZXQgZGlyUmVhZGVyID0gZGlyZWN0b3J5LmNyZWF0ZVJlYWRlcigpO1xuICAgICAgICBsZXQgZXJyb3JIYW5kbGVyID0gKGVycm9yKT0+JDNlZDI2OWYyZjBmYjIyNGIkdmFyJF9fZ3VhcmRNZXRob2RfXyhjb25zb2xlLCBcImxvZ1wiLCAobyk9Pm8ubG9nKGVycm9yKVxuICAgICAgICAgICAgKVxuICAgICAgICA7XG4gICAgICAgIHZhciByZWFkRW50cmllcyA9ICgpPT57XG4gICAgICAgICAgICByZXR1cm4gZGlyUmVhZGVyLnJlYWRFbnRyaWVzKChlbnRyaWVzKT0+e1xuICAgICAgICAgICAgICAgIGlmIChlbnRyaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgZW50cnkgb2YgZW50cmllcyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW50cnkuaXNGaWxlKSBlbnRyeS5maWxlKChmaWxlKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaWdub3JlSGlkZGVuRmlsZXMgJiYgZmlsZS5uYW1lLnN1YnN0cmluZygwLCAxKSA9PT0gXCIuXCIpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlLmZ1bGxQYXRoID0gYCR7cGF0aH0vJHtmaWxlLm5hbWV9YDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hZGRGaWxlKGZpbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChlbnRyeS5pc0RpcmVjdG9yeSkgdGhpcy5fYWRkRmlsZXNGcm9tRGlyZWN0b3J5KGVudHJ5LCBgJHtwYXRofS8ke2VudHJ5Lm5hbWV9YCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gUmVjdXJzaXZlbHkgY2FsbCByZWFkRW50cmllcygpIGFnYWluLCBzaW5jZSBicm93c2VyIG9ubHkgaGFuZGxlXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBmaXJzdCAxMDAgZW50cmllcy5cbiAgICAgICAgICAgICAgICAgICAgLy8gU2VlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRGlyZWN0b3J5UmVhZGVyI3JlYWRFbnRyaWVzXG4gICAgICAgICAgICAgICAgICAgIHJlYWRFbnRyaWVzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfSwgZXJyb3JIYW5kbGVyKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHJlYWRFbnRyaWVzKCk7XG4gICAgfVxuICAgIC8vIElmIGBkb25lKClgIGlzIGNhbGxlZCB3aXRob3V0IGFyZ3VtZW50IHRoZSBmaWxlIGlzIGFjY2VwdGVkXG4gICAgLy8gSWYgeW91IGNhbGwgaXQgd2l0aCBhbiBlcnJvciBtZXNzYWdlLCB0aGUgZmlsZSBpcyByZWplY3RlZFxuICAgIC8vIChUaGlzIGFsbG93cyBmb3IgYXN5bmNocm9ub3VzIHZhbGlkYXRpb24pXG4gICAgLy9cbiAgICAvLyBUaGlzIGZ1bmN0aW9uIGNoZWNrcyB0aGUgZmlsZXNpemUsIGFuZCBpZiB0aGUgZmlsZS50eXBlIHBhc3NlcyB0aGVcbiAgICAvLyBgYWNjZXB0ZWRGaWxlc2AgY2hlY2suXG4gICAgYWNjZXB0KGZpbGUsIGRvbmUpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tYXhGaWxlc2l6ZSAmJiBmaWxlLnNpemUgPiB0aGlzLm9wdGlvbnMubWF4RmlsZXNpemUgKiAxMDQ4NTc2KSBkb25lKHRoaXMub3B0aW9ucy5kaWN0RmlsZVRvb0JpZy5yZXBsYWNlKFwie3tmaWxlc2l6ZX19XCIsIE1hdGgucm91bmQoZmlsZS5zaXplIC8gMTAyNCAvIDEwLjI0KSAvIDEwMCkucmVwbGFjZShcInt7bWF4RmlsZXNpemV9fVwiLCB0aGlzLm9wdGlvbnMubWF4RmlsZXNpemUpKTtcbiAgICAgICAgZWxzZSBpZiAoISQzZWQyNjlmMmYwZmIyMjRiJGV4cG9ydCQyZTJiY2Q4NzM5YWUwMzkuaXNWYWxpZEZpbGUoZmlsZSwgdGhpcy5vcHRpb25zLmFjY2VwdGVkRmlsZXMpKSBkb25lKHRoaXMub3B0aW9ucy5kaWN0SW52YWxpZEZpbGVUeXBlKTtcbiAgICAgICAgZWxzZSBpZiAodGhpcy5vcHRpb25zLm1heEZpbGVzICE9IG51bGwgJiYgdGhpcy5nZXRBY2NlcHRlZEZpbGVzKCkubGVuZ3RoID49IHRoaXMub3B0aW9ucy5tYXhGaWxlcykge1xuICAgICAgICAgICAgZG9uZSh0aGlzLm9wdGlvbnMuZGljdE1heEZpbGVzRXhjZWVkZWQucmVwbGFjZShcInt7bWF4RmlsZXN9fVwiLCB0aGlzLm9wdGlvbnMubWF4RmlsZXMpKTtcbiAgICAgICAgICAgIHRoaXMuZW1pdChcIm1heGZpbGVzZXhjZWVkZWRcIiwgZmlsZSk7XG4gICAgICAgIH0gZWxzZSB0aGlzLm9wdGlvbnMuYWNjZXB0LmNhbGwodGhpcywgZmlsZSwgZG9uZSk7XG4gICAgfVxuICAgIGFkZEZpbGUoZmlsZSkge1xuICAgICAgICBmaWxlLnVwbG9hZCA9IHtcbiAgICAgICAgICAgIHV1aWQ6ICQzZWQyNjlmMmYwZmIyMjRiJGV4cG9ydCQyZTJiY2Q4NzM5YWUwMzkudXVpZHY0KCksXG4gICAgICAgICAgICBwcm9ncmVzczogMCxcbiAgICAgICAgICAgIC8vIFNldHRpbmcgdGhlIHRvdGFsIHVwbG9hZCBzaXplIHRvIGZpbGUuc2l6ZSBmb3IgdGhlIGJlZ2lubmluZ1xuICAgICAgICAgICAgLy8gSXQncyBhY3R1YWwgZGlmZmVyZW50IHRoYW4gdGhlIHNpemUgdG8gYmUgdHJhbnNtaXR0ZWQuXG4gICAgICAgICAgICB0b3RhbDogZmlsZS5zaXplLFxuICAgICAgICAgICAgYnl0ZXNTZW50OiAwLFxuICAgICAgICAgICAgZmlsZW5hbWU6IHRoaXMuX3JlbmFtZUZpbGUoZmlsZSlcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5maWxlcy5wdXNoKGZpbGUpO1xuICAgICAgICBmaWxlLnN0YXR1cyA9ICQzZWQyNjlmMmYwZmIyMjRiJGV4cG9ydCQyZTJiY2Q4NzM5YWUwMzkuQURERUQ7XG4gICAgICAgIHRoaXMuZW1pdChcImFkZGVkZmlsZVwiLCBmaWxlKTtcbiAgICAgICAgdGhpcy5fZW5xdWV1ZVRodW1ibmFpbChmaWxlKTtcbiAgICAgICAgdGhpcy5hY2NlcHQoZmlsZSwgKGVycm9yKT0+e1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgZmlsZS5hY2NlcHRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yUHJvY2Vzc2luZyhbXG4gICAgICAgICAgICAgICAgICAgIGZpbGVcbiAgICAgICAgICAgICAgICBdLCBlcnJvcik7IC8vIFdpbGwgc2V0IHRoZSBmaWxlLnN0YXR1c1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmaWxlLmFjY2VwdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmF1dG9RdWV1ZSkgdGhpcy5lbnF1ZXVlRmlsZShmaWxlKTtcbiAgICAgICAgICAgICAgICAgLy8gV2lsbCBzZXQgLmFjY2VwdGVkID0gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlTWF4RmlsZXNSZWFjaGVkQ2xhc3MoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIFdyYXBwZXIgZm9yIGVucXVldWVGaWxlXG4gICAgZW5xdWV1ZUZpbGVzKGZpbGVzKSB7XG4gICAgICAgIGZvciAobGV0IGZpbGUgb2YgZmlsZXMpdGhpcy5lbnF1ZXVlRmlsZShmaWxlKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGVucXVldWVGaWxlKGZpbGUpIHtcbiAgICAgICAgaWYgKGZpbGUuc3RhdHVzID09PSAkM2VkMjY5ZjJmMGZiMjI0YiRleHBvcnQkMmUyYmNkODczOWFlMDM5LkFEREVEICYmIGZpbGUuYWNjZXB0ZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGZpbGUuc3RhdHVzID0gJDNlZDI2OWYyZjBmYjIyNGIkZXhwb3J0JDJlMmJjZDg3MzlhZTAzOS5RVUVVRUQ7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmF1dG9Qcm9jZXNzUXVldWUpIHJldHVybiBzZXRUaW1lb3V0KCgpPT50aGlzLnByb2Nlc3NRdWV1ZSgpXG4gICAgICAgICAgICAsIDApOyAvLyBEZWZlcnJpbmcgdGhlIGNhbGxcbiAgICAgICAgfSBlbHNlIHRocm93IG5ldyBFcnJvcihcIlRoaXMgZmlsZSBjYW4ndCBiZSBxdWV1ZWQgYmVjYXVzZSBpdCBoYXMgYWxyZWFkeSBiZWVuIHByb2Nlc3NlZCBvciB3YXMgcmVqZWN0ZWQuXCIpO1xuICAgIH1cbiAgICBfZW5xdWV1ZVRodW1ibmFpbChmaWxlKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuY3JlYXRlSW1hZ2VUaHVtYm5haWxzICYmIGZpbGUudHlwZS5tYXRjaCgvaW1hZ2UuKi8pICYmIGZpbGUuc2l6ZSA8PSB0aGlzLm9wdGlvbnMubWF4VGh1bWJuYWlsRmlsZXNpemUgKiAxMDQ4NTc2KSB7XG4gICAgICAgICAgICB0aGlzLl90aHVtYm5haWxRdWV1ZS5wdXNoKGZpbGUpO1xuICAgICAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoKCk9PnRoaXMuX3Byb2Nlc3NUaHVtYm5haWxRdWV1ZSgpXG4gICAgICAgICAgICAsIDApOyAvLyBEZWZlcnJpbmcgdGhlIGNhbGxcbiAgICAgICAgfVxuICAgIH1cbiAgICBfcHJvY2Vzc1RodW1ibmFpbFF1ZXVlKCkge1xuICAgICAgICBpZiAodGhpcy5fcHJvY2Vzc2luZ1RodW1ibmFpbCB8fCB0aGlzLl90aHVtYm5haWxRdWV1ZS5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICAgICAgdGhpcy5fcHJvY2Vzc2luZ1RodW1ibmFpbCA9IHRydWU7XG4gICAgICAgIGxldCBmaWxlID0gdGhpcy5fdGh1bWJuYWlsUXVldWUuc2hpZnQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlVGh1bWJuYWlsKGZpbGUsIHRoaXMub3B0aW9ucy50aHVtYm5haWxXaWR0aCwgdGhpcy5vcHRpb25zLnRodW1ibmFpbEhlaWdodCwgdGhpcy5vcHRpb25zLnRodW1ibmFpbE1ldGhvZCwgdHJ1ZSwgKGRhdGFVcmwpPT57XG4gICAgICAgICAgICB0aGlzLmVtaXQoXCJ0aHVtYm5haWxcIiwgZmlsZSwgZGF0YVVybCk7XG4gICAgICAgICAgICB0aGlzLl9wcm9jZXNzaW5nVGh1bWJuYWlsID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcHJvY2Vzc1RodW1ibmFpbFF1ZXVlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBDYW4gYmUgY2FsbGVkIGJ5IHRoZSB1c2VyIHRvIHJlbW92ZSBhIGZpbGVcbiAgICByZW1vdmVGaWxlKGZpbGUpIHtcbiAgICAgICAgaWYgKGZpbGUuc3RhdHVzID09PSAkM2VkMjY5ZjJmMGZiMjI0YiRleHBvcnQkMmUyYmNkODczOWFlMDM5LlVQTE9BRElORykgdGhpcy5jYW5jZWxVcGxvYWQoZmlsZSk7XG4gICAgICAgIHRoaXMuZmlsZXMgPSAkM2VkMjY5ZjJmMGZiMjI0YiR2YXIkd2l0aG91dCh0aGlzLmZpbGVzLCBmaWxlKTtcbiAgICAgICAgdGhpcy5lbWl0KFwicmVtb3ZlZGZpbGVcIiwgZmlsZSk7XG4gICAgICAgIGlmICh0aGlzLmZpbGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHRoaXMuZW1pdChcInJlc2V0XCIpO1xuICAgIH1cbiAgICAvLyBSZW1vdmVzIGFsbCBmaWxlcyB0aGF0IGFyZW4ndCBjdXJyZW50bHkgcHJvY2Vzc2VkIGZyb20gdGhlIGxpc3RcbiAgICByZW1vdmVBbGxGaWxlcyhjYW5jZWxJZk5lY2Vzc2FyeSkge1xuICAgICAgICAvLyBDcmVhdGUgYSBjb3B5IG9mIGZpbGVzIHNpbmNlIHJlbW92ZUZpbGUoKSBjaGFuZ2VzIHRoZSBAZmlsZXMgYXJyYXkuXG4gICAgICAgIGlmIChjYW5jZWxJZk5lY2Vzc2FyeSA9PSBudWxsKSBjYW5jZWxJZk5lY2Vzc2FyeSA9IGZhbHNlO1xuICAgICAgICBmb3IgKGxldCBmaWxlIG9mIHRoaXMuZmlsZXMuc2xpY2UoKSlpZiAoZmlsZS5zdGF0dXMgIT09ICQzZWQyNjlmMmYwZmIyMjRiJGV4cG9ydCQyZTJiY2Q4NzM5YWUwMzkuVVBMT0FESU5HIHx8IGNhbmNlbElmTmVjZXNzYXJ5KSB0aGlzLnJlbW92ZUZpbGUoZmlsZSk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAvLyBSZXNpemVzIGFuIGltYWdlIGJlZm9yZSBpdCBnZXRzIHNlbnQgdG8gdGhlIHNlcnZlci4gVGhpcyBmdW5jdGlvbiBpcyB0aGUgZGVmYXVsdCBiZWhhdmlvciBvZlxuICAgIC8vIGBvcHRpb25zLnRyYW5zZm9ybUZpbGVgIGlmIGByZXNpemVXaWR0aGAgb3IgYHJlc2l6ZUhlaWdodGAgYXJlIHNldC4gVGhlIGNhbGxiYWNrIGlzIGludm9rZWQgd2l0aFxuICAgIC8vIHRoZSByZXNpemVkIGJsb2IuXG4gICAgcmVzaXplSW1hZ2UoZmlsZSwgd2lkdGgsIGhlaWdodCwgcmVzaXplTWV0aG9kLCBjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVUaHVtYm5haWwoZmlsZSwgd2lkdGgsIGhlaWdodCwgcmVzaXplTWV0aG9kLCB0cnVlLCAoZGF0YVVybCwgY2FudmFzKT0+e1xuICAgICAgICAgICAgaWYgKGNhbnZhcyA9PSBudWxsKSAvLyBUaGUgaW1hZ2UgaGFzIG5vdCBiZWVuIHJlc2l6ZWRcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhmaWxlKTtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCB7IHJlc2l6ZU1pbWVUeXBlOiByZXNpemVNaW1lVHlwZSAgfSA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgICAgICAgICBpZiAocmVzaXplTWltZVR5cGUgPT0gbnVsbCkgcmVzaXplTWltZVR5cGUgPSBmaWxlLnR5cGU7XG4gICAgICAgICAgICAgICAgbGV0IHJlc2l6ZWREYXRhVVJMID0gY2FudmFzLnRvRGF0YVVSTChyZXNpemVNaW1lVHlwZSwgdGhpcy5vcHRpb25zLnJlc2l6ZVF1YWxpdHkpO1xuICAgICAgICAgICAgICAgIGlmIChyZXNpemVNaW1lVHlwZSA9PT0gXCJpbWFnZS9qcGVnXCIgfHwgcmVzaXplTWltZVR5cGUgPT09IFwiaW1hZ2UvanBnXCIpIC8vIE5vdyBhZGQgdGhlIG9yaWdpbmFsIEVYSUYgaW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgICByZXNpemVkRGF0YVVSTCA9ICQzZWQyNjlmMmYwZmIyMjRiJHZhciRFeGlmUmVzdG9yZS5yZXN0b3JlKGZpbGUuZGF0YVVSTCwgcmVzaXplZERhdGFVUkwpO1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjaygkM2VkMjY5ZjJmMGZiMjI0YiRleHBvcnQkMmUyYmNkODczOWFlMDM5LmRhdGFVUkl0b0Jsb2IocmVzaXplZERhdGFVUkwpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNyZWF0ZVRodW1ibmFpbChmaWxlLCB3aWR0aCwgaGVpZ2h0LCByZXNpemVNZXRob2QsIGZpeE9yaWVudGF0aW9uLCBjYWxsYmFjaykge1xuICAgICAgICBsZXQgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIGZpbGVSZWFkZXIub25sb2FkID0gKCk9PntcbiAgICAgICAgICAgIGZpbGUuZGF0YVVSTCA9IGZpbGVSZWFkZXIucmVzdWx0O1xuICAgICAgICAgICAgLy8gRG9uJ3QgYm90aGVyIGNyZWF0aW5nIGEgdGh1bWJuYWlsIGZvciBTVkcgaW1hZ2VzIHNpbmNlIHRoZXkncmUgdmVjdG9yXG4gICAgICAgICAgICBpZiAoZmlsZS50eXBlID09PSBcImltYWdlL3N2Zyt4bWxcIikge1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjayAhPSBudWxsKSBjYWxsYmFjayhmaWxlUmVhZGVyLnJlc3VsdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jcmVhdGVUaHVtYm5haWxGcm9tVXJsKGZpbGUsIHdpZHRoLCBoZWlnaHQsIHJlc2l6ZU1ldGhvZCwgZml4T3JpZW50YXRpb24sIGNhbGxiYWNrKTtcbiAgICAgICAgfTtcbiAgICAgICAgZmlsZVJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgIH1cbiAgICAvLyBgbW9ja0ZpbGVgIG5lZWRzIHRvIGhhdmUgdGhlc2UgYXR0cmlidXRlczpcbiAgICAvL1xuICAgIC8vICAgICB7IG5hbWU6ICduYW1lJywgc2l6ZTogMTIzNDUsIGltYWdlVXJsOiAnJyB9XG4gICAgLy9cbiAgICAvLyBgY2FsbGJhY2tgIHdpbGwgYmUgaW52b2tlZCB3aGVuIHRoZSBpbWFnZSBoYXMgYmVlbiBkb3dubG9hZGVkIGFuZCBkaXNwbGF5ZWQuXG4gICAgLy8gYGNyb3NzT3JpZ2luYCB3aWxsIGJlIGFkZGVkIHRvIHRoZSBgaW1nYCB0YWcgd2hlbiBhY2Nlc3NpbmcgdGhlIGZpbGUuXG4gICAgZGlzcGxheUV4aXN0aW5nRmlsZShtb2NrRmlsZSwgaW1hZ2VVcmwsIGNhbGxiYWNrLCBjcm9zc09yaWdpbiwgcmVzaXplVGh1bWJuYWlsID0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmVtaXQoXCJhZGRlZGZpbGVcIiwgbW9ja0ZpbGUpO1xuICAgICAgICB0aGlzLmVtaXQoXCJjb21wbGV0ZVwiLCBtb2NrRmlsZSk7XG4gICAgICAgIGlmICghcmVzaXplVGh1bWJuYWlsKSB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoXCJ0aHVtYm5haWxcIiwgbW9ja0ZpbGUsIGltYWdlVXJsKTtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBvbkRvbmUgPSAodGh1bWJuYWlsKT0+e1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcInRodW1ibmFpbFwiLCBtb2NrRmlsZSwgdGh1bWJuYWlsKTtcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbW9ja0ZpbGUuZGF0YVVSTCA9IGltYWdlVXJsO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVUaHVtYm5haWxGcm9tVXJsKG1vY2tGaWxlLCB0aGlzLm9wdGlvbnMudGh1bWJuYWlsV2lkdGgsIHRoaXMub3B0aW9ucy50aHVtYm5haWxIZWlnaHQsIHRoaXMub3B0aW9ucy50aHVtYm5haWxNZXRob2QsIHRoaXMub3B0aW9ucy5maXhPcmllbnRhdGlvbiwgb25Eb25lLCBjcm9zc09yaWdpbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY3JlYXRlVGh1bWJuYWlsRnJvbVVybChmaWxlLCB3aWR0aCwgaGVpZ2h0LCByZXNpemVNZXRob2QsIGZpeE9yaWVudGF0aW9uLCBjYWxsYmFjaywgY3Jvc3NPcmlnaW4pIHtcbiAgICAgICAgLy8gTm90IHVzaW5nIGBuZXcgSW1hZ2VgIGhlcmUgYmVjYXVzZSBvZiBhIGJ1ZyBpbiBsYXRlc3QgQ2hyb21lIHZlcnNpb25zLlxuICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2VueW8vZHJvcHpvbmUvcHVsbC8yMjZcbiAgICAgICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGlmIChjcm9zc09yaWdpbikgaW1nLmNyb3NzT3JpZ2luID0gY3Jvc3NPcmlnaW47XG4gICAgICAgIC8vIGZpeE9yaWVudGF0aW9uIGlzIG5vdCBuZWVkZWQgYW55bW9yZSB3aXRoIGJyb3dzZXJzIGhhbmRsaW5nIGltYWdlT3JpZW50YXRpb25cbiAgICAgICAgZml4T3JpZW50YXRpb24gPSBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpW1wiaW1hZ2VPcmllbnRhdGlvblwiXSA9PSBcImZyb20taW1hZ2VcIiA/IGZhbHNlIDogZml4T3JpZW50YXRpb247XG4gICAgICAgIGltZy5vbmxvYWQgPSAoKT0+e1xuICAgICAgICAgICAgbGV0IGxvYWRFeGlmID0gKGNhbGxiYWNrKT0+Y2FsbGJhY2soMSlcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgRVhJRiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBFWElGICE9PSBudWxsICYmIGZpeE9yaWVudGF0aW9uKSBsb2FkRXhpZiA9IChjYWxsYmFjayk9PkVYSUYuZ2V0RGF0YShpbWcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soRVhJRi5nZXRUYWcodGhpcywgXCJPcmllbnRhdGlvblwiKSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIHJldHVybiBsb2FkRXhpZigob3JpZW50YXRpb24pPT57XG4gICAgICAgICAgICAgICAgZmlsZS53aWR0aCA9IGltZy53aWR0aDtcbiAgICAgICAgICAgICAgICBmaWxlLmhlaWdodCA9IGltZy5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgbGV0IHJlc2l6ZUluZm8gPSB0aGlzLm9wdGlvbnMucmVzaXplLmNhbGwodGhpcywgZmlsZSwgd2lkdGgsIGhlaWdodCwgcmVzaXplTWV0aG9kKTtcbiAgICAgICAgICAgICAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgICAgICAgICAgICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgICAgICAgICBjYW52YXMud2lkdGggPSByZXNpemVJbmZvLnRyZ1dpZHRoO1xuICAgICAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSByZXNpemVJbmZvLnRyZ0hlaWdodDtcbiAgICAgICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPiA0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IHJlc2l6ZUluZm8udHJnSGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gcmVzaXplSW5mby50cmdXaWR0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3dpdGNoKG9yaWVudGF0aW9uKXtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaG9yaXpvbnRhbCBmbGlwXG4gICAgICAgICAgICAgICAgICAgICAgICBjdHgudHJhbnNsYXRlKGNhbnZhcy53aWR0aCwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdHguc2NhbGUoLTEsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDE4MMKwIHJvdGF0ZSBsZWZ0XG4gICAgICAgICAgICAgICAgICAgICAgICBjdHgudHJhbnNsYXRlKGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdHgucm90YXRlKE1hdGguUEkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZlcnRpY2FsIGZsaXBcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoMCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdHguc2NhbGUoMSwgLTEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZlcnRpY2FsIGZsaXAgKyA5MCByb3RhdGUgcmlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5yb3RhdGUoMC41ICogTWF0aC5QSSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdHguc2NhbGUoMSwgLTEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDkwwrAgcm90YXRlIHJpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICBjdHgucm90YXRlKDAuNSAqIE1hdGguUEkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSgwLCAtY2FudmFzLndpZHRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBob3Jpem9udGFsIGZsaXAgKyA5MCByb3RhdGUgcmlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5yb3RhdGUoMC41ICogTWF0aC5QSSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdHgudHJhbnNsYXRlKGNhbnZhcy5oZWlnaHQsIC1jYW52YXMud2lkdGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LnNjYWxlKC0xLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA5MMKwIHJvdGF0ZSBsZWZ0XG4gICAgICAgICAgICAgICAgICAgICAgICBjdHgucm90YXRlKC0wLjUgKiBNYXRoLlBJKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoLWNhbnZhcy5oZWlnaHQsIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBidWdmaXggZm9yIGlPUycgc2NhbGluZyBidWcuXG4gICAgICAgICAgICAgICAgJDNlZDI2OWYyZjBmYjIyNGIkdmFyJGRyYXdJbWFnZUlPU0ZpeChjdHgsIGltZywgcmVzaXplSW5mby5zcmNYICE9IG51bGwgPyByZXNpemVJbmZvLnNyY1ggOiAwLCByZXNpemVJbmZvLnNyY1kgIT0gbnVsbCA/IHJlc2l6ZUluZm8uc3JjWSA6IDAsIHJlc2l6ZUluZm8uc3JjV2lkdGgsIHJlc2l6ZUluZm8uc3JjSGVpZ2h0LCByZXNpemVJbmZvLnRyZ1ggIT0gbnVsbCA/IHJlc2l6ZUluZm8udHJnWCA6IDAsIHJlc2l6ZUluZm8udHJnWSAhPSBudWxsID8gcmVzaXplSW5mby50cmdZIDogMCwgcmVzaXplSW5mby50cmdXaWR0aCwgcmVzaXplSW5mby50cmdIZWlnaHQpO1xuICAgICAgICAgICAgICAgIGxldCB0aHVtYm5haWwgPSBjYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvcG5nXCIpO1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjayAhPSBudWxsKSByZXR1cm4gY2FsbGJhY2sodGh1bWJuYWlsLCBjYW52YXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChjYWxsYmFjayAhPSBudWxsKSBpbWcub25lcnJvciA9IGNhbGxiYWNrO1xuICAgICAgICByZXR1cm4gaW1nLnNyYyA9IGZpbGUuZGF0YVVSTDtcbiAgICB9XG4gICAgLy8gR29lcyB0aHJvdWdoIHRoZSBxdWV1ZSBhbmQgcHJvY2Vzc2VzIGZpbGVzIGlmIHRoZXJlIGFyZW4ndCB0b28gbWFueSBhbHJlYWR5LlxuICAgIHByb2Nlc3NRdWV1ZSgpIHtcbiAgICAgICAgbGV0IHsgcGFyYWxsZWxVcGxvYWRzOiBwYXJhbGxlbFVwbG9hZHMgIH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGxldCBwcm9jZXNzaW5nTGVuZ3RoID0gdGhpcy5nZXRVcGxvYWRpbmdGaWxlcygpLmxlbmd0aDtcbiAgICAgICAgbGV0IGkgPSBwcm9jZXNzaW5nTGVuZ3RoO1xuICAgICAgICAvLyBUaGVyZSBhcmUgYWxyZWFkeSBhdCBsZWFzdCBhcyBtYW55IGZpbGVzIHVwbG9hZGluZyB0aGFuIHNob3VsZCBiZVxuICAgICAgICBpZiAocHJvY2Vzc2luZ0xlbmd0aCA+PSBwYXJhbGxlbFVwbG9hZHMpIHJldHVybjtcbiAgICAgICAgbGV0IHF1ZXVlZEZpbGVzID0gdGhpcy5nZXRRdWV1ZWRGaWxlcygpO1xuICAgICAgICBpZiAoIShxdWV1ZWRGaWxlcy5sZW5ndGggPiAwKSkgcmV0dXJuO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnVwbG9hZE11bHRpcGxlKSAvLyBUaGUgZmlsZXMgc2hvdWxkIGJlIHVwbG9hZGVkIGluIG9uZSByZXF1ZXN0XG4gICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NGaWxlcyhxdWV1ZWRGaWxlcy5zbGljZSgwLCBwYXJhbGxlbFVwbG9hZHMgLSBwcm9jZXNzaW5nTGVuZ3RoKSk7XG4gICAgICAgIGVsc2Ugd2hpbGUoaSA8IHBhcmFsbGVsVXBsb2Fkcyl7XG4gICAgICAgICAgICBpZiAoIXF1ZXVlZEZpbGVzLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICAgICAgIC8vIE5vdGhpbmcgbGVmdCB0byBwcm9jZXNzXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NGaWxlKHF1ZXVlZEZpbGVzLnNoaWZ0KCkpO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFdyYXBwZXIgZm9yIGBwcm9jZXNzRmlsZXNgXG4gICAgcHJvY2Vzc0ZpbGUoZmlsZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9jZXNzRmlsZXMoW1xuICAgICAgICAgICAgZmlsZVxuICAgICAgICBdKTtcbiAgICB9XG4gICAgLy8gTG9hZHMgdGhlIGZpbGUsIHRoZW4gY2FsbHMgZmluaXNoZWRMb2FkaW5nKClcbiAgICBwcm9jZXNzRmlsZXMoZmlsZXMpIHtcbiAgICAgICAgZm9yIChsZXQgZmlsZSBvZiBmaWxlcyl7XG4gICAgICAgICAgICBmaWxlLnByb2Nlc3NpbmcgPSB0cnVlOyAvLyBCYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuICAgICAgICAgICAgZmlsZS5zdGF0dXMgPSAkM2VkMjY5ZjJmMGZiMjI0YiRleHBvcnQkMmUyYmNkODczOWFlMDM5LlVQTE9BRElORztcbiAgICAgICAgICAgIHRoaXMuZW1pdChcInByb2Nlc3NpbmdcIiwgZmlsZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy51cGxvYWRNdWx0aXBsZSkgdGhpcy5lbWl0KFwicHJvY2Vzc2luZ211bHRpcGxlXCIsIGZpbGVzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudXBsb2FkRmlsZXMoZmlsZXMpO1xuICAgIH1cbiAgICBfZ2V0RmlsZXNXaXRoWGhyKHhocikge1xuICAgICAgICBsZXQgZmlsZXM7XG4gICAgICAgIHJldHVybiBmaWxlcyA9IHRoaXMuZmlsZXMuZmlsdGVyKChmaWxlKT0+ZmlsZS54aHIgPT09IHhoclxuICAgICAgICApLm1hcCgoZmlsZSk9PmZpbGVcbiAgICAgICAgKTtcbiAgICB9XG4gICAgLy8gQ2FuY2VscyB0aGUgZmlsZSB1cGxvYWQgYW5kIHNldHMgdGhlIHN0YXR1cyB0byBDQU5DRUxFRFxuICAgIC8vICoqaWYqKiB0aGUgZmlsZSBpcyBhY3R1YWxseSBiZWluZyB1cGxvYWRlZC5cbiAgICAvLyBJZiBpdCdzIHN0aWxsIGluIHRoZSBxdWV1ZSwgdGhlIGZpbGUgaXMgYmVpbmcgcmVtb3ZlZCBmcm9tIGl0IGFuZCB0aGUgc3RhdHVzXG4gICAgLy8gc2V0IHRvIENBTkNFTEVELlxuICAgIGNhbmNlbFVwbG9hZChmaWxlKSB7XG4gICAgICAgIGlmIChmaWxlLnN0YXR1cyA9PT0gJDNlZDI2OWYyZjBmYjIyNGIkZXhwb3J0JDJlMmJjZDg3MzlhZTAzOS5VUExPQURJTkcpIHtcbiAgICAgICAgICAgIGxldCBncm91cGVkRmlsZXMgPSB0aGlzLl9nZXRGaWxlc1dpdGhYaHIoZmlsZS54aHIpO1xuICAgICAgICAgICAgZm9yIChsZXQgZ3JvdXBlZEZpbGUgb2YgZ3JvdXBlZEZpbGVzKWdyb3VwZWRGaWxlLnN0YXR1cyA9ICQzZWQyNjlmMmYwZmIyMjRiJGV4cG9ydCQyZTJiY2Q4NzM5YWUwMzkuQ0FOQ0VMRUQ7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGZpbGUueGhyICE9PSBcInVuZGVmaW5lZFwiKSBmaWxlLnhoci5hYm9ydCgpO1xuICAgICAgICAgICAgZm9yIChsZXQgZ3JvdXBlZEZpbGUxIG9mIGdyb3VwZWRGaWxlcyl0aGlzLmVtaXQoXCJjYW5jZWxlZFwiLCBncm91cGVkRmlsZTEpO1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy51cGxvYWRNdWx0aXBsZSkgdGhpcy5lbWl0KFwiY2FuY2VsZWRtdWx0aXBsZVwiLCBncm91cGVkRmlsZXMpO1xuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuc3RhdHVzID09PSAkM2VkMjY5ZjJmMGZiMjI0YiRleHBvcnQkMmUyYmNkODczOWFlMDM5LkFEREVEIHx8IGZpbGUuc3RhdHVzID09PSAkM2VkMjY5ZjJmMGZiMjI0YiRleHBvcnQkMmUyYmNkODczOWFlMDM5LlFVRVVFRCkge1xuICAgICAgICAgICAgZmlsZS5zdGF0dXMgPSAkM2VkMjY5ZjJmMGZiMjI0YiRleHBvcnQkMmUyYmNkODczOWFlMDM5LkNBTkNFTEVEO1xuICAgICAgICAgICAgdGhpcy5lbWl0KFwiY2FuY2VsZWRcIiwgZmlsZSk7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnVwbG9hZE11bHRpcGxlKSB0aGlzLmVtaXQoXCJjYW5jZWxlZG11bHRpcGxlXCIsIFtcbiAgICAgICAgICAgICAgICBmaWxlXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmF1dG9Qcm9jZXNzUXVldWUpIHJldHVybiB0aGlzLnByb2Nlc3NRdWV1ZSgpO1xuICAgIH1cbiAgICByZXNvbHZlT3B0aW9uKG9wdGlvbiwgLi4uYXJncykge1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbiA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gb3B0aW9uLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICByZXR1cm4gb3B0aW9uO1xuICAgIH1cbiAgICB1cGxvYWRGaWxlKGZpbGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXBsb2FkRmlsZXMoW1xuICAgICAgICAgICAgZmlsZVxuICAgICAgICBdKTtcbiAgICB9XG4gICAgdXBsb2FkRmlsZXMoZmlsZXMpIHtcbiAgICAgICAgdGhpcy5fdHJhbnNmb3JtRmlsZXMoZmlsZXMsICh0cmFuc2Zvcm1lZEZpbGVzKT0+e1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5jaHVua2luZykge1xuICAgICAgICAgICAgICAgIC8vIENodW5raW5nIGlzIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgd2l0aCBgdXBsb2FkTXVsdGlwbGVgIHNvIHdlIGtub3dcbiAgICAgICAgICAgICAgICAvLyB0aGF0IHRoZXJlIGlzIG9ubHkgX19vbmVfX2ZpbGUuXG4gICAgICAgICAgICAgICAgbGV0IHRyYW5zZm9ybWVkRmlsZSA9IHRyYW5zZm9ybWVkRmlsZXNbMF07XG4gICAgICAgICAgICAgICAgZmlsZXNbMF0udXBsb2FkLmNodW5rZWQgPSB0aGlzLm9wdGlvbnMuY2h1bmtpbmcgJiYgKHRoaXMub3B0aW9ucy5mb3JjZUNodW5raW5nIHx8IHRyYW5zZm9ybWVkRmlsZS5zaXplID4gdGhpcy5vcHRpb25zLmNodW5rU2l6ZSk7XG4gICAgICAgICAgICAgICAgZmlsZXNbMF0udXBsb2FkLnRvdGFsQ2h1bmtDb3VudCA9IE1hdGguY2VpbCh0cmFuc2Zvcm1lZEZpbGUuc2l6ZSAvIHRoaXMub3B0aW9ucy5jaHVua1NpemUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZpbGVzWzBdLnVwbG9hZC5jaHVua2VkKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBmaWxlIHNob3VsZCBiZSBzZW50IGluIGNodW5rcyFcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgY2h1bmtpbmcgb3B0aW9uIGlzIHNldCwgd2UgKiprbm93KiogdGhhdCB0aGVyZSBjYW4gb25seSBiZSAqKm9uZSoqIGZpbGUsIHNpbmNlXG4gICAgICAgICAgICAgICAgLy8gdXBsb2FkTXVsdGlwbGUgaXMgbm90IGFsbG93ZWQgd2l0aCB0aGlzIG9wdGlvbi5cbiAgICAgICAgICAgICAgICBsZXQgZmlsZSA9IGZpbGVzWzBdO1xuICAgICAgICAgICAgICAgIGxldCB0cmFuc2Zvcm1lZEZpbGUgPSB0cmFuc2Zvcm1lZEZpbGVzWzBdO1xuICAgICAgICAgICAgICAgIGxldCBzdGFydGVkQ2h1bmtDb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgZmlsZS51cGxvYWQuY2h1bmtzID0gW107XG4gICAgICAgICAgICAgICAgbGV0IGhhbmRsZU5leHRDaHVuayA9ICgpPT57XG4gICAgICAgICAgICAgICAgICAgIGxldCBjaHVua0luZGV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgLy8gRmluZCB0aGUgbmV4dCBpdGVtIGluIGZpbGUudXBsb2FkLmNodW5rcyB0aGF0IGlzIG5vdCBkZWZpbmVkIHlldC5cbiAgICAgICAgICAgICAgICAgICAgd2hpbGUoZmlsZS51cGxvYWQuY2h1bmtzW2NodW5rSW5kZXhdICE9PSB1bmRlZmluZWQpY2h1bmtJbmRleCsrO1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIG1lYW5zLCB0aGF0IGFsbCBjaHVua3MgaGF2ZSBhbHJlYWR5IGJlZW4gc3RhcnRlZC5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNodW5rSW5kZXggPj0gZmlsZS51cGxvYWQudG90YWxDaHVua0NvdW50KSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0ZWRDaHVua0NvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGFydCA9IGNodW5rSW5kZXggKiB0aGlzLm9wdGlvbnMuY2h1bmtTaXplO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZW5kID0gTWF0aC5taW4oc3RhcnQgKyB0aGlzLm9wdGlvbnMuY2h1bmtTaXplLCB0cmFuc2Zvcm1lZEZpbGUuc2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhQmxvY2sgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLl9nZXRQYXJhbU5hbWUoMCksXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB0cmFuc2Zvcm1lZEZpbGUud2Via2l0U2xpY2UgPyB0cmFuc2Zvcm1lZEZpbGUud2Via2l0U2xpY2Uoc3RhcnQsIGVuZCkgOiB0cmFuc2Zvcm1lZEZpbGUuc2xpY2Uoc3RhcnQsIGVuZCksXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlbmFtZTogZmlsZS51cGxvYWQuZmlsZW5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaHVua0luZGV4OiBjaHVua0luZGV4XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGZpbGUudXBsb2FkLmNodW5rc1tjaHVua0luZGV4XSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGU6IGZpbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogY2h1bmtJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFCbG9jazogZGF0YUJsb2NrLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAkM2VkMjY5ZjJmMGZiMjI0YiRleHBvcnQkMmUyYmNkODczOWFlMDM5LlVQTE9BRElORyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0cmllczogMFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGxvYWREYXRhKGZpbGVzLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhQmxvY2tcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBmaWxlLnVwbG9hZC5maW5pc2hlZENodW5rVXBsb2FkID0gKGNodW5rLCByZXNwb25zZSk9PntcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFsbEZpbmlzaGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgY2h1bmsuc3RhdHVzID0gJDNlZDI2OWYyZjBmYjIyNGIkZXhwb3J0JDJlMmJjZDg3MzlhZTAzOS5TVUNDRVNTO1xuICAgICAgICAgICAgICAgICAgICAvLyBDbGVhciB0aGUgZGF0YSBmcm9tIHRoZSBjaHVua1xuICAgICAgICAgICAgICAgICAgICBjaHVuay5kYXRhQmxvY2sgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBjaHVuay5yZXNwb25zZSA9IGNodW5rLnhoci5yZXNwb25zZVRleHQ7XG4gICAgICAgICAgICAgICAgICAgIGNodW5rLnJlc3BvbnNlSGVhZGVycyA9IGNodW5rLnhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gTGVhdmluZyB0aGlzIHJlZmVyZW5jZSB0byB4aHIgd2lsbCBjYXVzZSBtZW1vcnkgbGVha3MuXG4gICAgICAgICAgICAgICAgICAgIGNodW5rLnhociA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBmaWxlLnVwbG9hZC50b3RhbENodW5rQ291bnQ7IGkrKyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlsZS51cGxvYWQuY2h1bmtzW2ldID09PSB1bmRlZmluZWQpIHJldHVybiBoYW5kbGVOZXh0Q2h1bmsoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWxlLnVwbG9hZC5jaHVua3NbaV0uc3RhdHVzICE9PSAkM2VkMjY5ZjJmMGZiMjI0YiRleHBvcnQkMmUyYmNkODczOWFlMDM5LlNVQ0NFU1MpIGFsbEZpbmlzaGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGFsbEZpbmlzaGVkKSB0aGlzLm9wdGlvbnMuY2h1bmtzVXBsb2FkZWQoZmlsZSwgKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZpbmlzaGVkKGZpbGVzLCByZXNwb25zZSwgbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5wYXJhbGxlbENodW5rVXBsb2FkcykgZm9yKGxldCBpID0gMDsgaSA8IGZpbGUudXBsb2FkLnRvdGFsQ2h1bmtDb3VudDsgaSsrKWhhbmRsZU5leHRDaHVuaygpO1xuICAgICAgICAgICAgICAgIGVsc2UgaGFuZGxlTmV4dENodW5rKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBkYXRhQmxvY2tzID0gW107XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKWRhdGFCbG9ja3NbaV0gPSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuX2dldFBhcmFtTmFtZShpKSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogdHJhbnNmb3JtZWRGaWxlc1tpXSxcbiAgICAgICAgICAgICAgICAgICAgZmlsZW5hbWU6IGZpbGVzW2ldLnVwbG9hZC5maWxlbmFtZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy5fdXBsb2FkRGF0YShmaWxlcywgZGF0YUJsb2Nrcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLy8gUmV0dXJucyB0aGUgcmlnaHQgY2h1bmsgZm9yIGdpdmVuIGZpbGUgYW5kIHhoclxuICAgIF9nZXRDaHVuayhmaWxlLCB4aHIpIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGZpbGUudXBsb2FkLnRvdGFsQ2h1bmtDb3VudDsgaSsrKXtcbiAgICAgICAgICAgIGlmIChmaWxlLnVwbG9hZC5jaHVua3NbaV0gIT09IHVuZGVmaW5lZCAmJiBmaWxlLnVwbG9hZC5jaHVua3NbaV0ueGhyID09PSB4aHIpIHJldHVybiBmaWxlLnVwbG9hZC5jaHVua3NbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gVGhpcyBmdW5jdGlvbiBhY3R1YWxseSB1cGxvYWRzIHRoZSBmaWxlKHMpIHRvIHRoZSBzZXJ2ZXIuXG4gICAgLy9cbiAgICAvLyAgSWYgZGF0YUJsb2NrcyBjb250YWlucyB0aGUgYWN0dWFsIGRhdGEgdG8gdXBsb2FkIChtZWFuaW5nLCB0aGF0IHRoaXMgY291bGRcbiAgICAvLyBlaXRoZXIgYmUgdHJhbnNmb3JtZWQgZmlsZXMsIG9yIGluZGl2aWR1YWwgY2h1bmtzIGZvciBjaHVua2VkIHVwbG9hZCkgdGhlblxuICAgIC8vIHRoZXkgd2lsbCBiZSB1c2VkIGZvciB0aGUgYWN0dWFsIGRhdGEgdG8gdXBsb2FkLlxuICAgIF91cGxvYWREYXRhKGZpbGVzLCBkYXRhQmxvY2tzKSB7XG4gICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgLy8gUHV0IHRoZSB4aHIgb2JqZWN0IGluIHRoZSBmaWxlIG9iamVjdHMgdG8gYmUgYWJsZSB0byByZWZlcmVuY2UgaXQgbGF0ZXIuXG4gICAgICAgIGZvciAobGV0IGZpbGUgb2YgZmlsZXMpZmlsZS54aHIgPSB4aHI7XG4gICAgICAgIGlmIChmaWxlc1swXS51cGxvYWQuY2h1bmtlZCkgLy8gUHV0IHRoZSB4aHIgb2JqZWN0IGluIHRoZSByaWdodCBjaHVuayBvYmplY3QsIHNvIGl0IGNhbiBiZSBhc3NvY2lhdGVkXG4gICAgICAgIC8vIGxhdGVyLCBhbmQgZm91bmQgd2l0aCBfZ2V0Q2h1bmsuXG4gICAgICAgIGZpbGVzWzBdLnVwbG9hZC5jaHVua3NbZGF0YUJsb2Nrc1swXS5jaHVua0luZGV4XS54aHIgPSB4aHI7XG4gICAgICAgIGxldCBtZXRob2QgPSB0aGlzLnJlc29sdmVPcHRpb24odGhpcy5vcHRpb25zLm1ldGhvZCwgZmlsZXMsIGRhdGFCbG9ja3MpO1xuICAgICAgICBsZXQgdXJsID0gdGhpcy5yZXNvbHZlT3B0aW9uKHRoaXMub3B0aW9ucy51cmwsIGZpbGVzLCBkYXRhQmxvY2tzKTtcbiAgICAgICAgeGhyLm9wZW4obWV0aG9kLCB1cmwsIHRydWUpO1xuICAgICAgICAvLyBTZXR0aW5nIHRoZSB0aW1lb3V0IGFmdGVyIG9wZW4gYmVjYXVzZSBvZiBJRTExIGlzc3VlOiBodHRwczovL2dpdGxhYi5jb20vbWVuby9kcm9wem9uZS9pc3N1ZXMvOFxuICAgICAgICBsZXQgdGltZW91dCA9IHRoaXMucmVzb2x2ZU9wdGlvbih0aGlzLm9wdGlvbnMudGltZW91dCwgZmlsZXMpO1xuICAgICAgICBpZiAodGltZW91dCkgeGhyLnRpbWVvdXQgPSB0aGlzLnJlc29sdmVPcHRpb24odGhpcy5vcHRpb25zLnRpbWVvdXQsIGZpbGVzKTtcbiAgICAgICAgLy8gSGFzIHRvIGJlIGFmdGVyIGAub3BlbigpYC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lbnlvL2Ryb3B6b25lL2lzc3Vlcy8xNzlcbiAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9ICEhdGhpcy5vcHRpb25zLndpdGhDcmVkZW50aWFscztcbiAgICAgICAgeGhyLm9ubG9hZCA9IChlKT0+e1xuICAgICAgICAgICAgdGhpcy5fZmluaXNoZWRVcGxvYWRpbmcoZmlsZXMsIHhociwgZSk7XG4gICAgICAgIH07XG4gICAgICAgIHhoci5vbnRpbWVvdXQgPSAoKT0+e1xuICAgICAgICAgICAgdGhpcy5faGFuZGxlVXBsb2FkRXJyb3IoZmlsZXMsIHhociwgYFJlcXVlc3QgdGltZWRvdXQgYWZ0ZXIgJHt0aGlzLm9wdGlvbnMudGltZW91dCAvIDEwMDB9IHNlY29uZHNgKTtcbiAgICAgICAgfTtcbiAgICAgICAgeGhyLm9uZXJyb3IgPSAoKT0+e1xuICAgICAgICAgICAgdGhpcy5faGFuZGxlVXBsb2FkRXJyb3IoZmlsZXMsIHhocik7XG4gICAgICAgIH07XG4gICAgICAgIC8vIFNvbWUgYnJvd3NlcnMgZG8gbm90IGhhdmUgdGhlIC51cGxvYWQgcHJvcGVydHlcbiAgICAgICAgbGV0IHByb2dyZXNzT2JqID0geGhyLnVwbG9hZCAhPSBudWxsID8geGhyLnVwbG9hZCA6IHhocjtcbiAgICAgICAgcHJvZ3Jlc3NPYmoub25wcm9ncmVzcyA9IChlKT0+dGhpcy5fdXBkYXRlRmlsZXNVcGxvYWRQcm9ncmVzcyhmaWxlcywgeGhyLCBlKVxuICAgICAgICA7XG4gICAgICAgIGxldCBoZWFkZXJzID0gdGhpcy5vcHRpb25zLmRlZmF1bHRIZWFkZXJzID8ge1xuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIFwiQ2FjaGUtQ29udHJvbFwiOiBcIm5vLWNhY2hlXCIsXG4gICAgICAgICAgICBcIlgtUmVxdWVzdGVkLVdpdGhcIjogXCJYTUxIdHRwUmVxdWVzdFwiXG4gICAgICAgIH0gOiB7XG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYmluYXJ5Qm9keSkgaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9IGZpbGVzWzBdLnR5cGU7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaGVhZGVycykgJGV3Qkt5JGp1c3RleHRlbmQoaGVhZGVycywgdGhpcy5vcHRpb25zLmhlYWRlcnMpO1xuICAgICAgICBmb3IobGV0IGhlYWRlck5hbWUgaW4gaGVhZGVycyl7XG4gICAgICAgICAgICBsZXQgaGVhZGVyVmFsdWUgPSBoZWFkZXJzW2hlYWRlck5hbWVdO1xuICAgICAgICAgICAgaWYgKGhlYWRlclZhbHVlKSB4aHIuc2V0UmVxdWVzdEhlYWRlcihoZWFkZXJOYW1lLCBoZWFkZXJWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5iaW5hcnlCb2R5KSB7XG4gICAgICAgICAgICAvLyBTaW5jZSB0aGUgZmlsZSBpcyBnb2luZyB0byBiZSBzZW50IGFzIGJpbmFyeSBib2R5LCBpdCBkb2Vzbid0IG1ha2VcbiAgICAgICAgICAgIC8vIGFueSBzZW5zZSB0byBnZW5lcmF0ZSBgRm9ybURhdGFgIGZvciBpdC5cbiAgICAgICAgICAgIGZvciAobGV0IGZpbGUgb2YgZmlsZXMpdGhpcy5lbWl0KFwic2VuZGluZ1wiLCBmaWxlLCB4aHIpO1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy51cGxvYWRNdWx0aXBsZSkgdGhpcy5lbWl0KFwic2VuZGluZ211bHRpcGxlXCIsIGZpbGVzLCB4aHIpO1xuICAgICAgICAgICAgdGhpcy5zdWJtaXRSZXF1ZXN0KHhociwgbnVsbCwgZmlsZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICAvLyBBZGRpbmcgYWxsIEBvcHRpb25zIHBhcmFtZXRlcnNcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMucGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgbGV0IGFkZGl0aW9uYWxQYXJhbXMgPSB0aGlzLm9wdGlvbnMucGFyYW1zO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYWRkaXRpb25hbFBhcmFtcyA9PT0gXCJmdW5jdGlvblwiKSBhZGRpdGlvbmFsUGFyYW1zID0gYWRkaXRpb25hbFBhcmFtcy5jYWxsKHRoaXMsIGZpbGVzLCB4aHIsIGZpbGVzWzBdLnVwbG9hZC5jaHVua2VkID8gdGhpcy5fZ2V0Q2h1bmsoZmlsZXNbMF0sIHhocikgOiBudWxsKTtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGtleSBpbiBhZGRpdGlvbmFsUGFyYW1zKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gYWRkaXRpb25hbFBhcmFtc1trZXldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIC8vIFRoZSBhZGRpdGlvbmFsIHBhcmFtZXRlciBjb250YWlucyBhbiBhcnJheSxcbiAgICAgICAgICAgICAgICAgICAgLy8gc28gbGV0cyBpdGVyYXRlIG92ZXIgaXQgdG8gYXR0YWNoIGVhY2ggdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgLy8gaW5kaXZpZHVhbGx5LlxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspZm9ybURhdGEuYXBwZW5kKGtleSwgdmFsdWVbaV0pO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGZvcm1EYXRhLmFwcGVuZChrZXksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBMZXQgdGhlIHVzZXIgYWRkIGFkZGl0aW9uYWwgZGF0YSBpZiBuZWNlc3NhcnlcbiAgICAgICAgICAgIGZvciAobGV0IGZpbGUgb2YgZmlsZXMpdGhpcy5lbWl0KFwic2VuZGluZ1wiLCBmaWxlLCB4aHIsIGZvcm1EYXRhKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMudXBsb2FkTXVsdGlwbGUpIHRoaXMuZW1pdChcInNlbmRpbmdtdWx0aXBsZVwiLCBmaWxlcywgeGhyLCBmb3JtRGF0YSk7XG4gICAgICAgICAgICB0aGlzLl9hZGRGb3JtRWxlbWVudERhdGEoZm9ybURhdGEpO1xuICAgICAgICAgICAgLy8gRmluYWxseSBhZGQgdGhlIGZpbGVzXG4gICAgICAgICAgICAvLyBIYXMgdG8gYmUgbGFzdCBiZWNhdXNlIHNvbWUgc2VydmVycyAoZWc6IFMzKSBleHBlY3QgdGhlIGZpbGUgdG8gYmUgdGhlIGxhc3QgcGFyYW1ldGVyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZGF0YUJsb2Nrcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGFCbG9jayA9IGRhdGFCbG9ja3NbaV07XG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGRhdGFCbG9jay5uYW1lLCBkYXRhQmxvY2suZGF0YSwgZGF0YUJsb2NrLmZpbGVuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc3VibWl0UmVxdWVzdCh4aHIsIGZvcm1EYXRhLCBmaWxlcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gVHJhbnNmb3JtcyBhbGwgZmlsZXMgd2l0aCB0aGlzLm9wdGlvbnMudHJhbnNmb3JtRmlsZSBhbmQgaW52b2tlcyBkb25lIHdpdGggdGhlIHRyYW5zZm9ybWVkIGZpbGVzIHdoZW4gZG9uZS5cbiAgICBfdHJhbnNmb3JtRmlsZXMoZmlsZXMsIGRvbmUpIHtcbiAgICAgICAgbGV0IHRyYW5zZm9ybWVkRmlsZXMgPSBbXTtcbiAgICAgICAgLy8gQ2x1bXN5IHdheSBvZiBoYW5kbGluZyBhc3luY2hyb25vdXMgY2FsbHMsIHVudGlsIEkgZ2V0IHRvIGFkZCBhIHByb3BlciBGdXR1cmUgbGlicmFyeS5cbiAgICAgICAgbGV0IGRvbmVDb3VudGVyID0gMDtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKXRoaXMub3B0aW9ucy50cmFuc2Zvcm1GaWxlLmNhbGwodGhpcywgZmlsZXNbaV0sICh0cmFuc2Zvcm1lZEZpbGUpPT57XG4gICAgICAgICAgICB0cmFuc2Zvcm1lZEZpbGVzW2ldID0gdHJhbnNmb3JtZWRGaWxlO1xuICAgICAgICAgICAgaWYgKCsrZG9uZUNvdW50ZXIgPT09IGZpbGVzLmxlbmd0aCkgZG9uZSh0cmFuc2Zvcm1lZEZpbGVzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIFRha2VzIGNhcmUgb2YgYWRkaW5nIG90aGVyIGlucHV0IGVsZW1lbnRzIG9mIHRoZSBmb3JtIHRvIHRoZSBBSkFYIHJlcXVlc3RcbiAgICBfYWRkRm9ybUVsZW1lbnREYXRhKGZvcm1EYXRhKSB7XG4gICAgICAgIC8vIFRha2UgY2FyZSBvZiBvdGhlciBpbnB1dCBlbGVtZW50c1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50LnRhZ05hbWUgPT09IFwiRk9STVwiKSBmb3IgKGxldCBpbnB1dCBvZiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0LCBidXR0b25cIikpe1xuICAgICAgICAgICAgbGV0IGlucHV0TmFtZSA9IGlucHV0LmdldEF0dHJpYnV0ZShcIm5hbWVcIik7XG4gICAgICAgICAgICBsZXQgaW5wdXRUeXBlID0gaW5wdXQuZ2V0QXR0cmlidXRlKFwidHlwZVwiKTtcbiAgICAgICAgICAgIGlmIChpbnB1dFR5cGUpIGlucHV0VHlwZSA9IGlucHV0VHlwZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgLy8gSWYgdGhlIGlucHV0IGRvZXNuJ3QgaGF2ZSBhIG5hbWUsIHdlIGNhbid0IHVzZSBpdC5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgaW5wdXROYW1lID09PSBcInVuZGVmaW5lZFwiIHx8IGlucHV0TmFtZSA9PT0gbnVsbCkgY29udGludWU7XG4gICAgICAgICAgICBpZiAoaW5wdXQudGFnTmFtZSA9PT0gXCJTRUxFQ1RcIiAmJiBpbnB1dC5oYXNBdHRyaWJ1dGUoXCJtdWx0aXBsZVwiKSkge1xuICAgICAgICAgICAgICAgIC8vIFBvc3NpYmx5IG11bHRpcGxlIHZhbHVlc1xuICAgICAgICAgICAgICAgIGZvciAobGV0IG9wdGlvbiBvZiBpbnB1dC5vcHRpb25zKWlmIChvcHRpb24uc2VsZWN0ZWQpIGZvcm1EYXRhLmFwcGVuZChpbnB1dE5hbWUsIG9wdGlvbi52YWx1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFpbnB1dFR5cGUgfHwgaW5wdXRUeXBlICE9PSBcImNoZWNrYm94XCIgJiYgaW5wdXRUeXBlICE9PSBcInJhZGlvXCIgfHwgaW5wdXQuY2hlY2tlZCkgZm9ybURhdGEuYXBwZW5kKGlucHV0TmFtZSwgaW5wdXQudmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEludm9rZWQgd2hlbiB0aGVyZSBpcyBuZXcgcHJvZ3Jlc3MgaW5mb3JtYXRpb24gYWJvdXQgZ2l2ZW4gZmlsZXMuXG4gICAgLy8gSWYgZSBpcyBub3QgcHJvdmlkZWQsIGl0IGlzIGFzc3VtZWQgdGhhdCB0aGUgdXBsb2FkIGlzIGZpbmlzaGVkLlxuICAgIF91cGRhdGVGaWxlc1VwbG9hZFByb2dyZXNzKGZpbGVzLCB4aHIsIGUpIHtcbiAgICAgICAgaWYgKCFmaWxlc1swXS51cGxvYWQuY2h1bmtlZCkgLy8gSGFuZGxlIGZpbGUgdXBsb2FkcyB3aXRob3V0IGNodW5raW5nXG4gICAgICAgIGZvciAobGV0IGZpbGUgb2YgZmlsZXMpe1xuICAgICAgICAgICAgaWYgKGZpbGUudXBsb2FkLnRvdGFsICYmIGZpbGUudXBsb2FkLmJ5dGVzU2VudCAmJiBmaWxlLnVwbG9hZC5ieXRlc1NlbnQgPT0gZmlsZS51cGxvYWQudG90YWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgICAgICBmaWxlLnVwbG9hZC5wcm9ncmVzcyA9IDEwMCAqIGUubG9hZGVkIC8gZS50b3RhbDtcbiAgICAgICAgICAgICAgICBmaWxlLnVwbG9hZC50b3RhbCA9IGUudG90YWw7XG4gICAgICAgICAgICAgICAgZmlsZS51cGxvYWQuYnl0ZXNTZW50ID0gZS5sb2FkZWQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE5vIGV2ZW50LCBzbyB3ZSdyZSBhdCAxMDAlXG4gICAgICAgICAgICAgICAgZmlsZS51cGxvYWQucHJvZ3Jlc3MgPSAxMDA7XG4gICAgICAgICAgICAgICAgZmlsZS51cGxvYWQuYnl0ZXNTZW50ID0gZmlsZS51cGxvYWQudG90YWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmVtaXQoXCJ1cGxvYWRwcm9ncmVzc1wiLCBmaWxlLCBmaWxlLnVwbG9hZC5wcm9ncmVzcywgZmlsZS51cGxvYWQuYnl0ZXNTZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIEhhbmRsZSBjaHVua2VkIGZpbGUgdXBsb2Fkc1xuICAgICAgICAgICAgLy8gQ2h1bmtlZCB1cGxvYWQgaXMgbm90IGNvbXBhdGlibGUgd2l0aCB1cGxvYWRpbmcgbXVsdGlwbGUgZmlsZXMgaW4gb25lXG4gICAgICAgICAgICAvLyByZXF1ZXN0LCBzbyB3ZSBrbm93IHRoZXJlJ3Mgb25seSBvbmUgZmlsZS5cbiAgICAgICAgICAgIGxldCBmaWxlID0gZmlsZXNbMF07XG4gICAgICAgICAgICAvLyBTaW5jZSB0aGlzIGlzIGEgY2h1bmtlZCB1cGxvYWQsIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBhcHByb3ByaWF0ZSBjaHVua1xuICAgICAgICAgICAgLy8gcHJvZ3Jlc3MuXG4gICAgICAgICAgICBsZXQgY2h1bmsgPSB0aGlzLl9nZXRDaHVuayhmaWxlLCB4aHIpO1xuICAgICAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgICAgICBjaHVuay5wcm9ncmVzcyA9IDEwMCAqIGUubG9hZGVkIC8gZS50b3RhbDtcbiAgICAgICAgICAgICAgICBjaHVuay50b3RhbCA9IGUudG90YWw7XG4gICAgICAgICAgICAgICAgY2h1bmsuYnl0ZXNTZW50ID0gZS5sb2FkZWQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE5vIGV2ZW50LCBzbyB3ZSdyZSBhdCAxMDAlXG4gICAgICAgICAgICAgICAgY2h1bmsucHJvZ3Jlc3MgPSAxMDA7XG4gICAgICAgICAgICAgICAgY2h1bmsuYnl0ZXNTZW50ID0gY2h1bmsudG90YWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBOb3cgdGFsbHkgdGhlICpmaWxlKiB1cGxvYWQgcHJvZ3Jlc3MgZnJvbSBpdHMgaW5kaXZpZHVhbCBjaHVua3NcbiAgICAgICAgICAgIGZpbGUudXBsb2FkLnByb2dyZXNzID0gMDtcbiAgICAgICAgICAgIGZpbGUudXBsb2FkLnRvdGFsID0gMDtcbiAgICAgICAgICAgIGZpbGUudXBsb2FkLmJ5dGVzU2VudCA9IDA7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZmlsZS51cGxvYWQudG90YWxDaHVua0NvdW50OyBpKyspaWYgKGZpbGUudXBsb2FkLmNodW5rc1tpXSAmJiB0eXBlb2YgZmlsZS51cGxvYWQuY2h1bmtzW2ldLnByb2dyZXNzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgZmlsZS51cGxvYWQucHJvZ3Jlc3MgKz0gZmlsZS51cGxvYWQuY2h1bmtzW2ldLnByb2dyZXNzO1xuICAgICAgICAgICAgICAgIGZpbGUudXBsb2FkLnRvdGFsICs9IGZpbGUudXBsb2FkLmNodW5rc1tpXS50b3RhbDtcbiAgICAgICAgICAgICAgICBmaWxlLnVwbG9hZC5ieXRlc1NlbnQgKz0gZmlsZS51cGxvYWQuY2h1bmtzW2ldLmJ5dGVzU2VudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFNpbmNlIHRoZSBwcm9jZXNzIGlzIGEgcGVyY2VudGFnZSwgd2UgbmVlZCB0byBkaXZpZGUgYnkgdGhlIGFtb3VudCBvZlxuICAgICAgICAgICAgLy8gY2h1bmtzIHdlJ3ZlIHVzZWQuXG4gICAgICAgICAgICBmaWxlLnVwbG9hZC5wcm9ncmVzcyA9IGZpbGUudXBsb2FkLnByb2dyZXNzIC8gZmlsZS51cGxvYWQudG90YWxDaHVua0NvdW50O1xuICAgICAgICAgICAgdGhpcy5lbWl0KFwidXBsb2FkcHJvZ3Jlc3NcIiwgZmlsZSwgZmlsZS51cGxvYWQucHJvZ3Jlc3MsIGZpbGUudXBsb2FkLmJ5dGVzU2VudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX2ZpbmlzaGVkVXBsb2FkaW5nKGZpbGVzLCB4aHIsIGUpIHtcbiAgICAgICAgbGV0IHJlc3BvbnNlO1xuICAgICAgICBpZiAoZmlsZXNbMF0uc3RhdHVzID09PSAkM2VkMjY5ZjJmMGZiMjI0YiRleHBvcnQkMmUyYmNkODczOWFlMDM5LkNBTkNFTEVEKSByZXR1cm47XG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSAhPT0gNCkgcmV0dXJuO1xuICAgICAgICBpZiAoeGhyLnJlc3BvbnNlVHlwZSAhPT0gXCJhcnJheWJ1ZmZlclwiICYmIHhoci5yZXNwb25zZVR5cGUgIT09IFwiYmxvYlwiKSB7XG4gICAgICAgICAgICByZXNwb25zZSA9IHhoci5yZXNwb25zZVRleHQ7XG4gICAgICAgICAgICBpZiAoeGhyLmdldFJlc3BvbnNlSGVhZGVyKFwiY29udGVudC10eXBlXCIpICYmIH54aHIuZ2V0UmVzcG9uc2VIZWFkZXIoXCJjb250ZW50LXR5cGVcIikuaW5kZXhPZihcImFwcGxpY2F0aW9uL2pzb25cIikpIHRyeSB7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgZSA9IGVycm9yO1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gXCJJbnZhbGlkIEpTT04gcmVzcG9uc2UgZnJvbSBzZXJ2ZXIuXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdXBkYXRlRmlsZXNVcGxvYWRQcm9ncmVzcyhmaWxlcywgeGhyKTtcbiAgICAgICAgaWYgKCEoMjAwIDw9IHhoci5zdGF0dXMgJiYgeGhyLnN0YXR1cyA8IDMwMCkpIHRoaXMuX2hhbmRsZVVwbG9hZEVycm9yKGZpbGVzLCB4aHIsIHJlc3BvbnNlKTtcbiAgICAgICAgZWxzZSBpZiAoZmlsZXNbMF0udXBsb2FkLmNodW5rZWQpIGZpbGVzWzBdLnVwbG9hZC5maW5pc2hlZENodW5rVXBsb2FkKHRoaXMuX2dldENodW5rKGZpbGVzWzBdLCB4aHIpLCByZXNwb25zZSk7XG4gICAgICAgIGVsc2UgdGhpcy5fZmluaXNoZWQoZmlsZXMsIHJlc3BvbnNlLCBlKTtcbiAgICB9XG4gICAgX2hhbmRsZVVwbG9hZEVycm9yKGZpbGVzLCB4aHIsIHJlc3BvbnNlKSB7XG4gICAgICAgIGlmIChmaWxlc1swXS5zdGF0dXMgPT09ICQzZWQyNjlmMmYwZmIyMjRiJGV4cG9ydCQyZTJiY2Q4NzM5YWUwMzkuQ0FOQ0VMRUQpIHJldHVybjtcbiAgICAgICAgaWYgKGZpbGVzWzBdLnVwbG9hZC5jaHVua2VkICYmIHRoaXMub3B0aW9ucy5yZXRyeUNodW5rcykge1xuICAgICAgICAgICAgbGV0IGNodW5rID0gdGhpcy5fZ2V0Q2h1bmsoZmlsZXNbMF0sIHhocik7XG4gICAgICAgICAgICBpZiAoKGNodW5rLnJldHJpZXMrKykgPCB0aGlzLm9wdGlvbnMucmV0cnlDaHVua3NMaW1pdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwbG9hZERhdGEoZmlsZXMsIFtcbiAgICAgICAgICAgICAgICAgICAgY2h1bmsuZGF0YUJsb2NrXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIGNvbnNvbGUud2FybihcIlJldHJpZWQgdGhpcyBjaHVuayB0b28gb2Z0ZW4uIEdpdmluZyB1cC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZXJyb3JQcm9jZXNzaW5nKGZpbGVzLCByZXNwb25zZSB8fCB0aGlzLm9wdGlvbnMuZGljdFJlc3BvbnNlRXJyb3IucmVwbGFjZShcInt7c3RhdHVzQ29kZX19XCIsIHhoci5zdGF0dXMpLCB4aHIpO1xuICAgIH1cbiAgICBzdWJtaXRSZXF1ZXN0KHhociwgZm9ybURhdGEsIGZpbGVzKSB7XG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSAhPSAxKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJDYW5ub3Qgc2VuZCB0aGlzIHJlcXVlc3QgYmVjYXVzZSB0aGUgWE1MSHR0cFJlcXVlc3QucmVhZHlTdGF0ZSBpcyBub3QgT1BFTkVELlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmJpbmFyeUJvZHkpIHtcbiAgICAgICAgICAgIGlmIChmaWxlc1swXS51cGxvYWQuY2h1bmtlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNodW5rID0gdGhpcy5fZ2V0Q2h1bmsoZmlsZXNbMF0sIHhocik7XG4gICAgICAgICAgICAgICAgeGhyLnNlbmQoY2h1bmsuZGF0YUJsb2NrLmRhdGEpO1xuICAgICAgICAgICAgfSBlbHNlIHhoci5zZW5kKGZpbGVzWzBdKTtcbiAgICAgICAgfSBlbHNlIHhoci5zZW5kKGZvcm1EYXRhKTtcbiAgICB9XG4gICAgLy8gQ2FsbGVkIGludGVybmFsbHkgd2hlbiBwcm9jZXNzaW5nIGlzIGZpbmlzaGVkLlxuICAgIC8vIEluZGl2aWR1YWwgY2FsbGJhY2tzIGhhdmUgdG8gYmUgY2FsbGVkIGluIHRoZSBhcHByb3ByaWF0ZSBzZWN0aW9ucy5cbiAgICBfZmluaXNoZWQoZmlsZXMsIHJlc3BvbnNlVGV4dCwgZSkge1xuICAgICAgICBmb3IgKGxldCBmaWxlIG9mIGZpbGVzKXtcbiAgICAgICAgICAgIGZpbGUuc3RhdHVzID0gJDNlZDI2OWYyZjBmYjIyNGIkZXhwb3J0JDJlMmJjZDg3MzlhZTAzOS5TVUNDRVNTO1xuICAgICAgICAgICAgdGhpcy5lbWl0KFwic3VjY2Vzc1wiLCBmaWxlLCByZXNwb25zZVRleHQsIGUpO1xuICAgICAgICAgICAgdGhpcy5lbWl0KFwiY29tcGxldGVcIiwgZmlsZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy51cGxvYWRNdWx0aXBsZSkge1xuICAgICAgICAgICAgdGhpcy5lbWl0KFwic3VjY2Vzc211bHRpcGxlXCIsIGZpbGVzLCByZXNwb25zZVRleHQsIGUpO1xuICAgICAgICAgICAgdGhpcy5lbWl0KFwiY29tcGxldGVtdWx0aXBsZVwiLCBmaWxlcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hdXRvUHJvY2Vzc1F1ZXVlKSByZXR1cm4gdGhpcy5wcm9jZXNzUXVldWUoKTtcbiAgICB9XG4gICAgLy8gQ2FsbGVkIGludGVybmFsbHkgd2hlbiBwcm9jZXNzaW5nIGlzIGZpbmlzaGVkLlxuICAgIC8vIEluZGl2aWR1YWwgY2FsbGJhY2tzIGhhdmUgdG8gYmUgY2FsbGVkIGluIHRoZSBhcHByb3ByaWF0ZSBzZWN0aW9ucy5cbiAgICBfZXJyb3JQcm9jZXNzaW5nKGZpbGVzLCBtZXNzYWdlLCB4aHIpIHtcbiAgICAgICAgZm9yIChsZXQgZmlsZSBvZiBmaWxlcyl7XG4gICAgICAgICAgICBmaWxlLnN0YXR1cyA9ICQzZWQyNjlmMmYwZmIyMjRiJGV4cG9ydCQyZTJiY2Q4NzM5YWUwMzkuRVJST1I7XG4gICAgICAgICAgICB0aGlzLmVtaXQoXCJlcnJvclwiLCBmaWxlLCBtZXNzYWdlLCB4aHIpO1xuICAgICAgICAgICAgdGhpcy5lbWl0KFwiY29tcGxldGVcIiwgZmlsZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy51cGxvYWRNdWx0aXBsZSkge1xuICAgICAgICAgICAgdGhpcy5lbWl0KFwiZXJyb3JtdWx0aXBsZVwiLCBmaWxlcywgbWVzc2FnZSwgeGhyKTtcbiAgICAgICAgICAgIHRoaXMuZW1pdChcImNvbXBsZXRlbXVsdGlwbGVcIiwgZmlsZXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYXV0b1Byb2Nlc3NRdWV1ZSkgcmV0dXJuIHRoaXMucHJvY2Vzc1F1ZXVlKCk7XG4gICAgfVxuICAgIHN0YXRpYyB1dWlkdjQoKSB7XG4gICAgICAgIHJldHVybiBcInh4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eFwiLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24oYykge1xuICAgICAgICAgICAgbGV0IHIgPSBNYXRoLnJhbmRvbSgpICogMTYgfCAwLCB2ID0gYyA9PT0gXCJ4XCIgPyByIDogciAmIDMgfCA4O1xuICAgICAgICAgICAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpe1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBsZXQgZmFsbGJhY2ssIGxlZnQ7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsO1xuICAgICAgICB0aGlzLmNsaWNrYWJsZUVsZW1lbnRzID0gW107XG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgICAgIHRoaXMuZmlsZXMgPSBbXTsgLy8gQWxsIGZpbGVzXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5lbGVtZW50ID09PSBcInN0cmluZ1wiKSB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuZWxlbWVudCk7XG4gICAgICAgIC8vIE5vdCBjaGVja2luZyBpZiBpbnN0YW5jZSBvZiBIVE1MRWxlbWVudCBvciBFbGVtZW50IHNpbmNlIElFOSBpcyBleHRyZW1lbHkgd2VpcmQuXG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50IHx8IHRoaXMuZWxlbWVudC5ub2RlVHlwZSA9PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGRyb3B6b25lIGVsZW1lbnQuXCIpO1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50LmRyb3B6b25lKSB0aHJvdyBuZXcgRXJyb3IoXCJEcm9wem9uZSBhbHJlYWR5IGF0dGFjaGVkLlwiKTtcbiAgICAgICAgLy8gTm93IGFkZCB0aGlzIGRyb3B6b25lIHRvIHRoZSBpbnN0YW5jZXMuXG4gICAgICAgICQzZWQyNjlmMmYwZmIyMjRiJGV4cG9ydCQyZTJiY2Q4NzM5YWUwMzkuaW5zdGFuY2VzLnB1c2godGhpcyk7XG4gICAgICAgIC8vIFB1dCB0aGUgZHJvcHpvbmUgaW5zaWRlIHRoZSBlbGVtZW50IGl0c2VsZi5cbiAgICAgICAgdGhpcy5lbGVtZW50LmRyb3B6b25lID0gdGhpcztcbiAgICAgICAgbGV0IGVsZW1lbnRPcHRpb25zID0gKGxlZnQgPSAkM2VkMjY5ZjJmMGZiMjI0YiRleHBvcnQkMmUyYmNkODczOWFlMDM5Lm9wdGlvbnNGb3JFbGVtZW50KHRoaXMuZWxlbWVudCkpICE9IG51bGwgPyBsZWZ0IDoge1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSAkZXdCS3kkanVzdGV4dGVuZCh0cnVlLCB7XG4gICAgICAgIH0sICQ0Y2EzNjcxODI3NzZmODBiJGV4cG9ydCQyZTJiY2Q4NzM5YWUwMzksIGVsZW1lbnRPcHRpb25zLCBvcHRpb25zICE9IG51bGwgPyBvcHRpb25zIDoge1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5vcHRpb25zLnByZXZpZXdUZW1wbGF0ZSA9IHRoaXMub3B0aW9ucy5wcmV2aWV3VGVtcGxhdGUucmVwbGFjZSgvXFxuKi9nLCBcIlwiKTtcbiAgICAgICAgLy8gSWYgdGhlIGJyb3dzZXIgZmFpbGVkLCBqdXN0IGNhbGwgdGhlIGZhbGxiYWNrIGFuZCBsZWF2ZVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmZvcmNlRmFsbGJhY2sgfHwgISQzZWQyNjlmMmYwZmIyMjRiJGV4cG9ydCQyZTJiY2Q4NzM5YWUwMzkuaXNCcm93c2VyU3VwcG9ydGVkKCkpIHJldHVybiB0aGlzLm9wdGlvbnMuZmFsbGJhY2suY2FsbCh0aGlzKTtcbiAgICAgICAgLy8gQG9wdGlvbnMudXJsID0gQGVsZW1lbnQuZ2V0QXR0cmlidXRlIFwiYWN0aW9uXCIgdW5sZXNzIEBvcHRpb25zLnVybD9cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy51cmwgPT0gbnVsbCkgdGhpcy5vcHRpb25zLnVybCA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIik7XG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zLnVybCkgdGhyb3cgbmV3IEVycm9yKFwiTm8gVVJMIHByb3ZpZGVkLlwiKTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hY2NlcHRlZEZpbGVzICYmIHRoaXMub3B0aW9ucy5hY2NlcHRlZE1pbWVUeXBlcykgdGhyb3cgbmV3IEVycm9yKFwiWW91IGNhbid0IHByb3ZpZGUgYm90aCAnYWNjZXB0ZWRGaWxlcycgYW5kICdhY2NlcHRlZE1pbWVUeXBlcycuICdhY2NlcHRlZE1pbWVUeXBlcycgaXMgZGVwcmVjYXRlZC5cIik7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMudXBsb2FkTXVsdGlwbGUgJiYgdGhpcy5vcHRpb25zLmNodW5raW5nKSB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgY2Fubm90IHNldCBib3RoOiB1cGxvYWRNdWx0aXBsZSBhbmQgY2h1bmtpbmcuXCIpO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmJpbmFyeUJvZHkgJiYgdGhpcy5vcHRpb25zLnVwbG9hZE11bHRpcGxlKSB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgY2Fubm90IHNldCBib3RoOiBiaW5hcnlCb2R5IGFuZCB1cGxvYWRNdWx0aXBsZS5cIik7XG4gICAgICAgIC8vIEJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYWNjZXB0ZWRNaW1lVHlwZXMpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5hY2NlcHRlZEZpbGVzID0gdGhpcy5vcHRpb25zLmFjY2VwdGVkTWltZVR5cGVzO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMub3B0aW9ucy5hY2NlcHRlZE1pbWVUeXBlcztcbiAgICAgICAgfVxuICAgICAgICAvLyBCYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJlbmFtZUZpbGVuYW1lICE9IG51bGwpIHRoaXMub3B0aW9ucy5yZW5hbWVGaWxlID0gKGZpbGUpPT50aGlzLm9wdGlvbnMucmVuYW1lRmlsZW5hbWUuY2FsbCh0aGlzLCBmaWxlLm5hbWUsIGZpbGUpXG4gICAgICAgIDtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMubWV0aG9kID09PSBcInN0cmluZ1wiKSB0aGlzLm9wdGlvbnMubWV0aG9kID0gdGhpcy5vcHRpb25zLm1ldGhvZC50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBpZiAoKGZhbGxiYWNrID0gdGhpcy5nZXRFeGlzdGluZ0ZhbGxiYWNrKCkpICYmIGZhbGxiYWNrLnBhcmVudE5vZGUpIC8vIFJlbW92ZSB0aGUgZmFsbGJhY2tcbiAgICAgICAgZmFsbGJhY2sucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChmYWxsYmFjayk7XG4gICAgICAgIC8vIERpc3BsYXkgcHJldmlld3MgaW4gdGhlIHByZXZpZXdzQ29udGFpbmVyIGVsZW1lbnQgb3IgdGhlIERyb3B6b25lIGVsZW1lbnQgdW5sZXNzIGV4cGxpY2l0bHkgc2V0IHRvIGZhbHNlXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucHJldmlld3NDb250YWluZXIgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnByZXZpZXdzQ29udGFpbmVyKSB0aGlzLnByZXZpZXdzQ29udGFpbmVyID0gJDNlZDI2OWYyZjBmYjIyNGIkZXhwb3J0JDJlMmJjZDg3MzlhZTAzOS5nZXRFbGVtZW50KHRoaXMub3B0aW9ucy5wcmV2aWV3c0NvbnRhaW5lciwgXCJwcmV2aWV3c0NvbnRhaW5lclwiKTtcbiAgICAgICAgICAgIGVsc2UgdGhpcy5wcmV2aWV3c0NvbnRhaW5lciA9IHRoaXMuZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmNsaWNrYWJsZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5jbGlja2FibGUgPT09IHRydWUpIHRoaXMuY2xpY2thYmxlRWxlbWVudHMgPSBbXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50XG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgZWxzZSB0aGlzLmNsaWNrYWJsZUVsZW1lbnRzID0gJDNlZDI2OWYyZjBmYjIyNGIkZXhwb3J0JDJlMmJjZDg3MzlhZTAzOS5nZXRFbGVtZW50cyh0aGlzLm9wdGlvbnMuY2xpY2thYmxlLCBcImNsaWNrYWJsZVwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG59XG4kM2VkMjY5ZjJmMGZiMjI0YiRleHBvcnQkMmUyYmNkODczOWFlMDM5LmluaXRDbGFzcygpO1xuLy8gVGhpcyBpcyBhIG1hcCBvZiBvcHRpb25zIGZvciB5b3VyIGRpZmZlcmVudCBkcm9wem9uZXMuIEFkZCBjb25maWd1cmF0aW9uc1xuLy8gdG8gdGhpcyBvYmplY3QgZm9yIHlvdXIgZGlmZmVyZW50IGRyb3B6b25lIGVsZW1lbnMuXG4vL1xuLy8gRXhhbXBsZTpcbi8vXG4vLyAgICAgRHJvcHpvbmUub3B0aW9ucy5teURyb3B6b25lRWxlbWVudElkID0geyBtYXhGaWxlc2l6ZTogMSB9O1xuLy9cbi8vIEFuZCBpbiBodG1sOlxuLy9cbi8vICAgICA8Zm9ybSBhY3Rpb249XCIvdXBsb2FkXCIgaWQ9XCJteS1kcm9wem9uZS1lbGVtZW50LWlkXCIgY2xhc3M9XCJkcm9wem9uZVwiPjwvZm9ybT5cbiQzZWQyNjlmMmYwZmIyMjRiJGV4cG9ydCQyZTJiY2Q4NzM5YWUwMzkub3B0aW9ucyA9IHtcbn07XG4vLyBSZXR1cm5zIHRoZSBvcHRpb25zIGZvciBhbiBlbGVtZW50IG9yIHVuZGVmaW5lZCBpZiBub25lIGF2YWlsYWJsZS5cbiQzZWQyNjlmMmYwZmIyMjRiJGV4cG9ydCQyZTJiY2Q4NzM5YWUwMzkub3B0aW9uc0ZvckVsZW1lbnQgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgLy8gR2V0IHRoZSBgRHJvcHpvbmUub3B0aW9ucy5lbGVtZW50SWRgIGZvciB0aGlzIGVsZW1lbnQgaWYgaXQgZXhpc3RzXG4gICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiaWRcIikpIHJldHVybiAkM2VkMjY5ZjJmMGZiMjI0YiRleHBvcnQkMmUyYmNkODczOWFlMDM5Lm9wdGlvbnNbJDNlZDI2OWYyZjBmYjIyNGIkdmFyJGNhbWVsaXplKGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiaWRcIikpXTtcbiAgICBlbHNlIHJldHVybiB1bmRlZmluZWQ7XG59O1xuLy8gSG9sZHMgYSBsaXN0IG9mIGFsbCBkcm9wem9uZSBpbnN0YW5jZXNcbiQzZWQyNjlmMmYwZmIyMjRiJGV4cG9ydCQyZTJiY2Q4NzM5YWUwMzkuaW5zdGFuY2VzID0gW107XG4vLyBSZXR1cm5zIHRoZSBkcm9wem9uZSBmb3IgZ2l2ZW4gZWxlbWVudCBpZiBhbnlcbiQzZWQyNjlmMmYwZmIyMjRiJGV4cG9ydCQyZTJiY2Q4NzM5YWUwMzkuZm9yRWxlbWVudCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09IFwic3RyaW5nXCIpIGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpO1xuICAgIGlmICgoZWxlbWVudCAhPSBudWxsID8gZWxlbWVudC5kcm9wem9uZSA6IHVuZGVmaW5lZCkgPT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yKFwiTm8gRHJvcHpvbmUgZm91bmQgZm9yIGdpdmVuIGVsZW1lbnQuIFRoaXMgaXMgcHJvYmFibHkgYmVjYXVzZSB5b3UncmUgdHJ5aW5nIHRvIGFjY2VzcyBpdCBiZWZvcmUgRHJvcHpvbmUgaGFkIHRoZSB0aW1lIHRvIGluaXRpYWxpemUuIFVzZSB0aGUgYGluaXRgIG9wdGlvbiB0byBzZXR1cCBhbnkgYWRkaXRpb25hbCBvYnNlcnZlcnMgb24geW91ciBEcm9wem9uZS5cIik7XG4gICAgcmV0dXJuIGVsZW1lbnQuZHJvcHpvbmU7XG59O1xuLy8gTG9va3MgZm9yIGFsbCAuZHJvcHpvbmUgZWxlbWVudHMgYW5kIGNyZWF0ZXMgYSBkcm9wem9uZSBmb3IgdGhlbVxuJDNlZDI2OWYyZjBmYjIyNGIkZXhwb3J0JDJlMmJjZDg3MzlhZTAzOS5kaXNjb3ZlciA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBkcm9wem9uZXM7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwpIGRyb3B6b25lcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZHJvcHpvbmVcIik7XG4gICAgZWxzZSB7XG4gICAgICAgIGRyb3B6b25lcyA9IFtdO1xuICAgICAgICAvLyBJRSA6KFxuICAgICAgICBsZXQgY2hlY2tFbGVtZW50cyA9IChlbGVtZW50cyk9PigoKT0+e1xuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBlbCBvZiBlbGVtZW50cylpZiAoLyhefCApZHJvcHpvbmUoJHwgKS8udGVzdChlbC5jbGFzc05hbWUpKSByZXN1bHQucHVzaChkcm9wem9uZXMucHVzaChlbCkpO1xuICAgICAgICAgICAgICAgIGVsc2UgcmVzdWx0LnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfSkoKVxuICAgICAgICA7XG4gICAgICAgIGNoZWNrRWxlbWVudHMoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJkaXZcIikpO1xuICAgICAgICBjaGVja0VsZW1lbnRzKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZm9ybVwiKSk7XG4gICAgfVxuICAgIHJldHVybiAoKCk9PntcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBkcm9wem9uZSBvZiBkcm9wem9uZXMpLy8gQ3JlYXRlIGEgZHJvcHpvbmUgdW5sZXNzIGF1dG8gZGlzY292ZXIgaGFzIGJlZW4gZGlzYWJsZWQgZm9yIHNwZWNpZmljIGVsZW1lbnRcbiAgICAgICAgaWYgKCQzZWQyNjlmMmYwZmIyMjRiJGV4cG9ydCQyZTJiY2Q4NzM5YWUwMzkub3B0aW9uc0ZvckVsZW1lbnQoZHJvcHpvbmUpICE9PSBmYWxzZSkgcmVzdWx0LnB1c2gobmV3ICQzZWQyNjlmMmYwZmIyMjRiJGV4cG9ydCQyZTJiY2Q4NzM5YWUwMzkoZHJvcHpvbmUpKTtcbiAgICAgICAgZWxzZSByZXN1bHQucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pKCk7XG59O1xuLy8gU29tZSBicm93c2VycyBzdXBwb3J0IGRyYWcgYW5kIGRyb2cgZnVuY3Rpb25hbGl0eSwgYnV0IG5vdCBjb3JyZWN0bHkuXG4vL1xuLy8gU28gSSBjcmVhdGVkIGEgYmxvY2tsaXN0IG9mIHVzZXJBZ2VudHMuIFllcywgeWVzLiBCcm93c2VyIHNuaWZmaW5nLCBJIGtub3cuXG4vLyBCdXQgd2hhdCB0byBkbyB3aGVuIGJyb3dzZXJzICp0aGVvcmV0aWNhbGx5KiBzdXBwb3J0IGFuIEFQSSwgYnV0IGNyYXNoXG4vLyB3aGVuIHVzaW5nIGl0LlxuLy9cbi8vIFRoaXMgaXMgYSBsaXN0IG9mIHJlZ3VsYXIgZXhwcmVzc2lvbnMgdGVzdGVkIGFnYWluc3QgbmF2aWdhdG9yLnVzZXJBZ2VudFxuLy9cbi8vICoqIEl0IHNob3VsZCBvbmx5IGJlIHVzZWQgb24gYnJvd3NlciB0aGF0ICpkbyogc3VwcG9ydCB0aGUgQVBJLCBidXRcbi8vIGluY29ycmVjdGx5ICoqXG4kM2VkMjY5ZjJmMGZiMjI0YiRleHBvcnQkMmUyYmNkODczOWFlMDM5LmJsb2NrZWRCcm93c2VycyA9IFtcbiAgICAvLyBUaGUgbWFjIG9zIGFuZCB3aW5kb3dzIHBob25lIHZlcnNpb24gb2Ygb3BlcmEgMTIgc2VlbXMgdG8gaGF2ZSBhIHByb2JsZW0gd2l0aCB0aGUgRmlsZSBkcmFnJ24nZHJvcCBBUEkuXG4gICAgL29wZXJhLiooTWFjaW50b3NofFdpbmRvd3MgUGhvbmUpLip2ZXJzaW9uXFwvMTIvaSwgXG5dO1xuLy8gQ2hlY2tzIGlmIHRoZSBicm93c2VyIGlzIHN1cHBvcnRlZFxuJDNlZDI2OWYyZjBmYjIyNGIkZXhwb3J0JDJlMmJjZDg3MzlhZTAzOS5pc0Jyb3dzZXJTdXBwb3J0ZWQgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgY2FwYWJsZUJyb3dzZXIgPSB0cnVlO1xuICAgIGlmICh3aW5kb3cuRmlsZSAmJiB3aW5kb3cuRmlsZVJlYWRlciAmJiB3aW5kb3cuRmlsZUxpc3QgJiYgd2luZG93LkJsb2IgJiYgd2luZG93LkZvcm1EYXRhICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IpIHtcbiAgICAgICAgaWYgKCEoXCJjbGFzc0xpc3RcIiBpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKSkpIGNhcGFibGVCcm93c2VyID0gZmFsc2U7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKCQzZWQyNjlmMmYwZmIyMjRiJGV4cG9ydCQyZTJiY2Q4NzM5YWUwMzkuYmxhY2tsaXN0ZWRCcm93c2VycyAhPT0gdW5kZWZpbmVkKSAvLyBTaW5jZSB0aGlzIGhhcyBiZWVuIHJlbmFtZWQsIHRoaXMgbWFrZXMgc3VyZSB3ZSBkb24ndCBicmVhayBvbGRlclxuICAgICAgICAgICAgLy8gY29uZmlndXJhdGlvbi5cbiAgICAgICAgICAgICQzZWQyNjlmMmYwZmIyMjRiJGV4cG9ydCQyZTJiY2Q4NzM5YWUwMzkuYmxvY2tlZEJyb3dzZXJzID0gJDNlZDI2OWYyZjBmYjIyNGIkZXhwb3J0JDJlMmJjZDg3MzlhZTAzOS5ibGFja2xpc3RlZEJyb3dzZXJzO1xuICAgICAgICAgICAgLy8gVGhlIGJyb3dzZXIgc3VwcG9ydHMgdGhlIEFQSSwgYnV0IG1heSBiZSBibG9ja2VkLlxuICAgICAgICAgICAgZm9yIChsZXQgcmVnZXggb2YgJDNlZDI2OWYyZjBmYjIyNGIkZXhwb3J0JDJlMmJjZDg3MzlhZTAzOS5ibG9ja2VkQnJvd3NlcnMpaWYgKHJlZ2V4LnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgICAgICBjYXBhYmxlQnJvd3NlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIGNhcGFibGVCcm93c2VyID0gZmFsc2U7XG4gICAgcmV0dXJuIGNhcGFibGVCcm93c2VyO1xufTtcbiQzZWQyNjlmMmYwZmIyMjRiJGV4cG9ydCQyZTJiY2Q4NzM5YWUwMzkuZGF0YVVSSXRvQmxvYiA9IGZ1bmN0aW9uKGRhdGFVUkkpIHtcbiAgICAvLyBjb252ZXJ0IGJhc2U2NCB0byByYXcgYmluYXJ5IGRhdGEgaGVsZCBpbiBhIHN0cmluZ1xuICAgIC8vIGRvZXNuJ3QgaGFuZGxlIFVSTEVuY29kZWQgRGF0YVVSSXMgLSBzZWUgU08gYW5zd2VyICM2ODUwMjc2IGZvciBjb2RlIHRoYXQgZG9lcyB0aGlzXG4gICAgbGV0IGJ5dGVTdHJpbmcgPSBhdG9iKGRhdGFVUkkuc3BsaXQoXCIsXCIpWzFdKTtcbiAgICAvLyBzZXBhcmF0ZSBvdXQgdGhlIG1pbWUgY29tcG9uZW50XG4gICAgbGV0IG1pbWVTdHJpbmcgPSBkYXRhVVJJLnNwbGl0KFwiLFwiKVswXS5zcGxpdChcIjpcIilbMV0uc3BsaXQoXCI7XCIpWzBdO1xuICAgIC8vIHdyaXRlIHRoZSBieXRlcyBvZiB0aGUgc3RyaW5nIHRvIGFuIEFycmF5QnVmZmVyXG4gICAgbGV0IGFiID0gbmV3IEFycmF5QnVmZmVyKGJ5dGVTdHJpbmcubGVuZ3RoKTtcbiAgICBsZXQgaWEgPSBuZXcgVWludDhBcnJheShhYik7XG4gICAgZm9yKGxldCBpID0gMCwgZW5kID0gYnl0ZVN0cmluZy5sZW5ndGgsIGFzYyA9IDAgPD0gZW5kOyBhc2MgPyBpIDw9IGVuZCA6IGkgPj0gZW5kOyBhc2MgPyBpKysgOiBpLS0paWFbaV0gPSBieXRlU3RyaW5nLmNoYXJDb2RlQXQoaSk7XG4gICAgLy8gd3JpdGUgdGhlIEFycmF5QnVmZmVyIHRvIGEgYmxvYlxuICAgIHJldHVybiBuZXcgQmxvYihbXG4gICAgICAgIGFiXG4gICAgXSwge1xuICAgICAgICB0eXBlOiBtaW1lU3RyaW5nXG4gICAgfSk7XG59O1xuLy8gUmV0dXJucyBhbiBhcnJheSB3aXRob3V0IHRoZSByZWplY3RlZCBpdGVtXG5jb25zdCAkM2VkMjY5ZjJmMGZiMjI0YiR2YXIkd2l0aG91dCA9IChsaXN0LCByZWplY3RlZEl0ZW0pPT5saXN0LmZpbHRlcigoaXRlbSk9Pml0ZW0gIT09IHJlamVjdGVkSXRlbVxuICAgICkubWFwKChpdGVtKT0+aXRlbVxuICAgIClcbjtcbi8vIGFiYy1kZWZfZ2hpIC0+IGFiY0RlZkdoaVxuY29uc3QgJDNlZDI2OWYyZjBmYjIyNGIkdmFyJGNhbWVsaXplID0gKHN0cik9PnN0ci5yZXBsYWNlKC9bXFwtX10oXFx3KS9nLCAobWF0Y2gpPT5tYXRjaC5jaGFyQXQoMSkudG9VcHBlckNhc2UoKVxuICAgIClcbjtcbi8vIENyZWF0ZXMgYW4gZWxlbWVudCBmcm9tIHN0cmluZ1xuJDNlZDI2OWYyZjBmYjIyNGIkZXhwb3J0JDJlMmJjZDg3MzlhZTAzOS5jcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2LmlubmVySFRNTCA9IHN0cmluZztcbiAgICByZXR1cm4gZGl2LmNoaWxkTm9kZXNbMF07XG59O1xuLy8gVGVzdHMgaWYgZ2l2ZW4gZWxlbWVudCBpcyBpbnNpZGUgKG9yIHNpbXBseSBpcykgdGhlIGNvbnRhaW5lclxuJDNlZDI2OWYyZjBmYjIyNGIkZXhwb3J0JDJlMmJjZDg3MzlhZTAzOS5lbGVtZW50SW5zaWRlID0gZnVuY3Rpb24oZWxlbWVudCwgY29udGFpbmVyKSB7XG4gICAgaWYgKGVsZW1lbnQgPT09IGNvbnRhaW5lcikgcmV0dXJuIHRydWU7XG4gICAgIC8vIENvZmZlZXNjcmlwdCBkb2Vzbid0IHN1cHBvcnQgZG8vd2hpbGUgbG9vcHNcbiAgICB3aGlsZShlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlKXtcbiAgICAgICAgaWYgKGVsZW1lbnQgPT09IGNvbnRhaW5lcikgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG4kM2VkMjY5ZjJmMGZiMjI0YiRleHBvcnQkMmUyYmNkODczOWFlMDM5LmdldEVsZW1lbnQgPSBmdW5jdGlvbihlbCwgbmFtZSkge1xuICAgIGxldCBlbGVtZW50O1xuICAgIGlmICh0eXBlb2YgZWwgPT09IFwic3RyaW5nXCIpIGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKTtcbiAgICBlbHNlIGlmIChlbC5ub2RlVHlwZSAhPSBudWxsKSBlbGVtZW50ID0gZWw7XG4gICAgaWYgKGVsZW1lbnQgPT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIFxcYCR7bmFtZX1cXGAgb3B0aW9uIHByb3ZpZGVkLiBQbGVhc2UgcHJvdmlkZSBhIENTUyBzZWxlY3RvciBvciBhIHBsYWluIEhUTUwgZWxlbWVudC5gKTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn07XG4kM2VkMjY5ZjJmMGZiMjI0YiRleHBvcnQkMmUyYmNkODczOWFlMDM5LmdldEVsZW1lbnRzID0gZnVuY3Rpb24oZWxzLCBuYW1lKSB7XG4gICAgbGV0IGVsLCBlbGVtZW50cztcbiAgICBpZiAoZWxzIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgZWxlbWVudHMgPSBbXTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAoZWwgb2YgZWxzKWVsZW1lbnRzLnB1c2godGhpcy5nZXRFbGVtZW50KGVsLCBuYW1lKSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGVsZW1lbnRzID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGVscyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBlbGVtZW50cyA9IFtdO1xuICAgICAgICBmb3IgKGVsIG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxzKSllbGVtZW50cy5wdXNoKGVsKTtcbiAgICB9IGVsc2UgaWYgKGVscy5ub2RlVHlwZSAhPSBudWxsKSBlbGVtZW50cyA9IFtcbiAgICAgICAgZWxzXG4gICAgXTtcbiAgICBpZiAoZWxlbWVudHMgPT0gbnVsbCB8fCAhZWxlbWVudHMubGVuZ3RoKSB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgXFxgJHtuYW1lfVxcYCBvcHRpb24gcHJvdmlkZWQuIFBsZWFzZSBwcm92aWRlIGEgQ1NTIHNlbGVjdG9yLCBhIHBsYWluIEhUTUwgZWxlbWVudCBvciBhIGxpc3Qgb2YgdGhvc2UuYCk7XG4gICAgcmV0dXJuIGVsZW1lbnRzO1xufTtcbi8vIEFza3MgdGhlIHVzZXIgdGhlIHF1ZXN0aW9uIGFuZCBjYWxscyBhY2NlcHRlZCBvciByZWplY3RlZCBhY2NvcmRpbmdseVxuLy9cbi8vIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIGp1c3QgdXNlcyBgd2luZG93LmNvbmZpcm1gIGFuZCB0aGVuIGNhbGxzIHRoZVxuLy8gYXBwcm9wcmlhdGUgY2FsbGJhY2suXG4kM2VkMjY5ZjJmMGZiMjI0YiRleHBvcnQkMmUyYmNkODczOWFlMDM5LmNvbmZpcm0gPSBmdW5jdGlvbihxdWVzdGlvbiwgYWNjZXB0ZWQsIHJlamVjdGVkKSB7XG4gICAgaWYgKHdpbmRvdy5jb25maXJtKHF1ZXN0aW9uKSkgcmV0dXJuIGFjY2VwdGVkKCk7XG4gICAgZWxzZSBpZiAocmVqZWN0ZWQgIT0gbnVsbCkgcmV0dXJuIHJlamVjdGVkKCk7XG59O1xuLy8gVmFsaWRhdGVzIHRoZSBtaW1lIHR5cGUgbGlrZSB0aGlzOlxuLy9cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvSFRNTC9FbGVtZW50L2lucHV0I2F0dHItYWNjZXB0XG4kM2VkMjY5ZjJmMGZiMjI0YiRleHBvcnQkMmUyYmNkODczOWFlMDM5LmlzVmFsaWRGaWxlID0gZnVuY3Rpb24oZmlsZSwgYWNjZXB0ZWRGaWxlcykge1xuICAgIGlmICghYWNjZXB0ZWRGaWxlcykgcmV0dXJuIHRydWU7XG4gICAgIC8vIElmIHRoZXJlIGFyZSBubyBhY2NlcHRlZCBtaW1lIHR5cGVzLCBpdCdzIE9LXG4gICAgYWNjZXB0ZWRGaWxlcyA9IGFjY2VwdGVkRmlsZXMuc3BsaXQoXCIsXCIpO1xuICAgIGxldCBtaW1lVHlwZSA9IGZpbGUudHlwZTtcbiAgICBsZXQgYmFzZU1pbWVUeXBlID0gbWltZVR5cGUucmVwbGFjZSgvXFwvLiokLywgXCJcIik7XG4gICAgZm9yIChsZXQgdmFsaWRUeXBlIG9mIGFjY2VwdGVkRmlsZXMpe1xuICAgICAgICB2YWxpZFR5cGUgPSB2YWxpZFR5cGUudHJpbSgpO1xuICAgICAgICBpZiAodmFsaWRUeXBlLmNoYXJBdCgwKSA9PT0gXCIuXCIpIHtcbiAgICAgICAgICAgIGlmIChmaWxlLm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHZhbGlkVHlwZS50b0xvd2VyQ2FzZSgpLCBmaWxlLm5hbWUubGVuZ3RoIC0gdmFsaWRUeXBlLmxlbmd0aCkgIT09IC0xKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICgvXFwvXFwqJC8udGVzdCh2YWxpZFR5cGUpKSB7XG4gICAgICAgICAgICAvLyBUaGlzIGlzIHNvbWV0aGluZyBsaWtlIGEgaW1hZ2UvKiBtaW1lIHR5cGVcbiAgICAgICAgICAgIGlmIChiYXNlTWltZVR5cGUgPT09IHZhbGlkVHlwZS5yZXBsYWNlKC9cXC8uKiQvLCBcIlwiKSkgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAobWltZVR5cGUgPT09IHZhbGlkVHlwZSkgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcbi8vIEF1Z21lbnQgalF1ZXJ5XG5pZiAodHlwZW9mIGpRdWVyeSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBqUXVlcnkgIT09IG51bGwpIGpRdWVyeS5mbi5kcm9wem9uZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gbmV3ICQzZWQyNjlmMmYwZmIyMjRiJGV4cG9ydCQyZTJiY2Q4NzM5YWUwMzkodGhpcywgb3B0aW9ucyk7XG4gICAgfSk7XG59O1xuLy8gRHJvcHpvbmUgZmlsZSBzdGF0dXMgY29kZXNcbiQzZWQyNjlmMmYwZmIyMjRiJGV4cG9ydCQyZTJiY2Q4NzM5YWUwMzkuQURERUQgPSBcImFkZGVkXCI7XG4kM2VkMjY5ZjJmMGZiMjI0YiRleHBvcnQkMmUyYmNkODczOWFlMDM5LlFVRVVFRCA9IFwicXVldWVkXCI7XG4vLyBGb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuIE5vdywgaWYgYSBmaWxlIGlzIGFjY2VwdGVkLCBpdCdzIGVpdGhlciBxdWV1ZWRcbi8vIG9yIHVwbG9hZGluZy5cbiQzZWQyNjlmMmYwZmIyMjRiJGV4cG9ydCQyZTJiY2Q4NzM5YWUwMzkuQUNDRVBURUQgPSAkM2VkMjY5ZjJmMGZiMjI0YiRleHBvcnQkMmUyYmNkODczOWFlMDM5LlFVRVVFRDtcbiQzZWQyNjlmMmYwZmIyMjRiJGV4cG9ydCQyZTJiY2Q4NzM5YWUwMzkuVVBMT0FESU5HID0gXCJ1cGxvYWRpbmdcIjtcbiQzZWQyNjlmMmYwZmIyMjRiJGV4cG9ydCQyZTJiY2Q4NzM5YWUwMzkuUFJPQ0VTU0lORyA9ICQzZWQyNjlmMmYwZmIyMjRiJGV4cG9ydCQyZTJiY2Q4NzM5YWUwMzkuVVBMT0FESU5HOyAvLyBhbGlhc1xuJDNlZDI2OWYyZjBmYjIyNGIkZXhwb3J0JDJlMmJjZDg3MzlhZTAzOS5DQU5DRUxFRCA9IFwiY2FuY2VsZWRcIjtcbiQzZWQyNjlmMmYwZmIyMjRiJGV4cG9ydCQyZTJiY2Q4NzM5YWUwMzkuRVJST1IgPSBcImVycm9yXCI7XG4kM2VkMjY5ZjJmMGZiMjI0YiRleHBvcnQkMmUyYmNkODczOWFlMDM5LlNVQ0NFU1MgPSBcInN1Y2Nlc3NcIjtcbi8qXG5cbiBCdWdmaXggZm9yIGlPUyA2IGFuZCA3XG4gU291cmNlOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzExOTI5MDk5L2h0bWw1LWNhbnZhcy1kcmF3aW1hZ2UtcmF0aW8tYnVnLWlvc1xuIGJhc2VkIG9uIHRoZSB3b3JrIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9zdG9taXRhL2lvcy1pbWFnZWZpbGUtbWVnYXBpeGVsXG5cbiAqLyAvLyBEZXRlY3RpbmcgdmVydGljYWwgc3F1YXNoIGluIGxvYWRlZCBpbWFnZS5cbi8vIEZpeGVzIGEgYnVnIHdoaWNoIHNxdWFzaCBpbWFnZSB2ZXJ0aWNhbGx5IHdoaWxlIGRyYXdpbmcgaW50byBjYW52YXMgZm9yIHNvbWUgaW1hZ2VzLlxuLy8gVGhpcyBpcyBhIGJ1ZyBpbiBpT1M2IGRldmljZXMuIFRoaXMgZnVuY3Rpb24gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vc3RvbWl0YS9pb3MtaW1hZ2VmaWxlLW1lZ2FwaXhlbFxubGV0ICQzZWQyNjlmMmYwZmIyMjRiJHZhciRkZXRlY3RWZXJ0aWNhbFNxdWFzaCA9IGZ1bmN0aW9uKGltZykge1xuICAgIGxldCBpdyA9IGltZy5uYXR1cmFsV2lkdGg7XG4gICAgbGV0IGloID0gaW1nLm5hdHVyYWxIZWlnaHQ7XG4gICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgY2FudmFzLndpZHRoID0gMTtcbiAgICBjYW52YXMuaGVpZ2h0ID0gaWg7XG4gICAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY3R4LmRyYXdJbWFnZShpbWcsIDAsIDApO1xuICAgIGxldCB7IGRhdGE6IGRhdGEgIH0gPSBjdHguZ2V0SW1hZ2VEYXRhKDEsIDAsIDEsIGloKTtcbiAgICAvLyBzZWFyY2ggaW1hZ2UgZWRnZSBwaXhlbCBwb3NpdGlvbiBpbiBjYXNlIGl0IGlzIHNxdWFzaGVkIHZlcnRpY2FsbHkuXG4gICAgbGV0IHN5ID0gMDtcbiAgICBsZXQgZXkgPSBpaDtcbiAgICBsZXQgcHkgPSBpaDtcbiAgICB3aGlsZShweSA+IHN5KXtcbiAgICAgICAgbGV0IGFscGhhID0gZGF0YVsocHkgLSAxKSAqIDQgKyAzXTtcbiAgICAgICAgaWYgKGFscGhhID09PSAwKSBleSA9IHB5O1xuICAgICAgICBlbHNlIHN5ID0gcHk7XG4gICAgICAgIHB5ID0gZXkgKyBzeSA+PiAxO1xuICAgIH1cbiAgICBsZXQgcmF0aW8gPSBweSAvIGloO1xuICAgIGlmIChyYXRpbyA9PT0gMCkgcmV0dXJuIDE7XG4gICAgZWxzZSByZXR1cm4gcmF0aW87XG59O1xuLy8gQSByZXBsYWNlbWVudCBmb3IgY29udGV4dC5kcmF3SW1hZ2Vcbi8vIChhcmdzIGFyZSBmb3Igc291cmNlIGFuZCBkZXN0aW5hdGlvbikuXG52YXIgJDNlZDI2OWYyZjBmYjIyNGIkdmFyJGRyYXdJbWFnZUlPU0ZpeCA9IGZ1bmN0aW9uKGN0eCwgaW1nLCBzeCwgc3ksIHN3LCBzaCwgZHgsIGR5LCBkdywgZGgpIHtcbiAgICBsZXQgdmVydFNxdWFzaFJhdGlvID0gJDNlZDI2OWYyZjBmYjIyNGIkdmFyJGRldGVjdFZlcnRpY2FsU3F1YXNoKGltZyk7XG4gICAgcmV0dXJuIGN0eC5kcmF3SW1hZ2UoaW1nLCBzeCwgc3ksIHN3LCBzaCwgZHgsIGR5LCBkdywgZGggLyB2ZXJ0U3F1YXNoUmF0aW8pO1xufTtcbi8vIEJhc2VkIG9uIE1pbmlmeUpwZWdcbi8vIFNvdXJjZTogaHR0cDovL3d3dy5wZXJyeS5jei9maWxlcy9FeGlmUmVzdG9yZXIuanNcbi8vIGh0dHA6Ly9lbGljb24uYmxvZzU3LmZjMi5jb20vYmxvZy1lbnRyeS0yMDYuaHRtbFxuY2xhc3MgJDNlZDI2OWYyZjBmYjIyNGIkdmFyJEV4aWZSZXN0b3JlIHtcbiAgICBzdGF0aWMgaW5pdENsYXNzKCkge1xuICAgICAgICB0aGlzLktFWV9TVFIgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89XCI7XG4gICAgfVxuICAgIHN0YXRpYyBlbmNvZGU2NChpbnB1dCkge1xuICAgICAgICBsZXQgb3V0cHV0ID0gXCJcIjtcbiAgICAgICAgbGV0IGNocjEgPSB1bmRlZmluZWQ7XG4gICAgICAgIGxldCBjaHIyID0gdW5kZWZpbmVkO1xuICAgICAgICBsZXQgY2hyMyA9IFwiXCI7XG4gICAgICAgIGxldCBlbmMxID0gdW5kZWZpbmVkO1xuICAgICAgICBsZXQgZW5jMiA9IHVuZGVmaW5lZDtcbiAgICAgICAgbGV0IGVuYzMgPSB1bmRlZmluZWQ7XG4gICAgICAgIGxldCBlbmM0ID0gXCJcIjtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICB3aGlsZSh0cnVlKXtcbiAgICAgICAgICAgIGNocjEgPSBpbnB1dFtpKytdO1xuICAgICAgICAgICAgY2hyMiA9IGlucHV0W2krK107XG4gICAgICAgICAgICBjaHIzID0gaW5wdXRbaSsrXTtcbiAgICAgICAgICAgIGVuYzEgPSBjaHIxID4+IDI7XG4gICAgICAgICAgICBlbmMyID0gKGNocjEgJiAzKSA8PCA0IHwgY2hyMiA+PiA0O1xuICAgICAgICAgICAgZW5jMyA9IChjaHIyICYgMTUpIDw8IDIgfCBjaHIzID4+IDY7XG4gICAgICAgICAgICBlbmM0ID0gY2hyMyAmIDYzO1xuICAgICAgICAgICAgaWYgKGlzTmFOKGNocjIpKSBlbmMzID0gZW5jNCA9IDY0O1xuICAgICAgICAgICAgZWxzZSBpZiAoaXNOYU4oY2hyMykpIGVuYzQgPSA2NDtcbiAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dCArIHRoaXMuS0VZX1NUUi5jaGFyQXQoZW5jMSkgKyB0aGlzLktFWV9TVFIuY2hhckF0KGVuYzIpICsgdGhpcy5LRVlfU1RSLmNoYXJBdChlbmMzKSArIHRoaXMuS0VZX1NUUi5jaGFyQXQoZW5jNCk7XG4gICAgICAgICAgICBjaHIxID0gY2hyMiA9IGNocjMgPSBcIlwiO1xuICAgICAgICAgICAgZW5jMSA9IGVuYzIgPSBlbmMzID0gZW5jNCA9IFwiXCI7XG4gICAgICAgICAgICBpZiAoIShpIDwgaW5wdXQubGVuZ3RoKSkgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9XG4gICAgc3RhdGljIHJlc3RvcmUob3JpZ0ZpbGVCYXNlNjQsIHJlc2l6ZWRGaWxlQmFzZTY0KSB7XG4gICAgICAgIGlmICghb3JpZ0ZpbGVCYXNlNjQubWF0Y2goXCJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LFwiKSkgcmV0dXJuIHJlc2l6ZWRGaWxlQmFzZTY0O1xuICAgICAgICBsZXQgcmF3SW1hZ2UgPSB0aGlzLmRlY29kZTY0KG9yaWdGaWxlQmFzZTY0LnJlcGxhY2UoXCJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LFwiLCBcIlwiKSk7XG4gICAgICAgIGxldCBzZWdtZW50cyA9IHRoaXMuc2xpY2UyU2VnbWVudHMocmF3SW1hZ2UpO1xuICAgICAgICBsZXQgaW1hZ2UgPSB0aGlzLmV4aWZNYW5pcHVsYXRpb24ocmVzaXplZEZpbGVCYXNlNjQsIHNlZ21lbnRzKTtcbiAgICAgICAgcmV0dXJuIGBkYXRhOmltYWdlL2pwZWc7YmFzZTY0LCR7dGhpcy5lbmNvZGU2NChpbWFnZSl9YDtcbiAgICB9XG4gICAgc3RhdGljIGV4aWZNYW5pcHVsYXRpb24ocmVzaXplZEZpbGVCYXNlNjQsIHNlZ21lbnRzKSB7XG4gICAgICAgIGxldCBleGlmQXJyYXkgPSB0aGlzLmdldEV4aWZBcnJheShzZWdtZW50cyk7XG4gICAgICAgIGxldCBuZXdJbWFnZUFycmF5ID0gdGhpcy5pbnNlcnRFeGlmKHJlc2l6ZWRGaWxlQmFzZTY0LCBleGlmQXJyYXkpO1xuICAgICAgICBsZXQgYUJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KG5ld0ltYWdlQXJyYXkpO1xuICAgICAgICByZXR1cm4gYUJ1ZmZlcjtcbiAgICB9XG4gICAgc3RhdGljIGdldEV4aWZBcnJheShzZWdtZW50cykge1xuICAgICAgICBsZXQgc2VnID0gdW5kZWZpbmVkO1xuICAgICAgICBsZXQgeCA9IDA7XG4gICAgICAgIHdoaWxlKHggPCBzZWdtZW50cy5sZW5ndGgpe1xuICAgICAgICAgICAgc2VnID0gc2VnbWVudHNbeF07XG4gICAgICAgICAgICBpZiAoc2VnWzBdID09PSAyNTUgJiBzZWdbMV0gPT09IDIyNSkgcmV0dXJuIHNlZztcbiAgICAgICAgICAgIHgrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIHN0YXRpYyBpbnNlcnRFeGlmKHJlc2l6ZWRGaWxlQmFzZTY0LCBleGlmQXJyYXkpIHtcbiAgICAgICAgbGV0IGltYWdlRGF0YSA9IHJlc2l6ZWRGaWxlQmFzZTY0LnJlcGxhY2UoXCJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LFwiLCBcIlwiKTtcbiAgICAgICAgbGV0IGJ1ZiA9IHRoaXMuZGVjb2RlNjQoaW1hZ2VEYXRhKTtcbiAgICAgICAgbGV0IHNlcGFyYXRlUG9pbnQgPSBidWYuaW5kZXhPZigyNTUsIDMpO1xuICAgICAgICBsZXQgbWFlID0gYnVmLnNsaWNlKDAsIHNlcGFyYXRlUG9pbnQpO1xuICAgICAgICBsZXQgYXRvID0gYnVmLnNsaWNlKHNlcGFyYXRlUG9pbnQpO1xuICAgICAgICBsZXQgYXJyYXkgPSBtYWU7XG4gICAgICAgIGFycmF5ID0gYXJyYXkuY29uY2F0KGV4aWZBcnJheSk7XG4gICAgICAgIGFycmF5ID0gYXJyYXkuY29uY2F0KGF0byk7XG4gICAgICAgIHJldHVybiBhcnJheTtcbiAgICB9XG4gICAgc3RhdGljIHNsaWNlMlNlZ21lbnRzKHJhd0ltYWdlQXJyYXkpIHtcbiAgICAgICAgbGV0IGhlYWQgPSAwO1xuICAgICAgICBsZXQgc2VnbWVudHMgPSBbXTtcbiAgICAgICAgd2hpbGUodHJ1ZSl7XG4gICAgICAgICAgICB2YXIgbGVuZ3RoO1xuICAgICAgICAgICAgaWYgKHJhd0ltYWdlQXJyYXlbaGVhZF0gPT09IDI1NSAmIHJhd0ltYWdlQXJyYXlbaGVhZCArIDFdID09PSAyMTgpIGJyZWFrO1xuICAgICAgICAgICAgaWYgKHJhd0ltYWdlQXJyYXlbaGVhZF0gPT09IDI1NSAmIHJhd0ltYWdlQXJyYXlbaGVhZCArIDFdID09PSAyMTYpIGhlYWQgKz0gMjtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxlbmd0aCA9IHJhd0ltYWdlQXJyYXlbaGVhZCArIDJdICogMjU2ICsgcmF3SW1hZ2VBcnJheVtoZWFkICsgM107XG4gICAgICAgICAgICAgICAgbGV0IGVuZFBvaW50ID0gaGVhZCArIGxlbmd0aCArIDI7XG4gICAgICAgICAgICAgICAgbGV0IHNlZyA9IHJhd0ltYWdlQXJyYXkuc2xpY2UoaGVhZCwgZW5kUG9pbnQpO1xuICAgICAgICAgICAgICAgIHNlZ21lbnRzLnB1c2goc2VnKTtcbiAgICAgICAgICAgICAgICBoZWFkID0gZW5kUG9pbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaGVhZCA+IHJhd0ltYWdlQXJyYXkubGVuZ3RoKSBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VnbWVudHM7XG4gICAgfVxuICAgIHN0YXRpYyBkZWNvZGU2NChpbnB1dCkge1xuICAgICAgICBsZXQgb3V0cHV0ID0gXCJcIjtcbiAgICAgICAgbGV0IGNocjEgPSB1bmRlZmluZWQ7XG4gICAgICAgIGxldCBjaHIyID0gdW5kZWZpbmVkO1xuICAgICAgICBsZXQgY2hyMyA9IFwiXCI7XG4gICAgICAgIGxldCBlbmMxID0gdW5kZWZpbmVkO1xuICAgICAgICBsZXQgZW5jMiA9IHVuZGVmaW5lZDtcbiAgICAgICAgbGV0IGVuYzMgPSB1bmRlZmluZWQ7XG4gICAgICAgIGxldCBlbmM0ID0gXCJcIjtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBsZXQgYnVmID0gW107XG4gICAgICAgIC8vIHJlbW92ZSBhbGwgY2hhcmFjdGVycyB0aGF0IGFyZSBub3QgQS1aLCBhLXosIDAtOSwgKywgLywgb3IgPVxuICAgICAgICBsZXQgYmFzZTY0dGVzdCA9IC9bXkEtWmEtejAtOVxcK1xcL1xcPV0vZztcbiAgICAgICAgaWYgKGJhc2U2NHRlc3QuZXhlYyhpbnB1dCkpIGNvbnNvbGUud2FybihcIlRoZXJlIHdlcmUgaW52YWxpZCBiYXNlNjQgY2hhcmFjdGVycyBpbiB0aGUgaW5wdXQgdGV4dC5cXG5WYWxpZCBiYXNlNjQgY2hhcmFjdGVycyBhcmUgQS1aLCBhLXosIDAtOSwgJysnLCAnLycsYW5kICc9J1xcbkV4cGVjdCBlcnJvcnMgaW4gZGVjb2RpbmcuXCIpO1xuICAgICAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoL1teQS1aYS16MC05XFwrXFwvXFw9XS9nLCBcIlwiKTtcbiAgICAgICAgd2hpbGUodHJ1ZSl7XG4gICAgICAgICAgICBlbmMxID0gdGhpcy5LRVlfU1RSLmluZGV4T2YoaW5wdXQuY2hhckF0KGkrKykpO1xuICAgICAgICAgICAgZW5jMiA9IHRoaXMuS0VZX1NUUi5pbmRleE9mKGlucHV0LmNoYXJBdChpKyspKTtcbiAgICAgICAgICAgIGVuYzMgPSB0aGlzLktFWV9TVFIuaW5kZXhPZihpbnB1dC5jaGFyQXQoaSsrKSk7XG4gICAgICAgICAgICBlbmM0ID0gdGhpcy5LRVlfU1RSLmluZGV4T2YoaW5wdXQuY2hhckF0KGkrKykpO1xuICAgICAgICAgICAgY2hyMSA9IGVuYzEgPDwgMiB8IGVuYzIgPj4gNDtcbiAgICAgICAgICAgIGNocjIgPSAoZW5jMiAmIDE1KSA8PCA0IHwgZW5jMyA+PiAyO1xuICAgICAgICAgICAgY2hyMyA9IChlbmMzICYgMykgPDwgNiB8IGVuYzQ7XG4gICAgICAgICAgICBidWYucHVzaChjaHIxKTtcbiAgICAgICAgICAgIGlmIChlbmMzICE9PSA2NCkgYnVmLnB1c2goY2hyMik7XG4gICAgICAgICAgICBpZiAoZW5jNCAhPT0gNjQpIGJ1Zi5wdXNoKGNocjMpO1xuICAgICAgICAgICAgY2hyMSA9IGNocjIgPSBjaHIzID0gXCJcIjtcbiAgICAgICAgICAgIGVuYzEgPSBlbmMyID0gZW5jMyA9IGVuYzQgPSBcIlwiO1xuICAgICAgICAgICAgaWYgKCEoaSA8IGlucHV0Lmxlbmd0aCkpIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBidWY7XG4gICAgfVxufVxuJDNlZDI2OWYyZjBmYjIyNGIkdmFyJEV4aWZSZXN0b3JlLmluaXRDbGFzcygpO1xuLypcbiAqIGNvbnRlbnRsb2FkZWQuanNcbiAqXG4gKiBBdXRob3I6IERpZWdvIFBlcmluaSAoZGllZ28ucGVyaW5pIGF0IGdtYWlsLmNvbSlcbiAqIFN1bW1hcnk6IGNyb3NzLWJyb3dzZXIgd3JhcHBlciBmb3IgRE9NQ29udGVudExvYWRlZFxuICogVXBkYXRlZDogMjAxMDEwMjBcbiAqIExpY2Vuc2U6IE1JVFxuICogVmVyc2lvbjogMS4yXG4gKlxuICogVVJMOlxuICogaHR0cDovL2phdmFzY3JpcHQubndib3guY29tL0NvbnRlbnRMb2FkZWQvXG4gKiBodHRwOi8vamF2YXNjcmlwdC5ud2JveC5jb20vQ29udGVudExvYWRlZC9NSVQtTElDRU5TRVxuICovIC8vIEB3aW4gd2luZG93IHJlZmVyZW5jZVxuLy8gQGZuIGZ1bmN0aW9uIHJlZmVyZW5jZVxubGV0ICQzZWQyNjlmMmYwZmIyMjRiJHZhciRjb250ZW50TG9hZGVkID0gZnVuY3Rpb24od2luLCBmbikge1xuICAgIGxldCBkb25lID0gZmFsc2U7XG4gICAgbGV0IHRvcCA9IHRydWU7XG4gICAgbGV0IGRvYyA9IHdpbi5kb2N1bWVudDtcbiAgICBsZXQgcm9vdCA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgbGV0IGFkZCA9IGRvYy5hZGRFdmVudExpc3RlbmVyID8gXCJhZGRFdmVudExpc3RlbmVyXCIgOiBcImF0dGFjaEV2ZW50XCI7XG4gICAgbGV0IHJlbSA9IGRvYy5hZGRFdmVudExpc3RlbmVyID8gXCJyZW1vdmVFdmVudExpc3RlbmVyXCIgOiBcImRldGFjaEV2ZW50XCI7XG4gICAgbGV0IHByZSA9IGRvYy5hZGRFdmVudExpc3RlbmVyID8gXCJcIiA6IFwib25cIjtcbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKGUudHlwZSA9PT0gXCJyZWFkeXN0YXRlY2hhbmdlXCIgJiYgZG9jLnJlYWR5U3RhdGUgIT09IFwiY29tcGxldGVcIikgcmV0dXJuO1xuICAgICAgICAoZS50eXBlID09PSBcImxvYWRcIiA/IHdpbiA6IGRvYylbcmVtXShwcmUgKyBlLnR5cGUsIGluaXQsIGZhbHNlKTtcbiAgICAgICAgaWYgKCFkb25lICYmIChkb25lID0gdHJ1ZSkpIHJldHVybiBmbi5jYWxsKHdpbiwgZS50eXBlIHx8IGUpO1xuICAgIH07XG4gICAgdmFyIHBvbGwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJvb3QuZG9TY3JvbGwoXCJsZWZ0XCIpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHBvbGwsIDUwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5pdChcInBvbGxcIik7XG4gICAgfTtcbiAgICBpZiAoZG9jLnJlYWR5U3RhdGUgIT09IFwiY29tcGxldGVcIikge1xuICAgICAgICBpZiAoZG9jLmNyZWF0ZUV2ZW50T2JqZWN0ICYmIHJvb3QuZG9TY3JvbGwpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdG9wID0gIXdpbi5mcmFtZUVsZW1lbnQ7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRvcCkgcG9sbCgpO1xuICAgICAgICB9XG4gICAgICAgIGRvY1thZGRdKHByZSArIFwiRE9NQ29udGVudExvYWRlZFwiLCBpbml0LCBmYWxzZSk7XG4gICAgICAgIGRvY1thZGRdKHByZSArIFwicmVhZHlzdGF0ZWNoYW5nZVwiLCBpbml0LCBmYWxzZSk7XG4gICAgICAgIHJldHVybiB3aW5bYWRkXShwcmUgKyBcImxvYWRcIiwgaW5pdCwgZmFsc2UpO1xuICAgIH1cbn07XG5mdW5jdGlvbiAkM2VkMjY5ZjJmMGZiMjI0YiR2YXIkX19ndWFyZF9fKHZhbHVlLCB0cmFuc2Zvcm0pIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSBcInVuZGVmaW5lZFwiICYmIHZhbHVlICE9PSBudWxsID8gdHJhbnNmb3JtKHZhbHVlKSA6IHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uICQzZWQyNjlmMmYwZmIyMjRiJHZhciRfX2d1YXJkTWV0aG9kX18ob2JqLCBtZXRob2ROYW1lLCB0cmFuc2Zvcm0pIHtcbiAgICBpZiAodHlwZW9mIG9iaiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBvYmogIT09IG51bGwgJiYgdHlwZW9mIG9ialttZXRob2ROYW1lXSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJhbnNmb3JtKG9iaiwgbWV0aG9kTmFtZSk7XG4gICAgZWxzZSByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5cbmV4cG9ydCB7JDNlZDI2OWYyZjBmYjIyNGIkZXhwb3J0JDJlMmJjZDg3MzlhZTAzOSBhcyBkZWZhdWx0LCAkM2VkMjY5ZjJmMGZiMjI0YiRleHBvcnQkMmUyYmNkODczOWFlMDM5IGFzIERyb3B6b25lfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRyb3B6b25lLm1qcy5tYXBcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvL1xuLy8gdGhlbWUuanNcbi8vXG5cbi8vIFBsdWdpbnNcbmltcG9ydCAnaXNvdG9wZS1sYXlvdXQnO1xuaW1wb3J0ICdpc290b3BlLXBhY2tlcnknO1xuXG4vLyBUaGVtZVxuaW1wb3J0ICcuL2Ryb3B6b25lJztcbmltcG9ydCAnLi9qb2JzJztcbmltcG9ydCAnLi9qb2JzLWZpbHRlcic7XG4iXSwibmFtZXMiOlsiRHJvcHpvbmUiLCJ3aW5kb3ciLCJvbmxvYWQiLCJmb3JtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0RWxlbWVudEJ5SWQiLCJ1cmwiLCJ2YWx1ZSIsImF1dG9EaXNjb3ZlciIsInRvdGFsU2l6ZUNWIiwidG90YWxTaXplT3RoZXIiLCJyZXNwb25kQXJyIiwicmVzcG9uZEFyck90aGVyIiwiZmxhZyIsImN2RHJvcHpvbmUiLCJwYXJhbU5hbWUiLCJmaWxlc2l6ZUJhc2UiLCJtYXhGaWxlc2l6ZSIsInVwbG9hZE11bHRpcGxlIiwiYWRkUmVtb3ZlTGlua3MiLCJkaWN0VG90YWxVcGxvYWRNZXNzYWdlIiwiYWNjZXB0ZWRGaWxlcyIsImFjY2VwdCIsImZpbGUiLCJkb25lIiwib3B0aW9ucyIsInN0YXR1cyIsIkNBTkNFTEVEIiwiX2Vycm9yUHJvY2Vzc2luZyIsImluaXQiLCJtZXNzYWdlcyIsIm9uIiwic2l6ZSIsInVwbG9hZCIsInByb2dyZXNzIiwiZXJyb3JGbGFnIiwiZmlsZVdpdGhFcnJvciIsImkiLCJsZW5ndGgiLCJ0ZW1wIiwiZm9yRWFjaCIsInYiLCJrIiwiYWxlcnQiLCJyZXNwb25zZSIsIm1lc3NhZ2UiLCJwdXNoIiwicmVtb3ZlRmlsZSIsInN1Y2Nlc3MiLCJqc29uUmVzcG9uc2UiLCJKU09OIiwicGFyc2UiLCJzdHlsZSIsImRpc3BsYXkiLCJpbm5lclRleHQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJmaWxlc2l6ZSIsImJ5dGVzIiwic2VsZWN0ZWRTaXplIiwidW5pdHMiLCJNYXRoIiwiYWJzIiwidSIsInRvRml4ZWQiLCJzZWxlY3RlZFVuaXQiLCJjb25jYXQiLCJvdGhlckRyb3B6b25lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjdkZpbGVzIiwiYWxsVmFsdWVzIiwicHJldmVudERlZmF1bHQiLCJpbmRleCIsInNldEF0dHJpYnV0ZSIsIm90aGVyRmlsZXMiLCJhbGxPdGhlclZhbHVlcyIsIklzb3RvcGUiLCJpc28iLCJpc290b3BGaWx0ZXIiLCJqb2JzRGF0YSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCIkZ3JpZCIsImNvbnRhaW5zIiwiZGVzdHJveSIsIml0ZW1TZWxlY3RvciIsImxheW91dE1vZGUiLCJwZXJjZW50UG9zaXRpb24iLCJwYWNrZXJ5IiwiaW5pdExheW91dCIsInNlbGVjdGVkQ2F0Iiwiam9ic0ZpbHRlciIsIiRjYXRCdG4iLCJnZXRBdHRyaWJ1dGUiLCIkYnRuIiwiYXJyYW5nZSIsImZpbHRlciIsImZpbHRlckJ1dHRvbiIsImZpbHRlckZvcm0iLCJqb2JzIiwiZGF0YSIsIkZvcm1EYXRhIiwiaHR0cCIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJwYXJzZXIiLCJET01QYXJzZXIiLCJkb2MiLCJwYXJzZUZyb21TdHJpbmciLCJyZXNwb25zZVRleHQiLCJpbm5lckhUTUwiLCJzZW5kIiwibWFpbkZvcm0iLCJmb3JtSW5wdXRSZXF1aXJlZCIsImZvcm1CdXR0b24iLCJpbnB1dCIsImNsb3Nlc3QiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImNoZWNrVmFsaWRpdHkiLCJpbnB1dEVtYWlsIiwiaXNFbXB0eSIsInN0ciIsInRyaW0iLCJ2YWxpZFJlZyIsImNoZWNrRW1haWwiLCIkdmFsIiwibWF0Y2giLCIkZW1haWwiLCJpbnB1dFBob25lIiwiaXNFbXB0eVBob25lIiwidmFsaWRSZWdQaG9uZSIsImNoZWNrUGhvbmUiLCIkcGhvbmUiXSwic291cmNlUm9vdCI6IiJ9