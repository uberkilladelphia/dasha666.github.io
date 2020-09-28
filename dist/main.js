/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/styles.scss */ "./src/styles.scss");
/* harmony import */ var _src_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_styles_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_terminal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/terminal.js */ "./src/terminal.js");
/*!
 * AnderShell - Just a small CSS demo
 *
 * Copyright (c) 2011-2018, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

 // Banner text

const banner = `
Initializing AnderShell 3000 v0.1
Copyright (c) 2014 Anders Evenrud <andersevenrud@gmail.com>

.............................................................................

@@@  @@@  @@@  @@@@@@@@  @@@        @@@@@@@   @@@@@@   @@@@@@@@@@   @@@@@@@@
@@@  @@@  @@@  @@@@@@@@  @@@       @@@@@@@@  @@@@@@@@  @@@@@@@@@@@  @@@@@@@@
@@!  @@!  @@!  @@!       @@!       !@@       @@!  @@@  @@! @@! @@!  @@!     
!@!  !@!  !@!  !@!       !@!       !@!       !@!  @!@  !@! !@! !@!  !@!     
@!!  !!@  @!@  @!!!:!    @!!       !@!       @!@  !@!  @!! !!@ @!@  @!!!:!  
!@!  !!!  !@!  !!!!!:    !!!       !!!       !@!  !!!  !@!   ! !@!  !!!!!:  
!!:  !!:  !!:  !!:       !!:       :!!       !!:  !!!  !!:     !!:  !!:     
:!:  :!:  :!:  :!:        :!:      :!:       :!:  !:!  :!:     :!:  :!:     
 :::: :: :::    :: ::::   :: ::::   ::: :::  ::::: ::  :::     ::    :: ::::
  :: :  : :    : :: ::   : :: : :   :: :: :   : :  :    :      :    : :: :: 

-----------------------------------------------------------------------------
All graphics are created using CSS, no static files or images
-----------------------------------------------------------------------------



Type 'help for a list of available commands.



`; // Help text

const helpText = `
Available commands:

help - This output
contact - Prints contact information
contact <key> - Opens up relevant contact link
clear - Clears the display
ls - Lists files
pwd - Lists current directory
cd <dir> - Enters directory
cat <filename> - Lists file contents
`; // Contact texts

const contactInfo = {
  email: 'andersevenrud@gmail.com',
  twitter: 'https://twitter.com/andersevenrud',
  github: 'https://github.com/andersevenrud'
};
const contactList = Object.keys(contactInfo).reduce((result, key) => result.concat([`${key} - ${contactInfo[key]}`]), []).join('\n');
const contactText = `
Created by Anders Evenrud

${contactList}

Use ex. 'contact twitter' to open the links.
`;

const openContact = key => window.open(key === 'email' ? `mailto:${contactInfo[key]}` : contactInfo[key]); // File browser


const browser = function () {
  let current = '/';
  let tree = [{
    location: '/',
    filename: 'documents',
    type: 'directory'
  }, {
    location: '/',
    filename: 'AUTHOR',
    type: 'file',
    content: 'Anders Evenrud <andersevenrud@gmail.com>'
  }];

  const fix = str => str.trim().replace(/\/+/g, '/') || '/';

  const setCurrent = dir => {
    if (typeof dir !== 'undefined') {
      if (dir == '..') {
        const parts = current.split('/');
        parts.pop();
        current = fix(parts.join('/'));
      } else {
        const found = tree.filter(iter => iter.location === current).find(iter => iter.filename === fix(dir));

        if (found) {
          current = fix(current + '/' + dir);
        } else {
          return `Directory '${dir}' not found in '${current}'`;
        }
      }

      return `Entered '${current}'`;
    }

    return current;
  };

  const ls = () => {
    const found = tree.filter(iter => iter.location === current);
    const fileCount = found.filter(iter => iter.type === 'file').length;
    const directoryCount = found.filter(iter => iter.type === 'directory').length;
    const status = `${fileCount} file(s), ${directoryCount} dir(s)`;
    const maxlen = Math.max(...found.map(iter => iter.filename).map(n => n.length));
    const list = found.map(iter => {
      return `${iter.filename.padEnd(maxlen + 1, ' ')} <${iter.type}>`;
    }).join('\n');
    return `${list}\n\n${status} in ${current}`;
  };

  const cat = filename => {
    const found = tree.filter(iter => iter.location === current);
    const foundFile = found.find(iter => iter.filename === filename);

    if (foundFile) {
      return foundFile.content;
    }

    return `File '${filename}' not found in '${current}'`;
  };

  return {
    cwd: () => setCurrent(),
    cd: dir => setCurrent(fix(dir)),
    cat,
    ls
  };
}(); ///////////////////////////////////////////////////////////////////////////////
// MAIN
///////////////////////////////////////////////////////////////////////////////


const load = () => {
  const t = Object(_src_terminal_js__WEBPACK_IMPORTED_MODULE_1__["terminal"])({
    prompt: () => `$ ${browser.cwd()} > `,
    banner,
    commands: {
      help: () => helpText,
      cwd: () => browser.cwd(),
      cd: dir => browser.cd(dir),
      ls: () => browser.ls(),
      cat: file => browser.cat(file),
      clear: () => t.clear(),
      contact: key => {
        if (key in contactInfo) {
          openContact(key);
          return `Opening ${key} - ${contactInfo[key]}`;
        }

        return contactText;
      }
    }
  });
};

document.addEventListener('DOMContentLoaded', load);

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/terminal.js":
/*!*************************!*\
  !*** ./src/terminal.js ***!
  \*************************/
