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
        this._settingsHandler = this._settingsHandler.bind(this);
    }

    Dice.prototype.start = function start(type, vibrationBan) {
        this._type = type;
        this._vibroBan = vibrationBan;
        this._screen = document.getElementById('app');
        this._diceWraps = this._screen.querySelectorAll('.dice-wrap');
        this._settings = this._screen.querySelector('.settings__content');
        this.bindHandlers();
    };

    Dice.prototype._refreshDice = function _refreshDice() {
        var _this = this;

        this._settings.classList.remove('is-visible');

        this.clearHandlers();
        if (!this._vibroBan) {
            navigator.vibrate(1000);
        }

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

    Dice.prototype._settingsHandler = function _settingsHandler(e) {
        if (!e.target.closest('.settings')) {
            this._settings.classList.remove('is-visible');
        }
    };

    Dice.prototype.setType = function setType(type) {
        if (this._type !== type) {
            this.clearHandlers();
            this._type = type;
            this.bindHandlers();
        }
    };

    Dice.prototype.setVibro = function setVibro(ban) {
        if (this._vibroBan !== ban) {
            this.clearHandlers();
            this._vibroBan = ban;
            this.bindHandlers();
        }
    };

    Dice.prototype.bindHandlers = function bindHandlers() {
        if (this._type === 'shake') {
            __WEBPACK_IMPORTED_MODULE_1__shake__["a" /* default */].startWatching(dice._refreshDice.bind(this));
            this._screen.addEventListener('click', this._settingsHandler);
        } else {
            this._screen.addEventListener('click', this._tapHandler);
            this._screen.removeEventListener('click', this._settingsHandler);
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
        this._vibroBan = localStorage.getItem('ya-dice-vibration-ban');

        this._gearListener = this._gearListener.bind(this);
    }

    Settings.prototype.bindHandlers = function bindHandlers() {
        this._elem = document.querySelector('.settings');
        this._control = this._elem.querySelector('.settings__button');
        this._content = this._elem.querySelector('.settings__content');
        this._typeInput = this._content.querySelectorAll('.settings__type .settings__input');
        this._vibroInput = document.getElementById('vibro');

        Settings._setType(this._type);
        if (this._vibroBan) {
            Settings._setVibroBan(this._vibroInput);
        }

        __WEBPACK_IMPORTED_MODULE_1__dice__["a" /* default */].start(this._type, this._vibroBan);

        this._control.addEventListener('click', this._gearListener);
        [].forEach.call(this._typeInput, function (input) {
            input.addEventListener('click', Settings._typeInputListener);
        });
        this._vibroInput.addEventListener('click', Settings._vibroListener);
    };

    Settings.prototype.clearHandlers = function clearHandlers() {
        this._control.removeEventListener('click', this._gearListener);
        this._vibroInput.removeEventListener('click', Settings._vibroListener);

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

    Settings._setVibroBan = function _setVibroBan(input) {
        input.setAttribute('checked', 'checked');
    };

    Settings.prototype._gearListener = function _gearListener(event) {
        event.stopPropagation();
        if (this._content.classList.contains('is-visible')) {
            this._hideSettings();
        } else {
            this._showSettings();
        }
    };

    Settings._vibroListener = function _vibroListener(event) {
        event.stopPropagation();
        if (event.target.checked) {
            __WEBPACK_IMPORTED_MODULE_1__dice__["a" /* default */].setVibro(true);
            localStorage.setItem('ya-dice-vibration-ban', 'banned');
        } else {
            __WEBPACK_IMPORTED_MODULE_1__dice__["a" /* default */].setVibro(false);
            localStorage.removeItem('ya-dice-vibration-ban');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zY3NzL3N0eWxlcy5zY3NzP2JmYTEiLCJ3ZWJwYWNrOi8vLy4vZXMvZGljZS5qcyIsIndlYnBhY2s6Ly8vLi9lcy9zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9lcy9zaGFrZS5qcyIsIndlYnBhY2s6Ly8vLi4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiXSwibmFtZXMiOlsiQXBwIiwic3RhcnQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbkRldmljZVJlYWR5Iiwic2V0dGluZ3MiLCJiaW5kSGFuZGxlcnMiLCJhcHAiLCJEaWNlIiwiX2FuaW1hdGlvbkR1cmF0aW9uIiwiX2FuaW1hdGlvbkludGVydmFsIiwiX3JlZnJlc2hEaWNlIiwiYmluZCIsIl90YXBIYW5kbGVyIiwiX3NldHRpbmdzSGFuZGxlciIsInR5cGUiLCJ2aWJyYXRpb25CYW4iLCJfdHlwZSIsIl92aWJyb0JhbiIsIl9zY3JlZW4iLCJnZXRFbGVtZW50QnlJZCIsIl9kaWNlV3JhcHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiX3NldHRpbmdzIiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInJlbW92ZSIsImNsZWFySGFuZGxlcnMiLCJuYXZpZ2F0b3IiLCJ2aWJyYXRlIiwidGltZXJJZCIsInNldEludGVydmFsIiwiZm9yRWFjaCIsImNhbGwiLCJkaWNlV3JhcCIsInNldFJhbmRvbURpY2UiLCJzZXRUaW1lb3V0IiwiY2xlYXJJbnRlcnZhbCIsImUiLCJ0YXJnZXQiLCJjb250YWlucyIsImNsb3Nlc3QiLCJzZXRUeXBlIiwic2V0Vmlicm8iLCJiYW4iLCJzaGFrZSIsInN0YXJ0V2F0Y2hpbmciLCJkaWNlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN0b3BXYXRjaGluZyIsIndyYXAiLCJkaWNlcyIsIm51bSIsImdldERpY2VOdW0iLCJhZGQiLCJyYW5kb21JbnRlZ2VyIiwibWluIiwibWF4IiwicmFuZCIsIk1hdGgiLCJyYW5kb20iLCJyb3VuZCIsImFicyIsIlNldHRpbmdzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIl9nZWFyTGlzdGVuZXIiLCJfZWxlbSIsIl9jb250cm9sIiwiX2NvbnRlbnQiLCJfdHlwZUlucHV0IiwiX3ZpYnJvSW5wdXQiLCJfc2V0VHlwZSIsIl9zZXRWaWJyb0JhbiIsImlucHV0IiwiX3R5cGVJbnB1dExpc3RlbmVyIiwiX3ZpYnJvTGlzdGVuZXIiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImNoZWNrZWQiLCJ2YWwiLCJ2YWx1ZSIsInNldEl0ZW0iLCJjaGVja2VkSW5wdXQiLCJzZXRBdHRyaWJ1dGUiLCJfaGlkZVNldHRpbmdzIiwiX3Nob3dTZXR0aW5ncyIsInJlbW92ZUl0ZW0iLCJTaGFrZSIsIl9sYXN0IiwiX29wdGlvbnMiLCJmcmVxdWVuY3kiLCJfb25TdWNjZXNzIiwiYWNjZWxlcmF0aW9uIiwibGFzdCIsImxhc3RYIiwieCIsImxhc3RZIiwieSIsImxhc3RaIiwieiIsImRlbHRhWCIsImRlbHRhWSIsImRlbHRhWiIsIl9jYWxsYmFjayIsIl9vbkVycm9yIiwiY29uc29sZSIsImxvZyIsImNhbGxiYWNrIiwiX3dhdGNoSUQiLCJhY2NlbGVyb21ldGVyIiwid2F0Y2hBY2NlbGVyYXRpb24iLCJjbGVhcldhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkE7QUFDQTs7SUFFTUEsRzs7Ozs7a0JBRUZDLEssb0JBQVE7QUFDSkMsaUJBQVNDLGdCQUFULENBQTBCLGFBQTFCLEVBQXlDO0FBQUEsbUJBQU1ILElBQUlJLGFBQUosRUFBTjtBQUFBLFNBQXpDLEVBQW9FLEtBQXBFO0FBQ0gsSzs7UUFFTUEsYSw0QkFBZ0I7QUFDbkJDLFFBQUEsMERBQUFBLENBQVNDLFlBQVQ7QUFDSCxLOzs7OztBQUdMLElBQUlDLE1BQU0sSUFBSVAsR0FBSixFQUFWO0FBQ0FPLElBQUlO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QUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdERBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRSIsImZpbGUiOiJqcy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCBcImJhYmVsLXBvbHlmaWxsXCI7XG5pbXBvcnQgc2V0dGluZ3MgZnJvbSAnLi9zZXR0aW5ncyc7XG5cbmNsYXNzIEFwcCB7XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRldmljZXJlYWR5XCIsICgpID0+IEFwcC5vbkRldmljZVJlYWR5KCksIGZhbHNlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgb25EZXZpY2VSZWFkeSgpIHtcbiAgICAgICAgc2V0dGluZ3MuYmluZEhhbmRsZXJzKCk7XG4gICAgfVxufVxuXG5sZXQgYXBwID0gbmV3IEFwcCgpO1xuYXBwLnN0YXJ0KCk7XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXMvaW5kZXguanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2Nzcy9zdHlsZXMuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBzaGFrZSBmcm9tICcuL3NoYWtlJztcblxuY2xhc3MgRGljZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2FuaW1hdGlvbkR1cmF0aW9uID0gMTAwMDtcbiAgICAgICAgdGhpcy5fYW5pbWF0aW9uSW50ZXJ2YWwgPSAxMDA7XG4gICAgICAgIHRoaXMuX3JlZnJlc2hEaWNlID0gdGhpcy5fcmVmcmVzaERpY2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5fdGFwSGFuZGxlciA9IHRoaXMuX3RhcEhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5fc2V0dGluZ3NIYW5kbGVyID0gdGhpcy5fc2V0dGluZ3NIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgc3RhcnQodHlwZSwgdmlicmF0aW9uQmFuKSB7XG4gICAgICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLl92aWJyb0JhbiA9IHZpYnJhdGlvbkJhbjtcbiAgICAgICAgdGhpcy5fc2NyZWVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xuICAgICAgICB0aGlzLl9kaWNlV3JhcHMgPSB0aGlzLl9zY3JlZW4ucXVlcnlTZWxlY3RvckFsbCgnLmRpY2Utd3JhcCcpO1xuICAgICAgICB0aGlzLl9zZXR0aW5ncyA9IHRoaXMuX3NjcmVlbi5xdWVyeVNlbGVjdG9yKCcuc2V0dGluZ3NfX2NvbnRlbnQnKTtcbiAgICAgICAgdGhpcy5iaW5kSGFuZGxlcnMoKTtcbiAgICB9XG5cbiAgICBfcmVmcmVzaERpY2UoKSB7XG4gICAgICAgIHRoaXMuX3NldHRpbmdzLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXZpc2libGUnKTtcblxuICAgICAgICB0aGlzLmNsZWFySGFuZGxlcnMoKTtcbiAgICAgICAgaWYgKCF0aGlzLl92aWJyb0Jhbikge1xuICAgICAgICAgICAgbmF2aWdhdG9yLnZpYnJhdGUoMTAwMCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBlbXVsYXRlIGFuaW1hdGlvblxuICAgICAgICBjb25zdCB0aW1lcklkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgW10uZm9yRWFjaC5jYWxsKHRoaXMuX2RpY2VXcmFwcywgKGRpY2VXcmFwKSA9PiB7XG4gICAgICAgICAgICAgICAgRGljZS5zZXRSYW5kb21EaWNlKGRpY2VXcmFwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCB0aGlzLl9hbmltYXRpb25JbnRlcnZhbCk7XG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXJJZCk7XG4gICAgICAgIH0sIHRoaXMuX2FuaW1hdGlvbkR1cmF0aW9uKTtcblxuICAgICAgICB0aGlzLmJpbmRIYW5kbGVycygpO1xuICAgIH1cblxuICAgIF90YXBIYW5kbGVyKGUpIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY29udGVudCcpIHx8IGUudGFyZ2V0LmNsb3Nlc3QoJy5kaWNlLXdyYXAnKSkge1xuICAgICAgICAgICAgdGhpcy5fcmVmcmVzaERpY2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9zZXR0aW5nc0hhbmRsZXIoZSkge1xuICAgICAgICBpZiAoIWUudGFyZ2V0LmNsb3Nlc3QoJy5zZXR0aW5ncycpKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXR0aW5ncy5jbGFzc0xpc3QucmVtb3ZlKCdpcy12aXNpYmxlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRUeXBlKHR5cGUpIHtcbiAgICAgICAgaWYgKHRoaXMuX3R5cGUgIT09IHR5cGUpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJIYW5kbGVycygpO1xuICAgICAgICAgICAgdGhpcy5fdHlwZSA9IHR5cGU7XG4gICAgICAgICAgICB0aGlzLmJpbmRIYW5kbGVycygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0Vmlicm8oYmFuKSB7XG4gICAgICAgIGlmICh0aGlzLl92aWJyb0JhbiAhPT0gYmFuKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFySGFuZGxlcnMoKTtcbiAgICAgICAgICAgIHRoaXMuX3ZpYnJvQmFuID0gYmFuO1xuICAgICAgICAgICAgdGhpcy5iaW5kSGFuZGxlcnMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJpbmRIYW5kbGVycygpIHtcbiAgICAgICAgaWYgKHRoaXMuX3R5cGUgPT09ICdzaGFrZScpIHtcbiAgICAgICAgICAgIHNoYWtlLnN0YXJ0V2F0Y2hpbmcoZGljZS5fcmVmcmVzaERpY2UuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB0aGlzLl9zY3JlZW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9zZXR0aW5nc0hhbmRsZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc2NyZWVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fdGFwSGFuZGxlcik7XG4gICAgICAgICAgICB0aGlzLl9zY3JlZW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9zZXR0aW5nc0hhbmRsZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xlYXJIYW5kbGVycygpIHtcbiAgICAgICAgc2hha2Uuc3RvcFdhdGNoaW5nKCk7XG4gICAgICAgIHRoaXMuX3NjcmVlbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX3RhcEhhbmRsZXIpO1xuICAgIH1cblxuICAgIHN0YXRpYyBzZXRSYW5kb21EaWNlKHdyYXApIHtcbiAgICAgICAgY29uc3QgZGljZXMgPSB3cmFwLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kaWNlJyk7XG4gICAgICAgIFtdLmZvckVhY2guY2FsbChkaWNlcywgZnVuY3Rpb24oZGljZSkge1xuICAgICAgICAgICAgZGljZS5jbGFzc0xpc3QucmVtb3ZlKCdpcy12aXNpYmxlJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IG51bSA9IERpY2UuZ2V0RGljZU51bSgpO1xuICAgICAgICBkaWNlc1tudW1dLmNsYXNzTGlzdC5hZGQoJ2lzLXZpc2libGUnKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0RGljZU51bSgpIHtcbiAgICAgICAgcmV0dXJuIERpY2UucmFuZG9tSW50ZWdlcigwLCA1KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmFuZG9tSW50ZWdlcihtaW4sIG1heCkge1xuICAgICAgICBsZXQgcmFuZCA9IG1pbiAtIDAuNSArIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSk7XG4gICAgICAgIHJhbmQgPSBNYXRoLnJvdW5kKHJhbmQpO1xuICAgICAgICByYW5kID0gTWF0aC5hYnMocmFuZCk7XG4gICAgICAgIHJldHVybiByYW5kO1xuICAgIH1cbn1cblxubGV0IGRpY2UgPSBuZXcgRGljZSgpO1xuZXhwb3J0IGRlZmF1bHQgZGljZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lcy9kaWNlLmpzIiwiaW1wb3J0IGRpY2UgZnJvbSBcIi4vZGljZVwiO1xuXG5jbGFzcyBTZXR0aW5ncyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgneWEtZGljZS1tb3Rpb24tdHlwZScpO1xuICAgICAgICB0aGlzLl90eXBlID0gdHlwZSA/IHR5cGUgOiAnc2hha2UnO1xuICAgICAgICB0aGlzLl92aWJyb0JhbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd5YS1kaWNlLXZpYnJhdGlvbi1iYW4nKTtcblxuICAgICAgICB0aGlzLl9nZWFyTGlzdGVuZXIgPSB0aGlzLl9nZWFyTGlzdGVuZXIuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBiaW5kSGFuZGxlcnMoKSB7XG4gICAgICAgIHRoaXMuX2VsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V0dGluZ3MnKTtcbiAgICAgICAgdGhpcy5fY29udHJvbCA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvcignLnNldHRpbmdzX19idXR0b24nKTtcbiAgICAgICAgdGhpcy5fY29udGVudCA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvcignLnNldHRpbmdzX19jb250ZW50Jyk7XG4gICAgICAgIHRoaXMuX3R5cGVJbnB1dCA9IHRoaXMuX2NvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnLnNldHRpbmdzX190eXBlIC5zZXR0aW5nc19faW5wdXQnKTtcbiAgICAgICAgdGhpcy5fdmlicm9JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWJybycpO1xuXG4gICAgICAgIFNldHRpbmdzLl9zZXRUeXBlKHRoaXMuX3R5cGUpO1xuICAgICAgICBpZiAodGhpcy5fdmlicm9CYW4pIHtcbiAgICAgICAgICAgIFNldHRpbmdzLl9zZXRWaWJyb0Jhbih0aGlzLl92aWJyb0lucHV0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpY2Uuc3RhcnQodGhpcy5fdHlwZSwgdGhpcy5fdmlicm9CYW4pO1xuXG4gICAgICAgIHRoaXMuX2NvbnRyb2wuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9nZWFyTGlzdGVuZXIpO1xuICAgICAgICBbXS5mb3JFYWNoLmNhbGwodGhpcy5fdHlwZUlucHV0LCAoaW5wdXQpID0+IHtcbiAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgU2V0dGluZ3MuX3R5cGVJbnB1dExpc3RlbmVyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3ZpYnJvSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBTZXR0aW5ncy5fdmlicm9MaXN0ZW5lcik7XG5cbiAgICB9XG5cbiAgICBjbGVhckhhbmRsZXJzKCkge1xuICAgICAgICB0aGlzLl9jb250cm9sLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fZ2Vhckxpc3RlbmVyKTtcbiAgICAgICAgdGhpcy5fdmlicm9JbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIFNldHRpbmdzLl92aWJyb0xpc3RlbmVyKTtcblxuICAgICAgICBbXS5mb3JFYWNoLmNhbGwodGhpcy5fdHlwZUlucHV0LCAoaW5wdXQpID0+IHtcbiAgICAgICAgICAgIGlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgU2V0dGluZ3MuX3R5cGVJbnB1dExpc3RlbmVyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIF90eXBlSW5wdXRMaXN0ZW5lcihldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgaWYoZXZlbnQudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgIGRpY2Uuc2V0VHlwZSh2YWwpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3lhLWRpY2UtbW90aW9uLXR5cGUnLCB2YWwpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBzdGF0aWMgX3NldFR5cGUodHlwZSkge1xuICAgICAgICBjb25zdCBjaGVja2VkSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0eXBlKTtcbiAgICAgICAgY2hlY2tlZElucHV0LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICdjaGVja2VkJyk7XG4gICAgfVxuXG4gICAgc3RhdGljIF9zZXRWaWJyb0JhbihpbnB1dCkge1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpO1xuICAgIH1cblxuICAgIF9nZWFyTGlzdGVuZXIoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGlmICh0aGlzLl9jb250ZW50LmNsYXNzTGlzdC5jb250YWlucygnaXMtdmlzaWJsZScpKSB7XG4gICAgICAgICAgICB0aGlzLl9oaWRlU2V0dGluZ3MoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3Nob3dTZXR0aW5ncygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIF92aWJyb0xpc3RlbmVyKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGRpY2Uuc2V0Vmlicm8odHJ1ZSk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgneWEtZGljZS12aWJyYXRpb24tYmFuJywgJ2Jhbm5lZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGljZS5zZXRWaWJybyhmYWxzZSk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgneWEtZGljZS12aWJyYXRpb24tYmFuJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfc2hvd1NldHRpbmdzKCkge1xuICAgICAgICB0aGlzLl9jb250ZW50LmNsYXNzTGlzdC5hZGQoJ2lzLXZpc2libGUnKTtcbiAgICB9XG5cbiAgICBfaGlkZVNldHRpbmdzKCkge1xuICAgICAgICB0aGlzLl9jb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXZpc2libGUnKTtcbiAgICB9XG59XG5cbmNvbnN0IHNldHRpbmdzID0gbmV3IFNldHRpbmdzKCk7XG5leHBvcnQgZGVmYXVsdCBzZXR0aW5ncztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VzL3NldHRpbmdzLmpzIiwiY2xhc3MgU2hha2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgdGhpcy5fbGFzdCA9IHt9O1xuICAgICAgICAgICAgdGhpcy5fb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBmcmVxdWVuY3k6IDMwMFxuICAgICAgICAgICAgfTtcbiAgICB9XG5cbiAgICBfb25TdWNjZXNzKGFjY2VsZXJhdGlvbikge1xuICAgICAgICBsZXQgbGFzdCA9IHRoaXMuX2xhc3Q7XG5cbiAgICAgICAgaWYoIWxhc3QubGFzdFgpIHtcbiAgICAgICAgICAgIGxhc3QubGFzdFggPSBhY2NlbGVyYXRpb24ueDtcbiAgICAgICAgICAgIGxhc3QubGFzdFkgPSBhY2NlbGVyYXRpb24ueTtcbiAgICAgICAgICAgIGxhc3QubGFzdFogPSBhY2NlbGVyYXRpb24uejtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkZWx0YVggPSBNYXRoLmFicyhhY2NlbGVyYXRpb24ueCAtIGxhc3QubGFzdFgpO1xuICAgICAgICBsZXQgZGVsdGFZID0gTWF0aC5hYnMoYWNjZWxlcmF0aW9uLnkgLSBsYXN0Lmxhc3RZKTtcbiAgICAgICAgbGV0IGRlbHRhWiA9IE1hdGguYWJzKGFjY2VsZXJhdGlvbi56IC0gbGFzdC5sYXN0Wik7XG5cbiAgICAgICAgaWYoZGVsdGFYICsgZGVsdGFZICsgZGVsdGFaID4gMzUpIHtcbiAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrKCk7XG4gICAgICAgIH1cblxuICAgICAgICBsYXN0Lmxhc3RYID0gYWNjZWxlcmF0aW9uLng7XG4gICAgICAgIGxhc3QubGFzdFkgPSBhY2NlbGVyYXRpb24ueTtcbiAgICAgICAgbGFzdC5sYXN0WiA9IGFjY2VsZXJhdGlvbi56O1xuICAgIH1cblxuICAgIHN0YXRpYyBfb25FcnJvcigpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1NvbWV0aGluZyB3ZW50IHdyb25nJyk7XG4gICAgfVxuXG4gICAgc3RhcnRXYXRjaGluZyhjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICB0aGlzLl93YXRjaElEID0gbmF2aWdhdG9yLmFjY2VsZXJvbWV0ZXIud2F0Y2hBY2NlbGVyYXRpb24oXG4gICAgICAgICAgICB0aGlzLl9vblN1Y2Nlc3MuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIFNoYWtlLl9vbkVycm9yLFxuICAgICAgICAgICAgdGhpcy5fb3B0aW9uc1xuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0b3BXYXRjaGluZygpIHtcbiAgICAgICAgaWYgKHRoaXMuX3dhdGNoSUQpIHtcbiAgICAgICAgICAgIG5hdmlnYXRvci5hY2NlbGVyb21ldGVyLmNsZWFyV2F0Y2godGhpcy5fd2F0Y2hJRCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl93YXRjaElEID0gbnVsbDtcbiAgICB9XG59XG5cbmNvbnN0IHNoYWtlID0gbmV3IFNoYWtlO1xuZXhwb3J0IGRlZmF1bHQgc2hha2U7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXMvc2hha2UuanMiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanNcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=