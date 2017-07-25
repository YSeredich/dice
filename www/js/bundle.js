webpackJsonp([0],{

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_polyfill__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_polyfill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(119);

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */




var App = function () {
    function App() {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, App);
    }

    App.prototype.start = function start() {
        document.addEventListener("deviceready", function () {
            return App.onDeviceReady();
        }, false);
    };

    App.onDeviceReady = function onDeviceReady() {
        __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* default */].bindHandlers();
    };

    return App;
}();

var app = new App();
app.start();

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shake__ = __webpack_require__(120);



var Dice = function () {
    function Dice() {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Dice);

        this._animationDuration = 1000;
        this._animationInterval = 100;
        this._refreshDice = this._refreshDice.bind(this);
        this._tapHandler = this._tapHandler.bind(this);
    }

    Dice.prototype.start = function start(type) {
        this._type = type;
        this._screen = document.getElementById('app');
        this._diceWraps = this._screen.querySelectorAll('.dice-wrap');
        this.bindHandlers();
    };

    Dice.prototype._refreshDice = function _refreshDice() {
        var _this = this;

        this.clearHandlers();

        // emulate animation
        var timerId = setInterval(function () {
            [].forEach.call(_this._diceWraps, function (diceWrap) {
                Dice.setRandomDice(diceWrap);
            });
        }, this._animationInterval);

        setTimeout(function () {
            clearInterval(timerId);
        }, this._animationDuration);

        this.bindHandlers();
    };

    Dice.prototype._tapHandler = function _tapHandler(e) {
        if (e.target.classList.contains('content') || e.target.closest('.dice-wrap')) {
            this._refreshDice();
        }
    };

    Dice.prototype.setType = function setType(type) {
        if (this._type !== type) {
            this.clearHandlers();
            this._type = type;
            this.bindHandlers();
        }
    };

    Dice.prototype.bindHandlers = function bindHandlers() {
        if (this._type === 'shake') {
            __WEBPACK_IMPORTED_MODULE_1__shake__["a" /* default */].startWatching(dice._refreshDice.bind(this));
        } else {
            this._screen.addEventListener('click', this._tapHandler);
        }
    };

    Dice.prototype.clearHandlers = function clearHandlers() {
        __WEBPACK_IMPORTED_MODULE_1__shake__["a" /* default */].stopWatching();
        this._screen.removeEventListener('click', this._tapHandler);
    };

    Dice.setRandomDice = function setRandomDice(wrap) {
        var dices = wrap.querySelectorAll('.dice');
        [].forEach.call(dices, function (dice) {
            dice.classList.remove('is-visible');
        });

        var num = Dice.getDiceNum();
        dices[num].classList.add('is-visible');
    };

    Dice.getDiceNum = function getDiceNum() {
        return Dice.randomInteger(0, 5);
    };

    Dice.randomInteger = function randomInteger(min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1);
        rand = Math.round(rand);
        rand = Math.abs(rand);
        return rand;
    };

    return Dice;
}();

var dice = new Dice();
/* harmony default export */ __webpack_exports__["a"] = (dice);

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dice__ = __webpack_require__(118);



var Settings = function () {
    function Settings() {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Settings);

        var type = localStorage.getItem('ya-dice-motion-type');
        this._type = type ? type : 'shake';
    }

    Settings.prototype.bindHandlers = function bindHandlers() {
        this._elem = document.querySelector('.settings');
        this._control = this._elem.querySelector('.settings__button');
        this._content = this._elem.querySelector('.settings__content');
        this._typeInput = this._content.querySelectorAll('.settings__input');

        Settings._setType(this._type);
        __WEBPACK_IMPORTED_MODULE_1__dice__["a" /* default */].start(this._type);

        this._control.addEventListener('click', this._gearListener.bind(this));
        [].forEach.call(this._typeInput, function (input) {
            input.addEventListener('click', Settings._typeInputListener);
        });
    };

    Settings.prototype.clearHandlers = function clearHandlers() {
        this._control.removeEventListener('click', this._gearListener);
        [].forEach.call(this._typeInput, function (input) {
            input.removeEventListener('click', Settings._typeInputListener);
        });
    };

    Settings._typeInputListener = function _typeInputListener(event) {
        event.stopPropagation();
        if (event.target.checked) {
            var val = event.target.value;
            __WEBPACK_IMPORTED_MODULE_1__dice__["a" /* default */].setType(val);
            localStorage.setItem('ya-dice-motion-type', val);
        }
    };

    Settings._setType = function _setType(type) {
        var checkedInput = document.getElementById(type);
        checkedInput.setAttribute('checked', 'checked');
    };

    Settings.prototype._gearListener = function _gearListener(event) {
        event.stopPropagation();
        if (this._content.classList.contains('is-visible')) {
            this._hideSettings();
        } else {
            this._showSettings();
        }
    };

    Settings.prototype._showSettings = function _showSettings() {
        this._content.classList.add('is-visible');
    };

    Settings.prototype._hideSettings = function _hideSettings() {
        this._content.classList.remove('is-visible');
    };

    return Settings;
}();

