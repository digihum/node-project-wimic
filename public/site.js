/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 42);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

// Create a simple path alias to allow browserify to resolve
// the runtime on a supported path.
module.exports = __webpack_require__(25)['default'];


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.extend = extend;
exports.indexOf = indexOf;
exports.escapeExpression = escapeExpression;
exports.isEmpty = isEmpty;
exports.createFrame = createFrame;
exports.blockParams = blockParams;
exports.appendContextPath = appendContextPath;
var escape = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '`': '&#x60;',
  '=': '&#x3D;'
};

var badChars = /[&<>"'`=]/g,
    possible = /[&<>"'`=]/;

function escapeChar(chr) {
  return escape[chr];
}

function extend(obj /* , ...source */) {
  for (var i = 1; i < arguments.length; i++) {
    for (var key in arguments[i]) {
      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
        obj[key] = arguments[i][key];
      }
    }
  }

  return obj;
}

var toString = Object.prototype.toString;

exports.toString = toString;
// Sourced from lodash
// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
/* eslint-disable func-style */
var isFunction = function isFunction(value) {
  return typeof value === 'function';
};
// fallback for older versions of Chrome and Safari
/* istanbul ignore next */
if (isFunction(/x/)) {
  exports.isFunction = isFunction = function (value) {
    return typeof value === 'function' && toString.call(value) === '[object Function]';
  };
}
exports.isFunction = isFunction;

/* eslint-enable func-style */

/* istanbul ignore next */
var isArray = Array.isArray || function (value) {
  return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
};

exports.isArray = isArray;
// Older IE versions do not directly support indexOf so we must implement our own, sadly.

function indexOf(array, value) {
  for (var i = 0, len = array.length; i < len; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

function escapeExpression(string) {
  if (typeof string !== 'string') {
    // don't escape SafeStrings, since they're already safe
    if (string && string.toHTML) {
      return string.toHTML();
    } else if (string == null) {
      return '';
    } else if (!string) {
      return string + '';
    }

    // Force a string conversion as this will be done by the append regardless and
    // the regex test will do this transparently behind the scenes, causing issues if
    // an object's to string has escaped characters in it.
    string = '' + string;
  }

  if (!possible.test(string)) {
    return string;
  }
  return string.replace(badChars, escapeChar);
}

function isEmpty(value) {
  if (!value && value !== 0) {
    return true;
  } else if (isArray(value) && value.length === 0) {
    return true;
  } else {
    return false;
  }
}

function createFrame(object) {
  var frame = extend({}, object);
  frame._parent = object;
  return frame;
}

function blockParams(params, ids) {
  params.path = ids;
  return params;
}

function appendContextPath(contextPath, id) {
  return (contextPath ? contextPath + '.' : '') + id;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL3V0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFNLE1BQU0sR0FBRztBQUNiLEtBQUcsRUFBRSxPQUFPO0FBQ1osS0FBRyxFQUFFLE1BQU07QUFDWCxLQUFHLEVBQUUsTUFBTTtBQUNYLEtBQUcsRUFBRSxRQUFRO0FBQ2IsS0FBRyxFQUFFLFFBQVE7QUFDYixLQUFHLEVBQUUsUUFBUTtBQUNiLEtBQUcsRUFBRSxRQUFRO0NBQ2QsQ0FBQzs7QUFFRixJQUFNLFFBQVEsR0FBRyxZQUFZO0lBQ3ZCLFFBQVEsR0FBRyxXQUFXLENBQUM7O0FBRTdCLFNBQVMsVUFBVSxDQUFDLEdBQUcsRUFBRTtBQUN2QixTQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUNwQjs7QUFFTSxTQUFTLE1BQU0sQ0FBQyxHQUFHLG9CQUFtQjtBQUMzQyxPQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN6QyxTQUFLLElBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUM1QixVQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUU7QUFDM0QsV0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztPQUM5QjtLQUNGO0dBQ0Y7O0FBRUQsU0FBTyxHQUFHLENBQUM7Q0FDWjs7QUFFTSxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQzs7Ozs7O0FBS2hELElBQUksVUFBVSxHQUFHLG9CQUFTLEtBQUssRUFBRTtBQUMvQixTQUFPLE9BQU8sS0FBSyxLQUFLLFVBQVUsQ0FBQztDQUNwQyxDQUFDOzs7QUFHRixJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUNuQixVQUlNLFVBQVUsR0FKaEIsVUFBVSxHQUFHLFVBQVMsS0FBSyxFQUFFO0FBQzNCLFdBQU8sT0FBTyxLQUFLLEtBQUssVUFBVSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssbUJBQW1CLENBQUM7R0FDcEYsQ0FBQztDQUNIO1FBQ08sVUFBVSxHQUFWLFVBQVU7Ozs7O0FBSVgsSUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sSUFBSSxVQUFTLEtBQUssRUFBRTtBQUN0RCxTQUFPLEFBQUMsS0FBSyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsR0FBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLGdCQUFnQixHQUFHLEtBQUssQ0FBQztDQUNqRyxDQUFDOzs7OztBQUdLLFNBQVMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUU7QUFDcEMsT0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNoRCxRQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUU7QUFDdEIsYUFBTyxDQUFDLENBQUM7S0FDVjtHQUNGO0FBQ0QsU0FBTyxDQUFDLENBQUMsQ0FBQztDQUNYOztBQUdNLFNBQVMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFO0FBQ3ZDLE1BQUksT0FBTyxNQUFNLEtBQUssUUFBUSxFQUFFOztBQUU5QixRQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO0FBQzNCLGFBQU8sTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQ3hCLE1BQU0sSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO0FBQ3pCLGFBQU8sRUFBRSxDQUFDO0tBQ1gsTUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ2xCLGFBQU8sTUFBTSxHQUFHLEVBQUUsQ0FBQztLQUNwQjs7Ozs7QUFLRCxVQUFNLEdBQUcsRUFBRSxHQUFHLE1BQU0sQ0FBQztHQUN0Qjs7QUFFRCxNQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUFFLFdBQU8sTUFBTSxDQUFDO0dBQUU7QUFDOUMsU0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztDQUM3Qzs7QUFFTSxTQUFTLE9BQU8sQ0FBQyxLQUFLLEVBQUU7QUFDN0IsTUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO0FBQ3pCLFdBQU8sSUFBSSxDQUFDO0dBQ2IsTUFBTSxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtBQUMvQyxXQUFPLElBQUksQ0FBQztHQUNiLE1BQU07QUFDTCxXQUFPLEtBQUssQ0FBQztHQUNkO0NBQ0Y7O0FBRU0sU0FBUyxXQUFXLENBQUMsTUFBTSxFQUFFO0FBQ2xDLE1BQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDL0IsT0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDdkIsU0FBTyxLQUFLLENBQUM7Q0FDZDs7QUFFTSxTQUFTLFdBQVcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLFFBQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0FBQ2xCLFNBQU8sTUFBTSxDQUFDO0NBQ2Y7O0FBRU0sU0FBUyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsRUFBRSxFQUFFO0FBQ2pELFNBQU8sQ0FBQyxXQUFXLEdBQUcsV0FBVyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUEsR0FBSSxFQUFFLENBQUM7Q0FDcEQiLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBlc2NhcGUgPSB7XG4gICcmJzogJyZhbXA7JyxcbiAgJzwnOiAnJmx0OycsXG4gICc+JzogJyZndDsnLFxuICAnXCInOiAnJnF1b3Q7JyxcbiAgXCInXCI6ICcmI3gyNzsnLFxuICAnYCc6ICcmI3g2MDsnLFxuICAnPSc6ICcmI3gzRDsnXG59O1xuXG5jb25zdCBiYWRDaGFycyA9IC9bJjw+XCInYD1dL2csXG4gICAgICBwb3NzaWJsZSA9IC9bJjw+XCInYD1dLztcblxuZnVuY3Rpb24gZXNjYXBlQ2hhcihjaHIpIHtcbiAgcmV0dXJuIGVzY2FwZVtjaHJdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0ZW5kKG9iai8qICwgLi4uc291cmNlICovKSB7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yIChsZXQga2V5IGluIGFyZ3VtZW50c1tpXSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcmd1bWVudHNbaV0sIGtleSkpIHtcbiAgICAgICAgb2JqW2tleV0gPSBhcmd1bWVudHNbaV1ba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5leHBvcnQgbGV0IHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLy8gU291cmNlZCBmcm9tIGxvZGFzaFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Jlc3RpZWpzL2xvZGFzaC9ibG9iL21hc3Rlci9MSUNFTlNFLnR4dFxuLyogZXNsaW50LWRpc2FibGUgZnVuYy1zdHlsZSAqL1xubGV0IGlzRnVuY3Rpb24gPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xufTtcbi8vIGZhbGxiYWNrIGZvciBvbGRlciB2ZXJzaW9ucyBvZiBDaHJvbWUgYW5kIFNhZmFyaVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmlmIChpc0Z1bmN0aW9uKC94LykpIHtcbiAgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbiAgfTtcbn1cbmV4cG9ydCB7aXNGdW5jdGlvbn07XG4vKiBlc2xpbnQtZW5hYmxlIGZ1bmMtc3R5bGUgKi9cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpID8gdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5XScgOiBmYWxzZTtcbn07XG5cbi8vIE9sZGVyIElFIHZlcnNpb25zIGRvIG5vdCBkaXJlY3RseSBzdXBwb3J0IGluZGV4T2Ygc28gd2UgbXVzdCBpbXBsZW1lbnQgb3VyIG93biwgc2FkbHkuXG5leHBvcnQgZnVuY3Rpb24gaW5kZXhPZihhcnJheSwgdmFsdWUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGFycmF5Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKGFycmF5W2ldID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlRXhwcmVzc2lvbihzdHJpbmcpIHtcbiAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgLy8gZG9uJ3QgZXNjYXBlIFNhZmVTdHJpbmdzLCBzaW5jZSB0aGV5J3JlIGFscmVhZHkgc2FmZVxuICAgIGlmIChzdHJpbmcgJiYgc3RyaW5nLnRvSFRNTCkge1xuICAgICAgcmV0dXJuIHN0cmluZy50b0hUTUwoKTtcbiAgICB9IGVsc2UgaWYgKHN0cmluZyA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfSBlbHNlIGlmICghc3RyaW5nKSB7XG4gICAgICByZXR1cm4gc3RyaW5nICsgJyc7XG4gICAgfVxuXG4gICAgLy8gRm9yY2UgYSBzdHJpbmcgY29udmVyc2lvbiBhcyB0aGlzIHdpbGwgYmUgZG9uZSBieSB0aGUgYXBwZW5kIHJlZ2FyZGxlc3MgYW5kXG4gICAgLy8gdGhlIHJlZ2V4IHRlc3Qgd2lsbCBkbyB0aGlzIHRyYW5zcGFyZW50bHkgYmVoaW5kIHRoZSBzY2VuZXMsIGNhdXNpbmcgaXNzdWVzIGlmXG4gICAgLy8gYW4gb2JqZWN0J3MgdG8gc3RyaW5nIGhhcyBlc2NhcGVkIGNoYXJhY3RlcnMgaW4gaXQuXG4gICAgc3RyaW5nID0gJycgKyBzdHJpbmc7XG4gIH1cblxuICBpZiAoIXBvc3NpYmxlLnRlc3Qoc3RyaW5nKSkgeyByZXR1cm4gc3RyaW5nOyB9XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZShiYWRDaGFycywgZXNjYXBlQ2hhcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5KHZhbHVlKSB7XG4gIGlmICghdmFsdWUgJiYgdmFsdWUgIT09IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZyYW1lKG9iamVjdCkge1xuICBsZXQgZnJhbWUgPSBleHRlbmQoe30sIG9iamVjdCk7XG4gIGZyYW1lLl9wYXJlbnQgPSBvYmplY3Q7XG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJsb2NrUGFyYW1zKHBhcmFtcywgaWRzKSB7XG4gIHBhcmFtcy5wYXRoID0gaWRzO1xuICByZXR1cm4gcGFyYW1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kQ29udGV4dFBhdGgoY29udGV4dFBhdGgsIGlkKSB7XG4gIHJldHVybiAoY29udGV4dFBhdGggPyBjb250ZXh0UGF0aCArICcuJyA6ICcnKSArIGlkO1xufVxuIl19


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

function Exception(message, node) {
  var loc = node && node.loc,
      line = undefined,
      column = undefined;
  if (loc) {
    line = loc.start.line;
    column = loc.start.column;

    message += ' - ' + line + ':' + column;
  }

  var tmp = Error.prototype.constructor.call(this, message);

  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
  for (var idx = 0; idx < errorProps.length; idx++) {
    this[errorProps[idx]] = tmp[errorProps[idx]];
  }

  /* istanbul ignore else */
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, Exception);
  }

  try {
    if (loc) {
      this.lineNumber = line;

      // Work around issue under safari where we can't directly set the column value
      /* istanbul ignore next */
      if (Object.defineProperty) {
        Object.defineProperty(this, 'column', { value: column });
      } else {
        this.column = column;
      }
    }
  } catch (nop) {
    /* Ignore if the browser is very particular */
  }
}

Exception.prototype = new Error();

exports['default'] = Exception;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2V4Y2VwdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsSUFBTSxVQUFVLEdBQUcsQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQzs7QUFFbkcsU0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRTtBQUNoQyxNQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUc7TUFDdEIsSUFBSSxZQUFBO01BQ0osTUFBTSxZQUFBLENBQUM7QUFDWCxNQUFJLEdBQUcsRUFBRTtBQUNQLFFBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztBQUN0QixVQUFNLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7O0FBRTFCLFdBQU8sSUFBSSxLQUFLLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7R0FDeEM7O0FBRUQsTUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQzs7O0FBRzFELE9BQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFO0FBQ2hELFFBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7R0FDOUM7OztBQUdELE1BQUksS0FBSyxDQUFDLGlCQUFpQixFQUFFO0FBQzNCLFNBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7R0FDMUM7O0FBRUQsTUFBSTtBQUNGLFFBQUksR0FBRyxFQUFFO0FBQ1AsVUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Ozs7QUFJdkIsVUFBSSxNQUFNLENBQUMsY0FBYyxFQUFFO0FBQ3pCLGNBQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDO09BQ3hELE1BQU07QUFDTCxZQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztPQUN0QjtLQUNGO0dBQ0YsQ0FBQyxPQUFPLEdBQUcsRUFBRTs7R0FFYjtDQUNGOztBQUVELFNBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQzs7cUJBRW5CLFNBQVMiLCJmaWxlIjoiZXhjZXB0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBlcnJvclByb3BzID0gWydkZXNjcmlwdGlvbicsICdmaWxlTmFtZScsICdsaW5lTnVtYmVyJywgJ21lc3NhZ2UnLCAnbmFtZScsICdudW1iZXInLCAnc3RhY2snXTtcblxuZnVuY3Rpb24gRXhjZXB0aW9uKG1lc3NhZ2UsIG5vZGUpIHtcbiAgbGV0IGxvYyA9IG5vZGUgJiYgbm9kZS5sb2MsXG4gICAgICBsaW5lLFxuICAgICAgY29sdW1uO1xuICBpZiAobG9jKSB7XG4gICAgbGluZSA9IGxvYy5zdGFydC5saW5lO1xuICAgIGNvbHVtbiA9IGxvYy5zdGFydC5jb2x1bW47XG5cbiAgICBtZXNzYWdlICs9ICcgLSAnICsgbGluZSArICc6JyArIGNvbHVtbjtcbiAgfVxuXG4gIGxldCB0bXAgPSBFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IuY2FsbCh0aGlzLCBtZXNzYWdlKTtcblxuICAvLyBVbmZvcnR1bmF0ZWx5IGVycm9ycyBhcmUgbm90IGVudW1lcmFibGUgaW4gQ2hyb21lIChhdCBsZWFzdCksIHNvIGBmb3IgcHJvcCBpbiB0bXBgIGRvZXNuJ3Qgd29yay5cbiAgZm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgZXJyb3JQcm9wcy5sZW5ndGg7IGlkeCsrKSB7XG4gICAgdGhpc1tlcnJvclByb3BzW2lkeF1dID0gdG1wW2Vycm9yUHJvcHNbaWR4XV07XG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcbiAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCBFeGNlcHRpb24pO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBpZiAobG9jKSB7XG4gICAgICB0aGlzLmxpbmVOdW1iZXIgPSBsaW5lO1xuXG4gICAgICAvLyBXb3JrIGFyb3VuZCBpc3N1ZSB1bmRlciBzYWZhcmkgd2hlcmUgd2UgY2FuJ3QgZGlyZWN0bHkgc2V0IHRoZSBjb2x1bW4gdmFsdWVcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnY29sdW1uJywge3ZhbHVlOiBjb2x1bW59KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29sdW1uID0gY29sdW1uO1xuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAobm9wKSB7XG4gICAgLyogSWdub3JlIGlmIHRoZSBicm93c2VyIGlzIHZlcnkgcGFydGljdWxhciAqL1xuICB9XG59XG5cbkV4Y2VwdGlvbi5wcm90b3R5cGUgPSBuZXcgRXJyb3IoKTtcblxuZXhwb3J0IGRlZmF1bHQgRXhjZXB0aW9uO1xuIl19


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(17);
exports.encode = exports.stringify = __webpack_require__(18);


/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = jQuery;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div id='irish-writers-main'>\n	<div class='search-box'>\n		<input type='text' class='big-search' id='name-filter' placeholder='Type to search..' value='"
    + container.escapeExpression(((helper = (helper = helpers.initialSearchValue || (depth0 != null ? depth0.initialSearchValue : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"initialSearchValue","hash":{},"data":data}) : helper)))
    + "' />\n	</div>\n	<span id='list-target'></span>\n</div>\n";
},"useData":true});

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "		<li><span><span class='role-name'>"
    + alias2(alias1((depth0 != null ? depth0.role : depth0), depth0))
    + ": </span><a href='#!/people/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.work : depth0)) != null ? stack1.person_id : stack1), depth0))
    + "'>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.work : depth0)) != null ? stack1.title : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.work : depth0)) != null ? stack1.firstname : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.work : depth0)) != null ? stack1.lastname_keyname : stack1), depth0))
    + "</a></span>\n		</li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div id='main'>\n	<h4>People</h4>\n	<ul>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.authors : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</ul>\n	<h4>Details</h4>\n	<div>Genre: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.core : depth0)) != null ? stack1.genre : stack1), depth0))
    + "</div>\n\n	"
    + ((stack1 = container.invokePartial(__webpack_require__(22),depth0,{"name":"_movie","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + " "
    + ((stack1 = container.invokePartial(__webpack_require__(19),depth0,{"name":"_article","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + " "
    + ((stack1 = container.invokePartial(__webpack_require__(20),depth0,{"name":"_book","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + " "
    + ((stack1 = container.invokePartial(__webpack_require__(23),depth0,{"name":"_play","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + " "
    + ((stack1 = container.invokePartial(__webpack_require__(21),depth0,{"name":"_journal","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n\n	<div class='citation'>\n		<h5>Citation</h5>\n		<p>"
    + alias2(alias1((depth0 != null ? depth0.citation : depth0), depth0))
    + "</p>\n	</div>\n</div>\n";
},"usePartial":true,"useData":true});

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<li><a href='!#/people/"
    + alias4(((helper = (helper = helpers.DB_id || (depth0 != null ? depth0.DB_id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"DB_id","hash":{},"data":data}) : helper)))
    + "'>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.firstname || (depth0 != null ? depth0.firstname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"firstname","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.lastname_keyname || (depth0 != null ? depth0.lastname_keyname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lastname_keyname","hash":{},"data":data}) : helper)))
    + "</a></li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div id='main'>\n	<span class='home-link'><a href='#'><i class='fa fa-home'></i></a></span>\n	<h1>All People</h1>\n	<ul>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.people : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</ul>\n</div>\n\n";
},"useData":true});

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<span>Alternative Spelling: "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.core : depth0)) != null ? stack1.alternative_spelling : stack1), depth0))
    + "</span> ";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n		<span>Associated places: "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.core : depth0)) != null ? stack1.associated_places : stack1), depth0))
    + "</span> ";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "\n		<span>Birth date: "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.core : depth0)) != null ? stack1.dob_is_circa : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.core : depth0)) != null ? stack1.birth_day_of_month : stack1), depth0))
    + "/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.core : depth0)) != null ? stack1.birth_month : stack1), depth0))
    + "/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.core : depth0)) != null ? stack1.birth_year : stack1), depth0))
    + "</span>		";
},"6":function(container,depth0,helpers,partials,data) {
    return "	Circa ";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "\n		<span>Birthplace: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.core : depth0)) != null ? stack1.born_country : stack1), depth0))
    + ", "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.core : depth0)) != null ? stack1.born_county : stack1), depth0))
    + ", "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.core : depth0)) != null ? stack1.born_settlement : stack1), depth0))
    + "</span> ";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "\n		<span>Death date: "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.core : depth0)) != null ? stack1.dod_is_circa : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.core : depth0)) != null ? stack1.died_day_of_month : stack1), depth0))
    + "/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.core : depth0)) != null ? stack1.died_month : stack1), depth0))
    + "/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.core : depth0)) != null ? stack1.died_year : stack1), depth0))
    + "</span>		";
},"11":function(container,depth0,helpers,partials,data) {
    return " Circa ";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "\n		<span>Deathplace: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.core : depth0)) != null ? stack1.died_country : stack1), depth0))
    + ", "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.core : depth0)) != null ? stack1.died_county : stack1), depth0))
    + ", "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.core : depth0)) != null ? stack1.died_settlement : stack1), depth0))
    + "</span> ";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n		<span>Male/Female: "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.core : depth0)) != null ? stack1.male_female : stack1), depth0))
    + "</span> ";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n		<span>Middle names: "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.core : depth0)) != null ? stack1.middle_names : stack1), depth0))
    + "</span> ";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n		<span>Education: "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.core : depth0)) != null ? stack1.education : stack1), depth0))
    + "</span> ";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n		<span>Sources: "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.core : depth0)) != null ? stack1.sources : stack1), depth0))
    + "</span> ";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n		<span>Notes: "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.core : depth0)) != null ? stack1.notes : stack1), depth0))
    + "</span> ";
},"25":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n		<span>Alternative spelling of firstname: "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.core : depth0)) != null ? stack1.firstname_alternative_spelling : stack1), depth0))
    + "</span> ";
},"27":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "\n		<span>Is alternative name of: <a href='#!/people/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.core : depth0)) != null ? stack1.is_alternative_name_of : stack1), depth0))
    + "'>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.core : depth0)) != null ? stack1.alt_title : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.core : depth0)) != null ? stack1.alt_firstname : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.core : depth0)) != null ? stack1.alt_lastname_keyname : stack1), depth0))
    + "</a></span>		";
},"29":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n		<span>Primary researcher: "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.core : depth0)) != null ? stack1.primary_researcher : stack1), depth0))
    + "</span> ";
},"31":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n		<span>Type of name: "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.core : depth0)) != null ? stack1.type_of_name : stack1), depth0))
    + "</span> ";
},"33":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "	<h2>Works</h2>\n	<ul>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.works : depth0),{"name":"each","hash":{},"fn":container.program(34, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</ul>\n";
},"34":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=container.lambda;

  return "		<li><span><span class='role-name'>"
    + alias1(((helper = (helper = helpers.role || (depth0 != null ? depth0.role : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"role","hash":{},"data":data}) : helper)))
    + ": </span><a href='#!/publications/"
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.work : depth0)) != null ? stack1.publication_id : stack1), depth0))
    + "'>"
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.work : depth0)) != null ? stack1.title : stack1), depth0))
    + "</a></span>\n		</li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<div id='main'>\n\n	<div class='info'>\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.core : depth0)) != null ? stack1.alternative_spelling : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.core : depth0)) != null ? stack1.associated_places : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.core : depth0)) != null ? stack1.birth_day_of_month : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.core : depth0)) != null ? stack1.born_country : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.core : depth0)) != null ? stack1.died_day_of_month : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.core : depth0)) != null ? stack1.died_country : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.core : depth0)) != null ? stack1.alternative_spelling : stack1),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.core : depth0)) != null ? stack1.middle_names : stack1),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.core : depth0)) != null ? stack1.notes : stack1),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.core : depth0)) != null ? stack1.sources : stack1),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.core : depth0)) != null ? stack1.notes : stack1),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.core : depth0)) != null ? stack1.firstname_alternative_spelling : stack1),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.core : depth0)) != null ? stack1.is_alternative_name_of : stack1),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.core : depth0)) != null ? stack1.is_master_name : stack1),{"name":"if","hash":{},"fn":container.program(29, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.core : depth0)) != null ? stack1.type_of_name : stack1),{"name":"if","hash":{},"fn":container.program(31, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n\n	</div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.works : depth0),{"name":"if","hash":{},"fn":container.program(33, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n	<div class='citation'>\n		<h5>Citation</h5>\n		<p>"
    + container.escapeExpression(((helper = (helper = helpers.citation || (depth0 != null ? depth0.citation : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"citation","hash":{},"data":data}) : helper)))
    + "</p>\n	</div>\n</div>\n";
},"useData":true});

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.header : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <li style='margin-left: 0.5em;'><a href='#!/people/"
    + alias4(((helper = (helper = helpers.DB_id || (depth0 != null ? depth0.DB_id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"DB_id","hash":{},"data":data}) : helper)))
    + "'>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.firstname || (depth0 != null ? depth0.firstname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"firstname","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.lastname_keyname || (depth0 != null ? depth0.lastname_keyname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lastname_keyname","hash":{},"data":data}) : helper)))
    + "</a></li>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <li><h5 style='background-color: #007082; color: white; padding: 0.2em;'>"
    + container.escapeExpression(((helper = (helper = helpers.header || (depth0 != null ? depth0.header : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"header","hash":{},"data":data}) : helper)))
    + "</h5></li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<ul class=\"pagination\" id=\"main-pagination\"></ul>\n<ul id='people-list' style='column-width: 20em; list-style: none; padding: 0;'>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.people : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\n<ul class=\"pagination\" id=\"main-pagination\"></ul>\n";
},"useData":true});

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.HandlebarsEnvironment = HandlebarsEnvironment;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = __webpack_require__(1);

var _exception = __webpack_require__(2);

var _exception2 = _interopRequireDefault(_exception);

var _helpers = __webpack_require__(28);

var _decorators = __webpack_require__(26);

var _logger = __webpack_require__(36);

var _logger2 = _interopRequireDefault(_logger);

var VERSION = '4.0.5';
exports.VERSION = VERSION;
var COMPILER_REVISION = 7;

exports.COMPILER_REVISION = COMPILER_REVISION;
var REVISION_CHANGES = {
  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
  2: '== 1.0.0-rc.3',
  3: '== 1.0.0-rc.4',
  4: '== 1.x.x',
  5: '== 2.0.0-alpha.x',
  6: '>= 2.0.0-beta.1',
  7: '>= 4.0.0'
};

exports.REVISION_CHANGES = REVISION_CHANGES;
var objectType = '[object Object]';

function HandlebarsEnvironment(helpers, partials, decorators) {
  this.helpers = helpers || {};
  this.partials = partials || {};
  this.decorators = decorators || {};

  _helpers.registerDefaultHelpers(this);
  _decorators.registerDefaultDecorators(this);
}

HandlebarsEnvironment.prototype = {
  constructor: HandlebarsEnvironment,

  logger: _logger2['default'],
  log: _logger2['default'].log,

  registerHelper: function registerHelper(name, fn) {
    if (_utils.toString.call(name) === objectType) {
      if (fn) {
        throw new _exception2['default']('Arg not supported with multiple helpers');
      }
      _utils.extend(this.helpers, name);
    } else {
      this.helpers[name] = fn;
    }
  },
  unregisterHelper: function unregisterHelper(name) {
    delete this.helpers[name];
  },

  registerPartial: function registerPartial(name, partial) {
    if (_utils.toString.call(name) === objectType) {
      _utils.extend(this.partials, name);
    } else {
      if (typeof partial === 'undefined') {
        throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
      }
      this.partials[name] = partial;
    }
  },
  unregisterPartial: function unregisterPartial(name) {
    delete this.partials[name];
  },

  registerDecorator: function registerDecorator(name, fn) {
    if (_utils.toString.call(name) === objectType) {
      if (fn) {
        throw new _exception2['default']('Arg not supported with multiple decorators');
      }
      _utils.extend(this.decorators, name);
    } else {
      this.decorators[name] = fn;
    }
  },
  unregisterDecorator: function unregisterDecorator(name) {
    delete this.decorators[name];
  }
};

var log = _logger2['default'].log;

exports.log = log;
exports.createFrame = _utils.createFrame;
exports.logger = _logger2['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2Jhc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7cUJBQTRDLFNBQVM7O3lCQUMvQixhQUFhOzs7O3VCQUNFLFdBQVc7OzBCQUNSLGNBQWM7O3NCQUNuQyxVQUFVOzs7O0FBRXRCLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQzs7QUFDeEIsSUFBTSxpQkFBaUIsR0FBRyxDQUFDLENBQUM7OztBQUU1QixJQUFNLGdCQUFnQixHQUFHO0FBQzlCLEdBQUMsRUFBRSxhQUFhO0FBQ2hCLEdBQUMsRUFBRSxlQUFlO0FBQ2xCLEdBQUMsRUFBRSxlQUFlO0FBQ2xCLEdBQUMsRUFBRSxVQUFVO0FBQ2IsR0FBQyxFQUFFLGtCQUFrQjtBQUNyQixHQUFDLEVBQUUsaUJBQWlCO0FBQ3BCLEdBQUMsRUFBRSxVQUFVO0NBQ2QsQ0FBQzs7O0FBRUYsSUFBTSxVQUFVLEdBQUcsaUJBQWlCLENBQUM7O0FBRTlCLFNBQVMscUJBQXFCLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUU7QUFDbkUsTUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDO0FBQzdCLE1BQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxJQUFJLEVBQUUsQ0FBQztBQUMvQixNQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsSUFBSSxFQUFFLENBQUM7O0FBRW5DLGtDQUF1QixJQUFJLENBQUMsQ0FBQztBQUM3Qix3Q0FBMEIsSUFBSSxDQUFDLENBQUM7Q0FDakM7O0FBRUQscUJBQXFCLENBQUMsU0FBUyxHQUFHO0FBQ2hDLGFBQVcsRUFBRSxxQkFBcUI7O0FBRWxDLFFBQU0scUJBQVE7QUFDZCxLQUFHLEVBQUUsb0JBQU8sR0FBRzs7QUFFZixnQkFBYyxFQUFFLHdCQUFTLElBQUksRUFBRSxFQUFFLEVBQUU7QUFDakMsUUFBSSxnQkFBUyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssVUFBVSxFQUFFO0FBQ3RDLFVBQUksRUFBRSxFQUFFO0FBQUUsY0FBTSwyQkFBYyx5Q0FBeUMsQ0FBQyxDQUFDO09BQUU7QUFDM0Usb0JBQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztLQUM1QixNQUFNO0FBQ0wsVUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7S0FDekI7R0FDRjtBQUNELGtCQUFnQixFQUFFLDBCQUFTLElBQUksRUFBRTtBQUMvQixXQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7R0FDM0I7O0FBRUQsaUJBQWUsRUFBRSx5QkFBUyxJQUFJLEVBQUUsT0FBTyxFQUFFO0FBQ3ZDLFFBQUksZ0JBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLFVBQVUsRUFBRTtBQUN0QyxvQkFBTyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQzdCLE1BQU07QUFDTCxVQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVcsRUFBRTtBQUNsQyxjQUFNLHlFQUEwRCxJQUFJLG9CQUFpQixDQUFDO09BQ3ZGO0FBQ0QsVUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUM7S0FDL0I7R0FDRjtBQUNELG1CQUFpQixFQUFFLDJCQUFTLElBQUksRUFBRTtBQUNoQyxXQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7R0FDNUI7O0FBRUQsbUJBQWlCLEVBQUUsMkJBQVMsSUFBSSxFQUFFLEVBQUUsRUFBRTtBQUNwQyxRQUFJLGdCQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxVQUFVLEVBQUU7QUFDdEMsVUFBSSxFQUFFLEVBQUU7QUFBRSxjQUFNLDJCQUFjLDRDQUE0QyxDQUFDLENBQUM7T0FBRTtBQUM5RSxvQkFBTyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQy9CLE1BQU07QUFDTCxVQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztLQUM1QjtHQUNGO0FBQ0QscUJBQW1CLEVBQUUsNkJBQVMsSUFBSSxFQUFFO0FBQ2xDLFdBQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztHQUM5QjtDQUNGLENBQUM7O0FBRUssSUFBSSxHQUFHLEdBQUcsb0JBQU8sR0FBRyxDQUFDOzs7UUFFcEIsV0FBVztRQUFFLE1BQU0iLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlRnJhbWUsIGV4dGVuZCwgdG9TdHJpbmd9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tICcuL2V4Y2VwdGlvbic7XG5pbXBvcnQge3JlZ2lzdGVyRGVmYXVsdEhlbHBlcnN9IGZyb20gJy4vaGVscGVycyc7XG5pbXBvcnQge3JlZ2lzdGVyRGVmYXVsdERlY29yYXRvcnN9IGZyb20gJy4vZGVjb3JhdG9ycyc7XG5pbXBvcnQgbG9nZ2VyIGZyb20gJy4vbG9nZ2VyJztcblxuZXhwb3J0IGNvbnN0IFZFUlNJT04gPSAnNC4wLjUnO1xuZXhwb3J0IGNvbnN0IENPTVBJTEVSX1JFVklTSU9OID0gNztcblxuZXhwb3J0IGNvbnN0IFJFVklTSU9OX0NIQU5HRVMgPSB7XG4gIDE6ICc8PSAxLjAucmMuMicsIC8vIDEuMC5yYy4yIGlzIGFjdHVhbGx5IHJldjIgYnV0IGRvZXNuJ3QgcmVwb3J0IGl0XG4gIDI6ICc9PSAxLjAuMC1yYy4zJyxcbiAgMzogJz09IDEuMC4wLXJjLjQnLFxuICA0OiAnPT0gMS54LngnLFxuICA1OiAnPT0gMi4wLjAtYWxwaGEueCcsXG4gIDY6ICc+PSAyLjAuMC1iZXRhLjEnLFxuICA3OiAnPj0gNC4wLjAnXG59O1xuXG5jb25zdCBvYmplY3RUeXBlID0gJ1tvYmplY3QgT2JqZWN0XSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBIYW5kbGViYXJzRW52aXJvbm1lbnQoaGVscGVycywgcGFydGlhbHMsIGRlY29yYXRvcnMpIHtcbiAgdGhpcy5oZWxwZXJzID0gaGVscGVycyB8fCB7fTtcbiAgdGhpcy5wYXJ0aWFscyA9IHBhcnRpYWxzIHx8IHt9O1xuICB0aGlzLmRlY29yYXRvcnMgPSBkZWNvcmF0b3JzIHx8IHt9O1xuXG4gIHJlZ2lzdGVyRGVmYXVsdEhlbHBlcnModGhpcyk7XG4gIHJlZ2lzdGVyRGVmYXVsdERlY29yYXRvcnModGhpcyk7XG59XG5cbkhhbmRsZWJhcnNFbnZpcm9ubWVudC5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBIYW5kbGViYXJzRW52aXJvbm1lbnQsXG5cbiAgbG9nZ2VyOiBsb2dnZXIsXG4gIGxvZzogbG9nZ2VyLmxvZyxcblxuICByZWdpc3RlckhlbHBlcjogZnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgICBpZiAodG9TdHJpbmcuY2FsbChuYW1lKSA9PT0gb2JqZWN0VHlwZSkge1xuICAgICAgaWYgKGZuKSB7IHRocm93IG5ldyBFeGNlcHRpb24oJ0FyZyBub3Qgc3VwcG9ydGVkIHdpdGggbXVsdGlwbGUgaGVscGVycycpOyB9XG4gICAgICBleHRlbmQodGhpcy5oZWxwZXJzLCBuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oZWxwZXJzW25hbWVdID0gZm47XG4gICAgfVxuICB9LFxuICB1bnJlZ2lzdGVySGVscGVyOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMuaGVscGVyc1tuYW1lXTtcbiAgfSxcblxuICByZWdpc3RlclBhcnRpYWw6IGZ1bmN0aW9uKG5hbWUsIHBhcnRpYWwpIHtcbiAgICBpZiAodG9TdHJpbmcuY2FsbChuYW1lKSA9PT0gb2JqZWN0VHlwZSkge1xuICAgICAgZXh0ZW5kKHRoaXMucGFydGlhbHMsIG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodHlwZW9mIHBhcnRpYWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oYEF0dGVtcHRpbmcgdG8gcmVnaXN0ZXIgYSBwYXJ0aWFsIGNhbGxlZCBcIiR7bmFtZX1cIiBhcyB1bmRlZmluZWRgKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucGFydGlhbHNbbmFtZV0gPSBwYXJ0aWFsO1xuICAgIH1cbiAgfSxcbiAgdW5yZWdpc3RlclBhcnRpYWw6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy5wYXJ0aWFsc1tuYW1lXTtcbiAgfSxcblxuICByZWdpc3RlckRlY29yYXRvcjogZnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgICBpZiAodG9TdHJpbmcuY2FsbChuYW1lKSA9PT0gb2JqZWN0VHlwZSkge1xuICAgICAgaWYgKGZuKSB7IHRocm93IG5ldyBFeGNlcHRpb24oJ0FyZyBub3Qgc3VwcG9ydGVkIHdpdGggbXVsdGlwbGUgZGVjb3JhdG9ycycpOyB9XG4gICAgICBleHRlbmQodGhpcy5kZWNvcmF0b3JzLCBuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZWNvcmF0b3JzW25hbWVdID0gZm47XG4gICAgfVxuICB9LFxuICB1bnJlZ2lzdGVyRGVjb3JhdG9yOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMuZGVjb3JhdG9yc1tuYW1lXTtcbiAgfVxufTtcblxuZXhwb3J0IGxldCBsb2cgPSBsb2dnZXIubG9nO1xuXG5leHBvcnQge2NyZWF0ZUZyYW1lLCBsb2dnZXJ9O1xuIl19


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<nav class=\"navbar navbar-tertiary wimic-fake-menu\" role=\"navigation\">\n    <ul class=\"nav navbar-nav\">\n        <li class=\"first\"> <a href=\""
    + alias4(((helper = (helper = helpers.baseURL || (depth0 != null ? depth0.baseURL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"baseURL","hash":{},"data":data}) : helper)))
    + "\" data-page-url=\""
    + alias4(((helper = (helper = helpers.baseURL || (depth0 != null ? depth0.baseURL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"baseURL","hash":{},"data":data}) : helper)))
    + "\"> All People </a></li>\n        <li><a href=\""
    + alias4(((helper = (helper = helpers.baseURL || (depth0 != null ? depth0.baseURL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"baseURL","hash":{},"data":data}) : helper)))
    + "#!/publications/\" data-page-url=\""
    + alias4(((helper = (helper = helpers.baseURL || (depth0 != null ? depth0.baseURL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"baseURL","hash":{},"data":data}) : helper)))
    + "/#!/publications\"> All Publications </a></li>\n    </ul>\n</nav>\n";
},"useData":true});

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {  /* globals require, module */

  

  /**
   * Module dependencies.
   */

  var pathtoRegexp = __webpack_require__(41);

  /**
   * Module exports.
   */

  module.exports = page;

  /**
   * Detect click event
   */
  var clickEvent = ('undefined' !== typeof document) && document.ontouchstart ? 'touchstart' : 'click';

  /**
   * To work properly with the URL
   * history.location generated polyfill in https://github.com/devote/HTML5-History-API
   */

  var location = ('undefined' !== typeof window) && (window.history.location || window.location);

  /**
   * Perform initial dispatch.
   */

  var dispatch = true;


  /**
   * Decode URL components (query string, pathname, hash).
   * Accommodates both regular percent encoding and x-www-form-urlencoded format.
   */
  var decodeURLComponents = true;

  /**
   * Base path.
   */

  var base = '';

  /**
   * Running flag.
   */

  var running;

  /**
   * HashBang option
   */

  var hashbang = false;

  /**
   * Previous context, for capturing
   * page exit events.
   */

  var prevContext;

  /**
   * Register `path` with callback `fn()`,
   * or route `path`, or redirection,
   * or `page.start()`.
   *
   *   page(fn);
   *   page('*', fn);
   *   page('/user/:id', load, user);
   *   page('/user/' + user.id, { some: 'thing' });
   *   page('/user/' + user.id);
   *   page('/from', '/to')
   *   page();
   *
   * @param {string|!Function|!Object} path
   * @param {Function=} fn
   * @api public
   */

  function page(path, fn) {
    // <callback>
    if ('function' === typeof path) {
      return page('*', path);
    }

    // route <path> to <callback ...>
    if ('function' === typeof fn) {
      var route = new Route(/** @type {string} */ (path));
      for (var i = 1; i < arguments.length; ++i) {
        page.callbacks.push(route.middleware(arguments[i]));
      }
      // show <path> with [state]
    } else if ('string' === typeof path) {
      page['string' === typeof fn ? 'redirect' : 'show'](path, fn);
      // start [options]
    } else {
      page.start(path);
    }
  }

  /**
   * Callback functions.
   */

  page.callbacks = [];
  page.exits = [];

  /**
   * Current path being processed
   * @type {string}
   */
  page.current = '';

  /**
   * Number of pages navigated to.
   * @type {number}
   *
   *     page.len == 0;
   *     page('/login');
   *     page.len == 1;
   */

  page.len = 0;

  /**
   * Get or set basepath to `path`.
   *
   * @param {string} path
   * @api public
   */

  page.base = function(path) {
    if (0 === arguments.length) return base;
    base = path;
  };

  /**
   * Bind with the given `options`.
   *
   * Options:
   *
   *    - `click` bind to click events [true]
   *    - `popstate` bind to popstate [true]
   *    - `dispatch` perform initial dispatch [true]
   *
   * @param {Object} options
   * @api public
   */

  page.start = function(options) {
    options = options || {};
    if (running) return;
    running = true;
    if (false === options.dispatch) dispatch = false;
    if (false === options.decodeURLComponents) decodeURLComponents = false;
    if (false !== options.popstate) window.addEventListener('popstate', onpopstate, false);
    if (false !== options.click) {
      document.addEventListener(clickEvent, onclick, false);
    }
    if (true === options.hashbang) hashbang = true;
    if (!dispatch) return;
    var url = (hashbang && ~location.hash.indexOf('#!')) ? location.hash.substr(2) + location.search : location.pathname + location.search + location.hash;
    page.replace(url, null, true, dispatch);
  };

  /**
   * Unbind click and popstate event handlers.
   *
   * @api public
   */

  page.stop = function() {
    if (!running) return;
    page.current = '';
    page.len = 0;
    running = false;
    document.removeEventListener(clickEvent, onclick, false);
    window.removeEventListener('popstate', onpopstate, false);
  };

  /**
   * Show `path` with optional `state` object.
   *
   * @param {string} path
   * @param {Object=} state
   * @param {boolean=} dispatch
   * @param {boolean=} push
   * @return {!Context}
   * @api public
   */

  page.show = function(path, state, dispatch, push) {
    var ctx = new Context(path, state);
    page.current = ctx.path;
    if (false !== dispatch) page.dispatch(ctx);
    if (false !== ctx.handled && false !== push) ctx.pushState();
    return ctx;
  };

  /**
   * Goes back in the history
   * Back should always let the current route push state and then go back.
   *
   * @param {string} path - fallback path to go back if no more history exists, if undefined defaults to page.base
   * @param {Object=} state
   * @api public
   */

  page.back = function(path, state) {
    if (page.len > 0) {
      // this may need more testing to see if all browsers
      // wait for the next tick to go back in history
      history.back();
      page.len--;
    } else if (path) {
      setTimeout(function() {
        page.show(path, state);
      });
    }else{
      setTimeout(function() {
        page.show(base, state);
      });
    }
  };


  /**
   * Register route to redirect from one path to other
   * or just redirect to another route
   *
   * @param {string} from - if param 'to' is undefined redirects to 'from'
   * @param {string=} to
   * @api public
   */
  page.redirect = function(from, to) {
    // Define route from a path to another
    if ('string' === typeof from && 'string' === typeof to) {
      page(from, function(e) {
        setTimeout(function() {
          page.replace(/** @type {!string} */ (to));
        }, 0);
      });
    }

    // Wait for the push state and replace it with another
    if ('string' === typeof from && 'undefined' === typeof to) {
      setTimeout(function() {
        page.replace(from);
      }, 0);
    }
  };

  /**
   * Replace `path` with optional `state` object.
   *
   * @param {string} path
   * @param {Object=} state
   * @param {boolean=} init
   * @param {boolean=} dispatch
   * @return {!Context}
   * @api public
   */


  page.replace = function(path, state, init, dispatch) {
    var ctx = new Context(path, state);
    page.current = ctx.path;
    ctx.init = init;
    ctx.save(); // save before dispatching, which may redirect
    if (false !== dispatch) page.dispatch(ctx);
    return ctx;
  };

  /**
   * Dispatch the given `ctx`.
   *
   * @param {Context} ctx
   * @api private
   */
  page.dispatch = function(ctx) {
    var prev = prevContext,
      i = 0,
      j = 0;

    prevContext = ctx;

    function nextExit() {
      var fn = page.exits[j++];
      if (!fn) return nextEnter();
      fn(prev, nextExit);
    }

    function nextEnter() {
      var fn = page.callbacks[i++];

      if (ctx.path !== page.current) {
        ctx.handled = false;
        return;
      }
      if (!fn) return unhandled(ctx);
      fn(ctx, nextEnter);
    }

    if (prev) {
      nextExit();
    } else {
      nextEnter();
    }
  };

  /**
   * Unhandled `ctx`. When it's not the initial
   * popstate then redirect. If you wish to handle
   * 404s on your own use `page('*', callback)`.
   *
   * @param {Context} ctx
   * @api private
   */
  function unhandled(ctx) {
    if (ctx.handled) return;
    var current;

    if (hashbang) {
      current = base + location.hash.replace('#!', '');
    } else {
      current = location.pathname + location.search;
    }

    if (current === ctx.canonicalPath) return;
    page.stop();
    ctx.handled = false;
    location.href = ctx.canonicalPath;
  }

  /**
   * Register an exit route on `path` with
   * callback `fn()`, which will be called
   * on the previous context when a new
   * page is visited.
   */
  page.exit = function(path, fn) {
    if (typeof path === 'function') {
      return page.exit('*', path);
    }

    var route = new Route(path);
    for (var i = 1; i < arguments.length; ++i) {
      page.exits.push(route.middleware(arguments[i]));
    }
  };

  /**
   * Remove URL encoding from the given `str`.
   * Accommodates whitespace in both x-www-form-urlencoded
   * and regular percent-encoded form.
   *
   * @param {string} val - URL component to decode
   */
  function decodeURLEncodedURIComponent(val) {
    if (typeof val !== 'string') { return val; }
    return decodeURLComponents ? decodeURIComponent(val.replace(/\+/g, ' ')) : val;
  }

  /**
   * Initialize a new "request" `Context`
   * with the given `path` and optional initial `state`.
   *
   * @constructor
   * @param {string} path
   * @param {Object=} state
   * @api public
   */

  function Context(path, state) {
    if ('/' === path[0] && 0 !== path.indexOf(base)) path = base + (hashbang ? '#!' : '') + path;
    var i = path.indexOf('?');

    this.canonicalPath = path;
    this.path = path.replace(base, '') || '/';
    if (hashbang) this.path = this.path.replace('#!', '') || '/';

    this.title = document.title;
    this.state = state || {};
    this.state.path = path;
    this.querystring = ~i ? decodeURLEncodedURIComponent(path.slice(i + 1)) : '';
    this.pathname = decodeURLEncodedURIComponent(~i ? path.slice(0, i) : path);
    this.params = {};

    // fragment
    this.hash = '';
    if (!hashbang) {
      if (!~this.path.indexOf('#')) return;
      var parts = this.path.split('#');
      this.path = parts[0];
      this.hash = decodeURLEncodedURIComponent(parts[1]) || '';
      this.querystring = this.querystring.split('#')[0];
    }
  }

  /**
   * Expose `Context`.
   */

  page.Context = Context;

  /**
   * Push state.
   *
   * @api private
   */

  Context.prototype.pushState = function() {
    page.len++;
    history.pushState(this.state, this.title, hashbang && this.path !== '/' ? '#!' + this.path : this.canonicalPath);
  };

  /**
   * Save the context state.
   *
   * @api public
   */

  Context.prototype.save = function() {
    history.replaceState(this.state, this.title, hashbang && this.path !== '/' ? '#!' + this.path : this.canonicalPath);
  };

  /**
   * Initialize `Route` with the given HTTP `path`,
   * and an array of `callbacks` and `options`.
   *
   * Options:
   *
   *   - `sensitive`    enable case-sensitive routes
   *   - `strict`       enable strict matching for trailing slashes
   *
   * @constructor
   * @param {string} path
   * @param {Object=} options
   * @api private
   */

  function Route(path, options) {
    options = options || {};
    this.path = (path === '*') ? '(.*)' : path;
    this.method = 'GET';
    this.regexp = pathtoRegexp(this.path,
      this.keys = [],
      options);
  }

  /**
   * Expose `Route`.
   */

  page.Route = Route;

  /**
   * Return route middleware with
   * the given callback `fn()`.
   *
   * @param {Function} fn
   * @return {Function}
   * @api public
   */

  Route.prototype.middleware = function(fn) {
    var self = this;
    return function(ctx, next) {
      if (self.match(ctx.path, ctx.params)) return fn(ctx, next);
      next();
    };
  };

  /**
   * Check if this route matches `path`, if so
   * populate `params`.
   *
   * @param {string} path
   * @param {Object} params
   * @return {boolean}
   * @api private
   */

  Route.prototype.match = function(path, params) {
    var keys = this.keys,
      qsIndex = path.indexOf('?'),
      pathname = ~qsIndex ? path.slice(0, qsIndex) : path,
      m = this.regexp.exec(decodeURIComponent(pathname));

    if (!m) return false;

    for (var i = 1, len = m.length; i < len; ++i) {
      var key = keys[i - 1];
      var val = decodeURLEncodedURIComponent(m[i]);
      if (val !== undefined || !(hasOwnProperty.call(params, key.name))) {
        params[key.name] = val;
      }
    }

    return true;
  };


  /**
   * Handle "populate" events.
   */

  var onpopstate = (function () {
    var loaded = false;
    if ('undefined' === typeof window) {
      return;
    }
    if (document.readyState === 'complete') {
      loaded = true;
    } else {
      window.addEventListener('load', function() {
        setTimeout(function() {
          loaded = true;
        }, 0);
      });
    }
    return function onpopstate(e) {
      if (!loaded) return;
      if (e.state) {
        var path = e.state.path;
        page.replace(path, e.state);
      } else {
        page.show(location.pathname + location.hash, undefined, undefined, false);
      }
    };
  })();
  /**
   * Handle "click" events.
   */

  function onclick(e) {

    if (1 !== which(e)) return;

    if (e.metaKey || e.ctrlKey || e.shiftKey) return;
    if (e.defaultPrevented) return;



    // ensure link
    // use shadow dom when available
    var el = e.path ? e.path[0] : e.target;
    while (el && 'A' !== el.nodeName) el = el.parentNode;
    if (!el || 'A' !== el.nodeName) return;



    // Ignore if tag has
    // 1. "download" attribute
    // 2. rel="external" attribute
    if (el.hasAttribute('download') || el.getAttribute('rel') === 'external') return;

    // ensure non-hash for the same path
    var link = el.getAttribute('href');
    if (!hashbang && el.pathname === location.pathname && (el.hash || '#' === link)) return;



    // Check for mailto: in the href
    if (link && link.indexOf('mailto:') > -1) return;

    // check target
    if (el.target) return;

    // x-origin
    if (!sameOrigin(el.href)) return;



    // rebuild path
    var path = el.pathname + el.search + (el.hash || '');

    // strip leading "/[drive letter]:" on NW.js on Windows
    if (typeof process !== 'undefined' && path.match(/^\/[a-zA-Z]:\//)) {
      path = path.replace(/^\/[a-zA-Z]:\//, '/');
    }

    // same page
    var orig = path;

    if (path.indexOf(base) === 0) {
      path = path.substr(base.length);
    }

    if (hashbang) path = path.replace('#!', '');

    if (base && orig === path) return;

    e.preventDefault();
    page.show(orig);
  }

  /**
   * Event button.
   */

  function which(e) {
    e = e || window.event;
    return null === e.which ? e.button : e.which;
  }

  /**
   * Check if `href` is the same origin.
   */

  function sameOrigin(href) {
    var origin = location.protocol + '//' + location.hostname;
    if (location.port) origin += ':' + location.port;
    return (href && (0 === href.indexOf(origin)));
  }

  page.sameOrigin = sameOrigin;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)))

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

const $ = __webpack_require__(4);
const queryString = __webpack_require__(3);

const templates = {
	home: __webpack_require__(5),
	people: __webpack_require__(7),
	person: __webpack_require__(8),
	item: __webpack_require__(6)
};

const partials = {
	peopleList: __webpack_require__(9)
};

module.exports = function(data, xhr, page, apiQuery, renderTarget, queryValues) {

    let currentLabel = undefined;

    data = data.map((datum) => {
        if(datum.lastname_keyname === null ? currentLabel !== null : datum.lastname_keyname[0] !== currentLabel) {
            datum.header = datum.lastname_keyname === null ? 'Unknown' : datum.lastname_keyname[0];
            currentLabel = datum.lastname_keyname === null ? null : datum.lastname_keyname[0];
        }
        if(datum.firstname === null && datum.lastname_keyname === null) {
            datum.lastname_keyname = 'Unknown Name';
        }
        return datum;
    });

    document.getElementById('list-target').innerHTML = partials.peopleList({ people: data });

    if (data.length > 0) {
        $('#main-pagination').twbsPagination({
            totalPages: Math.ceil(parseInt(xhr.getResponseHeader('X-total-count'))/apiQuery.limit),
            visiblePages: 7,
            startPage: Math.floor(parseInt(apiQuery.offset)/parseInt(apiQuery.limit)) + 1,
            initiateStartPageClick: false,
            onPageClick: function (event, pageNum) {
                apiQuery.offset = (pageNum - 1) * apiQuery.limit;
                page.redirect('/?' + queryString.stringify(apiQuery));
            }
        });
    }    
}


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

const $ = __webpack_require__(4);
const queryString = __webpack_require__(3);

const partials = {
	peopleList: __webpack_require__(9),
    pubList: __webpack_require__(24)
};

module.exports = function(data, xhr, page, apiQuery, renderTarget, queryValues) {

    let currentLabel = undefined;

    data = data.map((datum) => {
        if(datum.title === null ? currentLabel !== null : datum.title[0] !== currentLabel) {
            datum.header = datum.title === null ? 'Unknown' : datum.title[0];
            currentLabel = datum.title === null ? null : datum.title[0];
        }
        if(datum.title === null && datum.title === null) {
            datum.title = 'Unknown Title';
        }
        return datum;
    });

    document.getElementById('list-target').innerHTML = partials.pubList({ pubs: data });

    if (data.length > 0) {
        $('#main-pagination').twbsPagination({
            totalPages: Math.ceil(parseInt(xhr.getResponseHeader('X-total-count'))/apiQuery.limit),
            visiblePages: 7,
            startPage: Math.floor(parseInt(apiQuery.offset)/parseInt(apiQuery.limit)) + 1,
            initiateStartPageClick: false,
            onPageClick: function (event, pageNum) {
                apiQuery.offset = (pageNum - 1) * apiQuery.limit;
                page.redirect('/publications/?' + queryString.stringify(apiQuery));
            }
        });
    }
}


/***/ },
/* 15 */
/***/ function(module, exports) {

var g;

// This works in non-strict mode
g = (function() { return this; })();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ },
/* 16 */
/***/ function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<div class='info'>\n    <span>Type: Article</span>\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.article : depth0)) != null ? stack1.article_subseries : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.article : depth0)) != null ? stack1.continuation_end : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.article : depth0)) != null ? stack1.continued_on : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.article : depth0)) != null ? stack1.start_page : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.article : depth0)) != null ? stack1.end_page : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.article : depth0)) != null ? stack1.illustrated : stack1),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.article : depth0)) != null ? stack1.notes : stack1),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<span>Article subseries: "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.core : depth0)) != null ? stack1.article_subseries : stack1), depth0))
    + "</span>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<span>Continuation end: "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.article : depth0)) != null ? stack1.continuation_end : stack1), depth0))
    + "</span>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<span>Continued on: "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.article : depth0)) != null ? stack1.continued_on : stack1), depth0))
    + "</span>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<span>Start page: "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.article : depth0)) != null ? stack1.start_page : stack1), depth0))
    + "</span>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<span>End page: "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.article : depth0)) != null ? stack1.end_page : stack1), depth0))
    + "</span>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<span>Illustrated: "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.article : depth0)) != null ? stack1.illustrated : stack1), depth0))
    + "</span>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<span>Notes: "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.article : depth0)) != null ? stack1.notes : stack1), depth0))
    + "</span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.article : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<div class='info'>\n    <span>Type: Book</span>\n  \n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.book : depth0)) != null ? stack1.number_of_volumes : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.book : depth0)) != null ? stack1.number_of_pages : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.book : depth0)) != null ? stack1.known_reprints : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.book : depth0)) != null ? stack1.illustrated : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.book : depth0)) != null ? stack1.notes : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<span>Number of volumes: "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.book : depth0)) != null ? stack1.number_of_volumes : stack1), depth0))
    + "</span>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<span>Number of pages: "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.book : depth0)) != null ? stack1.number_of_pages : stack1), depth0))
    + "</span>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<span>Known reprints: "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.book : depth0)) != null ? stack1.known_reprints : stack1), depth0))
    + "</span>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<span>Illustrated: "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.book : depth0)) != null ? stack1.illustrated : stack1), depth0))
    + "</span>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<span>Notes: "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.book : depth0)) != null ? stack1.notes : stack1), depth0))
    + "</span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.book : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<div class='info'>\n    <span>Type: Journal Edition</span>\n  \n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.journalEdition : depth0)) != null ? stack1.season : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.journalEdition : depth0)) != null ? stack1.from_year : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.journalEdition : depth0)) != null ? stack1.to_year : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.journalEdition : depth0)) != null ? stack1.edition_subseries : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.journalEdition : depth0)) != null ? stack1.notes : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<span>Season: "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.journalEdition : depth0)) != null ? stack1.season : stack1), depth0))
    + "</span>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "		<span>From: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.journalEdition : depth0)) != null ? stack1.from_month : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.journalEdition : depth0)) != null ? stack1.from_year : stack1), depth0))
    + "</span>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "		<span>To: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.journalEdition : depth0)) != null ? stack1.to_year : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.journalEdition : depth0)) != null ? stack1.to_year : stack1), depth0))
    + "</span>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<span>Edition subseries: "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.journalEdition : depth0)) != null ? stack1.edition_subseries : stack1), depth0))
    + "</span>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<span>Notes: "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.journalEdition : depth0)) != null ? stack1.notes : stack1), depth0))
    + "</span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.journalEdition : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<div class='info'>\n    <span>Type: Movie</span>\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.movie : depth0)) != null ? stack1.country_of_origin : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.movie : depth0)) != null ? stack1.date_dvd : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.movie : depth0)) != null ? stack1.date_video : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.movie : depth0)) != null ? stack1.length_minutes : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.movie : depth0)) != null ? stack1.notes : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "		<span>Country of origin: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.movie : depth0)) != null ? stack1.country_of_origin : stack1), depth0))
    + " | "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.movie : depth0)) != null ? stack1.country_of_origin2 : stack1), depth0))
    + " | "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.movie : depth0)) != null ? stack1.country_of_origin3 : stack1), depth0))
    + "</span>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<span>Date of dvd release: "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.movie : depth0)) != null ? stack1.date_dvd : stack1), depth0))
    + "</span>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<span>Date of video release: "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.movie : depth0)) != null ? stack1.date_video : stack1), depth0))
    + "</span>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <span>Length (minutes): "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.movie : depth0)) != null ? stack1.length_minutes : stack1), depth0))
    + "</span>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<span>Notes: "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.movie : depth0)) != null ? stack1.notes : stack1), depth0))
    + "</span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.movie : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<div class='info'>\n    <span>Type: Play</span>\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.play : depth0)) != null ? stack1.place_of_first_production_country : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.play : depth0)) != null ? stack1.place_of_first_revival_country : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.play : depth0)) != null ? stack1.first_revival_year : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.play : depth0)) != null ? stack1.theatre_company : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.play : depth0)) != null ? stack1.venue : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.play : depth0)) != null ? stack1.notes : stack1),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "			<span>Place of first production: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.play : depth0)) != null ? stack1.place_of_first_production_country : stack1), depth0))
    + " | "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.play : depth0)) != null ? stack1.place_of_first_production_county : stack1), depth0))
    + " | "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.play : depth0)) != null ? stack1.place_of_first_production_settlement : stack1), depth0))
    + "</span>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "			<span>Place of first revival: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.play : depth0)) != null ? stack1.place_of_first_revival_country : stack1), depth0))
    + " | "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.play : depth0)) != null ? stack1.place_of_first_revival_county : stack1), depth0))
    + " | "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.play : depth0)) != null ? stack1.place_of_first_revival_settlement : stack1), depth0))
    + "</span>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "			<span>From: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.play : depth0)) != null ? stack1.first_revival_day : stack1), depth0))
    + "/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.play : depth0)) != null ? stack1.first_revival_month : stack1), depth0))
    + "/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.play : depth0)) != null ? stack1.first_revival_year : stack1), depth0))
    + "</span>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "			<span>Theatre company: "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.play : depth0)) != null ? stack1.theatre_company : stack1), depth0))
    + "</span>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "			<span>Revival Venue: "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.play : depth0)) != null ? stack1.venue : stack1), depth0))
    + "</span>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "			<span>Notes: "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.play : depth0)) != null ? stack1.notes : stack1), depth0))
    + "</span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.play : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.header : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <li style='margin-left: 0.5em;'><a href='#!/publications/"
    + alias4(((helper = (helper = helpers.DB_id || (depth0 != null ? depth0.DB_id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"DB_id","hash":{},"data":data}) : helper)))
    + "'>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</a></li>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <li><h5 style='background-color: #007082;; color: white; padding: 0.2em;'>"
    + container.escapeExpression(((helper = (helper = helpers.header || (depth0 != null ? depth0.header : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"header","hash":{},"data":data}) : helper)))
    + "</h5></li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<ul class=\"pagination\" id=\"main-pagination\"></ul>\n<ul id='people-list' style='column-width: 20em; list-style: none; padding: 0;'>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.pubs : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\n<ul class=\"pagination\" id=\"main-pagination\"></ul>\n";
},"useData":true});

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// istanbul ignore next

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _handlebarsBase = __webpack_require__(10);

var base = _interopRequireWildcard(_handlebarsBase);

// Each of these augment the Handlebars object. No need to setup here.
// (This is done to easily share code between commonjs and browse envs)

var _handlebarsSafeString = __webpack_require__(39);

var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);

var _handlebarsException = __webpack_require__(2);

var _handlebarsException2 = _interopRequireDefault(_handlebarsException);

var _handlebarsUtils = __webpack_require__(1);

var Utils = _interopRequireWildcard(_handlebarsUtils);

var _handlebarsRuntime = __webpack_require__(38);

var runtime = _interopRequireWildcard(_handlebarsRuntime);

var _handlebarsNoConflict = __webpack_require__(37);

var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

// For compatibility and usage outside of module systems, make the Handlebars object a namespace
function create() {
  var hb = new base.HandlebarsEnvironment();

  Utils.extend(hb, base);
  hb.SafeString = _handlebarsSafeString2['default'];
  hb.Exception = _handlebarsException2['default'];
  hb.Utils = Utils;
  hb.escapeExpression = Utils.escapeExpression;

  hb.VM = runtime;
  hb.template = function (spec) {
    return runtime.template(spec, hb);
  };

  return hb;
}

var inst = create();
inst.create = create;

_handlebarsNoConflict2['default'](inst);

inst['default'] = inst;

exports['default'] = inst;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9oYW5kbGViYXJzLnJ1bnRpbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OEJBQXNCLG1CQUFtQjs7SUFBN0IsSUFBSTs7Ozs7b0NBSU8sMEJBQTBCOzs7O21DQUMzQix3QkFBd0I7Ozs7K0JBQ3ZCLG9CQUFvQjs7SUFBL0IsS0FBSzs7aUNBQ1Esc0JBQXNCOztJQUFuQyxPQUFPOztvQ0FFSSwwQkFBMEI7Ozs7O0FBR2pELFNBQVMsTUFBTSxHQUFHO0FBQ2hCLE1BQUksRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7O0FBRTFDLE9BQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3ZCLElBQUUsQ0FBQyxVQUFVLG9DQUFhLENBQUM7QUFDM0IsSUFBRSxDQUFDLFNBQVMsbUNBQVksQ0FBQztBQUN6QixJQUFFLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUNqQixJQUFFLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDOztBQUU3QyxJQUFFLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQztBQUNoQixJQUFFLENBQUMsUUFBUSxHQUFHLFVBQVMsSUFBSSxFQUFFO0FBQzNCLFdBQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7R0FDbkMsQ0FBQzs7QUFFRixTQUFPLEVBQUUsQ0FBQztDQUNYOztBQUVELElBQUksSUFBSSxHQUFHLE1BQU0sRUFBRSxDQUFDO0FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDOztBQUVyQixrQ0FBVyxJQUFJLENBQUMsQ0FBQzs7QUFFakIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQzs7cUJBRVIsSUFBSSIsImZpbGUiOiJoYW5kbGViYXJzLnJ1bnRpbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBiYXNlIGZyb20gJy4vaGFuZGxlYmFycy9iYXNlJztcblxuLy8gRWFjaCBvZiB0aGVzZSBhdWdtZW50IHRoZSBIYW5kbGViYXJzIG9iamVjdC4gTm8gbmVlZCB0byBzZXR1cCBoZXJlLlxuLy8gKFRoaXMgaXMgZG9uZSB0byBlYXNpbHkgc2hhcmUgY29kZSBiZXR3ZWVuIGNvbW1vbmpzIGFuZCBicm93c2UgZW52cylcbmltcG9ydCBTYWZlU3RyaW5nIGZyb20gJy4vaGFuZGxlYmFycy9zYWZlLXN0cmluZyc7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gJy4vaGFuZGxlYmFycy9leGNlcHRpb24nO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnLi9oYW5kbGViYXJzL3V0aWxzJztcbmltcG9ydCAqIGFzIHJ1bnRpbWUgZnJvbSAnLi9oYW5kbGViYXJzL3J1bnRpbWUnO1xuXG5pbXBvcnQgbm9Db25mbGljdCBmcm9tICcuL2hhbmRsZWJhcnMvbm8tY29uZmxpY3QnO1xuXG4vLyBGb3IgY29tcGF0aWJpbGl0eSBhbmQgdXNhZ2Ugb3V0c2lkZSBvZiBtb2R1bGUgc3lzdGVtcywgbWFrZSB0aGUgSGFuZGxlYmFycyBvYmplY3QgYSBuYW1lc3BhY2VcbmZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgbGV0IGhiID0gbmV3IGJhc2UuSGFuZGxlYmFyc0Vudmlyb25tZW50KCk7XG5cbiAgVXRpbHMuZXh0ZW5kKGhiLCBiYXNlKTtcbiAgaGIuU2FmZVN0cmluZyA9IFNhZmVTdHJpbmc7XG4gIGhiLkV4Y2VwdGlvbiA9IEV4Y2VwdGlvbjtcbiAgaGIuVXRpbHMgPSBVdGlscztcbiAgaGIuZXNjYXBlRXhwcmVzc2lvbiA9IFV0aWxzLmVzY2FwZUV4cHJlc3Npb247XG5cbiAgaGIuVk0gPSBydW50aW1lO1xuICBoYi50ZW1wbGF0ZSA9IGZ1bmN0aW9uKHNwZWMpIHtcbiAgICByZXR1cm4gcnVudGltZS50ZW1wbGF0ZShzcGVjLCBoYik7XG4gIH07XG5cbiAgcmV0dXJuIGhiO1xufVxuXG5sZXQgaW5zdCA9IGNyZWF0ZSgpO1xuaW5zdC5jcmVhdGUgPSBjcmVhdGU7XG5cbm5vQ29uZmxpY3QoaW5zdCk7XG5cbmluc3RbJ2RlZmF1bHQnXSA9IGluc3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3Q7XG4iXX0=


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.registerDefaultDecorators = registerDefaultDecorators;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _decoratorsInline = __webpack_require__(27);

var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);

function registerDefaultDecorators(instance) {
  _decoratorsInline2['default'](instance);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2RlY29yYXRvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Z0NBQTJCLHFCQUFxQjs7OztBQUV6QyxTQUFTLHlCQUF5QixDQUFDLFFBQVEsRUFBRTtBQUNsRCxnQ0FBZSxRQUFRLENBQUMsQ0FBQztDQUMxQiIsImZpbGUiOiJkZWNvcmF0b3JzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlZ2lzdGVySW5saW5lIGZyb20gJy4vZGVjb3JhdG9ycy9pbmxpbmUnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJEZWZhdWx0RGVjb3JhdG9ycyhpbnN0YW5jZSkge1xuICByZWdpc3RlcklubGluZShpbnN0YW5jZSk7XG59XG5cbiJdfQ==


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(1);

exports['default'] = function (instance) {
  instance.registerDecorator('inline', function (fn, props, container, options) {
    var ret = fn;
    if (!props.partials) {
      props.partials = {};
      ret = function (context, options) {
        // Create a new partials stack frame prior to exec.
        var original = container.partials;
        container.partials = _utils.extend({}, original, props.partials);
        var ret = fn(context, options);
        container.partials = original;
        return ret;
      };
    }

    props.partials[options.args[0]] = options.fn;

    return ret;
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2RlY29yYXRvcnMvaW5saW5lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQXFCLFVBQVU7O3FCQUVoQixVQUFTLFFBQVEsRUFBRTtBQUNoQyxVQUFRLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLFVBQVMsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFO0FBQzNFLFFBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUNiLFFBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO0FBQ25CLFdBQUssQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ3BCLFNBQUcsR0FBRyxVQUFTLE9BQU8sRUFBRSxPQUFPLEVBQUU7O0FBRS9CLFlBQUksUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUM7QUFDbEMsaUJBQVMsQ0FBQyxRQUFRLEdBQUcsY0FBTyxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMxRCxZQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQy9CLGlCQUFTLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUM5QixlQUFPLEdBQUcsQ0FBQztPQUNaLENBQUM7S0FDSDs7QUFFRCxTQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDOztBQUU3QyxXQUFPLEdBQUcsQ0FBQztHQUNaLENBQUMsQ0FBQztDQUNKIiwiZmlsZSI6ImlubGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZXh0ZW5kfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVyRGVjb3JhdG9yKCdpbmxpbmUnLCBmdW5jdGlvbihmbiwgcHJvcHMsIGNvbnRhaW5lciwgb3B0aW9ucykge1xuICAgIGxldCByZXQgPSBmbjtcbiAgICBpZiAoIXByb3BzLnBhcnRpYWxzKSB7XG4gICAgICBwcm9wcy5wYXJ0aWFscyA9IHt9O1xuICAgICAgcmV0ID0gZnVuY3Rpb24oY29udGV4dCwgb3B0aW9ucykge1xuICAgICAgICAvLyBDcmVhdGUgYSBuZXcgcGFydGlhbHMgc3RhY2sgZnJhbWUgcHJpb3IgdG8gZXhlYy5cbiAgICAgICAgbGV0IG9yaWdpbmFsID0gY29udGFpbmVyLnBhcnRpYWxzO1xuICAgICAgICBjb250YWluZXIucGFydGlhbHMgPSBleHRlbmQoe30sIG9yaWdpbmFsLCBwcm9wcy5wYXJ0aWFscyk7XG4gICAgICAgIGxldCByZXQgPSBmbihjb250ZXh0LCBvcHRpb25zKTtcbiAgICAgICAgY29udGFpbmVyLnBhcnRpYWxzID0gb3JpZ2luYWw7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHByb3BzLnBhcnRpYWxzW29wdGlvbnMuYXJnc1swXV0gPSBvcHRpb25zLmZuO1xuXG4gICAgcmV0dXJuIHJldDtcbiAgfSk7XG59XG4iXX0=


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.registerDefaultHelpers = registerDefaultHelpers;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersBlockHelperMissing = __webpack_require__(29);

var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);

var _helpersEach = __webpack_require__(30);

var _helpersEach2 = _interopRequireDefault(_helpersEach);

var _helpersHelperMissing = __webpack_require__(31);

var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);

var _helpersIf = __webpack_require__(32);

var _helpersIf2 = _interopRequireDefault(_helpersIf);

var _helpersLog = __webpack_require__(33);

var _helpersLog2 = _interopRequireDefault(_helpersLog);

var _helpersLookup = __webpack_require__(34);

var _helpersLookup2 = _interopRequireDefault(_helpersLookup);

var _helpersWith = __webpack_require__(35);

var _helpersWith2 = _interopRequireDefault(_helpersWith);

function registerDefaultHelpers(instance) {
  _helpersBlockHelperMissing2['default'](instance);
  _helpersEach2['default'](instance);
  _helpersHelperMissing2['default'](instance);
  _helpersIf2['default'](instance);
  _helpersLog2['default'](instance);
  _helpersLookup2['default'](instance);
  _helpersWith2['default'](instance);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7eUNBQXVDLGdDQUFnQzs7OzsyQkFDOUMsZ0JBQWdCOzs7O29DQUNQLDBCQUEwQjs7Ozt5QkFDckMsY0FBYzs7OzswQkFDYixlQUFlOzs7OzZCQUNaLGtCQUFrQjs7OzsyQkFDcEIsZ0JBQWdCOzs7O0FBRWxDLFNBQVMsc0JBQXNCLENBQUMsUUFBUSxFQUFFO0FBQy9DLHlDQUEyQixRQUFRLENBQUMsQ0FBQztBQUNyQywyQkFBYSxRQUFRLENBQUMsQ0FBQztBQUN2QixvQ0FBc0IsUUFBUSxDQUFDLENBQUM7QUFDaEMseUJBQVcsUUFBUSxDQUFDLENBQUM7QUFDckIsMEJBQVksUUFBUSxDQUFDLENBQUM7QUFDdEIsNkJBQWUsUUFBUSxDQUFDLENBQUM7QUFDekIsMkJBQWEsUUFBUSxDQUFDLENBQUM7Q0FDeEIiLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWdpc3RlckJsb2NrSGVscGVyTWlzc2luZyBmcm9tICcuL2hlbHBlcnMvYmxvY2staGVscGVyLW1pc3NpbmcnO1xuaW1wb3J0IHJlZ2lzdGVyRWFjaCBmcm9tICcuL2hlbHBlcnMvZWFjaCc7XG5pbXBvcnQgcmVnaXN0ZXJIZWxwZXJNaXNzaW5nIGZyb20gJy4vaGVscGVycy9oZWxwZXItbWlzc2luZyc7XG5pbXBvcnQgcmVnaXN0ZXJJZiBmcm9tICcuL2hlbHBlcnMvaWYnO1xuaW1wb3J0IHJlZ2lzdGVyTG9nIGZyb20gJy4vaGVscGVycy9sb2cnO1xuaW1wb3J0IHJlZ2lzdGVyTG9va3VwIGZyb20gJy4vaGVscGVycy9sb29rdXAnO1xuaW1wb3J0IHJlZ2lzdGVyV2l0aCBmcm9tICcuL2hlbHBlcnMvd2l0aCc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckRlZmF1bHRIZWxwZXJzKGluc3RhbmNlKSB7XG4gIHJlZ2lzdGVyQmxvY2tIZWxwZXJNaXNzaW5nKGluc3RhbmNlKTtcbiAgcmVnaXN0ZXJFYWNoKGluc3RhbmNlKTtcbiAgcmVnaXN0ZXJIZWxwZXJNaXNzaW5nKGluc3RhbmNlKTtcbiAgcmVnaXN0ZXJJZihpbnN0YW5jZSk7XG4gIHJlZ2lzdGVyTG9nKGluc3RhbmNlKTtcbiAgcmVnaXN0ZXJMb29rdXAoaW5zdGFuY2UpO1xuICByZWdpc3RlcldpdGgoaW5zdGFuY2UpO1xufVxuIl19


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(1);

exports['default'] = function (instance) {
  instance.registerHelper('blockHelperMissing', function (context, options) {
    var inverse = options.inverse,
        fn = options.fn;

    if (context === true) {
      return fn(this);
    } else if (context === false || context == null) {
      return inverse(this);
    } else if (_utils.isArray(context)) {
      if (context.length > 0) {
        if (options.ids) {
          options.ids = [options.name];
        }

        return instance.helpers.each(context, options);
      } else {
        return inverse(this);
      }
    } else {
      if (options.data && options.ids) {
        var data = _utils.createFrame(options.data);
        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
        options = { data: data };
      }

      return fn(context, options);
    }
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvYmxvY2staGVscGVyLW1pc3NpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztxQkFBc0QsVUFBVTs7cUJBRWpELFVBQVMsUUFBUSxFQUFFO0FBQ2hDLFVBQVEsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLEVBQUUsVUFBUyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ3ZFLFFBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPO1FBQ3pCLEVBQUUsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDOztBQUVwQixRQUFJLE9BQU8sS0FBSyxJQUFJLEVBQUU7QUFDcEIsYUFBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDakIsTUFBTSxJQUFJLE9BQU8sS0FBSyxLQUFLLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtBQUMvQyxhQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN0QixNQUFNLElBQUksZUFBUSxPQUFPLENBQUMsRUFBRTtBQUMzQixVQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQ3RCLFlBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUNmLGlCQUFPLENBQUMsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlCOztBQUVELGVBQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO09BQ2hELE1BQU07QUFDTCxlQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztPQUN0QjtLQUNGLE1BQU07QUFDTCxVQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUMvQixZQUFJLElBQUksR0FBRyxtQkFBWSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckMsWUFBSSxDQUFDLFdBQVcsR0FBRyx5QkFBa0IsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzdFLGVBQU8sR0FBRyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUMsQ0FBQztPQUN4Qjs7QUFFRCxhQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDN0I7R0FDRixDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJibG9jay1oZWxwZXItbWlzc2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXBwZW5kQ29udGV4dFBhdGgsIGNyZWF0ZUZyYW1lLCBpc0FycmF5fSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdibG9ja0hlbHBlck1pc3NpbmcnLCBmdW5jdGlvbihjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgbGV0IGludmVyc2UgPSBvcHRpb25zLmludmVyc2UsXG4gICAgICAgIGZuID0gb3B0aW9ucy5mbjtcblxuICAgIGlmIChjb250ZXh0ID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gZm4odGhpcyk7XG4gICAgfSBlbHNlIGlmIChjb250ZXh0ID09PSBmYWxzZSB8fCBjb250ZXh0ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBpbnZlcnNlKHRoaXMpO1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheShjb250ZXh0KSkge1xuICAgICAgaWYgKGNvbnRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAob3B0aW9ucy5pZHMpIHtcbiAgICAgICAgICBvcHRpb25zLmlkcyA9IFtvcHRpb25zLm5hbWVdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLmhlbHBlcnMuZWFjaChjb250ZXh0LCBvcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpbnZlcnNlKHRoaXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG4gICAgICAgIGxldCBkYXRhID0gY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgZGF0YS5jb250ZXh0UGF0aCA9IGFwcGVuZENvbnRleHRQYXRoKG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCwgb3B0aW9ucy5uYW1lKTtcbiAgICAgICAgb3B0aW9ucyA9IHtkYXRhOiBkYXRhfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZuKGNvbnRleHQsIG9wdGlvbnMpO1xuICAgIH1cbiAgfSk7XG59XG4iXX0=


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = __webpack_require__(1);

var _exception = __webpack_require__(2);

var _exception2 = _interopRequireDefault(_exception);

exports['default'] = function (instance) {
  instance.registerHelper('each', function (context, options) {
    if (!options) {
      throw new _exception2['default']('Must pass iterator to #each');
    }

    var fn = options.fn,
        inverse = options.inverse,
        i = 0,
        ret = '',
        data = undefined,
        contextPath = undefined;

    if (options.data && options.ids) {
      contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
    }

    if (_utils.isFunction(context)) {
      context = context.call(this);
    }

    if (options.data) {
      data = _utils.createFrame(options.data);
    }

    function execIteration(field, index, last) {
      if (data) {
        data.key = field;
        data.index = index;
        data.first = index === 0;
        data.last = !!last;

        if (contextPath) {
          data.contextPath = contextPath + field;
        }
      }

      ret = ret + fn(context[field], {
        data: data,
        blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
      });
    }

    if (context && typeof context === 'object') {
      if (_utils.isArray(context)) {
        for (var j = context.length; i < j; i++) {
          if (i in context) {
            execIteration(i, i, i === context.length - 1);
          }
        }
      } else {
        var priorKey = undefined;

        for (var key in context) {
          if (context.hasOwnProperty(key)) {
            // We're running the iterations one step out of sync so we can detect
            // the last iteration without have to scan the object twice and create
            // an itermediate keys array.
            if (priorKey !== undefined) {
              execIteration(priorKey, i - 1);
            }
            priorKey = key;
            i++;
          }
        }
        if (priorKey !== undefined) {
          execIteration(priorKey, i - 1, true);
        }
      }
    }

    if (i === 0) {
      ret = inverse(this);
    }

    return ret;
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvZWFjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O3FCQUErRSxVQUFVOzt5QkFDbkUsY0FBYzs7OztxQkFFckIsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsVUFBUyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ3pELFFBQUksQ0FBQyxPQUFPLEVBQUU7QUFDWixZQUFNLDJCQUFjLDZCQUE2QixDQUFDLENBQUM7S0FDcEQ7O0FBRUQsUUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLEVBQUU7UUFDZixPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU87UUFDekIsQ0FBQyxHQUFHLENBQUM7UUFDTCxHQUFHLEdBQUcsRUFBRTtRQUNSLElBQUksWUFBQTtRQUNKLFdBQVcsWUFBQSxDQUFDOztBQUVoQixRQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUMvQixpQkFBVyxHQUFHLHlCQUFrQixPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0tBQ2pGOztBQUVELFFBQUksa0JBQVcsT0FBTyxDQUFDLEVBQUU7QUFBRSxhQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUFFOztBQUUxRCxRQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUU7QUFDaEIsVUFBSSxHQUFHLG1CQUFZLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNsQzs7QUFFRCxhQUFTLGFBQWEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtBQUN6QyxVQUFJLElBQUksRUFBRTtBQUNSLFlBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO0FBQ2pCLFlBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ25CLFlBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxLQUFLLENBQUMsQ0FBQztBQUN6QixZQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7O0FBRW5CLFlBQUksV0FBVyxFQUFFO0FBQ2YsY0FBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLEdBQUcsS0FBSyxDQUFDO1NBQ3hDO09BQ0Y7O0FBRUQsU0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQzdCLFlBQUksRUFBRSxJQUFJO0FBQ1YsbUJBQVcsRUFBRSxtQkFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLFdBQVcsR0FBRyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7T0FDL0UsQ0FBQyxDQUFDO0tBQ0o7O0FBRUQsUUFBSSxPQUFPLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO0FBQzFDLFVBQUksZUFBUSxPQUFPLENBQUMsRUFBRTtBQUNwQixhQUFLLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN2QyxjQUFJLENBQUMsSUFBSSxPQUFPLEVBQUU7QUFDaEIseUJBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1dBQy9DO1NBQ0Y7T0FDRixNQUFNO0FBQ0wsWUFBSSxRQUFRLFlBQUEsQ0FBQzs7QUFFYixhQUFLLElBQUksR0FBRyxJQUFJLE9BQU8sRUFBRTtBQUN2QixjQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7Ozs7QUFJL0IsZ0JBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtBQUMxQiwyQkFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDaEM7QUFDRCxvQkFBUSxHQUFHLEdBQUcsQ0FBQztBQUNmLGFBQUMsRUFBRSxDQUFDO1dBQ0w7U0FDRjtBQUNELFlBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtBQUMxQix1QkFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3RDO09BQ0Y7S0FDRjs7QUFFRCxRQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDWCxTQUFHLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3JCOztBQUVELFdBQU8sR0FBRyxDQUFDO0dBQ1osQ0FBQyxDQUFDO0NBQ0oiLCJmaWxlIjoiZWFjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXBwZW5kQ29udGV4dFBhdGgsIGJsb2NrUGFyYW1zLCBjcmVhdGVGcmFtZSwgaXNBcnJheSwgaXNGdW5jdGlvbn0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tICcuLi9leGNlcHRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignZWFjaCcsIGZ1bmN0aW9uKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ011c3QgcGFzcyBpdGVyYXRvciB0byAjZWFjaCcpO1xuICAgIH1cblxuICAgIGxldCBmbiA9IG9wdGlvbnMuZm4sXG4gICAgICAgIGludmVyc2UgPSBvcHRpb25zLmludmVyc2UsXG4gICAgICAgIGkgPSAwLFxuICAgICAgICByZXQgPSAnJyxcbiAgICAgICAgZGF0YSxcbiAgICAgICAgY29udGV4dFBhdGg7XG5cbiAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG4gICAgICBjb250ZXh0UGF0aCA9IGFwcGVuZENvbnRleHRQYXRoKG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCwgb3B0aW9ucy5pZHNbMF0pICsgJy4nO1xuICAgIH1cblxuICAgIGlmIChpc0Z1bmN0aW9uKGNvbnRleHQpKSB7IGNvbnRleHQgPSBjb250ZXh0LmNhbGwodGhpcyk7IH1cblxuICAgIGlmIChvcHRpb25zLmRhdGEpIHtcbiAgICAgIGRhdGEgPSBjcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGV4ZWNJdGVyYXRpb24oZmllbGQsIGluZGV4LCBsYXN0KSB7XG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICBkYXRhLmtleSA9IGZpZWxkO1xuICAgICAgICBkYXRhLmluZGV4ID0gaW5kZXg7XG4gICAgICAgIGRhdGEuZmlyc3QgPSBpbmRleCA9PT0gMDtcbiAgICAgICAgZGF0YS5sYXN0ID0gISFsYXN0O1xuXG4gICAgICAgIGlmIChjb250ZXh0UGF0aCkge1xuICAgICAgICAgIGRhdGEuY29udGV4dFBhdGggPSBjb250ZXh0UGF0aCArIGZpZWxkO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldCA9IHJldCArIGZuKGNvbnRleHRbZmllbGRdLCB7XG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIGJsb2NrUGFyYW1zOiBibG9ja1BhcmFtcyhbY29udGV4dFtmaWVsZF0sIGZpZWxkXSwgW2NvbnRleHRQYXRoICsgZmllbGQsIG51bGxdKVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbnRleHQgJiYgdHlwZW9mIGNvbnRleHQgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAoaXNBcnJheShjb250ZXh0KSkge1xuICAgICAgICBmb3IgKGxldCBqID0gY29udGV4dC5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAgICAgICBpZiAoaSBpbiBjb250ZXh0KSB7XG4gICAgICAgICAgICBleGVjSXRlcmF0aW9uKGksIGksIGkgPT09IGNvbnRleHQubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgcHJpb3JLZXk7XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIGNvbnRleHQpIHtcbiAgICAgICAgICBpZiAoY29udGV4dC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAvLyBXZSdyZSBydW5uaW5nIHRoZSBpdGVyYXRpb25zIG9uZSBzdGVwIG91dCBvZiBzeW5jIHNvIHdlIGNhbiBkZXRlY3RcbiAgICAgICAgICAgIC8vIHRoZSBsYXN0IGl0ZXJhdGlvbiB3aXRob3V0IGhhdmUgdG8gc2NhbiB0aGUgb2JqZWN0IHR3aWNlIGFuZCBjcmVhdGVcbiAgICAgICAgICAgIC8vIGFuIGl0ZXJtZWRpYXRlIGtleXMgYXJyYXkuXG4gICAgICAgICAgICBpZiAocHJpb3JLZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBleGVjSXRlcmF0aW9uKHByaW9yS2V5LCBpIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcmlvcktleSA9IGtleTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByaW9yS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBleGVjSXRlcmF0aW9uKHByaW9yS2V5LCBpIC0gMSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgcmV0ID0gaW52ZXJzZSh0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuICB9KTtcbn1cbiJdfQ==


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _exception = __webpack_require__(2);

var _exception2 = _interopRequireDefault(_exception);

exports['default'] = function (instance) {
  instance.registerHelper('helperMissing', function () /* [args, ]options */{
    if (arguments.length === 1) {
      // A missing field in a {{foo}} construct.
      return undefined;
    } else {
      // Someone is actually trying to call something, blow up.
      throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
    }
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvaGVscGVyLW1pc3NpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozt5QkFBc0IsY0FBYzs7OztxQkFFckIsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLEVBQUUsaUNBQWdDO0FBQ3ZFLFFBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7O0FBRTFCLGFBQU8sU0FBUyxDQUFDO0tBQ2xCLE1BQU07O0FBRUwsWUFBTSwyQkFBYyxtQkFBbUIsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7S0FDdkY7R0FDRixDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJoZWxwZXItbWlzc2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeGNlcHRpb24gZnJvbSAnLi4vZXhjZXB0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2hlbHBlck1pc3NpbmcnLCBmdW5jdGlvbigvKiBbYXJncywgXW9wdGlvbnMgKi8pIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgLy8gQSBtaXNzaW5nIGZpZWxkIGluIGEge3tmb299fSBjb25zdHJ1Y3QuXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTb21lb25lIGlzIGFjdHVhbGx5IHRyeWluZyB0byBjYWxsIHNvbWV0aGluZywgYmxvdyB1cC5cbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ01pc3NpbmcgaGVscGVyOiBcIicgKyBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdLm5hbWUgKyAnXCInKTtcbiAgICB9XG4gIH0pO1xufVxuIl19


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(1);

exports['default'] = function (instance) {
  instance.registerHelper('if', function (conditional, options) {
    if (_utils.isFunction(conditional)) {
      conditional = conditional.call(this);
    }

    // Default behavior is to render the positive path if the value is truthy and not empty.
    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
      return options.inverse(this);
    } else {
      return options.fn(this);
    }
  });

  instance.registerHelper('unless', function (conditional, options) {
    return instance.helpers['if'].call(this, conditional, { fn: options.inverse, inverse: options.fn, hash: options.hash });
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvaWYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztxQkFBa0MsVUFBVTs7cUJBRTdCLFVBQVMsUUFBUSxFQUFFO0FBQ2hDLFVBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFVBQVMsV0FBVyxFQUFFLE9BQU8sRUFBRTtBQUMzRCxRQUFJLGtCQUFXLFdBQVcsQ0FBQyxFQUFFO0FBQUUsaUJBQVcsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQUU7Ozs7O0FBS3RFLFFBQUksQUFBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsV0FBVyxJQUFLLGVBQVEsV0FBVyxDQUFDLEVBQUU7QUFDdkUsYUFBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzlCLE1BQU07QUFDTCxhQUFPLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDekI7R0FDRixDQUFDLENBQUM7O0FBRUgsVUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsVUFBUyxXQUFXLEVBQUUsT0FBTyxFQUFFO0FBQy9ELFdBQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxFQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztHQUN2SCxDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJpZi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXNFbXB0eSwgaXNGdW5jdGlvbn0gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignaWYnLCBmdW5jdGlvbihjb25kaXRpb25hbCwgb3B0aW9ucykge1xuICAgIGlmIChpc0Z1bmN0aW9uKGNvbmRpdGlvbmFsKSkgeyBjb25kaXRpb25hbCA9IGNvbmRpdGlvbmFsLmNhbGwodGhpcyk7IH1cblxuICAgIC8vIERlZmF1bHQgYmVoYXZpb3IgaXMgdG8gcmVuZGVyIHRoZSBwb3NpdGl2ZSBwYXRoIGlmIHRoZSB2YWx1ZSBpcyB0cnV0aHkgYW5kIG5vdCBlbXB0eS5cbiAgICAvLyBUaGUgYGluY2x1ZGVaZXJvYCBvcHRpb24gbWF5IGJlIHNldCB0byB0cmVhdCB0aGUgY29uZHRpb25hbCBhcyBwdXJlbHkgbm90IGVtcHR5IGJhc2VkIG9uIHRoZVxuICAgIC8vIGJlaGF2aW9yIG9mIGlzRW1wdHkuIEVmZmVjdGl2ZWx5IHRoaXMgZGV0ZXJtaW5lcyBpZiAwIGlzIGhhbmRsZWQgYnkgdGhlIHBvc2l0aXZlIHBhdGggb3IgbmVnYXRpdmUuXG4gICAgaWYgKCghb3B0aW9ucy5oYXNoLmluY2x1ZGVaZXJvICYmICFjb25kaXRpb25hbCkgfHwgaXNFbXB0eShjb25kaXRpb25hbCkpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmludmVyc2UodGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmZuKHRoaXMpO1xuICAgIH1cbiAgfSk7XG5cbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ3VubGVzcycsIGZ1bmN0aW9uKGNvbmRpdGlvbmFsLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlLmhlbHBlcnNbJ2lmJ10uY2FsbCh0aGlzLCBjb25kaXRpb25hbCwge2ZuOiBvcHRpb25zLmludmVyc2UsIGludmVyc2U6IG9wdGlvbnMuZm4sIGhhc2g6IG9wdGlvbnMuaGFzaH0pO1xuICB9KTtcbn1cbiJdfQ==


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports['default'] = function (instance) {
  instance.registerHelper('log', function () /* message, options */{
    var args = [undefined],
        options = arguments[arguments.length - 1];
    for (var i = 0; i < arguments.length - 1; i++) {
      args.push(arguments[i]);
    }

    var level = 1;
    if (options.hash.level != null) {
      level = options.hash.level;
    } else if (options.data && options.data.level != null) {
      level = options.data.level;
    }
    args[0] = level;

    instance.log.apply(instance, args);
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvbG9nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQWUsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsa0NBQWlDO0FBQzlELFFBQUksSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDO1FBQ2xCLE9BQU8sR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM5QyxTQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDN0MsVUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN6Qjs7QUFFRCxRQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDZCxRQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksRUFBRTtBQUM5QixXQUFLLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7S0FDNUIsTUFBTSxJQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFO0FBQ3JELFdBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztLQUM1QjtBQUNELFFBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7O0FBRWhCLFlBQVEsQ0FBQyxHQUFHLE1BQUEsQ0FBWixRQUFRLEVBQVMsSUFBSSxDQUFDLENBQUM7R0FDeEIsQ0FBQyxDQUFDO0NBQ0oiLCJmaWxlIjoibG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2xvZycsIGZ1bmN0aW9uKC8qIG1lc3NhZ2UsIG9wdGlvbnMgKi8pIHtcbiAgICBsZXQgYXJncyA9IFt1bmRlZmluZWRdLFxuICAgICAgICBvcHRpb25zID0gYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICAgIH1cblxuICAgIGxldCBsZXZlbCA9IDE7XG4gICAgaWYgKG9wdGlvbnMuaGFzaC5sZXZlbCAhPSBudWxsKSB7XG4gICAgICBsZXZlbCA9IG9wdGlvbnMuaGFzaC5sZXZlbDtcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmRhdGEubGV2ZWwgIT0gbnVsbCkge1xuICAgICAgbGV2ZWwgPSBvcHRpb25zLmRhdGEubGV2ZWw7XG4gICAgfVxuICAgIGFyZ3NbMF0gPSBsZXZlbDtcblxuICAgIGluc3RhbmNlLmxvZyguLi4gYXJncyk7XG4gIH0pO1xufVxuIl19


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports['default'] = function (instance) {
  instance.registerHelper('lookup', function (obj, field) {
    return obj && obj[field];
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvbG9va3VwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQWUsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsVUFBUyxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ3JELFdBQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztHQUMxQixDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJsb29rdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignbG9va3VwJywgZnVuY3Rpb24ob2JqLCBmaWVsZCkge1xuICAgIHJldHVybiBvYmogJiYgb2JqW2ZpZWxkXTtcbiAgfSk7XG59XG4iXX0=


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(1);

exports['default'] = function (instance) {
  instance.registerHelper('with', function (context, options) {
    if (_utils.isFunction(context)) {
      context = context.call(this);
    }

    var fn = options.fn;

    if (!_utils.isEmpty(context)) {
      var data = options.data;
      if (options.data && options.ids) {
        data = _utils.createFrame(options.data);
        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
      }

      return fn(context, {
        data: data,
        blockParams: _utils.blockParams([context], [data && data.contextPath])
      });
    } else {
      return options.inverse(this);
    }
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvd2l0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O3FCQUErRSxVQUFVOztxQkFFMUUsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsVUFBUyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ3pELFFBQUksa0JBQVcsT0FBTyxDQUFDLEVBQUU7QUFBRSxhQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUFFOztBQUUxRCxRQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDOztBQUVwQixRQUFJLENBQUMsZUFBUSxPQUFPLENBQUMsRUFBRTtBQUNyQixVQUFJLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO0FBQ3hCLFVBQUksT0FBTyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFO0FBQy9CLFlBQUksR0FBRyxtQkFBWSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDakMsWUFBSSxDQUFDLFdBQVcsR0FBRyx5QkFBa0IsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO09BQ2hGOztBQUVELGFBQU8sRUFBRSxDQUFDLE9BQU8sRUFBRTtBQUNqQixZQUFJLEVBQUUsSUFBSTtBQUNWLG1CQUFXLEVBQUUsbUJBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7T0FDaEUsQ0FBQyxDQUFDO0tBQ0osTUFBTTtBQUNMLGFBQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM5QjtHQUNGLENBQUMsQ0FBQztDQUNKIiwiZmlsZSI6IndpdGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2FwcGVuZENvbnRleHRQYXRoLCBibG9ja1BhcmFtcywgY3JlYXRlRnJhbWUsIGlzRW1wdHksIGlzRnVuY3Rpb259IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ3dpdGgnLCBmdW5jdGlvbihjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24oY29udGV4dCkpIHsgY29udGV4dCA9IGNvbnRleHQuY2FsbCh0aGlzKTsgfVxuXG4gICAgbGV0IGZuID0gb3B0aW9ucy5mbjtcblxuICAgIGlmICghaXNFbXB0eShjb250ZXh0KSkge1xuICAgICAgbGV0IGRhdGEgPSBvcHRpb25zLmRhdGE7XG4gICAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG4gICAgICAgIGRhdGEgPSBjcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuICAgICAgICBkYXRhLmNvbnRleHRQYXRoID0gYXBwZW5kQ29udGV4dFBhdGgob3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoLCBvcHRpb25zLmlkc1swXSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmbihjb250ZXh0LCB7XG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIGJsb2NrUGFyYW1zOiBibG9ja1BhcmFtcyhbY29udGV4dF0sIFtkYXRhICYmIGRhdGEuY29udGV4dFBhdGhdKVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmludmVyc2UodGhpcyk7XG4gICAgfVxuICB9KTtcbn1cbiJdfQ==


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(1);

var logger = {
  methodMap: ['debug', 'info', 'warn', 'error'],
  level: 'info',

  // Maps a given level value to the `methodMap` indexes above.
  lookupLevel: function lookupLevel(level) {
    if (typeof level === 'string') {
      var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
      if (levelMap >= 0) {
        level = levelMap;
      } else {
        level = parseInt(level, 10);
      }
    }

    return level;
  },

  // Can be overridden in the host environment
  log: function log(level) {
    level = logger.lookupLevel(level);

    if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
      var method = logger.methodMap[level];
      if (!console[method]) {
        // eslint-disable-line no-console
        method = 'log';
      }

      for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        message[_key - 1] = arguments[_key];
      }

      console[method].apply(console, message); // eslint-disable-line no-console
    }
  }
};

exports['default'] = logger;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2xvZ2dlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O3FCQUFzQixTQUFTOztBQUUvQixJQUFJLE1BQU0sR0FBRztBQUNYLFdBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQztBQUM3QyxPQUFLLEVBQUUsTUFBTTs7O0FBR2IsYUFBVyxFQUFFLHFCQUFTLEtBQUssRUFBRTtBQUMzQixRQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtBQUM3QixVQUFJLFFBQVEsR0FBRyxlQUFRLE1BQU0sQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFDOUQsVUFBSSxRQUFRLElBQUksQ0FBQyxFQUFFO0FBQ2pCLGFBQUssR0FBRyxRQUFRLENBQUM7T0FDbEIsTUFBTTtBQUNMLGFBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO09BQzdCO0tBQ0Y7O0FBRUQsV0FBTyxLQUFLLENBQUM7R0FDZDs7O0FBR0QsS0FBRyxFQUFFLGFBQVMsS0FBSyxFQUFjO0FBQy9CLFNBQUssR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDOztBQUVsQyxRQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVcsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLEVBQUU7QUFDL0UsVUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNyQyxVQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFOztBQUNwQixjQUFNLEdBQUcsS0FBSyxDQUFDO09BQ2hCOzt3Q0FQbUIsT0FBTztBQUFQLGVBQU87OztBQVEzQixhQUFPLENBQUMsTUFBTSxPQUFDLENBQWYsT0FBTyxFQUFZLE9BQU8sQ0FBQyxDQUFDO0tBQzdCO0dBQ0Y7Q0FDRixDQUFDOztxQkFFYSxNQUFNIiwiZmlsZSI6ImxvZ2dlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5kZXhPZn0gZnJvbSAnLi91dGlscyc7XG5cbmxldCBsb2dnZXIgPSB7XG4gIG1ldGhvZE1hcDogWydkZWJ1ZycsICdpbmZvJywgJ3dhcm4nLCAnZXJyb3InXSxcbiAgbGV2ZWw6ICdpbmZvJyxcblxuICAvLyBNYXBzIGEgZ2l2ZW4gbGV2ZWwgdmFsdWUgdG8gdGhlIGBtZXRob2RNYXBgIGluZGV4ZXMgYWJvdmUuXG4gIGxvb2t1cExldmVsOiBmdW5jdGlvbihsZXZlbCkge1xuICAgIGlmICh0eXBlb2YgbGV2ZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICBsZXQgbGV2ZWxNYXAgPSBpbmRleE9mKGxvZ2dlci5tZXRob2RNYXAsIGxldmVsLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgaWYgKGxldmVsTWFwID49IDApIHtcbiAgICAgICAgbGV2ZWwgPSBsZXZlbE1hcDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldmVsID0gcGFyc2VJbnQobGV2ZWwsIDEwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbGV2ZWw7XG4gIH0sXG5cbiAgLy8gQ2FuIGJlIG92ZXJyaWRkZW4gaW4gdGhlIGhvc3QgZW52aXJvbm1lbnRcbiAgbG9nOiBmdW5jdGlvbihsZXZlbCwgLi4ubWVzc2FnZSkge1xuICAgIGxldmVsID0gbG9nZ2VyLmxvb2t1cExldmVsKGxldmVsKTtcblxuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9nZ2VyLmxvb2t1cExldmVsKGxvZ2dlci5sZXZlbCkgPD0gbGV2ZWwpIHtcbiAgICAgIGxldCBtZXRob2QgPSBsb2dnZXIubWV0aG9kTWFwW2xldmVsXTtcbiAgICAgIGlmICghY29uc29sZVttZXRob2RdKSB7ICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICAgIG1ldGhvZCA9ICdsb2cnO1xuICAgICAgfVxuICAgICAgY29uc29sZVttZXRob2RdKC4uLm1lc3NhZ2UpOyAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvZ2dlcjtcbiJdfQ==


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* global window */


exports.__esModule = true;

exports['default'] = function (Handlebars) {
  /* istanbul ignore next */
  var root = typeof global !== 'undefined' ? global : window,
      $Handlebars = root.Handlebars;
  /* istanbul ignore next */
  Handlebars.noConflict = function () {
    if (root.Handlebars === Handlebars) {
      root.Handlebars = $Handlebars;
    }
    return Handlebars;
  };
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL25vLWNvbmZsaWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O3FCQUNlLFVBQVMsVUFBVSxFQUFFOztBQUVsQyxNQUFJLElBQUksR0FBRyxPQUFPLE1BQU0sS0FBSyxXQUFXLEdBQUcsTUFBTSxHQUFHLE1BQU07TUFDdEQsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7O0FBRWxDLFlBQVUsQ0FBQyxVQUFVLEdBQUcsWUFBVztBQUNqQyxRQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssVUFBVSxFQUFFO0FBQ2xDLFVBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDO0tBQy9CO0FBQ0QsV0FBTyxVQUFVLENBQUM7R0FDbkIsQ0FBQztDQUNIIiwiZmlsZSI6Im5vLWNvbmZsaWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFsIHdpbmRvdyAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oSGFuZGxlYmFycykge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBsZXQgcm9vdCA9IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogd2luZG93LFxuICAgICAgJEhhbmRsZWJhcnMgPSByb290LkhhbmRsZWJhcnM7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIEhhbmRsZWJhcnMubm9Db25mbGljdCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChyb290LkhhbmRsZWJhcnMgPT09IEhhbmRsZWJhcnMpIHtcbiAgICAgIHJvb3QuSGFuZGxlYmFycyA9ICRIYW5kbGViYXJzO1xuICAgIH1cbiAgICByZXR1cm4gSGFuZGxlYmFycztcbiAgfTtcbn1cbiJdfQ==

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)))

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.checkRevision = checkRevision;
exports.template = template;
exports.wrapProgram = wrapProgram;
exports.resolvePartial = resolvePartial;
exports.invokePartial = invokePartial;
exports.noop = noop;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// istanbul ignore next

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _utils = __webpack_require__(1);

var Utils = _interopRequireWildcard(_utils);

var _exception = __webpack_require__(2);

var _exception2 = _interopRequireDefault(_exception);

var _base = __webpack_require__(10);

function checkRevision(compilerInfo) {
  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
      currentRevision = _base.COMPILER_REVISION;

  if (compilerRevision !== currentRevision) {
    if (compilerRevision < currentRevision) {
      var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
          compilerVersions = _base.REVISION_CHANGES[compilerRevision];
      throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
    } else {
      // Use the embedded version info since the runtime doesn't know about this revision yet
      throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
    }
  }
}

function template(templateSpec, env) {
  /* istanbul ignore next */
  if (!env) {
    throw new _exception2['default']('No environment passed to template');
  }
  if (!templateSpec || !templateSpec.main) {
    throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
  }

  templateSpec.main.decorator = templateSpec.main_d;

  // Note: Using env.VM references rather than local var references throughout this section to allow
  // for external users to override these as psuedo-supported APIs.
  env.VM.checkRevision(templateSpec.compiler);

  function invokePartialWrapper(partial, context, options) {
    if (options.hash) {
      context = Utils.extend({}, context, options.hash);
      if (options.ids) {
        options.ids[0] = true;
      }
    }

    partial = env.VM.resolvePartial.call(this, partial, context, options);
    var result = env.VM.invokePartial.call(this, partial, context, options);

    if (result == null && env.compile) {
      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
      result = options.partials[options.name](context, options);
    }
    if (result != null) {
      if (options.indent) {
        var lines = result.split('\n');
        for (var i = 0, l = lines.length; i < l; i++) {
          if (!lines[i] && i + 1 === l) {
            break;
          }

          lines[i] = options.indent + lines[i];
        }
        result = lines.join('\n');
      }
      return result;
    } else {
      throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
    }
  }

  // Just add water
  var container = {
    strict: function strict(obj, name) {
      if (!(name in obj)) {
        throw new _exception2['default']('"' + name + '" not defined in ' + obj);
      }
      return obj[name];
    },
    lookup: function lookup(depths, name) {
      var len = depths.length;
      for (var i = 0; i < len; i++) {
        if (depths[i] && depths[i][name] != null) {
          return depths[i][name];
        }
      }
    },
    lambda: function lambda(current, context) {
      return typeof current === 'function' ? current.call(context) : current;
    },

    escapeExpression: Utils.escapeExpression,
    invokePartial: invokePartialWrapper,

    fn: function fn(i) {
      var ret = templateSpec[i];
      ret.decorator = templateSpec[i + '_d'];
      return ret;
    },

    programs: [],
    program: function program(i, data, declaredBlockParams, blockParams, depths) {
      var programWrapper = this.programs[i],
          fn = this.fn(i);
      if (data || depths || blockParams || declaredBlockParams) {
        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
      } else if (!programWrapper) {
        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
      }
      return programWrapper;
    },

    data: function data(value, depth) {
      while (value && depth--) {
        value = value._parent;
      }
      return value;
    },
    merge: function merge(param, common) {
      var obj = param || common;

      if (param && common && param !== common) {
        obj = Utils.extend({}, common, param);
      }

      return obj;
    },

    noop: env.VM.noop,
    compilerInfo: templateSpec.compiler
  };

  function ret(context) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var data = options.data;

    ret._setup(options);
    if (!options.partial && templateSpec.useData) {
      data = initData(context, data);
    }
    var depths = undefined,
        blockParams = templateSpec.useBlockParams ? [] : undefined;
    if (templateSpec.useDepths) {
      if (options.depths) {
        depths = context != options.depths[0] ? [context].concat(options.depths) : options.depths;
      } else {
        depths = [context];
      }
    }

    function main(context /*, options*/) {
      return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
    }
    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
    return main(context, options);
  }
  ret.isTop = true;

  ret._setup = function (options) {
    if (!options.partial) {
      container.helpers = container.merge(options.helpers, env.helpers);

      if (templateSpec.usePartial) {
        container.partials = container.merge(options.partials, env.partials);
      }
      if (templateSpec.usePartial || templateSpec.useDecorators) {
        container.decorators = container.merge(options.decorators, env.decorators);
      }
    } else {
      container.helpers = options.helpers;
      container.partials = options.partials;
      container.decorators = options.decorators;
    }
  };

  ret._child = function (i, data, blockParams, depths) {
    if (templateSpec.useBlockParams && !blockParams) {
      throw new _exception2['default']('must pass block params');
    }
    if (templateSpec.useDepths && !depths) {
      throw new _exception2['default']('must pass parent depths');
    }

    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
  };
  return ret;
}

function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
  function prog(context) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var currentDepths = depths;
    if (depths && context != depths[0]) {
      currentDepths = [context].concat(depths);
    }

    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
  }

  prog = executeDecorators(fn, prog, container, depths, data, blockParams);

  prog.program = i;
  prog.depth = depths ? depths.length : 0;
  prog.blockParams = declaredBlockParams || 0;
  return prog;
}

function resolvePartial(partial, context, options) {
  if (!partial) {
    if (options.name === '@partial-block') {
      var data = options.data;
      while (data['partial-block'] === noop) {
        data = data._parent;
      }
      partial = data['partial-block'];
      data['partial-block'] = noop;
    } else {
      partial = options.partials[options.name];
    }
  } else if (!partial.call && !options.name) {
    // This is a dynamic partial that returned a string
    options.name = partial;
    partial = options.partials[partial];
  }
  return partial;
}

function invokePartial(partial, context, options) {
  options.partial = true;
  if (options.ids) {
    options.data.contextPath = options.ids[0] || options.data.contextPath;
  }

  var partialBlock = undefined;
  if (options.fn && options.fn !== noop) {
    options.data = _base.createFrame(options.data);
    partialBlock = options.data['partial-block'] = options.fn;

    if (partialBlock.partials) {
      options.partials = Utils.extend({}, options.partials, partialBlock.partials);
    }
  }

  if (partial === undefined && partialBlock) {
    partial = partialBlock;
  }

  if (partial === undefined) {
    throw new _exception2['default']('The partial ' + options.name + ' could not be found');
  } else if (partial instanceof Function) {
    return partial(context, options);
  }
}

function noop() {
  return '';
}

function initData(context, data) {
  if (!data || !('root' in data)) {
    data = data ? _base.createFrame(data) : {};
    data.root = context;
  }
  return data;
}

function executeDecorators(fn, prog, container, depths, data, blockParams) {
  if (fn.decorator) {
    var props = {};
    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
    Utils.extend(prog, props);
  }
  return prog;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL3J1bnRpbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBQXVCLFNBQVM7O0lBQXBCLEtBQUs7O3lCQUNLLGFBQWE7Ozs7b0JBQzhCLFFBQVE7O0FBRWxFLFNBQVMsYUFBYSxDQUFDLFlBQVksRUFBRTtBQUMxQyxNQUFNLGdCQUFnQixHQUFHLFlBQVksSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztNQUN2RCxlQUFlLDBCQUFvQixDQUFDOztBQUUxQyxNQUFJLGdCQUFnQixLQUFLLGVBQWUsRUFBRTtBQUN4QyxRQUFJLGdCQUFnQixHQUFHLGVBQWUsRUFBRTtBQUN0QyxVQUFNLGVBQWUsR0FBRyx1QkFBaUIsZUFBZSxDQUFDO1VBQ25ELGdCQUFnQixHQUFHLHVCQUFpQixnQkFBZ0IsQ0FBQyxDQUFDO0FBQzVELFlBQU0sMkJBQWMseUZBQXlGLEdBQ3ZHLHFEQUFxRCxHQUFHLGVBQWUsR0FBRyxtREFBbUQsR0FBRyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsQ0FBQztLQUNoSyxNQUFNOztBQUVMLFlBQU0sMkJBQWMsd0ZBQXdGLEdBQ3RHLGlEQUFpRCxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztLQUNuRjtHQUNGO0NBQ0Y7O0FBRU0sU0FBUyxRQUFRLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRTs7QUFFMUMsTUFBSSxDQUFDLEdBQUcsRUFBRTtBQUNSLFVBQU0sMkJBQWMsbUNBQW1DLENBQUMsQ0FBQztHQUMxRDtBQUNELE1BQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFO0FBQ3ZDLFVBQU0sMkJBQWMsMkJBQTJCLEdBQUcsT0FBTyxZQUFZLENBQUMsQ0FBQztHQUN4RTs7QUFFRCxjQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDOzs7O0FBSWxELEtBQUcs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QixVQUFNLDJCQUFjLGNBQWMsR0FBRyxPQUFPLENBQUMsSUFBSSxHQUFHLHFCQUFxQixDQUFDLENBQUM7R0FDNUUsTUFBTSxJQUFJLE9BQU8sWUFBWSxRQUFRLEVBQUU7QUFDdEMsV0FBTyxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0dBQ2xDO0NBQ0Y7O0FBRU0sU0FBUyxJQUFJLEdBQUc7QUFBRSxTQUFPLEVBQUUsQ0FBQztDQUFFOztBQUVyQyxTQUFTLFFBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFO0FBQy9CLE1BQUksQ0FBQyxJQUFJLElBQUksRUFBRSxNQUFNLElBQUksSUFBSSxDQUFBLEFBQUMsRUFBRTtBQUM5QixRQUFJLEdBQUcsSUFBSSxHQUFHLGtCQUFZLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNyQyxRQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztHQUNyQjtBQUNELFNBQU8sSUFBSSxDQUFDO0NBQ2I7O0FBRUQsU0FBUyxpQkFBaUIsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtBQUN6RSxNQUFJLEVBQUUsQ0FBQyxTQUFTLEVBQUU7QUFDaEIsUUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ2YsUUFBSSxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzVGLFNBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0dBQzNCO0FBQ0QsU0FBTyxJQUFJLENBQUM7Q0FDYiIsImZpbGUiOiJydW50aW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gJy4vZXhjZXB0aW9uJztcbmltcG9ydCB7IENPTVBJTEVSX1JFVklTSU9OLCBSRVZJU0lPTl9DSEFOR0VTLCBjcmVhdGVGcmFtZSB9IGZyb20gJy4vYmFzZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja1JldmlzaW9uKGNvbXBpbGVySW5mbykge1xuICBjb25zdCBjb21waWxlclJldmlzaW9uID0gY29tcGlsZXJJbmZvICYmIGNvbXBpbGVySW5mb1swXSB8fCAxLFxuICAgICAgICBjdXJyZW50UmV2aXNpb24gPSBDT01QSUxFUl9SRVZJU0lPTjtcblxuICBpZiAoY29tcGlsZXJSZXZpc2lvbiAhPT0gY3VycmVudFJldmlzaW9uKSB7XG4gICAgaWYgKGNvbXBpbGVyUmV2aXNpb24gPCBjdXJyZW50UmV2aXNpb24pIHtcbiAgICAgIGNvbnN0IHJ1bnRpbWVWZXJzaW9ucyA9IFJFVklTSU9OX0NIQU5HRVNbY3VycmVudFJldmlzaW9uXSxcbiAgICAgICAgICAgIGNvbXBpbGVyVmVyc2lvbnMgPSBSRVZJU0lPTl9DSEFOR0VTW2NvbXBpbGVyUmV2aXNpb25dO1xuICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignVGVtcGxhdGUgd2FzIHByZWNvbXBpbGVkIHdpdGggYW4gb2xkZXIgdmVyc2lvbiBvZiBIYW5kbGViYXJzIHRoYW4gdGhlIGN1cnJlbnQgcnVudGltZS4gJyArXG4gICAgICAgICAgICAnUGxlYXNlIHVwZGF0ZSB5b3VyIHByZWNvbXBpbGVyIHRvIGEgbmV3ZXIgdmVyc2lvbiAoJyArIHJ1bnRpbWVWZXJzaW9ucyArICcpIG9yIGRvd25ncmFkZSB5b3VyIHJ1bnRpbWUgdG8gYW4gb2xkZXIgdmVyc2lvbiAoJyArIGNvbXBpbGVyVmVyc2lvbnMgKyAnKS4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVXNlIHRoZSBlbWJlZGRlZCB2ZXJzaW9uIGluZm8gc2luY2UgdGhlIHJ1bnRpbWUgZG9lc24ndCBrbm93IGFib3V0IHRoaXMgcmV2aXNpb24geWV0XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdUZW1wbGF0ZSB3YXMgcHJlY29tcGlsZWQgd2l0aCBhIG5ld2VyIHZlcnNpb24gb2YgSGFuZGxlYmFycyB0aGFuIHRoZSBjdXJyZW50IHJ1bnRpbWUuICcgK1xuICAgICAgICAgICAgJ1BsZWFzZSB1cGRhdGUgeW91ciBydW50aW1lIHRvIGEgbmV3ZXIgdmVyc2lvbiAoJyArIGNvbXBpbGVySW5mb1sxXSArICcpLicpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVtcGxhdGUodGVtcGxhdGVTcGVjLCBlbnYpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgaWYgKCFlbnYpIHtcbiAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdObyBlbnZpcm9ubWVudCBwYXNzZWQgdG8gdGVtcGxhdGUnKTtcbiAgfVxuICBpZiAoIXRlbXBsYXRlU3BlYyB8fCAhdGVtcGxhdGVTcGVjLm1haW4pIHtcbiAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdVbmtub3duIHRlbXBsYXRlIG9iamVjdDogJyArIHR5cGVvZiB0ZW1wbGF0ZVNwZWMpO1xuICB9XG5cbiAgdGVtcGxhdGVTcGVjLm1haW4uZGVjb3JhdG9yID0gdGVtcGxhdGVTcGVjLm1haW5fZDtcblxuICAvLyBOb3RlOiBVc2luZyBlbnYuVk0gcmVmZXJlbmNlcyByYXRoZXIgdGhhbiBsb2NhbCB2YXIgcmVmZXJlbmNlcyB0aHJvdWdob3V0IHRoaXMgc2VjdGlvbiB0byBhbGxvd1xuICAvLyBmb3IgZXh0ZXJuYWwgdXNlcnMgdG8gb3ZlcnJpZGUgdGhlc2UgYXMgcHN1ZWRvLXN1cHBvcnRlZCBBUElzLlxuICBlbnYuVk0uY2hlY2tSZXZpc2lvbih0ZW1wbGF0ZVNwZWMuY29tcGlsZXIpO1xuXG4gIGZ1bmN0aW9uIGludm9rZVBhcnRpYWxXcmFwcGVyKHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgICBjb250ZXh0ID0gVXRpbHMuZXh0ZW5kKHt9LCBjb250ZXh0LCBvcHRpb25zLmhhc2gpO1xuICAgICAgaWYgKG9wdGlvbnMuaWRzKSB7XG4gICAgICAgIG9wdGlvbnMuaWRzWzBdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwYXJ0aWFsID0gZW52LlZNLnJlc29sdmVQYXJ0aWFsLmNhbGwodGhpcywgcGFydGlhbCwgY29udGV4dCwgb3B0aW9ucyk7XG4gICAgbGV0IHJlc3VsdCA9IGVudi5WTS5pbnZva2VQYXJ0aWFsLmNhbGwodGhpcywgcGFydGlhbCwgY29udGV4dCwgb3B0aW9ucyk7XG5cbiAgICBpZiAocmVzdWx0ID09IG51bGwgJiYgZW52LmNvbXBpbGUpIHtcbiAgICAgIG9wdGlvbnMucGFydGlhbHNbb3B0aW9ucy5uYW1lXSA9IGVudi5jb21waWxlKHBhcnRpYWwsIHRlbXBsYXRlU3BlYy5jb21waWxlck9wdGlvbnMsIGVudik7XG4gICAgICByZXN1bHQgPSBvcHRpb25zLnBhcnRpYWxzW29wdGlvbnMubmFtZV0oY29udGV4dCwgb3B0aW9ucyk7XG4gICAgfVxuICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xuICAgICAgaWYgKG9wdGlvbnMuaW5kZW50KSB7XG4gICAgICAgIGxldCBsaW5lcyA9IHJlc3VsdC5zcGxpdCgnXFxuJyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gbGluZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgaWYgKCFsaW5lc1tpXSAmJiBpICsgMSA9PT0gbCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGluZXNbaV0gPSBvcHRpb25zLmluZGVudCArIGxpbmVzW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCA9IGxpbmVzLmpvaW4oJ1xcbicpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignVGhlIHBhcnRpYWwgJyArIG9wdGlvbnMubmFtZSArICcgY291bGQgbm90IGJlIGNvbXBpbGVkIHdoZW4gcnVubmluZyBpbiBydW50aW1lLW9ubHkgbW9kZScpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEp1c3QgYWRkIHdhdGVyXG4gIGxldCBjb250YWluZXIgPSB7XG4gICAgc3RyaWN0OiBmdW5jdGlvbihvYmosIG5hbWUpIHtcbiAgICAgIGlmICghKG5hbWUgaW4gb2JqKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdcIicgKyBuYW1lICsgJ1wiIG5vdCBkZWZpbmVkIGluICcgKyBvYmopO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9ialtuYW1lXTtcbiAgICB9LFxuICAgIGxvb2t1cDogZnVuY3Rpb24oZGVwdGhzLCBuYW1lKSB7XG4gICAgICBjb25zdCBsZW4gPSBkZXB0aHMubGVuZ3RoO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpZiAoZGVwdGhzW2ldICYmIGRlcHRoc1tpXVtuYW1lXSAhPSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIGRlcHRoc1tpXVtuYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgbGFtYmRhOiBmdW5jdGlvbihjdXJyZW50LCBjb250ZXh0KSB7XG4gICAgICByZXR1cm4gdHlwZW9mIGN1cnJlbnQgPT09ICdmdW5jdGlvbicgPyBjdXJyZW50LmNhbGwoY29udGV4dCkgOiBjdXJyZW50O1xuICAgIH0sXG5cbiAgICBlc2NhcGVFeHByZXNzaW9uOiBVdGlscy5lc2NhcGVFeHByZXNzaW9uLFxuICAgIGludm9rZVBhcnRpYWw6IGludm9rZVBhcnRpYWxXcmFwcGVyLFxuXG4gICAgZm46IGZ1bmN0aW9uKGkpIHtcbiAgICAgIGxldCByZXQgPSB0ZW1wbGF0ZVNwZWNbaV07XG4gICAgICByZXQuZGVjb3JhdG9yID0gdGVtcGxhdGVTcGVjW2kgKyAnX2QnXTtcbiAgICAgIHJldHVybiByZXQ7XG4gICAgfSxcblxuICAgIHByb2dyYW1zOiBbXSxcbiAgICBwcm9ncmFtOiBmdW5jdGlvbihpLCBkYXRhLCBkZWNsYXJlZEJsb2NrUGFyYW1zLCBibG9ja1BhcmFtcywgZGVwdGhzKSB7XG4gICAgICBsZXQgcHJvZ3JhbVdyYXBwZXIgPSB0aGlzLnByb2dyYW1zW2ldLFxuICAgICAgICAgIGZuID0gdGhpcy5mbihpKTtcbiAgICAgIGlmIChkYXRhIHx8IGRlcHRocyB8fCBibG9ja1BhcmFtcyB8fCBkZWNsYXJlZEJsb2NrUGFyYW1zKSB7XG4gICAgICAgIHByb2dyYW1XcmFwcGVyID0gd3JhcFByb2dyYW0odGhpcywgaSwgZm4sIGRhdGEsIGRlY2xhcmVkQmxvY2tQYXJhbXMsIGJsb2NrUGFyYW1zLCBkZXB0aHMpO1xuICAgICAgfSBlbHNlIGlmICghcHJvZ3JhbVdyYXBwZXIpIHtcbiAgICAgICAgcHJvZ3JhbVdyYXBwZXIgPSB0aGlzLnByb2dyYW1zW2ldID0gd3JhcFByb2dyYW0odGhpcywgaSwgZm4pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHByb2dyYW1XcmFwcGVyO1xuICAgIH0sXG5cbiAgICBkYXRhOiBmdW5jdGlvbih2YWx1ZSwgZGVwdGgpIHtcbiAgICAgIHdoaWxlICh2YWx1ZSAmJiBkZXB0aC0tKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUuX3BhcmVudDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LFxuICAgIG1lcmdlOiBmdW5jdGlvbihwYXJhbSwgY29tbW9uKSB7XG4gICAgICBsZXQgb2JqID0gcGFyYW0gfHwgY29tbW9uO1xuXG4gICAgICBpZiAocGFyYW0gJiYgY29tbW9uICYmIChwYXJhbSAhPT0gY29tbW9uKSkge1xuICAgICAgICBvYmogPSBVdGlscy5leHRlbmQoe30sIGNvbW1vbiwgcGFyYW0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gb2JqO1xuICAgIH0sXG5cbiAgICBub29wOiBlbnYuVk0ubm9vcCxcbiAgICBjb21waWxlckluZm86IHRlbXBsYXRlU3BlYy5jb21waWxlclxuICB9O1xuXG4gIGZ1bmN0aW9uIHJldChjb250ZXh0LCBvcHRpb25zID0ge30pIHtcbiAgICBsZXQgZGF0YSA9IG9wdGlvbnMuZGF0YTtcblxuICAgIHJldC5fc2V0dXAob3B0aW9ucyk7XG4gICAgaWYgKCFvcHRpb25zLnBhcnRpYWwgJiYgdGVtcGxhdGVTcGVjLnVzZURhdGEpIHtcbiAgICAgIGRhdGEgPSBpbml0RGF0YShjb250ZXh0LCBkYXRhKTtcbiAgICB9XG4gICAgbGV0IGRlcHRocyxcbiAgICAgICAgYmxvY2tQYXJhbXMgPSB0ZW1wbGF0ZVNwZWMudXNlQmxvY2tQYXJhbXMgPyBbXSA6IHVuZGVmaW5lZDtcbiAgICBpZiAodGVtcGxhdGVTcGVjLnVzZURlcHRocykge1xuICAgICAgaWYgKG9wdGlvbnMuZGVwdGhzKSB7XG4gICAgICAgIGRlcHRocyA9IGNvbnRleHQgIT0gb3B0aW9ucy5kZXB0aHNbMF0gPyBbY29udGV4dF0uY29uY2F0KG9wdGlvbnMuZGVwdGhzKSA6IG9wdGlvbnMuZGVwdGhzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVwdGhzID0gW2NvbnRleHRdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1haW4oY29udGV4dC8qLCBvcHRpb25zKi8pIHtcbiAgICAgIHJldHVybiAnJyArIHRlbXBsYXRlU3BlYy5tYWluKGNvbnRhaW5lciwgY29udGV4dCwgY29udGFpbmVyLmhlbHBlcnMsIGNvbnRhaW5lci5wYXJ0aWFscywgZGF0YSwgYmxvY2tQYXJhbXMsIGRlcHRocyk7XG4gICAgfVxuICAgIG1haW4gPSBleGVjdXRlRGVjb3JhdG9ycyh0ZW1wbGF0ZVNwZWMubWFpbiwgbWFpbiwgY29udGFpbmVyLCBvcHRpb25zLmRlcHRocyB8fCBbXSwgZGF0YSwgYmxvY2tQYXJhbXMpO1xuICAgIHJldHVybiBtYWluKGNvbnRleHQsIG9wdGlvbnMpO1xuICB9XG4gIHJldC5pc1RvcCA9IHRydWU7XG5cbiAgcmV0Ll9zZXR1cCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMucGFydGlhbCkge1xuICAgICAgY29udGFpbmVyLmhlbHBlcnMgPSBjb250YWluZXIubWVyZ2Uob3B0aW9ucy5oZWxwZXJzLCBlbnYuaGVscGVycyk7XG5cbiAgICAgIGlmICh0ZW1wbGF0ZVNwZWMudXNlUGFydGlhbCkge1xuICAgICAgICBjb250YWluZXIucGFydGlhbHMgPSBjb250YWluZXIubWVyZ2Uob3B0aW9ucy5wYXJ0aWFscywgZW52LnBhcnRpYWxzKTtcbiAgICAgIH1cbiAgICAgIGlmICh0ZW1wbGF0ZVNwZWMudXNlUGFydGlhbCB8fCB0ZW1wbGF0ZVNwZWMudXNlRGVjb3JhdG9ycykge1xuICAgICAgICBjb250YWluZXIuZGVjb3JhdG9ycyA9IGNvbnRhaW5lci5tZXJnZShvcHRpb25zLmRlY29yYXRvcnMsIGVudi5kZWNvcmF0b3JzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGFpbmVyLmhlbHBlcnMgPSBvcHRpb25zLmhlbHBlcnM7XG4gICAgICBjb250YWluZXIucGFydGlhbHMgPSBvcHRpb25zLnBhcnRpYWxzO1xuICAgICAgY29udGFpbmVyLmRlY29yYXRvcnMgPSBvcHRpb25zLmRlY29yYXRvcnM7XG4gICAgfVxuICB9O1xuXG4gIHJldC5fY2hpbGQgPSBmdW5jdGlvbihpLCBkYXRhLCBibG9ja1BhcmFtcywgZGVwdGhzKSB7XG4gICAgaWYgKHRlbXBsYXRlU3BlYy51c2VCbG9ja1BhcmFtcyAmJiAhYmxvY2tQYXJhbXMpIHtcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ211c3QgcGFzcyBibG9jayBwYXJhbXMnKTtcbiAgICB9XG4gICAgaWYgKHRlbXBsYXRlU3BlYy51c2VEZXB0aHMgJiYgIWRlcHRocykge1xuICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignbXVzdCBwYXNzIHBhcmVudCBkZXB0aHMnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd3JhcFByb2dyYW0oY29udGFpbmVyLCBpLCB0ZW1wbGF0ZVNwZWNbaV0sIGRhdGEsIDAsIGJsb2NrUGFyYW1zLCBkZXB0aHMpO1xuICB9O1xuICByZXR1cm4gcmV0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd3JhcFByb2dyYW0oY29udGFpbmVyLCBpLCBmbiwgZGF0YSwgZGVjbGFyZWRCbG9ja1BhcmFtcywgYmxvY2tQYXJhbXMsIGRlcHRocykge1xuICBmdW5jdGlvbiBwcm9nKGNvbnRleHQsIG9wdGlvbnMgPSB7fSkge1xuICAgIGxldCBjdXJyZW50RGVwdGhzID0gZGVwdGhzO1xuICAgIGlmIChkZXB0aHMgJiYgY29udGV4dCAhPSBkZXB0aHNbMF0pIHtcbiAgICAgIGN1cnJlbnREZXB0aHMgPSBbY29udGV4dF0uY29uY2F0KGRlcHRocyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZuKGNvbnRhaW5lcixcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgY29udGFpbmVyLmhlbHBlcnMsIGNvbnRhaW5lci5wYXJ0aWFscyxcbiAgICAgICAgb3B0aW9ucy5kYXRhIHx8IGRhdGEsXG4gICAgICAgIGJsb2NrUGFyYW1zICYmIFtvcHRpb25zLmJsb2NrUGFyYW1zXS5jb25jYXQoYmxvY2tQYXJhbXMpLFxuICAgICAgICBjdXJyZW50RGVwdGhzKTtcbiAgfVxuXG4gIHByb2cgPSBleGVjdXRlRGVjb3JhdG9ycyhmbiwgcHJvZywgY29udGFpbmVyLCBkZXB0aHMsIGRhdGEsIGJsb2NrUGFyYW1zKTtcblxuICBwcm9nLnByb2dyYW0gPSBpO1xuICBwcm9nLmRlcHRoID0gZGVwdGhzID8gZGVwdGhzLmxlbmd0aCA6IDA7XG4gIHByb2cuYmxvY2tQYXJhbXMgPSBkZWNsYXJlZEJsb2NrUGFyYW1zIHx8IDA7XG4gIHJldHVybiBwcm9nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZVBhcnRpYWwocGFydGlhbCwgY29udGV4dCwgb3B0aW9ucykge1xuICBpZiAoIXBhcnRpYWwpIHtcbiAgICBpZiAob3B0aW9ucy5uYW1lID09PSAnQHBhcnRpYWwtYmxvY2snKSB7XG4gICAgICBsZXQgZGF0YSA9IG9wdGlvbnMuZGF0YTtcbiAgICAgIHdoaWxlIChkYXRhWydwYXJ0aWFsLWJsb2NrJ10gPT09IG5vb3ApIHtcbiAgICAgICAgZGF0YSA9IGRhdGEuX3BhcmVudDtcbiAgICAgIH1cbiAgICAgIHBhcnRpYWwgPSBkYXRhWydwYXJ0aWFsLWJsb2NrJ107XG4gICAgICBkYXRhWydwYXJ0aWFsLWJsb2NrJ10gPSBub29wO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJ0aWFsID0gb3B0aW9ucy5wYXJ0aWFsc1tvcHRpb25zLm5hbWVdO1xuICAgIH1cbiAgfSBlbHNlIGlmICghcGFydGlhbC5jYWxsICYmICFvcHRpb25zLm5hbWUpIHtcbiAgICAvLyBUaGlzIGlzIGEgZHluYW1pYyBwYXJ0aWFsIHRoYXQgcmV0dXJuZWQgYSBzdHJpbmdcbiAgICBvcHRpb25zLm5hbWUgPSBwYXJ0aWFsO1xuICAgIHBhcnRpYWwgPSBvcHRpb25zLnBhcnRpYWxzW3BhcnRpYWxdO1xuICB9XG4gIHJldHVybiBwYXJ0aWFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52b2tlUGFydGlhbChwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMucGFydGlhbCA9IHRydWU7XG4gIGlmIChvcHRpb25zLmlkcykge1xuICAgIG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCA9IG9wdGlvbnMuaWRzWzBdIHx8IG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aDtcbiAgfVxuXG4gIGxldCBwYXJ0aWFsQmxvY2s7XG4gIGlmIChvcHRpb25zLmZuICYmIG9wdGlvbnMuZm4gIT09IG5vb3ApIHtcbiAgICBvcHRpb25zLmRhdGEgPSBjcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuICAgIHBhcnRpYWxCbG9jayA9IG9wdGlvbnMuZGF0YVsncGFydGlhbC1ibG9jayddID0gb3B0aW9ucy5mbjtcblxuICAgIGlmIChwYXJ0aWFsQmxvY2sucGFydGlhbHMpIHtcbiAgICAgIG9wdGlvbnMucGFydGlhbHMgPSBVdGlscy5leHRlbmQoe30sIG9wdGlvbnMucGFydGlhbHMsIHBhcnRpYWxCbG9jay5wYXJ0aWFscyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHBhcnRpYWwgPT09IHVuZGVmaW5lZCAmJiBwYXJ0aWFsQmxvY2spIHtcbiAgICBwYXJ0aWFsID0gcGFydGlhbEJsb2NrO1xuICB9XG5cbiAgaWYgKHBhcnRpYWwgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ1RoZSBwYXJ0aWFsICcgKyBvcHRpb25zLm5hbWUgKyAnIGNvdWxkIG5vdCBiZSBmb3VuZCcpO1xuICB9IGVsc2UgaWYgKHBhcnRpYWwgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgIHJldHVybiBwYXJ0aWFsKGNvbnRleHQsIG9wdGlvbnMpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub29wKCkgeyByZXR1cm4gJyc7IH1cblxuZnVuY3Rpb24gaW5pdERhdGEoY29udGV4dCwgZGF0YSkge1xuICBpZiAoIWRhdGEgfHwgISgncm9vdCcgaW4gZGF0YSkpIHtcbiAgICBkYXRhID0gZGF0YSA/IGNyZWF0ZUZyYW1lKGRhdGEpIDoge307XG4gICAgZGF0YS5yb290ID0gY29udGV4dDtcbiAgfVxuICByZXR1cm4gZGF0YTtcbn1cblxuZnVuY3Rpb24gZXhlY3V0ZURlY29yYXRvcnMoZm4sIHByb2csIGNvbnRhaW5lciwgZGVwdGhzLCBkYXRhLCBibG9ja1BhcmFtcykge1xuICBpZiAoZm4uZGVjb3JhdG9yKSB7XG4gICAgbGV0IHByb3BzID0ge307XG4gICAgcHJvZyA9IGZuLmRlY29yYXRvcihwcm9nLCBwcm9wcywgY29udGFpbmVyLCBkZXB0aHMgJiYgZGVwdGhzWzBdLCBkYXRhLCBibG9ja1BhcmFtcywgZGVwdGhzKTtcbiAgICBVdGlscy5leHRlbmQocHJvZywgcHJvcHMpO1xuICB9XG4gIHJldHVybiBwcm9nO1xufVxuIl19


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
// Build out our basic SafeString type


exports.__esModule = true;
function SafeString(string) {
  this.string = string;
}

SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
  return '' + this.string;
};

exports['default'] = SafeString;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL3NhZmUtc3RyaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxTQUFTLFVBQVUsQ0FBQyxNQUFNLEVBQUU7QUFDMUIsTUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Q0FDdEI7O0FBRUQsVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsWUFBVztBQUN2RSxTQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0NBQ3pCLENBQUM7O3FCQUVhLFVBQVUiLCJmaWxlIjoic2FmZS1zdHJpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBCdWlsZCBvdXQgb3VyIGJhc2ljIFNhZmVTdHJpbmcgdHlwZVxuZnVuY3Rpb24gU2FmZVN0cmluZyhzdHJpbmcpIHtcbiAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG59XG5cblNhZmVTdHJpbmcucHJvdG90eXBlLnRvU3RyaW5nID0gU2FmZVN0cmluZy5wcm90b3R5cGUudG9IVE1MID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAnJyArIHRoaXMuc3RyaW5nO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2FmZVN0cmluZztcbiJdfQ==


/***/ },
/* 40 */
/***/ function(module, exports) {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

var isarray = __webpack_require__(40)

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {String} str
 * @return {Array}
 */
function parse (str) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var suffix = res[6]
    var asterisk = res[7]

    var repeat = suffix === '+' || suffix === '*'
    var optional = suffix === '?' || suffix === '*'
    var delimiter = prefix || '/'
    var pattern = capture || group || (asterisk ? '.*' : '[^' + delimiter + ']+?')

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      pattern: escapeGroup(pattern)
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {String}   str
 * @return {Function}
 */
function compile (str) {
  return tokensToFunction(parse(str))
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^' + tokens[i].pattern + '$')
    }
  }

  return function (obj) {
    var path = ''
    var data = obj || {}

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received "' + value + '"')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encodeURIComponent(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = encodeURIComponent(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {String} str
 * @return {String}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {String} group
 * @return {String}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {RegExp} re
 * @param  {Array}  keys
 * @return {RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {String}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {RegExp} path
 * @param  {Array}  keys
 * @return {RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {Array}  path
 * @param  {Array}  keys
 * @param  {Object} options
 * @return {RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {String} path
 * @param  {Array}  keys
 * @param  {Object} options
 * @return {RegExp}
 */
function stringToRegexp (path, keys, options) {
  var tokens = parse(path)
  var re = tokensToRegExp(tokens, options)

  // Attach keys back to the regexp.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] !== 'string') {
      keys.push(tokens[i])
    }
  }

  return attachKeys(re, keys)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {Array}  tokens
 * @param  {Array}  keys
 * @param  {Object} options
 * @return {RegExp}
 */
function tokensToRegExp (tokens, options) {
  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''
  var lastToken = tokens[tokens.length - 1]
  var endsWithSlash = typeof lastToken === 'string' && /\/$/.test(lastToken)

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = token.pattern

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (prefix) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithSlash ? route.slice(0, -2) : route) + '(?:\\/(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithSlash ? '' : '(?=\\/|$)'
  }

  return new RegExp('^' + route, flags(options))
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(String|RegExp|Array)} path
 * @param  {Array}                 [keys]
 * @param  {Object}                [options]
 * @return {RegExp}
 */
function pathToRegexp (path, keys, options) {
  keys = keys || []

  if (!isarray(keys)) {
    options = keys
    keys = []
  } else if (!options) {
    options = {}
  }

  if (path instanceof RegExp) {
    return regexpToRegexp(path, keys, options)
  }

  if (isarray(path)) {
    return arrayToRegexp(path, keys, options)
  }

  return stringToRegexp(path, keys, options)
}


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

const $ = __webpack_require__(4);
const page = __webpack_require__(12);
const queryString = __webpack_require__(3);

const peoplePage = __webpack_require__(13);
const pubsPage = __webpack_require__(14);

const targetId = "render-target";
let renderTarget = null;

const apiURL = "http://sodvu.lnx.warwick.ac.uk/";
const rootURL = "/fac/arts/history/irishwomenwriters/database/";

const templates = {
  home: __webpack_require__(5),
  people: __webpack_require__(7),
  person: __webpack_require__(8),
  item: __webpack_require__(6)
};

const partials = {
  fakeMenu: __webpack_require__(11)
};

const getJSON = function(url) {
  return $.getJSON(apiURL + url);
};

const setupSwitchDimensions = (page, apiQuery) =>
  $("#switch-dimension").on("click", function(e) {
    if (location.hash.search("#!/publications/") === 0) {
      page.redirect("/people/?" + queryString.stringify(apiQuery));
      return;
    }

    if (
      location.hash.search("#!/people/") === 0 ||
      location.hash.length === 0 ||
      location.hash.search(/#!\/\?/) === 0 ||
      location.hash.search(/#!\//) === 0
    ) {
      page.redirect("/publications/?" + queryString.stringify(apiQuery));
    }
  });

const setupNameFilter = (page, apiQuery) =>
  document.getElementById("name-filter").addEventListener("keyup", function(e) {
    if (e.target.value.length > 0) {
      apiQuery.search = e.target.value;
      apiQuery.offset = 0;
    } else {
      delete apiQuery.search;
    }

    if (location.hash.search("#!/publications/") === 0) {
      page.redirect("/publications/?" + queryString.stringify(apiQuery));
      return;
    }

    if (
      location.hash.search("#!/people/") === 0 ||
      location.hash.length === 0 ||
      location.hash.search(/#!\/\?/) === 0 ||
      location.hash.search(/#!\//) === 0
    ) {
      page.redirect("/people/?" + queryString.stringify(apiQuery));
    }
  });

const home = ctx => {
  $(".id7-page-title h1").text("WIMIC Database - All People");
  $(".wimic-fake-menu").remove();
  $(".id7-navigation").append(partials.fakeMenu({ baseURL: rootURL }));

  const queryValues = queryString.parse(ctx.querystring);

  const apiQuery = _.omit(
    {
      search: queryValues.search,
      offset: queryValues.offset || 0,
      limit: queryValues.limit || 80
    },
    _.isUndefined
  );

  getJSON(
    "people?" + queryString.stringify(apiQuery)
  ).then((data, status, xhr) => {
    if (document.getElementById("irish-writers-main") === null) {
      renderTarget.innerHTML = templates.home({
        initialSearchValue: queryValues.search || ""
      });
      setupNameFilter(page, apiQuery);
      //setupSwitchDimensions(page, apiQuery);
    }

    // $('#irish-writers-main #wimic-title').text('People');
    // $('#irish-writers-main #switch-dimension').text('Publications');

    peoplePage(data, xhr, page, apiQuery, renderTarget, queryValues);
  });
};

const publications = ctx => {
  $(".id7-page-title h1").text("WIMIC Database - All Publications");
  $(".wimic-fake-menu").remove();
  $(".id7-navigation").append(partials.fakeMenu({ baseURL: rootURL }));

  const queryValues = queryString.parse(ctx.querystring);

  const apiQuery = _.omit(
    {
      search: queryValues.search,
      offset: queryValues.offset || 0,
      limit: queryValues.limit || 80
    },
    _.isUndefined
  );

  getJSON(
    "publications?" + queryString.stringify(apiQuery)
  ).then((data, status, xhr) => {
    if (document.getElementById("irish-writers-main") === null) {
      renderTarget.innerHTML = templates.home({
        initialSearchValue: queryValues.search || ""
      });

      setupNameFilter(page, apiQuery);
      // setupSwitchDimensions(page, apiQuery);
    }

    // $('#irish-writers-main #wimic-title').text('Publications');
    // $('#irish-writers-main #switch-dimension').text('People');

    pubsPage(data, xhr, page, apiQuery, renderTarget, queryValues);
  });
};

var processWork = function(work) {
  var roles = [
    "is_sole_author",
    "is_main_author",
    "is_co_author",
    "is_editor",
    "is_co-editor",
    "is_foreword_author",
    "is_translator",
    "is_illustrator",
    "is_ghost",
    "is_preface",
    "is_original_author",
    "is_sub_editor",
    "is_compiler",
    "is_introduction_author",
    "is_notes_author",
    "is_director",
    "is_co_director",
    "is_producer",
    "is_executive_producer",
    "is_co_producer",
    "is_scriptwriter",
    "is_co_scriptwriter",
    "is_screenwriter",
    "is_co_screenwriter",
    "is_cinematographer",
    "is_animator",
    "is_interviewer",
    "is_interviewee"
  ];

  var results = [];

  roles.forEach(function(role) {
    if (work[role] === 1) {
      results.push({
        role: role.substr(3).replace("_", " "),
        work: work
      });
    }
  });

  return results;
};

$(document).ready(function() {
  renderTarget = document.getElementById(targetId);

  page.base(rootURL);

  $('a[data-page-url="' + rootURL + '"]').on("click", function() {
    page.redirect("/");
  });

  page("/", home);
  page("/people", home);
  page("/publications", publications);

  page("/people/:id", function(ctx) {
    getJSON("people/" + ctx.params.id).then(data => {
      $(".wimic-fake-menu").remove();
      $(".id7-navigation").append(partials.fakeMenu({ baseURL: rootURL }));

      data.works = data.works.map(processWork).reduce(function(prev, curr) {
        return prev.concat(curr);
      }, []);

      let name =
        [data.core.title, data.core.firstname, data.core.lastname_keyname]
          .filter(a => a !== null && a !== undefined)
          .join(" ") || "Unknown Name";

      data.citation =
        "Women in Modern Irish Culture database <" +
        location.href +
        ">, AHRC/University College Dublin/University of Warwick, [accessed " +
        moment().format("MMMM Do YYYY") +
        "]";

      $(".id7-page-title h1").text(name);
      renderTarget.innerHTML = templates.person(data);
    });
  });

  page("/publications/:id", function(ctx) {
    getJSON("publications/" + ctx.params.id).then(data => {
      $(".wimic-fake-menu").remove();
      $(".id7-navigation").append(partials.fakeMenu({ baseURL: rootURL }));
      $(".id7-page-title h1").text(data.core.title || "Unknown Title");

      data.authors = data.authors.map(processWork).reduce(function(prev, curr) {
        return prev.concat(curr);
      }, []);

      data.citation =
        "Women in Modern Irish Culture database <" +
        location.href +
        ">, AHRC/University College Dublin/University of Warwick, [accessed " +
        moment().format("MMMM Do YYYY") +
        "]";

      renderTarget.innerHTML = templates.item(data);
    });
  });

  page("*", function() {
    page("/");
  });

  page({
    hashbang: true
  });
});


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTRjNjlmNjJlMGNkZDJhZTUyNDIiLCJ3ZWJwYWNrOi8vLy4vfi9oYW5kbGViYXJzL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvZXhjZXB0aW9uLmpzIiwid2VicGFjazovLy8od2VicGFjaykvfi9xdWVyeXN0cmluZy1lczMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzL2hvbWUuaGJzIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy9pdGVtLmhicyIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvcGVvcGxlLmhicyIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvcGVyc29uLmhicyIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvX3Blb3BsZUxpc3QuaGJzIiwid2VicGFjazovLy8uL34vaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzL190ZXJ0aWFyeV9tZW51LmhicyIsIndlYnBhY2s6Ly8vLi9+L3BhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Blb3BsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHVibGljYXRpb25zLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9+L3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL34vcXVlcnlzdHJpbmctZXMzL2RlY29kZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL34vcXVlcnlzdHJpbmctZXMzL2VuY29kZS5qcyIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvX2FydGljbGUuaGJzIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy9fYm9vay5oYnMiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzL19qb3VybmFsLmhicyIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvX21vdmllLmhicyIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvX3BsYXkuaGJzIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy9fcHViTGlzdC5oYnMiLCJ3ZWJwYWNrOi8vLy4vfi9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMucnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9kZWNvcmF0b3JzLmpzIiwid2VicGFjazovLy8uL34vaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2RlY29yYXRvcnMvaW5saW5lLmpzIiwid2VicGFjazovLy8uL34vaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvaGVscGVycy9ibG9jay1oZWxwZXItbWlzc2luZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9oZWxwZXJzL2VhY2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvaGVscGVycy9oZWxwZXItbWlzc2luZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9oZWxwZXJzL2lmLmpzIiwid2VicGFjazovLy8uL34vaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2hlbHBlcnMvbG9nLmpzIiwid2VicGFjazovLy8uL34vaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2hlbHBlcnMvbG9va3VwLmpzIiwid2VicGFjazovLy8uL34vaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2hlbHBlcnMvd2l0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvbm8tY29uZmxpY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9zYWZlLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L3BhZ2Uvfi9pc2FycmF5L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vcGFnZS9+L3BhdGgtdG8tcmVnZXhwL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ2hFQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDRkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFlBQVk7QUFDWixZQUFZO0FBQ1osY0FBYztBQUNkLGNBQWM7QUFDZCxjQUFjO0FBQ2QsY0FBYztBQUNkOztBQUVBO0FB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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsUUFBUTtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1DQUFtQyxTQUFTO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQzdtQkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUwsNEVBQTRFLGVBQWU7O0FBRTNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEs7QUFDQTs7Ozs7OztBQzNDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUwseUVBQXlFLGFBQWE7O0FBRXRGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7QUNyQ0E7O0FBRUE7QUFDQSxpQkFBaUIsYUFBYSxFQUFFOztBQUVoQztBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7QUNsQkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7QUNuTHRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNuRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixlQUFlO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDcEZBO0FBQ0EseUJBQXlCLHVEQUF1RDtBQUNoRixpRUFBaUU7QUFDakU7O0FBRUE7QUFDQSxnSkFBZ0oscUJBQXFCLHlFQUF5RTtBQUM5TztBQUNBLCtJQUErSSxxQkFBcUIseUVBQXlFO0FBQzdPO0FBQ0EsMklBQTJJLHFCQUFxQix5RUFBeUU7QUFDek87QUFDQSx5SUFBeUkscUJBQXFCLHlFQUF5RTtBQUN2TztBQUNBLHVJQUF1SSxxQkFBcUIsMEVBQTBFO0FBQ3RPO0FBQ0EsMElBQTBJLHFCQUFxQiwwRUFBMEU7QUFDek87QUFDQSxvSUFBb0kscUJBQXFCLDBFQUEwRTtBQUNuTztBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUEsbUVBQW1FLDZDQUE2QyxxQkFBcUIseUVBQXlFO0FBQzlNLENBQUMsZ0JBQWdCLEU7Ozs7OztBQ2xFakI7QUFDQSx5QkFBeUIsdURBQXVEO0FBQ2hGLGlFQUFpRTtBQUNqRTs7QUFFQTtBQUNBLDZJQUE2SSxxQkFBcUIseUVBQXlFO0FBQzNPO0FBQ0EsMklBQTJJLHFCQUFxQix5RUFBeUU7QUFDek87QUFDQSwwSUFBMEkscUJBQXFCLHlFQUF5RTtBQUN4TztBQUNBLHVJQUF1SSxxQkFBcUIseUVBQXlFO0FBQ3JPO0FBQ0EsaUlBQWlJLHFCQUFxQiwwRUFBMEU7QUFDaE87QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQSxtRUFBbUUsMENBQTBDLHFCQUFxQix5RUFBeUU7QUFDM00sQ0FBQyxnQkFBZ0IsRTs7Ozs7O0FDbERqQjtBQUNBLHlCQUF5Qix1REFBdUQ7QUFDaEYsaUVBQWlFO0FBQ2pFOztBQUVBO0FBQ0EsNElBQTRJLHFCQUFxQix5RUFBeUU7QUFDMU87QUFDQSwrSUFBK0kscUJBQXFCLHlFQUF5RTtBQUM3TztBQUNBLDZJQUE2SSxxQkFBcUIseUVBQXlFO0FBQzNPO0FBQ0EsdUpBQXVKLHFCQUFxQix5RUFBeUU7QUFDclA7QUFDQSwySUFBMkkscUJBQXFCLDBFQUEwRTtBQUMxTztBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUEsbUVBQW1FLG9EQUFvRCxxQkFBcUIseUVBQXlFO0FBQ3JOLENBQUMsZ0JBQWdCLEU7Ozs7OztBQ3REakI7QUFDQSx5QkFBeUIsdURBQXVEO0FBQ2hGLGlFQUFpRTtBQUNqRTs7QUFFQTtBQUNBLDhJQUE4SSxxQkFBcUIseUVBQXlFO0FBQzVPLHFJQUFxSSxxQkFBcUIseUVBQXlFO0FBQ25PLHVJQUF1SSxxQkFBcUIseUVBQXlFO0FBQ3JPLDJJQUEySSxxQkFBcUIseUVBQXlFO0FBQ3pPLGtJQUFrSSxxQkFBcUIsMEVBQTBFO0FBQ2pPO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQSxtRUFBbUUsMkNBQTJDLHFCQUFxQix5RUFBeUU7QUFDNU0sQ0FBQyxnQkFBZ0IsRTs7Ozs7O0FDbERqQjtBQUNBLHlCQUF5Qix1REFBdUQ7QUFDaEYsaUVBQWlFO0FBQ2pFOztBQUVBO0FBQ0EsNkpBQTZKLHFCQUFxQix5RUFBeUU7QUFDM1A7QUFDQSwwSkFBMEoscUJBQXFCLHlFQUF5RTtBQUN4UDtBQUNBLDhJQUE4SSxxQkFBcUIseUVBQXlFO0FBQzVPO0FBQ0EsMklBQTJJLHFCQUFxQix5RUFBeUU7QUFDek87QUFDQSxpSUFBaUkscUJBQXFCLDBFQUEwRTtBQUNoTztBQUNBLGlJQUFpSSxxQkFBcUIsMEVBQTBFO0FBQ2hPO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBLG1FQUFtRSwwQ0FBMEMscUJBQXFCLHlFQUF5RTtBQUMzTSxDQUFDLGdCQUFnQixFOzs7Ozs7QUN0RWpCO0FBQ0EseUJBQXlCLHVEQUF1RDtBQUNoRixpRUFBaUU7QUFDakUsMkRBQTJEOztBQUUzRCx5RkFBeUYscUJBQXFCLHlFQUF5RTtBQUN2TCx5Q0FBeUM7QUFDekMsd0tBQXdLLHdCQUF3QixhQUFhO0FBQzdNO0FBQ0Esd0tBQXdLLHdCQUF3QixhQUFhO0FBQzdNO0FBQ0EsQ0FBQztBQUNEOztBQUVBLHdEQUF3RCxjQUFjLGdCQUFnQjtBQUN0RixxT0FBcU8sRUFBRSx5QkFBeUIsYUFBYTtBQUM3UTtBQUNBLENBQUM7QUFDRDs7QUFFQSxnSEFBZ0gsa0JBQWtCLFlBQVk7QUFDOUksK0RBQStELDBDQUEwQyx1QkFBdUIseUVBQXlFO0FBQ3pNO0FBQ0EsQ0FBQyxnQkFBZ0IsRTs7Ozs7OztBQ3ZCakI7O0FBRUE7QUFDQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGtCQUFrQjs7QUFFL0Y7O0FBRUEsdUNBQXVDLDZCQUE2QixZQUFZLEVBQUUsT0FBTyxpQkFBaUIsbUJBQW1CLHVCQUF1Qiw0RUFBNEUsRUFBRSxFQUFFLHlCQUF5QixlQUFlLEVBQUU7O0FBRTlROztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSwyQ0FBMkM7Ozs7Ozs7O0FDakUzQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsc0NBQXNDLHVDQUF1QyxrQkFBa0I7O0FBRS9GOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQzs7Ozs7Ozs7QUNmM0M7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EsMkNBQTJDOzs7Ozs7OztBQzVCM0M7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHNDQUFzQyx1Q0FBdUMsa0JBQWtCOztBQUUvRjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7Ozs7Ozs7O0FDN0MzQzs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25COztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSwyQ0FBMkM7Ozs7Ozs7O0FDdEMzQzs7QUFFQTtBQUNBOztBQUVBLHNDQUFzQyx1Q0FBdUMsa0JBQWtCOztBQUUvRjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxvQ0FBb0MsT0FBTztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLDJDQUEyQzs7Ozs7Ozs7QUM3RjNDOztBQUVBO0FBQ0E7O0FBRUEsc0NBQXNDLHVDQUF1QyxrQkFBa0I7O0FBRS9GOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxLQUFLO0FBQ3JDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLDJDQUEyQzs7Ozs7Ozs7QUN4QjNDOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLDJEQUEyRCwrREFBK0Q7QUFDMUgsR0FBRztBQUNIOztBQUVBO0FBQ0EsMkNBQTJDOzs7Ozs7OztBQzVCM0M7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMEJBQTBCO0FBQzdDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLDJDQUEyQzs7Ozs7Ozs7QUN6QjNDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLDJDQUEyQzs7Ozs7Ozs7QUNYM0M7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EsMkNBQTJDOzs7Ozs7OztBQ2hDM0M7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkZBQTJGLGFBQWE7QUFDeEc7QUFDQTs7QUFFQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQ0FBMkM7Ozs7Ozs7O0FDOUMzQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJDQUEyQzs7Ozs7Ozs7O0FDbkIzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNDQUFzQyx1Q0FBdUMsa0JBQWtCOztBQUUvRjs7QUFFQSx1Q0FBdUMsNkJBQTZCLFlBQVksRUFBRSxPQUFPLGlCQUFpQixtQkFBbUIsdUJBQXVCLDRFQUE0RSxFQUFFLEVBQUUseUJBQXlCLGVBQWUsRUFBRTs7QUFFOVE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsT0FBTztBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLDZCQUE2QjtBQUM3Qjs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEVBQTBFOztBQUUxRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEVBQTBFOztBQUUxRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7Ozs7Ozs7O0FDeFMzQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkNBQTJDOzs7Ozs7O0FDZDNDO0FBQ0E7QUFDQTs7Ozs7OztBQ0ZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixtQkFBbUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixtQkFBbUI7QUFDdEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLHVCQUF1QixrQkFBa0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVk7QUFDWjtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksTUFBTTtBQUNsQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZLE1BQU07QUFDbEIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLG1CQUFtQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxNQUFNO0FBQ2xCLFlBQVksTUFBTTtBQUNsQixZQUFZLE9BQU87QUFDbkIsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsWUFBWSxNQUFNO0FBQ2xCLFlBQVksT0FBTztBQUNuQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsbUJBQW1CO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxNQUFNO0FBQ2xCLFlBQVksTUFBTTtBQUNsQixZQUFZLE9BQU87QUFDbkIsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLG1CQUFtQjtBQUNwQzs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyw2REFBNkQ7QUFDM0U7QUFDQSxZQUFZLHNCQUFzQjtBQUNsQyxZQUFZLE1BQU07QUFDbEIsWUFBWSxPQUFPO0FBQ25CLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDcllBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxtQkFBbUI7O0FBRXBFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaURBQWlELG1CQUFtQjs7QUFFcEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsbUJBQW1COztBQUV4RTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxtQkFBbUI7QUFDeEU7O0FBRUE7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDIiwiZmlsZSI6InNpdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0Mik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNTRjNjlmNjJlMGNkZDJhZTUyNDIiLCIvLyBDcmVhdGUgYSBzaW1wbGUgcGF0aCBhbGlhcyB0byBhbGxvdyBicm93c2VyaWZ5IHRvIHJlc29sdmVcbi8vIHRoZSBydW50aW1lIG9uIGEgc3VwcG9ydGVkIHBhdGguXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9janMvaGFuZGxlYmFycy5ydW50aW1lJylbJ2RlZmF1bHQnXTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9oYW5kbGViYXJzL3J1bnRpbWUuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5leHRlbmQgPSBleHRlbmQ7XG5leHBvcnRzLmluZGV4T2YgPSBpbmRleE9mO1xuZXhwb3J0cy5lc2NhcGVFeHByZXNzaW9uID0gZXNjYXBlRXhwcmVzc2lvbjtcbmV4cG9ydHMuaXNFbXB0eSA9IGlzRW1wdHk7XG5leHBvcnRzLmNyZWF0ZUZyYW1lID0gY3JlYXRlRnJhbWU7XG5leHBvcnRzLmJsb2NrUGFyYW1zID0gYmxvY2tQYXJhbXM7XG5leHBvcnRzLmFwcGVuZENvbnRleHRQYXRoID0gYXBwZW5kQ29udGV4dFBhdGg7XG52YXIgZXNjYXBlID0ge1xuICAnJic6ICcmYW1wOycsXG4gICc8JzogJyZsdDsnLFxuICAnPic6ICcmZ3Q7JyxcbiAgJ1wiJzogJyZxdW90OycsXG4gIFwiJ1wiOiAnJiN4Mjc7JyxcbiAgJ2AnOiAnJiN4NjA7JyxcbiAgJz0nOiAnJiN4M0Q7J1xufTtcblxudmFyIGJhZENoYXJzID0gL1smPD5cIidgPV0vZyxcbiAgICBwb3NzaWJsZSA9IC9bJjw+XCInYD1dLztcblxuZnVuY3Rpb24gZXNjYXBlQ2hhcihjaHIpIHtcbiAgcmV0dXJuIGVzY2FwZVtjaHJdO1xufVxuXG5mdW5jdGlvbiBleHRlbmQob2JqIC8qICwgLi4uc291cmNlICovKSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yICh2YXIga2V5IGluIGFyZ3VtZW50c1tpXSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcmd1bWVudHNbaV0sIGtleSkpIHtcbiAgICAgICAgb2JqW2tleV0gPSBhcmd1bWVudHNbaV1ba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG5leHBvcnRzLnRvU3RyaW5nID0gdG9TdHJpbmc7XG4vLyBTb3VyY2VkIGZyb20gbG9kYXNoXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYmVzdGllanMvbG9kYXNoL2Jsb2IvbWFzdGVyL0xJQ0VOU0UudHh0XG4vKiBlc2xpbnQtZGlzYWJsZSBmdW5jLXN0eWxlICovXG52YXIgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbn07XG4vLyBmYWxsYmFjayBmb3Igb2xkZXIgdmVyc2lvbnMgb2YgQ2hyb21lIGFuZCBTYWZhcmlcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5pZiAoaXNGdW5jdGlvbigveC8pKSB7XG4gIGV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nICYmIHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xuICB9O1xufVxuZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcblxuLyogZXNsaW50LWVuYWJsZSBmdW5jLXN0eWxlICovXG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnID8gdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5XScgOiBmYWxzZTtcbn07XG5cbmV4cG9ydHMuaXNBcnJheSA9IGlzQXJyYXk7XG4vLyBPbGRlciBJRSB2ZXJzaW9ucyBkbyBub3QgZGlyZWN0bHkgc3VwcG9ydCBpbmRleE9mIHNvIHdlIG11c3QgaW1wbGVtZW50IG91ciBvd24sIHNhZGx5LlxuXG5mdW5jdGlvbiBpbmRleE9mKGFycmF5LCB2YWx1ZSkge1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0gYXJyYXkubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoYXJyYXlbaV0gPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm4gaTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5mdW5jdGlvbiBlc2NhcGVFeHByZXNzaW9uKHN0cmluZykge1xuICBpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICAvLyBkb24ndCBlc2NhcGUgU2FmZVN0cmluZ3MsIHNpbmNlIHRoZXkncmUgYWxyZWFkeSBzYWZlXG4gICAgaWYgKHN0cmluZyAmJiBzdHJpbmcudG9IVE1MKSB7XG4gICAgICByZXR1cm4gc3RyaW5nLnRvSFRNTCgpO1xuICAgIH0gZWxzZSBpZiAoc3RyaW5nID09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9IGVsc2UgaWYgKCFzdHJpbmcpIHtcbiAgICAgIHJldHVybiBzdHJpbmcgKyAnJztcbiAgICB9XG5cbiAgICAvLyBGb3JjZSBhIHN0cmluZyBjb252ZXJzaW9uIGFzIHRoaXMgd2lsbCBiZSBkb25lIGJ5IHRoZSBhcHBlbmQgcmVnYXJkbGVzcyBhbmRcbiAgICAvLyB0aGUgcmVnZXggdGVzdCB3aWxsIGRvIHRoaXMgdHJhbnNwYXJlbnRseSBiZWhpbmQgdGhlIHNjZW5lcywgY2F1c2luZyBpc3N1ZXMgaWZcbiAgICAvLyBhbiBvYmplY3QncyB0byBzdHJpbmcgaGFzIGVzY2FwZWQgY2hhcmFjdGVycyBpbiBpdC5cbiAgICBzdHJpbmcgPSAnJyArIHN0cmluZztcbiAgfVxuXG4gIGlmICghcG9zc2libGUudGVzdChzdHJpbmcpKSB7XG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoYmFkQ2hhcnMsIGVzY2FwZUNoYXIpO1xufVxuXG5mdW5jdGlvbiBpc0VtcHR5KHZhbHVlKSB7XG4gIGlmICghdmFsdWUgJiYgdmFsdWUgIT09IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRnJhbWUob2JqZWN0KSB7XG4gIHZhciBmcmFtZSA9IGV4dGVuZCh7fSwgb2JqZWN0KTtcbiAgZnJhbWUuX3BhcmVudCA9IG9iamVjdDtcbiAgcmV0dXJuIGZyYW1lO1xufVxuXG5mdW5jdGlvbiBibG9ja1BhcmFtcyhwYXJhbXMsIGlkcykge1xuICBwYXJhbXMucGF0aCA9IGlkcztcbiAgcmV0dXJuIHBhcmFtcztcbn1cblxuZnVuY3Rpb24gYXBwZW5kQ29udGV4dFBhdGgoY29udGV4dFBhdGgsIGlkKSB7XG4gIHJldHVybiAoY29udGV4dFBhdGggPyBjb250ZXh0UGF0aCArICcuJyA6ICcnKSArIGlkO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUwyeHBZaTlvWVc1a2JHVmlZWEp6TDNWMGFXeHpMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3UVVGQlFTeEpRVUZOTEUxQlFVMHNSMEZCUnp0QlFVTmlMRXRCUVVjc1JVRkJSU3hQUVVGUE8wRkJRMW9zUzBGQlJ5eEZRVUZGTEUxQlFVMDdRVUZEV0N4TFFVRkhMRVZCUVVVc1RVRkJUVHRCUVVOWUxFdEJRVWNzUlVGQlJTeFJRVUZSTzBGQlEySXNTMEZCUnl4RlFVRkZMRkZCUVZFN1FVRkRZaXhMUVVGSExFVkJRVVVzVVVGQlVUdEJRVU5pTEV0QlFVY3NSVUZCUlN4UlFVRlJPME5CUTJRc1EwRkJRenM3UVVGRlJpeEpRVUZOTEZGQlFWRXNSMEZCUnl4WlFVRlpPMGxCUTNaQ0xGRkJRVkVzUjBGQlJ5eFhRVUZYTEVOQlFVTTdPMEZCUlRkQ0xGTkJRVk1zVlVGQlZTeERRVUZETEVkQlFVY3NSVUZCUlR0QlFVTjJRaXhUUVVGUExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0RFFVTndRanM3UVVGRlRTeFRRVUZUTEUxQlFVMHNRMEZCUXl4SFFVRkhMRzlDUVVGdFFqdEJRVU16UXl4UFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NVMEZCVXl4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdEJRVU42UXl4VFFVRkxMRWxCUVVrc1IwRkJSeXhKUVVGSkxGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlR0QlFVTTFRaXhWUVVGSkxFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRVZCUVVVN1FVRkRNMFFzVjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UFFVTTVRanRMUVVOR08wZEJRMFk3TzBGQlJVUXNVMEZCVHl4SFFVRkhMRU5CUVVNN1EwRkRXanM3UVVGRlRTeEpRVUZKTEZGQlFWRXNSMEZCUnl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExGRkJRVkVzUTBGQlF6czdPenM3TzBGQlMyaEVMRWxCUVVrc1ZVRkJWU3hIUVVGSExHOUNRVUZUTEV0QlFVc3NSVUZCUlR0QlFVTXZRaXhUUVVGUExFOUJRVThzUzBGQlN5eExRVUZMTEZWQlFWVXNRMEZCUXp0RFFVTndReXhEUVVGRE96czdRVUZIUml4SlFVRkpMRlZCUVZVc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJUdEJRVU51UWl4VlFVbE5MRlZCUVZVc1IwRkthRUlzVlVGQlZTeEhRVUZITEZWQlFWTXNTMEZCU3l4RlFVRkZPMEZCUXpOQ0xGZEJRVThzVDBGQlR5eExRVUZMTEV0QlFVc3NWVUZCVlN4SlFVRkpMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NiVUpCUVcxQ0xFTkJRVU03UjBGRGNFWXNRMEZCUXp0RFFVTklPMUZCUTA4c1ZVRkJWU3hIUVVGV0xGVkJRVlU3T3pzN08wRkJTVmdzU1VGQlRTeFBRVUZQTEVkQlFVY3NTMEZCU3l4RFFVRkRMRTlCUVU4c1NVRkJTU3hWUVVGVExFdEJRVXNzUlVGQlJUdEJRVU4wUkN4VFFVRlBMRUZCUVVNc1MwRkJTeXhKUVVGSkxFOUJRVThzUzBGQlN5eExRVUZMTEZGQlFWRXNSMEZCU1N4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEdkQ1FVRm5RaXhIUVVGSExFdEJRVXNzUTBGQlF6dERRVU5xUnl4RFFVRkRPenM3T3p0QlFVZExMRk5CUVZNc1QwRkJUeXhEUVVGRExFdEJRVXNzUlVGQlJTeExRVUZMTEVWQlFVVTdRVUZEY0VNc1QwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNSMEZCUnl4SFFVRkhMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRCUVVOb1JDeFJRVUZKTEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhMUVVGTExFVkJRVVU3UVVGRGRFSXNZVUZCVHl4RFFVRkRMRU5CUVVNN1MwRkRWanRIUVVOR08wRkJRMFFzVTBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXp0RFFVTllPenRCUVVkTkxGTkJRVk1zWjBKQlFXZENMRU5CUVVNc1RVRkJUU3hGUVVGRk8wRkJRM1pETEUxQlFVa3NUMEZCVHl4TlFVRk5MRXRCUVVzc1VVRkJVU3hGUVVGRk96dEJRVVU1UWl4UlFVRkpMRTFCUVUwc1NVRkJTU3hOUVVGTkxFTkJRVU1zVFVGQlRTeEZRVUZGTzBGQlF6TkNMR0ZCUVU4c1RVRkJUU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETzB0QlEzaENMRTFCUVUwc1NVRkJTU3hOUVVGTkxFbEJRVWtzU1VGQlNTeEZRVUZGTzBGQlEzcENMR0ZCUVU4c1JVRkJSU3hEUVVGRE8wdEJRMWdzVFVGQlRTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZPMEZCUTJ4Q0xHRkJRVThzVFVGQlRTeEhRVUZITEVWQlFVVXNRMEZCUXp0TFFVTndRanM3T3pzN1FVRkxSQ3hWUVVGTkxFZEJRVWNzUlVGQlJTeEhRVUZITEUxQlFVMHNRMEZCUXp0SFFVTjBRanM3UVVGRlJDeE5RVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGQlJUdEJRVUZGTEZkQlFVOHNUVUZCVFN4RFFVRkRPMGRCUVVVN1FVRkRPVU1zVTBGQlR5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1JVRkJSU3hWUVVGVkxFTkJRVU1zUTBGQlF6dERRVU0zUXpzN1FVRkZUU3hUUVVGVExFOUJRVThzUTBGQlF5eExRVUZMTEVWQlFVVTdRVUZETjBJc1RVRkJTU3hEUVVGRExFdEJRVXNzU1VGQlNTeExRVUZMTEV0QlFVc3NRMEZCUXl4RlFVRkZPMEZCUTNwQ0xGZEJRVThzU1VGQlNTeERRVUZETzBkQlEySXNUVUZCVFN4SlFVRkpMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeExRVUZMTEVOQlFVTXNUVUZCVFN4TFFVRkxMRU5CUVVNc1JVRkJSVHRCUVVNdlF5eFhRVUZQTEVsQlFVa3NRMEZCUXp0SFFVTmlMRTFCUVUwN1FVRkRUQ3hYUVVGUExFdEJRVXNzUTBGQlF6dEhRVU5rTzBOQlEwWTdPMEZCUlUwc1UwRkJVeXhYUVVGWExFTkJRVU1zVFVGQlRTeEZRVUZGTzBGQlEyeERMRTFCUVVrc1MwRkJTeXhIUVVGSExFMUJRVTBzUTBGQlF5eEZRVUZGTEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNN1FVRkRMMElzVDBGQlN5eERRVUZETEU5QlFVOHNSMEZCUnl4TlFVRk5MRU5CUVVNN1FVRkRka0lzVTBGQlR5eExRVUZMTEVOQlFVTTdRMEZEWkRzN1FVRkZUU3hUUVVGVExGZEJRVmNzUTBGQlF5eE5RVUZOTEVWQlFVVXNSMEZCUnl4RlFVRkZPMEZCUTNaRExGRkJRVTBzUTBGQlF5eEpRVUZKTEVkQlFVY3NSMEZCUnl4RFFVRkRPMEZCUTJ4Q0xGTkJRVThzVFVGQlRTeERRVUZETzBOQlEyWTdPMEZCUlUwc1UwRkJVeXhwUWtGQmFVSXNRMEZCUXl4WFFVRlhMRVZCUVVVc1JVRkJSU3hGUVVGRk8wRkJRMnBFTEZOQlFVOHNRMEZCUXl4WFFVRlhMRWRCUVVjc1YwRkJWeXhIUVVGSExFZEJRVWNzUjBGQlJ5eEZRVUZGTEVOQlFVRXNSMEZCU1N4RlFVRkZMRU5CUVVNN1EwRkRjRVFpTENKbWFXeGxJam9pZFhScGJITXVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKamIyNXpkQ0JsYzJOaGNHVWdQU0I3WEc0Z0lDY21Kem9nSnlaaGJYQTdKeXhjYmlBZ0p6d25PaUFuSm14ME95Y3NYRzRnSUNjK0p6b2dKeVpuZERzbkxGeHVJQ0FuWENJbk9pQW5KbkYxYjNRN0p5eGNiaUFnWENJblhDSTZJQ2NtSTNneU56c25MRnh1SUNBbllDYzZJQ2NtSTNnMk1Ec25MRnh1SUNBblBTYzZJQ2NtSTNnelJEc25YRzU5TzF4dVhHNWpiMjV6ZENCaVlXUkRhR0Z5Y3lBOUlDOWJKancrWENJbllEMWRMMmNzWEc0Z0lDQWdJQ0J3YjNOemFXSnNaU0E5SUM5YkpqdytYQ0luWUQxZEx6dGNibHh1Wm5WdVkzUnBiMjRnWlhOallYQmxRMmhoY2loamFISXBJSHRjYmlBZ2NtVjBkWEp1SUdWelkyRndaVnRqYUhKZE8xeHVmVnh1WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnWlhoMFpXNWtLRzlpYWk4cUlDd2dMaTR1YzI5MWNtTmxJQ292S1NCN1hHNGdJR1p2Y2lBb2JHVjBJR2tnUFNBeE95QnBJRHdnWVhKbmRXMWxiblJ6TG14bGJtZDBhRHNnYVNzcktTQjdYRzRnSUNBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUdGeVozVnRaVzUwYzF0cFhTa2dlMXh1SUNBZ0lDQWdhV1lnS0U5aWFtVmpkQzV3Y205MGIzUjVjR1V1YUdGelQzZHVVSEp2Y0dWeWRIa3VZMkZzYkNoaGNtZDFiV1Z1ZEhOYmFWMHNJR3RsZVNrcElIdGNiaUFnSUNBZ0lDQWdiMkpxVzJ0bGVWMGdQU0JoY21kMWJXVnVkSE5iYVYxYmEyVjVYVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0J5WlhSMWNtNGdiMkpxTzF4dWZWeHVYRzVsZUhCdmNuUWdiR1YwSUhSdlUzUnlhVzVuSUQwZ1QySnFaV04wTG5CeWIzUnZkSGx3WlM1MGIxTjBjbWx1Wnp0Y2JseHVMeThnVTI5MWNtTmxaQ0JtY205dElHeHZaR0Z6YUZ4dUx5OGdhSFIwY0hNNkx5OW5hWFJvZFdJdVkyOXRMMkpsYzNScFpXcHpMMnh2WkdGemFDOWliRzlpTDIxaGMzUmxjaTlNU1VORlRsTkZMblI0ZEZ4dUx5b2daWE5zYVc1MExXUnBjMkZpYkdVZ1puVnVZeTF6ZEhsc1pTQXFMMXh1YkdWMElHbHpSblZ1WTNScGIyNGdQU0JtZFc1amRHbHZiaWgyWVd4MVpTa2dlMXh1SUNCeVpYUjFjbTRnZEhsd1pXOW1JSFpoYkhWbElEMDlQU0FuWm5WdVkzUnBiMjRuTzF4dWZUdGNiaTh2SUdaaGJHeGlZV05ySUdadmNpQnZiR1JsY2lCMlpYSnphVzl1Y3lCdlppQkRhSEp2YldVZ1lXNWtJRk5oWm1GeWFWeHVMeW9nYVhOMFlXNWlkV3dnYVdkdWIzSmxJRzVsZUhRZ0tpOWNibWxtSUNocGMwWjFibU4wYVc5dUtDOTRMeWtwSUh0Y2JpQWdhWE5HZFc1amRHbHZiaUE5SUdaMWJtTjBhVzl1S0haaGJIVmxLU0I3WEc0Z0lDQWdjbVYwZFhKdUlIUjVjR1Z2WmlCMllXeDFaU0E5UFQwZ0oyWjFibU4wYVc5dUp5QW1KaUIwYjFOMGNtbHVaeTVqWVd4c0tIWmhiSFZsS1NBOVBUMGdKMXR2WW1wbFkzUWdSblZ1WTNScGIyNWRKenRjYmlBZ2ZUdGNibjFjYm1WNGNHOXlkQ0I3YVhOR2RXNWpkR2x2Ym4wN1hHNHZLaUJsYzJ4cGJuUXRaVzVoWW14bElHWjFibU10YzNSNWJHVWdLaTljYmx4dUx5b2dhWE4wWVc1aWRXd2dhV2R1YjNKbElHNWxlSFFnS2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JwYzBGeWNtRjVJRDBnUVhKeVlYa3VhWE5CY25KaGVTQjhmQ0JtZFc1amRHbHZiaWgyWVd4MVpTa2dlMXh1SUNCeVpYUjFjbTRnS0haaGJIVmxJQ1ltSUhSNWNHVnZaaUIyWVd4MVpTQTlQVDBnSjI5aWFtVmpkQ2NwSUQ4Z2RHOVRkSEpwYm1jdVkyRnNiQ2gyWVd4MVpTa2dQVDA5SUNkYmIySnFaV04wSUVGeWNtRjVYU2NnT2lCbVlXeHpaVHRjYm4wN1hHNWNiaTh2SUU5c1pHVnlJRWxGSUhabGNuTnBiMjV6SUdSdklHNXZkQ0JrYVhKbFkzUnNlU0J6ZFhCd2IzSjBJR2x1WkdWNFQyWWdjMjhnZDJVZ2JYVnpkQ0JwYlhCc1pXMWxiblFnYjNWeUlHOTNiaXdnYzJGa2JIa3VYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdhVzVrWlhoUFppaGhjbkpoZVN3Z2RtRnNkV1VwSUh0Y2JpQWdabTl5SUNoc1pYUWdhU0E5SURBc0lHeGxiaUE5SUdGeWNtRjVMbXhsYm1kMGFEc2dhU0E4SUd4bGJqc2dhU3NyS1NCN1hHNGdJQ0FnYVdZZ0tHRnljbUY1VzJsZElEMDlQU0IyWVd4MVpTa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlHazdYRzRnSUNBZ2ZWeHVJQ0I5WEc0Z0lISmxkSFZ5YmlBdE1UdGNibjFjYmx4dVhHNWxlSEJ2Y25RZ1puVnVZM1JwYjI0Z1pYTmpZWEJsUlhod2NtVnpjMmx2YmloemRISnBibWNwSUh0Y2JpQWdhV1lnS0hSNWNHVnZaaUJ6ZEhKcGJtY2dJVDA5SUNkemRISnBibWNuS1NCN1hHNGdJQ0FnTHk4Z1pHOXVKM1FnWlhOallYQmxJRk5oWm1WVGRISnBibWR6TENCemFXNWpaU0IwYUdWNUozSmxJR0ZzY21WaFpIa2djMkZtWlZ4dUlDQWdJR2xtSUNoemRISnBibWNnSmlZZ2MzUnlhVzVuTG5SdlNGUk5UQ2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJSE4wY21sdVp5NTBiMGhVVFV3b0tUdGNiaUFnSUNCOUlHVnNjMlVnYVdZZ0tITjBjbWx1WnlBOVBTQnVkV3hzS1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnSnljN1hHNGdJQ0FnZlNCbGJITmxJR2xtSUNnaGMzUnlhVzVuS1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnYzNSeWFXNW5JQ3NnSnljN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHk4Z1JtOXlZMlVnWVNCemRISnBibWNnWTI5dWRtVnljMmx2YmlCaGN5QjBhR2x6SUhkcGJHd2dZbVVnWkc5dVpTQmllU0IwYUdVZ1lYQndaVzVrSUhKbFoyRnlaR3hsYzNNZ1lXNWtYRzRnSUNBZ0x5OGdkR2hsSUhKbFoyVjRJSFJsYzNRZ2QybHNiQ0JrYnlCMGFHbHpJSFJ5WVc1emNHRnlaVzUwYkhrZ1ltVm9hVzVrSUhSb1pTQnpZMlZ1WlhNc0lHTmhkWE5wYm1jZ2FYTnpkV1Z6SUdsbVhHNGdJQ0FnTHk4Z1lXNGdiMkpxWldOMEozTWdkRzhnYzNSeWFXNW5JR2hoY3lCbGMyTmhjR1ZrSUdOb1lYSmhZM1JsY25NZ2FXNGdhWFF1WEc0Z0lDQWdjM1J5YVc1bklEMGdKeWNnS3lCemRISnBibWM3WEc0Z0lIMWNibHh1SUNCcFppQW9JWEJ2YzNOcFlteGxMblJsYzNRb2MzUnlhVzVuS1NrZ2V5QnlaWFIxY200Z2MzUnlhVzVuT3lCOVhHNGdJSEpsZEhWeWJpQnpkSEpwYm1jdWNtVndiR0ZqWlNoaVlXUkRhR0Z5Y3l3Z1pYTmpZWEJsUTJoaGNpazdYRzU5WEc1Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCcGMwVnRjSFI1S0haaGJIVmxLU0I3WEc0Z0lHbG1JQ2doZG1Gc2RXVWdKaVlnZG1Gc2RXVWdJVDA5SURBcElIdGNiaUFnSUNCeVpYUjFjbTRnZEhKMVpUdGNiaUFnZlNCbGJITmxJR2xtSUNocGMwRnljbUY1S0haaGJIVmxLU0FtSmlCMllXeDFaUzVzWlc1bmRHZ2dQVDA5SURBcElIdGNiaUFnSUNCeVpYUjFjbTRnZEhKMVpUdGNiaUFnZlNCbGJITmxJSHRjYmlBZ0lDQnlaWFIxY200Z1ptRnNjMlU3WEc0Z0lIMWNibjFjYmx4dVpYaHdiM0owSUdaMWJtTjBhVzl1SUdOeVpXRjBaVVp5WVcxbEtHOWlhbVZqZENrZ2UxeHVJQ0JzWlhRZ1puSmhiV1VnUFNCbGVIUmxibVFvZTMwc0lHOWlhbVZqZENrN1hHNGdJR1p5WVcxbExsOXdZWEpsYm5RZ1BTQnZZbXBsWTNRN1hHNGdJSEpsZEhWeWJpQm1jbUZ0WlR0Y2JuMWNibHh1Wlhod2IzSjBJR1oxYm1OMGFXOXVJR0pzYjJOclVHRnlZVzF6S0hCaGNtRnRjeXdnYVdSektTQjdYRzRnSUhCaGNtRnRjeTV3WVhSb0lEMGdhV1J6TzF4dUlDQnlaWFIxY200Z2NHRnlZVzF6TzF4dWZWeHVYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdZWEJ3Wlc1a1EyOXVkR1Y0ZEZCaGRHZ29ZMjl1ZEdWNGRGQmhkR2dzSUdsa0tTQjdYRzRnSUhKbGRIVnliaUFvWTI5dWRHVjRkRkJoZEdnZ1B5QmpiMjUwWlhoMFVHRjBhQ0FySUNjdUp5QTZJQ2NuS1NBcklHbGtPMXh1ZlZ4dUlsMTlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvdXRpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgZXJyb3JQcm9wcyA9IFsnZGVzY3JpcHRpb24nLCAnZmlsZU5hbWUnLCAnbGluZU51bWJlcicsICdtZXNzYWdlJywgJ25hbWUnLCAnbnVtYmVyJywgJ3N0YWNrJ107XG5cbmZ1bmN0aW9uIEV4Y2VwdGlvbihtZXNzYWdlLCBub2RlKSB7XG4gIHZhciBsb2MgPSBub2RlICYmIG5vZGUubG9jLFxuICAgICAgbGluZSA9IHVuZGVmaW5lZCxcbiAgICAgIGNvbHVtbiA9IHVuZGVmaW5lZDtcbiAgaWYgKGxvYykge1xuICAgIGxpbmUgPSBsb2Muc3RhcnQubGluZTtcbiAgICBjb2x1bW4gPSBsb2Muc3RhcnQuY29sdW1uO1xuXG4gICAgbWVzc2FnZSArPSAnIC0gJyArIGxpbmUgKyAnOicgKyBjb2x1bW47XG4gIH1cblxuICB2YXIgdG1wID0gRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgbWVzc2FnZSk7XG5cbiAgLy8gVW5mb3J0dW5hdGVseSBlcnJvcnMgYXJlIG5vdCBlbnVtZXJhYmxlIGluIENocm9tZSAoYXQgbGVhc3QpLCBzbyBgZm9yIHByb3AgaW4gdG1wYCBkb2Vzbid0IHdvcmsuXG4gIGZvciAodmFyIGlkeCA9IDA7IGlkeCA8IGVycm9yUHJvcHMubGVuZ3RoOyBpZHgrKykge1xuICAgIHRoaXNbZXJyb3JQcm9wc1tpZHhdXSA9IHRtcFtlcnJvclByb3BzW2lkeF1dO1xuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG4gICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgRXhjZXB0aW9uKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgaWYgKGxvYykge1xuICAgICAgdGhpcy5saW5lTnVtYmVyID0gbGluZTtcblxuICAgICAgLy8gV29yayBhcm91bmQgaXNzdWUgdW5kZXIgc2FmYXJpIHdoZXJlIHdlIGNhbid0IGRpcmVjdGx5IHNldCB0aGUgY29sdW1uIHZhbHVlXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2NvbHVtbicsIHsgdmFsdWU6IGNvbHVtbiB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29sdW1uID0gY29sdW1uO1xuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAobm9wKSB7XG4gICAgLyogSWdub3JlIGlmIHRoZSBicm93c2VyIGlzIHZlcnkgcGFydGljdWxhciAqL1xuICB9XG59XG5cbkV4Y2VwdGlvbi5wcm90b3R5cGUgPSBuZXcgRXJyb3IoKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gRXhjZXB0aW9uO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1TDJ4cFlpOW9ZVzVrYkdWaVlYSnpMMlY0WTJWd2RHbHZiaTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN08wRkJRMEVzU1VGQlRTeFZRVUZWTEVkQlFVY3NRMEZCUXl4aFFVRmhMRVZCUVVVc1ZVRkJWU3hGUVVGRkxGbEJRVmtzUlVGQlJTeFRRVUZUTEVWQlFVVXNUVUZCVFN4RlFVRkZMRkZCUVZFc1JVRkJSU3hQUVVGUExFTkJRVU1zUTBGQlF6czdRVUZGYmtjc1UwRkJVeXhUUVVGVExFTkJRVU1zVDBGQlR5eEZRVUZGTEVsQlFVa3NSVUZCUlR0QlFVTm9ReXhOUVVGSkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEVsQlFVa3NTVUZCU1N4RFFVRkRMRWRCUVVjN1RVRkRkRUlzU1VGQlNTeFpRVUZCTzAxQlEwb3NUVUZCVFN4WlFVRkJMRU5CUVVNN1FVRkRXQ3hOUVVGSkxFZEJRVWNzUlVGQlJUdEJRVU5RTEZGQlFVa3NSMEZCUnl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF6dEJRVU4wUWl4VlFVRk5MRWRCUVVjc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTTdPMEZCUlRGQ0xGZEJRVThzU1VGQlNTeExRVUZMTEVkQlFVY3NTVUZCU1N4SFFVRkhMRWRCUVVjc1IwRkJSeXhOUVVGTkxFTkJRVU03UjBGRGVFTTdPMEZCUlVRc1RVRkJTU3hIUVVGSExFZEJRVWNzUzBGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUlVGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXpzN08wRkJSekZFTEU5QlFVc3NTVUZCU1N4SFFVRkhMRWRCUVVjc1EwRkJReXhGUVVGRkxFZEJRVWNzUjBGQlJ5eFZRVUZWTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWRCUVVjc1JVRkJSU3hGUVVGRk8wRkJRMmhFTEZGQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNWVUZCVlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03UjBGRE9VTTdPenRCUVVkRUxFMUJRVWtzUzBGQlN5eERRVUZETEdsQ1FVRnBRaXhGUVVGRk8wRkJRek5DTEZOQlFVc3NRMEZCUXl4cFFrRkJhVUlzUTBGQlF5eEpRVUZKTEVWQlFVVXNVMEZCVXl4RFFVRkRMRU5CUVVNN1IwRkRNVU03TzBGQlJVUXNUVUZCU1R0QlFVTkdMRkZCUVVrc1IwRkJSeXhGUVVGRk8wRkJRMUFzVlVGQlNTeERRVUZETEZWQlFWVXNSMEZCUnl4SlFVRkpMRU5CUVVNN096czdRVUZKZGtJc1ZVRkJTU3hOUVVGTkxFTkJRVU1zWTBGQll5eEZRVUZGTzBGQlEzcENMR05CUVUwc1EwRkJReXhqUVVGakxFTkJRVU1zU1VGQlNTeEZRVUZGTEZGQlFWRXNSVUZCUlN4RlFVRkRMRXRCUVVzc1JVRkJSU3hOUVVGTkxFVkJRVU1zUTBGQlF5eERRVUZETzA5QlEzaEVMRTFCUVUwN1FVRkRUQ3haUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEUxQlFVMHNRMEZCUXp0UFFVTjBRanRMUVVOR08wZEJRMFlzUTBGQlF5eFBRVUZQTEVkQlFVY3NSVUZCUlRzN1IwRkZZanREUVVOR096dEJRVVZFTEZOQlFWTXNRMEZCUXl4VFFVRlRMRWRCUVVjc1NVRkJTU3hMUVVGTExFVkJRVVVzUTBGQlF6czdjVUpCUlc1Q0xGTkJRVk1pTENKbWFXeGxJam9pWlhoalpYQjBhVzl1TG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lYRzVqYjI1emRDQmxjbkp2Y2xCeWIzQnpJRDBnV3lka1pYTmpjbWx3ZEdsdmJpY3NJQ2RtYVd4bFRtRnRaU2NzSUNkc2FXNWxUblZ0WW1WeUp5d2dKMjFsYzNOaFoyVW5MQ0FuYm1GdFpTY3NJQ2R1ZFcxaVpYSW5MQ0FuYzNSaFkyc25YVHRjYmx4dVpuVnVZM1JwYjI0Z1JYaGpaWEIwYVc5dUtHMWxjM05oWjJVc0lHNXZaR1VwSUh0Y2JpQWdiR1YwSUd4dll5QTlJRzV2WkdVZ0ppWWdibTlrWlM1c2IyTXNYRzRnSUNBZ0lDQnNhVzVsTEZ4dUlDQWdJQ0FnWTI5c2RXMXVPMXh1SUNCcFppQW9iRzlqS1NCN1hHNGdJQ0FnYkdsdVpTQTlJR3h2WXk1emRHRnlkQzVzYVc1bE8xeHVJQ0FnSUdOdmJIVnRiaUE5SUd4dll5NXpkR0Z5ZEM1amIyeDFiVzQ3WEc1Y2JpQWdJQ0J0WlhOellXZGxJQ3M5SUNjZ0xTQW5JQ3NnYkdsdVpTQXJJQ2M2SnlBcklHTnZiSFZ0Ymp0Y2JpQWdmVnh1WEc0Z0lHeGxkQ0IwYlhBZ1BTQkZjbkp2Y2k1d2NtOTBiM1I1Y0dVdVkyOXVjM1J5ZFdOMGIzSXVZMkZzYkNoMGFHbHpMQ0J0WlhOellXZGxLVHRjYmx4dUlDQXZMeUJWYm1admNuUjFibUYwWld4NUlHVnljbTl5Y3lCaGNtVWdibTkwSUdWdWRXMWxjbUZpYkdVZ2FXNGdRMmh5YjIxbElDaGhkQ0JzWldGemRDa3NJSE52SUdCbWIzSWdjSEp2Y0NCcGJpQjBiWEJnSUdSdlpYTnVKM1FnZDI5eWF5NWNiaUFnWm05eUlDaHNaWFFnYVdSNElEMGdNRHNnYVdSNElEd2daWEp5YjNKUWNtOXdjeTVzWlc1bmRHZzdJR2xrZUNzcktTQjdYRzRnSUNBZ2RHaHBjMXRsY25KdmNsQnliM0J6VzJsa2VGMWRJRDBnZEcxd1cyVnljbTl5VUhKdmNITmJhV1I0WFYwN1hHNGdJSDFjYmx4dUlDQXZLaUJwYzNSaGJtSjFiQ0JwWjI1dmNtVWdaV3h6WlNBcUwxeHVJQ0JwWmlBb1JYSnliM0l1WTJGd2RIVnlaVk4wWVdOclZISmhZMlVwSUh0Y2JpQWdJQ0JGY25KdmNpNWpZWEIwZFhKbFUzUmhZMnRVY21GalpTaDBhR2x6TENCRmVHTmxjSFJwYjI0cE8xeHVJQ0I5WEc1Y2JpQWdkSEo1SUh0Y2JpQWdJQ0JwWmlBb2JHOWpLU0I3WEc0Z0lDQWdJQ0IwYUdsekxteHBibVZPZFcxaVpYSWdQU0JzYVc1bE8xeHVYRzRnSUNBZ0lDQXZMeUJYYjNKcklHRnliM1Z1WkNCcGMzTjFaU0IxYm1SbGNpQnpZV1poY21rZ2QyaGxjbVVnZDJVZ1kyRnVKM1FnWkdseVpXTjBiSGtnYzJWMElIUm9aU0JqYjJ4MWJXNGdkbUZzZFdWY2JpQWdJQ0FnSUM4cUlHbHpkR0Z1WW5Wc0lHbG5ibTl5WlNCdVpYaDBJQ292WEc0Z0lDQWdJQ0JwWmlBb1QySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLU0I3WEc0Z0lDQWdJQ0FnSUU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaDBhR2x6TENBblkyOXNkVzF1Snl3Z2UzWmhiSFZsT2lCamIyeDFiVzU5S1R0Y2JpQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZMjlzZFcxdUlEMGdZMjlzZFcxdU8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdmU0JqWVhSamFDQW9ibTl3S1NCN1hHNGdJQ0FnTHlvZ1NXZHViM0psSUdsbUlIUm9aU0JpY205M2MyVnlJR2x6SUhabGNua2djR0Z5ZEdsamRXeGhjaUFxTDF4dUlDQjlYRzU5WEc1Y2JrVjRZMlZ3ZEdsdmJpNXdjbTkwYjNSNWNHVWdQU0J1WlhjZ1JYSnliM0lvS1R0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1JYaGpaWEIwYVc5dU8xeHVJbDE5XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2V4Y2VwdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuZGVjb2RlID0gZXhwb3J0cy5wYXJzZSA9IHJlcXVpcmUoJy4vZGVjb2RlJyk7XG5leHBvcnRzLmVuY29kZSA9IGV4cG9ydHMuc3RyaW5naWZ5ID0gcmVxdWlyZSgnLi9lbmNvZGUnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9+L3F1ZXJ5c3RyaW5nLWVzMy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImpRdWVyeVwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcIkQ6XFxcXGlyaXNoLXdyaXRlcnNcXFxcbm9kZV9tb2R1bGVzXFxcXGhhbmRsZWJhcnNcXFxccnVudGltZS5qc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiY29tcGlsZXJcIjpbNyxcIj49IDQuMC4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGhlbHBlcjtcblxuICByZXR1cm4gXCI8ZGl2IGlkPSdpcmlzaC13cml0ZXJzLW1haW4nPlxcblx0PGRpdiBjbGFzcz0nc2VhcmNoLWJveCc+XFxuXHRcdDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzcz0nYmlnLXNlYXJjaCcgaWQ9J25hbWUtZmlsdGVyJyBwbGFjZWhvbGRlcj0nVHlwZSB0byBzZWFyY2guLicgdmFsdWU9J1wiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLmluaXRpYWxTZWFyY2hWYWx1ZSB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaW5pdGlhbFNlYXJjaFZhbHVlIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGhlbHBlcnMuaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IFwiZnVuY3Rpb25cIiA/IGhlbHBlci5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDoge30se1wibmFtZVwiOlwiaW5pdGlhbFNlYXJjaFZhbHVlXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIicgLz5cXG5cdDwvZGl2Plxcblx0PHNwYW4gaWQ9J2xpc3QtdGFyZ2V0Jz48L3NwYW4+XFxuPC9kaXY+XFxuXCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3RlbXBsYXRlcy9ob21lLmhic1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCJEOlxcXFxpcmlzaC13cml0ZXJzXFxcXG5vZGVfbW9kdWxlc1xcXFxoYW5kbGViYXJzXFxcXHJ1bnRpbWUuanNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcIjFcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGFsaWFzMT1jb250YWluZXIubGFtYmRhLCBhbGlhczI9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb247XG5cbiAgcmV0dXJuIFwiXHRcdDxsaT48c3Bhbj48c3BhbiBjbGFzcz0ncm9sZS1uYW1lJz5cIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucm9sZSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIjogPC9zcGFuPjxhIGhyZWY9JyMhL3Blb3BsZS9cIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC53b3JrIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5wZXJzb25faWQgOiBzdGFjazEpLCBkZXB0aDApKVxuICAgICsgXCInPlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLndvcmsgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLnRpdGxlIDogc3RhY2sxKSwgZGVwdGgwKSlcbiAgICArIFwiIFwiXG4gICAgKyBhbGlhczIoYWxpYXMxKCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLndvcmsgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLmZpcnN0bmFtZSA6IHN0YWNrMSksIGRlcHRoMCkpXG4gICAgKyBcIiBcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC53b3JrIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5sYXN0bmFtZV9rZXluYW1lIDogc3RhY2sxKSwgZGVwdGgwKSlcbiAgICArIFwiPC9hPjwvc3Bhbj5cXG5cdFx0PC9saT5cXG5cIjtcbn0sXCJjb21waWxlclwiOls3LFwiPj0gNC4wLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBhbGlhczE9Y29udGFpbmVyLmxhbWJkYSwgYWxpYXMyPWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uO1xuXG4gIHJldHVybiBcIjxkaXYgaWQ9J21haW4nPlxcblx0PGg0PlBlb3BsZTwvaDQ+XFxuXHQ8dWw+XFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVycy5lYWNoLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiB7fSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuYXV0aG9ycyA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCJcdDwvdWw+XFxuXHQ8aDQ+RGV0YWlsczwvaDQ+XFxuXHQ8ZGl2PkdlbnJlOiBcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb3JlIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5nZW5yZSA6IHN0YWNrMSksIGRlcHRoMCkpXG4gICAgKyBcIjwvZGl2Plxcblxcblx0XCJcbiAgICArICgoc3RhY2sxID0gY29udGFpbmVyLmludm9rZVBhcnRpYWwocmVxdWlyZShcIkQ6XFxcXGlyaXNoLXdyaXRlcnNcXFxcdGVtcGxhdGVzXFxcXF9tb3ZpZS5oYnNcIiksZGVwdGgwLHtcIm5hbWVcIjpcIl9tb3ZpZVwiLFwiZGF0YVwiOmRhdGEsXCJoZWxwZXJzXCI6aGVscGVycyxcInBhcnRpYWxzXCI6cGFydGlhbHMsXCJkZWNvcmF0b3JzXCI6Y29udGFpbmVyLmRlY29yYXRvcnN9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiBcIlxuICAgICsgKChzdGFjazEgPSBjb250YWluZXIuaW52b2tlUGFydGlhbChyZXF1aXJlKFwiRDpcXFxcaXJpc2gtd3JpdGVyc1xcXFx0ZW1wbGF0ZXNcXFxcX2FydGljbGUuaGJzXCIpLGRlcHRoMCx7XCJuYW1lXCI6XCJfYXJ0aWNsZVwiLFwiZGF0YVwiOmRhdGEsXCJoZWxwZXJzXCI6aGVscGVycyxcInBhcnRpYWxzXCI6cGFydGlhbHMsXCJkZWNvcmF0b3JzXCI6Y29udGFpbmVyLmRlY29yYXRvcnN9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiBcIlxuICAgICsgKChzdGFjazEgPSBjb250YWluZXIuaW52b2tlUGFydGlhbChyZXF1aXJlKFwiRDpcXFxcaXJpc2gtd3JpdGVyc1xcXFx0ZW1wbGF0ZXNcXFxcX2Jvb2suaGJzXCIpLGRlcHRoMCx7XCJuYW1lXCI6XCJfYm9va1wiLFwiZGF0YVwiOmRhdGEsXCJoZWxwZXJzXCI6aGVscGVycyxcInBhcnRpYWxzXCI6cGFydGlhbHMsXCJkZWNvcmF0b3JzXCI6Y29udGFpbmVyLmRlY29yYXRvcnN9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiBcIlxuICAgICsgKChzdGFjazEgPSBjb250YWluZXIuaW52b2tlUGFydGlhbChyZXF1aXJlKFwiRDpcXFxcaXJpc2gtd3JpdGVyc1xcXFx0ZW1wbGF0ZXNcXFxcX3BsYXkuaGJzXCIpLGRlcHRoMCx7XCJuYW1lXCI6XCJfcGxheVwiLFwiZGF0YVwiOmRhdGEsXCJoZWxwZXJzXCI6aGVscGVycyxcInBhcnRpYWxzXCI6cGFydGlhbHMsXCJkZWNvcmF0b3JzXCI6Y29udGFpbmVyLmRlY29yYXRvcnN9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiBcIlxuICAgICsgKChzdGFjazEgPSBjb250YWluZXIuaW52b2tlUGFydGlhbChyZXF1aXJlKFwiRDpcXFxcaXJpc2gtd3JpdGVyc1xcXFx0ZW1wbGF0ZXNcXFxcX2pvdXJuYWwuaGJzXCIpLGRlcHRoMCx7XCJuYW1lXCI6XCJfam91cm5hbFwiLFwiZGF0YVwiOmRhdGEsXCJoZWxwZXJzXCI6aGVscGVycyxcInBhcnRpYWxzXCI6cGFydGlhbHMsXCJkZWNvcmF0b3JzXCI6Y29udGFpbmVyLmRlY29yYXRvcnN9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIlxcblxcblx0PGRpdiBjbGFzcz0nY2l0YXRpb24nPlxcblx0XHQ8aDU+Q2l0YXRpb248L2g1Plxcblx0XHQ8cD5cIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY2l0YXRpb24gOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCI8L3A+XFxuXHQ8L2Rpdj5cXG48L2Rpdj5cXG5cIjtcbn0sXCJ1c2VQYXJ0aWFsXCI6dHJ1ZSxcInVzZURhdGFcIjp0cnVlfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi90ZW1wbGF0ZXMvaXRlbS5oYnNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiRDpcXFxcaXJpc2gtd3JpdGVyc1xcXFxub2RlX21vZHVsZXNcXFxcaGFuZGxlYmFyc1xcXFxydW50aW1lLmpzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCIxXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgaGVscGVyLCBhbGlhczE9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiB7fSwgYWxpYXMyPWhlbHBlcnMuaGVscGVyTWlzc2luZywgYWxpYXMzPVwiZnVuY3Rpb25cIiwgYWxpYXM0PWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uO1xuXG4gIHJldHVybiBcIlx0XHQ8bGk+PGEgaHJlZj0nISMvcGVvcGxlL1wiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5EQl9pZCB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuREJfaWQgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcIkRCX2lkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIic+XCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLnRpdGxlIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC50aXRsZSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwidGl0bGVcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiIFwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5maXJzdG5hbWUgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmZpcnN0bmFtZSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwiZmlyc3RuYW1lXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIiBcIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMubGFzdG5hbWVfa2V5bmFtZSB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubGFzdG5hbWVfa2V5bmFtZSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwibGFzdG5hbWVfa2V5bmFtZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCI8L2E+PC9saT5cXG5cIjtcbn0sXCJjb21waWxlclwiOls3LFwiPj0gNC4wLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxO1xuXG4gIHJldHVybiBcIjxkaXYgaWQ9J21haW4nPlxcblx0PHNwYW4gY2xhc3M9J2hvbWUtbGluayc+PGEgaHJlZj0nIyc+PGkgY2xhc3M9J2ZhIGZhLWhvbWUnPjwvaT48L2E+PC9zcGFuPlxcblx0PGgxPkFsbCBQZW9wbGU8L2gxPlxcblx0PHVsPlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnMuZWFjaC5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDoge30sKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnBlb3BsZSA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCJcdDwvdWw+XFxuPC9kaXY+XFxuXFxuXCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3RlbXBsYXRlcy9wZW9wbGUuaGJzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcIkQ6XFxcXGlyaXNoLXdyaXRlcnNcXFxcbm9kZV9tb2R1bGVzXFxcXGhhbmRsZWJhcnNcXFxccnVudGltZS5qc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMTtcblxuICByZXR1cm4gXCJcdFx0PHNwYW4+QWx0ZXJuYXRpdmUgU3BlbGxpbmc6IFwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbihjb250YWluZXIubGFtYmRhKCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNvcmUgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLmFsdGVybmF0aXZlX3NwZWxsaW5nIDogc3RhY2sxKSwgZGVwdGgwKSlcbiAgICArIFwiPC9zcGFuPiBcIjtcbn0sXCIzXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxO1xuXG4gIHJldHVybiBcIlxcblx0XHQ8c3Bhbj5Bc3NvY2lhdGVkIHBsYWNlczogXCJcbiAgICArIGNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uKGNvbnRhaW5lci5sYW1iZGEoKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29yZSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEuYXNzb2NpYXRlZF9wbGFjZXMgOiBzdGFjazEpLCBkZXB0aDApKVxuICAgICsgXCI8L3NwYW4+IFwiO1xufSxcIjVcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGFsaWFzMT1jb250YWluZXIubGFtYmRhLCBhbGlhczI9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb247XG5cbiAgcmV0dXJuIFwiXFxuXHRcdDxzcGFuPkJpcnRoIGRhdGU6IFwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnNbXCJpZlwiXS5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDoge30sKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29yZSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEuZG9iX2lzX2NpcmNhIDogc3RhY2sxKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSg2LCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgYWxpYXMyKGFsaWFzMSgoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb3JlIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5iaXJ0aF9kYXlfb2ZfbW9udGggOiBzdGFjazEpLCBkZXB0aDApKVxuICAgICsgXCIvXCJcbiAgICArIGFsaWFzMihhbGlhczEoKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29yZSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEuYmlydGhfbW9udGggOiBzdGFjazEpLCBkZXB0aDApKVxuICAgICsgXCIvXCJcbiAgICArIGFsaWFzMihhbGlhczEoKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29yZSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEuYmlydGhfeWVhciA6IHN0YWNrMSksIGRlcHRoMCkpXG4gICAgKyBcIjwvc3Bhbj5cdFx0XCI7XG59LFwiNlwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgcmV0dXJuIFwiXHRDaXJjYSBcIjtcbn0sXCI4XCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBhbGlhczE9Y29udGFpbmVyLmxhbWJkYSwgYWxpYXMyPWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uO1xuXG4gIHJldHVybiBcIlxcblx0XHQ8c3Bhbj5CaXJ0aHBsYWNlOiBcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb3JlIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5ib3JuX2NvdW50cnkgOiBzdGFjazEpLCBkZXB0aDApKVxuICAgICsgXCIsIFwiXG4gICAgKyBhbGlhczIoYWxpYXMxKCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNvcmUgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLmJvcm5fY291bnR5IDogc3RhY2sxKSwgZGVwdGgwKSlcbiAgICArIFwiLCBcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb3JlIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5ib3JuX3NldHRsZW1lbnQgOiBzdGFjazEpLCBkZXB0aDApKVxuICAgICsgXCI8L3NwYW4+IFwiO1xufSxcIjEwXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBhbGlhczE9Y29udGFpbmVyLmxhbWJkYSwgYWxpYXMyPWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uO1xuXG4gIHJldHVybiBcIlxcblx0XHQ8c3Bhbj5EZWF0aCBkYXRlOiBcIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzW1wiaWZcIl0uY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IHt9LCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNvcmUgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLmRvZF9pc19jaXJjYSA6IHN0YWNrMSkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMTEsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiBcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb3JlIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5kaWVkX2RheV9vZl9tb250aCA6IHN0YWNrMSksIGRlcHRoMCkpXG4gICAgKyBcIi9cIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb3JlIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5kaWVkX21vbnRoIDogc3RhY2sxKSwgZGVwdGgwKSlcbiAgICArIFwiL1wiXG4gICAgKyBhbGlhczIoYWxpYXMxKCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNvcmUgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLmRpZWRfeWVhciA6IHN0YWNrMSksIGRlcHRoMCkpXG4gICAgKyBcIjwvc3Bhbj5cdFx0XCI7XG59LFwiMTFcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHJldHVybiBcIiBDaXJjYSBcIjtcbn0sXCIxM1wiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgYWxpYXMxPWNvbnRhaW5lci5sYW1iZGEsIGFsaWFzMj1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbjtcblxuICByZXR1cm4gXCJcXG5cdFx0PHNwYW4+RGVhdGhwbGFjZTogXCJcbiAgICArIGFsaWFzMihhbGlhczEoKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29yZSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEuZGllZF9jb3VudHJ5IDogc3RhY2sxKSwgZGVwdGgwKSlcbiAgICArIFwiLCBcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb3JlIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5kaWVkX2NvdW50eSA6IHN0YWNrMSksIGRlcHRoMCkpXG4gICAgKyBcIiwgXCJcbiAgICArIGFsaWFzMihhbGlhczEoKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29yZSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEuZGllZF9zZXR0bGVtZW50IDogc3RhY2sxKSwgZGVwdGgwKSlcbiAgICArIFwiPC9zcGFuPiBcIjtcbn0sXCIxNVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMTtcblxuICByZXR1cm4gXCJcXG5cdFx0PHNwYW4+TWFsZS9GZW1hbGU6IFwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbihjb250YWluZXIubGFtYmRhKCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNvcmUgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLm1hbGVfZmVtYWxlIDogc3RhY2sxKSwgZGVwdGgwKSlcbiAgICArIFwiPC9zcGFuPiBcIjtcbn0sXCIxN1wiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMTtcblxuICByZXR1cm4gXCJcXG5cdFx0PHNwYW4+TWlkZGxlIG5hbWVzOiBcIlxuICAgICsgY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24oY29udGFpbmVyLmxhbWJkYSgoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb3JlIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5taWRkbGVfbmFtZXMgOiBzdGFjazEpLCBkZXB0aDApKVxuICAgICsgXCI8L3NwYW4+IFwiO1xufSxcIjE5XCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxO1xuXG4gIHJldHVybiBcIlxcblx0XHQ8c3Bhbj5FZHVjYXRpb246IFwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbihjb250YWluZXIubGFtYmRhKCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNvcmUgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLmVkdWNhdGlvbiA6IHN0YWNrMSksIGRlcHRoMCkpXG4gICAgKyBcIjwvc3Bhbj4gXCI7XG59LFwiMjFcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuIFwiXFxuXHRcdDxzcGFuPlNvdXJjZXM6IFwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbihjb250YWluZXIubGFtYmRhKCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNvcmUgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLnNvdXJjZXMgOiBzdGFjazEpLCBkZXB0aDApKVxuICAgICsgXCI8L3NwYW4+IFwiO1xufSxcIjIzXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxO1xuXG4gIHJldHVybiBcIlxcblx0XHQ8c3Bhbj5Ob3RlczogXCJcbiAgICArIGNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uKGNvbnRhaW5lci5sYW1iZGEoKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29yZSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEubm90ZXMgOiBzdGFjazEpLCBkZXB0aDApKVxuICAgICsgXCI8L3NwYW4+IFwiO1xufSxcIjI1XCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxO1xuXG4gIHJldHVybiBcIlxcblx0XHQ8c3Bhbj5BbHRlcm5hdGl2ZSBzcGVsbGluZyBvZiBmaXJzdG5hbWU6IFwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbihjb250YWluZXIubGFtYmRhKCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNvcmUgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLmZpcnN0bmFtZV9hbHRlcm5hdGl2ZV9zcGVsbGluZyA6IHN0YWNrMSksIGRlcHRoMCkpXG4gICAgKyBcIjwvc3Bhbj4gXCI7XG59LFwiMjdcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGFsaWFzMT1jb250YWluZXIubGFtYmRhLCBhbGlhczI9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb247XG5cbiAgcmV0dXJuIFwiXFxuXHRcdDxzcGFuPklzIGFsdGVybmF0aXZlIG5hbWUgb2Y6IDxhIGhyZWY9JyMhL3Blb3BsZS9cIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb3JlIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5pc19hbHRlcm5hdGl2ZV9uYW1lX29mIDogc3RhY2sxKSwgZGVwdGgwKSlcbiAgICArIFwiJz5cIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb3JlIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5hbHRfdGl0bGUgOiBzdGFjazEpLCBkZXB0aDApKVxuICAgICsgXCIgXCJcbiAgICArIGFsaWFzMihhbGlhczEoKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29yZSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEuYWx0X2ZpcnN0bmFtZSA6IHN0YWNrMSksIGRlcHRoMCkpXG4gICAgKyBcIiBcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb3JlIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5hbHRfbGFzdG5hbWVfa2V5bmFtZSA6IHN0YWNrMSksIGRlcHRoMCkpXG4gICAgKyBcIjwvYT48L3NwYW4+XHRcdFwiO1xufSxcIjI5XCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxO1xuXG4gIHJldHVybiBcIlxcblx0XHQ8c3Bhbj5QcmltYXJ5IHJlc2VhcmNoZXI6IFwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbihjb250YWluZXIubGFtYmRhKCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNvcmUgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLnByaW1hcnlfcmVzZWFyY2hlciA6IHN0YWNrMSksIGRlcHRoMCkpXG4gICAgKyBcIjwvc3Bhbj4gXCI7XG59LFwiMzFcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuIFwiXFxuXHRcdDxzcGFuPlR5cGUgb2YgbmFtZTogXCJcbiAgICArIGNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uKGNvbnRhaW5lci5sYW1iZGEoKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29yZSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEudHlwZV9vZl9uYW1lIDogc3RhY2sxKSwgZGVwdGgwKSlcbiAgICArIFwiPC9zcGFuPiBcIjtcbn0sXCIzM1wiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMTtcblxuICByZXR1cm4gXCJcdDxoMj5Xb3JrczwvaDI+XFxuXHQ8dWw+XFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVycy5lYWNoLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiB7fSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAud29ya3MgOiBkZXB0aDApLHtcIm5hbWVcIjpcImVhY2hcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMzQsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIlx0PC91bD5cXG5cIjtcbn0sXCIzNFwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgaGVscGVyLCBhbGlhczE9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24sIGFsaWFzMj1jb250YWluZXIubGFtYmRhO1xuXG4gIHJldHVybiBcIlx0XHQ8bGk+PHNwYW4+PHNwYW4gY2xhc3M9J3JvbGUtbmFtZSc+XCJcbiAgICArIGFsaWFzMSgoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLnJvbGUgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnJvbGUgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVycy5oZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gXCJmdW5jdGlvblwiID8gaGVscGVyLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiB7fSx7XCJuYW1lXCI6XCJyb2xlXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIjogPC9zcGFuPjxhIGhyZWY9JyMhL3B1YmxpY2F0aW9ucy9cIlxuICAgICsgYWxpYXMxKGFsaWFzMigoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC53b3JrIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5wdWJsaWNhdGlvbl9pZCA6IHN0YWNrMSksIGRlcHRoMCkpXG4gICAgKyBcIic+XCJcbiAgICArIGFsaWFzMShhbGlhczIoKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAud29yayA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEudGl0bGUgOiBzdGFjazEpLCBkZXB0aDApKVxuICAgICsgXCI8L2E+PC9zcGFuPlxcblx0XHQ8L2xpPlxcblwiO1xufSxcImNvbXBpbGVyXCI6WzcsXCI+PSA0LjAuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGhlbHBlciwgYWxpYXMxPWRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDoge307XG5cbiAgcmV0dXJuIFwiPGRpdiBpZD0nbWFpbic+XFxuXFxuXHQ8ZGl2IGNsYXNzPSdpbmZvJz5cXG5cXG5cIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzW1wiaWZcIl0uY2FsbChhbGlhczEsKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29yZSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEuYWx0ZXJuYXRpdmVfc3BlbGxpbmcgOiBzdGFjazEpLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiBcIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzW1wiaWZcIl0uY2FsbChhbGlhczEsKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29yZSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEuYXNzb2NpYXRlZF9wbGFjZXMgOiBzdGFjazEpLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDMsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiBcIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzW1wiaWZcIl0uY2FsbChhbGlhczEsKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29yZSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEuYmlydGhfZGF5X29mX21vbnRoIDogc3RhY2sxKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSg1LCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVyc1tcImlmXCJdLmNhbGwoYWxpYXMxLCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNvcmUgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLmJvcm5fY291bnRyeSA6IHN0YWNrMSkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oOCwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiIFwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnNbXCJpZlwiXS5jYWxsKGFsaWFzMSwoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb3JlIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5kaWVkX2RheV9vZl9tb250aCA6IHN0YWNrMSkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMTAsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiBcIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzW1wiaWZcIl0uY2FsbChhbGlhczEsKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29yZSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEuZGllZF9jb3VudHJ5IDogc3RhY2sxKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxMywgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiIFwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnNbXCJpZlwiXS5jYWxsKGFsaWFzMSwoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb3JlIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5hbHRlcm5hdGl2ZV9zcGVsbGluZyA6IHN0YWNrMSkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMTUsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiBcIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzW1wiaWZcIl0uY2FsbChhbGlhczEsKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29yZSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEubWlkZGxlX25hbWVzIDogc3RhY2sxKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxNywgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiIFwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnNbXCJpZlwiXS5jYWxsKGFsaWFzMSwoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb3JlIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5ub3RlcyA6IHN0YWNrMSkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMTksIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiBcIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzW1wiaWZcIl0uY2FsbChhbGlhczEsKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29yZSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEuc291cmNlcyA6IHN0YWNrMSkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMjEsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiBcIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzW1wiaWZcIl0uY2FsbChhbGlhczEsKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29yZSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEubm90ZXMgOiBzdGFjazEpLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDIzLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVyc1tcImlmXCJdLmNhbGwoYWxpYXMxLCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNvcmUgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLmZpcnN0bmFtZV9hbHRlcm5hdGl2ZV9zcGVsbGluZyA6IHN0YWNrMSkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMjUsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiBcIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzW1wiaWZcIl0uY2FsbChhbGlhczEsKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29yZSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEuaXNfYWx0ZXJuYXRpdmVfbmFtZV9vZiA6IHN0YWNrMSkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMjcsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiBcIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzW1wiaWZcIl0uY2FsbChhbGlhczEsKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29yZSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEuaXNfbWFzdGVyX25hbWUgOiBzdGFjazEpLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDI5LCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVyc1tcImlmXCJdLmNhbGwoYWxpYXMxLCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNvcmUgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLnR5cGVfb2ZfbmFtZSA6IHN0YWNrMSkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMzEsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIlxcblxcblx0PC9kaXY+XFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVyc1tcImlmXCJdLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC53b3JrcyA6IGRlcHRoMCkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMzMsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIlxcblx0PGRpdiBjbGFzcz0nY2l0YXRpb24nPlxcblx0XHQ8aDU+Q2l0YXRpb248L2g1Plxcblx0XHQ8cD5cIlxuICAgICsgY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5jaXRhdGlvbiB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY2l0YXRpb24gOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVycy5oZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gXCJmdW5jdGlvblwiID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcImNpdGF0aW9uXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIjwvcD5cXG5cdDwvZGl2PlxcbjwvZGl2PlxcblwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi90ZW1wbGF0ZXMvcGVyc29uLmhic1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCJEOlxcXFxpcmlzaC13cml0ZXJzXFxcXG5vZGVfbW9kdWxlc1xcXFxoYW5kbGViYXJzXFxcXHJ1bnRpbWUuanNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcIjFcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGhlbHBlciwgYWxpYXMxPWRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDoge30sIGFsaWFzMj1oZWxwZXJzLmhlbHBlck1pc3NpbmcsIGFsaWFzMz1cImZ1bmN0aW9uXCIsIGFsaWFzND1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbjtcblxuICByZXR1cm4gKChzdGFjazEgPSBoZWxwZXJzW1wiaWZcIl0uY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmhlYWRlciA6IGRlcHRoMCkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMiwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiICAgIDxsaSBzdHlsZT0nbWFyZ2luLWxlZnQ6IDAuNWVtOyc+PGEgaHJlZj0nIyEvcGVvcGxlL1wiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5EQl9pZCB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuREJfaWQgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcIkRCX2lkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIic+XCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLnRpdGxlIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC50aXRsZSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwidGl0bGVcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiIFwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5maXJzdG5hbWUgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmZpcnN0bmFtZSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwiZmlyc3RuYW1lXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIiBcIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMubGFzdG5hbWVfa2V5bmFtZSB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubGFzdG5hbWVfa2V5bmFtZSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwibGFzdG5hbWVfa2V5bmFtZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCI8L2E+PC9saT5cXG5cIjtcbn0sXCIyXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgaGVscGVyO1xuXG4gIHJldHVybiBcIiAgICA8bGk+PGg1IHN0eWxlPSdiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3MDgyOyBjb2xvcjogd2hpdGU7IHBhZGRpbmc6IDAuMmVtOyc+XCJcbiAgICArIGNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuaGVhZGVyIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5oZWFkZXIgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVycy5oZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gXCJmdW5jdGlvblwiID8gaGVscGVyLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiB7fSx7XCJuYW1lXCI6XCJoZWFkZXJcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiPC9oNT48L2xpPlxcblwiO1xufSxcImNvbXBpbGVyXCI6WzcsXCI+PSA0LjAuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuIFwiPHVsIGNsYXNzPVxcXCJwYWdpbmF0aW9uXFxcIiBpZD1cXFwibWFpbi1wYWdpbmF0aW9uXFxcIj48L3VsPlxcbjx1bCBpZD0ncGVvcGxlLWxpc3QnIHN0eWxlPSdjb2x1bW4td2lkdGg6IDIwZW07IGxpc3Qtc3R5bGU6IG5vbmU7IHBhZGRpbmc6IDA7Jz5cXG5cIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzLmVhY2guY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IHt9LChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wZW9wbGUgOiBkZXB0aDApLHtcIm5hbWVcIjpcImVhY2hcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMSwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiPC91bD5cXG48dWwgY2xhc3M9XFxcInBhZ2luYXRpb25cXFwiIGlkPVxcXCJtYWluLXBhZ2luYXRpb25cXFwiPjwvdWw+XFxuXCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3RlbXBsYXRlcy9fcGVvcGxlTGlzdC5oYnNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5IYW5kbGViYXJzRW52aXJvbm1lbnQgPSBIYW5kbGViYXJzRW52aXJvbm1lbnQ7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBfZXhjZXB0aW9uID0gcmVxdWlyZSgnLi9leGNlcHRpb24nKTtcblxudmFyIF9leGNlcHRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXhjZXB0aW9uKTtcblxudmFyIF9oZWxwZXJzID0gcmVxdWlyZSgnLi9oZWxwZXJzJyk7XG5cbnZhciBfZGVjb3JhdG9ycyA9IHJlcXVpcmUoJy4vZGVjb3JhdG9ycycpO1xuXG52YXIgX2xvZ2dlciA9IHJlcXVpcmUoJy4vbG9nZ2VyJyk7XG5cbnZhciBfbG9nZ2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZ2dlcik7XG5cbnZhciBWRVJTSU9OID0gJzQuMC41JztcbmV4cG9ydHMuVkVSU0lPTiA9IFZFUlNJT047XG52YXIgQ09NUElMRVJfUkVWSVNJT04gPSA3O1xuXG5leHBvcnRzLkNPTVBJTEVSX1JFVklTSU9OID0gQ09NUElMRVJfUkVWSVNJT047XG52YXIgUkVWSVNJT05fQ0hBTkdFUyA9IHtcbiAgMTogJzw9IDEuMC5yYy4yJywgLy8gMS4wLnJjLjIgaXMgYWN0dWFsbHkgcmV2MiBidXQgZG9lc24ndCByZXBvcnQgaXRcbiAgMjogJz09IDEuMC4wLXJjLjMnLFxuICAzOiAnPT0gMS4wLjAtcmMuNCcsXG4gIDQ6ICc9PSAxLngueCcsXG4gIDU6ICc9PSAyLjAuMC1hbHBoYS54JyxcbiAgNjogJz49IDIuMC4wLWJldGEuMScsXG4gIDc6ICc+PSA0LjAuMCdcbn07XG5cbmV4cG9ydHMuUkVWSVNJT05fQ0hBTkdFUyA9IFJFVklTSU9OX0NIQU5HRVM7XG52YXIgb2JqZWN0VHlwZSA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG5mdW5jdGlvbiBIYW5kbGViYXJzRW52aXJvbm1lbnQoaGVscGVycywgcGFydGlhbHMsIGRlY29yYXRvcnMpIHtcbiAgdGhpcy5oZWxwZXJzID0gaGVscGVycyB8fCB7fTtcbiAgdGhpcy5wYXJ0aWFscyA9IHBhcnRpYWxzIHx8IHt9O1xuICB0aGlzLmRlY29yYXRvcnMgPSBkZWNvcmF0b3JzIHx8IHt9O1xuXG4gIF9oZWxwZXJzLnJlZ2lzdGVyRGVmYXVsdEhlbHBlcnModGhpcyk7XG4gIF9kZWNvcmF0b3JzLnJlZ2lzdGVyRGVmYXVsdERlY29yYXRvcnModGhpcyk7XG59XG5cbkhhbmRsZWJhcnNFbnZpcm9ubWVudC5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBIYW5kbGViYXJzRW52aXJvbm1lbnQsXG5cbiAgbG9nZ2VyOiBfbG9nZ2VyMlsnZGVmYXVsdCddLFxuICBsb2c6IF9sb2dnZXIyWydkZWZhdWx0J10ubG9nLFxuXG4gIHJlZ2lzdGVySGVscGVyOiBmdW5jdGlvbiByZWdpc3RlckhlbHBlcihuYW1lLCBmbikge1xuICAgIGlmIChfdXRpbHMudG9TdHJpbmcuY2FsbChuYW1lKSA9PT0gb2JqZWN0VHlwZSkge1xuICAgICAgaWYgKGZuKSB7XG4gICAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdBcmcgbm90IHN1cHBvcnRlZCB3aXRoIG11bHRpcGxlIGhlbHBlcnMnKTtcbiAgICAgIH1cbiAgICAgIF91dGlscy5leHRlbmQodGhpcy5oZWxwZXJzLCBuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oZWxwZXJzW25hbWVdID0gZm47XG4gICAgfVxuICB9LFxuICB1bnJlZ2lzdGVySGVscGVyOiBmdW5jdGlvbiB1bnJlZ2lzdGVySGVscGVyKG5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy5oZWxwZXJzW25hbWVdO1xuICB9LFxuXG4gIHJlZ2lzdGVyUGFydGlhbDogZnVuY3Rpb24gcmVnaXN0ZXJQYXJ0aWFsKG5hbWUsIHBhcnRpYWwpIHtcbiAgICBpZiAoX3V0aWxzLnRvU3RyaW5nLmNhbGwobmFtZSkgPT09IG9iamVjdFR5cGUpIHtcbiAgICAgIF91dGlscy5leHRlbmQodGhpcy5wYXJ0aWFscywgbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0eXBlb2YgcGFydGlhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ0F0dGVtcHRpbmcgdG8gcmVnaXN0ZXIgYSBwYXJ0aWFsIGNhbGxlZCBcIicgKyBuYW1lICsgJ1wiIGFzIHVuZGVmaW5lZCcpO1xuICAgICAgfVxuICAgICAgdGhpcy5wYXJ0aWFsc1tuYW1lXSA9IHBhcnRpYWw7XG4gICAgfVxuICB9LFxuICB1bnJlZ2lzdGVyUGFydGlhbDogZnVuY3Rpb24gdW5yZWdpc3RlclBhcnRpYWwobmFtZSkge1xuICAgIGRlbGV0ZSB0aGlzLnBhcnRpYWxzW25hbWVdO1xuICB9LFxuXG4gIHJlZ2lzdGVyRGVjb3JhdG9yOiBmdW5jdGlvbiByZWdpc3RlckRlY29yYXRvcihuYW1lLCBmbikge1xuICAgIGlmIChfdXRpbHMudG9TdHJpbmcuY2FsbChuYW1lKSA9PT0gb2JqZWN0VHlwZSkge1xuICAgICAgaWYgKGZuKSB7XG4gICAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdBcmcgbm90IHN1cHBvcnRlZCB3aXRoIG11bHRpcGxlIGRlY29yYXRvcnMnKTtcbiAgICAgIH1cbiAgICAgIF91dGlscy5leHRlbmQodGhpcy5kZWNvcmF0b3JzLCBuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZWNvcmF0b3JzW25hbWVdID0gZm47XG4gICAgfVxuICB9LFxuICB1bnJlZ2lzdGVyRGVjb3JhdG9yOiBmdW5jdGlvbiB1bnJlZ2lzdGVyRGVjb3JhdG9yKG5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy5kZWNvcmF0b3JzW25hbWVdO1xuICB9XG59O1xuXG52YXIgbG9nID0gX2xvZ2dlcjJbJ2RlZmF1bHQnXS5sb2c7XG5cbmV4cG9ydHMubG9nID0gbG9nO1xuZXhwb3J0cy5jcmVhdGVGcmFtZSA9IF91dGlscy5jcmVhdGVGcmFtZTtcbmV4cG9ydHMubG9nZ2VyID0gX2xvZ2dlcjJbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMMnhwWWk5b1lXNWtiR1ZpWVhKekwySmhjMlV1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3Y1VKQlFUUkRMRk5CUVZNN08zbENRVU12UWl4aFFVRmhPenM3TzNWQ1FVTkZMRmRCUVZjN096QkNRVU5TTEdOQlFXTTdPM05DUVVOdVF5eFZRVUZWT3pzN08wRkJSWFJDTEVsQlFVMHNUMEZCVHl4SFFVRkhMRTlCUVU4c1EwRkJRenM3UVVGRGVFSXNTVUZCVFN4cFFrRkJhVUlzUjBGQlJ5eERRVUZETEVOQlFVTTdPenRCUVVVMVFpeEpRVUZOTEdkQ1FVRm5RaXhIUVVGSE8wRkJRemxDTEVkQlFVTXNSVUZCUlN4aFFVRmhPMEZCUTJoQ0xFZEJRVU1zUlVGQlJTeGxRVUZsTzBGQlEyeENMRWRCUVVNc1JVRkJSU3hsUVVGbE8wRkJRMnhDTEVkQlFVTXNSVUZCUlN4VlFVRlZPMEZCUTJJc1IwRkJReXhGUVVGRkxHdENRVUZyUWp0QlFVTnlRaXhIUVVGRExFVkJRVVVzYVVKQlFXbENPMEZCUTNCQ0xFZEJRVU1zUlVGQlJTeFZRVUZWTzBOQlEyUXNRMEZCUXpzN08wRkJSVVlzU1VGQlRTeFZRVUZWTEVkQlFVY3NhVUpCUVdsQ0xFTkJRVU03TzBGQlJUbENMRk5CUVZNc2NVSkJRWEZDTEVOQlFVTXNUMEZCVHl4RlFVRkZMRkZCUVZFc1JVRkJSU3hWUVVGVkxFVkJRVVU3UVVGRGJrVXNUVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhQUVVGUExFbEJRVWtzUlVGQlJTeERRVUZETzBGQlF6ZENMRTFCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzVVVGQlVTeEpRVUZKTEVWQlFVVXNRMEZCUXp0QlFVTXZRaXhOUVVGSkxFTkJRVU1zVlVGQlZTeEhRVUZITEZWQlFWVXNTVUZCU1N4RlFVRkZMRU5CUVVNN08wRkJSVzVETEd0RFFVRjFRaXhKUVVGSkxFTkJRVU1zUTBGQlF6dEJRVU0zUWl4M1EwRkJNRUlzU1VGQlNTeERRVUZETEVOQlFVTTdRMEZEYWtNN08wRkJSVVFzY1VKQlFYRkNMRU5CUVVNc1UwRkJVeXhIUVVGSE8wRkJRMmhETEdGQlFWY3NSVUZCUlN4eFFrRkJjVUk3TzBGQlJXeERMRkZCUVUwc2NVSkJRVkU3UVVGRFpDeExRVUZITEVWQlFVVXNiMEpCUVU4c1IwRkJSenM3UVVGRlppeG5Ra0ZCWXl4RlFVRkZMSGRDUVVGVExFbEJRVWtzUlVGQlJTeEZRVUZGTEVWQlFVVTdRVUZEYWtNc1VVRkJTU3huUWtGQlV5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1ZVRkJWU3hGUVVGRk8wRkJRM1JETEZWQlFVa3NSVUZCUlN4RlFVRkZPMEZCUVVVc1kwRkJUU3d5UWtGQll5eDVRMEZCZVVNc1EwRkJReXhEUVVGRE8wOUJRVVU3UVVGRE0wVXNiMEpCUVU4c1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0TFFVTTFRaXhOUVVGTk8wRkJRMHdzVlVGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03UzBGRGVrSTdSMEZEUmp0QlFVTkVMR3RDUVVGblFpeEZRVUZGTERCQ1FVRlRMRWxCUVVrc1JVRkJSVHRCUVVNdlFpeFhRVUZQTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03UjBGRE0wSTdPMEZCUlVRc2FVSkJRV1VzUlVGQlJTeDVRa0ZCVXl4SlFVRkpMRVZCUVVVc1QwRkJUeXhGUVVGRk8wRkJRM1pETEZGQlFVa3NaMEpCUVZNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEZWQlFWVXNSVUZCUlR0QlFVTjBReXh2UWtGQlR5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8wdEJRemRDTEUxQlFVMDdRVUZEVEN4VlFVRkpMRTlCUVU4c1QwRkJUeXhMUVVGTExGZEJRVmNzUlVGQlJUdEJRVU5zUXl4alFVRk5MSGxGUVVFd1JDeEpRVUZKTEc5Q1FVRnBRaXhEUVVGRE8wOUJRM1pHTzBGQlEwUXNWVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eFBRVUZQTEVOQlFVTTdTMEZETDBJN1IwRkRSanRCUVVORUxHMUNRVUZwUWl4RlFVRkZMREpDUVVGVExFbEJRVWtzUlVGQlJUdEJRVU5vUXl4WFFVRlBMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdSMEZETlVJN08wRkJSVVFzYlVKQlFXbENMRVZCUVVVc01rSkJRVk1zU1VGQlNTeEZRVUZGTEVWQlFVVXNSVUZCUlR0QlFVTndReXhSUVVGSkxHZENRVUZUTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhWUVVGVkxFVkJRVVU3UVVGRGRFTXNWVUZCU1N4RlFVRkZMRVZCUVVVN1FVRkJSU3hqUVVGTkxESkNRVUZqTERSRFFVRTBReXhEUVVGRExFTkJRVU03VDBGQlJUdEJRVU01UlN4dlFrRkJUeXhKUVVGSkxFTkJRVU1zVlVGQlZTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMHRCUXk5Q0xFMUJRVTA3UVVGRFRDeFZRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dExRVU0xUWp0SFFVTkdPMEZCUTBRc2NVSkJRVzFDTEVWQlFVVXNOa0pCUVZNc1NVRkJTU3hGUVVGRk8wRkJRMnhETEZkQlFVOHNTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dEhRVU01UWp0RFFVTkdMRU5CUVVNN08wRkJSVXNzU1VGQlNTeEhRVUZITEVkQlFVY3NiMEpCUVU4c1IwRkJSeXhEUVVGRE96czdVVUZGY0VJc1YwRkJWenRSUVVGRkxFMUJRVTBpTENKbWFXeGxJam9pWW1GelpTNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3WTNKbFlYUmxSbkpoYldVc0lHVjRkR1Z1WkN3Z2RHOVRkSEpwYm1kOUlHWnliMjBnSnk0dmRYUnBiSE1uTzF4dWFXMXdiM0owSUVWNFkyVndkR2x2YmlCbWNtOXRJQ2N1TDJWNFkyVndkR2x2YmljN1hHNXBiWEJ2Y25RZ2UzSmxaMmx6ZEdWeVJHVm1ZWFZzZEVobGJIQmxjbk45SUdaeWIyMGdKeTR2YUdWc2NHVnljeWM3WEc1cGJYQnZjblFnZTNKbFoybHpkR1Z5UkdWbVlYVnNkRVJsWTI5eVlYUnZjbk45SUdaeWIyMGdKeTR2WkdWamIzSmhkRzl5Y3ljN1hHNXBiWEJ2Y25RZ2JHOW5aMlZ5SUdaeWIyMGdKeTR2Ykc5bloyVnlKenRjYmx4dVpYaHdiM0owSUdOdmJuTjBJRlpGVWxOSlQwNGdQU0FuTkM0d0xqVW5PMXh1Wlhod2IzSjBJR052Ym5OMElFTlBUVkJKVEVWU1gxSkZWa2xUU1U5T0lEMGdOenRjYmx4dVpYaHdiM0owSUdOdmJuTjBJRkpGVmtsVFNVOU9YME5JUVU1SFJWTWdQU0I3WEc0Z0lERTZJQ2M4UFNBeExqQXVjbU11TWljc0lDOHZJREV1TUM1eVl5NHlJR2x6SUdGamRIVmhiR3g1SUhKbGRqSWdZblYwSUdSdlpYTnVKM1FnY21Wd2IzSjBJR2wwWEc0Z0lESTZJQ2M5UFNBeExqQXVNQzF5WXk0ekp5eGNiaUFnTXpvZ0p6MDlJREV1TUM0d0xYSmpMalFuTEZ4dUlDQTBPaUFuUFQwZ01TNTRMbmduTEZ4dUlDQTFPaUFuUFQwZ01pNHdMakF0WVd4d2FHRXVlQ2NzWEc0Z0lEWTZJQ2MrUFNBeUxqQXVNQzFpWlhSaExqRW5MRnh1SUNBM09pQW5QajBnTkM0d0xqQW5YRzU5TzF4dVhHNWpiMjV6ZENCdlltcGxZM1JVZVhCbElEMGdKMXR2WW1wbFkzUWdUMkpxWldOMFhTYzdYRzVjYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUJJWVc1a2JHVmlZWEp6Ulc1MmFYSnZibTFsYm5Rb2FHVnNjR1Z5Y3l3Z2NHRnlkR2xoYkhNc0lHUmxZMjl5WVhSdmNuTXBJSHRjYmlBZ2RHaHBjeTVvWld4d1pYSnpJRDBnYUdWc2NHVnljeUI4ZkNCN2ZUdGNiaUFnZEdocGN5NXdZWEowYVdGc2N5QTlJSEJoY25ScFlXeHpJSHg4SUh0OU8xeHVJQ0IwYUdsekxtUmxZMjl5WVhSdmNuTWdQU0JrWldOdmNtRjBiM0p6SUh4OElIdDlPMXh1WEc0Z0lISmxaMmx6ZEdWeVJHVm1ZWFZzZEVobGJIQmxjbk1vZEdocGN5azdYRzRnSUhKbFoybHpkR1Z5UkdWbVlYVnNkRVJsWTI5eVlYUnZjbk1vZEdocGN5azdYRzU5WEc1Y2JraGhibVJzWldKaGNuTkZiblpwY205dWJXVnVkQzV3Y205MGIzUjVjR1VnUFNCN1hHNGdJR052Ym5OMGNuVmpkRzl5T2lCSVlXNWtiR1ZpWVhKelJXNTJhWEp2Ym0xbGJuUXNYRzVjYmlBZ2JHOW5aMlZ5T2lCc2IyZG5aWElzWEc0Z0lHeHZaem9nYkc5bloyVnlMbXh2Wnl4Y2JseHVJQ0J5WldkcGMzUmxja2hsYkhCbGNqb2dablZ1WTNScGIyNG9ibUZ0WlN3Z1ptNHBJSHRjYmlBZ0lDQnBaaUFvZEc5VGRISnBibWN1WTJGc2JDaHVZVzFsS1NBOVBUMGdiMkpxWldOMFZIbHdaU2tnZTF4dUlDQWdJQ0FnYVdZZ0tHWnVLU0I3SUhSb2NtOTNJRzVsZHlCRmVHTmxjSFJwYjI0b0owRnlaeUJ1YjNRZ2MzVndjRzl5ZEdWa0lIZHBkR2dnYlhWc2RHbHdiR1VnYUdWc2NHVnljeWNwT3lCOVhHNGdJQ0FnSUNCbGVIUmxibVFvZEdocGN5NW9aV3h3WlhKekxDQnVZVzFsS1R0Y2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdkR2hwY3k1b1pXeHdaWEp6VzI1aGJXVmRJRDBnWm00N1hHNGdJQ0FnZlZ4dUlDQjlMRnh1SUNCMWJuSmxaMmx6ZEdWeVNHVnNjR1Z5T2lCbWRXNWpkR2x2YmlodVlXMWxLU0I3WEc0Z0lDQWdaR1ZzWlhSbElIUm9hWE11YUdWc2NHVnljMXR1WVcxbFhUdGNiaUFnZlN4Y2JseHVJQ0J5WldkcGMzUmxjbEJoY25ScFlXdzZJR1oxYm1OMGFXOXVLRzVoYldVc0lIQmhjblJwWVd3cElIdGNiaUFnSUNCcFppQW9kRzlUZEhKcGJtY3VZMkZzYkNodVlXMWxLU0E5UFQwZ2IySnFaV04wVkhsd1pTa2dlMXh1SUNBZ0lDQWdaWGgwWlc1a0tIUm9hWE11Y0dGeWRHbGhiSE1zSUc1aGJXVXBPMXh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNCcFppQW9kSGx3Wlc5bUlIQmhjblJwWVd3Z1BUMDlJQ2QxYm1SbFptbHVaV1FuS1NCN1hHNGdJQ0FnSUNBZ0lIUm9jbTkzSUc1bGR5QkZlR05sY0hScGIyNG9ZRUYwZEdWdGNIUnBibWNnZEc4Z2NtVm5hWE4wWlhJZ1lTQndZWEowYVdGc0lHTmhiR3hsWkNCY0lpUjdibUZ0WlgxY0lpQmhjeUIxYm1SbFptbHVaV1JnS1R0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0FnSUhSb2FYTXVjR0Z5ZEdsaGJITmJibUZ0WlYwZ1BTQndZWEowYVdGc08xeHVJQ0FnSUgxY2JpQWdmU3hjYmlBZ2RXNXlaV2RwYzNSbGNsQmhjblJwWVd3NklHWjFibU4wYVc5dUtHNWhiV1VwSUh0Y2JpQWdJQ0JrWld4bGRHVWdkR2hwY3k1d1lYSjBhV0ZzYzF0dVlXMWxYVHRjYmlBZ2ZTeGNibHh1SUNCeVpXZHBjM1JsY2tSbFkyOXlZWFJ2Y2pvZ1puVnVZM1JwYjI0b2JtRnRaU3dnWm00cElIdGNiaUFnSUNCcFppQW9kRzlUZEhKcGJtY3VZMkZzYkNodVlXMWxLU0E5UFQwZ2IySnFaV04wVkhsd1pTa2dlMXh1SUNBZ0lDQWdhV1lnS0dadUtTQjdJSFJvY205M0lHNWxkeUJGZUdObGNIUnBiMjRvSjBGeVp5QnViM1FnYzNWd2NHOXlkR1ZrSUhkcGRHZ2diWFZzZEdsd2JHVWdaR1ZqYjNKaGRHOXljeWNwT3lCOVhHNGdJQ0FnSUNCbGVIUmxibVFvZEdocGN5NWtaV052Y21GMGIzSnpMQ0J1WVcxbEtUdGNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnZEdocGN5NWtaV052Y21GMGIzSnpXMjVoYldWZElEMGdabTQ3WEc0Z0lDQWdmVnh1SUNCOUxGeHVJQ0IxYm5KbFoybHpkR1Z5UkdWamIzSmhkRzl5T2lCbWRXNWpkR2x2YmlodVlXMWxLU0I3WEc0Z0lDQWdaR1ZzWlhSbElIUm9hWE11WkdWamIzSmhkRzl5YzF0dVlXMWxYVHRjYmlBZ2ZWeHVmVHRjYmx4dVpYaHdiM0owSUd4bGRDQnNiMmNnUFNCc2IyZG5aWEl1Ykc5bk8xeHVYRzVsZUhCdmNuUWdlMk55WldGMFpVWnlZVzFsTENCc2IyZG5aWEo5TzF4dUlsMTlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiRDpcXFxcaXJpc2gtd3JpdGVyc1xcXFxub2RlX21vZHVsZXNcXFxcaGFuZGxlYmFyc1xcXFxydW50aW1lLmpzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCJjb21waWxlclwiOls3LFwiPj0gNC4wLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgaGVscGVyLCBhbGlhczE9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiB7fSwgYWxpYXMyPWhlbHBlcnMuaGVscGVyTWlzc2luZywgYWxpYXMzPVwiZnVuY3Rpb25cIiwgYWxpYXM0PWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uO1xuXG4gIHJldHVybiBcIjxuYXYgY2xhc3M9XFxcIm5hdmJhciBuYXZiYXItdGVydGlhcnkgd2ltaWMtZmFrZS1tZW51XFxcIiByb2xlPVxcXCJuYXZpZ2F0aW9uXFxcIj5cXG4gICAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2YmFyLW5hdlxcXCI+XFxuICAgICAgICA8bGkgY2xhc3M9XFxcImZpcnN0XFxcIj4gPGEgaHJlZj1cXFwiXCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLmJhc2VVUkwgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmJhc2VVUkwgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcImJhc2VVUkxcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIiBkYXRhLXBhZ2UtdXJsPVxcXCJcIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuYmFzZVVSTCB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuYmFzZVVSTCA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwiYmFzZVVSTFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiPiBBbGwgUGVvcGxlIDwvYT48L2xpPlxcbiAgICAgICAgPGxpPjxhIGhyZWY9XFxcIlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5iYXNlVVJMIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5iYXNlVVJMIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJiYXNlVVJMXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIiMhL3B1YmxpY2F0aW9ucy9cXFwiIGRhdGEtcGFnZS11cmw9XFxcIlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5iYXNlVVJMIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5iYXNlVVJMIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJiYXNlVVJMXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIi8jIS9wdWJsaWNhdGlvbnNcXFwiPiBBbGwgUHVibGljYXRpb25zIDwvYT48L2xpPlxcbiAgICA8L3VsPlxcbjwvbmF2PlxcblwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi90ZW1wbGF0ZXMvX3RlcnRpYXJ5X21lbnUuaGJzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIgIC8qIGdsb2JhbHMgcmVxdWlyZSwgbW9kdWxlICovXG5cbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKlxuICAgKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICAgKi9cblxuICB2YXIgcGF0aHRvUmVnZXhwID0gcmVxdWlyZSgncGF0aC10by1yZWdleHAnKTtcblxuICAvKipcbiAgICogTW9kdWxlIGV4cG9ydHMuXG4gICAqL1xuXG4gIG1vZHVsZS5leHBvcnRzID0gcGFnZTtcblxuICAvKipcbiAgICogRGV0ZWN0IGNsaWNrIGV2ZW50XG4gICAqL1xuICB2YXIgY2xpY2tFdmVudCA9ICgndW5kZWZpbmVkJyAhPT0gdHlwZW9mIGRvY3VtZW50KSAmJiBkb2N1bWVudC5vbnRvdWNoc3RhcnQgPyAndG91Y2hzdGFydCcgOiAnY2xpY2snO1xuXG4gIC8qKlxuICAgKiBUbyB3b3JrIHByb3Blcmx5IHdpdGggdGhlIFVSTFxuICAgKiBoaXN0b3J5LmxvY2F0aW9uIGdlbmVyYXRlZCBwb2x5ZmlsbCBpbiBodHRwczovL2dpdGh1Yi5jb20vZGV2b3RlL0hUTUw1LUhpc3RvcnktQVBJXG4gICAqL1xuXG4gIHZhciBsb2NhdGlvbiA9ICgndW5kZWZpbmVkJyAhPT0gdHlwZW9mIHdpbmRvdykgJiYgKHdpbmRvdy5oaXN0b3J5LmxvY2F0aW9uIHx8IHdpbmRvdy5sb2NhdGlvbik7XG5cbiAgLyoqXG4gICAqIFBlcmZvcm0gaW5pdGlhbCBkaXNwYXRjaC5cbiAgICovXG5cbiAgdmFyIGRpc3BhdGNoID0gdHJ1ZTtcblxuXG4gIC8qKlxuICAgKiBEZWNvZGUgVVJMIGNvbXBvbmVudHMgKHF1ZXJ5IHN0cmluZywgcGF0aG5hbWUsIGhhc2gpLlxuICAgKiBBY2NvbW1vZGF0ZXMgYm90aCByZWd1bGFyIHBlcmNlbnQgZW5jb2RpbmcgYW5kIHgtd3d3LWZvcm0tdXJsZW5jb2RlZCBmb3JtYXQuXG4gICAqL1xuICB2YXIgZGVjb2RlVVJMQ29tcG9uZW50cyA9IHRydWU7XG5cbiAgLyoqXG4gICAqIEJhc2UgcGF0aC5cbiAgICovXG5cbiAgdmFyIGJhc2UgPSAnJztcblxuICAvKipcbiAgICogUnVubmluZyBmbGFnLlxuICAgKi9cblxuICB2YXIgcnVubmluZztcblxuICAvKipcbiAgICogSGFzaEJhbmcgb3B0aW9uXG4gICAqL1xuXG4gIHZhciBoYXNoYmFuZyA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBQcmV2aW91cyBjb250ZXh0LCBmb3IgY2FwdHVyaW5nXG4gICAqIHBhZ2UgZXhpdCBldmVudHMuXG4gICAqL1xuXG4gIHZhciBwcmV2Q29udGV4dDtcblxuICAvKipcbiAgICogUmVnaXN0ZXIgYHBhdGhgIHdpdGggY2FsbGJhY2sgYGZuKClgLFxuICAgKiBvciByb3V0ZSBgcGF0aGAsIG9yIHJlZGlyZWN0aW9uLFxuICAgKiBvciBgcGFnZS5zdGFydCgpYC5cbiAgICpcbiAgICogICBwYWdlKGZuKTtcbiAgICogICBwYWdlKCcqJywgZm4pO1xuICAgKiAgIHBhZ2UoJy91c2VyLzppZCcsIGxvYWQsIHVzZXIpO1xuICAgKiAgIHBhZ2UoJy91c2VyLycgKyB1c2VyLmlkLCB7IHNvbWU6ICd0aGluZycgfSk7XG4gICAqICAgcGFnZSgnL3VzZXIvJyArIHVzZXIuaWQpO1xuICAgKiAgIHBhZ2UoJy9mcm9tJywgJy90bycpXG4gICAqICAgcGFnZSgpO1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3whRnVuY3Rpb258IU9iamVjdH0gcGF0aFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9uPX0gZm5cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgZnVuY3Rpb24gcGFnZShwYXRoLCBmbikge1xuICAgIC8vIDxjYWxsYmFjaz5cbiAgICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIHBhdGgpIHtcbiAgICAgIHJldHVybiBwYWdlKCcqJywgcGF0aCk7XG4gICAgfVxuXG4gICAgLy8gcm91dGUgPHBhdGg+IHRvIDxjYWxsYmFjayAuLi4+XG4gICAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBmbikge1xuICAgICAgdmFyIHJvdXRlID0gbmV3IFJvdXRlKC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAocGF0aCkpO1xuICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgcGFnZS5jYWxsYmFja3MucHVzaChyb3V0ZS5taWRkbGV3YXJlKGFyZ3VtZW50c1tpXSkpO1xuICAgICAgfVxuICAgICAgLy8gc2hvdyA8cGF0aD4gd2l0aCBbc3RhdGVdXG4gICAgfSBlbHNlIGlmICgnc3RyaW5nJyA9PT0gdHlwZW9mIHBhdGgpIHtcbiAgICAgIHBhZ2VbJ3N0cmluZycgPT09IHR5cGVvZiBmbiA/ICdyZWRpcmVjdCcgOiAnc2hvdyddKHBhdGgsIGZuKTtcbiAgICAgIC8vIHN0YXJ0IFtvcHRpb25zXVxuICAgIH0gZWxzZSB7XG4gICAgICBwYWdlLnN0YXJ0KHBhdGgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbnMuXG4gICAqL1xuXG4gIHBhZ2UuY2FsbGJhY2tzID0gW107XG4gIHBhZ2UuZXhpdHMgPSBbXTtcblxuICAvKipcbiAgICogQ3VycmVudCBwYXRoIGJlaW5nIHByb2Nlc3NlZFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgcGFnZS5jdXJyZW50ID0gJyc7XG5cbiAgLyoqXG4gICAqIE51bWJlciBvZiBwYWdlcyBuYXZpZ2F0ZWQgdG8uXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqXG4gICAqICAgICBwYWdlLmxlbiA9PSAwO1xuICAgKiAgICAgcGFnZSgnL2xvZ2luJyk7XG4gICAqICAgICBwYWdlLmxlbiA9PSAxO1xuICAgKi9cblxuICBwYWdlLmxlbiA9IDA7XG5cbiAgLyoqXG4gICAqIEdldCBvciBzZXQgYmFzZXBhdGggdG8gYHBhdGhgLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBwYWdlLmJhc2UgPSBmdW5jdGlvbihwYXRoKSB7XG4gICAgaWYgKDAgPT09IGFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBiYXNlO1xuICAgIGJhc2UgPSBwYXRoO1xuICB9O1xuXG4gIC8qKlxuICAgKiBCaW5kIHdpdGggdGhlIGdpdmVuIGBvcHRpb25zYC5cbiAgICpcbiAgICogT3B0aW9uczpcbiAgICpcbiAgICogICAgLSBgY2xpY2tgIGJpbmQgdG8gY2xpY2sgZXZlbnRzIFt0cnVlXVxuICAgKiAgICAtIGBwb3BzdGF0ZWAgYmluZCB0byBwb3BzdGF0ZSBbdHJ1ZV1cbiAgICogICAgLSBgZGlzcGF0Y2hgIHBlcmZvcm0gaW5pdGlhbCBkaXNwYXRjaCBbdHJ1ZV1cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgcGFnZS5zdGFydCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBpZiAocnVubmluZykgcmV0dXJuO1xuICAgIHJ1bm5pbmcgPSB0cnVlO1xuICAgIGlmIChmYWxzZSA9PT0gb3B0aW9ucy5kaXNwYXRjaCkgZGlzcGF0Y2ggPSBmYWxzZTtcbiAgICBpZiAoZmFsc2UgPT09IG9wdGlvbnMuZGVjb2RlVVJMQ29tcG9uZW50cykgZGVjb2RlVVJMQ29tcG9uZW50cyA9IGZhbHNlO1xuICAgIGlmIChmYWxzZSAhPT0gb3B0aW9ucy5wb3BzdGF0ZSkgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgb25wb3BzdGF0ZSwgZmFsc2UpO1xuICAgIGlmIChmYWxzZSAhPT0gb3B0aW9ucy5jbGljaykge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihjbGlja0V2ZW50LCBvbmNsaWNrLCBmYWxzZSk7XG4gICAgfVxuICAgIGlmICh0cnVlID09PSBvcHRpb25zLmhhc2hiYW5nKSBoYXNoYmFuZyA9IHRydWU7XG4gICAgaWYgKCFkaXNwYXRjaCkgcmV0dXJuO1xuICAgIHZhciB1cmwgPSAoaGFzaGJhbmcgJiYgfmxvY2F0aW9uLmhhc2guaW5kZXhPZignIyEnKSkgPyBsb2NhdGlvbi5oYXNoLnN1YnN0cigyKSArIGxvY2F0aW9uLnNlYXJjaCA6IGxvY2F0aW9uLnBhdGhuYW1lICsgbG9jYXRpb24uc2VhcmNoICsgbG9jYXRpb24uaGFzaDtcbiAgICBwYWdlLnJlcGxhY2UodXJsLCBudWxsLCB0cnVlLCBkaXNwYXRjaCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFVuYmluZCBjbGljayBhbmQgcG9wc3RhdGUgZXZlbnQgaGFuZGxlcnMuXG4gICAqXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIHBhZ2Uuc3RvcCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghcnVubmluZykgcmV0dXJuO1xuICAgIHBhZ2UuY3VycmVudCA9ICcnO1xuICAgIHBhZ2UubGVuID0gMDtcbiAgICBydW5uaW5nID0gZmFsc2U7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihjbGlja0V2ZW50LCBvbmNsaWNrLCBmYWxzZSk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgb25wb3BzdGF0ZSwgZmFsc2UpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTaG93IGBwYXRoYCB3aXRoIG9wdGlvbmFsIGBzdGF0ZWAgb2JqZWN0LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aFxuICAgKiBAcGFyYW0ge09iamVjdD19IHN0YXRlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbj19IGRpc3BhdGNoXG4gICAqIEBwYXJhbSB7Ym9vbGVhbj19IHB1c2hcbiAgICogQHJldHVybiB7IUNvbnRleHR9XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIHBhZ2Uuc2hvdyA9IGZ1bmN0aW9uKHBhdGgsIHN0YXRlLCBkaXNwYXRjaCwgcHVzaCkge1xuICAgIHZhciBjdHggPSBuZXcgQ29udGV4dChwYXRoLCBzdGF0ZSk7XG4gICAgcGFnZS5jdXJyZW50ID0gY3R4LnBhdGg7XG4gICAgaWYgKGZhbHNlICE9PSBkaXNwYXRjaCkgcGFnZS5kaXNwYXRjaChjdHgpO1xuICAgIGlmIChmYWxzZSAhPT0gY3R4LmhhbmRsZWQgJiYgZmFsc2UgIT09IHB1c2gpIGN0eC5wdXNoU3RhdGUoKTtcbiAgICByZXR1cm4gY3R4O1xuICB9O1xuXG4gIC8qKlxuICAgKiBHb2VzIGJhY2sgaW4gdGhlIGhpc3RvcnlcbiAgICogQmFjayBzaG91bGQgYWx3YXlzIGxldCB0aGUgY3VycmVudCByb3V0ZSBwdXNoIHN0YXRlIGFuZCB0aGVuIGdvIGJhY2suXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIC0gZmFsbGJhY2sgcGF0aCB0byBnbyBiYWNrIGlmIG5vIG1vcmUgaGlzdG9yeSBleGlzdHMsIGlmIHVuZGVmaW5lZCBkZWZhdWx0cyB0byBwYWdlLmJhc2VcbiAgICogQHBhcmFtIHtPYmplY3Q9fSBzdGF0ZVxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBwYWdlLmJhY2sgPSBmdW5jdGlvbihwYXRoLCBzdGF0ZSkge1xuICAgIGlmIChwYWdlLmxlbiA+IDApIHtcbiAgICAgIC8vIHRoaXMgbWF5IG5lZWQgbW9yZSB0ZXN0aW5nIHRvIHNlZSBpZiBhbGwgYnJvd3NlcnNcbiAgICAgIC8vIHdhaXQgZm9yIHRoZSBuZXh0IHRpY2sgdG8gZ28gYmFjayBpbiBoaXN0b3J5XG4gICAgICBoaXN0b3J5LmJhY2soKTtcbiAgICAgIHBhZ2UubGVuLS07XG4gICAgfSBlbHNlIGlmIChwYXRoKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBwYWdlLnNob3cocGF0aCwgc3RhdGUpO1xuICAgICAgfSk7XG4gICAgfWVsc2V7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBwYWdlLnNob3coYmFzZSwgc3RhdGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIHJvdXRlIHRvIHJlZGlyZWN0IGZyb20gb25lIHBhdGggdG8gb3RoZXJcbiAgICogb3IganVzdCByZWRpcmVjdCB0byBhbm90aGVyIHJvdXRlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmcm9tIC0gaWYgcGFyYW0gJ3RvJyBpcyB1bmRlZmluZWQgcmVkaXJlY3RzIHRvICdmcm9tJ1xuICAgKiBAcGFyYW0ge3N0cmluZz19IHRvXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBwYWdlLnJlZGlyZWN0ID0gZnVuY3Rpb24oZnJvbSwgdG8pIHtcbiAgICAvLyBEZWZpbmUgcm91dGUgZnJvbSBhIHBhdGggdG8gYW5vdGhlclxuICAgIGlmICgnc3RyaW5nJyA9PT0gdHlwZW9mIGZyb20gJiYgJ3N0cmluZycgPT09IHR5cGVvZiB0bykge1xuICAgICAgcGFnZShmcm9tLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcGFnZS5yZXBsYWNlKC8qKiBAdHlwZSB7IXN0cmluZ30gKi8gKHRvKSk7XG4gICAgICAgIH0sIDApO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gV2FpdCBmb3IgdGhlIHB1c2ggc3RhdGUgYW5kIHJlcGxhY2UgaXQgd2l0aCBhbm90aGVyXG4gICAgaWYgKCdzdHJpbmcnID09PSB0eXBlb2YgZnJvbSAmJiAndW5kZWZpbmVkJyA9PT0gdHlwZW9mIHRvKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBwYWdlLnJlcGxhY2UoZnJvbSk7XG4gICAgICB9LCAwKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlcGxhY2UgYHBhdGhgIHdpdGggb3B0aW9uYWwgYHN0YXRlYCBvYmplY3QuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoXG4gICAqIEBwYXJhbSB7T2JqZWN0PX0gc3RhdGVcbiAgICogQHBhcmFtIHtib29sZWFuPX0gaW5pdFxuICAgKiBAcGFyYW0ge2Jvb2xlYW49fSBkaXNwYXRjaFxuICAgKiBAcmV0dXJuIHshQ29udGV4dH1cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cblxuICBwYWdlLnJlcGxhY2UgPSBmdW5jdGlvbihwYXRoLCBzdGF0ZSwgaW5pdCwgZGlzcGF0Y2gpIHtcbiAgICB2YXIgY3R4ID0gbmV3IENvbnRleHQocGF0aCwgc3RhdGUpO1xuICAgIHBhZ2UuY3VycmVudCA9IGN0eC5wYXRoO1xuICAgIGN0eC5pbml0ID0gaW5pdDtcbiAgICBjdHguc2F2ZSgpOyAvLyBzYXZlIGJlZm9yZSBkaXNwYXRjaGluZywgd2hpY2ggbWF5IHJlZGlyZWN0XG4gICAgaWYgKGZhbHNlICE9PSBkaXNwYXRjaCkgcGFnZS5kaXNwYXRjaChjdHgpO1xuICAgIHJldHVybiBjdHg7XG4gIH07XG5cbiAgLyoqXG4gICAqIERpc3BhdGNoIHRoZSBnaXZlbiBgY3R4YC5cbiAgICpcbiAgICogQHBhcmFtIHtDb250ZXh0fSBjdHhcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBwYWdlLmRpc3BhdGNoID0gZnVuY3Rpb24oY3R4KSB7XG4gICAgdmFyIHByZXYgPSBwcmV2Q29udGV4dCxcbiAgICAgIGkgPSAwLFxuICAgICAgaiA9IDA7XG5cbiAgICBwcmV2Q29udGV4dCA9IGN0eDtcblxuICAgIGZ1bmN0aW9uIG5leHRFeGl0KCkge1xuICAgICAgdmFyIGZuID0gcGFnZS5leGl0c1tqKytdO1xuICAgICAgaWYgKCFmbikgcmV0dXJuIG5leHRFbnRlcigpO1xuICAgICAgZm4ocHJldiwgbmV4dEV4aXQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5leHRFbnRlcigpIHtcbiAgICAgIHZhciBmbiA9IHBhZ2UuY2FsbGJhY2tzW2krK107XG5cbiAgICAgIGlmIChjdHgucGF0aCAhPT0gcGFnZS5jdXJyZW50KSB7XG4gICAgICAgIGN0eC5oYW5kbGVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICghZm4pIHJldHVybiB1bmhhbmRsZWQoY3R4KTtcbiAgICAgIGZuKGN0eCwgbmV4dEVudGVyKTtcbiAgICB9XG5cbiAgICBpZiAocHJldikge1xuICAgICAgbmV4dEV4aXQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV4dEVudGVyKCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBVbmhhbmRsZWQgYGN0eGAuIFdoZW4gaXQncyBub3QgdGhlIGluaXRpYWxcbiAgICogcG9wc3RhdGUgdGhlbiByZWRpcmVjdC4gSWYgeW91IHdpc2ggdG8gaGFuZGxlXG4gICAqIDQwNHMgb24geW91ciBvd24gdXNlIGBwYWdlKCcqJywgY2FsbGJhY2spYC5cbiAgICpcbiAgICogQHBhcmFtIHtDb250ZXh0fSBjdHhcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBmdW5jdGlvbiB1bmhhbmRsZWQoY3R4KSB7XG4gICAgaWYgKGN0eC5oYW5kbGVkKSByZXR1cm47XG4gICAgdmFyIGN1cnJlbnQ7XG5cbiAgICBpZiAoaGFzaGJhbmcpIHtcbiAgICAgIGN1cnJlbnQgPSBiYXNlICsgbG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjIScsICcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudCA9IGxvY2F0aW9uLnBhdGhuYW1lICsgbG9jYXRpb24uc2VhcmNoO1xuICAgIH1cblxuICAgIGlmIChjdXJyZW50ID09PSBjdHguY2Fub25pY2FsUGF0aCkgcmV0dXJuO1xuICAgIHBhZ2Uuc3RvcCgpO1xuICAgIGN0eC5oYW5kbGVkID0gZmFsc2U7XG4gICAgbG9jYXRpb24uaHJlZiA9IGN0eC5jYW5vbmljYWxQYXRoO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGFuIGV4aXQgcm91dGUgb24gYHBhdGhgIHdpdGhcbiAgICogY2FsbGJhY2sgYGZuKClgLCB3aGljaCB3aWxsIGJlIGNhbGxlZFxuICAgKiBvbiB0aGUgcHJldmlvdXMgY29udGV4dCB3aGVuIGEgbmV3XG4gICAqIHBhZ2UgaXMgdmlzaXRlZC5cbiAgICovXG4gIHBhZ2UuZXhpdCA9IGZ1bmN0aW9uKHBhdGgsIGZuKSB7XG4gICAgaWYgKHR5cGVvZiBwYXRoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gcGFnZS5leGl0KCcqJywgcGF0aCk7XG4gICAgfVxuXG4gICAgdmFyIHJvdXRlID0gbmV3IFJvdXRlKHBhdGgpO1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgKytpKSB7XG4gICAgICBwYWdlLmV4aXRzLnB1c2gocm91dGUubWlkZGxld2FyZShhcmd1bWVudHNbaV0pKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBVUkwgZW5jb2RpbmcgZnJvbSB0aGUgZ2l2ZW4gYHN0cmAuXG4gICAqIEFjY29tbW9kYXRlcyB3aGl0ZXNwYWNlIGluIGJvdGggeC13d3ctZm9ybS11cmxlbmNvZGVkXG4gICAqIGFuZCByZWd1bGFyIHBlcmNlbnQtZW5jb2RlZCBmb3JtLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsIC0gVVJMIGNvbXBvbmVudCB0byBkZWNvZGVcbiAgICovXG4gIGZ1bmN0aW9uIGRlY29kZVVSTEVuY29kZWRVUklDb21wb25lbnQodmFsKSB7XG4gICAgaWYgKHR5cGVvZiB2YWwgIT09ICdzdHJpbmcnKSB7IHJldHVybiB2YWw7IH1cbiAgICByZXR1cm4gZGVjb2RlVVJMQ29tcG9uZW50cyA/IGRlY29kZVVSSUNvbXBvbmVudCh2YWwucmVwbGFjZSgvXFwrL2csICcgJykpIDogdmFsO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgYSBuZXcgXCJyZXF1ZXN0XCIgYENvbnRleHRgXG4gICAqIHdpdGggdGhlIGdpdmVuIGBwYXRoYCBhbmQgb3B0aW9uYWwgaW5pdGlhbCBgc3RhdGVgLlxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGhcbiAgICogQHBhcmFtIHtPYmplY3Q9fSBzdGF0ZVxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBmdW5jdGlvbiBDb250ZXh0KHBhdGgsIHN0YXRlKSB7XG4gICAgaWYgKCcvJyA9PT0gcGF0aFswXSAmJiAwICE9PSBwYXRoLmluZGV4T2YoYmFzZSkpIHBhdGggPSBiYXNlICsgKGhhc2hiYW5nID8gJyMhJyA6ICcnKSArIHBhdGg7XG4gICAgdmFyIGkgPSBwYXRoLmluZGV4T2YoJz8nKTtcblxuICAgIHRoaXMuY2Fub25pY2FsUGF0aCA9IHBhdGg7XG4gICAgdGhpcy5wYXRoID0gcGF0aC5yZXBsYWNlKGJhc2UsICcnKSB8fCAnLyc7XG4gICAgaWYgKGhhc2hiYW5nKSB0aGlzLnBhdGggPSB0aGlzLnBhdGgucmVwbGFjZSgnIyEnLCAnJykgfHwgJy8nO1xuXG4gICAgdGhpcy50aXRsZSA9IGRvY3VtZW50LnRpdGxlO1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZSB8fCB7fTtcbiAgICB0aGlzLnN0YXRlLnBhdGggPSBwYXRoO1xuICAgIHRoaXMucXVlcnlzdHJpbmcgPSB+aSA/IGRlY29kZVVSTEVuY29kZWRVUklDb21wb25lbnQocGF0aC5zbGljZShpICsgMSkpIDogJyc7XG4gICAgdGhpcy5wYXRobmFtZSA9IGRlY29kZVVSTEVuY29kZWRVUklDb21wb25lbnQofmkgPyBwYXRoLnNsaWNlKDAsIGkpIDogcGF0aCk7XG4gICAgdGhpcy5wYXJhbXMgPSB7fTtcblxuICAgIC8vIGZyYWdtZW50XG4gICAgdGhpcy5oYXNoID0gJyc7XG4gICAgaWYgKCFoYXNoYmFuZykge1xuICAgICAgaWYgKCF+dGhpcy5wYXRoLmluZGV4T2YoJyMnKSkgcmV0dXJuO1xuICAgICAgdmFyIHBhcnRzID0gdGhpcy5wYXRoLnNwbGl0KCcjJyk7XG4gICAgICB0aGlzLnBhdGggPSBwYXJ0c1swXTtcbiAgICAgIHRoaXMuaGFzaCA9IGRlY29kZVVSTEVuY29kZWRVUklDb21wb25lbnQocGFydHNbMV0pIHx8ICcnO1xuICAgICAgdGhpcy5xdWVyeXN0cmluZyA9IHRoaXMucXVlcnlzdHJpbmcuc3BsaXQoJyMnKVswXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRXhwb3NlIGBDb250ZXh0YC5cbiAgICovXG5cbiAgcGFnZS5Db250ZXh0ID0gQ29udGV4dDtcblxuICAvKipcbiAgICogUHVzaCBzdGF0ZS5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuXG4gIENvbnRleHQucHJvdG90eXBlLnB1c2hTdGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHBhZ2UubGVuKys7XG4gICAgaGlzdG9yeS5wdXNoU3RhdGUodGhpcy5zdGF0ZSwgdGhpcy50aXRsZSwgaGFzaGJhbmcgJiYgdGhpcy5wYXRoICE9PSAnLycgPyAnIyEnICsgdGhpcy5wYXRoIDogdGhpcy5jYW5vbmljYWxQYXRoKTtcbiAgfTtcblxuICAvKipcbiAgICogU2F2ZSB0aGUgY29udGV4dCBzdGF0ZS5cbiAgICpcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgQ29udGV4dC5wcm90b3R5cGUuc2F2ZSA9IGZ1bmN0aW9uKCkge1xuICAgIGhpc3RvcnkucmVwbGFjZVN0YXRlKHRoaXMuc3RhdGUsIHRoaXMudGl0bGUsIGhhc2hiYW5nICYmIHRoaXMucGF0aCAhPT0gJy8nID8gJyMhJyArIHRoaXMucGF0aCA6IHRoaXMuY2Fub25pY2FsUGF0aCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgYFJvdXRlYCB3aXRoIHRoZSBnaXZlbiBIVFRQIGBwYXRoYCxcbiAgICogYW5kIGFuIGFycmF5IG9mIGBjYWxsYmFja3NgIGFuZCBgb3B0aW9uc2AuXG4gICAqXG4gICAqIE9wdGlvbnM6XG4gICAqXG4gICAqICAgLSBgc2Vuc2l0aXZlYCAgICBlbmFibGUgY2FzZS1zZW5zaXRpdmUgcm91dGVzXG4gICAqICAgLSBgc3RyaWN0YCAgICAgICBlbmFibGUgc3RyaWN0IG1hdGNoaW5nIGZvciB0cmFpbGluZyBzbGFzaGVzXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aFxuICAgKiBAcGFyYW0ge09iamVjdD19IG9wdGlvbnNcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuXG4gIGZ1bmN0aW9uIFJvdXRlKHBhdGgsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB0aGlzLnBhdGggPSAocGF0aCA9PT0gJyonKSA/ICcoLiopJyA6IHBhdGg7XG4gICAgdGhpcy5tZXRob2QgPSAnR0VUJztcbiAgICB0aGlzLnJlZ2V4cCA9IHBhdGh0b1JlZ2V4cCh0aGlzLnBhdGgsXG4gICAgICB0aGlzLmtleXMgPSBbXSxcbiAgICAgIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4cG9zZSBgUm91dGVgLlxuICAgKi9cblxuICBwYWdlLlJvdXRlID0gUm91dGU7XG5cbiAgLyoqXG4gICAqIFJldHVybiByb3V0ZSBtaWRkbGV3YXJlIHdpdGhcbiAgICogdGhlIGdpdmVuIGNhbGxiYWNrIGBmbigpYC5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAgICogQHJldHVybiB7RnVuY3Rpb259XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIFJvdXRlLnByb3RvdHlwZS5taWRkbGV3YXJlID0gZnVuY3Rpb24oZm4pIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGN0eCwgbmV4dCkge1xuICAgICAgaWYgKHNlbGYubWF0Y2goY3R4LnBhdGgsIGN0eC5wYXJhbXMpKSByZXR1cm4gZm4oY3R4LCBuZXh0KTtcbiAgICAgIG5leHQoKTtcbiAgICB9O1xuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGlzIHJvdXRlIG1hdGNoZXMgYHBhdGhgLCBpZiBzb1xuICAgKiBwb3B1bGF0ZSBgcGFyYW1zYC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGhcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG5cbiAgUm91dGUucHJvdG90eXBlLm1hdGNoID0gZnVuY3Rpb24ocGF0aCwgcGFyYW1zKSB7XG4gICAgdmFyIGtleXMgPSB0aGlzLmtleXMsXG4gICAgICBxc0luZGV4ID0gcGF0aC5pbmRleE9mKCc/JyksXG4gICAgICBwYXRobmFtZSA9IH5xc0luZGV4ID8gcGF0aC5zbGljZSgwLCBxc0luZGV4KSA6IHBhdGgsXG4gICAgICBtID0gdGhpcy5yZWdleHAuZXhlYyhkZWNvZGVVUklDb21wb25lbnQocGF0aG5hbWUpKTtcblxuICAgIGlmICghbSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgZm9yICh2YXIgaSA9IDEsIGxlbiA9IG0ubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXTtcbiAgICAgIHZhciB2YWwgPSBkZWNvZGVVUkxFbmNvZGVkVVJJQ29tcG9uZW50KG1baV0pO1xuICAgICAgaWYgKHZhbCAhPT0gdW5kZWZpbmVkIHx8ICEoaGFzT3duUHJvcGVydHkuY2FsbChwYXJhbXMsIGtleS5uYW1lKSkpIHtcbiAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IHZhbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuXG4gIC8qKlxuICAgKiBIYW5kbGUgXCJwb3B1bGF0ZVwiIGV2ZW50cy5cbiAgICovXG5cbiAgdmFyIG9ucG9wc3RhdGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBsb2FkZWQgPSBmYWxzZTtcbiAgICBpZiAoJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiB3aW5kb3cpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgIGxvYWRlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgbG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgfSwgMCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIG9ucG9wc3RhdGUoZSkge1xuICAgICAgaWYgKCFsb2FkZWQpIHJldHVybjtcbiAgICAgIGlmIChlLnN0YXRlKSB7XG4gICAgICAgIHZhciBwYXRoID0gZS5zdGF0ZS5wYXRoO1xuICAgICAgICBwYWdlLnJlcGxhY2UocGF0aCwgZS5zdGF0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYWdlLnNob3cobG9jYXRpb24ucGF0aG5hbWUgKyBsb2NhdGlvbi5oYXNoLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG4gIH0pKCk7XG4gIC8qKlxuICAgKiBIYW5kbGUgXCJjbGlja1wiIGV2ZW50cy5cbiAgICovXG5cbiAgZnVuY3Rpb24gb25jbGljayhlKSB7XG5cbiAgICBpZiAoMSAhPT0gd2hpY2goZSkpIHJldHVybjtcblxuICAgIGlmIChlLm1ldGFLZXkgfHwgZS5jdHJsS2V5IHx8IGUuc2hpZnRLZXkpIHJldHVybjtcbiAgICBpZiAoZS5kZWZhdWx0UHJldmVudGVkKSByZXR1cm47XG5cblxuXG4gICAgLy8gZW5zdXJlIGxpbmtcbiAgICAvLyB1c2Ugc2hhZG93IGRvbSB3aGVuIGF2YWlsYWJsZVxuICAgIHZhciBlbCA9IGUucGF0aCA/IGUucGF0aFswXSA6IGUudGFyZ2V0O1xuICAgIHdoaWxlIChlbCAmJiAnQScgIT09IGVsLm5vZGVOYW1lKSBlbCA9IGVsLnBhcmVudE5vZGU7XG4gICAgaWYgKCFlbCB8fCAnQScgIT09IGVsLm5vZGVOYW1lKSByZXR1cm47XG5cblxuXG4gICAgLy8gSWdub3JlIGlmIHRhZyBoYXNcbiAgICAvLyAxLiBcImRvd25sb2FkXCIgYXR0cmlidXRlXG4gICAgLy8gMi4gcmVsPVwiZXh0ZXJuYWxcIiBhdHRyaWJ1dGVcbiAgICBpZiAoZWwuaGFzQXR0cmlidXRlKCdkb3dubG9hZCcpIHx8IGVsLmdldEF0dHJpYnV0ZSgncmVsJykgPT09ICdleHRlcm5hbCcpIHJldHVybjtcblxuICAgIC8vIGVuc3VyZSBub24taGFzaCBmb3IgdGhlIHNhbWUgcGF0aFxuICAgIHZhciBsaW5rID0gZWwuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgaWYgKCFoYXNoYmFuZyAmJiBlbC5wYXRobmFtZSA9PT0gbG9jYXRpb24ucGF0aG5hbWUgJiYgKGVsLmhhc2ggfHwgJyMnID09PSBsaW5rKSkgcmV0dXJuO1xuXG5cblxuICAgIC8vIENoZWNrIGZvciBtYWlsdG86IGluIHRoZSBocmVmXG4gICAgaWYgKGxpbmsgJiYgbGluay5pbmRleE9mKCdtYWlsdG86JykgPiAtMSkgcmV0dXJuO1xuXG4gICAgLy8gY2hlY2sgdGFyZ2V0XG4gICAgaWYgKGVsLnRhcmdldCkgcmV0dXJuO1xuXG4gICAgLy8geC1vcmlnaW5cbiAgICBpZiAoIXNhbWVPcmlnaW4oZWwuaHJlZikpIHJldHVybjtcblxuXG5cbiAgICAvLyByZWJ1aWxkIHBhdGhcbiAgICB2YXIgcGF0aCA9IGVsLnBhdGhuYW1lICsgZWwuc2VhcmNoICsgKGVsLmhhc2ggfHwgJycpO1xuXG4gICAgLy8gc3RyaXAgbGVhZGluZyBcIi9bZHJpdmUgbGV0dGVyXTpcIiBvbiBOVy5qcyBvbiBXaW5kb3dzXG4gICAgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBwYXRoLm1hdGNoKC9eXFwvW2EtekEtWl06XFwvLykpIHtcbiAgICAgIHBhdGggPSBwYXRoLnJlcGxhY2UoL15cXC9bYS16QS1aXTpcXC8vLCAnLycpO1xuICAgIH1cblxuICAgIC8vIHNhbWUgcGFnZVxuICAgIHZhciBvcmlnID0gcGF0aDtcblxuICAgIGlmIChwYXRoLmluZGV4T2YoYmFzZSkgPT09IDApIHtcbiAgICAgIHBhdGggPSBwYXRoLnN1YnN0cihiYXNlLmxlbmd0aCk7XG4gICAgfVxuXG4gICAgaWYgKGhhc2hiYW5nKSBwYXRoID0gcGF0aC5yZXBsYWNlKCcjIScsICcnKTtcblxuICAgIGlmIChiYXNlICYmIG9yaWcgPT09IHBhdGgpIHJldHVybjtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBwYWdlLnNob3cob3JpZyk7XG4gIH1cblxuICAvKipcbiAgICogRXZlbnQgYnV0dG9uLlxuICAgKi9cblxuICBmdW5jdGlvbiB3aGljaChlKSB7XG4gICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuICAgIHJldHVybiBudWxsID09PSBlLndoaWNoID8gZS5idXR0b24gOiBlLndoaWNoO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGBocmVmYCBpcyB0aGUgc2FtZSBvcmlnaW4uXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHNhbWVPcmlnaW4oaHJlZikge1xuICAgIHZhciBvcmlnaW4gPSBsb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyBsb2NhdGlvbi5ob3N0bmFtZTtcbiAgICBpZiAobG9jYXRpb24ucG9ydCkgb3JpZ2luICs9ICc6JyArIGxvY2F0aW9uLnBvcnQ7XG4gICAgcmV0dXJuIChocmVmICYmICgwID09PSBocmVmLmluZGV4T2Yob3JpZ2luKSkpO1xuICB9XG5cbiAgcGFnZS5zYW1lT3JpZ2luID0gc2FtZU9yaWdpbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wYWdlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5c3RyaW5nJyk7XG5cbmNvbnN0IHRlbXBsYXRlcyA9IHtcblx0aG9tZTogcmVxdWlyZSgnLi4vdGVtcGxhdGVzL2hvbWUuaGJzJyksXG5cdHBlb3BsZTogcmVxdWlyZSgnLi4vdGVtcGxhdGVzL3Blb3BsZS5oYnMnKSxcblx0cGVyc29uOiByZXF1aXJlKCcuLi90ZW1wbGF0ZXMvcGVyc29uLmhicycpLFxuXHRpdGVtOiByZXF1aXJlKCcuLi90ZW1wbGF0ZXMvaXRlbS5oYnMnKVxufTtcblxuY29uc3QgcGFydGlhbHMgPSB7XG5cdHBlb3BsZUxpc3Q6IHJlcXVpcmUoJy4uL3RlbXBsYXRlcy9fcGVvcGxlTGlzdC5oYnMnKVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihkYXRhLCB4aHIsIHBhZ2UsIGFwaVF1ZXJ5LCByZW5kZXJUYXJnZXQsIHF1ZXJ5VmFsdWVzKSB7XG5cbiAgICBsZXQgY3VycmVudExhYmVsID0gdW5kZWZpbmVkO1xuXG4gICAgZGF0YSA9IGRhdGEubWFwKChkYXR1bSkgPT4ge1xuICAgICAgICBpZihkYXR1bS5sYXN0bmFtZV9rZXluYW1lID09PSBudWxsID8gY3VycmVudExhYmVsICE9PSBudWxsIDogZGF0dW0ubGFzdG5hbWVfa2V5bmFtZVswXSAhPT0gY3VycmVudExhYmVsKSB7XG4gICAgICAgICAgICBkYXR1bS5oZWFkZXIgPSBkYXR1bS5sYXN0bmFtZV9rZXluYW1lID09PSBudWxsID8gJ1Vua25vd24nIDogZGF0dW0ubGFzdG5hbWVfa2V5bmFtZVswXTtcbiAgICAgICAgICAgIGN1cnJlbnRMYWJlbCA9IGRhdHVtLmxhc3RuYW1lX2tleW5hbWUgPT09IG51bGwgPyBudWxsIDogZGF0dW0ubGFzdG5hbWVfa2V5bmFtZVswXTtcbiAgICAgICAgfVxuICAgICAgICBpZihkYXR1bS5maXJzdG5hbWUgPT09IG51bGwgJiYgZGF0dW0ubGFzdG5hbWVfa2V5bmFtZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgZGF0dW0ubGFzdG5hbWVfa2V5bmFtZSA9ICdVbmtub3duIE5hbWUnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXR1bTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0LXRhcmdldCcpLmlubmVySFRNTCA9IHBhcnRpYWxzLnBlb3BsZUxpc3QoeyBwZW9wbGU6IGRhdGEgfSk7XG5cbiAgICBpZiAoZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICQoJyNtYWluLXBhZ2luYXRpb24nKS50d2JzUGFnaW5hdGlvbih7XG4gICAgICAgICAgICB0b3RhbFBhZ2VzOiBNYXRoLmNlaWwocGFyc2VJbnQoeGhyLmdldFJlc3BvbnNlSGVhZGVyKCdYLXRvdGFsLWNvdW50JykpL2FwaVF1ZXJ5LmxpbWl0KSxcbiAgICAgICAgICAgIHZpc2libGVQYWdlczogNyxcbiAgICAgICAgICAgIHN0YXJ0UGFnZTogTWF0aC5mbG9vcihwYXJzZUludChhcGlRdWVyeS5vZmZzZXQpL3BhcnNlSW50KGFwaVF1ZXJ5LmxpbWl0KSkgKyAxLFxuICAgICAgICAgICAgaW5pdGlhdGVTdGFydFBhZ2VDbGljazogZmFsc2UsXG4gICAgICAgICAgICBvblBhZ2VDbGljazogZnVuY3Rpb24gKGV2ZW50LCBwYWdlTnVtKSB7XG4gICAgICAgICAgICAgICAgYXBpUXVlcnkub2Zmc2V0ID0gKHBhZ2VOdW0gLSAxKSAqIGFwaVF1ZXJ5LmxpbWl0O1xuICAgICAgICAgICAgICAgIHBhZ2UucmVkaXJlY3QoJy8/JyArIHF1ZXJ5U3RyaW5nLnN0cmluZ2lmeShhcGlRdWVyeSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9ICAgIFxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcGVvcGxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5c3RyaW5nJyk7XG5cbmNvbnN0IHBhcnRpYWxzID0ge1xuXHRwZW9wbGVMaXN0OiByZXF1aXJlKCcuLi90ZW1wbGF0ZXMvX3Blb3BsZUxpc3QuaGJzJyksXG4gICAgcHViTGlzdDogcmVxdWlyZSgnLi4vdGVtcGxhdGVzL19wdWJMaXN0LmhicycpXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRhdGEsIHhociwgcGFnZSwgYXBpUXVlcnksIHJlbmRlclRhcmdldCwgcXVlcnlWYWx1ZXMpIHtcblxuICAgIGxldCBjdXJyZW50TGFiZWwgPSB1bmRlZmluZWQ7XG5cbiAgICBkYXRhID0gZGF0YS5tYXAoKGRhdHVtKSA9PiB7XG4gICAgICAgIGlmKGRhdHVtLnRpdGxlID09PSBudWxsID8gY3VycmVudExhYmVsICE9PSBudWxsIDogZGF0dW0udGl0bGVbMF0gIT09IGN1cnJlbnRMYWJlbCkge1xuICAgICAgICAgICAgZGF0dW0uaGVhZGVyID0gZGF0dW0udGl0bGUgPT09IG51bGwgPyAnVW5rbm93bicgOiBkYXR1bS50aXRsZVswXTtcbiAgICAgICAgICAgIGN1cnJlbnRMYWJlbCA9IGRhdHVtLnRpdGxlID09PSBudWxsID8gbnVsbCA6IGRhdHVtLnRpdGxlWzBdO1xuICAgICAgICB9XG4gICAgICAgIGlmKGRhdHVtLnRpdGxlID09PSBudWxsICYmIGRhdHVtLnRpdGxlID09PSBudWxsKSB7XG4gICAgICAgICAgICBkYXR1bS50aXRsZSA9ICdVbmtub3duIFRpdGxlJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0dW07XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdC10YXJnZXQnKS5pbm5lckhUTUwgPSBwYXJ0aWFscy5wdWJMaXN0KHsgcHViczogZGF0YSB9KTtcblxuICAgIGlmIChkYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgJCgnI21haW4tcGFnaW5hdGlvbicpLnR3YnNQYWdpbmF0aW9uKHtcbiAgICAgICAgICAgIHRvdGFsUGFnZXM6IE1hdGguY2VpbChwYXJzZUludCh4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ1gtdG90YWwtY291bnQnKSkvYXBpUXVlcnkubGltaXQpLFxuICAgICAgICAgICAgdmlzaWJsZVBhZ2VzOiA3LFxuICAgICAgICAgICAgc3RhcnRQYWdlOiBNYXRoLmZsb29yKHBhcnNlSW50KGFwaVF1ZXJ5Lm9mZnNldCkvcGFyc2VJbnQoYXBpUXVlcnkubGltaXQpKSArIDEsXG4gICAgICAgICAgICBpbml0aWF0ZVN0YXJ0UGFnZUNsaWNrOiBmYWxzZSxcbiAgICAgICAgICAgIG9uUGFnZUNsaWNrOiBmdW5jdGlvbiAoZXZlbnQsIHBhZ2VOdW0pIHtcbiAgICAgICAgICAgICAgICBhcGlRdWVyeS5vZmZzZXQgPSAocGFnZU51bSAtIDEpICogYXBpUXVlcnkubGltaXQ7XG4gICAgICAgICAgICAgICAgcGFnZS5yZWRpcmVjdCgnL3B1YmxpY2F0aW9ucy8/JyArIHF1ZXJ5U3RyaW5nLnN0cmluZ2lmeShhcGlRdWVyeSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9wdWJsaWNhdGlvbnMuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvfi9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbi8vIElmIG9iai5oYXNPd25Qcm9wZXJ0eSBoYXMgYmVlbiBvdmVycmlkZGVuLCB0aGVuIGNhbGxpbmdcbi8vIG9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSB3aWxsIGJyZWFrLlxuLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vam95ZW50L25vZGUvaXNzdWVzLzE3MDdcbmZ1bmN0aW9uIGhhc093blByb3BlcnR5KG9iaiwgcHJvcCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ocXMsIHNlcCwgZXEsIG9wdGlvbnMpIHtcbiAgc2VwID0gc2VwIHx8ICcmJztcbiAgZXEgPSBlcSB8fCAnPSc7XG4gIHZhciBvYmogPSB7fTtcblxuICBpZiAodHlwZW9mIHFzICE9PSAnc3RyaW5nJyB8fCBxcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgdmFyIHJlZ2V4cCA9IC9cXCsvZztcbiAgcXMgPSBxcy5zcGxpdChzZXApO1xuXG4gIHZhciBtYXhLZXlzID0gMTAwMDtcbiAgaWYgKG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubWF4S2V5cyA9PT0gJ251bWJlcicpIHtcbiAgICBtYXhLZXlzID0gb3B0aW9ucy5tYXhLZXlzO1xuICB9XG5cbiAgdmFyIGxlbiA9IHFzLmxlbmd0aDtcbiAgLy8gbWF4S2V5cyA8PSAwIG1lYW5zIHRoYXQgd2Ugc2hvdWxkIG5vdCBsaW1pdCBrZXlzIGNvdW50XG4gIGlmIChtYXhLZXlzID4gMCAmJiBsZW4gPiBtYXhLZXlzKSB7XG4gICAgbGVuID0gbWF4S2V5cztcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICB2YXIgeCA9IHFzW2ldLnJlcGxhY2UocmVnZXhwLCAnJTIwJyksXG4gICAgICAgIGlkeCA9IHguaW5kZXhPZihlcSksXG4gICAgICAgIGtzdHIsIHZzdHIsIGssIHY7XG5cbiAgICBpZiAoaWR4ID49IDApIHtcbiAgICAgIGtzdHIgPSB4LnN1YnN0cigwLCBpZHgpO1xuICAgICAgdnN0ciA9IHguc3Vic3RyKGlkeCArIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBrc3RyID0geDtcbiAgICAgIHZzdHIgPSAnJztcbiAgICB9XG5cbiAgICBrID0gZGVjb2RlVVJJQ29tcG9uZW50KGtzdHIpO1xuICAgIHYgPSBkZWNvZGVVUklDb21wb25lbnQodnN0cik7XG5cbiAgICBpZiAoIWhhc093blByb3BlcnR5KG9iaiwgaykpIHtcbiAgICAgIG9ialtrXSA9IHY7XG4gICAgfSBlbHNlIGlmIChpc0FycmF5KG9ialtrXSkpIHtcbiAgICAgIG9ialtrXS5wdXNoKHYpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmpba10gPSBbb2JqW2tdLCB2XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqO1xufTtcblxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uICh4cykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHhzKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvfi9xdWVyeXN0cmluZy1lczMvZGVjb2RlLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgc3RyaW5naWZ5UHJpbWl0aXZlID0gZnVuY3Rpb24odikge1xuICBzd2l0Y2ggKHR5cGVvZiB2KSB7XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIHJldHVybiB2O1xuXG4gICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICByZXR1cm4gdiA/ICd0cnVlJyA6ICdmYWxzZSc7XG5cbiAgICBjYXNlICdudW1iZXInOlxuICAgICAgcmV0dXJuIGlzRmluaXRlKHYpID8gdiA6ICcnO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAnJztcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmosIHNlcCwgZXEsIG5hbWUpIHtcbiAgc2VwID0gc2VwIHx8ICcmJztcbiAgZXEgPSBlcSB8fCAnPSc7XG4gIGlmIChvYmogPT09IG51bGwpIHtcbiAgICBvYmogPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbWFwKG9iamVjdEtleXMob2JqKSwgZnVuY3Rpb24oaykge1xuICAgICAgdmFyIGtzID0gZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZShrKSkgKyBlcTtcbiAgICAgIGlmIChpc0FycmF5KG9ialtrXSkpIHtcbiAgICAgICAgcmV0dXJuIG1hcChvYmpba10sIGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICByZXR1cm4ga3MgKyBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKHYpKTtcbiAgICAgICAgfSkuam9pbihzZXApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGtzICsgZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZShvYmpba10pKTtcbiAgICAgIH1cbiAgICB9KS5qb2luKHNlcCk7XG5cbiAgfVxuXG4gIGlmICghbmFtZSkgcmV0dXJuICcnO1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZShuYW1lKSkgKyBlcSArXG4gICAgICAgICBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKG9iaikpO1xufTtcblxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uICh4cykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHhzKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5cbmZ1bmN0aW9uIG1hcCAoeHMsIGYpIHtcbiAgaWYgKHhzLm1hcCkgcmV0dXJuIHhzLm1hcChmKTtcbiAgdmFyIHJlcyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHhzLmxlbmd0aDsgaSsrKSB7XG4gICAgcmVzLnB1c2goZih4c1tpXSwgaSkpO1xuICB9XG4gIHJldHVybiByZXM7XG59XG5cbnZhciBvYmplY3RLZXlzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24gKG9iaikge1xuICB2YXIgcmVzID0gW107XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgcmVzLnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9+L3F1ZXJ5c3RyaW5nLWVzMy9lbmNvZGUuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcIkQ6XFxcXGlyaXNoLXdyaXRlcnNcXFxcbm9kZV9tb2R1bGVzXFxcXGhhbmRsZWJhcnNcXFxccnVudGltZS5qc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgYWxpYXMxPWRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDoge307XG5cbiAgcmV0dXJuIFwiPGRpdiBjbGFzcz0naW5mbyc+XFxuICAgIDxzcGFuPlR5cGU6IEFydGljbGU8L3NwYW4+XFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVyc1tcImlmXCJdLmNhbGwoYWxpYXMxLCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmFydGljbGUgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLmFydGljbGVfc3Vic2VyaWVzIDogc3RhY2sxKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgyLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCJcXG5cIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzW1wiaWZcIl0uY2FsbChhbGlhczEsKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuYXJ0aWNsZSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEuY29udGludWF0aW9uX2VuZCA6IHN0YWNrMSkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oNCwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiXFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVyc1tcImlmXCJdLmNhbGwoYWxpYXMxLCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmFydGljbGUgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLmNvbnRpbnVlZF9vbiA6IHN0YWNrMSkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oNiwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiXFxuXFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVyc1tcImlmXCJdLmNhbGwoYWxpYXMxLCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmFydGljbGUgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLnN0YXJ0X3BhZ2UgOiBzdGFjazEpLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDgsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIlxcblxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnNbXCJpZlwiXS5jYWxsKGFsaWFzMSwoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5hcnRpY2xlIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5lbmRfcGFnZSA6IHN0YWNrMSkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMTAsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIlxcblxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnNbXCJpZlwiXS5jYWxsKGFsaWFzMSwoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5hcnRpY2xlIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5pbGx1c3RyYXRlZCA6IHN0YWNrMSkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMTIsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnNbXCJpZlwiXS5jYWxsKGFsaWFzMSwoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5hcnRpY2xlIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5ub3RlcyA6IHN0YWNrMSkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMTQsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIjwvZGl2PlxcblwiO1xufSxcIjJcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuIFwiXHRcdDxzcGFuPkFydGljbGUgc3Vic2VyaWVzOiBcIlxuICAgICsgY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24oY29udGFpbmVyLmxhbWJkYSgoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb3JlIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5hcnRpY2xlX3N1YnNlcmllcyA6IHN0YWNrMSksIGRlcHRoMCkpXG4gICAgKyBcIjwvc3Bhbj5cXG5cIjtcbn0sXCI0XCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxO1xuXG4gIHJldHVybiBcIlx0XHQ8c3Bhbj5Db250aW51YXRpb24gZW5kOiBcIlxuICAgICsgY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24oY29udGFpbmVyLmxhbWJkYSgoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5hcnRpY2xlIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5jb250aW51YXRpb25fZW5kIDogc3RhY2sxKSwgZGVwdGgwKSlcbiAgICArIFwiPC9zcGFuPlxcblwiO1xufSxcIjZcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuIFwiXHRcdDxzcGFuPkNvbnRpbnVlZCBvbjogXCJcbiAgICArIGNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uKGNvbnRhaW5lci5sYW1iZGEoKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuYXJ0aWNsZSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEuY29udGludWVkX29uIDogc3RhY2sxKSwgZGVwdGgwKSlcbiAgICArIFwiPC9zcGFuPlxcblwiO1xufSxcIjhcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuIFwiXHRcdDxzcGFuPlN0YXJ0IHBhZ2U6IFwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbihjb250YWluZXIubGFtYmRhKCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmFydGljbGUgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLnN0YXJ0X3BhZ2UgOiBzdGFjazEpLCBkZXB0aDApKVxuICAgICsgXCI8L3NwYW4+XFxuXCI7XG59LFwiMTBcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuIFwiXHRcdDxzcGFuPkVuZCBwYWdlOiBcIlxuICAgICsgY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24oY29udGFpbmVyLmxhbWJkYSgoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5hcnRpY2xlIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5lbmRfcGFnZSA6IHN0YWNrMSksIGRlcHRoMCkpXG4gICAgKyBcIjwvc3Bhbj5cXG5cIjtcbn0sXCIxMlwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMTtcblxuICByZXR1cm4gXCJcdFx0PHNwYW4+SWxsdXN0cmF0ZWQ6IFwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbihjb250YWluZXIubGFtYmRhKCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmFydGljbGUgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLmlsbHVzdHJhdGVkIDogc3RhY2sxKSwgZGVwdGgwKSlcbiAgICArIFwiPC9zcGFuPlxcblwiO1xufSxcIjE0XCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxO1xuXG4gIHJldHVybiBcIlx0XHQ8c3Bhbj5Ob3RlczogXCJcbiAgICArIGNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uKGNvbnRhaW5lci5sYW1iZGEoKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuYXJ0aWNsZSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEubm90ZXMgOiBzdGFjazEpLCBkZXB0aDApKVxuICAgICsgXCI8L3NwYW4+XFxuXCI7XG59LFwiY29tcGlsZXJcIjpbNyxcIj49IDQuMC4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMTtcblxuICByZXR1cm4gKChzdGFjazEgPSBoZWxwZXJzW1wiaWZcIl0uY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IHt9LChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5hcnRpY2xlIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKTtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vdGVtcGxhdGVzL19hcnRpY2xlLmhic1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiRDpcXFxcaXJpc2gtd3JpdGVyc1xcXFxub2RlX21vZHVsZXNcXFxcaGFuZGxlYmFyc1xcXFxydW50aW1lLmpzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCIxXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBhbGlhczE9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiB7fTtcblxuICByZXR1cm4gXCI8ZGl2IGNsYXNzPSdpbmZvJz5cXG4gICAgPHNwYW4+VHlwZTogQm9vazwvc3Bhbj5cXG4gIFxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnNbXCJpZlwiXS5jYWxsKGFsaWFzMSwoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5ib29rIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5udW1iZXJfb2Zfdm9sdW1lcyA6IHN0YWNrMSkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMiwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiXFxuXFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVyc1tcImlmXCJdLmNhbGwoYWxpYXMxLCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmJvb2sgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLm51bWJlcl9vZl9wYWdlcyA6IHN0YWNrMSkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oNCwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiXFxuXFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVyc1tcImlmXCJdLmNhbGwoYWxpYXMxLCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmJvb2sgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLmtub3duX3JlcHJpbnRzIDogc3RhY2sxKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSg2LCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCJcXG5cXG5cIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzW1wiaWZcIl0uY2FsbChhbGlhczEsKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuYm9vayA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEuaWxsdXN0cmF0ZWQgOiBzdGFjazEpLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDgsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnNbXCJpZlwiXS5jYWxsKGFsaWFzMSwoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5ib29rIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5ub3RlcyA6IHN0YWNrMSkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMTAsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIjwvZGl2PlxcblwiO1xufSxcIjJcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuIFwiXHRcdDxzcGFuPk51bWJlciBvZiB2b2x1bWVzOiBcIlxuICAgICsgY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24oY29udGFpbmVyLmxhbWJkYSgoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5ib29rIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5udW1iZXJfb2Zfdm9sdW1lcyA6IHN0YWNrMSksIGRlcHRoMCkpXG4gICAgKyBcIjwvc3Bhbj5cXG5cIjtcbn0sXCI0XCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxO1xuXG4gIHJldHVybiBcIlx0XHQ8c3Bhbj5OdW1iZXIgb2YgcGFnZXM6IFwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbihjb250YWluZXIubGFtYmRhKCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmJvb2sgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLm51bWJlcl9vZl9wYWdlcyA6IHN0YWNrMSksIGRlcHRoMCkpXG4gICAgKyBcIjwvc3Bhbj5cXG5cIjtcbn0sXCI2XCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxO1xuXG4gIHJldHVybiBcIlx0XHQ8c3Bhbj5Lbm93biByZXByaW50czogXCJcbiAgICArIGNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uKGNvbnRhaW5lci5sYW1iZGEoKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuYm9vayA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEua25vd25fcmVwcmludHMgOiBzdGFjazEpLCBkZXB0aDApKVxuICAgICsgXCI8L3NwYW4+XFxuXCI7XG59LFwiOFwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMTtcblxuICByZXR1cm4gXCJcdFx0PHNwYW4+SWxsdXN0cmF0ZWQ6IFwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbihjb250YWluZXIubGFtYmRhKCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmJvb2sgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLmlsbHVzdHJhdGVkIDogc3RhY2sxKSwgZGVwdGgwKSlcbiAgICArIFwiPC9zcGFuPlxcblwiO1xufSxcIjEwXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxO1xuXG4gIHJldHVybiBcIlx0XHQ8c3Bhbj5Ob3RlczogXCJcbiAgICArIGNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uKGNvbnRhaW5lci5sYW1iZGEoKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuYm9vayA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEubm90ZXMgOiBzdGFjazEpLCBkZXB0aDApKVxuICAgICsgXCI8L3NwYW4+XFxuXCI7XG59LFwiY29tcGlsZXJcIjpbNyxcIj49IDQuMC4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMTtcblxuICByZXR1cm4gKChzdGFjazEgPSBoZWxwZXJzW1wiaWZcIl0uY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IHt9LChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5ib29rIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKTtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vdGVtcGxhdGVzL19ib29rLmhic1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiRDpcXFxcaXJpc2gtd3JpdGVyc1xcXFxub2RlX21vZHVsZXNcXFxcaGFuZGxlYmFyc1xcXFxydW50aW1lLmpzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCIxXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBhbGlhczE9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiB7fTtcblxuICByZXR1cm4gXCI8ZGl2IGNsYXNzPSdpbmZvJz5cXG4gICAgPHNwYW4+VHlwZTogSm91cm5hbCBFZGl0aW9uPC9zcGFuPlxcbiAgXFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVyc1tcImlmXCJdLmNhbGwoYWxpYXMxLCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmpvdXJuYWxFZGl0aW9uIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5zZWFzb24gOiBzdGFjazEpLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDIsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIlxcblxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnNbXCJpZlwiXS5jYWxsKGFsaWFzMSwoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5qb3VybmFsRWRpdGlvbiA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEuZnJvbV95ZWFyIDogc3RhY2sxKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSg0LCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCJcXG5cXG5cIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzW1wiaWZcIl0uY2FsbChhbGlhczEsKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuam91cm5hbEVkaXRpb24gOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLnRvX3llYXIgOiBzdGFjazEpLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDYsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIlxcblxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnNbXCJpZlwiXS5jYWxsKGFsaWFzMSwoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5qb3VybmFsRWRpdGlvbiA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEuZWRpdGlvbl9zdWJzZXJpZXMgOiBzdGFjazEpLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDgsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnNbXCJpZlwiXS5jYWxsKGFsaWFzMSwoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5qb3VybmFsRWRpdGlvbiA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEubm90ZXMgOiBzdGFjazEpLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEwLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCI8L2Rpdj5cXG5cIjtcbn0sXCIyXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxO1xuXG4gIHJldHVybiBcIlx0XHQ8c3Bhbj5TZWFzb246IFwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbihjb250YWluZXIubGFtYmRhKCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmpvdXJuYWxFZGl0aW9uIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5zZWFzb24gOiBzdGFjazEpLCBkZXB0aDApKVxuICAgICsgXCI8L3NwYW4+XFxuXCI7XG59LFwiNFwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgYWxpYXMxPWNvbnRhaW5lci5sYW1iZGEsIGFsaWFzMj1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbjtcblxuICByZXR1cm4gXCJcdFx0PHNwYW4+RnJvbTogXCJcbiAgICArIGFsaWFzMihhbGlhczEoKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuam91cm5hbEVkaXRpb24gOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLmZyb21fbW9udGggOiBzdGFjazEpLCBkZXB0aDApKVxuICAgICsgXCIgXCJcbiAgICArIGFsaWFzMihhbGlhczEoKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuam91cm5hbEVkaXRpb24gOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLmZyb21feWVhciA6IHN0YWNrMSksIGRlcHRoMCkpXG4gICAgKyBcIjwvc3Bhbj5cXG5cIjtcbn0sXCI2XCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBhbGlhczE9Y29udGFpbmVyLmxhbWJkYSwgYWxpYXMyPWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uO1xuXG4gIHJldHVybiBcIlx0XHQ8c3Bhbj5UbzogXCJcbiAgICArIGFsaWFzMihhbGlhczEoKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuam91cm5hbEVkaXRpb24gOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLnRvX3llYXIgOiBzdGFjazEpLCBkZXB0aDApKVxuICAgICsgXCIgXCJcbiAgICArIGFsaWFzMihhbGlhczEoKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuam91cm5hbEVkaXRpb24gOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLnRvX3llYXIgOiBzdGFjazEpLCBkZXB0aDApKVxuICAgICsgXCI8L3NwYW4+XFxuXCI7XG59LFwiOFwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMTtcblxuICByZXR1cm4gXCJcdFx0PHNwYW4+RWRpdGlvbiBzdWJzZXJpZXM6IFwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbihjb250YWluZXIubGFtYmRhKCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmpvdXJuYWxFZGl0aW9uIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5lZGl0aW9uX3N1YnNlcmllcyA6IHN0YWNrMSksIGRlcHRoMCkpXG4gICAgKyBcIjwvc3Bhbj5cXG5cIjtcbn0sXCIxMFwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMTtcblxuICByZXR1cm4gXCJcdFx0PHNwYW4+Tm90ZXM6IFwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbihjb250YWluZXIubGFtYmRhKCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmpvdXJuYWxFZGl0aW9uIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5ub3RlcyA6IHN0YWNrMSksIGRlcHRoMCkpXG4gICAgKyBcIjwvc3Bhbj5cXG5cIjtcbn0sXCJjb21waWxlclwiOls3LFwiPj0gNC4wLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxO1xuXG4gIHJldHVybiAoKHN0YWNrMSA9IGhlbHBlcnNbXCJpZlwiXS5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDoge30sKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmpvdXJuYWxFZGl0aW9uIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKTtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vdGVtcGxhdGVzL19qb3VybmFsLmhic1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiRDpcXFxcaXJpc2gtd3JpdGVyc1xcXFxub2RlX21vZHVsZXNcXFxcaGFuZGxlYmFyc1xcXFxydW50aW1lLmpzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCIxXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBhbGlhczE9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiB7fTtcblxuICByZXR1cm4gXCI8ZGl2IGNsYXNzPSdpbmZvJz5cXG4gICAgPHNwYW4+VHlwZTogTW92aWU8L3NwYW4+XFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVyc1tcImlmXCJdLmNhbGwoYWxpYXMxLCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm1vdmllIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5jb3VudHJ5X29mX29yaWdpbiA6IHN0YWNrMSkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMiwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArICgoc3RhY2sxID0gaGVscGVyc1tcImlmXCJdLmNhbGwoYWxpYXMxLCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm1vdmllIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5kYXRlX2R2ZCA6IHN0YWNrMSkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oNCwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArICgoc3RhY2sxID0gaGVscGVyc1tcImlmXCJdLmNhbGwoYWxpYXMxLCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm1vdmllIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5kYXRlX3ZpZGVvIDogc3RhY2sxKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSg2LCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzW1wiaWZcIl0uY2FsbChhbGlhczEsKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubW92aWUgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLmxlbmd0aF9taW51dGVzIDogc3RhY2sxKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSg4LCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzW1wiaWZcIl0uY2FsbChhbGlhczEsKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubW92aWUgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLm5vdGVzIDogc3RhY2sxKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxMCwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiPC9kaXY+XFxuXCI7XG59LFwiMlwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgYWxpYXMxPWNvbnRhaW5lci5sYW1iZGEsIGFsaWFzMj1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbjtcblxuICByZXR1cm4gXCJcdFx0PHNwYW4+Q291bnRyeSBvZiBvcmlnaW46IFwiXG4gICAgKyBhbGlhczIoYWxpYXMxKCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm1vdmllIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5jb3VudHJ5X29mX29yaWdpbiA6IHN0YWNrMSksIGRlcHRoMCkpXG4gICAgKyBcIiB8IFwiXG4gICAgKyBhbGlhczIoYWxpYXMxKCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm1vdmllIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5jb3VudHJ5X29mX29yaWdpbjIgOiBzdGFjazEpLCBkZXB0aDApKVxuICAgICsgXCIgfCBcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5tb3ZpZSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEuY291bnRyeV9vZl9vcmlnaW4zIDogc3RhY2sxKSwgZGVwdGgwKSlcbiAgICArIFwiPC9zcGFuPlxcblwiO1xufSxcIjRcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuIFwiXHRcdDxzcGFuPkRhdGUgb2YgZHZkIHJlbGVhc2U6IFwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbihjb250YWluZXIubGFtYmRhKCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm1vdmllIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5kYXRlX2R2ZCA6IHN0YWNrMSksIGRlcHRoMCkpXG4gICAgKyBcIjwvc3Bhbj5cXG5cIjtcbn0sXCI2XCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxO1xuXG4gIHJldHVybiBcIlx0XHQ8c3Bhbj5EYXRlIG9mIHZpZGVvIHJlbGVhc2U6IFwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbihjb250YWluZXIubGFtYmRhKCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm1vdmllIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5kYXRlX3ZpZGVvIDogc3RhY2sxKSwgZGVwdGgwKSlcbiAgICArIFwiPC9zcGFuPlxcblwiO1xufSxcIjhcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuIFwiICAgICAgICA8c3Bhbj5MZW5ndGggKG1pbnV0ZXMpOiBcIlxuICAgICsgY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24oY29udGFpbmVyLmxhbWJkYSgoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5tb3ZpZSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEubGVuZ3RoX21pbnV0ZXMgOiBzdGFjazEpLCBkZXB0aDApKVxuICAgICsgXCI8L3NwYW4+XFxuXCI7XG59LFwiMTBcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuIFwiXHRcdDxzcGFuPk5vdGVzOiBcIlxuICAgICsgY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24oY29udGFpbmVyLmxhbWJkYSgoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5tb3ZpZSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEubm90ZXMgOiBzdGFjazEpLCBkZXB0aDApKVxuICAgICsgXCI8L3NwYW4+XFxuXCI7XG59LFwiY29tcGlsZXJcIjpbNyxcIj49IDQuMC4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMTtcblxuICByZXR1cm4gKChzdGFjazEgPSBoZWxwZXJzW1wiaWZcIl0uY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IHt9LChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5tb3ZpZSA6IGRlcHRoMCkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMSwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIik7XG59LFwidXNlRGF0YVwiOnRydWV9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3RlbXBsYXRlcy9fbW92aWUuaGJzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCJEOlxcXFxpcmlzaC13cml0ZXJzXFxcXG5vZGVfbW9kdWxlc1xcXFxoYW5kbGViYXJzXFxcXHJ1bnRpbWUuanNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcIjFcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IHt9O1xuXG4gIHJldHVybiBcIjxkaXYgY2xhc3M9J2luZm8nPlxcbiAgICA8c3Bhbj5UeXBlOiBQbGF5PC9zcGFuPlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnNbXCJpZlwiXS5jYWxsKGFsaWFzMSwoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wbGF5IDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5wbGFjZV9vZl9maXJzdF9wcm9kdWN0aW9uX2NvdW50cnkgOiBzdGFjazEpLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDIsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnNbXCJpZlwiXS5jYWxsKGFsaWFzMSwoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wbGF5IDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5wbGFjZV9vZl9maXJzdF9yZXZpdmFsX2NvdW50cnkgOiBzdGFjazEpLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDQsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnNbXCJpZlwiXS5jYWxsKGFsaWFzMSwoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wbGF5IDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5maXJzdF9yZXZpdmFsX3llYXIgOiBzdGFjazEpLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDYsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnNbXCJpZlwiXS5jYWxsKGFsaWFzMSwoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wbGF5IDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS50aGVhdHJlX2NvbXBhbnkgOiBzdGFjazEpLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDgsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnNbXCJpZlwiXS5jYWxsKGFsaWFzMSwoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wbGF5IDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS52ZW51ZSA6IHN0YWNrMSkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMTAsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnNbXCJpZlwiXS5jYWxsKGFsaWFzMSwoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wbGF5IDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5ub3RlcyA6IHN0YWNrMSkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMTIsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIjwvZGl2PlxcblwiO1xufSxcIjJcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGFsaWFzMT1jb250YWluZXIubGFtYmRhLCBhbGlhczI9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb247XG5cbiAgcmV0dXJuIFwiXHRcdFx0PHNwYW4+UGxhY2Ugb2YgZmlyc3QgcHJvZHVjdGlvbjogXCJcbiAgICArIGFsaWFzMihhbGlhczEoKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucGxheSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEucGxhY2Vfb2ZfZmlyc3RfcHJvZHVjdGlvbl9jb3VudHJ5IDogc3RhY2sxKSwgZGVwdGgwKSlcbiAgICArIFwiIHwgXCJcbiAgICArIGFsaWFzMihhbGlhczEoKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucGxheSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEucGxhY2Vfb2ZfZmlyc3RfcHJvZHVjdGlvbl9jb3VudHkgOiBzdGFjazEpLCBkZXB0aDApKVxuICAgICsgXCIgfCBcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wbGF5IDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5wbGFjZV9vZl9maXJzdF9wcm9kdWN0aW9uX3NldHRsZW1lbnQgOiBzdGFjazEpLCBkZXB0aDApKVxuICAgICsgXCI8L3NwYW4+XFxuXCI7XG59LFwiNFwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgYWxpYXMxPWNvbnRhaW5lci5sYW1iZGEsIGFsaWFzMj1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbjtcblxuICByZXR1cm4gXCJcdFx0XHQ8c3Bhbj5QbGFjZSBvZiBmaXJzdCByZXZpdmFsOiBcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wbGF5IDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5wbGFjZV9vZl9maXJzdF9yZXZpdmFsX2NvdW50cnkgOiBzdGFjazEpLCBkZXB0aDApKVxuICAgICsgXCIgfCBcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wbGF5IDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5wbGFjZV9vZl9maXJzdF9yZXZpdmFsX2NvdW50eSA6IHN0YWNrMSksIGRlcHRoMCkpXG4gICAgKyBcIiB8IFwiXG4gICAgKyBhbGlhczIoYWxpYXMxKCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnBsYXkgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLnBsYWNlX29mX2ZpcnN0X3Jldml2YWxfc2V0dGxlbWVudCA6IHN0YWNrMSksIGRlcHRoMCkpXG4gICAgKyBcIjwvc3Bhbj5cXG5cIjtcbn0sXCI2XCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBhbGlhczE9Y29udGFpbmVyLmxhbWJkYSwgYWxpYXMyPWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uO1xuXG4gIHJldHVybiBcIlx0XHRcdDxzcGFuPkZyb206IFwiXG4gICAgKyBhbGlhczIoYWxpYXMxKCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnBsYXkgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLmZpcnN0X3Jldml2YWxfZGF5IDogc3RhY2sxKSwgZGVwdGgwKSlcbiAgICArIFwiL1wiXG4gICAgKyBhbGlhczIoYWxpYXMxKCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnBsYXkgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLmZpcnN0X3Jldml2YWxfbW9udGggOiBzdGFjazEpLCBkZXB0aDApKVxuICAgICsgXCIvXCJcbiAgICArIGFsaWFzMihhbGlhczEoKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucGxheSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEuZmlyc3RfcmV2aXZhbF95ZWFyIDogc3RhY2sxKSwgZGVwdGgwKSlcbiAgICArIFwiPC9zcGFuPlxcblwiO1xufSxcIjhcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuIFwiXHRcdFx0PHNwYW4+VGhlYXRyZSBjb21wYW55OiBcIlxuICAgICsgY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24oY29udGFpbmVyLmxhbWJkYSgoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wbGF5IDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS50aGVhdHJlX2NvbXBhbnkgOiBzdGFjazEpLCBkZXB0aDApKVxuICAgICsgXCI8L3NwYW4+XFxuXCI7XG59LFwiMTBcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuIFwiXHRcdFx0PHNwYW4+UmV2aXZhbCBWZW51ZTogXCJcbiAgICArIGNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uKGNvbnRhaW5lci5sYW1iZGEoKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucGxheSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEudmVudWUgOiBzdGFjazEpLCBkZXB0aDApKVxuICAgICsgXCI8L3NwYW4+XFxuXCI7XG59LFwiMTJcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuIFwiXHRcdFx0PHNwYW4+Tm90ZXM6IFwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbihjb250YWluZXIubGFtYmRhKCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnBsYXkgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLm5vdGVzIDogc3RhY2sxKSwgZGVwdGgwKSlcbiAgICArIFwiPC9zcGFuPlxcblwiO1xufSxcImNvbXBpbGVyXCI6WzcsXCI+PSA0LjAuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuICgoc3RhY2sxID0gaGVscGVyc1tcImlmXCJdLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiB7fSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucGxheSA6IGRlcHRoMCkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMSwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIik7XG59LFwidXNlRGF0YVwiOnRydWV9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3RlbXBsYXRlcy9fcGxheS5oYnNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcIkQ6XFxcXGlyaXNoLXdyaXRlcnNcXFxcbm9kZV9tb2R1bGVzXFxcXGhhbmRsZWJhcnNcXFxccnVudGltZS5qc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgaGVscGVyLCBhbGlhczE9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiB7fSwgYWxpYXMyPWhlbHBlcnMuaGVscGVyTWlzc2luZywgYWxpYXMzPVwiZnVuY3Rpb25cIiwgYWxpYXM0PWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uO1xuXG4gIHJldHVybiAoKHN0YWNrMSA9IGhlbHBlcnNbXCJpZlwiXS5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaGVhZGVyIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgyLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgPGxpIHN0eWxlPSdtYXJnaW4tbGVmdDogMC41ZW07Jz48YSBocmVmPScjIS9wdWJsaWNhdGlvbnMvXCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLkRCX2lkIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5EQl9pZCA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwiREJfaWRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiJz5cIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMudGl0bGUgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnRpdGxlIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJ0aXRsZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCI8L2E+PC9saT5cXG5cIjtcbn0sXCIyXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgaGVscGVyO1xuXG4gIHJldHVybiBcIiAgICA8bGk+PGg1IHN0eWxlPSdiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3MDgyOzsgY29sb3I6IHdoaXRlOyBwYWRkaW5nOiAwLjJlbTsnPlwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLmhlYWRlciB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaGVhZGVyIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGhlbHBlcnMuaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IFwiZnVuY3Rpb25cIiA/IGhlbHBlci5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDoge30se1wibmFtZVwiOlwiaGVhZGVyXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIjwvaDU+PC9saT5cXG5cIjtcbn0sXCJjb21waWxlclwiOls3LFwiPj0gNC4wLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxO1xuXG4gIHJldHVybiBcIjx1bCBjbGFzcz1cXFwicGFnaW5hdGlvblxcXCIgaWQ9XFxcIm1haW4tcGFnaW5hdGlvblxcXCI+PC91bD5cXG48dWwgaWQ9J3Blb3BsZS1saXN0JyBzdHlsZT0nY29sdW1uLXdpZHRoOiAyMGVtOyBsaXN0LXN0eWxlOiBub25lOyBwYWRkaW5nOiAwOyc+XFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVycy5lYWNoLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiB7fSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucHVicyA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCI8L3VsPlxcbjx1bCBjbGFzcz1cXFwicGFnaW5hdGlvblxcXCIgaWQ9XFxcIm1haW4tcGFnaW5hdGlvblxcXCI+PC91bD5cXG5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vdGVtcGxhdGVzL19wdWJMaXN0Lmhic1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqWydkZWZhdWx0J10gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG52YXIgX2hhbmRsZWJhcnNCYXNlID0gcmVxdWlyZSgnLi9oYW5kbGViYXJzL2Jhc2UnKTtcblxudmFyIGJhc2UgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfaGFuZGxlYmFyc0Jhc2UpO1xuXG4vLyBFYWNoIG9mIHRoZXNlIGF1Z21lbnQgdGhlIEhhbmRsZWJhcnMgb2JqZWN0LiBObyBuZWVkIHRvIHNldHVwIGhlcmUuXG4vLyAoVGhpcyBpcyBkb25lIHRvIGVhc2lseSBzaGFyZSBjb2RlIGJldHdlZW4gY29tbW9uanMgYW5kIGJyb3dzZSBlbnZzKVxuXG52YXIgX2hhbmRsZWJhcnNTYWZlU3RyaW5nID0gcmVxdWlyZSgnLi9oYW5kbGViYXJzL3NhZmUtc3RyaW5nJyk7XG5cbnZhciBfaGFuZGxlYmFyc1NhZmVTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGFuZGxlYmFyc1NhZmVTdHJpbmcpO1xuXG52YXIgX2hhbmRsZWJhcnNFeGNlcHRpb24gPSByZXF1aXJlKCcuL2hhbmRsZWJhcnMvZXhjZXB0aW9uJyk7XG5cbnZhciBfaGFuZGxlYmFyc0V4Y2VwdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oYW5kbGViYXJzRXhjZXB0aW9uKTtcblxudmFyIF9oYW5kbGViYXJzVXRpbHMgPSByZXF1aXJlKCcuL2hhbmRsZWJhcnMvdXRpbHMnKTtcblxudmFyIFV0aWxzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2hhbmRsZWJhcnNVdGlscyk7XG5cbnZhciBfaGFuZGxlYmFyc1J1bnRpbWUgPSByZXF1aXJlKCcuL2hhbmRsZWJhcnMvcnVudGltZScpO1xuXG52YXIgcnVudGltZSA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9oYW5kbGViYXJzUnVudGltZSk7XG5cbnZhciBfaGFuZGxlYmFyc05vQ29uZmxpY3QgPSByZXF1aXJlKCcuL2hhbmRsZWJhcnMvbm8tY29uZmxpY3QnKTtcblxudmFyIF9oYW5kbGViYXJzTm9Db25mbGljdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oYW5kbGViYXJzTm9Db25mbGljdCk7XG5cbi8vIEZvciBjb21wYXRpYmlsaXR5IGFuZCB1c2FnZSBvdXRzaWRlIG9mIG1vZHVsZSBzeXN0ZW1zLCBtYWtlIHRoZSBIYW5kbGViYXJzIG9iamVjdCBhIG5hbWVzcGFjZVxuZnVuY3Rpb24gY3JlYXRlKCkge1xuICB2YXIgaGIgPSBuZXcgYmFzZS5IYW5kbGViYXJzRW52aXJvbm1lbnQoKTtcblxuICBVdGlscy5leHRlbmQoaGIsIGJhc2UpO1xuICBoYi5TYWZlU3RyaW5nID0gX2hhbmRsZWJhcnNTYWZlU3RyaW5nMlsnZGVmYXVsdCddO1xuICBoYi5FeGNlcHRpb24gPSBfaGFuZGxlYmFyc0V4Y2VwdGlvbjJbJ2RlZmF1bHQnXTtcbiAgaGIuVXRpbHMgPSBVdGlscztcbiAgaGIuZXNjYXBlRXhwcmVzc2lvbiA9IFV0aWxzLmVzY2FwZUV4cHJlc3Npb247XG5cbiAgaGIuVk0gPSBydW50aW1lO1xuICBoYi50ZW1wbGF0ZSA9IGZ1bmN0aW9uIChzcGVjKSB7XG4gICAgcmV0dXJuIHJ1bnRpbWUudGVtcGxhdGUoc3BlYywgaGIpO1xuICB9O1xuXG4gIHJldHVybiBoYjtcbn1cblxudmFyIGluc3QgPSBjcmVhdGUoKTtcbmluc3QuY3JlYXRlID0gY3JlYXRlO1xuXG5faGFuZGxlYmFyc05vQ29uZmxpY3QyWydkZWZhdWx0J10oaW5zdCk7XG5cbmluc3RbJ2RlZmF1bHQnXSA9IGluc3Q7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGluc3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwyeHBZaTlvWVc1a2JHVmlZWEp6TG5KMWJuUnBiV1V1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3pzN09FSkJRWE5DTEcxQ1FVRnRRanM3U1VGQk4wSXNTVUZCU1RzN096czdiME5CU1U4c01FSkJRVEJDT3pzN08yMURRVU16UWl4M1FrRkJkMEk3T3pzN0swSkJRM1pDTEc5Q1FVRnZRanM3U1VGQkwwSXNTMEZCU3pzN2FVTkJRMUVzYzBKQlFYTkNPenRKUVVGdVF5eFBRVUZQT3p0dlEwRkZTU3d3UWtGQk1FSTdPenM3TzBGQlIycEVMRk5CUVZNc1RVRkJUU3hIUVVGSE8wRkJRMmhDTEUxQlFVa3NSVUZCUlN4SFFVRkhMRWxCUVVrc1NVRkJTU3hEUVVGRExIRkNRVUZ4UWl4RlFVRkZMRU5CUVVNN08wRkJSVEZETEU5QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSU3hGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzBGQlEzWkNMRWxCUVVVc1EwRkJReXhWUVVGVkxHOURRVUZoTEVOQlFVTTdRVUZETTBJc1NVRkJSU3hEUVVGRExGTkJRVk1zYlVOQlFWa3NRMEZCUXp0QlFVTjZRaXhKUVVGRkxFTkJRVU1zUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXp0QlFVTnFRaXhKUVVGRkxFTkJRVU1zWjBKQlFXZENMRWRCUVVjc1MwRkJTeXhEUVVGRExHZENRVUZuUWl4RFFVRkRPenRCUVVVM1F5eEpRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhMRTlCUVU4c1EwRkJRenRCUVVOb1FpeEpRVUZGTEVOQlFVTXNVVUZCVVN4SFFVRkhMRlZCUVZNc1NVRkJTU3hGUVVGRk8wRkJRek5DTEZkQlFVOHNUMEZCVHl4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdSMEZEYmtNc1EwRkJRenM3UVVGRlJpeFRRVUZQTEVWQlFVVXNRMEZCUXp0RFFVTllPenRCUVVWRUxFbEJRVWtzU1VGQlNTeEhRVUZITEUxQlFVMHNSVUZCUlN4RFFVRkRPMEZCUTNCQ0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NUVUZCVFN4RFFVRkRPenRCUVVWeVFpeHJRMEZCVnl4SlFVRkpMRU5CUVVNc1EwRkJRenM3UVVGRmFrSXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF6czdjVUpCUlZJc1NVRkJTU0lzSW1acGJHVWlPaUpvWVc1a2JHVmlZWEp6TG5KMWJuUnBiV1V1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ0tpQmhjeUJpWVhObElHWnliMjBnSnk0dmFHRnVaR3hsWW1GeWN5OWlZWE5sSnp0Y2JseHVMeThnUldGamFDQnZaaUIwYUdWelpTQmhkV2R0Wlc1MElIUm9aU0JJWVc1a2JHVmlZWEp6SUc5aWFtVmpkQzRnVG04Z2JtVmxaQ0IwYnlCelpYUjFjQ0JvWlhKbExseHVMeThnS0ZSb2FYTWdhWE1nWkc5dVpTQjBieUJsWVhOcGJIa2djMmhoY21VZ1kyOWtaU0JpWlhSM1pXVnVJR052YlcxdmJtcHpJR0Z1WkNCaWNtOTNjMlVnWlc1MmN5bGNibWx0Y0c5eWRDQlRZV1psVTNSeWFXNW5JR1p5YjIwZ0p5NHZhR0Z1Wkd4bFltRnljeTl6WVdabExYTjBjbWx1WnljN1hHNXBiWEJ2Y25RZ1JYaGpaWEIwYVc5dUlHWnliMjBnSnk0dmFHRnVaR3hsWW1GeWN5OWxlR05sY0hScGIyNG5PMXh1YVcxd2IzSjBJQ29nWVhNZ1ZYUnBiSE1nWm5KdmJTQW5MaTlvWVc1a2JHVmlZWEp6TDNWMGFXeHpKenRjYm1sdGNHOXlkQ0FxSUdGeklISjFiblJwYldVZ1puSnZiU0FuTGk5b1lXNWtiR1ZpWVhKekwzSjFiblJwYldVbk8xeHVYRzVwYlhCdmNuUWdibTlEYjI1bWJHbGpkQ0JtY205dElDY3VMMmhoYm1Sc1pXSmhjbk12Ym04dFkyOXVabXhwWTNRbk8xeHVYRzR2THlCR2IzSWdZMjl0Y0dGMGFXSnBiR2wwZVNCaGJtUWdkWE5oWjJVZ2IzVjBjMmxrWlNCdlppQnRiMlIxYkdVZ2MzbHpkR1Z0Y3l3Z2JXRnJaU0IwYUdVZ1NHRnVaR3hsWW1GeWN5QnZZbXBsWTNRZ1lTQnVZVzFsYzNCaFkyVmNibVoxYm1OMGFXOXVJR055WldGMFpTZ3BJSHRjYmlBZ2JHVjBJR2hpSUQwZ2JtVjNJR0poYzJVdVNHRnVaR3hsWW1GeWMwVnVkbWx5YjI1dFpXNTBLQ2s3WEc1Y2JpQWdWWFJwYkhNdVpYaDBaVzVrS0doaUxDQmlZWE5sS1R0Y2JpQWdhR0l1VTJGbVpWTjBjbWx1WnlBOUlGTmhabVZUZEhKcGJtYzdYRzRnSUdoaUxrVjRZMlZ3ZEdsdmJpQTlJRVY0WTJWd2RHbHZianRjYmlBZ2FHSXVWWFJwYkhNZ1BTQlZkR2xzY3p0Y2JpQWdhR0l1WlhOallYQmxSWGh3Y21WemMybHZiaUE5SUZWMGFXeHpMbVZ6WTJGd1pVVjRjSEpsYzNOcGIyNDdYRzVjYmlBZ2FHSXVWazBnUFNCeWRXNTBhVzFsTzF4dUlDQm9ZaTUwWlcxd2JHRjBaU0E5SUdaMWJtTjBhVzl1S0hOd1pXTXBJSHRjYmlBZ0lDQnlaWFIxY200Z2NuVnVkR2x0WlM1MFpXMXdiR0YwWlNoemNHVmpMQ0JvWWlrN1hHNGdJSDA3WEc1Y2JpQWdjbVYwZFhKdUlHaGlPMXh1ZlZ4dVhHNXNaWFFnYVc1emRDQTlJR055WldGMFpTZ3BPMXh1YVc1emRDNWpjbVZoZEdVZ1BTQmpjbVZoZEdVN1hHNWNibTV2UTI5dVpteHBZM1FvYVc1emRDazdYRzVjYm1sdWMzUmJKMlJsWm1GMWJIUW5YU0E5SUdsdWMzUTdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR2x1YzNRN1hHNGlYWDA9XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzLnJ1bnRpbWUuanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMucmVnaXN0ZXJEZWZhdWx0RGVjb3JhdG9ycyA9IHJlZ2lzdGVyRGVmYXVsdERlY29yYXRvcnM7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfZGVjb3JhdG9yc0lubGluZSA9IHJlcXVpcmUoJy4vZGVjb3JhdG9ycy9pbmxpbmUnKTtcblxudmFyIF9kZWNvcmF0b3JzSW5saW5lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlY29yYXRvcnNJbmxpbmUpO1xuXG5mdW5jdGlvbiByZWdpc3RlckRlZmF1bHREZWNvcmF0b3JzKGluc3RhbmNlKSB7XG4gIF9kZWNvcmF0b3JzSW5saW5lMlsnZGVmYXVsdCddKGluc3RhbmNlKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMMnhwWWk5b1lXNWtiR1ZpWVhKekwyUmxZMjl5WVhSdmNuTXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdaME5CUVRKQ0xIRkNRVUZ4UWpzN096dEJRVVY2UXl4VFFVRlRMSGxDUVVGNVFpeERRVUZETEZGQlFWRXNSVUZCUlR0QlFVTnNSQ3huUTBGQlpTeFJRVUZSTEVOQlFVTXNRMEZCUXp0RFFVTXhRaUlzSW1acGJHVWlPaUprWldOdmNtRjBiM0p6TG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElISmxaMmx6ZEdWeVNXNXNhVzVsSUdaeWIyMGdKeTR2WkdWamIzSmhkRzl5Y3k5cGJteHBibVVuTzF4dVhHNWxlSEJ2Y25RZ1puVnVZM1JwYjI0Z2NtVm5hWE4wWlhKRVpXWmhkV3gwUkdWamIzSmhkRzl5Y3locGJuTjBZVzVqWlNrZ2UxeHVJQ0J5WldkcGMzUmxja2x1YkdsdVpTaHBibk4wWVc1alpTazdYRzU5WEc1Y2JpSmRmUT09XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2RlY29yYXRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckRlY29yYXRvcignaW5saW5lJywgZnVuY3Rpb24gKGZuLCBwcm9wcywgY29udGFpbmVyLCBvcHRpb25zKSB7XG4gICAgdmFyIHJldCA9IGZuO1xuICAgIGlmICghcHJvcHMucGFydGlhbHMpIHtcbiAgICAgIHByb3BzLnBhcnRpYWxzID0ge307XG4gICAgICByZXQgPSBmdW5jdGlvbiAoY29udGV4dCwgb3B0aW9ucykge1xuICAgICAgICAvLyBDcmVhdGUgYSBuZXcgcGFydGlhbHMgc3RhY2sgZnJhbWUgcHJpb3IgdG8gZXhlYy5cbiAgICAgICAgdmFyIG9yaWdpbmFsID0gY29udGFpbmVyLnBhcnRpYWxzO1xuICAgICAgICBjb250YWluZXIucGFydGlhbHMgPSBfdXRpbHMuZXh0ZW5kKHt9LCBvcmlnaW5hbCwgcHJvcHMucGFydGlhbHMpO1xuICAgICAgICB2YXIgcmV0ID0gZm4oY29udGV4dCwgb3B0aW9ucyk7XG4gICAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyA9IG9yaWdpbmFsO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBwcm9wcy5wYXJ0aWFsc1tvcHRpb25zLmFyZ3NbMF1dID0gb3B0aW9ucy5mbjtcblxuICAgIHJldHVybiByZXQ7XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1THk0dUwyeHBZaTlvWVc1a2JHVmlZWEp6TDJSbFkyOXlZWFJ2Y25NdmFXNXNhVzVsTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdjVUpCUVhGQ0xGVkJRVlU3TzNGQ1FVVm9RaXhWUVVGVExGRkJRVkVzUlVGQlJUdEJRVU5vUXl4VlFVRlJMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNVVUZCVVN4RlFVRkZMRlZCUVZNc1JVRkJSU3hGUVVGRkxFdEJRVXNzUlVGQlJTeFRRVUZUTEVWQlFVVXNUMEZCVHl4RlFVRkZPMEZCUXpORkxGRkJRVWtzUjBGQlJ5eEhRVUZITEVWQlFVVXNRMEZCUXp0QlFVTmlMRkZCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVVVGQlVTeEZRVUZGTzBGQlEyNUNMRmRCUVVzc1EwRkJReXhSUVVGUkxFZEJRVWNzUlVGQlJTeERRVUZETzBGQlEzQkNMRk5CUVVjc1IwRkJSeXhWUVVGVExFOUJRVThzUlVGQlJTeFBRVUZQTEVWQlFVVTdPMEZCUlM5Q0xGbEJRVWtzVVVGQlVTeEhRVUZITEZOQlFWTXNRMEZCUXl4UlFVRlJMRU5CUVVNN1FVRkRiRU1zYVVKQlFWTXNRMEZCUXl4UlFVRlJMRWRCUVVjc1kwRkJUeXhGUVVGRkxFVkJRVVVzVVVGQlVTeEZRVUZGTEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRCUVVNeFJDeFpRVUZKTEVkQlFVY3NSMEZCUnl4RlFVRkZMRU5CUVVNc1QwRkJUeXhGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzBGQlF5OUNMR2xDUVVGVExFTkJRVU1zVVVGQlVTeEhRVUZITEZGQlFWRXNRMEZCUXp0QlFVTTVRaXhsUVVGUExFZEJRVWNzUTBGQlF6dFBRVU5hTEVOQlFVTTdTMEZEU0RzN1FVRkZSQ3hUUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eFBRVUZQTEVOQlFVTXNSVUZCUlN4RFFVRkRPenRCUVVVM1F5eFhRVUZQTEVkQlFVY3NRMEZCUXp0SFFVTmFMRU5CUVVNc1EwRkJRenREUVVOS0lpd2labWxzWlNJNkltbHViR2x1WlM1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdaWGgwWlc1a2ZTQm1jbTl0SUNjdUxpOTFkR2xzY3ljN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHWjFibU4wYVc5dUtHbHVjM1JoYm1ObEtTQjdYRzRnSUdsdWMzUmhibU5sTG5KbFoybHpkR1Z5UkdWamIzSmhkRzl5S0NkcGJteHBibVVuTENCbWRXNWpkR2x2YmlobWJpd2djSEp2Y0hNc0lHTnZiblJoYVc1bGNpd2diM0IwYVc5dWN5a2dlMXh1SUNBZ0lHeGxkQ0J5WlhRZ1BTQm1ianRjYmlBZ0lDQnBaaUFvSVhCeWIzQnpMbkJoY25ScFlXeHpLU0I3WEc0Z0lDQWdJQ0J3Y205d2N5NXdZWEowYVdGc2N5QTlJSHQ5TzF4dUlDQWdJQ0FnY21WMElEMGdablZ1WTNScGIyNG9ZMjl1ZEdWNGRDd2diM0IwYVc5dWN5a2dlMXh1SUNBZ0lDQWdJQ0F2THlCRGNtVmhkR1VnWVNCdVpYY2djR0Z5ZEdsaGJITWdjM1JoWTJzZ1puSmhiV1VnY0hKcGIzSWdkRzhnWlhobFl5NWNiaUFnSUNBZ0lDQWdiR1YwSUc5eWFXZHBibUZzSUQwZ1kyOXVkR0ZwYm1WeUxuQmhjblJwWVd4ek8xeHVJQ0FnSUNBZ0lDQmpiMjUwWVdsdVpYSXVjR0Z5ZEdsaGJITWdQU0JsZUhSbGJtUW9lMzBzSUc5eWFXZHBibUZzTENCd2NtOXdjeTV3WVhKMGFXRnNjeWs3WEc0Z0lDQWdJQ0FnSUd4bGRDQnlaWFFnUFNCbWJpaGpiMjUwWlhoMExDQnZjSFJwYjI1ektUdGNiaUFnSUNBZ0lDQWdZMjl1ZEdGcGJtVnlMbkJoY25ScFlXeHpJRDBnYjNKcFoybHVZV3c3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ5WlhRN1hHNGdJQ0FnSUNCOU8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhCeWIzQnpMbkJoY25ScFlXeHpXMjl3ZEdsdmJuTXVZWEpuYzFzd1hWMGdQU0J2Y0hScGIyNXpMbVp1TzF4dVhHNGdJQ0FnY21WMGRYSnVJSEpsZER0Y2JpQWdmU2s3WEc1OVhHNGlYWDA9XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2RlY29yYXRvcnMvaW5saW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnJlZ2lzdGVyRGVmYXVsdEhlbHBlcnMgPSByZWdpc3RlckRlZmF1bHRIZWxwZXJzO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX2hlbHBlcnNCbG9ja0hlbHBlck1pc3NpbmcgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmxvY2staGVscGVyLW1pc3NpbmcnKTtcblxudmFyIF9oZWxwZXJzQmxvY2tIZWxwZXJNaXNzaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hlbHBlcnNCbG9ja0hlbHBlck1pc3NpbmcpO1xuXG52YXIgX2hlbHBlcnNFYWNoID0gcmVxdWlyZSgnLi9oZWxwZXJzL2VhY2gnKTtcblxudmFyIF9oZWxwZXJzRWFjaDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZWxwZXJzRWFjaCk7XG5cbnZhciBfaGVscGVyc0hlbHBlck1pc3NpbmcgPSByZXF1aXJlKCcuL2hlbHBlcnMvaGVscGVyLW1pc3NpbmcnKTtcblxudmFyIF9oZWxwZXJzSGVscGVyTWlzc2luZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZWxwZXJzSGVscGVyTWlzc2luZyk7XG5cbnZhciBfaGVscGVyc0lmID0gcmVxdWlyZSgnLi9oZWxwZXJzL2lmJyk7XG5cbnZhciBfaGVscGVyc0lmMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hlbHBlcnNJZik7XG5cbnZhciBfaGVscGVyc0xvZyA9IHJlcXVpcmUoJy4vaGVscGVycy9sb2cnKTtcblxudmFyIF9oZWxwZXJzTG9nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hlbHBlcnNMb2cpO1xuXG52YXIgX2hlbHBlcnNMb29rdXAgPSByZXF1aXJlKCcuL2hlbHBlcnMvbG9va3VwJyk7XG5cbnZhciBfaGVscGVyc0xvb2t1cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZWxwZXJzTG9va3VwKTtcblxudmFyIF9oZWxwZXJzV2l0aCA9IHJlcXVpcmUoJy4vaGVscGVycy93aXRoJyk7XG5cbnZhciBfaGVscGVyc1dpdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGVscGVyc1dpdGgpO1xuXG5mdW5jdGlvbiByZWdpc3RlckRlZmF1bHRIZWxwZXJzKGluc3RhbmNlKSB7XG4gIF9oZWxwZXJzQmxvY2tIZWxwZXJNaXNzaW5nMlsnZGVmYXVsdCddKGluc3RhbmNlKTtcbiAgX2hlbHBlcnNFYWNoMlsnZGVmYXVsdCddKGluc3RhbmNlKTtcbiAgX2hlbHBlcnNIZWxwZXJNaXNzaW5nMlsnZGVmYXVsdCddKGluc3RhbmNlKTtcbiAgX2hlbHBlcnNJZjJbJ2RlZmF1bHQnXShpbnN0YW5jZSk7XG4gIF9oZWxwZXJzTG9nMlsnZGVmYXVsdCddKGluc3RhbmNlKTtcbiAgX2hlbHBlcnNMb29rdXAyWydkZWZhdWx0J10oaW5zdGFuY2UpO1xuICBfaGVscGVyc1dpdGgyWydkZWZhdWx0J10oaW5zdGFuY2UpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUwyeHBZaTlvWVc1a2JHVmlZWEp6TDJobGJIQmxjbk11YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3ZVVOQlFYVkRMR2REUVVGblF6czdPenN5UWtGRE9VTXNaMEpCUVdkQ096czdPMjlEUVVOUUxEQkNRVUV3UWpzN096dDVRa0ZEY2tNc1kwRkJZenM3T3pzd1FrRkRZaXhsUVVGbE96czdPelpDUVVOYUxHdENRVUZyUWpzN096c3lRa0ZEY0VJc1owSkJRV2RDT3pzN08wRkJSV3hETEZOQlFWTXNjMEpCUVhOQ0xFTkJRVU1zVVVGQlVTeEZRVUZGTzBGQlF5OURMSGxEUVVFeVFpeFJRVUZSTEVOQlFVTXNRMEZCUXp0QlFVTnlReXd5UWtGQllTeFJRVUZSTEVOQlFVTXNRMEZCUXp0QlFVTjJRaXh2UTBGQmMwSXNVVUZCVVN4RFFVRkRMRU5CUVVNN1FVRkRhRU1zZVVKQlFWY3NVVUZCVVN4RFFVRkRMRU5CUVVNN1FVRkRja0lzTUVKQlFWa3NVVUZCVVN4RFFVRkRMRU5CUVVNN1FVRkRkRUlzTmtKQlFXVXNVVUZCVVN4RFFVRkRMRU5CUVVNN1FVRkRla0lzTWtKQlFXRXNVVUZCVVN4RFFVRkRMRU5CUVVNN1EwRkRlRUlpTENKbWFXeGxJam9pYUdWc2NHVnljeTVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCeVpXZHBjM1JsY2tKc2IyTnJTR1ZzY0dWeVRXbHpjMmx1WnlCbWNtOXRJQ2N1TDJobGJIQmxjbk12WW14dlkyc3RhR1ZzY0dWeUxXMXBjM05wYm1jbk8xeHVhVzF3YjNKMElISmxaMmx6ZEdWeVJXRmphQ0JtY205dElDY3VMMmhsYkhCbGNuTXZaV0ZqYUNjN1hHNXBiWEJ2Y25RZ2NtVm5hWE4wWlhKSVpXeHdaWEpOYVhOemFXNW5JR1p5YjIwZ0p5NHZhR1ZzY0dWeWN5OW9aV3h3WlhJdGJXbHpjMmx1WnljN1hHNXBiWEJ2Y25RZ2NtVm5hWE4wWlhKSlppQm1jbTl0SUNjdUwyaGxiSEJsY25NdmFXWW5PMXh1YVcxd2IzSjBJSEpsWjJsemRHVnlURzluSUdaeWIyMGdKeTR2YUdWc2NHVnljeTlzYjJjbk8xeHVhVzF3YjNKMElISmxaMmx6ZEdWeVRHOXZhM1Z3SUdaeWIyMGdKeTR2YUdWc2NHVnljeTlzYjI5cmRYQW5PMXh1YVcxd2IzSjBJSEpsWjJsemRHVnlWMmwwYUNCbWNtOXRJQ2N1TDJobGJIQmxjbk12ZDJsMGFDYzdYRzVjYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUJ5WldkcGMzUmxja1JsWm1GMWJIUklaV3h3WlhKektHbHVjM1JoYm1ObEtTQjdYRzRnSUhKbFoybHpkR1Z5UW14dlkydElaV3h3WlhKTmFYTnphVzVuS0dsdWMzUmhibU5sS1R0Y2JpQWdjbVZuYVhOMFpYSkZZV05vS0dsdWMzUmhibU5sS1R0Y2JpQWdjbVZuYVhOMFpYSklaV3h3WlhKTmFYTnphVzVuS0dsdWMzUmhibU5sS1R0Y2JpQWdjbVZuYVhOMFpYSkpaaWhwYm5OMFlXNWpaU2s3WEc0Z0lISmxaMmx6ZEdWeVRHOW5LR2x1YzNSaGJtTmxLVHRjYmlBZ2NtVm5hWE4wWlhKTWIyOXJkWEFvYVc1emRHRnVZMlVwTzF4dUlDQnlaV2RwYzNSbGNsZHBkR2dvYVc1emRHRnVZMlVwTzF4dWZWeHVJbDE5XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2hlbHBlcnMuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignYmxvY2tIZWxwZXJNaXNzaW5nJywgZnVuY3Rpb24gKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICB2YXIgaW52ZXJzZSA9IG9wdGlvbnMuaW52ZXJzZSxcbiAgICAgICAgZm4gPSBvcHRpb25zLmZuO1xuXG4gICAgaWYgKGNvbnRleHQgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBmbih0aGlzKTtcbiAgICB9IGVsc2UgaWYgKGNvbnRleHQgPT09IGZhbHNlIHx8IGNvbnRleHQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGludmVyc2UodGhpcyk7XG4gICAgfSBlbHNlIGlmIChfdXRpbHMuaXNBcnJheShjb250ZXh0KSkge1xuICAgICAgaWYgKGNvbnRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAob3B0aW9ucy5pZHMpIHtcbiAgICAgICAgICBvcHRpb25zLmlkcyA9IFtvcHRpb25zLm5hbWVdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLmhlbHBlcnMuZWFjaChjb250ZXh0LCBvcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpbnZlcnNlKHRoaXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG4gICAgICAgIHZhciBkYXRhID0gX3V0aWxzLmNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgIGRhdGEuY29udGV4dFBhdGggPSBfdXRpbHMuYXBwZW5kQ29udGV4dFBhdGgob3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoLCBvcHRpb25zLm5hbWUpO1xuICAgICAgICBvcHRpb25zID0geyBkYXRhOiBkYXRhIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmbihjb250ZXh0LCBvcHRpb25zKTtcbiAgICB9XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1THk0dUwyeHBZaTlvWVc1a2JHVmlZWEp6TDJobGJIQmxjbk12WW14dlkyc3RhR1ZzY0dWeUxXMXBjM05wYm1jdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenR4UWtGQmMwUXNWVUZCVlRzN2NVSkJSV3BFTEZWQlFWTXNVVUZCVVN4RlFVRkZPMEZCUTJoRExGVkJRVkVzUTBGQlF5eGpRVUZqTEVOQlFVTXNiMEpCUVc5Q0xFVkJRVVVzVlVGQlV5eFBRVUZQTEVWQlFVVXNUMEZCVHl4RlFVRkZPMEZCUTNaRkxGRkJRVWtzVDBGQlR5eEhRVUZITEU5QlFVOHNRMEZCUXl4UFFVRlBPMUZCUTNwQ0xFVkJRVVVzUjBGQlJ5eFBRVUZQTEVOQlFVTXNSVUZCUlN4RFFVRkRPenRCUVVWd1FpeFJRVUZKTEU5QlFVOHNTMEZCU3l4SlFVRkpMRVZCUVVVN1FVRkRjRUlzWVVGQlR5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1MwRkRha0lzVFVGQlRTeEpRVUZKTEU5QlFVOHNTMEZCU3l4TFFVRkxMRWxCUVVrc1QwRkJUeXhKUVVGSkxFbEJRVWtzUlVGQlJUdEJRVU12UXl4aFFVRlBMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dExRVU4wUWl4TlFVRk5MRWxCUVVrc1pVRkJVU3hQUVVGUExFTkJRVU1zUlVGQlJUdEJRVU16UWl4VlFVRkpMRTlCUVU4c1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eEZRVUZGTzBGQlEzUkNMRmxCUVVrc1QwRkJUeXhEUVVGRExFZEJRVWNzUlVGQlJUdEJRVU5tTEdsQ1FVRlBMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMU5CUXpsQ096dEJRVVZFTEdWQlFVOHNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRPMDlCUTJoRUxFMUJRVTA3UVVGRFRDeGxRVUZQTEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRQUVVOMFFqdExRVU5HTEUxQlFVMDdRVUZEVEN4VlFVRkpMRTlCUVU4c1EwRkJReXhKUVVGSkxFbEJRVWtzVDBGQlR5eERRVUZETEVkQlFVY3NSVUZCUlR0QlFVTXZRaXhaUVVGSkxFbEJRVWtzUjBGQlJ5eHRRa0ZCV1N4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03UVVGRGNrTXNXVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXg1UWtGQmEwSXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMEZCUXpkRkxHVkJRVThzUjBGQlJ5eEZRVUZETEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVNc1EwRkJRenRQUVVONFFqczdRVUZGUkN4aFFVRlBMRVZCUVVVc1EwRkJReXhQUVVGUExFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTTdTMEZETjBJN1IwRkRSaXhEUVVGRExFTkJRVU03UTBGRFNpSXNJbVpwYkdVaU9pSmliRzlqYXkxb1pXeHdaWEl0YldsemMybHVaeTVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCN1lYQndaVzVrUTI5dWRHVjRkRkJoZEdnc0lHTnlaV0YwWlVaeVlXMWxMQ0JwYzBGeWNtRjVmU0JtY205dElDY3VMaTkxZEdsc2N5YzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR1oxYm1OMGFXOXVLR2x1YzNSaGJtTmxLU0I3WEc0Z0lHbHVjM1JoYm1ObExuSmxaMmx6ZEdWeVNHVnNjR1Z5S0NkaWJHOWphMGhsYkhCbGNrMXBjM05wYm1jbkxDQm1kVzVqZEdsdmJpaGpiMjUwWlhoMExDQnZjSFJwYjI1ektTQjdYRzRnSUNBZ2JHVjBJR2x1ZG1WeWMyVWdQU0J2Y0hScGIyNXpMbWx1ZG1WeWMyVXNYRzRnSUNBZ0lDQWdJR1p1SUQwZ2IzQjBhVzl1Y3k1bWJqdGNibHh1SUNBZ0lHbG1JQ2hqYjI1MFpYaDBJRDA5UFNCMGNuVmxLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdabTRvZEdocGN5azdYRzRnSUNBZ2ZTQmxiSE5sSUdsbUlDaGpiMjUwWlhoMElEMDlQU0JtWVd4elpTQjhmQ0JqYjI1MFpYaDBJRDA5SUc1MWJHd3BJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQnBiblpsY25ObEtIUm9hWE1wTzF4dUlDQWdJSDBnWld4elpTQnBaaUFvYVhOQmNuSmhlU2hqYjI1MFpYaDBLU2tnZTF4dUlDQWdJQ0FnYVdZZ0tHTnZiblJsZUhRdWJHVnVaM1JvSUQ0Z01Da2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb2IzQjBhVzl1Y3k1cFpITXBJSHRjYmlBZ0lDQWdJQ0FnSUNCdmNIUnBiMjV6TG1sa2N5QTlJRnR2Y0hScGIyNXpMbTVoYldWZE8xeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR2x1YzNSaGJtTmxMbWhsYkhCbGNuTXVaV0ZqYUNoamIyNTBaWGgwTENCdmNIUnBiMjV6S1R0Y2JpQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJwYm5abGNuTmxLSFJvYVhNcE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0JwWmlBb2IzQjBhVzl1Y3k1a1lYUmhJQ1ltSUc5d2RHbHZibk11YVdSektTQjdYRzRnSUNBZ0lDQWdJR3hsZENCa1lYUmhJRDBnWTNKbFlYUmxSbkpoYldVb2IzQjBhVzl1Y3k1a1lYUmhLVHRjYmlBZ0lDQWdJQ0FnWkdGMFlTNWpiMjUwWlhoMFVHRjBhQ0E5SUdGd2NHVnVaRU52Ym5SbGVIUlFZWFJvS0c5d2RHbHZibk11WkdGMFlTNWpiMjUwWlhoMFVHRjBhQ3dnYjNCMGFXOXVjeTV1WVcxbEtUdGNiaUFnSUNBZ0lDQWdiM0IwYVc5dWN5QTlJSHRrWVhSaE9pQmtZWFJoZlR0Y2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ2NtVjBkWEp1SUdadUtHTnZiblJsZUhRc0lHOXdkR2x2Ym5NcE8xeHVJQ0FnSUgxY2JpQWdmU2s3WEc1OVhHNGlYWDA9XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2hlbHBlcnMvYmxvY2staGVscGVyLW1pc3NpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbnZhciBfZXhjZXB0aW9uID0gcmVxdWlyZSgnLi4vZXhjZXB0aW9uJyk7XG5cbnZhciBfZXhjZXB0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4Y2VwdGlvbik7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignZWFjaCcsIGZ1bmN0aW9uIChjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnTXVzdCBwYXNzIGl0ZXJhdG9yIHRvICNlYWNoJyk7XG4gICAgfVxuXG4gICAgdmFyIGZuID0gb3B0aW9ucy5mbixcbiAgICAgICAgaW52ZXJzZSA9IG9wdGlvbnMuaW52ZXJzZSxcbiAgICAgICAgaSA9IDAsXG4gICAgICAgIHJldCA9ICcnLFxuICAgICAgICBkYXRhID0gdW5kZWZpbmVkLFxuICAgICAgICBjb250ZXh0UGF0aCA9IHVuZGVmaW5lZDtcblxuICAgIGlmIChvcHRpb25zLmRhdGEgJiYgb3B0aW9ucy5pZHMpIHtcbiAgICAgIGNvbnRleHRQYXRoID0gX3V0aWxzLmFwcGVuZENvbnRleHRQYXRoKG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCwgb3B0aW9ucy5pZHNbMF0pICsgJy4nO1xuICAgIH1cblxuICAgIGlmIChfdXRpbHMuaXNGdW5jdGlvbihjb250ZXh0KSkge1xuICAgICAgY29udGV4dCA9IGNvbnRleHQuY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5kYXRhKSB7XG4gICAgICBkYXRhID0gX3V0aWxzLmNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXhlY0l0ZXJhdGlvbihmaWVsZCwgaW5kZXgsIGxhc3QpIHtcbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIGRhdGEua2V5ID0gZmllbGQ7XG4gICAgICAgIGRhdGEuaW5kZXggPSBpbmRleDtcbiAgICAgICAgZGF0YS5maXJzdCA9IGluZGV4ID09PSAwO1xuICAgICAgICBkYXRhLmxhc3QgPSAhIWxhc3Q7XG5cbiAgICAgICAgaWYgKGNvbnRleHRQYXRoKSB7XG4gICAgICAgICAgZGF0YS5jb250ZXh0UGF0aCA9IGNvbnRleHRQYXRoICsgZmllbGQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0ID0gcmV0ICsgZm4oY29udGV4dFtmaWVsZF0sIHtcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgYmxvY2tQYXJhbXM6IF91dGlscy5ibG9ja1BhcmFtcyhbY29udGV4dFtmaWVsZF0sIGZpZWxkXSwgW2NvbnRleHRQYXRoICsgZmllbGQsIG51bGxdKVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbnRleHQgJiYgdHlwZW9mIGNvbnRleHQgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAoX3V0aWxzLmlzQXJyYXkoY29udGV4dCkpIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IGNvbnRleHQubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG4gICAgICAgICAgaWYgKGkgaW4gY29udGV4dCkge1xuICAgICAgICAgICAgZXhlY0l0ZXJhdGlvbihpLCBpLCBpID09PSBjb250ZXh0Lmxlbmd0aCAtIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHByaW9yS2V5ID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBjb250ZXh0KSB7XG4gICAgICAgICAgaWYgKGNvbnRleHQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgLy8gV2UncmUgcnVubmluZyB0aGUgaXRlcmF0aW9ucyBvbmUgc3RlcCBvdXQgb2Ygc3luYyBzbyB3ZSBjYW4gZGV0ZWN0XG4gICAgICAgICAgICAvLyB0aGUgbGFzdCBpdGVyYXRpb24gd2l0aG91dCBoYXZlIHRvIHNjYW4gdGhlIG9iamVjdCB0d2ljZSBhbmQgY3JlYXRlXG4gICAgICAgICAgICAvLyBhbiBpdGVybWVkaWF0ZSBrZXlzIGFycmF5LlxuICAgICAgICAgICAgaWYgKHByaW9yS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgZXhlY0l0ZXJhdGlvbihwcmlvcktleSwgaSAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJpb3JLZXkgPSBrZXk7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChwcmlvcktleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZXhlY0l0ZXJhdGlvbihwcmlvcktleSwgaSAtIDEsIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGkgPT09IDApIHtcbiAgICAgIHJldCA9IGludmVyc2UodGhpcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMeTR1TDJ4cFlpOW9ZVzVrYkdWaVlYSnpMMmhsYkhCbGNuTXZaV0ZqYUM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3TzNGQ1FVRXJSU3hWUVVGVk96dDVRa0ZEYmtVc1kwRkJZenM3T3p0eFFrRkZja0lzVlVGQlV5eFJRVUZSTEVWQlFVVTdRVUZEYUVNc1ZVRkJVU3hEUVVGRExHTkJRV01zUTBGQlF5eE5RVUZOTEVWQlFVVXNWVUZCVXl4UFFVRlBMRVZCUVVVc1QwRkJUeXhGUVVGRk8wRkJRM3BFTEZGQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVN1FVRkRXaXhaUVVGTkxESkNRVUZqTERaQ1FVRTJRaXhEUVVGRExFTkJRVU03UzBGRGNFUTdPMEZCUlVRc1VVRkJTU3hGUVVGRkxFZEJRVWNzVDBGQlR5eERRVUZETEVWQlFVVTdVVUZEWml4UFFVRlBMRWRCUVVjc1QwRkJUeXhEUVVGRExFOUJRVTg3VVVGRGVrSXNRMEZCUXl4SFFVRkhMRU5CUVVNN1VVRkRUQ3hIUVVGSExFZEJRVWNzUlVGQlJUdFJRVU5TTEVsQlFVa3NXVUZCUVR0UlFVTktMRmRCUVZjc1dVRkJRU3hEUVVGRE96dEJRVVZvUWl4UlFVRkpMRTlCUVU4c1EwRkJReXhKUVVGSkxFbEJRVWtzVDBGQlR5eERRVUZETEVkQlFVY3NSVUZCUlR0QlFVTXZRaXhwUWtGQlZ5eEhRVUZITEhsQ1FVRnJRaXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlN4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRPMHRCUTJwR096dEJRVVZFTEZGQlFVa3NhMEpCUVZjc1QwRkJUeXhEUVVGRExFVkJRVVU3UVVGQlJTeGhRVUZQTEVkQlFVY3NUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dExRVUZGT3p0QlFVVXhSQ3hSUVVGSkxFOUJRVThzUTBGQlF5eEpRVUZKTEVWQlFVVTdRVUZEYUVJc1ZVRkJTU3hIUVVGSExHMUNRVUZaTEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRMUVVOc1F6czdRVUZGUkN4aFFVRlRMR0ZCUVdFc1EwRkJReXhMUVVGTExFVkJRVVVzUzBGQlN5eEZRVUZGTEVsQlFVa3NSVUZCUlR0QlFVTjZReXhWUVVGSkxFbEJRVWtzUlVGQlJUdEJRVU5TTEZsQlFVa3NRMEZCUXl4SFFVRkhMRWRCUVVjc1MwRkJTeXhEUVVGRE8wRkJRMnBDTEZsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1MwRkJTeXhEUVVGRE8wRkJRMjVDTEZsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1MwRkJTeXhMUVVGTExFTkJRVU1zUTBGQlF6dEJRVU42UWl4WlFVRkpMRU5CUVVNc1NVRkJTU3hIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTTdPMEZCUlc1Q0xGbEJRVWtzVjBGQlZ5eEZRVUZGTzBGQlEyWXNZMEZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhYUVVGWExFZEJRVWNzUzBGQlN5eERRVUZETzFOQlEzaERPMDlCUTBZN08wRkJSVVFzVTBGQlJ5eEhRVUZITEVkQlFVY3NSMEZCUnl4RlFVRkZMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZGTzBGQlF6ZENMRmxCUVVrc1JVRkJSU3hKUVVGSk8wRkJRMVlzYlVKQlFWY3NSVUZCUlN4dFFrRkJXU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNSVUZCUlN4TFFVRkxMRU5CUVVNc1JVRkJSU3hEUVVGRExGZEJRVmNzUjBGQlJ5eExRVUZMTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1QwRkRMMFVzUTBGQlF5eERRVUZETzB0QlEwbzdPMEZCUlVRc1VVRkJTU3hQUVVGUExFbEJRVWtzVDBGQlR5eFBRVUZQTEV0QlFVc3NVVUZCVVN4RlFVRkZPMEZCUXpGRExGVkJRVWtzWlVGQlVTeFBRVUZQTEVOQlFVTXNSVUZCUlR0QlFVTndRaXhoUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEU5QlFVOHNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0QlFVTjJReXhqUVVGSkxFTkJRVU1zU1VGQlNTeFBRVUZQTEVWQlFVVTdRVUZEYUVJc2VVSkJRV0VzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhQUVVGUExFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMWRCUXk5RE8xTkJRMFk3VDBGRFJpeE5RVUZOTzBGQlEwd3NXVUZCU1N4UlFVRlJMRmxCUVVFc1EwRkJRenM3UVVGRllpeGhRVUZMTEVsQlFVa3NSMEZCUnl4SlFVRkpMRTlCUVU4c1JVRkJSVHRCUVVOMlFpeGpRVUZKTEU5QlFVOHNRMEZCUXl4alFVRmpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVU3T3pzN1FVRkpMMElzWjBKQlFVa3NVVUZCVVN4TFFVRkxMRk5CUVZNc1JVRkJSVHRCUVVNeFFpd3lRa0ZCWVN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdZVUZEYUVNN1FVRkRSQ3h2UWtGQlVTeEhRVUZITEVkQlFVY3NRMEZCUXp0QlFVTm1MR0ZCUVVNc1JVRkJSU3hEUVVGRE8xZEJRMHc3VTBGRFJqdEJRVU5FTEZsQlFVa3NVVUZCVVN4TFFVRkxMRk5CUVZNc1JVRkJSVHRCUVVNeFFpeDFRa0ZCWVN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMU5CUTNSRE8wOUJRMFk3UzBGRFJqczdRVUZGUkN4UlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFVkJRVVU3UVVGRFdDeFRRVUZITEVkQlFVY3NUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8wdEJRM0pDT3p0QlFVVkVMRmRCUVU4c1IwRkJSeXhEUVVGRE8wZEJRMW9zUTBGQlF5eERRVUZETzBOQlEwb2lMQ0ptYVd4bElqb2laV0ZqYUM1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdZWEJ3Wlc1a1EyOXVkR1Y0ZEZCaGRHZ3NJR0pzYjJOclVHRnlZVzF6TENCamNtVmhkR1ZHY21GdFpTd2dhWE5CY25KaGVTd2dhWE5HZFc1amRHbHZibjBnWm5KdmJTQW5MaTR2ZFhScGJITW5PMXh1YVcxd2IzSjBJRVY0WTJWd2RHbHZiaUJtY205dElDY3VMaTlsZUdObGNIUnBiMjRuTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCbWRXNWpkR2x2YmlocGJuTjBZVzVqWlNrZ2UxeHVJQ0JwYm5OMFlXNWpaUzV5WldkcGMzUmxja2hsYkhCbGNpZ25aV0ZqYUNjc0lHWjFibU4wYVc5dUtHTnZiblJsZUhRc0lHOXdkR2x2Ym5NcElIdGNiaUFnSUNCcFppQW9JVzl3ZEdsdmJuTXBJSHRjYmlBZ0lDQWdJSFJvY205M0lHNWxkeUJGZUdObGNIUnBiMjRvSjAxMWMzUWdjR0Z6Y3lCcGRHVnlZWFJ2Y2lCMGJ5QWpaV0ZqYUNjcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUd4bGRDQm1iaUE5SUc5d2RHbHZibk11Wm00c1hHNGdJQ0FnSUNBZ0lHbHVkbVZ5YzJVZ1BTQnZjSFJwYjI1ekxtbHVkbVZ5YzJVc1hHNGdJQ0FnSUNBZ0lHa2dQU0F3TEZ4dUlDQWdJQ0FnSUNCeVpYUWdQU0FuSnl4Y2JpQWdJQ0FnSUNBZ1pHRjBZU3hjYmlBZ0lDQWdJQ0FnWTI5dWRHVjRkRkJoZEdnN1hHNWNiaUFnSUNCcFppQW9iM0IwYVc5dWN5NWtZWFJoSUNZbUlHOXdkR2x2Ym5NdWFXUnpLU0I3WEc0Z0lDQWdJQ0JqYjI1MFpYaDBVR0YwYUNBOUlHRndjR1Z1WkVOdmJuUmxlSFJRWVhSb0tHOXdkR2x2Ym5NdVpHRjBZUzVqYjI1MFpYaDBVR0YwYUN3Z2IzQjBhVzl1Y3k1cFpITmJNRjBwSUNzZ0p5NG5PMXh1SUNBZ0lIMWNibHh1SUNBZ0lHbG1JQ2hwYzBaMWJtTjBhVzl1S0dOdmJuUmxlSFFwS1NCN0lHTnZiblJsZUhRZ1BTQmpiMjUwWlhoMExtTmhiR3dvZEdocGN5azdJSDFjYmx4dUlDQWdJR2xtSUNodmNIUnBiMjV6TG1SaGRHRXBJSHRjYmlBZ0lDQWdJR1JoZEdFZ1BTQmpjbVZoZEdWR2NtRnRaU2h2Y0hScGIyNXpMbVJoZEdFcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdaMWJtTjBhVzl1SUdWNFpXTkpkR1Z5WVhScGIyNG9abWxsYkdRc0lHbHVaR1Y0TENCc1lYTjBLU0I3WEc0Z0lDQWdJQ0JwWmlBb1pHRjBZU2tnZTF4dUlDQWdJQ0FnSUNCa1lYUmhMbXRsZVNBOUlHWnBaV3hrTzF4dUlDQWdJQ0FnSUNCa1lYUmhMbWx1WkdWNElEMGdhVzVrWlhnN1hHNGdJQ0FnSUNBZ0lHUmhkR0V1Wm1seWMzUWdQU0JwYm1SbGVDQTlQVDBnTUR0Y2JpQWdJQ0FnSUNBZ1pHRjBZUzVzWVhOMElEMGdJU0ZzWVhOME8xeHVYRzRnSUNBZ0lDQWdJR2xtSUNoamIyNTBaWGgwVUdGMGFDa2dlMXh1SUNBZ0lDQWdJQ0FnSUdSaGRHRXVZMjl1ZEdWNGRGQmhkR2dnUFNCamIyNTBaWGgwVUdGMGFDQXJJR1pwWld4a08xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJSEpsZENBOUlISmxkQ0FySUdadUtHTnZiblJsZUhSYlptbGxiR1JkTENCN1hHNGdJQ0FnSUNBZ0lHUmhkR0U2SUdSaGRHRXNYRzRnSUNBZ0lDQWdJR0pzYjJOclVHRnlZVzF6T2lCaWJHOWphMUJoY21GdGN5aGJZMjl1ZEdWNGRGdG1hV1ZzWkYwc0lHWnBaV3hrWFN3Z1cyTnZiblJsZUhSUVlYUm9JQ3NnWm1sbGJHUXNJRzUxYkd4ZEtWeHVJQ0FnSUNBZ2ZTazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLR052Ym5SbGVIUWdKaVlnZEhsd1pXOW1JR052Ym5SbGVIUWdQVDA5SUNkdlltcGxZM1FuS1NCN1hHNGdJQ0FnSUNCcFppQW9hWE5CY25KaGVTaGpiMjUwWlhoMEtTa2dlMXh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JxSUQwZ1kyOXVkR1Y0ZEM1c1pXNW5kR2c3SUdrZ1BDQnFPeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdJQ0JwWmlBb2FTQnBiaUJqYjI1MFpYaDBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmxlR1ZqU1hSbGNtRjBhVzl1S0drc0lHa3NJR2tnUFQwOUlHTnZiblJsZUhRdWJHVnVaM1JvSUMwZ01TazdYRzRnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNCc1pYUWdjSEpwYjNKTFpYazdYRzVjYmlBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYTJWNUlHbHVJR052Ym5SbGVIUXBJSHRjYmlBZ0lDQWdJQ0FnSUNCcFppQW9ZMjl1ZEdWNGRDNW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJYWlNkeVpTQnlkVzV1YVc1bklIUm9aU0JwZEdWeVlYUnBiMjV6SUc5dVpTQnpkR1Z3SUc5MWRDQnZaaUJ6ZVc1aklITnZJSGRsSUdOaGJpQmtaWFJsWTNSY2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUhSb1pTQnNZWE4wSUdsMFpYSmhkR2x2YmlCM2FYUm9iM1YwSUdoaGRtVWdkRzhnYzJOaGJpQjBhR1VnYjJKcVpXTjBJSFIzYVdObElHRnVaQ0JqY21WaGRHVmNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklHRnVJR2wwWlhKdFpXUnBZWFJsSUd0bGVYTWdZWEp5WVhrdVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2NISnBiM0pMWlhrZ0lUMDlJSFZ1WkdWbWFXNWxaQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0JsZUdWalNYUmxjbUYwYVc5dUtIQnlhVzl5UzJWNUxDQnBJQzBnTVNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQndjbWx2Y2t0bGVTQTlJR3RsZVR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2tyS3p0Y2JpQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnYVdZZ0tIQnlhVzl5UzJWNUlDRTlQU0IxYm1SbFptbHVaV1FwSUh0Y2JpQWdJQ0FnSUNBZ0lDQmxlR1ZqU1hSbGNtRjBhVzl1S0hCeWFXOXlTMlY1TENCcElDMGdNU3dnZEhKMVpTazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaUFvYVNBOVBUMGdNQ2tnZTF4dUlDQWdJQ0FnY21WMElEMGdhVzUyWlhKelpTaDBhR2x6S1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdjbVYwTzF4dUlDQjlLVHRjYm4xY2JpSmRmUT09XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2hlbHBlcnMvZWFjaC5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX2V4Y2VwdGlvbiA9IHJlcXVpcmUoJy4uL2V4Y2VwdGlvbicpO1xuXG52YXIgX2V4Y2VwdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leGNlcHRpb24pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2hlbHBlck1pc3NpbmcnLCBmdW5jdGlvbiAoKSAvKiBbYXJncywgXW9wdGlvbnMgKi97XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIC8vIEEgbWlzc2luZyBmaWVsZCBpbiBhIHt7Zm9vfX0gY29uc3RydWN0LlxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU29tZW9uZSBpcyBhY3R1YWxseSB0cnlpbmcgdG8gY2FsbCBzb21ldGhpbmcsIGJsb3cgdXAuXG4gICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnTWlzc2luZyBoZWxwZXI6IFwiJyArIGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV0ubmFtZSArICdcIicpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMeTR1TDJ4cFlpOW9ZVzVrYkdWaVlYSnpMMmhsYkhCbGNuTXZhR1ZzY0dWeUxXMXBjM05wYm1jdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3p0NVFrRkJjMElzWTBGQll6czdPenR4UWtGRmNrSXNWVUZCVXl4UlFVRlJMRVZCUVVVN1FVRkRhRU1zVlVGQlVTeERRVUZETEdOQlFXTXNRMEZCUXl4bFFVRmxMRVZCUVVVc2FVTkJRV2RETzBGQlEzWkZMRkZCUVVrc1UwRkJVeXhEUVVGRExFMUJRVTBzUzBGQlN5eERRVUZETEVWQlFVVTdPMEZCUlRGQ0xHRkJRVThzVTBGQlV5eERRVUZETzB0QlEyeENMRTFCUVUwN08wRkJSVXdzV1VGQlRTd3lRa0ZCWXl4dFFrRkJiVUlzUjBGQlJ5eFRRVUZUTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1MwRkRka1k3UjBGRFJpeERRVUZETEVOQlFVTTdRMEZEU2lJc0ltWnBiR1VpT2lKb1pXeHdaWEl0YldsemMybHVaeTVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCRmVHTmxjSFJwYjI0Z1puSnZiU0FuTGk0dlpYaGpaWEIwYVc5dUp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdablZ1WTNScGIyNG9hVzV6ZEdGdVkyVXBJSHRjYmlBZ2FXNXpkR0Z1WTJVdWNtVm5hWE4wWlhKSVpXeHdaWElvSjJobGJIQmxjazFwYzNOcGJtY25MQ0JtZFc1amRHbHZiaWd2S2lCYllYSm5jeXdnWFc5d2RHbHZibk1nS2k4cElIdGNiaUFnSUNCcFppQW9ZWEpuZFcxbGJuUnpMbXhsYm1kMGFDQTlQVDBnTVNrZ2UxeHVJQ0FnSUNBZ0x5OGdRU0J0YVhOemFXNW5JR1pwWld4a0lHbHVJR0VnZTN0bWIyOTlmU0JqYjI1emRISjFZM1F1WEc0Z0lDQWdJQ0J5WlhSMWNtNGdkVzVrWldacGJtVmtPMXh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBdkx5QlRiMjFsYjI1bElHbHpJR0ZqZEhWaGJHeDVJSFJ5ZVdsdVp5QjBieUJqWVd4c0lITnZiV1YwYUdsdVp5d2dZbXh2ZHlCMWNDNWNiaUFnSUNBZ0lIUm9jbTkzSUc1bGR5QkZlR05sY0hScGIyNG9KMDFwYzNOcGJtY2dhR1ZzY0dWeU9pQmNJaWNnS3lCaGNtZDFiV1Z1ZEhOYllYSm5kVzFsYm5SekxteGxibWQwYUNBdElERmRMbTVoYldVZ0t5QW5YQ0luS1R0Y2JpQWdJQ0I5WEc0Z0lIMHBPMXh1ZlZ4dUlsMTlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvaGVscGVycy9oZWxwZXItbWlzc2luZy5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdpZicsIGZ1bmN0aW9uIChjb25kaXRpb25hbCwgb3B0aW9ucykge1xuICAgIGlmIChfdXRpbHMuaXNGdW5jdGlvbihjb25kaXRpb25hbCkpIHtcbiAgICAgIGNvbmRpdGlvbmFsID0gY29uZGl0aW9uYWwuY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IGJlaGF2aW9yIGlzIHRvIHJlbmRlciB0aGUgcG9zaXRpdmUgcGF0aCBpZiB0aGUgdmFsdWUgaXMgdHJ1dGh5IGFuZCBub3QgZW1wdHkuXG4gICAgLy8gVGhlIGBpbmNsdWRlWmVyb2Agb3B0aW9uIG1heSBiZSBzZXQgdG8gdHJlYXQgdGhlIGNvbmR0aW9uYWwgYXMgcHVyZWx5IG5vdCBlbXB0eSBiYXNlZCBvbiB0aGVcbiAgICAvLyBiZWhhdmlvciBvZiBpc0VtcHR5LiBFZmZlY3RpdmVseSB0aGlzIGRldGVybWluZXMgaWYgMCBpcyBoYW5kbGVkIGJ5IHRoZSBwb3NpdGl2ZSBwYXRoIG9yIG5lZ2F0aXZlLlxuICAgIGlmICghb3B0aW9ucy5oYXNoLmluY2x1ZGVaZXJvICYmICFjb25kaXRpb25hbCB8fCBfdXRpbHMuaXNFbXB0eShjb25kaXRpb25hbCkpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmludmVyc2UodGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmZuKHRoaXMpO1xuICAgIH1cbiAgfSk7XG5cbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ3VubGVzcycsIGZ1bmN0aW9uIChjb25kaXRpb25hbCwgb3B0aW9ucykge1xuICAgIHJldHVybiBpbnN0YW5jZS5oZWxwZXJzWydpZiddLmNhbGwodGhpcywgY29uZGl0aW9uYWwsIHsgZm46IG9wdGlvbnMuaW52ZXJzZSwgaW52ZXJzZTogb3B0aW9ucy5mbiwgaGFzaDogb3B0aW9ucy5oYXNoIH0pO1xuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUx5NHVMMnhwWWk5b1lXNWtiR1ZpWVhKekwyaGxiSEJsY25NdmFXWXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0eFFrRkJhME1zVlVGQlZUczdjVUpCUlRkQ0xGVkJRVk1zVVVGQlVTeEZRVUZGTzBGQlEyaERMRlZCUVZFc1EwRkJReXhqUVVGakxFTkJRVU1zU1VGQlNTeEZRVUZGTEZWQlFWTXNWMEZCVnl4RlFVRkZMRTlCUVU4c1JVRkJSVHRCUVVNelJDeFJRVUZKTEd0Q1FVRlhMRmRCUVZjc1EwRkJReXhGUVVGRk8wRkJRVVVzYVVKQlFWY3NSMEZCUnl4WFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzB0QlFVVTdPenM3TzBGQlMzUkZMRkZCUVVrc1FVRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhKUVVGTExHVkJRVkVzVjBGQlZ5eERRVUZETEVWQlFVVTdRVUZEZGtVc1lVRkJUeXhQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMHRCUXpsQ0xFMUJRVTA3UVVGRFRDeGhRVUZQTEU5QlFVOHNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03UzBGRGVrSTdSMEZEUml4RFFVRkRMRU5CUVVNN08wRkJSVWdzVlVGQlVTeERRVUZETEdOQlFXTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1ZVRkJVeXhYUVVGWExFVkJRVVVzVDBGQlR5eEZRVUZGTzBGQlF5OUVMRmRCUVU4c1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hGUVVGRkxGZEJRVmNzUlVGQlJTeEZRVUZETEVWQlFVVXNSVUZCUlN4UFFVRlBMRU5CUVVNc1QwRkJUeXhGUVVGRkxFOUJRVThzUlVGQlJTeFBRVUZQTEVOQlFVTXNSVUZCUlN4RlFVRkZMRWxCUVVrc1JVRkJSU3hQUVVGUExFTkJRVU1zU1VGQlNTeEZRVUZETEVOQlFVTXNRMEZCUXp0SFFVTjJTQ3hEUVVGRExFTkJRVU03UTBGRFNpSXNJbVpwYkdVaU9pSnBaaTVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCN2FYTkZiWEIwZVN3Z2FYTkdkVzVqZEdsdmJuMGdabkp2YlNBbkxpNHZkWFJwYkhNbk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQm1kVzVqZEdsdmJpaHBibk4wWVc1alpTa2dlMXh1SUNCcGJuTjBZVzVqWlM1eVpXZHBjM1JsY2tobGJIQmxjaWduYVdZbkxDQm1kVzVqZEdsdmJpaGpiMjVrYVhScGIyNWhiQ3dnYjNCMGFXOXVjeWtnZTF4dUlDQWdJR2xtSUNocGMwWjFibU4wYVc5dUtHTnZibVJwZEdsdmJtRnNLU2tnZXlCamIyNWthWFJwYjI1aGJDQTlJR052Ym1ScGRHbHZibUZzTG1OaGJHd29kR2hwY3lrN0lIMWNibHh1SUNBZ0lDOHZJRVJsWm1GMWJIUWdZbVZvWVhacGIzSWdhWE1nZEc4Z2NtVnVaR1Z5SUhSb1pTQndiM05wZEdsMlpTQndZWFJvSUdsbUlIUm9aU0IyWVd4MVpTQnBjeUIwY25WMGFIa2dZVzVrSUc1dmRDQmxiWEIwZVM1Y2JpQWdJQ0F2THlCVWFHVWdZR2x1WTJ4MVpHVmFaWEp2WUNCdmNIUnBiMjRnYldGNUlHSmxJSE5sZENCMGJ5QjBjbVZoZENCMGFHVWdZMjl1WkhScGIyNWhiQ0JoY3lCd2RYSmxiSGtnYm05MElHVnRjSFI1SUdKaGMyVmtJRzl1SUhSb1pWeHVJQ0FnSUM4dklHSmxhR0YyYVc5eUlHOW1JR2x6Ulcxd2RIa3VJRVZtWm1WamRHbDJaV3g1SUhSb2FYTWdaR1YwWlhKdGFXNWxjeUJwWmlBd0lHbHpJR2hoYm1Sc1pXUWdZbmtnZEdobElIQnZjMmwwYVhabElIQmhkR2dnYjNJZ2JtVm5ZWFJwZG1VdVhHNGdJQ0FnYVdZZ0tDZ2hiM0IwYVc5dWN5NW9ZWE5vTG1sdVkyeDFaR1ZhWlhKdklDWW1JQ0ZqYjI1a2FYUnBiMjVoYkNrZ2ZId2dhWE5GYlhCMGVTaGpiMjVrYVhScGIyNWhiQ2twSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUJ2Y0hScGIyNXpMbWx1ZG1WeWMyVW9kR2hwY3lrN1hHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQnZjSFJwYjI1ekxtWnVLSFJvYVhNcE8xeHVJQ0FnSUgxY2JpQWdmU2s3WEc1Y2JpQWdhVzV6ZEdGdVkyVXVjbVZuYVhOMFpYSklaV3h3WlhJb0ozVnViR1Z6Y3ljc0lHWjFibU4wYVc5dUtHTnZibVJwZEdsdmJtRnNMQ0J2Y0hScGIyNXpLU0I3WEc0Z0lDQWdjbVYwZFhKdUlHbHVjM1JoYm1ObExtaGxiSEJsY25OYkoybG1KMTB1WTJGc2JDaDBhR2x6TENCamIyNWthWFJwYjI1aGJDd2dlMlp1T2lCdmNIUnBiMjV6TG1sdWRtVnljMlVzSUdsdWRtVnljMlU2SUc5d2RHbHZibk11Wm00c0lHaGhjMmc2SUc5d2RHbHZibk11YUdGemFIMHBPMXh1SUNCOUtUdGNibjFjYmlKZGZRPT1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvaGVscGVycy9pZi5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2xvZycsIGZ1bmN0aW9uICgpIC8qIG1lc3NhZ2UsIG9wdGlvbnMgKi97XG4gICAgdmFyIGFyZ3MgPSBbdW5kZWZpbmVkXSxcbiAgICAgICAgb3B0aW9ucyA9IGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV07XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgICB9XG5cbiAgICB2YXIgbGV2ZWwgPSAxO1xuICAgIGlmIChvcHRpb25zLmhhc2gubGV2ZWwgIT0gbnVsbCkge1xuICAgICAgbGV2ZWwgPSBvcHRpb25zLmhhc2gubGV2ZWw7XG4gICAgfSBlbHNlIGlmIChvcHRpb25zLmRhdGEgJiYgb3B0aW9ucy5kYXRhLmxldmVsICE9IG51bGwpIHtcbiAgICAgIGxldmVsID0gb3B0aW9ucy5kYXRhLmxldmVsO1xuICAgIH1cbiAgICBhcmdzWzBdID0gbGV2ZWw7XG5cbiAgICBpbnN0YW5jZS5sb2cuYXBwbHkoaW5zdGFuY2UsIGFyZ3MpO1xuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUx5NHVMMnhwWWk5b1lXNWtiR1ZpWVhKekwyaGxiSEJsY25NdmJHOW5MbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN2NVSkJRV1VzVlVGQlV5eFJRVUZSTEVWQlFVVTdRVUZEYUVNc1ZVRkJVU3hEUVVGRExHTkJRV01zUTBGQlF5eExRVUZMTEVWQlFVVXNhME5CUVdsRE8wRkJRemxFTEZGQlFVa3NTVUZCU1N4SFFVRkhMRU5CUVVNc1UwRkJVeXhEUVVGRE8xRkJRMnhDTEU5QlFVOHNSMEZCUnl4VFFVRlRMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTTVReXhUUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1UwRkJVeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1FVRkROME1zVlVGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dExRVU42UWpzN1FVRkZSQ3hSUVVGSkxFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVTTdRVUZEWkN4UlFVRkpMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eEpRVUZKTEVsQlFVa3NSVUZCUlR0QlFVTTVRaXhYUVVGTExFZEJRVWNzVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNN1MwRkROVUlzVFVGQlRTeEpRVUZKTEU5QlFVOHNRMEZCUXl4SlFVRkpMRWxCUVVrc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVsQlFVa3NTVUZCU1N4RlFVRkZPMEZCUTNKRUxGZEJRVXNzUjBGQlJ5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJRenRMUVVNMVFqdEJRVU5FTEZGQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU03TzBGQlJXaENMRmxCUVZFc1EwRkJReXhIUVVGSExFMUJRVUVzUTBGQldpeFJRVUZSTEVWQlFWTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1IwRkRlRUlzUTBGQlF5eERRVUZETzBOQlEwb2lMQ0ptYVd4bElqb2liRzluTG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2laWGh3YjNKMElHUmxabUYxYkhRZ1puVnVZM1JwYjI0b2FXNXpkR0Z1WTJVcElIdGNiaUFnYVc1emRHRnVZMlV1Y21WbmFYTjBaWEpJWld4d1pYSW9KMnh2Wnljc0lHWjFibU4wYVc5dUtDOHFJRzFsYzNOaFoyVXNJRzl3ZEdsdmJuTWdLaThwSUh0Y2JpQWdJQ0JzWlhRZ1lYSm5jeUE5SUZ0MWJtUmxabWx1WldSZExGeHVJQ0FnSUNBZ0lDQnZjSFJwYjI1eklEMGdZWEpuZFcxbGJuUnpXMkZ5WjNWdFpXNTBjeTVzWlc1bmRHZ2dMU0F4WFR0Y2JpQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUdGeVozVnRaVzUwY3k1c1pXNW5kR2dnTFNBeE95QnBLeXNwSUh0Y2JpQWdJQ0FnSUdGeVozTXVjSFZ6YUNoaGNtZDFiV1Z1ZEhOYmFWMHBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHeGxkQ0JzWlhabGJDQTlJREU3WEc0Z0lDQWdhV1lnS0c5d2RHbHZibk11YUdGemFDNXNaWFpsYkNBaFBTQnVkV3hzS1NCN1hHNGdJQ0FnSUNCc1pYWmxiQ0E5SUc5d2RHbHZibk11YUdGemFDNXNaWFpsYkR0Y2JpQWdJQ0I5SUdWc2MyVWdhV1lnS0c5d2RHbHZibk11WkdGMFlTQW1KaUJ2Y0hScGIyNXpMbVJoZEdFdWJHVjJaV3dnSVQwZ2JuVnNiQ2tnZTF4dUlDQWdJQ0FnYkdWMlpXd2dQU0J2Y0hScGIyNXpMbVJoZEdFdWJHVjJaV3c3WEc0Z0lDQWdmVnh1SUNBZ0lHRnlaM05iTUYwZ1BTQnNaWFpsYkR0Y2JseHVJQ0FnSUdsdWMzUmhibU5sTG14dlp5Z3VMaTRnWVhKbmN5azdYRzRnSUgwcE8xeHVmVnh1SWwxOVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9oZWxwZXJzL2xvZy5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2xvb2t1cCcsIGZ1bmN0aW9uIChvYmosIGZpZWxkKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmpbZmllbGRdO1xuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUx5NHVMMnhwWWk5b1lXNWtiR1ZpWVhKekwyaGxiSEJsY25NdmJHOXZhM1Z3TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdjVUpCUVdVc1ZVRkJVeXhSUVVGUkxFVkJRVVU3UVVGRGFFTXNWVUZCVVN4RFFVRkRMR05CUVdNc1EwRkJReXhSUVVGUkxFVkJRVVVzVlVGQlV5eEhRVUZITEVWQlFVVXNTMEZCU3l4RlFVRkZPMEZCUTNKRUxGZEJRVThzUjBGQlJ5eEpRVUZKTEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRIUVVNeFFpeERRVUZETEVOQlFVTTdRMEZEU2lJc0ltWnBiR1VpT2lKc2IyOXJkWEF1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SmxlSEJ2Y25RZ1pHVm1ZWFZzZENCbWRXNWpkR2x2YmlocGJuTjBZVzVqWlNrZ2UxeHVJQ0JwYm5OMFlXNWpaUzV5WldkcGMzUmxja2hsYkhCbGNpZ25iRzl2YTNWd0p5d2dablZ1WTNScGIyNG9iMkpxTENCbWFXVnNaQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQnZZbW9nSmlZZ2IySnFXMlpwWld4a1hUdGNiaUFnZlNrN1hHNTlYRzRpWFgwPVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9oZWxwZXJzL2xvb2t1cC5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCd3aXRoJywgZnVuY3Rpb24gKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICBpZiAoX3V0aWxzLmlzRnVuY3Rpb24oY29udGV4dCkpIHtcbiAgICAgIGNvbnRleHQgPSBjb250ZXh0LmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgdmFyIGZuID0gb3B0aW9ucy5mbjtcblxuICAgIGlmICghX3V0aWxzLmlzRW1wdHkoY29udGV4dCkpIHtcbiAgICAgIHZhciBkYXRhID0gb3B0aW9ucy5kYXRhO1xuICAgICAgaWYgKG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmlkcykge1xuICAgICAgICBkYXRhID0gX3V0aWxzLmNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgIGRhdGEuY29udGV4dFBhdGggPSBfdXRpbHMuYXBwZW5kQ29udGV4dFBhdGgob3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoLCBvcHRpb25zLmlkc1swXSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmbihjb250ZXh0LCB7XG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIGJsb2NrUGFyYW1zOiBfdXRpbHMuYmxvY2tQYXJhbXMoW2NvbnRleHRdLCBbZGF0YSAmJiBkYXRhLmNvbnRleHRQYXRoXSlcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5pbnZlcnNlKHRoaXMpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMeTR1TDJ4cFlpOW9ZVzVrYkdWaVlYSnpMMmhsYkhCbGNuTXZkMmwwYUM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPM0ZDUVVFclJTeFZRVUZWT3p0eFFrRkZNVVVzVlVGQlV5eFJRVUZSTEVWQlFVVTdRVUZEYUVNc1ZVRkJVU3hEUVVGRExHTkJRV01zUTBGQlF5eE5RVUZOTEVWQlFVVXNWVUZCVXl4UFFVRlBMRVZCUVVVc1QwRkJUeXhGUVVGRk8wRkJRM3BFTEZGQlFVa3NhMEpCUVZjc1QwRkJUeXhEUVVGRExFVkJRVVU3UVVGQlJTeGhRVUZQTEVkQlFVY3NUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dExRVUZGT3p0QlFVVXhSQ3hSUVVGSkxFVkJRVVVzUjBGQlJ5eFBRVUZQTEVOQlFVTXNSVUZCUlN4RFFVRkRPenRCUVVWd1FpeFJRVUZKTEVOQlFVTXNaVUZCVVN4UFFVRlBMRU5CUVVNc1JVRkJSVHRCUVVOeVFpeFZRVUZKTEVsQlFVa3NSMEZCUnl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRE8wRkJRM2hDTEZWQlFVa3NUMEZCVHl4RFFVRkRMRWxCUVVrc1NVRkJTU3hQUVVGUExFTkJRVU1zUjBGQlJ5eEZRVUZGTzBGQlF5OUNMRmxCUVVrc1IwRkJSeXh0UWtGQldTeFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1FVRkRha01zV1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4NVFrRkJhMElzVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMDlCUTJoR096dEJRVVZFTEdGQlFVOHNSVUZCUlN4RFFVRkRMRTlCUVU4c1JVRkJSVHRCUVVOcVFpeFpRVUZKTEVWQlFVVXNTVUZCU1R0QlFVTldMRzFDUVVGWExFVkJRVVVzYlVKQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzU1VGQlNTeEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNN1QwRkRhRVVzUTBGQlF5eERRVUZETzB0QlEwb3NUVUZCVFR0QlFVTk1MR0ZCUVU4c1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0TFFVTTVRanRIUVVOR0xFTkJRVU1zUTBGQlF6dERRVU5LSWl3aVptbHNaU0k2SW5kcGRHZ3Vhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZTJGd2NHVnVaRU52Ym5SbGVIUlFZWFJvTENCaWJHOWphMUJoY21GdGN5d2dZM0psWVhSbFJuSmhiV1VzSUdselJXMXdkSGtzSUdselJuVnVZM1JwYjI1OUlHWnliMjBnSnk0dUwzVjBhV3h6Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1puVnVZM1JwYjI0b2FXNXpkR0Z1WTJVcElIdGNiaUFnYVc1emRHRnVZMlV1Y21WbmFYTjBaWEpJWld4d1pYSW9KM2RwZEdnbkxDQm1kVzVqZEdsdmJpaGpiMjUwWlhoMExDQnZjSFJwYjI1ektTQjdYRzRnSUNBZ2FXWWdLR2x6Um5WdVkzUnBiMjRvWTI5dWRHVjRkQ2twSUhzZ1kyOXVkR1Y0ZENBOUlHTnZiblJsZUhRdVkyRnNiQ2gwYUdsektUc2dmVnh1WEc0Z0lDQWdiR1YwSUdadUlEMGdiM0IwYVc5dWN5NW1ianRjYmx4dUlDQWdJR2xtSUNnaGFYTkZiWEIwZVNoamIyNTBaWGgwS1NrZ2UxeHVJQ0FnSUNBZ2JHVjBJR1JoZEdFZ1BTQnZjSFJwYjI1ekxtUmhkR0U3WEc0Z0lDQWdJQ0JwWmlBb2IzQjBhVzl1Y3k1a1lYUmhJQ1ltSUc5d2RHbHZibk11YVdSektTQjdYRzRnSUNBZ0lDQWdJR1JoZEdFZ1BTQmpjbVZoZEdWR2NtRnRaU2h2Y0hScGIyNXpMbVJoZEdFcE8xeHVJQ0FnSUNBZ0lDQmtZWFJoTG1OdmJuUmxlSFJRWVhSb0lEMGdZWEJ3Wlc1a1EyOXVkR1Y0ZEZCaGRHZ29iM0IwYVc5dWN5NWtZWFJoTG1OdmJuUmxlSFJRWVhSb0xDQnZjSFJwYjI1ekxtbGtjMXN3WFNrN1hHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lISmxkSFZ5YmlCbWJpaGpiMjUwWlhoMExDQjdYRzRnSUNBZ0lDQWdJR1JoZEdFNklHUmhkR0VzWEc0Z0lDQWdJQ0FnSUdKc2IyTnJVR0Z5WVcxek9pQmliRzlqYTFCaGNtRnRjeWhiWTI5dWRHVjRkRjBzSUZ0a1lYUmhJQ1ltSUdSaGRHRXVZMjl1ZEdWNGRGQmhkR2hkS1Z4dUlDQWdJQ0FnZlNrN1hHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQnZjSFJwYjI1ekxtbHVkbVZ5YzJVb2RHaHBjeWs3WEc0Z0lDQWdmVnh1SUNCOUtUdGNibjFjYmlKZGZRPT1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvaGVscGVycy93aXRoLmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBsb2dnZXIgPSB7XG4gIG1ldGhvZE1hcDogWydkZWJ1ZycsICdpbmZvJywgJ3dhcm4nLCAnZXJyb3InXSxcbiAgbGV2ZWw6ICdpbmZvJyxcblxuICAvLyBNYXBzIGEgZ2l2ZW4gbGV2ZWwgdmFsdWUgdG8gdGhlIGBtZXRob2RNYXBgIGluZGV4ZXMgYWJvdmUuXG4gIGxvb2t1cExldmVsOiBmdW5jdGlvbiBsb29rdXBMZXZlbChsZXZlbCkge1xuICAgIGlmICh0eXBlb2YgbGV2ZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgbGV2ZWxNYXAgPSBfdXRpbHMuaW5kZXhPZihsb2dnZXIubWV0aG9kTWFwLCBsZXZlbC50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIGlmIChsZXZlbE1hcCA+PSAwKSB7XG4gICAgICAgIGxldmVsID0gbGV2ZWxNYXA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXZlbCA9IHBhcnNlSW50KGxldmVsLCAxMCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGxldmVsO1xuICB9LFxuXG4gIC8vIENhbiBiZSBvdmVycmlkZGVuIGluIHRoZSBob3N0IGVudmlyb25tZW50XG4gIGxvZzogZnVuY3Rpb24gbG9nKGxldmVsKSB7XG4gICAgbGV2ZWwgPSBsb2dnZXIubG9va3VwTGV2ZWwobGV2ZWwpO1xuXG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiBsb2dnZXIubG9va3VwTGV2ZWwobG9nZ2VyLmxldmVsKSA8PSBsZXZlbCkge1xuICAgICAgdmFyIG1ldGhvZCA9IGxvZ2dlci5tZXRob2RNYXBbbGV2ZWxdO1xuICAgICAgaWYgKCFjb25zb2xlW21ldGhvZF0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICAgIG1ldGhvZCA9ICdsb2cnO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgbWVzc2FnZSA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgbWVzc2FnZVtfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGVbbWV0aG9kXS5hcHBseShjb25zb2xlLCBtZXNzYWdlKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgfVxuICB9XG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBsb2dnZXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMMnhwWWk5b1lXNWtiR1ZpWVhKekwyeHZaMmRsY2k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPM0ZDUVVGelFpeFRRVUZUT3p0QlFVVXZRaXhKUVVGSkxFMUJRVTBzUjBGQlJ6dEJRVU5ZTEZkQlFWTXNSVUZCUlN4RFFVRkRMRTlCUVU4c1JVRkJSU3hOUVVGTkxFVkJRVVVzVFVGQlRTeEZRVUZGTEU5QlFVOHNRMEZCUXp0QlFVTTNReXhQUVVGTExFVkJRVVVzVFVGQlRUczdPMEZCUjJJc1lVRkJWeXhGUVVGRkxIRkNRVUZUTEV0QlFVc3NSVUZCUlR0QlFVTXpRaXhSUVVGSkxFOUJRVThzUzBGQlN5eExRVUZMTEZGQlFWRXNSVUZCUlR0QlFVTTNRaXhWUVVGSkxGRkJRVkVzUjBGQlJ5eGxRVUZSTEUxQlFVMHNRMEZCUXl4VFFVRlRMRVZCUVVVc1MwRkJTeXhEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETEVOQlFVTTdRVUZET1VRc1ZVRkJTU3hSUVVGUkxFbEJRVWtzUTBGQlF5eEZRVUZGTzBGQlEycENMR0ZCUVVzc1IwRkJSeXhSUVVGUkxFTkJRVU03VDBGRGJFSXNUVUZCVFR0QlFVTk1MR0ZCUVVzc1IwRkJSeXhSUVVGUkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMDlCUXpkQ08wdEJRMFk3TzBGQlJVUXNWMEZCVHl4TFFVRkxMRU5CUVVNN1IwRkRaRHM3TzBGQlIwUXNTMEZCUnl4RlFVRkZMR0ZCUVZNc1MwRkJTeXhGUVVGak8wRkJReTlDTEZOQlFVc3NSMEZCUnl4TlFVRk5MRU5CUVVNc1YwRkJWeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZET3p0QlFVVnNReXhSUVVGSkxFOUJRVThzVDBGQlR5eExRVUZMTEZkQlFWY3NTVUZCU1N4TlFVRk5MRU5CUVVNc1YwRkJWeXhEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4TFFVRkxMRVZCUVVVN1FVRkRMMFVzVlVGQlNTeE5RVUZOTEVkQlFVY3NUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dEJRVU55UXl4VlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF5eEZRVUZGT3p0QlFVTndRaXhqUVVGTkxFZEJRVWNzUzBGQlN5eERRVUZETzA5QlEyaENPenQzUTBGUWJVSXNUMEZCVHp0QlFVRlFMR1ZCUVU4N096dEJRVkV6UWl4aFFVRlBMRU5CUVVNc1RVRkJUU3hQUVVGRExFTkJRV1lzVDBGQlR5eEZRVUZaTEU5QlFVOHNRMEZCUXl4RFFVRkRPMHRCUXpkQ08wZEJRMFk3UTBGRFJpeERRVUZET3p0eFFrRkZZU3hOUVVGTklpd2labWxzWlNJNklteHZaMmRsY2k1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdhVzVrWlhoUFpuMGdabkp2YlNBbkxpOTFkR2xzY3ljN1hHNWNibXhsZENCc2IyZG5aWElnUFNCN1hHNGdJRzFsZEdodlpFMWhjRG9nV3lka1pXSjFaeWNzSUNkcGJtWnZKeXdnSjNkaGNtNG5MQ0FuWlhKeWIzSW5YU3hjYmlBZ2JHVjJaV3c2SUNkcGJtWnZKeXhjYmx4dUlDQXZMeUJOWVhCeklHRWdaMmwyWlc0Z2JHVjJaV3dnZG1Gc2RXVWdkRzhnZEdobElHQnRaWFJvYjJSTllYQmdJR2x1WkdWNFpYTWdZV0p2ZG1VdVhHNGdJR3h2YjJ0MWNFeGxkbVZzT2lCbWRXNWpkR2x2Ymloc1pYWmxiQ2tnZTF4dUlDQWdJR2xtSUNoMGVYQmxiMllnYkdWMlpXd2dQVDA5SUNkemRISnBibWNuS1NCN1hHNGdJQ0FnSUNCc1pYUWdiR1YyWld4TllYQWdQU0JwYm1SbGVFOW1LR3h2WjJkbGNpNXRaWFJvYjJSTllYQXNJR3hsZG1Wc0xuUnZURzkzWlhKRFlYTmxLQ2twTzF4dUlDQWdJQ0FnYVdZZ0tHeGxkbVZzVFdGd0lENDlJREFwSUh0Y2JpQWdJQ0FnSUNBZ2JHVjJaV3dnUFNCc1pYWmxiRTFoY0R0Y2JpQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUd4bGRtVnNJRDBnY0dGeWMyVkpiblFvYkdWMlpXd3NJREV3S1R0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdiR1YyWld3N1hHNGdJSDBzWEc1Y2JpQWdMeThnUTJGdUlHSmxJRzkyWlhKeWFXUmtaVzRnYVc0Z2RHaGxJR2h2YzNRZ1pXNTJhWEp2Ym0xbGJuUmNiaUFnYkc5bk9pQm1kVzVqZEdsdmJpaHNaWFpsYkN3Z0xpNHViV1Z6YzJGblpTa2dlMXh1SUNBZ0lHeGxkbVZzSUQwZ2JHOW5aMlZ5TG14dmIydDFjRXhsZG1Wc0tHeGxkbVZzS1R0Y2JseHVJQ0FnSUdsbUlDaDBlWEJsYjJZZ1kyOXVjMjlzWlNBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NnSmlZZ2JHOW5aMlZ5TG14dmIydDFjRXhsZG1Wc0tHeHZaMmRsY2k1c1pYWmxiQ2tnUEQwZ2JHVjJaV3dwSUh0Y2JpQWdJQ0FnSUd4bGRDQnRaWFJvYjJRZ1BTQnNiMmRuWlhJdWJXVjBhRzlrVFdGd1cyeGxkbVZzWFR0Y2JpQWdJQ0FnSUdsbUlDZ2hZMjl1YzI5c1pWdHRaWFJvYjJSZEtTQjdJQ0FnTHk4Z1pYTnNhVzUwTFdScGMyRmliR1V0YkdsdVpTQnVieTFqYjI1emIyeGxYRzRnSUNBZ0lDQWdJRzFsZEdodlpDQTlJQ2RzYjJjbk8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ1kyOXVjMjlzWlZ0dFpYUm9iMlJkS0M0dUxtMWxjM05oWjJVcE95QWdJQ0F2THlCbGMyeHBiblF0WkdsellXSnNaUzFzYVc1bElHNXZMV052Ym5OdmJHVmNiaUFnSUNCOVhHNGdJSDFjYm4wN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHeHZaMmRsY2p0Y2JpSmRmUT09XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2xvZ2dlci5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoSGFuZGxlYmFycykge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICB2YXIgcm9vdCA9IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogd2luZG93LFxuICAgICAgJEhhbmRsZWJhcnMgPSByb290LkhhbmRsZWJhcnM7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIEhhbmRsZWJhcnMubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAocm9vdC5IYW5kbGViYXJzID09PSBIYW5kbGViYXJzKSB7XG4gICAgICByb290LkhhbmRsZWJhcnMgPSAkSGFuZGxlYmFycztcbiAgICB9XG4gICAgcmV0dXJuIEhhbmRsZWJhcnM7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMMnhwWWk5b1lXNWtiR1ZpWVhKekwyNXZMV052Ym1ac2FXTjBMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN08zRkNRVU5sTEZWQlFWTXNWVUZCVlN4RlFVRkZPenRCUVVWc1F5eE5RVUZKTEVsQlFVa3NSMEZCUnl4UFFVRlBMRTFCUVUwc1MwRkJTeXhYUVVGWExFZEJRVWNzVFVGQlRTeEhRVUZITEUxQlFVMDdUVUZEZEVRc1YwRkJWeXhIUVVGSExFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTTdPMEZCUld4RExGbEJRVlVzUTBGQlF5eFZRVUZWTEVkQlFVY3NXVUZCVnp0QlFVTnFReXhSUVVGSkxFbEJRVWtzUTBGQlF5eFZRVUZWTEV0QlFVc3NWVUZCVlN4RlFVRkZPMEZCUTJ4RExGVkJRVWtzUTBGQlF5eFZRVUZWTEVkQlFVY3NWMEZCVnl4RFFVRkRPMHRCUXk5Q08wRkJRMFFzVjBGQlR5eFZRVUZWTEVOQlFVTTdSMEZEYmtJc1EwRkJRenREUVVOSUlpd2labWxzWlNJNkltNXZMV052Ym1ac2FXTjBMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5b2daMnh2WW1Gc0lIZHBibVJ2ZHlBcUwxeHVaWGh3YjNKMElHUmxabUYxYkhRZ1puVnVZM1JwYjI0b1NHRnVaR3hsWW1GeWN5a2dlMXh1SUNBdktpQnBjM1JoYm1KMWJDQnBaMjV2Y21VZ2JtVjRkQ0FxTDF4dUlDQnNaWFFnY205dmRDQTlJSFI1Y0dWdlppQm5iRzlpWVd3Z0lUMDlJQ2QxYm1SbFptbHVaV1FuSUQ4Z1oyeHZZbUZzSURvZ2QybHVaRzkzTEZ4dUlDQWdJQ0FnSkVoaGJtUnNaV0poY25NZ1BTQnliMjkwTGtoaGJtUnNaV0poY25NN1hHNGdJQzhxSUdsemRHRnVZblZzSUdsbmJtOXlaU0J1WlhoMElDb3ZYRzRnSUVoaGJtUnNaV0poY25NdWJtOURiMjVtYkdsamRDQTlJR1oxYm1OMGFXOXVLQ2tnZTF4dUlDQWdJR2xtSUNoeWIyOTBMa2hoYm1Sc1pXSmhjbk1nUFQwOUlFaGhibVJzWldKaGNuTXBJSHRjYmlBZ0lDQWdJSEp2YjNRdVNHRnVaR3hsWW1GeWN5QTlJQ1JJWVc1a2JHVmlZWEp6TzF4dUlDQWdJSDFjYmlBZ0lDQnlaWFIxY200Z1NHRnVaR3hsWW1GeWN6dGNiaUFnZlR0Y2JuMWNiaUpkZlE9PVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9uby1jb25mbGljdC5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jaGVja1JldmlzaW9uID0gY2hlY2tSZXZpc2lvbjtcbmV4cG9ydHMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbmV4cG9ydHMud3JhcFByb2dyYW0gPSB3cmFwUHJvZ3JhbTtcbmV4cG9ydHMucmVzb2x2ZVBhcnRpYWwgPSByZXNvbHZlUGFydGlhbDtcbmV4cG9ydHMuaW52b2tlUGFydGlhbCA9IGludm9rZVBhcnRpYWw7XG5leHBvcnRzLm5vb3AgPSBub29wO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqWydkZWZhdWx0J10gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgVXRpbHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdXRpbHMpO1xuXG52YXIgX2V4Y2VwdGlvbiA9IHJlcXVpcmUoJy4vZXhjZXB0aW9uJyk7XG5cbnZhciBfZXhjZXB0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4Y2VwdGlvbik7XG5cbnZhciBfYmFzZSA9IHJlcXVpcmUoJy4vYmFzZScpO1xuXG5mdW5jdGlvbiBjaGVja1JldmlzaW9uKGNvbXBpbGVySW5mbykge1xuICB2YXIgY29tcGlsZXJSZXZpc2lvbiA9IGNvbXBpbGVySW5mbyAmJiBjb21waWxlckluZm9bMF0gfHwgMSxcbiAgICAgIGN1cnJlbnRSZXZpc2lvbiA9IF9iYXNlLkNPTVBJTEVSX1JFVklTSU9OO1xuXG4gIGlmIChjb21waWxlclJldmlzaW9uICE9PSBjdXJyZW50UmV2aXNpb24pIHtcbiAgICBpZiAoY29tcGlsZXJSZXZpc2lvbiA8IGN1cnJlbnRSZXZpc2lvbikge1xuICAgICAgdmFyIHJ1bnRpbWVWZXJzaW9ucyA9IF9iYXNlLlJFVklTSU9OX0NIQU5HRVNbY3VycmVudFJldmlzaW9uXSxcbiAgICAgICAgICBjb21waWxlclZlcnNpb25zID0gX2Jhc2UuUkVWSVNJT05fQ0hBTkdFU1tjb21waWxlclJldmlzaW9uXTtcbiAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdUZW1wbGF0ZSB3YXMgcHJlY29tcGlsZWQgd2l0aCBhbiBvbGRlciB2ZXJzaW9uIG9mIEhhbmRsZWJhcnMgdGhhbiB0aGUgY3VycmVudCBydW50aW1lLiAnICsgJ1BsZWFzZSB1cGRhdGUgeW91ciBwcmVjb21waWxlciB0byBhIG5ld2VyIHZlcnNpb24gKCcgKyBydW50aW1lVmVyc2lvbnMgKyAnKSBvciBkb3duZ3JhZGUgeW91ciBydW50aW1lIHRvIGFuIG9sZGVyIHZlcnNpb24gKCcgKyBjb21waWxlclZlcnNpb25zICsgJykuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFVzZSB0aGUgZW1iZWRkZWQgdmVyc2lvbiBpbmZvIHNpbmNlIHRoZSBydW50aW1lIGRvZXNuJ3Qga25vdyBhYm91dCB0aGlzIHJldmlzaW9uIHlldFxuICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ1RlbXBsYXRlIHdhcyBwcmVjb21waWxlZCB3aXRoIGEgbmV3ZXIgdmVyc2lvbiBvZiBIYW5kbGViYXJzIHRoYW4gdGhlIGN1cnJlbnQgcnVudGltZS4gJyArICdQbGVhc2UgdXBkYXRlIHlvdXIgcnVudGltZSB0byBhIG5ld2VyIHZlcnNpb24gKCcgKyBjb21waWxlckluZm9bMV0gKyAnKS4nKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdGVtcGxhdGUodGVtcGxhdGVTcGVjLCBlbnYpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgaWYgKCFlbnYpIHtcbiAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnTm8gZW52aXJvbm1lbnQgcGFzc2VkIHRvIHRlbXBsYXRlJyk7XG4gIH1cbiAgaWYgKCF0ZW1wbGF0ZVNwZWMgfHwgIXRlbXBsYXRlU3BlYy5tYWluKSB7XG4gICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ1Vua25vd24gdGVtcGxhdGUgb2JqZWN0OiAnICsgdHlwZW9mIHRlbXBsYXRlU3BlYyk7XG4gIH1cblxuICB0ZW1wbGF0ZVNwZWMubWFpbi5kZWNvcmF0b3IgPSB0ZW1wbGF0ZVNwZWMubWFpbl9kO1xuXG4gIC8vIE5vdGU6IFVzaW5nIGVudi5WTSByZWZlcmVuY2VzIHJhdGhlciB0aGFuIGxvY2FsIHZhciByZWZlcmVuY2VzIHRocm91Z2hvdXQgdGhpcyBzZWN0aW9uIHRvIGFsbG93XG4gIC8vIGZvciBleHRlcm5hbCB1c2VycyB0byBvdmVycmlkZSB0aGVzZSBhcyBwc3VlZG8tc3VwcG9ydGVkIEFQSXMuXG4gIGVudi5WTS5jaGVja1JldmlzaW9uKHRlbXBsYXRlU3BlYy5jb21waWxlcik7XG5cbiAgZnVuY3Rpb24gaW52b2tlUGFydGlhbFdyYXBwZXIocGFydGlhbCwgY29udGV4dCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAgIGNvbnRleHQgPSBVdGlscy5leHRlbmQoe30sIGNvbnRleHQsIG9wdGlvbnMuaGFzaCk7XG4gICAgICBpZiAob3B0aW9ucy5pZHMpIHtcbiAgICAgICAgb3B0aW9ucy5pZHNbMF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHBhcnRpYWwgPSBlbnYuVk0ucmVzb2x2ZVBhcnRpYWwuY2FsbCh0aGlzLCBwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKTtcbiAgICB2YXIgcmVzdWx0ID0gZW52LlZNLmludm9rZVBhcnRpYWwuY2FsbCh0aGlzLCBwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKTtcblxuICAgIGlmIChyZXN1bHQgPT0gbnVsbCAmJiBlbnYuY29tcGlsZSkge1xuICAgICAgb3B0aW9ucy5wYXJ0aWFsc1tvcHRpb25zLm5hbWVdID0gZW52LmNvbXBpbGUocGFydGlhbCwgdGVtcGxhdGVTcGVjLmNvbXBpbGVyT3B0aW9ucywgZW52KTtcbiAgICAgIHJlc3VsdCA9IG9wdGlvbnMucGFydGlhbHNbb3B0aW9ucy5uYW1lXShjb250ZXh0LCBvcHRpb25zKTtcbiAgICB9XG4gICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICBpZiAob3B0aW9ucy5pbmRlbnQpIHtcbiAgICAgICAgdmFyIGxpbmVzID0gcmVzdWx0LnNwbGl0KCdcXG4nKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBsaW5lcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBpZiAoIWxpbmVzW2ldICYmIGkgKyAxID09PSBsKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsaW5lc1tpXSA9IG9wdGlvbnMuaW5kZW50ICsgbGluZXNbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ID0gbGluZXMuam9pbignXFxuJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnVGhlIHBhcnRpYWwgJyArIG9wdGlvbnMubmFtZSArICcgY291bGQgbm90IGJlIGNvbXBpbGVkIHdoZW4gcnVubmluZyBpbiBydW50aW1lLW9ubHkgbW9kZScpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEp1c3QgYWRkIHdhdGVyXG4gIHZhciBjb250YWluZXIgPSB7XG4gICAgc3RyaWN0OiBmdW5jdGlvbiBzdHJpY3Qob2JqLCBuYW1lKSB7XG4gICAgICBpZiAoIShuYW1lIGluIG9iaikpIHtcbiAgICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ1wiJyArIG5hbWUgKyAnXCIgbm90IGRlZmluZWQgaW4gJyArIG9iaik7XG4gICAgICB9XG4gICAgICByZXR1cm4gb2JqW25hbWVdO1xuICAgIH0sXG4gICAgbG9va3VwOiBmdW5jdGlvbiBsb29rdXAoZGVwdGhzLCBuYW1lKSB7XG4gICAgICB2YXIgbGVuID0gZGVwdGhzLmxlbmd0aDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKGRlcHRoc1tpXSAmJiBkZXB0aHNbaV1bbmFtZV0gIT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBkZXB0aHNbaV1bbmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGxhbWJkYTogZnVuY3Rpb24gbGFtYmRhKGN1cnJlbnQsIGNvbnRleHQpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgY3VycmVudCA9PT0gJ2Z1bmN0aW9uJyA/IGN1cnJlbnQuY2FsbChjb250ZXh0KSA6IGN1cnJlbnQ7XG4gICAgfSxcblxuICAgIGVzY2FwZUV4cHJlc3Npb246IFV0aWxzLmVzY2FwZUV4cHJlc3Npb24sXG4gICAgaW52b2tlUGFydGlhbDogaW52b2tlUGFydGlhbFdyYXBwZXIsXG5cbiAgICBmbjogZnVuY3Rpb24gZm4oaSkge1xuICAgICAgdmFyIHJldCA9IHRlbXBsYXRlU3BlY1tpXTtcbiAgICAgIHJldC5kZWNvcmF0b3IgPSB0ZW1wbGF0ZVNwZWNbaSArICdfZCddO1xuICAgICAgcmV0dXJuIHJldDtcbiAgICB9LFxuXG4gICAgcHJvZ3JhbXM6IFtdLFxuICAgIHByb2dyYW06IGZ1bmN0aW9uIHByb2dyYW0oaSwgZGF0YSwgZGVjbGFyZWRCbG9ja1BhcmFtcywgYmxvY2tQYXJhbXMsIGRlcHRocykge1xuICAgICAgdmFyIHByb2dyYW1XcmFwcGVyID0gdGhpcy5wcm9ncmFtc1tpXSxcbiAgICAgICAgICBmbiA9IHRoaXMuZm4oaSk7XG4gICAgICBpZiAoZGF0YSB8fCBkZXB0aHMgfHwgYmxvY2tQYXJhbXMgfHwgZGVjbGFyZWRCbG9ja1BhcmFtcykge1xuICAgICAgICBwcm9ncmFtV3JhcHBlciA9IHdyYXBQcm9ncmFtKHRoaXMsIGksIGZuLCBkYXRhLCBkZWNsYXJlZEJsb2NrUGFyYW1zLCBibG9ja1BhcmFtcywgZGVwdGhzKTtcbiAgICAgIH0gZWxzZSBpZiAoIXByb2dyYW1XcmFwcGVyKSB7XG4gICAgICAgIHByb2dyYW1XcmFwcGVyID0gdGhpcy5wcm9ncmFtc1tpXSA9IHdyYXBQcm9ncmFtKHRoaXMsIGksIGZuKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcm9ncmFtV3JhcHBlcjtcbiAgICB9LFxuXG4gICAgZGF0YTogZnVuY3Rpb24gZGF0YSh2YWx1ZSwgZGVwdGgpIHtcbiAgICAgIHdoaWxlICh2YWx1ZSAmJiBkZXB0aC0tKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUuX3BhcmVudDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LFxuICAgIG1lcmdlOiBmdW5jdGlvbiBtZXJnZShwYXJhbSwgY29tbW9uKSB7XG4gICAgICB2YXIgb2JqID0gcGFyYW0gfHwgY29tbW9uO1xuXG4gICAgICBpZiAocGFyYW0gJiYgY29tbW9uICYmIHBhcmFtICE9PSBjb21tb24pIHtcbiAgICAgICAgb2JqID0gVXRpbHMuZXh0ZW5kKHt9LCBjb21tb24sIHBhcmFtKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9iajtcbiAgICB9LFxuXG4gICAgbm9vcDogZW52LlZNLm5vb3AsXG4gICAgY29tcGlsZXJJbmZvOiB0ZW1wbGF0ZVNwZWMuY29tcGlsZXJcbiAgfTtcblxuICBmdW5jdGlvbiByZXQoY29udGV4dCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cbiAgICB2YXIgZGF0YSA9IG9wdGlvbnMuZGF0YTtcblxuICAgIHJldC5fc2V0dXAob3B0aW9ucyk7XG4gICAgaWYgKCFvcHRpb25zLnBhcnRpYWwgJiYgdGVtcGxhdGVTcGVjLnVzZURhdGEpIHtcbiAgICAgIGRhdGEgPSBpbml0RGF0YShjb250ZXh0LCBkYXRhKTtcbiAgICB9XG4gICAgdmFyIGRlcHRocyA9IHVuZGVmaW5lZCxcbiAgICAgICAgYmxvY2tQYXJhbXMgPSB0ZW1wbGF0ZVNwZWMudXNlQmxvY2tQYXJhbXMgPyBbXSA6IHVuZGVmaW5lZDtcbiAgICBpZiAodGVtcGxhdGVTcGVjLnVzZURlcHRocykge1xuICAgICAgaWYgKG9wdGlvbnMuZGVwdGhzKSB7XG4gICAgICAgIGRlcHRocyA9IGNvbnRleHQgIT0gb3B0aW9ucy5kZXB0aHNbMF0gPyBbY29udGV4dF0uY29uY2F0KG9wdGlvbnMuZGVwdGhzKSA6IG9wdGlvbnMuZGVwdGhzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVwdGhzID0gW2NvbnRleHRdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1haW4oY29udGV4dCAvKiwgb3B0aW9ucyovKSB7XG4gICAgICByZXR1cm4gJycgKyB0ZW1wbGF0ZVNwZWMubWFpbihjb250YWluZXIsIGNvbnRleHQsIGNvbnRhaW5lci5oZWxwZXJzLCBjb250YWluZXIucGFydGlhbHMsIGRhdGEsIGJsb2NrUGFyYW1zLCBkZXB0aHMpO1xuICAgIH1cbiAgICBtYWluID0gZXhlY3V0ZURlY29yYXRvcnModGVtcGxhdGVTcGVjLm1haW4sIG1haW4sIGNvbnRhaW5lciwgb3B0aW9ucy5kZXB0aHMgfHwgW10sIGRhdGEsIGJsb2NrUGFyYW1zKTtcbiAgICByZXR1cm4gbWFpbihjb250ZXh0LCBvcHRpb25zKTtcbiAgfVxuICByZXQuaXNUb3AgPSB0cnVlO1xuXG4gIHJldC5fc2V0dXAgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucy5wYXJ0aWFsKSB7XG4gICAgICBjb250YWluZXIuaGVscGVycyA9IGNvbnRhaW5lci5tZXJnZShvcHRpb25zLmhlbHBlcnMsIGVudi5oZWxwZXJzKTtcblxuICAgICAgaWYgKHRlbXBsYXRlU3BlYy51c2VQYXJ0aWFsKSB7XG4gICAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyA9IGNvbnRhaW5lci5tZXJnZShvcHRpb25zLnBhcnRpYWxzLCBlbnYucGFydGlhbHMpO1xuICAgICAgfVxuICAgICAgaWYgKHRlbXBsYXRlU3BlYy51c2VQYXJ0aWFsIHx8IHRlbXBsYXRlU3BlYy51c2VEZWNvcmF0b3JzKSB7XG4gICAgICAgIGNvbnRhaW5lci5kZWNvcmF0b3JzID0gY29udGFpbmVyLm1lcmdlKG9wdGlvbnMuZGVjb3JhdG9ycywgZW52LmRlY29yYXRvcnMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250YWluZXIuaGVscGVycyA9IG9wdGlvbnMuaGVscGVycztcbiAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyA9IG9wdGlvbnMucGFydGlhbHM7XG4gICAgICBjb250YWluZXIuZGVjb3JhdG9ycyA9IG9wdGlvbnMuZGVjb3JhdG9ycztcbiAgICB9XG4gIH07XG5cbiAgcmV0Ll9jaGlsZCA9IGZ1bmN0aW9uIChpLCBkYXRhLCBibG9ja1BhcmFtcywgZGVwdGhzKSB7XG4gICAgaWYgKHRlbXBsYXRlU3BlYy51c2VCbG9ja1BhcmFtcyAmJiAhYmxvY2tQYXJhbXMpIHtcbiAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdtdXN0IHBhc3MgYmxvY2sgcGFyYW1zJyk7XG4gICAgfVxuICAgIGlmICh0ZW1wbGF0ZVNwZWMudXNlRGVwdGhzICYmICFkZXB0aHMpIHtcbiAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdtdXN0IHBhc3MgcGFyZW50IGRlcHRocycpO1xuICAgIH1cblxuICAgIHJldHVybiB3cmFwUHJvZ3JhbShjb250YWluZXIsIGksIHRlbXBsYXRlU3BlY1tpXSwgZGF0YSwgMCwgYmxvY2tQYXJhbXMsIGRlcHRocyk7XG4gIH07XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIHdyYXBQcm9ncmFtKGNvbnRhaW5lciwgaSwgZm4sIGRhdGEsIGRlY2xhcmVkQmxvY2tQYXJhbXMsIGJsb2NrUGFyYW1zLCBkZXB0aHMpIHtcbiAgZnVuY3Rpb24gcHJvZyhjb250ZXh0KSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuICAgIHZhciBjdXJyZW50RGVwdGhzID0gZGVwdGhzO1xuICAgIGlmIChkZXB0aHMgJiYgY29udGV4dCAhPSBkZXB0aHNbMF0pIHtcbiAgICAgIGN1cnJlbnREZXB0aHMgPSBbY29udGV4dF0uY29uY2F0KGRlcHRocyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZuKGNvbnRhaW5lciwgY29udGV4dCwgY29udGFpbmVyLmhlbHBlcnMsIGNvbnRhaW5lci5wYXJ0aWFscywgb3B0aW9ucy5kYXRhIHx8IGRhdGEsIGJsb2NrUGFyYW1zICYmIFtvcHRpb25zLmJsb2NrUGFyYW1zXS5jb25jYXQoYmxvY2tQYXJhbXMpLCBjdXJyZW50RGVwdGhzKTtcbiAgfVxuXG4gIHByb2cgPSBleGVjdXRlRGVjb3JhdG9ycyhmbiwgcHJvZywgY29udGFpbmVyLCBkZXB0aHMsIGRhdGEsIGJsb2NrUGFyYW1zKTtcblxuICBwcm9nLnByb2dyYW0gPSBpO1xuICBwcm9nLmRlcHRoID0gZGVwdGhzID8gZGVwdGhzLmxlbmd0aCA6IDA7XG4gIHByb2cuYmxvY2tQYXJhbXMgPSBkZWNsYXJlZEJsb2NrUGFyYW1zIHx8IDA7XG4gIHJldHVybiBwcm9nO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlUGFydGlhbChwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKSB7XG4gIGlmICghcGFydGlhbCkge1xuICAgIGlmIChvcHRpb25zLm5hbWUgPT09ICdAcGFydGlhbC1ibG9jaycpIHtcbiAgICAgIHZhciBkYXRhID0gb3B0aW9ucy5kYXRhO1xuICAgICAgd2hpbGUgKGRhdGFbJ3BhcnRpYWwtYmxvY2snXSA9PT0gbm9vcCkge1xuICAgICAgICBkYXRhID0gZGF0YS5fcGFyZW50O1xuICAgICAgfVxuICAgICAgcGFydGlhbCA9IGRhdGFbJ3BhcnRpYWwtYmxvY2snXTtcbiAgICAgIGRhdGFbJ3BhcnRpYWwtYmxvY2snXSA9IG5vb3A7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnRpYWwgPSBvcHRpb25zLnBhcnRpYWxzW29wdGlvbnMubmFtZV07XG4gICAgfVxuICB9IGVsc2UgaWYgKCFwYXJ0aWFsLmNhbGwgJiYgIW9wdGlvbnMubmFtZSkge1xuICAgIC8vIFRoaXMgaXMgYSBkeW5hbWljIHBhcnRpYWwgdGhhdCByZXR1cm5lZCBhIHN0cmluZ1xuICAgIG9wdGlvbnMubmFtZSA9IHBhcnRpYWw7XG4gICAgcGFydGlhbCA9IG9wdGlvbnMucGFydGlhbHNbcGFydGlhbF07XG4gIH1cbiAgcmV0dXJuIHBhcnRpYWw7XG59XG5cbmZ1bmN0aW9uIGludm9rZVBhcnRpYWwocGFydGlhbCwgY29udGV4dCwgb3B0aW9ucykge1xuICBvcHRpb25zLnBhcnRpYWwgPSB0cnVlO1xuICBpZiAob3B0aW9ucy5pZHMpIHtcbiAgICBvcHRpb25zLmRhdGEuY29udGV4dFBhdGggPSBvcHRpb25zLmlkc1swXSB8fCBvcHRpb25zLmRhdGEuY29udGV4dFBhdGg7XG4gIH1cblxuICB2YXIgcGFydGlhbEJsb2NrID0gdW5kZWZpbmVkO1xuICBpZiAob3B0aW9ucy5mbiAmJiBvcHRpb25zLmZuICE9PSBub29wKSB7XG4gICAgb3B0aW9ucy5kYXRhID0gX2Jhc2UuY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcbiAgICBwYXJ0aWFsQmxvY2sgPSBvcHRpb25zLmRhdGFbJ3BhcnRpYWwtYmxvY2snXSA9IG9wdGlvbnMuZm47XG5cbiAgICBpZiAocGFydGlhbEJsb2NrLnBhcnRpYWxzKSB7XG4gICAgICBvcHRpb25zLnBhcnRpYWxzID0gVXRpbHMuZXh0ZW5kKHt9LCBvcHRpb25zLnBhcnRpYWxzLCBwYXJ0aWFsQmxvY2sucGFydGlhbHMpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwYXJ0aWFsID09PSB1bmRlZmluZWQgJiYgcGFydGlhbEJsb2NrKSB7XG4gICAgcGFydGlhbCA9IHBhcnRpYWxCbG9jaztcbiAgfVxuXG4gIGlmIChwYXJ0aWFsID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnVGhlIHBhcnRpYWwgJyArIG9wdGlvbnMubmFtZSArICcgY291bGQgbm90IGJlIGZvdW5kJyk7XG4gIH0gZWxzZSBpZiAocGFydGlhbCBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgcmV0dXJuIHBhcnRpYWwoY29udGV4dCwgb3B0aW9ucyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbm9vcCgpIHtcbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBpbml0RGF0YShjb250ZXh0LCBkYXRhKSB7XG4gIGlmICghZGF0YSB8fCAhKCdyb290JyBpbiBkYXRhKSkge1xuICAgIGRhdGEgPSBkYXRhID8gX2Jhc2UuY3JlYXRlRnJhbWUoZGF0YSkgOiB7fTtcbiAgICBkYXRhLnJvb3QgPSBjb250ZXh0O1xuICB9XG4gIHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiBleGVjdXRlRGVjb3JhdG9ycyhmbiwgcHJvZywgY29udGFpbmVyLCBkZXB0aHMsIGRhdGEsIGJsb2NrUGFyYW1zKSB7XG4gIGlmIChmbi5kZWNvcmF0b3IpIHtcbiAgICB2YXIgcHJvcHMgPSB7fTtcbiAgICBwcm9nID0gZm4uZGVjb3JhdG9yKHByb2csIHByb3BzLCBjb250YWluZXIsIGRlcHRocyAmJiBkZXB0aHNbMF0sIGRhdGEsIGJsb2NrUGFyYW1zLCBkZXB0aHMpO1xuICAgIFV0aWxzLmV4dGVuZChwcm9nLCBwcm9wcyk7XG4gIH1cbiAgcmV0dXJuIHByb2c7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1TDJ4cFlpOW9ZVzVrYkdWaVlYSnpMM0oxYm5ScGJXVXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenM3T3pzN096czdjVUpCUVhWQ0xGTkJRVk03TzBsQlFYQkNMRXRCUVVzN08zbENRVU5MTEdGQlFXRTdPenM3YjBKQlF6aENMRkZCUVZFN08wRkJSV3hGTEZOQlFWTXNZVUZCWVN4RFFVRkRMRmxCUVZrc1JVRkJSVHRCUVVNeFF5eE5RVUZOTEdkQ1FVRm5RaXhIUVVGSExGbEJRVmtzU1VGQlNTeFpRVUZaTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJRenROUVVOMlJDeGxRVUZsTERCQ1FVRnZRaXhEUVVGRE96dEJRVVV4UXl4TlFVRkpMR2RDUVVGblFpeExRVUZMTEdWQlFXVXNSVUZCUlR0QlFVTjRReXhSUVVGSkxHZENRVUZuUWl4SFFVRkhMR1ZCUVdVc1JVRkJSVHRCUVVOMFF5eFZRVUZOTEdWQlFXVXNSMEZCUnl4MVFrRkJhVUlzWlVGQlpTeERRVUZETzFWQlEyNUVMR2RDUVVGblFpeEhRVUZITEhWQ1FVRnBRaXhuUWtGQlowSXNRMEZCUXl4RFFVRkRPMEZCUXpWRUxGbEJRVTBzTWtKQlFXTXNlVVpCUVhsR0xFZEJRM1pITEhGRVFVRnhSQ3hIUVVGSExHVkJRV1VzUjBGQlJ5eHRSRUZCYlVRc1IwRkJSeXhuUWtGQlowSXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJRenRMUVVOb1N5eE5RVUZOT3p0QlFVVk1MRmxCUVUwc01rSkJRV01zZDBaQlFYZEdMRWRCUTNSSExHbEVRVUZwUkN4SFFVRkhMRmxCUVZrc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXp0TFFVTnVSanRIUVVOR08wTkJRMFk3TzBGQlJVMHNVMEZCVXl4UlFVRlJMRU5CUVVNc1dVRkJXU3hGUVVGRkxFZEJRVWNzUlVGQlJUczdRVUZGTVVNc1RVRkJTU3hEUVVGRExFZEJRVWNzUlVGQlJUdEJRVU5TTEZWQlFVMHNNa0pCUVdNc2JVTkJRVzFETEVOQlFVTXNRMEZCUXp0SFFVTXhSRHRCUVVORUxFMUJRVWtzUTBGQlF5eFpRVUZaTEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hGUVVGRk8wRkJRM1pETEZWQlFVMHNNa0pCUVdNc01rSkJRVEpDTEVkQlFVY3NUMEZCVHl4WlFVRlpMRU5CUVVNc1EwRkJRenRIUVVONFJUczdRVUZGUkN4alFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUjBGQlJ5eFpRVUZaTEVOQlFVTXNUVUZCVFN4RFFVRkRPenM3TzBGQlNXeEVMRXRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zWVVGQllTeERRVUZETEZsQlFWa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenM3UVVGRk5VTXNWMEZCVXl4dlFrRkJiMElzUTBGQlF5eFBRVUZQTEVWQlFVVXNUMEZCVHl4RlFVRkZMRTlCUVU4c1JVRkJSVHRCUVVOMlJDeFJRVUZKTEU5QlFVOHNRMEZCUXl4SlFVRkpMRVZCUVVVN1FVRkRhRUlzWVVGQlR5eEhRVUZITEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSU3hGUVVGRkxFOUJRVThzUlVGQlJTeFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1FVRkRiRVFzVlVGQlNTeFBRVUZQTEVOQlFVTXNSMEZCUnl4RlFVRkZPMEZCUTJZc1pVRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNN1QwRkRka0k3UzBGRFJqczdRVUZGUkN4WFFVRlBMRWRCUVVjc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eGpRVUZqTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hQUVVGUExFVkJRVVVzVDBGQlR5eEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRPMEZCUTNSRkxGRkJRVWtzVFVGQlRTeEhRVUZITEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1lVRkJZU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVWQlFVVXNUMEZCVHl4RlFVRkZMRTlCUVU4c1JVRkJSU3hQUVVGUExFTkJRVU1zUTBGQlF6czdRVUZGZUVVc1VVRkJTU3hOUVVGTkxFbEJRVWtzU1VGQlNTeEpRVUZKTEVkQlFVY3NRMEZCUXl4UFFVRlBMRVZCUVVVN1FVRkRha01zWVVGQlR5eERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRlBMRVZCUVVVc1dVRkJXU3hEUVVGRExHVkJRV1VzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0QlFVTjZSaXhaUVVGTkxFZEJRVWNzVDBGQlR5eERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zVDBGQlR5eEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRPMHRCUXpORU8wRkJRMFFzVVVGQlNTeE5RVUZOTEVsQlFVa3NTVUZCU1N4RlFVRkZPMEZCUTJ4Q0xGVkJRVWtzVDBGQlR5eERRVUZETEUxQlFVMHNSVUZCUlR0QlFVTnNRaXhaUVVGSkxFdEJRVXNzUjBGQlJ5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8wRkJReTlDTEdGQlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdRVUZETlVNc1kwRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUlVGQlJUdEJRVU0xUWl4clFrRkJUVHRYUVVOUU96dEJRVVZFTEdWQlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhQUVVGUExFTkJRVU1zVFVGQlRTeEhRVUZITEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVOMFF6dEJRVU5FTEdOQlFVMHNSMEZCUnl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzA5QlF6TkNPMEZCUTBRc1lVRkJUeXhOUVVGTkxFTkJRVU03UzBGRFppeE5RVUZOTzBGQlEwd3NXVUZCVFN3eVFrRkJZeXhqUVVGakxFZEJRVWNzVDBGQlR5eERRVUZETEVsQlFVa3NSMEZCUnl3d1JFRkJNRVFzUTBGQlF5eERRVUZETzB0QlEycElPMGRCUTBZN096dEJRVWRFTEUxQlFVa3NVMEZCVXl4SFFVRkhPMEZCUTJRc1ZVRkJUU3hGUVVGRkxHZENRVUZUTEVkQlFVY3NSVUZCUlN4SlFVRkpMRVZCUVVVN1FVRkRNVUlzVlVGQlNTeEZRVUZGTEVsQlFVa3NTVUZCU1N4SFFVRkhMRU5CUVVFc1FVRkJReXhGUVVGRk8wRkJRMnhDTEdOQlFVMHNNa0pCUVdNc1IwRkJSeXhIUVVGSExFbEJRVWtzUjBGQlJ5eHRRa0ZCYlVJc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dFBRVU0zUkR0QlFVTkVMR0ZCUVU4c1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzB0QlEyeENPMEZCUTBRc1ZVRkJUU3hGUVVGRkxHZENRVUZUTEUxQlFVMHNSVUZCUlN4SlFVRkpMRVZCUVVVN1FVRkROMElzVlVGQlRTeEhRVUZITEVkQlFVY3NUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJRenRCUVVNeFFpeFhRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMEZCUXpWQ0xGbEJRVWtzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4SlFVRkpMRVZCUVVVN1FVRkRlRU1zYVVKQlFVOHNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFOQlEzaENPMDlCUTBZN1MwRkRSanRCUVVORUxGVkJRVTBzUlVGQlJTeG5Ra0ZCVXl4UFFVRlBMRVZCUVVVc1QwRkJUeXhGUVVGRk8wRkJRMnBETEdGQlFVOHNUMEZCVHl4UFFVRlBMRXRCUVVzc1ZVRkJWU3hIUVVGSExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1QwRkJUeXhEUVVGRE8wdEJRM2hGT3p0QlFVVkVMRzlDUVVGblFpeEZRVUZGTEV0QlFVc3NRMEZCUXl4blFrRkJaMEk3UVVGRGVFTXNhVUpCUVdFc1JVRkJSU3h2UWtGQmIwSTdPMEZCUlc1RExFMUJRVVVzUlVGQlJTeFpRVUZUTEVOQlFVTXNSVUZCUlR0QlFVTmtMRlZCUVVrc1IwRkJSeXhIUVVGSExGbEJRVmtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTXhRaXhUUVVGSExFTkJRVU1zVTBGQlV5eEhRVUZITEZsQlFWa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU03UVVGRGRrTXNZVUZCVHl4SFFVRkhMRU5CUVVNN1MwRkRXanM3UVVGRlJDeFpRVUZSTEVWQlFVVXNSVUZCUlR0QlFVTmFMRmRCUVU4c1JVRkJSU3hwUWtGQlV5eERRVUZETEVWQlFVVXNTVUZCU1N4RlFVRkZMRzFDUVVGdFFpeEZRVUZGTEZkQlFWY3NSVUZCUlN4TlFVRk5MRVZCUVVVN1FVRkRia1VzVlVGQlNTeGpRVUZqTEVkQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU03VlVGRGFrTXNSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdRVUZEY0VJc1ZVRkJTU3hKUVVGSkxFbEJRVWtzVFVGQlRTeEpRVUZKTEZkQlFWY3NTVUZCU1N4dFFrRkJiVUlzUlVGQlJUdEJRVU40UkN4elFrRkJZeXhIUVVGSExGZEJRVmNzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hKUVVGSkxFVkJRVVVzYlVKQlFXMUNMRVZCUVVVc1YwRkJWeXhGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETzA5QlF6TkdMRTFCUVUwc1NVRkJTU3hEUVVGRExHTkJRV01zUlVGQlJUdEJRVU14UWl4elFrRkJZeXhIUVVGSExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1YwRkJWeXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1QwRkRPVVE3UVVGRFJDeGhRVUZQTEdOQlFXTXNRMEZCUXp0TFFVTjJRanM3UVVGRlJDeFJRVUZKTEVWQlFVVXNZMEZCVXl4TFFVRkxMRVZCUVVVc1MwRkJTeXhGUVVGRk8wRkJRek5DTEdGQlFVOHNTMEZCU3l4SlFVRkpMRXRCUVVzc1JVRkJSU3hGUVVGRk8wRkJRM1pDTEdGQlFVc3NSMEZCUnl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRE8wOUJRM1pDTzBGQlEwUXNZVUZCVHl4TFFVRkxMRU5CUVVNN1MwRkRaRHRCUVVORUxGTkJRVXNzUlVGQlJTeGxRVUZUTEV0QlFVc3NSVUZCUlN4TlFVRk5MRVZCUVVVN1FVRkROMElzVlVGQlNTeEhRVUZITEVkQlFVY3NTMEZCU3l4SlFVRkpMRTFCUVUwc1EwRkJRenM3UVVGRk1VSXNWVUZCU1N4TFFVRkxMRWxCUVVrc1RVRkJUU3hKUVVGTExFdEJRVXNzUzBGQlN5eE5RVUZOTEVGQlFVTXNSVUZCUlR0QlFVTjZReXhYUVVGSExFZEJRVWNzUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4RlFVRkZMRVZCUVVVc1RVRkJUU3hGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzA5QlEzWkRPenRCUVVWRUxHRkJRVThzUjBGQlJ5eERRVUZETzB0QlExbzdPMEZCUlVRc1VVRkJTU3hGUVVGRkxFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1R0QlFVTnFRaXhuUWtGQldTeEZRVUZGTEZsQlFWa3NRMEZCUXl4UlFVRlJPMGRCUTNCRExFTkJRVU03TzBGQlJVWXNWMEZCVXl4SFFVRkhMRU5CUVVNc1QwRkJUeXhGUVVGblFqdFJRVUZrTEU5QlFVOHNlVVJCUVVjc1JVRkJSVHM3UVVGRGFFTXNVVUZCU1N4SlFVRkpMRWRCUVVjc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF6czdRVUZGZUVJc1QwRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0QlFVTndRaXhSUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEU5QlFVOHNTVUZCU1N4WlFVRlpMRU5CUVVNc1QwRkJUeXhGUVVGRk8wRkJRelZETEZWQlFVa3NSMEZCUnl4UlFVRlJMRU5CUVVNc1QwRkJUeXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzB0QlEyaERPMEZCUTBRc1VVRkJTU3hOUVVGTkxGbEJRVUU3VVVGRFRpeFhRVUZYTEVkQlFVY3NXVUZCV1N4RFFVRkRMR05CUVdNc1IwRkJSeXhGUVVGRkxFZEJRVWNzVTBGQlV5eERRVUZETzBGQlF5OUVMRkZCUVVrc1dVRkJXU3hEUVVGRExGTkJRVk1zUlVGQlJUdEJRVU14UWl4VlFVRkpMRTlCUVU4c1EwRkJReXhOUVVGTkxFVkJRVVU3UVVGRGJFSXNZMEZCVFN4SFFVRkhMRTlCUVU4c1NVRkJTU3hQUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhQUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETzA5QlF6TkdMRTFCUVUwN1FVRkRUQ3hqUVVGTkxFZEJRVWNzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0UFFVTndRanRMUVVOR096dEJRVVZFTEdGQlFWTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1owSkJRV1U3UVVGRGJFTXNZVUZCVHl4RlFVRkZMRWRCUVVjc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVWQlFVVXNUMEZCVHl4RlFVRkZMRk5CUVZNc1EwRkJReXhQUVVGUExFVkJRVVVzVTBGQlV5eERRVUZETEZGQlFWRXNSVUZCUlN4SlFVRkpMRVZCUVVVc1YwRkJWeXhGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETzB0QlEzSklPMEZCUTBRc1VVRkJTU3hIUVVGSExHbENRVUZwUWl4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEZOQlFWTXNSVUZCUlN4UFFVRlBMRU5CUVVNc1RVRkJUU3hKUVVGSkxFVkJRVVVzUlVGQlJTeEpRVUZKTEVWQlFVVXNWMEZCVnl4RFFVRkRMRU5CUVVNN1FVRkRkRWNzVjBGQlR5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRE8wZEJReTlDTzBGQlEwUXNTMEZCUnl4RFFVRkRMRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU03TzBGQlJXcENMRXRCUVVjc1EwRkJReXhOUVVGTkxFZEJRVWNzVlVGQlV5eFBRVUZQTEVWQlFVVTdRVUZETjBJc1VVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFBRVUZQTEVWQlFVVTdRVUZEY0VJc1pVRkJVeXhEUVVGRExFOUJRVThzUjBGQlJ5eFRRVUZUTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhQUVVGUExFVkJRVVVzUjBGQlJ5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPenRCUVVWc1JTeFZRVUZKTEZsQlFWa3NRMEZCUXl4VlFVRlZMRVZCUVVVN1FVRkRNMElzYVVKQlFWTXNRMEZCUXl4UlFVRlJMRWRCUVVjc1UwRkJVeXhEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNVVUZCVVN4RlFVRkZMRWRCUVVjc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dFBRVU4wUlR0QlFVTkVMRlZCUVVrc1dVRkJXU3hEUVVGRExGVkJRVlVzU1VGQlNTeFpRVUZaTEVOQlFVTXNZVUZCWVN4RlFVRkZPMEZCUTNwRUxHbENRVUZUTEVOQlFVTXNWVUZCVlN4SFFVRkhMRk5CUVZNc1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEZWQlFWVXNSVUZCUlN4SFFVRkhMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU03VDBGRE5VVTdTMEZEUml4TlFVRk5PMEZCUTB3c1pVRkJVeXhEUVVGRExFOUJRVThzUjBGQlJ5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRPMEZCUTNCRExHVkJRVk1zUTBGQlF5eFJRVUZSTEVkQlFVY3NUMEZCVHl4RFFVRkRMRkZCUVZFc1EwRkJRenRCUVVOMFF5eGxRVUZUTEVOQlFVTXNWVUZCVlN4SFFVRkhMRTlCUVU4c1EwRkJReXhWUVVGVkxFTkJRVU03UzBGRE0wTTdSMEZEUml4RFFVRkRPenRCUVVWR0xFdEJRVWNzUTBGQlF5eE5RVUZOTEVkQlFVY3NWVUZCVXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hGUVVGRkxGZEJRVmNzUlVGQlJTeE5RVUZOTEVWQlFVVTdRVUZEYkVRc1VVRkJTU3haUVVGWkxFTkJRVU1zWTBGQll5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVRkZPMEZCUXk5RExGbEJRVTBzTWtKQlFXTXNkMEpCUVhkQ0xFTkJRVU1zUTBGQlF6dExRVU12UXp0QlFVTkVMRkZCUVVrc1dVRkJXU3hEUVVGRExGTkJRVk1zU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlR0QlFVTnlReXhaUVVGTkxESkNRVUZqTEhsQ1FVRjVRaXhEUVVGRExFTkJRVU03UzBGRGFFUTdPMEZCUlVRc1YwRkJUeXhYUVVGWExFTkJRVU1zVTBGQlV5eEZRVUZGTEVOQlFVTXNSVUZCUlN4WlFVRlpMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeEZRVUZGTEVOQlFVTXNSVUZCUlN4WFFVRlhMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU03UjBGRGFrWXNRMEZCUXp0QlFVTkdMRk5CUVU4c1IwRkJSeXhEUVVGRE8wTkJRMW83TzBGQlJVMHNVMEZCVXl4WFFVRlhMRU5CUVVNc1UwRkJVeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNTVUZCU1N4RlFVRkZMRzFDUVVGdFFpeEZRVUZGTEZkQlFWY3NSVUZCUlN4TlFVRk5MRVZCUVVVN1FVRkROVVlzVjBGQlV5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRm5RanRSUVVGa0xFOUJRVThzZVVSQlFVY3NSVUZCUlRzN1FVRkRha01zVVVGQlNTeGhRVUZoTEVkQlFVY3NUVUZCVFN4RFFVRkRPMEZCUXpOQ0xGRkJRVWtzVFVGQlRTeEpRVUZKTEU5QlFVOHNTVUZCU1N4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVU3UVVGRGJFTXNiVUpCUVdFc1IwRkJSeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRMUVVNeFF6czdRVUZGUkN4WFFVRlBMRVZCUVVVc1EwRkJReXhUUVVGVExFVkJRMllzVDBGQlR5eEZRVU5RTEZOQlFWTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1UwRkJVeXhEUVVGRExGRkJRVkVzUlVGRGNrTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1NVRkJTU3hKUVVGSkxFVkJRM0JDTEZkQlFWY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNWMEZCVnl4RFFVRkRMRVZCUTNoRUxHRkJRV0VzUTBGQlF5eERRVUZETzBkQlEzQkNPenRCUVVWRUxFMUJRVWtzUjBGQlJ5eHBRa0ZCYVVJc1EwRkJReXhGUVVGRkxFVkJRVVVzU1VGQlNTeEZRVUZGTEZOQlFWTXNSVUZCUlN4TlFVRk5MRVZCUVVVc1NVRkJTU3hGUVVGRkxGZEJRVmNzUTBGQlF5eERRVUZET3p0QlFVVjZSU3hOUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEVOQlFVTXNRMEZCUXp0QlFVTnFRaXhOUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEUxQlFVMHNSMEZCUnl4TlFVRk5MRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF6dEJRVU40UXl4TlFVRkpMRU5CUVVNc1YwRkJWeXhIUVVGSExHMUNRVUZ0UWl4SlFVRkpMRU5CUVVNc1EwRkJRenRCUVVNMVF5eFRRVUZQTEVsQlFVa3NRMEZCUXp0RFFVTmlPenRCUVVWTkxGTkJRVk1zWTBGQll5eERRVUZETEU5QlFVOHNSVUZCUlN4UFFVRlBMRVZCUVVVc1QwRkJUeXhGUVVGRk8wRkJRM2hFTEUxQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVN1FVRkRXaXhSUVVGSkxFOUJRVThzUTBGQlF5eEpRVUZKTEV0QlFVc3NaMEpCUVdkQ0xFVkJRVVU3UVVGRGNrTXNWVUZCU1N4SlFVRkpMRWRCUVVjc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF6dEJRVU40UWl4aFFVRlBMRWxCUVVrc1EwRkJReXhsUVVGbExFTkJRVU1zUzBGQlN5eEpRVUZKTEVWQlFVVTdRVUZEY2tNc1dVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTTdUMEZEY2tJN1FVRkRSQ3hoUVVGUExFZEJRVWNzU1VGQlNTeERRVUZETEdWQlFXVXNRMEZCUXl4RFFVRkRPMEZCUTJoRExGVkJRVWtzUTBGQlF5eGxRVUZsTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNN1MwRkRPVUlzVFVGQlRUdEJRVU5NTEdGQlFVOHNSMEZCUnl4UFFVRlBMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0TFFVTXhRenRIUVVOR0xFMUJRVTBzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeEZRVUZGT3p0QlFVVjZReXhYUVVGUExFTkJRVU1zU1VGQlNTeEhRVUZITEU5QlFVOHNRMEZCUXp0QlFVTjJRaXhYUVVGUExFZEJRVWNzVDBGQlR5eERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRIUVVOeVF6dEJRVU5FTEZOQlFVOHNUMEZCVHl4RFFVRkRPME5CUTJoQ096dEJRVVZOTEZOQlFWTXNZVUZCWVN4RFFVRkRMRTlCUVU4c1JVRkJSU3hQUVVGUExFVkJRVVVzVDBGQlR5eEZRVUZGTzBGQlEzWkVMRk5CUVU4c1EwRkJReXhQUVVGUExFZEJRVWNzU1VGQlNTeERRVUZETzBGQlEzWkNMRTFCUVVrc1QwRkJUeXhEUVVGRExFZEJRVWNzUlVGQlJUdEJRVU5tTEZkQlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhIUVVGSExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTTdSMEZEZGtVN08wRkJSVVFzVFVGQlNTeFpRVUZaTEZsQlFVRXNRMEZCUXp0QlFVTnFRaXhOUVVGSkxFOUJRVThzUTBGQlF5eEZRVUZGTEVsQlFVa3NUMEZCVHl4RFFVRkRMRVZCUVVVc1MwRkJTeXhKUVVGSkxFVkJRVVU3UVVGRGNrTXNWMEZCVHl4RFFVRkRMRWxCUVVrc1IwRkJSeXhyUWtGQldTeFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1FVRkRla01zWjBKQlFWa3NSMEZCUnl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExHVkJRV1VzUTBGQlF5eEhRVUZITEU5QlFVOHNRMEZCUXl4RlFVRkZMRU5CUVVNN08wRkJSVEZFTEZGQlFVa3NXVUZCV1N4RFFVRkRMRkZCUVZFc1JVRkJSVHRCUVVONlFpeGhRVUZQTEVOQlFVTXNVVUZCVVN4SFFVRkhMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGQlJTeEZRVUZGTEU5QlFVOHNRMEZCUXl4UlFVRlJMRVZCUVVVc1dVRkJXU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzB0QlF6bEZPMGRCUTBZN08wRkJSVVFzVFVGQlNTeFBRVUZQTEV0QlFVc3NVMEZCVXl4SlFVRkpMRmxCUVZrc1JVRkJSVHRCUVVONlF5eFhRVUZQTEVkQlFVY3NXVUZCV1N4RFFVRkRPMGRCUTNoQ096dEJRVVZFTEUxQlFVa3NUMEZCVHl4TFFVRkxMRk5CUVZNc1JVRkJSVHRCUVVONlFpeFZRVUZOTERKQ1FVRmpMR05CUVdNc1IwRkJSeXhQUVVGUExFTkJRVU1zU1VGQlNTeEhRVUZITEhGQ1FVRnhRaXhEUVVGRExFTkJRVU03UjBGRE5VVXNUVUZCVFN4SlFVRkpMRTlCUVU4c1dVRkJXU3hSUVVGUkxFVkJRVVU3UVVGRGRFTXNWMEZCVHl4UFFVRlBMRU5CUVVNc1QwRkJUeXhGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzBkQlEyeERPME5CUTBZN08wRkJSVTBzVTBGQlV5eEpRVUZKTEVkQlFVYzdRVUZCUlN4VFFVRlBMRVZCUVVVc1EwRkJRenREUVVGRk96dEJRVVZ5UXl4VFFVRlRMRkZCUVZFc1EwRkJReXhQUVVGUExFVkJRVVVzU1VGQlNTeEZRVUZGTzBGQlF5OUNMRTFCUVVrc1EwRkJReXhKUVVGSkxFbEJRVWtzUlVGQlJTeE5RVUZOTEVsQlFVa3NTVUZCU1N4RFFVRkJMRUZCUVVNc1JVRkJSVHRCUVVNNVFpeFJRVUZKTEVkQlFVY3NTVUZCU1N4SFFVRkhMR3RDUVVGWkxFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0QlFVTnlReXhSUVVGSkxFTkJRVU1zU1VGQlNTeEhRVUZITEU5QlFVOHNRMEZCUXp0SFFVTnlRanRCUVVORUxGTkJRVThzU1VGQlNTeERRVUZETzBOQlEySTdPMEZCUlVRc1UwRkJVeXhwUWtGQmFVSXNRMEZCUXl4RlFVRkZMRVZCUVVVc1NVRkJTU3hGUVVGRkxGTkJRVk1zUlVGQlJTeE5RVUZOTEVWQlFVVXNTVUZCU1N4RlFVRkZMRmRCUVZjc1JVRkJSVHRCUVVONlJTeE5RVUZKTEVWQlFVVXNRMEZCUXl4VFFVRlRMRVZCUVVVN1FVRkRhRUlzVVVGQlNTeExRVUZMTEVkQlFVY3NSVUZCUlN4RFFVRkRPMEZCUTJZc1VVRkJTU3hIUVVGSExFVkJRVVVzUTBGQlF5eFRRVUZUTEVOQlFVTXNTVUZCU1N4RlFVRkZMRXRCUVVzc1JVRkJSU3hUUVVGVExFVkJRVVVzVFVGQlRTeEpRVUZKTEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFVkJRVVVzVjBGQlZ5eEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMEZCUXpWR0xGTkJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wZEJRek5DTzBGQlEwUXNVMEZCVHl4SlFVRkpMRU5CUVVNN1EwRkRZaUlzSW1acGJHVWlPaUp5ZFc1MGFXMWxMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUNvZ1lYTWdWWFJwYkhNZ1puSnZiU0FuTGk5MWRHbHNjeWM3WEc1cGJYQnZjblFnUlhoalpYQjBhVzl1SUdaeWIyMGdKeTR2WlhoalpYQjBhVzl1Snp0Y2JtbHRjRzl5ZENCN0lFTlBUVkJKVEVWU1gxSkZWa2xUU1U5T0xDQlNSVlpKVTBsUFRsOURTRUZPUjBWVExDQmpjbVZoZEdWR2NtRnRaU0I5SUdaeWIyMGdKeTR2WW1GelpTYzdYRzVjYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUJqYUdWamExSmxkbWx6YVc5dUtHTnZiWEJwYkdWeVNXNW1ieWtnZTF4dUlDQmpiMjV6ZENCamIyMXdhV3hsY2xKbGRtbHphVzl1SUQwZ1kyOXRjR2xzWlhKSmJtWnZJQ1ltSUdOdmJYQnBiR1Z5U1c1bWIxc3dYU0I4ZkNBeExGeHVJQ0FnSUNBZ0lDQmpkWEp5Wlc1MFVtVjJhWE5wYjI0Z1BTQkRUMDFRU1V4RlVsOVNSVlpKVTBsUFRqdGNibHh1SUNCcFppQW9ZMjl0Y0dsc1pYSlNaWFpwYzJsdmJpQWhQVDBnWTNWeWNtVnVkRkpsZG1semFXOXVLU0I3WEc0Z0lDQWdhV1lnS0dOdmJYQnBiR1Z5VW1WMmFYTnBiMjRnUENCamRYSnlaVzUwVW1WMmFYTnBiMjRwSUh0Y2JpQWdJQ0FnSUdOdmJuTjBJSEoxYm5ScGJXVldaWEp6YVc5dWN5QTlJRkpGVmtsVFNVOU9YME5JUVU1SFJWTmJZM1Z5Y21WdWRGSmxkbWx6YVc5dVhTeGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJYQnBiR1Z5Vm1WeWMybHZibk1nUFNCU1JWWkpVMGxQVGw5RFNFRk9SMFZUVzJOdmJYQnBiR1Z5VW1WMmFYTnBiMjVkTzF4dUlDQWdJQ0FnZEdoeWIzY2dibVYzSUVWNFkyVndkR2x2YmlnblZHVnRjR3hoZEdVZ2QyRnpJSEJ5WldOdmJYQnBiR1ZrSUhkcGRHZ2dZVzRnYjJ4a1pYSWdkbVZ5YzJsdmJpQnZaaUJJWVc1a2JHVmlZWEp6SUhSb1lXNGdkR2hsSUdOMWNuSmxiblFnY25WdWRHbHRaUzRnSnlBclhHNGdJQ0FnSUNBZ0lDQWdJQ0FuVUd4bFlYTmxJSFZ3WkdGMFpTQjViM1Z5SUhCeVpXTnZiWEJwYkdWeUlIUnZJR0VnYm1WM1pYSWdkbVZ5YzJsdmJpQW9KeUFySUhKMWJuUnBiV1ZXWlhKemFXOXVjeUFySUNjcElHOXlJR1J2ZDI1bmNtRmtaU0I1YjNWeUlISjFiblJwYldVZ2RHOGdZVzRnYjJ4a1pYSWdkbVZ5YzJsdmJpQW9KeUFySUdOdmJYQnBiR1Z5Vm1WeWMybHZibk1nS3lBbktTNG5LVHRjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0x5OGdWWE5sSUhSb1pTQmxiV0psWkdSbFpDQjJaWEp6YVc5dUlHbHVabThnYzJsdVkyVWdkR2hsSUhKMWJuUnBiV1VnWkc5bGMyNG5kQ0JyYm05M0lHRmliM1YwSUhSb2FYTWdjbVYyYVhOcGIyNGdlV1YwWEc0Z0lDQWdJQ0IwYUhKdmR5QnVaWGNnUlhoalpYQjBhVzl1S0NkVVpXMXdiR0YwWlNCM1lYTWdjSEpsWTI5dGNHbHNaV1FnZDJsMGFDQmhJRzVsZDJWeUlIWmxjbk5wYjI0Z2IyWWdTR0Z1Wkd4bFltRnljeUIwYUdGdUlIUm9aU0JqZFhKeVpXNTBJSEoxYm5ScGJXVXVJQ2NnSzF4dUlDQWdJQ0FnSUNBZ0lDQWdKMUJzWldGelpTQjFjR1JoZEdVZ2VXOTFjaUJ5ZFc1MGFXMWxJSFJ2SUdFZ2JtVjNaWElnZG1WeWMybHZiaUFvSnlBcklHTnZiWEJwYkdWeVNXNW1iMXN4WFNBcklDY3BMaWNwTzF4dUlDQWdJSDFjYmlBZ2ZWeHVmVnh1WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnZEdWdGNHeGhkR1VvZEdWdGNHeGhkR1ZUY0dWakxDQmxibllwSUh0Y2JpQWdMeW9nYVhOMFlXNWlkV3dnYVdkdWIzSmxJRzVsZUhRZ0tpOWNiaUFnYVdZZ0tDRmxibllwSUh0Y2JpQWdJQ0IwYUhKdmR5QnVaWGNnUlhoalpYQjBhVzl1S0NkT2J5QmxiblpwY205dWJXVnVkQ0J3WVhOelpXUWdkRzhnZEdWdGNHeGhkR1VuS1R0Y2JpQWdmVnh1SUNCcFppQW9JWFJsYlhCc1lYUmxVM0JsWXlCOGZDQWhkR1Z0Y0d4aGRHVlRjR1ZqTG0xaGFXNHBJSHRjYmlBZ0lDQjBhSEp2ZHlCdVpYY2dSWGhqWlhCMGFXOXVLQ2RWYm10dWIzZHVJSFJsYlhCc1lYUmxJRzlpYW1WamREb2dKeUFySUhSNWNHVnZaaUIwWlcxd2JHRjBaVk53WldNcE8xeHVJQ0I5WEc1Y2JpQWdkR1Z0Y0d4aGRHVlRjR1ZqTG0xaGFXNHVaR1ZqYjNKaGRHOXlJRDBnZEdWdGNHeGhkR1ZUY0dWakxtMWhhVzVmWkR0Y2JseHVJQ0F2THlCT2IzUmxPaUJWYzJsdVp5Qmxibll1VmswZ2NtVm1aWEpsYm1ObGN5QnlZWFJvWlhJZ2RHaGhiaUJzYjJOaGJDQjJZWElnY21WbVpYSmxibU5sY3lCMGFISnZkV2RvYjNWMElIUm9hWE1nYzJWamRHbHZiaUIwYnlCaGJHeHZkMXh1SUNBdkx5Qm1iM0lnWlhoMFpYSnVZV3dnZFhObGNuTWdkRzhnYjNabGNuSnBaR1VnZEdobGMyVWdZWE1nY0hOMVpXUnZMWE4xY0hCdmNuUmxaQ0JCVUVsekxseHVJQ0JsYm5ZdVZrMHVZMmhsWTJ0U1pYWnBjMmx2YmloMFpXMXdiR0YwWlZOd1pXTXVZMjl0Y0dsc1pYSXBPMXh1WEc0Z0lHWjFibU4wYVc5dUlHbHVkbTlyWlZCaGNuUnBZV3hYY21Gd2NHVnlLSEJoY25ScFlXd3NJR052Ym5SbGVIUXNJRzl3ZEdsdmJuTXBJSHRjYmlBZ0lDQnBaaUFvYjNCMGFXOXVjeTVvWVhOb0tTQjdYRzRnSUNBZ0lDQmpiMjUwWlhoMElEMGdWWFJwYkhNdVpYaDBaVzVrS0h0OUxDQmpiMjUwWlhoMExDQnZjSFJwYjI1ekxtaGhjMmdwTzF4dUlDQWdJQ0FnYVdZZ0tHOXdkR2x2Ym5NdWFXUnpLU0I3WEc0Z0lDQWdJQ0FnSUc5d2RHbHZibk11YVdSeld6QmRJRDBnZEhKMVpUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCd1lYSjBhV0ZzSUQwZ1pXNTJMbFpOTG5KbGMyOXNkbVZRWVhKMGFXRnNMbU5oYkd3b2RHaHBjeXdnY0dGeWRHbGhiQ3dnWTI5dWRHVjRkQ3dnYjNCMGFXOXVjeWs3WEc0Z0lDQWdiR1YwSUhKbGMzVnNkQ0E5SUdWdWRpNVdUUzVwYm5admEyVlFZWEowYVdGc0xtTmhiR3dvZEdocGN5d2djR0Z5ZEdsaGJDd2dZMjl1ZEdWNGRDd2diM0IwYVc5dWN5azdYRzVjYmlBZ0lDQnBaaUFvY21WemRXeDBJRDA5SUc1MWJHd2dKaVlnWlc1MkxtTnZiWEJwYkdVcElIdGNiaUFnSUNBZ0lHOXdkR2x2Ym5NdWNHRnlkR2xoYkhOYmIzQjBhVzl1Y3k1dVlXMWxYU0E5SUdWdWRpNWpiMjF3YVd4bEtIQmhjblJwWVd3c0lIUmxiWEJzWVhSbFUzQmxZeTVqYjIxd2FXeGxjazl3ZEdsdmJuTXNJR1Z1ZGlrN1hHNGdJQ0FnSUNCeVpYTjFiSFFnUFNCdmNIUnBiMjV6TG5CaGNuUnBZV3h6VzI5d2RHbHZibk11Ym1GdFpWMG9ZMjl1ZEdWNGRDd2diM0IwYVc5dWN5azdYRzRnSUNBZ2ZWeHVJQ0FnSUdsbUlDaHlaWE4xYkhRZ0lUMGdiblZzYkNrZ2UxeHVJQ0FnSUNBZ2FXWWdLRzl3ZEdsdmJuTXVhVzVrWlc1MEtTQjdYRzRnSUNBZ0lDQWdJR3hsZENCc2FXNWxjeUE5SUhKbGMzVnNkQzV6Y0d4cGRDZ25YRnh1SnlrN1hHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3TENCc0lEMGdiR2x1WlhNdWJHVnVaM1JvT3lCcElEd2diRHNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJQ0FnYVdZZ0tDRnNhVzVsYzF0cFhTQW1KaUJwSUNzZ01TQTlQVDBnYkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWW5KbFlXczdYRzRnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdiR2x1WlhOYmFWMGdQU0J2Y0hScGIyNXpMbWx1WkdWdWRDQXJJR3hwYm1WelcybGRPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUhKbGMzVnNkQ0E5SUd4cGJtVnpMbXB2YVc0b0oxeGNiaWNwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJQ0FnY21WMGRYSnVJSEpsYzNWc2REdGNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnZEdoeWIzY2dibVYzSUVWNFkyVndkR2x2YmlnblZHaGxJSEJoY25ScFlXd2dKeUFySUc5d2RHbHZibk11Ym1GdFpTQXJJQ2NnWTI5MWJHUWdibTkwSUdKbElHTnZiWEJwYkdWa0lIZG9aVzRnY25WdWJtbHVaeUJwYmlCeWRXNTBhVzFsTFc5dWJIa2diVzlrWlNjcE8xeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lDOHZJRXAxYzNRZ1lXUmtJSGRoZEdWeVhHNGdJR3hsZENCamIyNTBZV2x1WlhJZ1BTQjdYRzRnSUNBZ2MzUnlhV04wT2lCbWRXNWpkR2x2Ymlodlltb3NJRzVoYldVcElIdGNiaUFnSUNBZ0lHbG1JQ2doS0c1aGJXVWdhVzRnYjJKcUtTa2dlMXh1SUNBZ0lDQWdJQ0IwYUhKdmR5QnVaWGNnUlhoalpYQjBhVzl1S0NkY0lpY2dLeUJ1WVcxbElDc2dKMXdpSUc1dmRDQmtaV1pwYm1Wa0lHbHVJQ2NnS3lCdlltb3BPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lDQWdjbVYwZFhKdUlHOWlhbHR1WVcxbFhUdGNiaUFnSUNCOUxGeHVJQ0FnSUd4dmIydDFjRG9nWm5WdVkzUnBiMjRvWkdWd2RHaHpMQ0J1WVcxbEtTQjdYRzRnSUNBZ0lDQmpiMjV6ZENCc1pXNGdQU0JrWlhCMGFITXViR1Z1WjNSb08xeHVJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQnNaVzQ3SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb1pHVndkR2h6VzJsZElDWW1JR1JsY0hSb2MxdHBYVnR1WVcxbFhTQWhQU0J1ZFd4c0tTQjdYRzRnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR1JsY0hSb2MxdHBYVnR1WVcxbFhUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdmVnh1SUNBZ0lIMHNYRzRnSUNBZ2JHRnRZbVJoT2lCbWRXNWpkR2x2YmloamRYSnlaVzUwTENCamIyNTBaWGgwS1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnZEhsd1pXOW1JR04xY25KbGJuUWdQVDA5SUNkbWRXNWpkR2x2YmljZ1B5QmpkWEp5Wlc1MExtTmhiR3dvWTI5dWRHVjRkQ2tnT2lCamRYSnlaVzUwTzF4dUlDQWdJSDBzWEc1Y2JpQWdJQ0JsYzJOaGNHVkZlSEJ5WlhOemFXOXVPaUJWZEdsc2N5NWxjMk5oY0dWRmVIQnlaWE56YVc5dUxGeHVJQ0FnSUdsdWRtOXJaVkJoY25ScFlXdzZJR2x1ZG05clpWQmhjblJwWVd4WGNtRndjR1Z5TEZ4dVhHNGdJQ0FnWm00NklHWjFibU4wYVc5dUtHa3BJSHRjYmlBZ0lDQWdJR3hsZENCeVpYUWdQU0IwWlcxd2JHRjBaVk53WldOYmFWMDdYRzRnSUNBZ0lDQnlaWFF1WkdWamIzSmhkRzl5SUQwZ2RHVnRjR3hoZEdWVGNHVmpXMmtnS3lBblgyUW5YVHRjYmlBZ0lDQWdJSEpsZEhWeWJpQnlaWFE3WEc0Z0lDQWdmU3hjYmx4dUlDQWdJSEJ5YjJkeVlXMXpPaUJiWFN4Y2JpQWdJQ0J3Y205bmNtRnRPaUJtZFc1amRHbHZiaWhwTENCa1lYUmhMQ0JrWldOc1lYSmxaRUpzYjJOclVHRnlZVzF6TENCaWJHOWphMUJoY21GdGN5d2daR1Z3ZEdoektTQjdYRzRnSUNBZ0lDQnNaWFFnY0hKdlozSmhiVmR5WVhCd1pYSWdQU0IwYUdsekxuQnliMmR5WVcxelcybGRMRnh1SUNBZ0lDQWdJQ0FnSUdadUlEMGdkR2hwY3k1bWJpaHBLVHRjYmlBZ0lDQWdJR2xtSUNoa1lYUmhJSHg4SUdSbGNIUm9jeUI4ZkNCaWJHOWphMUJoY21GdGN5QjhmQ0JrWldOc1lYSmxaRUpzYjJOclVHRnlZVzF6S1NCN1hHNGdJQ0FnSUNBZ0lIQnliMmR5WVcxWGNtRndjR1Z5SUQwZ2QzSmhjRkJ5YjJkeVlXMG9kR2hwY3l3Z2FTd2dabTRzSUdSaGRHRXNJR1JsWTJ4aGNtVmtRbXh2WTJ0UVlYSmhiWE1zSUdKc2IyTnJVR0Z5WVcxekxDQmtaWEIwYUhNcE8xeHVJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDZ2hjSEp2WjNKaGJWZHlZWEJ3WlhJcElIdGNiaUFnSUNBZ0lDQWdjSEp2WjNKaGJWZHlZWEJ3WlhJZ1BTQjBhR2x6TG5CeWIyZHlZVzF6VzJsZElEMGdkM0poY0ZCeWIyZHlZVzBvZEdocGN5d2dhU3dnWm00cE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2NtVjBkWEp1SUhCeWIyZHlZVzFYY21Gd2NHVnlPMXh1SUNBZ0lIMHNYRzVjYmlBZ0lDQmtZWFJoT2lCbWRXNWpkR2x2YmloMllXeDFaU3dnWkdWd2RHZ3BJSHRjYmlBZ0lDQWdJSGRvYVd4bElDaDJZV3gxWlNBbUppQmtaWEIwYUMwdEtTQjdYRzRnSUNBZ0lDQWdJSFpoYkhWbElEMGdkbUZzZFdVdVgzQmhjbVZ1ZER0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0FnSUhKbGRIVnliaUIyWVd4MVpUdGNiaUFnSUNCOUxGeHVJQ0FnSUcxbGNtZGxPaUJtZFc1amRHbHZiaWh3WVhKaGJTd2dZMjl0Ylc5dUtTQjdYRzRnSUNBZ0lDQnNaWFFnYjJKcUlEMGdjR0Z5WVcwZ2ZId2dZMjl0Ylc5dU8xeHVYRzRnSUNBZ0lDQnBaaUFvY0dGeVlXMGdKaVlnWTI5dGJXOXVJQ1ltSUNod1lYSmhiU0FoUFQwZ1kyOXRiVzl1S1NrZ2UxeHVJQ0FnSUNBZ0lDQnZZbW9nUFNCVmRHbHNjeTVsZUhSbGJtUW9lMzBzSUdOdmJXMXZiaXdnY0dGeVlXMHBPMXh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0J5WlhSMWNtNGdiMkpxTzF4dUlDQWdJSDBzWEc1Y2JpQWdJQ0J1YjI5d09pQmxibll1VmswdWJtOXZjQ3hjYmlBZ0lDQmpiMjF3YVd4bGNrbHVabTg2SUhSbGJYQnNZWFJsVTNCbFl5NWpiMjF3YVd4bGNseHVJQ0I5TzF4dVhHNGdJR1oxYm1OMGFXOXVJSEpsZENoamIyNTBaWGgwTENCdmNIUnBiMjV6SUQwZ2UzMHBJSHRjYmlBZ0lDQnNaWFFnWkdGMFlTQTlJRzl3ZEdsdmJuTXVaR0YwWVR0Y2JseHVJQ0FnSUhKbGRDNWZjMlYwZFhBb2IzQjBhVzl1Y3lrN1hHNGdJQ0FnYVdZZ0tDRnZjSFJwYjI1ekxuQmhjblJwWVd3Z0ppWWdkR1Z0Y0d4aGRHVlRjR1ZqTG5WelpVUmhkR0VwSUh0Y2JpQWdJQ0FnSUdSaGRHRWdQU0JwYm1sMFJHRjBZU2hqYjI1MFpYaDBMQ0JrWVhSaEtUdGNiaUFnSUNCOVhHNGdJQ0FnYkdWMElHUmxjSFJvY3l4Y2JpQWdJQ0FnSUNBZ1lteHZZMnRRWVhKaGJYTWdQU0IwWlcxd2JHRjBaVk53WldNdWRYTmxRbXh2WTJ0UVlYSmhiWE1nUHlCYlhTQTZJSFZ1WkdWbWFXNWxaRHRjYmlBZ0lDQnBaaUFvZEdWdGNHeGhkR1ZUY0dWakxuVnpaVVJsY0hSb2N5a2dlMXh1SUNBZ0lDQWdhV1lnS0c5d2RHbHZibk11WkdWd2RHaHpLU0I3WEc0Z0lDQWdJQ0FnSUdSbGNIUm9jeUE5SUdOdmJuUmxlSFFnSVQwZ2IzQjBhVzl1Y3k1a1pYQjBhSE5iTUYwZ1B5QmJZMjl1ZEdWNGRGMHVZMjl1WTJGMEtHOXdkR2x2Ym5NdVpHVndkR2h6S1NBNklHOXdkR2x2Ym5NdVpHVndkR2h6TzF4dUlDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnWkdWd2RHaHpJRDBnVzJOdmJuUmxlSFJkTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJR1oxYm1OMGFXOXVJRzFoYVc0b1kyOXVkR1Y0ZEM4cUxDQnZjSFJwYjI1ektpOHBJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQW5KeUFySUhSbGJYQnNZWFJsVTNCbFl5NXRZV2x1S0dOdmJuUmhhVzVsY2l3Z1kyOXVkR1Y0ZEN3Z1kyOXVkR0ZwYm1WeUxtaGxiSEJsY25Nc0lHTnZiblJoYVc1bGNpNXdZWEowYVdGc2N5d2daR0YwWVN3Z1lteHZZMnRRWVhKaGJYTXNJR1JsY0hSb2N5azdYRzRnSUNBZ2ZWeHVJQ0FnSUcxaGFXNGdQU0JsZUdWamRYUmxSR1ZqYjNKaGRHOXljeWgwWlcxd2JHRjBaVk53WldNdWJXRnBiaXdnYldGcGJpd2dZMjl1ZEdGcGJtVnlMQ0J2Y0hScGIyNXpMbVJsY0hSb2N5QjhmQ0JiWFN3Z1pHRjBZU3dnWW14dlkydFFZWEpoYlhNcE8xeHVJQ0FnSUhKbGRIVnliaUJ0WVdsdUtHTnZiblJsZUhRc0lHOXdkR2x2Ym5NcE8xeHVJQ0I5WEc0Z0lISmxkQzVwYzFSdmNDQTlJSFJ5ZFdVN1hHNWNiaUFnY21WMExsOXpaWFIxY0NBOUlHWjFibU4wYVc5dUtHOXdkR2x2Ym5NcElIdGNiaUFnSUNCcFppQW9JVzl3ZEdsdmJuTXVjR0Z5ZEdsaGJDa2dlMXh1SUNBZ0lDQWdZMjl1ZEdGcGJtVnlMbWhsYkhCbGNuTWdQU0JqYjI1MFlXbHVaWEl1YldWeVoyVW9iM0IwYVc5dWN5NW9aV3h3WlhKekxDQmxibll1YUdWc2NHVnljeWs3WEc1Y2JpQWdJQ0FnSUdsbUlDaDBaVzF3YkdGMFpWTndaV011ZFhObFVHRnlkR2xoYkNrZ2UxeHVJQ0FnSUNBZ0lDQmpiMjUwWVdsdVpYSXVjR0Z5ZEdsaGJITWdQU0JqYjI1MFlXbHVaWEl1YldWeVoyVW9iM0IwYVc5dWN5NXdZWEowYVdGc2N5d2daVzUyTG5CaGNuUnBZV3h6S1R0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0FnSUdsbUlDaDBaVzF3YkdGMFpWTndaV011ZFhObFVHRnlkR2xoYkNCOGZDQjBaVzF3YkdGMFpWTndaV011ZFhObFJHVmpiM0poZEc5eWN5a2dlMXh1SUNBZ0lDQWdJQ0JqYjI1MFlXbHVaWEl1WkdWamIzSmhkRzl5Y3lBOUlHTnZiblJoYVc1bGNpNXRaWEpuWlNodmNIUnBiMjV6TG1SbFkyOXlZWFJ2Y25Nc0lHVnVkaTVrWldOdmNtRjBiM0p6S1R0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdZMjl1ZEdGcGJtVnlMbWhsYkhCbGNuTWdQU0J2Y0hScGIyNXpMbWhsYkhCbGNuTTdYRzRnSUNBZ0lDQmpiMjUwWVdsdVpYSXVjR0Z5ZEdsaGJITWdQU0J2Y0hScGIyNXpMbkJoY25ScFlXeHpPMXh1SUNBZ0lDQWdZMjl1ZEdGcGJtVnlMbVJsWTI5eVlYUnZjbk1nUFNCdmNIUnBiMjV6TG1SbFkyOXlZWFJ2Y25NN1hHNGdJQ0FnZlZ4dUlDQjlPMXh1WEc0Z0lISmxkQzVmWTJocGJHUWdQU0JtZFc1amRHbHZiaWhwTENCa1lYUmhMQ0JpYkc5amExQmhjbUZ0Y3l3Z1pHVndkR2h6S1NCN1hHNGdJQ0FnYVdZZ0tIUmxiWEJzWVhSbFUzQmxZeTUxYzJWQ2JHOWphMUJoY21GdGN5QW1KaUFoWW14dlkydFFZWEpoYlhNcElIdGNiaUFnSUNBZ0lIUm9jbTkzSUc1bGR5QkZlR05sY0hScGIyNG9KMjExYzNRZ2NHRnpjeUJpYkc5amF5QndZWEpoYlhNbktUdGNiaUFnSUNCOVhHNGdJQ0FnYVdZZ0tIUmxiWEJzWVhSbFUzQmxZeTUxYzJWRVpYQjBhSE1nSmlZZ0lXUmxjSFJvY3lrZ2UxeHVJQ0FnSUNBZ2RHaHliM2NnYm1WM0lFVjRZMlZ3ZEdsdmJpZ25iWFZ6ZENCd1lYTnpJSEJoY21WdWRDQmtaWEIwYUhNbktUdGNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnZDNKaGNGQnliMmR5WVcwb1kyOXVkR0ZwYm1WeUxDQnBMQ0IwWlcxd2JHRjBaVk53WldOYmFWMHNJR1JoZEdFc0lEQXNJR0pzYjJOclVHRnlZVzF6TENCa1pYQjBhSE1wTzF4dUlDQjlPMXh1SUNCeVpYUjFjbTRnY21WME8xeHVmVnh1WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnZDNKaGNGQnliMmR5WVcwb1kyOXVkR0ZwYm1WeUxDQnBMQ0JtYml3Z1pHRjBZU3dnWkdWamJHRnlaV1JDYkc5amExQmhjbUZ0Y3l3Z1lteHZZMnRRWVhKaGJYTXNJR1JsY0hSb2N5a2dlMXh1SUNCbWRXNWpkR2x2YmlCd2NtOW5LR052Ym5SbGVIUXNJRzl3ZEdsdmJuTWdQU0I3ZlNrZ2UxeHVJQ0FnSUd4bGRDQmpkWEp5Wlc1MFJHVndkR2h6SUQwZ1pHVndkR2h6TzF4dUlDQWdJR2xtSUNoa1pYQjBhSE1nSmlZZ1kyOXVkR1Y0ZENBaFBTQmtaWEIwYUhOYk1GMHBJSHRjYmlBZ0lDQWdJR04xY25KbGJuUkVaWEIwYUhNZ1BTQmJZMjl1ZEdWNGRGMHVZMjl1WTJGMEtHUmxjSFJvY3lrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJR1p1S0dOdmJuUmhhVzVsY2l4Y2JpQWdJQ0FnSUNBZ1kyOXVkR1Y0ZEN4Y2JpQWdJQ0FnSUNBZ1kyOXVkR0ZwYm1WeUxtaGxiSEJsY25Nc0lHTnZiblJoYVc1bGNpNXdZWEowYVdGc2N5eGNiaUFnSUNBZ0lDQWdiM0IwYVc5dWN5NWtZWFJoSUh4OElHUmhkR0VzWEc0Z0lDQWdJQ0FnSUdKc2IyTnJVR0Z5WVcxeklDWW1JRnR2Y0hScGIyNXpMbUpzYjJOclVHRnlZVzF6WFM1amIyNWpZWFFvWW14dlkydFFZWEpoYlhNcExGeHVJQ0FnSUNBZ0lDQmpkWEp5Wlc1MFJHVndkR2h6S1R0Y2JpQWdmVnh1WEc0Z0lIQnliMmNnUFNCbGVHVmpkWFJsUkdWamIzSmhkRzl5Y3lobWJpd2djSEp2Wnl3Z1kyOXVkR0ZwYm1WeUxDQmtaWEIwYUhNc0lHUmhkR0VzSUdKc2IyTnJVR0Z5WVcxektUdGNibHh1SUNCd2NtOW5MbkJ5YjJkeVlXMGdQU0JwTzF4dUlDQndjbTluTG1SbGNIUm9JRDBnWkdWd2RHaHpJRDhnWkdWd2RHaHpMbXhsYm1kMGFDQTZJREE3WEc0Z0lIQnliMmN1WW14dlkydFFZWEpoYlhNZ1BTQmtaV05zWVhKbFpFSnNiMk5yVUdGeVlXMXpJSHg4SURBN1hHNGdJSEpsZEhWeWJpQndjbTluTzF4dWZWeHVYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdjbVZ6YjJ4MlpWQmhjblJwWVd3b2NHRnlkR2xoYkN3Z1kyOXVkR1Y0ZEN3Z2IzQjBhVzl1Y3lrZ2UxeHVJQ0JwWmlBb0lYQmhjblJwWVd3cElIdGNiaUFnSUNCcFppQW9iM0IwYVc5dWN5NXVZVzFsSUQwOVBTQW5RSEJoY25ScFlXd3RZbXh2WTJzbktTQjdYRzRnSUNBZ0lDQnNaWFFnWkdGMFlTQTlJRzl3ZEdsdmJuTXVaR0YwWVR0Y2JpQWdJQ0FnSUhkb2FXeGxJQ2hrWVhSaFd5ZHdZWEowYVdGc0xXSnNiMk5ySjEwZ1BUMDlJRzV2YjNBcElIdGNiaUFnSUNBZ0lDQWdaR0YwWVNBOUlHUmhkR0V1WDNCaGNtVnVkRHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQWdJSEJoY25ScFlXd2dQU0JrWVhSaFd5ZHdZWEowYVdGc0xXSnNiMk5ySjEwN1hHNGdJQ0FnSUNCa1lYUmhXeWR3WVhKMGFXRnNMV0pzYjJOckoxMGdQU0J1YjI5d08xeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0J3WVhKMGFXRnNJRDBnYjNCMGFXOXVjeTV3WVhKMGFXRnNjMXR2Y0hScGIyNXpMbTVoYldWZE8xeHVJQ0FnSUgxY2JpQWdmU0JsYkhObElHbG1JQ2doY0dGeWRHbGhiQzVqWVd4c0lDWW1JQ0Z2Y0hScGIyNXpMbTVoYldVcElIdGNiaUFnSUNBdkx5QlVhR2x6SUdseklHRWdaSGx1WVcxcFl5QndZWEowYVdGc0lIUm9ZWFFnY21WMGRYSnVaV1FnWVNCemRISnBibWRjYmlBZ0lDQnZjSFJwYjI1ekxtNWhiV1VnUFNCd1lYSjBhV0ZzTzF4dUlDQWdJSEJoY25ScFlXd2dQU0J2Y0hScGIyNXpMbkJoY25ScFlXeHpXM0JoY25ScFlXeGRPMXh1SUNCOVhHNGdJSEpsZEhWeWJpQndZWEowYVdGc08xeHVmVnh1WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnYVc1MmIydGxVR0Z5ZEdsaGJDaHdZWEowYVdGc0xDQmpiMjUwWlhoMExDQnZjSFJwYjI1ektTQjdYRzRnSUc5d2RHbHZibk11Y0dGeWRHbGhiQ0E5SUhSeWRXVTdYRzRnSUdsbUlDaHZjSFJwYjI1ekxtbGtjeWtnZTF4dUlDQWdJRzl3ZEdsdmJuTXVaR0YwWVM1amIyNTBaWGgwVUdGMGFDQTlJRzl3ZEdsdmJuTXVhV1J6V3pCZElIeDhJRzl3ZEdsdmJuTXVaR0YwWVM1amIyNTBaWGgwVUdGMGFEdGNiaUFnZlZ4dVhHNGdJR3hsZENCd1lYSjBhV0ZzUW14dlkyczdYRzRnSUdsbUlDaHZjSFJwYjI1ekxtWnVJQ1ltSUc5d2RHbHZibk11Wm00Z0lUMDlJRzV2YjNBcElIdGNiaUFnSUNCdmNIUnBiMjV6TG1SaGRHRWdQU0JqY21WaGRHVkdjbUZ0WlNodmNIUnBiMjV6TG1SaGRHRXBPMXh1SUNBZ0lIQmhjblJwWVd4Q2JHOWpheUE5SUc5d2RHbHZibk11WkdGMFlWc25jR0Z5ZEdsaGJDMWliRzlqYXlkZElEMGdiM0IwYVc5dWN5NW1ianRjYmx4dUlDQWdJR2xtSUNod1lYSjBhV0ZzUW14dlkyc3VjR0Z5ZEdsaGJITXBJSHRjYmlBZ0lDQWdJRzl3ZEdsdmJuTXVjR0Z5ZEdsaGJITWdQU0JWZEdsc2N5NWxlSFJsYm1Rb2UzMHNJRzl3ZEdsdmJuTXVjR0Z5ZEdsaGJITXNJSEJoY25ScFlXeENiRzlqYXk1d1lYSjBhV0ZzY3lrN1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2FXWWdLSEJoY25ScFlXd2dQVDA5SUhWdVpHVm1hVzVsWkNBbUppQndZWEowYVdGc1FteHZZMnNwSUh0Y2JpQWdJQ0J3WVhKMGFXRnNJRDBnY0dGeWRHbGhiRUpzYjJOck8xeHVJQ0I5WEc1Y2JpQWdhV1lnS0hCaGNuUnBZV3dnUFQwOUlIVnVaR1ZtYVc1bFpDa2dlMXh1SUNBZ0lIUm9jbTkzSUc1bGR5QkZlR05sY0hScGIyNG9KMVJvWlNCd1lYSjBhV0ZzSUNjZ0t5QnZjSFJwYjI1ekxtNWhiV1VnS3lBbklHTnZkV3hrSUc1dmRDQmlaU0JtYjNWdVpDY3BPMXh1SUNCOUlHVnNjMlVnYVdZZ0tIQmhjblJwWVd3Z2FXNXpkR0Z1WTJWdlppQkdkVzVqZEdsdmJpa2dlMXh1SUNBZ0lISmxkSFZ5YmlCd1lYSjBhV0ZzS0dOdmJuUmxlSFFzSUc5d2RHbHZibk1wTzF4dUlDQjlYRzU5WEc1Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCdWIyOXdLQ2tnZXlCeVpYUjFjbTRnSnljN0lIMWNibHh1Wm5WdVkzUnBiMjRnYVc1cGRFUmhkR0VvWTI5dWRHVjRkQ3dnWkdGMFlTa2dlMXh1SUNCcFppQW9JV1JoZEdFZ2ZId2dJU2duY205dmRDY2dhVzRnWkdGMFlTa3BJSHRjYmlBZ0lDQmtZWFJoSUQwZ1pHRjBZU0EvSUdOeVpXRjBaVVp5WVcxbEtHUmhkR0VwSURvZ2UzMDdYRzRnSUNBZ1pHRjBZUzV5YjI5MElEMGdZMjl1ZEdWNGREdGNiaUFnZlZ4dUlDQnlaWFIxY200Z1pHRjBZVHRjYm4xY2JseHVablZ1WTNScGIyNGdaWGhsWTNWMFpVUmxZMjl5WVhSdmNuTW9abTRzSUhCeWIyY3NJR052Ym5SaGFXNWxjaXdnWkdWd2RHaHpMQ0JrWVhSaExDQmliRzlqYTFCaGNtRnRjeWtnZTF4dUlDQnBaaUFvWm00dVpHVmpiM0poZEc5eUtTQjdYRzRnSUNBZ2JHVjBJSEJ5YjNCeklEMGdlMzA3WEc0Z0lDQWdjSEp2WnlBOUlHWnVMbVJsWTI5eVlYUnZjaWh3Y205bkxDQndjbTl3Y3l3Z1kyOXVkR0ZwYm1WeUxDQmtaWEIwYUhNZ0ppWWdaR1Z3ZEdoeld6QmRMQ0JrWVhSaExDQmliRzlqYTFCaGNtRnRjeXdnWkdWd2RHaHpLVHRjYmlBZ0lDQlZkR2xzY3k1bGVIUmxibVFvY0hKdlp5d2djSEp2Y0hNcE8xeHVJQ0I5WEc0Z0lISmxkSFZ5YmlCd2NtOW5PMXh1ZlZ4dUlsMTlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvcnVudGltZS5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gQnVpbGQgb3V0IG91ciBiYXNpYyBTYWZlU3RyaW5nIHR5cGVcbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmZ1bmN0aW9uIFNhZmVTdHJpbmcoc3RyaW5nKSB7XG4gIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xufVxuXG5TYWZlU3RyaW5nLnByb3RvdHlwZS50b1N0cmluZyA9IFNhZmVTdHJpbmcucHJvdG90eXBlLnRvSFRNTCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICcnICsgdGhpcy5zdHJpbmc7XG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBTYWZlU3RyaW5nO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1TDJ4cFlpOW9ZVzVrYkdWaVlYSnpMM05oWm1VdGMzUnlhVzVuTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdRVUZEUVN4VFFVRlRMRlZCUVZVc1EwRkJReXhOUVVGTkxFVkJRVVU3UVVGRE1VSXNUVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhOUVVGTkxFTkJRVU03UTBGRGRFSTdPMEZCUlVRc1ZVRkJWU3hEUVVGRExGTkJRVk1zUTBGQlF5eFJRVUZSTEVkQlFVY3NWVUZCVlN4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGTkxFZEJRVWNzV1VGQlZ6dEJRVU4yUlN4VFFVRlBMRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETzBOQlEzcENMRU5CUVVNN08zRkNRVVZoTEZWQlFWVWlMQ0ptYVd4bElqb2ljMkZtWlMxemRISnBibWN1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZMeUJDZFdsc1pDQnZkWFFnYjNWeUlHSmhjMmxqSUZOaFptVlRkSEpwYm1jZ2RIbHdaVnh1Wm5WdVkzUnBiMjRnVTJGbVpWTjBjbWx1WnloemRISnBibWNwSUh0Y2JpQWdkR2hwY3k1emRISnBibWNnUFNCemRISnBibWM3WEc1OVhHNWNibE5oWm1WVGRISnBibWN1Y0hKdmRHOTBlWEJsTG5SdlUzUnlhVzVuSUQwZ1UyRm1aVk4wY21sdVp5NXdjbTkwYjNSNWNHVXVkRzlJVkUxTUlEMGdablZ1WTNScGIyNG9LU0I3WEc0Z0lISmxkSFZ5YmlBbkp5QXJJSFJvYVhNdWMzUnlhVzVuTzF4dWZUdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdVMkZtWlZOMGNtbHVaenRjYmlKZGZRPT1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvc2FmZS1zdHJpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJyKSA9PSAnW29iamVjdCBBcnJheV0nO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wYWdlL34vaXNhcnJheS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzYXJyYXkgPSByZXF1aXJlKCdpc2FycmF5JylcblxuLyoqXG4gKiBFeHBvc2UgYHBhdGhUb1JlZ2V4cGAuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gcGF0aFRvUmVnZXhwXG5tb2R1bGUuZXhwb3J0cy5wYXJzZSA9IHBhcnNlXG5tb2R1bGUuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZVxubW9kdWxlLmV4cG9ydHMudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb25cbm1vZHVsZS5leHBvcnRzLnRva2Vuc1RvUmVnRXhwID0gdG9rZW5zVG9SZWdFeHBcblxuLyoqXG4gKiBUaGUgbWFpbiBwYXRoIG1hdGNoaW5nIHJlZ2V4cCB1dGlsaXR5LlxuICpcbiAqIEB0eXBlIHtSZWdFeHB9XG4gKi9cbnZhciBQQVRIX1JFR0VYUCA9IG5ldyBSZWdFeHAoW1xuICAvLyBNYXRjaCBlc2NhcGVkIGNoYXJhY3RlcnMgdGhhdCB3b3VsZCBvdGhlcndpc2UgYXBwZWFyIGluIGZ1dHVyZSBtYXRjaGVzLlxuICAvLyBUaGlzIGFsbG93cyB0aGUgdXNlciB0byBlc2NhcGUgc3BlY2lhbCBjaGFyYWN0ZXJzIHRoYXQgd29uJ3QgdHJhbnNmb3JtLlxuICAnKFxcXFxcXFxcLiknLFxuICAvLyBNYXRjaCBFeHByZXNzLXN0eWxlIHBhcmFtZXRlcnMgYW5kIHVuLW5hbWVkIHBhcmFtZXRlcnMgd2l0aCBhIHByZWZpeFxuICAvLyBhbmQgb3B0aW9uYWwgc3VmZml4ZXMuIE1hdGNoZXMgYXBwZWFyIGFzOlxuICAvL1xuICAvLyBcIi86dGVzdChcXFxcZCspP1wiID0+IFtcIi9cIiwgXCJ0ZXN0XCIsIFwiXFxkK1wiLCB1bmRlZmluZWQsIFwiP1wiLCB1bmRlZmluZWRdXG4gIC8vIFwiL3JvdXRlKFxcXFxkKylcIiAgPT4gW3VuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiXFxkK1wiLCB1bmRlZmluZWQsIHVuZGVmaW5lZF1cbiAgLy8gXCIvKlwiICAgICAgICAgICAgPT4gW1wiL1wiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiKlwiXVxuICAnKFtcXFxcLy5dKT8oPzooPzpcXFxcOihcXFxcdyspKD86XFxcXCgoKD86XFxcXFxcXFwufFteKCldKSspXFxcXCkpP3xcXFxcKCgoPzpcXFxcXFxcXC58W14oKV0pKylcXFxcKSkoWysqP10pP3woXFxcXCopKSdcbl0uam9pbignfCcpLCAnZycpXG5cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuZnVuY3Rpb24gcGFyc2UgKHN0cikge1xuICB2YXIgdG9rZW5zID0gW11cbiAgdmFyIGtleSA9IDBcbiAgdmFyIGluZGV4ID0gMFxuICB2YXIgcGF0aCA9ICcnXG4gIHZhciByZXNcblxuICB3aGlsZSAoKHJlcyA9IFBBVEhfUkVHRVhQLmV4ZWMoc3RyKSkgIT0gbnVsbCkge1xuICAgIHZhciBtID0gcmVzWzBdXG4gICAgdmFyIGVzY2FwZWQgPSByZXNbMV1cbiAgICB2YXIgb2Zmc2V0ID0gcmVzLmluZGV4XG4gICAgcGF0aCArPSBzdHIuc2xpY2UoaW5kZXgsIG9mZnNldClcbiAgICBpbmRleCA9IG9mZnNldCArIG0ubGVuZ3RoXG5cbiAgICAvLyBJZ25vcmUgYWxyZWFkeSBlc2NhcGVkIHNlcXVlbmNlcy5cbiAgICBpZiAoZXNjYXBlZCkge1xuICAgICAgcGF0aCArPSBlc2NhcGVkWzFdXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIC8vIFB1c2ggdGhlIGN1cnJlbnQgcGF0aCBvbnRvIHRoZSB0b2tlbnMuXG4gICAgaWYgKHBhdGgpIHtcbiAgICAgIHRva2Vucy5wdXNoKHBhdGgpXG4gICAgICBwYXRoID0gJydcbiAgICB9XG5cbiAgICB2YXIgcHJlZml4ID0gcmVzWzJdXG4gICAgdmFyIG5hbWUgPSByZXNbM11cbiAgICB2YXIgY2FwdHVyZSA9IHJlc1s0XVxuICAgIHZhciBncm91cCA9IHJlc1s1XVxuICAgIHZhciBzdWZmaXggPSByZXNbNl1cbiAgICB2YXIgYXN0ZXJpc2sgPSByZXNbN11cblxuICAgIHZhciByZXBlYXQgPSBzdWZmaXggPT09ICcrJyB8fCBzdWZmaXggPT09ICcqJ1xuICAgIHZhciBvcHRpb25hbCA9IHN1ZmZpeCA9PT0gJz8nIHx8IHN1ZmZpeCA9PT0gJyonXG4gICAgdmFyIGRlbGltaXRlciA9IHByZWZpeCB8fCAnLydcbiAgICB2YXIgcGF0dGVybiA9IGNhcHR1cmUgfHwgZ3JvdXAgfHwgKGFzdGVyaXNrID8gJy4qJyA6ICdbXicgKyBkZWxpbWl0ZXIgKyAnXSs/JylcblxuICAgIHRva2Vucy5wdXNoKHtcbiAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICBwcmVmaXg6IHByZWZpeCB8fCAnJyxcbiAgICAgIGRlbGltaXRlcjogZGVsaW1pdGVyLFxuICAgICAgb3B0aW9uYWw6IG9wdGlvbmFsLFxuICAgICAgcmVwZWF0OiByZXBlYXQsXG4gICAgICBwYXR0ZXJuOiBlc2NhcGVHcm91cChwYXR0ZXJuKVxuICAgIH0pXG4gIH1cblxuICAvLyBNYXRjaCBhbnkgY2hhcmFjdGVycyBzdGlsbCByZW1haW5pbmcuXG4gIGlmIChpbmRleCA8IHN0ci5sZW5ndGgpIHtcbiAgICBwYXRoICs9IHN0ci5zdWJzdHIoaW5kZXgpXG4gIH1cblxuICAvLyBJZiB0aGUgcGF0aCBleGlzdHMsIHB1c2ggaXQgb250byB0aGUgZW5kLlxuICBpZiAocGF0aCkge1xuICAgIHRva2Vucy5wdXNoKHBhdGgpXG4gIH1cblxuICByZXR1cm4gdG9rZW5zXG59XG5cbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9ICAgc3RyXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gY29tcGlsZSAoc3RyKSB7XG4gIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0cikpXG59XG5cbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24gKHRva2Vucykge1xuICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgdmFyIG1hdGNoZXMgPSBuZXcgQXJyYXkodG9rZW5zLmxlbmd0aClcblxuICAvLyBDb21waWxlIGFsbCB0aGUgcGF0dGVybnMgYmVmb3JlIGNvbXBpbGF0aW9uLlxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0eXBlb2YgdG9rZW5zW2ldID09PSAnb2JqZWN0Jykge1xuICAgICAgbWF0Y2hlc1tpXSA9IG5ldyBSZWdFeHAoJ14nICsgdG9rZW5zW2ldLnBhdHRlcm4gKyAnJCcpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChvYmopIHtcbiAgICB2YXIgcGF0aCA9ICcnXG4gICAgdmFyIGRhdGEgPSBvYmogfHwge31cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV1cblxuICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcGF0aCArPSB0b2tlblxuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZSA9IGRhdGFbdG9rZW4ubmFtZV1cbiAgICAgIHZhciBzZWdtZW50XG5cbiAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgIGlmICh0b2tlbi5vcHRpb25hbCkge1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgXCInICsgdG9rZW4ubmFtZSArICdcIiB0byBiZSBkZWZpbmVkJylcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNhcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgaWYgKCF0b2tlbi5yZXBlYXQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBcIicgKyB0b2tlbi5uYW1lICsgJ1wiIHRvIG5vdCByZXBlYXQsIGJ1dCByZWNlaXZlZCBcIicgKyB2YWx1ZSArICdcIicpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgaWYgKHRva2VuLm9wdGlvbmFsKSB7XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBcIicgKyB0b2tlbi5uYW1lICsgJ1wiIHRvIG5vdCBiZSBlbXB0eScpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgIHNlZ21lbnQgPSBlbmNvZGVVUklDb21wb25lbnQodmFsdWVbal0pXG5cbiAgICAgICAgICBpZiAoIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYWxsIFwiJyArIHRva2VuLm5hbWUgKyAnXCIgdG8gbWF0Y2ggXCInICsgdG9rZW4ucGF0dGVybiArICdcIiwgYnV0IHJlY2VpdmVkIFwiJyArIHNlZ21lbnQgKyAnXCInKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHBhdGggKz0gKGogPT09IDAgPyB0b2tlbi5wcmVmaXggOiB0b2tlbi5kZWxpbWl0ZXIpICsgc2VnbWVudFxuICAgICAgICB9XG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgc2VnbWVudCA9IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSlcblxuICAgICAgaWYgKCFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgXCInICsgdG9rZW4ubmFtZSArICdcIiB0byBtYXRjaCBcIicgKyB0b2tlbi5wYXR0ZXJuICsgJ1wiLCBidXQgcmVjZWl2ZWQgXCInICsgc2VnbWVudCArICdcIicpXG4gICAgICB9XG5cbiAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudFxuICAgIH1cblxuICAgIHJldHVybiBwYXRoXG4gIH1cbn1cblxuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyAoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXxcXC9dKS9nLCAnXFxcXCQxJylcbn1cblxuLyoqXG4gKiBFc2NhcGUgdGhlIGNhcHR1cmluZyBncm91cCBieSBlc2NhcGluZyBzcGVjaWFsIGNoYXJhY3RlcnMgYW5kIG1lYW5pbmcuXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSBncm91cFxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5mdW5jdGlvbiBlc2NhcGVHcm91cCAoZ3JvdXApIHtcbiAgcmV0dXJuIGdyb3VwLnJlcGxhY2UoLyhbPSE6JFxcLygpXSkvZywgJ1xcXFwkMScpXG59XG5cbi8qKlxuICogQXR0YWNoIHRoZSBrZXlzIGFzIGEgcHJvcGVydHkgb2YgdGhlIHJlZ2V4cC5cbiAqXG4gKiBAcGFyYW0gIHtSZWdFeHB9IHJlXG4gKiBAcGFyYW0gIHtBcnJheX0gIGtleXNcbiAqIEByZXR1cm4ge1JlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gYXR0YWNoS2V5cyAocmUsIGtleXMpIHtcbiAgcmUua2V5cyA9IGtleXNcbiAgcmV0dXJuIHJlXG59XG5cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZmxhZ3MgKG9wdGlvbnMpIHtcbiAgcmV0dXJuIG9wdGlvbnMuc2Vuc2l0aXZlID8gJycgOiAnaSdcbn1cblxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKlxuICogQHBhcmFtICB7UmVnRXhwfSBwYXRoXG4gKiBAcGFyYW0gIHtBcnJheX0gIGtleXNcbiAqIEByZXR1cm4ge1JlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAgKHBhdGgsIGtleXMpIHtcbiAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpXG5cbiAgaWYgKGdyb3Vwcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXlzLnB1c2goe1xuICAgICAgICBuYW1lOiBpLFxuICAgICAgICBwcmVmaXg6IG51bGwsXG4gICAgICAgIGRlbGltaXRlcjogbnVsbCxcbiAgICAgICAgb3B0aW9uYWw6IGZhbHNlLFxuICAgICAgICByZXBlYXQ6IGZhbHNlLFxuICAgICAgICBwYXR0ZXJuOiBudWxsXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhdHRhY2hLZXlzKHBhdGgsIGtleXMpXG59XG5cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKlxuICogQHBhcmFtICB7QXJyYXl9ICBwYXRoXG4gKiBAcGFyYW0gIHtBcnJheX0gIGtleXNcbiAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7UmVnRXhwfVxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwIChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gIHZhciBwYXJ0cyA9IFtdXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgcGFydHMucHVzaChwYXRoVG9SZWdleHAocGF0aFtpXSwga2V5cywgb3B0aW9ucykuc291cmNlKVxuICB9XG5cbiAgdmFyIHJlZ2V4cCA9IG5ldyBSZWdFeHAoJyg/OicgKyBwYXJ0cy5qb2luKCd8JykgKyAnKScsIGZsYWdzKG9wdGlvbnMpKVxuXG4gIHJldHVybiBhdHRhY2hLZXlzKHJlZ2V4cCwga2V5cylcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHBhdGhcbiAqIEBwYXJhbSAge0FycmF5fSAga2V5c1xuICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwIChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gIHZhciB0b2tlbnMgPSBwYXJzZShwYXRoKVxuICB2YXIgcmUgPSB0b2tlbnNUb1JlZ0V4cCh0b2tlbnMsIG9wdGlvbnMpXG5cbiAgLy8gQXR0YWNoIGtleXMgYmFjayB0byB0aGUgcmVnZXhwLlxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0eXBlb2YgdG9rZW5zW2ldICE9PSAnc3RyaW5nJykge1xuICAgICAga2V5cy5wdXNoKHRva2Vuc1tpXSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXR0YWNoS2V5cyhyZSwga2V5cylcbn1cblxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICpcbiAqIEBwYXJhbSAge0FycmF5fSAgdG9rZW5zXG4gKiBAcGFyYW0gIHtBcnJheX0gIGtleXNcbiAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7UmVnRXhwfVxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ0V4cCAodG9rZW5zLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG5cbiAgdmFyIHN0cmljdCA9IG9wdGlvbnMuc3RyaWN0XG4gIHZhciBlbmQgPSBvcHRpb25zLmVuZCAhPT0gZmFsc2VcbiAgdmFyIHJvdXRlID0gJydcbiAgdmFyIGxhc3RUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV1cbiAgdmFyIGVuZHNXaXRoU2xhc2ggPSB0eXBlb2YgbGFzdFRva2VuID09PSAnc3RyaW5nJyAmJiAvXFwvJC8udGVzdChsYXN0VG9rZW4pXG5cbiAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV1cblxuICAgIGlmICh0eXBlb2YgdG9rZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcodG9rZW4pXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcodG9rZW4ucHJlZml4KVxuICAgICAgdmFyIGNhcHR1cmUgPSB0b2tlbi5wYXR0ZXJuXG5cbiAgICAgIGlmICh0b2tlbi5yZXBlYXQpIHtcbiAgICAgICAgY2FwdHVyZSArPSAnKD86JyArIHByZWZpeCArIGNhcHR1cmUgKyAnKSonXG4gICAgICB9XG5cbiAgICAgIGlmICh0b2tlbi5vcHRpb25hbCkge1xuICAgICAgICBpZiAocHJlZml4KSB7XG4gICAgICAgICAgY2FwdHVyZSA9ICcoPzonICsgcHJlZml4ICsgJygnICsgY2FwdHVyZSArICcpKT8nXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FwdHVyZSA9ICcoJyArIGNhcHR1cmUgKyAnKT8nXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhcHR1cmUgPSBwcmVmaXggKyAnKCcgKyBjYXB0dXJlICsgJyknXG4gICAgICB9XG5cbiAgICAgIHJvdXRlICs9IGNhcHR1cmVcbiAgICB9XG4gIH1cblxuICAvLyBJbiBub24tc3RyaWN0IG1vZGUgd2UgYWxsb3cgYSBzbGFzaCBhdCB0aGUgZW5kIG9mIG1hdGNoLiBJZiB0aGUgcGF0aCB0b1xuICAvLyBtYXRjaCBhbHJlYWR5IGVuZHMgd2l0aCBhIHNsYXNoLCB3ZSByZW1vdmUgaXQgZm9yIGNvbnNpc3RlbmN5LiBUaGUgc2xhc2hcbiAgLy8gaXMgdmFsaWQgYXQgdGhlIGVuZCBvZiBhIHBhdGggbWF0Y2gsIG5vdCBpbiB0aGUgbWlkZGxlLiBUaGlzIGlzIGltcG9ydGFudFxuICAvLyBpbiBub24tZW5kaW5nIG1vZGUsIHdoZXJlIFwiL3Rlc3QvXCIgc2hvdWxkbid0IG1hdGNoIFwiL3Rlc3QvL3JvdXRlXCIuXG4gIGlmICghc3RyaWN0KSB7XG4gICAgcm91dGUgPSAoZW5kc1dpdGhTbGFzaCA/IHJvdXRlLnNsaWNlKDAsIC0yKSA6IHJvdXRlKSArICcoPzpcXFxcLyg/PSQpKT8nXG4gIH1cblxuICBpZiAoZW5kKSB7XG4gICAgcm91dGUgKz0gJyQnXG4gIH0gZWxzZSB7XG4gICAgLy8gSW4gbm9uLWVuZGluZyBtb2RlLCB3ZSBuZWVkIHRoZSBjYXB0dXJpbmcgZ3JvdXBzIHRvIG1hdGNoIGFzIG11Y2ggYXNcbiAgICAvLyBwb3NzaWJsZSBieSB1c2luZyBhIHBvc2l0aXZlIGxvb2thaGVhZCB0byB0aGUgZW5kIG9yIG5leHQgcGF0aCBzZWdtZW50LlxuICAgIHJvdXRlICs9IHN0cmljdCAmJiBlbmRzV2l0aFNsYXNoID8gJycgOiAnKD89XFxcXC98JCknXG4gIH1cblxuICByZXR1cm4gbmV3IFJlZ0V4cCgnXicgKyByb3V0ZSwgZmxhZ3Mob3B0aW9ucykpXG59XG5cbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqXG4gKiBAcGFyYW0gIHsoU3RyaW5nfFJlZ0V4cHxBcnJheSl9IHBhdGhcbiAqIEBwYXJhbSAge0FycmF5fSAgICAgICAgICAgICAgICAgW2tleXNdXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgICAgICAgICAgICAgIFtvcHRpb25zXVxuICogQHJldHVybiB7UmVnRXhwfVxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAgKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAga2V5cyA9IGtleXMgfHwgW11cblxuICBpZiAoIWlzYXJyYXkoa2V5cykpIHtcbiAgICBvcHRpb25zID0ga2V5c1xuICAgIGtleXMgPSBbXVxuICB9IGVsc2UgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9XG4gIH1cblxuICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKVxuICB9XG5cbiAgaWYgKGlzYXJyYXkocGF0aCkpIHtcbiAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKVxuICB9XG5cbiAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcGFnZS9+L3BhdGgtdG8tcmVnZXhwL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCAkID0gcmVxdWlyZShcImpxdWVyeVwiKTtcbmNvbnN0IHBhZ2UgPSByZXF1aXJlKFwicGFnZVwiKTtcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZShcInF1ZXJ5c3RyaW5nXCIpO1xuXG5jb25zdCBwZW9wbGVQYWdlID0gcmVxdWlyZShcIi4vcGVvcGxlXCIpO1xuY29uc3QgcHVic1BhZ2UgPSByZXF1aXJlKFwiLi9wdWJsaWNhdGlvbnNcIik7XG5cbmNvbnN0IHRhcmdldElkID0gXCJyZW5kZXItdGFyZ2V0XCI7XG5sZXQgcmVuZGVyVGFyZ2V0ID0gbnVsbDtcblxuY29uc3QgYXBpVVJMID0gXCJodHRwOi8vc29kdnUubG54LndhcndpY2suYWMudWsvXCI7XG5jb25zdCByb290VVJMID0gXCIvZmFjL2FydHMvaGlzdG9yeS9pcmlzaHdvbWVud3JpdGVycy9kYXRhYmFzZS9cIjtcblxuY29uc3QgdGVtcGxhdGVzID0ge1xuICBob21lOiByZXF1aXJlKFwiLi4vdGVtcGxhdGVzL2hvbWUuaGJzXCIpLFxuICBwZW9wbGU6IHJlcXVpcmUoXCIuLi90ZW1wbGF0ZXMvcGVvcGxlLmhic1wiKSxcbiAgcGVyc29uOiByZXF1aXJlKFwiLi4vdGVtcGxhdGVzL3BlcnNvbi5oYnNcIiksXG4gIGl0ZW06IHJlcXVpcmUoXCIuLi90ZW1wbGF0ZXMvaXRlbS5oYnNcIilcbn07XG5cbmNvbnN0IHBhcnRpYWxzID0ge1xuICBmYWtlTWVudTogcmVxdWlyZShcIi4uL3RlbXBsYXRlcy9fdGVydGlhcnlfbWVudS5oYnNcIilcbn07XG5cbmNvbnN0IGdldEpTT04gPSBmdW5jdGlvbih1cmwpIHtcbiAgcmV0dXJuICQuZ2V0SlNPTihhcGlVUkwgKyB1cmwpO1xufTtcblxuY29uc3Qgc2V0dXBTd2l0Y2hEaW1lbnNpb25zID0gKHBhZ2UsIGFwaVF1ZXJ5KSA9PlxuICAkKFwiI3N3aXRjaC1kaW1lbnNpb25cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgaWYgKGxvY2F0aW9uLmhhc2guc2VhcmNoKFwiIyEvcHVibGljYXRpb25zL1wiKSA9PT0gMCkge1xuICAgICAgcGFnZS5yZWRpcmVjdChcIi9wZW9wbGUvP1wiICsgcXVlcnlTdHJpbmcuc3RyaW5naWZ5KGFwaVF1ZXJ5KSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgbG9jYXRpb24uaGFzaC5zZWFyY2goXCIjIS9wZW9wbGUvXCIpID09PSAwIHx8XG4gICAgICBsb2NhdGlvbi5oYXNoLmxlbmd0aCA9PT0gMCB8fFxuICAgICAgbG9jYXRpb24uaGFzaC5zZWFyY2goLyMhXFwvXFw/LykgPT09IDAgfHxcbiAgICAgIGxvY2F0aW9uLmhhc2guc2VhcmNoKC8jIVxcLy8pID09PSAwXG4gICAgKSB7XG4gICAgICBwYWdlLnJlZGlyZWN0KFwiL3B1YmxpY2F0aW9ucy8/XCIgKyBxdWVyeVN0cmluZy5zdHJpbmdpZnkoYXBpUXVlcnkpKTtcbiAgICB9XG4gIH0pO1xuXG5jb25zdCBzZXR1cE5hbWVGaWx0ZXIgPSAocGFnZSwgYXBpUXVlcnkpID0+XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZS1maWx0ZXJcIikuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoZS50YXJnZXQudmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgYXBpUXVlcnkuc2VhcmNoID0gZS50YXJnZXQudmFsdWU7XG4gICAgICBhcGlRdWVyeS5vZmZzZXQgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgYXBpUXVlcnkuc2VhcmNoO1xuICAgIH1cblxuICAgIGlmIChsb2NhdGlvbi5oYXNoLnNlYXJjaChcIiMhL3B1YmxpY2F0aW9ucy9cIikgPT09IDApIHtcbiAgICAgIHBhZ2UucmVkaXJlY3QoXCIvcHVibGljYXRpb25zLz9cIiArIHF1ZXJ5U3RyaW5nLnN0cmluZ2lmeShhcGlRdWVyeSkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGxvY2F0aW9uLmhhc2guc2VhcmNoKFwiIyEvcGVvcGxlL1wiKSA9PT0gMCB8fFxuICAgICAgbG9jYXRpb24uaGFzaC5sZW5ndGggPT09IDAgfHxcbiAgICAgIGxvY2F0aW9uLmhhc2guc2VhcmNoKC8jIVxcL1xcPy8pID09PSAwIHx8XG4gICAgICBsb2NhdGlvbi5oYXNoLnNlYXJjaCgvIyFcXC8vKSA9PT0gMFxuICAgICkge1xuICAgICAgcGFnZS5yZWRpcmVjdChcIi9wZW9wbGUvP1wiICsgcXVlcnlTdHJpbmcuc3RyaW5naWZ5KGFwaVF1ZXJ5KSk7XG4gICAgfVxuICB9KTtcblxuY29uc3QgaG9tZSA9IGN0eCA9PiB7XG4gICQoXCIuaWQ3LXBhZ2UtdGl0bGUgaDFcIikudGV4dChcIldJTUlDIERhdGFiYXNlIC0gQWxsIFBlb3BsZVwiKTtcbiAgJChcIi53aW1pYy1mYWtlLW1lbnVcIikucmVtb3ZlKCk7XG4gICQoXCIuaWQ3LW5hdmlnYXRpb25cIikuYXBwZW5kKHBhcnRpYWxzLmZha2VNZW51KHsgYmFzZVVSTDogcm9vdFVSTCB9KSk7XG5cbiAgY29uc3QgcXVlcnlWYWx1ZXMgPSBxdWVyeVN0cmluZy5wYXJzZShjdHgucXVlcnlzdHJpbmcpO1xuXG4gIGNvbnN0IGFwaVF1ZXJ5ID0gXy5vbWl0KFxuICAgIHtcbiAgICAgIHNlYXJjaDogcXVlcnlWYWx1ZXMuc2VhcmNoLFxuICAgICAgb2Zmc2V0OiBxdWVyeVZhbHVlcy5vZmZzZXQgfHwgMCxcbiAgICAgIGxpbWl0OiBxdWVyeVZhbHVlcy5saW1pdCB8fCA4MFxuICAgIH0sXG4gICAgXy5pc1VuZGVmaW5lZFxuICApO1xuXG4gIGdldEpTT04oXG4gICAgXCJwZW9wbGU/XCIgKyBxdWVyeVN0cmluZy5zdHJpbmdpZnkoYXBpUXVlcnkpXG4gICkudGhlbigoZGF0YSwgc3RhdHVzLCB4aHIpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpcmlzaC13cml0ZXJzLW1haW5cIikgPT09IG51bGwpIHtcbiAgICAgIHJlbmRlclRhcmdldC5pbm5lckhUTUwgPSB0ZW1wbGF0ZXMuaG9tZSh7XG4gICAgICAgIGluaXRpYWxTZWFyY2hWYWx1ZTogcXVlcnlWYWx1ZXMuc2VhcmNoIHx8IFwiXCJcbiAgICAgIH0pO1xuICAgICAgc2V0dXBOYW1lRmlsdGVyKHBhZ2UsIGFwaVF1ZXJ5KTtcbiAgICAgIC8vc2V0dXBTd2l0Y2hEaW1lbnNpb25zKHBhZ2UsIGFwaVF1ZXJ5KTtcbiAgICB9XG5cbiAgICAvLyAkKCcjaXJpc2gtd3JpdGVycy1tYWluICN3aW1pYy10aXRsZScpLnRleHQoJ1Blb3BsZScpO1xuICAgIC8vICQoJyNpcmlzaC13cml0ZXJzLW1haW4gI3N3aXRjaC1kaW1lbnNpb24nKS50ZXh0KCdQdWJsaWNhdGlvbnMnKTtcblxuICAgIHBlb3BsZVBhZ2UoZGF0YSwgeGhyLCBwYWdlLCBhcGlRdWVyeSwgcmVuZGVyVGFyZ2V0LCBxdWVyeVZhbHVlcyk7XG4gIH0pO1xufTtcblxuY29uc3QgcHVibGljYXRpb25zID0gY3R4ID0+IHtcbiAgJChcIi5pZDctcGFnZS10aXRsZSBoMVwiKS50ZXh0KFwiV0lNSUMgRGF0YWJhc2UgLSBBbGwgUHVibGljYXRpb25zXCIpO1xuICAkKFwiLndpbWljLWZha2UtbWVudVwiKS5yZW1vdmUoKTtcbiAgJChcIi5pZDctbmF2aWdhdGlvblwiKS5hcHBlbmQocGFydGlhbHMuZmFrZU1lbnUoeyBiYXNlVVJMOiByb290VVJMIH0pKTtcblxuICBjb25zdCBxdWVyeVZhbHVlcyA9IHF1ZXJ5U3RyaW5nLnBhcnNlKGN0eC5xdWVyeXN0cmluZyk7XG5cbiAgY29uc3QgYXBpUXVlcnkgPSBfLm9taXQoXG4gICAge1xuICAgICAgc2VhcmNoOiBxdWVyeVZhbHVlcy5zZWFyY2gsXG4gICAgICBvZmZzZXQ6IHF1ZXJ5VmFsdWVzLm9mZnNldCB8fCAwLFxuICAgICAgbGltaXQ6IHF1ZXJ5VmFsdWVzLmxpbWl0IHx8IDgwXG4gICAgfSxcbiAgICBfLmlzVW5kZWZpbmVkXG4gICk7XG5cbiAgZ2V0SlNPTihcbiAgICBcInB1YmxpY2F0aW9ucz9cIiArIHF1ZXJ5U3RyaW5nLnN0cmluZ2lmeShhcGlRdWVyeSlcbiAgKS50aGVuKChkYXRhLCBzdGF0dXMsIHhocikgPT4ge1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlyaXNoLXdyaXRlcnMtbWFpblwiKSA9PT0gbnVsbCkge1xuICAgICAgcmVuZGVyVGFyZ2V0LmlubmVySFRNTCA9IHRlbXBsYXRlcy5ob21lKHtcbiAgICAgICAgaW5pdGlhbFNlYXJjaFZhbHVlOiBxdWVyeVZhbHVlcy5zZWFyY2ggfHwgXCJcIlxuICAgICAgfSk7XG5cbiAgICAgIHNldHVwTmFtZUZpbHRlcihwYWdlLCBhcGlRdWVyeSk7XG4gICAgICAvLyBzZXR1cFN3aXRjaERpbWVuc2lvbnMocGFnZSwgYXBpUXVlcnkpO1xuICAgIH1cblxuICAgIC8vICQoJyNpcmlzaC13cml0ZXJzLW1haW4gI3dpbWljLXRpdGxlJykudGV4dCgnUHVibGljYXRpb25zJyk7XG4gICAgLy8gJCgnI2lyaXNoLXdyaXRlcnMtbWFpbiAjc3dpdGNoLWRpbWVuc2lvbicpLnRleHQoJ1Blb3BsZScpO1xuXG4gICAgcHVic1BhZ2UoZGF0YSwgeGhyLCBwYWdlLCBhcGlRdWVyeSwgcmVuZGVyVGFyZ2V0LCBxdWVyeVZhbHVlcyk7XG4gIH0pO1xufTtcblxudmFyIHByb2Nlc3NXb3JrID0gZnVuY3Rpb24od29yaykge1xuICB2YXIgcm9sZXMgPSBbXG4gICAgXCJpc19zb2xlX2F1dGhvclwiLFxuICAgIFwiaXNfbWFpbl9hdXRob3JcIixcbiAgICBcImlzX2NvX2F1dGhvclwiLFxuICAgIFwiaXNfZWRpdG9yXCIsXG4gICAgXCJpc19jby1lZGl0b3JcIixcbiAgICBcImlzX2ZvcmV3b3JkX2F1dGhvclwiLFxuICAgIFwiaXNfdHJhbnNsYXRvclwiLFxuICAgIFwiaXNfaWxsdXN0cmF0b3JcIixcbiAgICBcImlzX2dob3N0XCIsXG4gICAgXCJpc19wcmVmYWNlXCIsXG4gICAgXCJpc19vcmlnaW5hbF9hdXRob3JcIixcbiAgICBcImlzX3N1Yl9lZGl0b3JcIixcbiAgICBcImlzX2NvbXBpbGVyXCIsXG4gICAgXCJpc19pbnRyb2R1Y3Rpb25fYXV0aG9yXCIsXG4gICAgXCJpc19ub3Rlc19hdXRob3JcIixcbiAgICBcImlzX2RpcmVjdG9yXCIsXG4gICAgXCJpc19jb19kaXJlY3RvclwiLFxuICAgIFwiaXNfcHJvZHVjZXJcIixcbiAgICBcImlzX2V4ZWN1dGl2ZV9wcm9kdWNlclwiLFxuICAgIFwiaXNfY29fcHJvZHVjZXJcIixcbiAgICBcImlzX3NjcmlwdHdyaXRlclwiLFxuICAgIFwiaXNfY29fc2NyaXB0d3JpdGVyXCIsXG4gICAgXCJpc19zY3JlZW53cml0ZXJcIixcbiAgICBcImlzX2NvX3NjcmVlbndyaXRlclwiLFxuICAgIFwiaXNfY2luZW1hdG9ncmFwaGVyXCIsXG4gICAgXCJpc19hbmltYXRvclwiLFxuICAgIFwiaXNfaW50ZXJ2aWV3ZXJcIixcbiAgICBcImlzX2ludGVydmlld2VlXCJcbiAgXTtcblxuICB2YXIgcmVzdWx0cyA9IFtdO1xuXG4gIHJvbGVzLmZvckVhY2goZnVuY3Rpb24ocm9sZSkge1xuICAgIGlmICh3b3JrW3JvbGVdID09PSAxKSB7XG4gICAgICByZXN1bHRzLnB1c2goe1xuICAgICAgICByb2xlOiByb2xlLnN1YnN0cigzKS5yZXBsYWNlKFwiX1wiLCBcIiBcIiksXG4gICAgICAgIHdvcms6IHdvcmtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdHM7XG59O1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgcmVuZGVyVGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0SWQpO1xuXG4gIHBhZ2UuYmFzZShyb290VVJMKTtcblxuICAkKCdhW2RhdGEtcGFnZS11cmw9XCInICsgcm9vdFVSTCArICdcIl0nKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgIHBhZ2UucmVkaXJlY3QoXCIvXCIpO1xuICB9KTtcblxuICBwYWdlKFwiL1wiLCBob21lKTtcbiAgcGFnZShcIi9wZW9wbGVcIiwgaG9tZSk7XG4gIHBhZ2UoXCIvcHVibGljYXRpb25zXCIsIHB1YmxpY2F0aW9ucyk7XG5cbiAgcGFnZShcIi9wZW9wbGUvOmlkXCIsIGZ1bmN0aW9uKGN0eCkge1xuICAgIGdldEpTT04oXCJwZW9wbGUvXCIgKyBjdHgucGFyYW1zLmlkKS50aGVuKGRhdGEgPT4ge1xuICAgICAgJChcIi53aW1pYy1mYWtlLW1lbnVcIikucmVtb3ZlKCk7XG4gICAgICAkKFwiLmlkNy1uYXZpZ2F0aW9uXCIpLmFwcGVuZChwYXJ0aWFscy5mYWtlTWVudSh7IGJhc2VVUkw6IHJvb3RVUkwgfSkpO1xuXG4gICAgICBkYXRhLndvcmtzID0gZGF0YS53b3Jrcy5tYXAocHJvY2Vzc1dvcmspLnJlZHVjZShmdW5jdGlvbihwcmV2LCBjdXJyKSB7XG4gICAgICAgIHJldHVybiBwcmV2LmNvbmNhdChjdXJyKTtcbiAgICAgIH0sIFtdKTtcblxuICAgICAgbGV0IG5hbWUgPVxuICAgICAgICBbZGF0YS5jb3JlLnRpdGxlLCBkYXRhLmNvcmUuZmlyc3RuYW1lLCBkYXRhLmNvcmUubGFzdG5hbWVfa2V5bmFtZV1cbiAgICAgICAgICAuZmlsdGVyKGEgPT4gYSAhPT0gbnVsbCAmJiBhICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgLmpvaW4oXCIgXCIpIHx8IFwiVW5rbm93biBOYW1lXCI7XG5cbiAgICAgIGRhdGEuY2l0YXRpb24gPVxuICAgICAgICBcIldvbWVuIGluIE1vZGVybiBJcmlzaCBDdWx0dXJlIGRhdGFiYXNlIDxcIiArXG4gICAgICAgIGxvY2F0aW9uLmhyZWYgK1xuICAgICAgICBcIj4sIEFIUkMvVW5pdmVyc2l0eSBDb2xsZWdlIER1Ymxpbi9Vbml2ZXJzaXR5IG9mIFdhcndpY2ssIFthY2Nlc3NlZCBcIiArXG4gICAgICAgIG1vbWVudCgpLmZvcm1hdChcIk1NTU0gRG8gWVlZWVwiKSArXG4gICAgICAgIFwiXVwiO1xuXG4gICAgICAkKFwiLmlkNy1wYWdlLXRpdGxlIGgxXCIpLnRleHQobmFtZSk7XG4gICAgICByZW5kZXJUYXJnZXQuaW5uZXJIVE1MID0gdGVtcGxhdGVzLnBlcnNvbihkYXRhKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgcGFnZShcIi9wdWJsaWNhdGlvbnMvOmlkXCIsIGZ1bmN0aW9uKGN0eCkge1xuICAgIGdldEpTT04oXCJwdWJsaWNhdGlvbnMvXCIgKyBjdHgucGFyYW1zLmlkKS50aGVuKGRhdGEgPT4ge1xuICAgICAgJChcIi53aW1pYy1mYWtlLW1lbnVcIikucmVtb3ZlKCk7XG4gICAgICAkKFwiLmlkNy1uYXZpZ2F0aW9uXCIpLmFwcGVuZChwYXJ0aWFscy5mYWtlTWVudSh7IGJhc2VVUkw6IHJvb3RVUkwgfSkpO1xuICAgICAgJChcIi5pZDctcGFnZS10aXRsZSBoMVwiKS50ZXh0KGRhdGEuY29yZS50aXRsZSB8fCBcIlVua25vd24gVGl0bGVcIik7XG5cbiAgICAgIGRhdGEuYXV0aG9ycyA9IGRhdGEuYXV0aG9ycy5tYXAocHJvY2Vzc1dvcmspLnJlZHVjZShmdW5jdGlvbihwcmV2LCBjdXJyKSB7XG4gICAgICAgIHJldHVybiBwcmV2LmNvbmNhdChjdXJyKTtcbiAgICAgIH0sIFtdKTtcblxuICAgICAgZGF0YS5jaXRhdGlvbiA9XG4gICAgICAgIFwiV29tZW4gaW4gTW9kZXJuIElyaXNoIEN1bHR1cmUgZGF0YWJhc2UgPFwiICtcbiAgICAgICAgbG9jYXRpb24uaHJlZiArXG4gICAgICAgIFwiPiwgQUhSQy9Vbml2ZXJzaXR5IENvbGxlZ2UgRHVibGluL1VuaXZlcnNpdHkgb2YgV2Fyd2ljaywgW2FjY2Vzc2VkIFwiICtcbiAgICAgICAgbW9tZW50KCkuZm9ybWF0KFwiTU1NTSBEbyBZWVlZXCIpICtcbiAgICAgICAgXCJdXCI7XG5cbiAgICAgIHJlbmRlclRhcmdldC5pbm5lckhUTUwgPSB0ZW1wbGF0ZXMuaXRlbShkYXRhKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgcGFnZShcIipcIiwgZnVuY3Rpb24oKSB7XG4gICAgcGFnZShcIi9cIik7XG4gIH0pO1xuXG4gIHBhZ2Uoe1xuICAgIGhhc2hiYW5nOiB0cnVlXG4gIH0pO1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==