/*! exports provided: terminal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "terminal", function() { return terminal; });
/**
 * AnderShell - Just a small CSS demo
 *
 * Copyright (c) 2011-2018, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
// Creates initial options
const createOptions = opts => Object.assign({}, {
  banner: 'Hello World',
  prompt: () => '$ > ',
  tickrate: 1000 / 60,
  buflen: 8,
  commands: {}
}, opts || {}); // Creates our textarea element


const createElement = root => {
  const el = document.createElement('textarea');
  el.contentEditable = true;
  el.spellcheck = false;
  el.value = '';
  root.appendChild(el);
  return el;
}; // Keys that must be ignored
// Sets text selection range


const setSelectionRange = input => {
  const length = input.value.length;

  if (input.setSelectionRange) {
    input.focus();
    input.setSelectionRange(length, length);
  } else if (input.createTextRange) {
    const range = input.createTextRange();
    range.collapse(true);
    range.moveEnd('character', length);
    range.moveStart('character', length);
    range.select();
  }
}; // Gets the font size of an element


const getFontSize = element => parseInt(window.getComputedStyle(element).getPropertyValue('font-size'), 10); // Creates the rendering loop


const renderer = (tickrate, onrender) => {
  let lastTick = 0;

  const tick = time => {
    const now = performance.now();
    const delta = now - lastTick;

    if (delta > tickrate) {
      lastTick = now - delta % tickrate;
      onrender();
    }

    window.requestAnimationFrame(tick);
  };

  return tick;
}; // Pronts buffer onto the textarea


const printer = ($element, buflen) => buffer => {
  if (buffer.length > 0) {
    const len = Math.min(buflen, buffer.length);
    const val = buffer.splice(0, len);
    $element.value += val.join('');
    setSelectionRange($element);
    $element.scrollTop = $element.scrollHeight;
    return true;
  }

  return false;
}; // Parses input


const parser = onparsed => str => {
  if (str.length) {
    const args = str.split(' ').map(s => s.trim());
    const cmd = args.splice(0, 1)[0];
    console.debug(cmd, args);
    onparsed(cmd, ...args);
  }
}; // Command executor


const executor = commands => (cmd, ...args) => cb => {
  try {
    commands[cmd] ? cb(commands[cmd](...args) + '\n') : cb(`No such command '${cmd}'\n`);
  } catch (e) {
    console.warn(e);
    cb(`Exception: ${e}\n`);
  }
}; // Handle keyboard events


const keyboard = parse => {
  let input = [];
  const keys = {
    8: 'backspace',
    13: 'enter'
  };

  const ignoreKey = code => code >= 33 && code <= 40;

  const key = ev => keys[ev.which || ev.keyCode];

  return {
    keypress: ev => {
      if (key(ev) === 'enter') {
        const str = input.join('').trim();
        parse(str);
        input = [];
      } else if (key(ev) !== 'backspace') {
        input.push(String.fromCharCode(ev.which || ev.keyCode));
      }
    },
    keydown: ev => {
      if (key(ev) === 'backspace') {
        if (input.length > 0) {
          input.pop();
        } else {
          ev.preventDefault();
        }
      } else if (ignoreKey(ev.keyCode)) {
        ev.preventDefault();
      }
    }
  };
}; // Creates the terminal


const terminal = opts => {
  let buffer = []; // What will be output to display

  let busy = false; // If we cannot type at the moment

  const {
    prompt,
    banner,
    commands,
    buflen,
    tickrate
  } = createOptions(opts);
  const $root = document.querySelector('#terminal');
  const $element = createElement($root);
  const fontSize = getFontSize($element);
  const width = $element.offsetWidth;
  const cwidth = Math.round(width / fontSize * 1.9); // FIXME: Should be calculated via canvas

  const output = (output, center) => {
    let lines = output.split(/\n/);

    if (center) {
      lines = lines.map(line => line.length > 0 ? line.padStart(line.length + (cwidth / 2 - line.length / 2), ' ') : line);
    }

    const append = lines.join('\n') + '\n' + prompt();
    buffer = buffer.concat(append.split(''));
  };

  const print = printer($element, buflen);
  const execute = executor(commands);

  const onrender = () => busy = print(buffer);

  const onparsed = (cmd, ...args) => execute(cmd, ...args)(output);

  const render = renderer(tickrate, onrender);
  const parse = parser(onparsed);

  const focus = () => setTimeout(() => $element.focus(), 1);

  const kbd = keyboard(parse);

  const clear = () => $element.value = '';

  const input = ev => busy ? ev.preventDefault() : kbd[ev.type](ev);

  $element.addEventListener('focus', () => setSelectionRange($element));
  $element.addEventListener('blur', focus);
  $element.addEventListener('keypress', input);
  $element.addEventListener('keydown', input);
  window.addEventListener('focus', focus);
  $root.addEventListener('click', focus);
  $root.appendChild($element);
  render();
  output(banner, true);
  focus();
  return {
    focus,
    parse,
    clear,
    print: output
  };
};

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/user/dasha666/index.js */"./index.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map