var settings = new Settings();
/* harmony default export */ __webpack_exports__["a"] = (settings);

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);


var Shake = function () {
    function Shake() {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Shake);

        this._last = {};
        this._options = {
            frequency: 300
        };
    }

    Shake.prototype._onSuccess = function _onSuccess(acceleration) {
        var last = this._last;

        if (!last.lastX) {
            last.lastX = acceleration.x;
            last.lastY = acceleration.y;
            last.lastZ = acceleration.z;
            return;
        }

        var deltaX = Math.abs(acceleration.x - last.lastX);
        var deltaY = Math.abs(acceleration.y - last.lastY);
        var deltaZ = Math.abs(acceleration.z - last.lastZ);

        if (deltaX + deltaY + deltaZ > 35) {
            this._callback();
        }

        last.lastX = acceleration.x;
        last.lastY = acceleration.y;
        last.lastZ = acceleration.z;
    };

    Shake._onError = function _onError() {
        console.log('Something went wrong');
    };

    Shake.prototype.startWatching = function startWatching(callback) {
        this._callback = callback;
        this._watchID = navigator.accelerometer.watchAcceleration(this._onSuccess.bind(this), Shake._onError, this._options);
    };

    Shake.prototype.stopWatching = function stopWatching() {
        if (this._watchID) {
            navigator.accelerometer.clearWatch(this._watchID);
        }

        this._watchID = null;
    };

    return Shake;
}();

var shake = new Shake();
/* harmony default export */ __webpack_exports__["a"] = (shake);

/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(116);
module.exports = __webpack_require__(117);


/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ })

},[303]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zY3NzL3N0eWxlcy5zY3NzP2JmYTEiLCJ3ZWJwYWNrOi8vLy4vZXMvZGljZS5qcyIsIndlYnBhY2s6Ly8vLi9lcy9zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9lcy9zaGFrZS5qcyIsIndlYnBhY2s6Ly8vLi4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiXSwibmFtZXMiOlsiQXBwIiwic3RhcnQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbkRldmljZVJlYWR5Iiwic2V0dGluZ3MiLCJiaW5kSGFuZGxlcnMiLCJhcHAiLCJEaWNlIiwiX2FuaW1hdGlvbkR1cmF0aW9uIiwiX2FuaW1hdGlvbkludGVydmFsIiwiX3JlZnJlc2hEaWNlIiwiYmluZCIsIl90YXBIYW5kbGVyIiwidHlwZSIsIl90eXBlIiwiX3NjcmVlbiIsImdldEVsZW1lbnRCeUlkIiwiX2RpY2VXcmFwcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjbGVhckhhbmRsZXJzIiwidGltZXJJZCIsInNldEludGVydmFsIiwiZm9yRWFjaCIsImNhbGwiLCJkaWNlV3JhcCIsInNldFJhbmRvbURpY2UiLCJzZXRUaW1lb3V0IiwiY2xlYXJJbnRlcnZhbCIsImUiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImNsb3Nlc3QiLCJzZXRUeXBlIiwic2hha2UiLCJzdGFydFdhdGNoaW5nIiwiZGljZSIsInN0b3BXYXRjaGluZyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ3cmFwIiwiZGljZXMiLCJyZW1vdmUiLCJudW0iLCJnZXREaWNlTnVtIiwiYWRkIiwicmFuZG9tSW50ZWdlciIsIm1pbiIsIm1heCIsInJhbmQiLCJNYXRoIiwicmFuZG9tIiwicm91bmQiLCJhYnMiLCJTZXR0aW5ncyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJfZWxlbSIsInF1ZXJ5U2VsZWN0b3IiLCJfY29udHJvbCIsIl9jb250ZW50IiwiX3R5cGVJbnB1dCIsIl9zZXRUeXBlIiwiX2dlYXJMaXN0ZW5lciIsImlucHV0IiwiX3R5cGVJbnB1dExpc3RlbmVyIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJjaGVja2VkIiwidmFsIiwidmFsdWUiLCJzZXRJdGVtIiwiY2hlY2tlZElucHV0Iiwic2V0QXR0cmlidXRlIiwiX2hpZGVTZXR0aW5ncyIsIl9zaG93U2V0dGluZ3MiLCJTaGFrZSIsIl9sYXN0IiwiX29wdGlvbnMiLCJmcmVxdWVuY3kiLCJfb25TdWNjZXNzIiwiYWNjZWxlcmF0aW9uIiwibGFzdCIsImxhc3RYIiwieCIsImxhc3RZIiwieSIsImxhc3RaIiwieiIsImRlbHRhWCIsImRlbHRhWSIsImRlbHRhWiIsIl9jYWxsYmFjayIsIl9vbkVycm9yIiwiY29uc29sZSIsImxvZyIsImNhbGxiYWNrIiwiX3dhdGNoSUQiLCJuYXZpZ2F0b3IiLCJhY2NlbGVyb21ldGVyIiwid2F0Y2hBY2NlbGVyYXRpb24iLCJjbGVhcldhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkE7QUFDQTs7SUFFTUEsRzs7Ozs7a0JBRUZDLEssb0JBQVE7QUFDSkMsaUJBQVNDLGdCQUFULENBQTBCLGFBQTFCLEVBQXlDO0FBQUEsbUJBQU1ILElBQUlJLGFBQUosRUFBTjtBQUFBLFNBQXpDLEVBQW9FLEtBQXBFO0FBQ0gsSzs7UUFFTUEsYSw0QkFBZ0I7QUFDbkJDLFFBQUEsMERBQUFBLENBQVNDLFlBQVQ7QUFDSCxLOzs7OztBQUdMLElBQUlDLE1BQU0sSUFBSVAsR0FBSixFQUFWO0FBQ0FPLElBQUlOLEtBQUosRzs7Ozs7OztBQ2xDQSx5Qzs7Ozs7Ozs7Ozs7O0FDQUE7O0lBRU1PLEk7QUFDRixvQkFBYztBQUFBOztBQUNWLGFBQUtDLGtCQUFMLEdBQTBCLElBQTFCO0FBQ0EsYUFBS0Msa0JBQUwsR0FBMEIsR0FBMUI7QUFDQSxhQUFLQyxZQUFMLEdBQW9C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WixLQUFLZixRQUhPLENBQWhCO0FBS0gsSzs7b0JBRUR4QyxZLDJCQUFlO0FBQ1gsWUFBSSxLQUFLMkQsUUFBVCxFQUFtQjtBQUNmQyxzQkFBVUMsYUFBVixDQUF3QkUsVUFBeEIsQ0FBbUMsS0FBS0osUUFBeEM7QUFDSDs7QUFFRCxhQUFLQSxRQUFMLEdBQWdCLElBQWhCO0FBQ0gsSzs7Ozs7QUFHTCxJQUFNOUQsUUFBUSxJQUFJeUMsS0FBSixFQUFkO0FBQ0EseURBQWV6QyxLQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdERBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRSIsImZpbGUiOiJqcy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCBcImJhYmVsLXBvbHlmaWxsXCI7XG5pbXBvcnQgc2V0dGluZ3MgZnJvbSAnLi9zZXR0aW5ncyc7XG5cbmNsYXNzIEFwcCB7XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRldmljZXJlYWR5XCIsICgpID0+IEFwcC5vbkRldmljZVJlYWR5KCksIGZhbHNlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgb25EZXZpY2VSZWFkeSgpIHtcbiAgICAgICAgc2V0dGluZ3MuYmluZEhhbmRsZXJzKCk7XG4gICAgfVxufVxuXG5sZXQgYXBwID0gbmV3IEFwcCgpO1xuYXBwLnN0YXJ0KCk7XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXMvaW5kZXguanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2Nzcy9zdHlsZXMuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBzaGFrZSBmcm9tICcuL3NoYWtlJztcblxuY2xhc3MgRGljZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2FuaW1hdGlvbkR1cmF0aW9uID0gMTAwMDtcbiAgICAgICAgdGhpcy5fYW5pbWF0aW9uSW50ZXJ2YWwgPSAxMDA7XG4gICAgICAgIHRoaXMuX3JlZnJlc2hEaWNlID0gdGhpcy5fcmVmcmVzaERpY2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5fdGFwSGFuZGxlciA9IHRoaXMuX3RhcEhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzdGFydCh0eXBlKSB7XG4gICAgICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLl9zY3JlZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XG4gICAgICAgIHRoaXMuX2RpY2VXcmFwcyA9IHRoaXMuX3NjcmVlbi5xdWVyeVNlbGVjdG9yQWxsKCcuZGljZS13cmFwJyk7XG4gICAgICAgIHRoaXMuYmluZEhhbmRsZXJzKCk7XG4gICAgfVxuXG4gICAgX3JlZnJlc2hEaWNlKCkge1xuXG4gICAgICAgIHRoaXMuY2xlYXJIYW5kbGVycygpO1xuXG4gICAgICAgIC8vIGVtdWxhdGUgYW5pbWF0aW9uXG4gICAgICAgIGNvbnN0IHRpbWVySWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBbXS5mb3JFYWNoLmNhbGwodGhpcy5fZGljZVdyYXBzLCAoZGljZVdyYXApID0+IHtcbiAgICAgICAgICAgICAgICBEaWNlLnNldFJhbmRvbURpY2UoZGljZVdyYXApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIHRoaXMuX2FuaW1hdGlvbkludGVydmFsKTtcblxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcklkKTtcbiAgICAgICAgfSwgdGhpcy5fYW5pbWF0aW9uRHVyYXRpb24pO1xuXG4gICAgICAgIHRoaXMuYmluZEhhbmRsZXJzKCk7XG4gICAgfVxuXG4gICAgX3RhcEhhbmRsZXIoZSkge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb250ZW50JykgfHwgZS50YXJnZXQuY2xvc2VzdCgnLmRpY2Utd3JhcCcpKSB7XG4gICAgICAgICAgICB0aGlzLl9yZWZyZXNoRGljZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0VHlwZSh0eXBlKSB7XG4gICAgICAgIGlmICh0aGlzLl90eXBlICE9PSB0eXBlKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFySGFuZGxlcnMoKTtcbiAgICAgICAgICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xuICAgICAgICAgICAgdGhpcy5iaW5kSGFuZGxlcnMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJpbmRIYW5kbGVycygpIHtcbiAgICAgICAgaWYgKHRoaXMuX3R5cGUgPT09ICdzaGFrZScpIHtcbiAgICAgICAgICAgIHNoYWtlLnN0YXJ0V2F0Y2hpbmcoZGljZS5fcmVmcmVzaERpY2UuYmluZCh0aGlzKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9zY3JlZW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl90YXBIYW5kbGVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsZWFySGFuZGxlcnMoKSB7XG4gICAgICAgIHNoYWtlLnN0b3BXYXRjaGluZygpO1xuICAgICAgICB0aGlzLl9zY3JlZW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl90YXBIYW5kbGVyKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2V0UmFuZG9tRGljZSh3cmFwKSB7XG4gICAgICAgIGNvbnN0IGRpY2VzID0gd3JhcC5xdWVyeVNlbGVjdG9yQWxsKCcuZGljZScpO1xuICAgICAgICBbXS5mb3JFYWNoLmNhbGwoZGljZXMsIGZ1bmN0aW9uKGRpY2UpIHtcbiAgICAgICAgICAgIGRpY2UuY2xhc3NMaXN0LnJlbW92ZSgnaXMtdmlzaWJsZScpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBudW0gPSBEaWNlLmdldERpY2VOdW0oKTtcbiAgICAgICAgZGljZXNbbnVtXS5jbGFzc0xpc3QuYWRkKCdpcy12aXNpYmxlJyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldERpY2VOdW0oKSB7XG4gICAgICAgIHJldHVybiBEaWNlLnJhbmRvbUludGVnZXIoMCwgNSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHJhbmRvbUludGVnZXIobWluLCBtYXgpIHtcbiAgICAgICAgbGV0IHJhbmQgPSBtaW4gLSAwLjUgKyBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpO1xuICAgICAgICByYW5kID0gTWF0aC5yb3VuZChyYW5kKTtcbiAgICAgICAgcmFuZCA9IE1hdGguYWJzKHJhbmQpO1xuICAgICAgICByZXR1cm4gcmFuZDtcbiAgICB9XG59XG5cbmxldCBkaWNlID0gbmV3IERpY2UoKTtcbmV4cG9ydCBkZWZhdWx0IGRpY2U7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXMvZGljZS5qcyIsImltcG9ydCBkaWNlIGZyb20gXCIuL2RpY2VcIjtcblxuY2xhc3MgU2V0dGluZ3Mge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBjb25zdCB0eXBlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3lhLWRpY2UtbW90aW9uLXR5cGUnKTtcbiAgICAgICAgdGhpcy5fdHlwZSA9IHR5cGUgPyB0eXBlIDogJ3NoYWtlJztcbiAgICB9XG5cbiAgICBiaW5kSGFuZGxlcnMoKSB7XG4gICAgICAgIHRoaXMuX2VsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V0dGluZ3MnKTtcbiAgICAgICAgdGhpcy5fY29udHJvbCA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvcignLnNldHRpbmdzX19idXR0b24nKTtcbiAgICAgICAgdGhpcy5fY29udGVudCA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvcignLnNldHRpbmdzX19jb250ZW50Jyk7XG4gICAgICAgIHRoaXMuX3R5cGVJbnB1dCA9IHRoaXMuX2NvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnLnNldHRpbmdzX19pbnB1dCcpO1xuXG4gICAgICAgIFNldHRpbmdzLl9zZXRUeXBlKHRoaXMuX3R5cGUpO1xuICAgICAgICBkaWNlLnN0YXJ0KHRoaXMuX3R5cGUpO1xuXG4gICAgICAgIHRoaXMuX2NvbnRyb2wuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9nZWFyTGlzdGVuZXIuYmluZCh0aGlzKSk7XG4gICAgICAgIFtdLmZvckVhY2guY2FsbCh0aGlzLl90eXBlSW5wdXQsIChpbnB1dCkgPT4ge1xuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBTZXR0aW5ncy5fdHlwZUlucHV0TGlzdGVuZXIpO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGNsZWFySGFuZGxlcnMoKSB7XG4gICAgICAgIHRoaXMuX2NvbnRyb2wucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9nZWFyTGlzdGVuZXIpO1xuICAgICAgICBbXS5mb3JFYWNoLmNhbGwodGhpcy5fdHlwZUlucHV0LCAoaW5wdXQpID0+IHtcbiAgICAgICAgICAgIGlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgU2V0dGluZ3MuX3R5cGVJbnB1dExpc3RlbmVyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIF90eXBlSW5wdXRMaXN0ZW5lcihldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgaWYoZXZlbnQudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgIGRpY2Uuc2V0VHlwZSh2YWwpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3lhLWRpY2UtbW90aW9uLXR5cGUnLCB2YWwpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBzdGF0aWMgX3NldFR5cGUodHlwZSkge1xuICAgICAgICBjb25zdCBjaGVja2VkSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0eXBlKTtcbiAgICAgICAgY2hlY2tlZElucHV0LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICdjaGVja2VkJyk7XG4gICAgfVxuXG4gICAgX2dlYXJMaXN0ZW5lcihldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgaWYgKHRoaXMuX2NvbnRlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy12aXNpYmxlJykpIHtcbiAgICAgICAgICAgIHRoaXMuX2hpZGVTZXR0aW5ncygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc2hvd1NldHRpbmdzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfc2hvd1NldHRpbmdzKCkge1xuICAgICAgICB0aGlzLl9jb250ZW50LmNsYXNzTGlzdC5hZGQoJ2lzLXZpc2libGUnKTtcbiAgICB9XG5cbiAgICBfaGlkZVNldHRpbmdzKCkge1xuICAgICAgICB0aGlzLl9jb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXZpc2libGUnKTtcbiAgICB9XG59XG5cbmNvbnN0IHNldHRpbmdzID0gbmV3IFNldHRpbmdzKCk7XG5leHBvcnQgZGVmYXVsdCBzZXR0aW5ncztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VzL3NldHRpbmdzLmpzIiwiY2xhc3MgU2hha2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgdGhpcy5fbGFzdCA9IHt9O1xuICAgICAgICAgICAgdGhpcy5fb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBmcmVxdWVuY3k6IDMwMFxuICAgICAgICAgICAgfTtcbiAgICB9XG5cbiAgICBfb25TdWNjZXNzKGFjY2VsZXJhdGlvbikge1xuICAgICAgICBsZXQgbGFzdCA9IHRoaXMuX2xhc3Q7XG5cbiAgICAgICAgaWYoIWxhc3QubGFzdFgpIHtcbiAgICAgICAgICAgIGxhc3QubGFzdFggPSBhY2NlbGVyYXRpb24ueDtcbiAgICAgICAgICAgIGxhc3QubGFzdFkgPSBhY2NlbGVyYXRpb24ueTtcbiAgICAgICAgICAgIGxhc3QubGFzdFogPSBhY2NlbGVyYXRpb24uejtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkZWx0YVggPSBNYXRoLmFicyhhY2NlbGVyYXRpb24ueCAtIGxhc3QubGFzdFgpO1xuICAgICAgICBsZXQgZGVsdGFZID0gTWF0aC5hYnMoYWNjZWxlcmF0aW9uLnkgLSBsYXN0Lmxhc3RZKTtcbiAgICAgICAgbGV0IGRlbHRhWiA9IE1hdGguYWJzKGFjY2VsZXJhdGlvbi56IC0gbGFzdC5sYXN0Wik7XG5cbiAgICAgICAgaWYoZGVsdGFYICsgZGVsdGFZICsgZGVsdGFaID4gMzUpIHtcbiAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrKCk7XG4gICAgICAgIH1cblxuICAgICAgICBsYXN0Lmxhc3RYID0gYWNjZWxlcmF0aW9uLng7XG4gICAgICAgIGxhc3QubGFzdFkgPSBhY2NlbGVyYXRpb24ueTtcbiAgICAgICAgbGFzdC5sYXN0WiA9IGFjY2VsZXJhdGlvbi56O1xuICAgIH1cblxuICAgIHN0YXRpYyBfb25FcnJvcigpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1NvbWV0aGluZyB3ZW50IHdyb25nJyk7XG4gICAgfVxuXG4gICAgc3RhcnRXYXRjaGluZyhjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICB0aGlzLl93YXRjaElEID0gbmF2aWdhdG9yLmFjY2VsZXJvbWV0ZXIud2F0Y2hBY2NlbGVyYXRpb24oXG4gICAgICAgICAgICB0aGlzLl9vblN1Y2Nlc3MuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIFNoYWtlLl9vbkVycm9yLFxuICAgICAgICAgICAgdGhpcy5fb3B0aW9uc1xuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0b3BXYXRjaGluZygpIHtcbiAgICAgICAgaWYgKHRoaXMuX3dhdGNoSUQpIHtcbiAgICAgICAgICAgIG5hdmlnYXRvci5hY2NlbGVyb21ldGVyLmNsZWFyV2F0Y2godGhpcy5fd2F0Y2hJRCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl93YXRjaElEID0gbnVsbDtcbiAgICB9XG59XG5cbmNvbnN0IHNoYWtlID0gbmV3IFNoYWtlO1xuZXhwb3J0IGRlZmF1bHQgc2hha2U7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXMvc2hha2UuanMiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanNcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=