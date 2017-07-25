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

    Dice.prototype.start = function start(type, vibrationBan) {
        this._type = type;
        this._vibroBan = vibrationBan;
        this._screen = document.getElementById('app');
        this._diceWraps = this._screen.querySelectorAll('.dice-wrap');
        this.bindHandlers();
    };

    Dice.prototype._refreshDice = function _refreshDice() {
        var _this = this;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zY3NzL3N0eWxlcy5zY3NzP2JmYTEiLCJ3ZWJwYWNrOi8vLy4vZXMvZGljZS5qcyIsIndlYnBhY2s6Ly8vLi9lcy9zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9lcy9zaGFrZS5qcyIsIndlYnBhY2s6Ly8vLi4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiXSwibmFtZXMiOlsiQXBwIiwic3RhcnQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbkRldmljZVJlYWR5Iiwic2V0dGluZ3MiLCJiaW5kSGFuZGxlcnMiLCJhcHAiLCJEaWNlIiwiX2FuaW1hdGlvbkR1cmF0aW9uIiwiX2FuaW1hdGlvbkludGVydmFsIiwiX3JlZnJlc2hEaWNlIiwiYmluZCIsIl90YXBIYW5kbGVyIiwidHlwZSIsInZpYnJhdGlvbkJhbiIsIl90eXBlIiwiX3ZpYnJvQmFuIiwiX3NjcmVlbiIsImdldEVsZW1lbnRCeUlkIiwiX2RpY2VXcmFwcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjbGVhckhhbmRsZXJzIiwibmF2aWdhdG9yIiwidmlicmF0ZSIsInRpbWVySWQiLCJzZXRJbnRlcnZhbCIsImZvckVhY2giLCJjYWxsIiwiZGljZVdyYXAiLCJzZXRSYW5kb21EaWNlIiwic2V0VGltZW91dCIsImNsZWFySW50ZXJ2YWwiLCJlIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJjbG9zZXN0Iiwic2V0VHlwZSIsInNldFZpYnJvIiwiYmFuIiwic2hha2UiLCJzdGFydFdhdGNoaW5nIiwiZGljZSIsInN0b3BXYXRjaGluZyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ3cmFwIiwiZGljZXMiLCJyZW1vdmUiLCJudW0iLCJnZXREaWNlTnVtIiwiYWRkIiwicmFuZG9tSW50ZWdlciIsIm1pbiIsIm1heCIsInJhbmQiLCJNYXRoIiwicmFuZG9tIiwicm91bmQiLCJhYnMiLCJTZXR0aW5ncyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJfZ2Vhckxpc3RlbmVyIiwiX2VsZW0iLCJxdWVyeVNlbGVjdG9yIiwiX2NvbnRyb2wiLCJfY29udGVudCIsIl90eXBlSW5wdXQiLCJfdmlicm9JbnB1dCIsIl9zZXRUeXBlIiwiX3NldFZpYnJvQmFuIiwiaW5wdXQiLCJfdHlwZUlucHV0TGlzdGVuZXIiLCJfdmlicm9MaXN0ZW5lciIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiY2hlY2tlZCIsInZhbCIsInZhbHVlIiwic2V0SXRlbSIsImNoZWNrZWRJbnB1dCIsInNldEF0dHJpYnV0ZSIsIl9oaWRlU2V0dGluZ3MiLCJfc2hvd1NldHRpbmdzIiwicmVtb3ZlSXRlbSIsIlNoYWtlIiwiX2xhc3QiLCJfb3B0aW9ucyIsImZyZXF1ZW5jeSIsIl9vblN1Y2Nlc3MiLCJhY2NlbGVyYXRpb24iLCJsYXN0IiwibGFzdFgiLCJ4IiwibGFzdFkiLCJ5IiwibGFzdFoiLCJ6IiwiZGVsdGFYIiwiZGVsdGFZIiwiZGVsdGFaIiwiX2NhbGxiYWNrIiwiX29uRXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY2FsbGJhY2siLCJfd2F0Y2hJRCIsImFjY2VsZXJvbWV0ZXIiLCJ3YXRjaEFjY2VsZXJhdGlvbiIsImNsZWFyV2F0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQTtBQUNBOztJQUVNQSxHOzs7OztrQkFFRkMsSyxvQkFBUTtBQUNKQyxpQkFBU0MsZ0JBQVQsQ0FBMEIsYUFBMUIsRUFBeUM7QUFBQSxtQkFBTUgsSUFBSUksYUFBSixFQUFOO0FBQUEsU0FBekMsRUFBb0UsS0FBcEU7QUFDSCxLOztRQUVNQSxhLDRCQUFnQjtBQUNuQkMsUUFBQSwwREFBQUEsQ0FBU0MsWUFBVDtBQUNILEs7Ozs7O0FBR0wsSUFBSUMsTUFBTSxJQUFJUCxHQUFKLEVBQVY7QUFDQU8sSUFBSU4sS0FBSixHOzs7Ozs7O0FDbENBLHlDOzs7Ozs7Ozs7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QUFDSCxLOztvQkFFRC9ELGEsMEJBQWNnRSxRLEVBQVU7QUFDcEIsYUFBS0osU0FBTCxHQUFpQkksUUFBakI7QUFDQSxhQUFLQyxRQUFMLEdBQWdCcEYsVUFBVXFGLGFBQVYsQ0FBd0JDLGlCQUF4QixDQUNaLEtBQUtuQixVQUFMLENBQWdCOUUsSUFBaEIsQ0FBcUIsSUFBckIsQ0FEWSxFQUVaMEUsTUFBTWlCLFFBRk0sRUFHWixLQUFLZixRQUhPLENBQWhCO0FBS0gsSzs7b0JBRUQ1QyxZLDJCQUFlO0FBQ1gsWUFBSSxLQUFLK0QsUUFBVCxFQUFtQjtBQUNmcEYsc0JBQVVxRixhQUFWLENBQXdCRSxVQUF4QixDQUFtQyxLQUFLSCxRQUF4QztBQUNIOztBQUVELGFBQUtBLFFBQUwsR0FBZ0IsSUFBaEI7QUFDSCxLOzs7OztBQUdMLElBQU1sRSxRQUFRLElBQUk2QyxLQUFKLEVBQWQ7QUFDQSx5REFBZTdDLEtBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0REE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFIiwiZmlsZSI6ImpzL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IFwiYmFiZWwtcG9seWZpbGxcIjtcbmltcG9ydCBzZXR0aW5ncyBmcm9tICcuL3NldHRpbmdzJztcblxuY2xhc3MgQXBwIHtcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZGV2aWNlcmVhZHlcIiwgKCkgPT4gQXBwLm9uRGV2aWNlUmVhZHkoKSwgZmFsc2UpO1xuICAgIH1cblxuICAgIHN0YXRpYyBvbkRldmljZVJlYWR5KCkge1xuICAgICAgICBzZXR0aW5ncy5iaW5kSGFuZGxlcnMoKTtcbiAgICB9XG59XG5cbmxldCBhcHAgPSBuZXcgQXBwKCk7XG5hcHAuc3RhcnQoKTtcblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lcy9pbmRleC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zY3NzL3N0eWxlcy5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHNoYWtlIGZyb20gJy4vc2hha2UnO1xuXG5jbGFzcyBEaWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fYW5pbWF0aW9uRHVyYXRpb24gPSAxMDAwO1xuICAgICAgICB0aGlzLl9hbmltYXRpb25JbnRlcnZhbCA9IDEwMDtcbiAgICAgICAgdGhpcy5fcmVmcmVzaERpY2UgPSB0aGlzLl9yZWZyZXNoRGljZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl90YXBIYW5kbGVyID0gdGhpcy5fdGFwSGFuZGxlci5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHN0YXJ0KHR5cGUsIHZpYnJhdGlvbkJhbikge1xuICAgICAgICB0aGlzLl90eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5fdmlicm9CYW4gPSB2aWJyYXRpb25CYW47XG4gICAgICAgIHRoaXMuX3NjcmVlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKTtcbiAgICAgICAgdGhpcy5fZGljZVdyYXBzID0gdGhpcy5fc2NyZWVuLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kaWNlLXdyYXAnKTtcbiAgICAgICAgdGhpcy5iaW5kSGFuZGxlcnMoKTtcbiAgICB9XG5cbiAgICBfcmVmcmVzaERpY2UoKSB7XG4gICAgICAgIHRoaXMuY2xlYXJIYW5kbGVycygpO1xuICAgICAgICBpZiAoIXRoaXMuX3ZpYnJvQmFuKSB7XG4gICAgICAgICAgICBuYXZpZ2F0b3IudmlicmF0ZSgxMDAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGVtdWxhdGUgYW5pbWF0aW9uXG4gICAgICAgIGNvbnN0IHRpbWVySWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBbXS5mb3JFYWNoLmNhbGwodGhpcy5fZGljZVdyYXBzLCAoZGljZVdyYXApID0+IHtcbiAgICAgICAgICAgICAgICBEaWNlLnNldFJhbmRvbURpY2UoZGljZVdyYXApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIHRoaXMuX2FuaW1hdGlvbkludGVydmFsKTtcblxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcklkKTtcbiAgICAgICAgfSwgdGhpcy5fYW5pbWF0aW9uRHVyYXRpb24pO1xuXG4gICAgICAgIHRoaXMuYmluZEhhbmRsZXJzKCk7XG4gICAgfVxuXG4gICAgX3RhcEhhbmRsZXIoZSkge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb250ZW50JykgfHwgZS50YXJnZXQuY2xvc2VzdCgnLmRpY2Utd3JhcCcpKSB7XG4gICAgICAgICAgICB0aGlzLl9yZWZyZXNoRGljZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0VHlwZSh0eXBlKSB7XG4gICAgICAgIGlmICh0aGlzLl90eXBlICE9PSB0eXBlKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFySGFuZGxlcnMoKTtcbiAgICAgICAgICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xuICAgICAgICAgICAgdGhpcy5iaW5kSGFuZGxlcnMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldFZpYnJvKGJhbikge1xuICAgICAgICBpZiAodGhpcy5fdmlicm9CYW4gIT09IGJhbikge1xuICAgICAgICAgICAgdGhpcy5jbGVhckhhbmRsZXJzKCk7XG4gICAgICAgICAgICB0aGlzLl92aWJyb0JhbiA9IGJhbjtcbiAgICAgICAgICAgIHRoaXMuYmluZEhhbmRsZXJzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiaW5kSGFuZGxlcnMoKSB7XG4gICAgICAgIGlmICh0aGlzLl90eXBlID09PSAnc2hha2UnKSB7XG4gICAgICAgICAgICBzaGFrZS5zdGFydFdhdGNoaW5nKGRpY2UuX3JlZnJlc2hEaWNlLmJpbmQodGhpcykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc2NyZWVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fdGFwSGFuZGxlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGVhckhhbmRsZXJzKCkge1xuICAgICAgICBzaGFrZS5zdG9wV2F0Y2hpbmcoKTtcbiAgICAgICAgdGhpcy5fc2NyZWVuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fdGFwSGFuZGxlcik7XG4gICAgfVxuXG4gICAgc3RhdGljIHNldFJhbmRvbURpY2Uod3JhcCkge1xuICAgICAgICBjb25zdCBkaWNlcyA9IHdyYXAucXVlcnlTZWxlY3RvckFsbCgnLmRpY2UnKTtcbiAgICAgICAgW10uZm9yRWFjaC5jYWxsKGRpY2VzLCBmdW5jdGlvbihkaWNlKSB7XG4gICAgICAgICAgICBkaWNlLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXZpc2libGUnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgbnVtID0gRGljZS5nZXREaWNlTnVtKCk7XG4gICAgICAgIGRpY2VzW251bV0uY2xhc3NMaXN0LmFkZCgnaXMtdmlzaWJsZScpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXREaWNlTnVtKCkge1xuICAgICAgICByZXR1cm4gRGljZS5yYW5kb21JbnRlZ2VyKDAsIDUpO1xuICAgIH1cblxuICAgIHN0YXRpYyByYW5kb21JbnRlZ2VyKG1pbiwgbWF4KSB7XG4gICAgICAgIGxldCByYW5kID0gbWluIC0gMC41ICsgTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKTtcbiAgICAgICAgcmFuZCA9IE1hdGgucm91bmQocmFuZCk7XG4gICAgICAgIHJhbmQgPSBNYXRoLmFicyhyYW5kKTtcbiAgICAgICAgcmV0dXJuIHJhbmQ7XG4gICAgfVxufVxuXG5sZXQgZGljZSA9IG5ldyBEaWNlKCk7XG5leHBvcnQgZGVmYXVsdCBkaWNlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VzL2RpY2UuanMiLCJpbXBvcnQgZGljZSBmcm9tIFwiLi9kaWNlXCI7XG5cbmNsYXNzIFNldHRpbmdzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgY29uc3QgdHlwZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd5YS1kaWNlLW1vdGlvbi10eXBlJyk7XG4gICAgICAgIHRoaXMuX3R5cGUgPSB0eXBlID8gdHlwZSA6ICdzaGFrZSc7XG4gICAgICAgIHRoaXMuX3ZpYnJvQmFuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3lhLWRpY2UtdmlicmF0aW9uLWJhbicpO1xuXG4gICAgICAgIHRoaXMuX2dlYXJMaXN0ZW5lciA9IHRoaXMuX2dlYXJMaXN0ZW5lci5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGJpbmRIYW5kbGVycygpIHtcbiAgICAgICAgdGhpcy5fZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXR0aW5ncycpO1xuICAgICAgICB0aGlzLl9jb250cm9sID0gdGhpcy5fZWxlbS5xdWVyeVNlbGVjdG9yKCcuc2V0dGluZ3NfX2J1dHRvbicpO1xuICAgICAgICB0aGlzLl9jb250ZW50ID0gdGhpcy5fZWxlbS5xdWVyeVNlbGVjdG9yKCcuc2V0dGluZ3NfX2NvbnRlbnQnKTtcbiAgICAgICAgdGhpcy5fdHlwZUlucHV0ID0gdGhpcy5fY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2V0dGluZ3NfX3R5cGUgLnNldHRpbmdzX19pbnB1dCcpO1xuICAgICAgICB0aGlzLl92aWJyb0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpYnJvJyk7XG5cbiAgICAgICAgU2V0dGluZ3MuX3NldFR5cGUodGhpcy5fdHlwZSk7XG4gICAgICAgIGlmICh0aGlzLl92aWJyb0Jhbikge1xuICAgICAgICAgICAgU2V0dGluZ3MuX3NldFZpYnJvQmFuKHRoaXMuX3ZpYnJvSW5wdXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGljZS5zdGFydCh0aGlzLl90eXBlLCB0aGlzLl92aWJyb0Jhbik7XG5cbiAgICAgICAgdGhpcy5fY29udHJvbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2dlYXJMaXN0ZW5lcik7XG4gICAgICAgIFtdLmZvckVhY2guY2FsbCh0aGlzLl90eXBlSW5wdXQsIChpbnB1dCkgPT4ge1xuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBTZXR0aW5ncy5fdHlwZUlucHV0TGlzdGVuZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fdmlicm9JbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFNldHRpbmdzLl92aWJyb0xpc3RlbmVyKTtcblxuICAgIH1cblxuICAgIGNsZWFySGFuZGxlcnMoKSB7XG4gICAgICAgIHRoaXMuX2NvbnRyb2wucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9nZWFyTGlzdGVuZXIpO1xuICAgICAgICB0aGlzLl92aWJyb0lucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgU2V0dGluZ3MuX3ZpYnJvTGlzdGVuZXIpO1xuXG4gICAgICAgIFtdLmZvckVhY2guY2FsbCh0aGlzLl90eXBlSW5wdXQsIChpbnB1dCkgPT4ge1xuICAgICAgICAgICAgaW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBTZXR0aW5ncy5fdHlwZUlucHV0TGlzdGVuZXIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgX3R5cGVJbnB1dExpc3RlbmVyKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBpZihldmVudC50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgY29uc3QgdmFsID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgZGljZS5zZXRUeXBlKHZhbCk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgneWEtZGljZS1tb3Rpb24tdHlwZScsIHZhbCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHN0YXRpYyBfc2V0VHlwZSh0eXBlKSB7XG4gICAgICAgIGNvbnN0IGNoZWNrZWRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHR5cGUpO1xuICAgICAgICBjaGVja2VkSW5wdXQuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ2NoZWNrZWQnKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgX3NldFZpYnJvQmFuKGlucHV0KSB7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICdjaGVja2VkJyk7XG4gICAgfVxuXG4gICAgX2dlYXJMaXN0ZW5lcihldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgaWYgKHRoaXMuX2NvbnRlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy12aXNpYmxlJykpIHtcbiAgICAgICAgICAgIHRoaXMuX2hpZGVTZXR0aW5ncygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc2hvd1NldHRpbmdzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgX3ZpYnJvTGlzdGVuZXIoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgZGljZS5zZXRWaWJybyh0cnVlKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd5YS1kaWNlLXZpYnJhdGlvbi1iYW4nLCAnYmFubmVkJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaWNlLnNldFZpYnJvKGZhbHNlKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd5YS1kaWNlLXZpYnJhdGlvbi1iYW4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9zaG93U2V0dGluZ3MoKSB7XG4gICAgICAgIHRoaXMuX2NvbnRlbnQuY2xhc3NMaXN0LmFkZCgnaXMtdmlzaWJsZScpO1xuICAgIH1cblxuICAgIF9oaWRlU2V0dGluZ3MoKSB7XG4gICAgICAgIHRoaXMuX2NvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtdmlzaWJsZScpO1xuICAgIH1cbn1cblxuY29uc3Qgc2V0dGluZ3MgPSBuZXcgU2V0dGluZ3MoKTtcbmV4cG9ydCBkZWZhdWx0IHNldHRpbmdzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXMvc2V0dGluZ3MuanMiLCJjbGFzcyBTaGFrZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICB0aGlzLl9sYXN0ID0ge307XG4gICAgICAgICAgICB0aGlzLl9vcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIGZyZXF1ZW5jeTogMzAwXG4gICAgICAgICAgICB9O1xuICAgIH1cblxuICAgIF9vblN1Y2Nlc3MoYWNjZWxlcmF0aW9uKSB7XG4gICAgICAgIGxldCBsYXN0ID0gdGhpcy5fbGFzdDtcblxuICAgICAgICBpZighbGFzdC5sYXN0WCkge1xuICAgICAgICAgICAgbGFzdC5sYXN0WCA9IGFjY2VsZXJhdGlvbi54O1xuICAgICAgICAgICAgbGFzdC5sYXN0WSA9IGFjY2VsZXJhdGlvbi55O1xuICAgICAgICAgICAgbGFzdC5sYXN0WiA9IGFjY2VsZXJhdGlvbi56O1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRlbHRhWCA9IE1hdGguYWJzKGFjY2VsZXJhdGlvbi54IC0gbGFzdC5sYXN0WCk7XG4gICAgICAgIGxldCBkZWx0YVkgPSBNYXRoLmFicyhhY2NlbGVyYXRpb24ueSAtIGxhc3QubGFzdFkpO1xuICAgICAgICBsZXQgZGVsdGFaID0gTWF0aC5hYnMoYWNjZWxlcmF0aW9uLnogLSBsYXN0Lmxhc3RaKTtcblxuICAgICAgICBpZihkZWx0YVggKyBkZWx0YVkgKyBkZWx0YVogPiAzNSkge1xuICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2soKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxhc3QubGFzdFggPSBhY2NlbGVyYXRpb24ueDtcbiAgICAgICAgbGFzdC5sYXN0WSA9IGFjY2VsZXJhdGlvbi55O1xuICAgICAgICBsYXN0Lmxhc3RaID0gYWNjZWxlcmF0aW9uLno7XG4gICAgfVxuXG4gICAgc3RhdGljIF9vbkVycm9yKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnU29tZXRoaW5nIHdlbnQgd3JvbmcnKTtcbiAgICB9XG5cbiAgICBzdGFydFdhdGNoaW5nKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuX2NhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHRoaXMuX3dhdGNoSUQgPSBuYXZpZ2F0b3IuYWNjZWxlcm9tZXRlci53YXRjaEFjY2VsZXJhdGlvbihcbiAgICAgICAgICAgIHRoaXMuX29uU3VjY2Vzcy5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgU2hha2UuX29uRXJyb3IsXG4gICAgICAgICAgICB0aGlzLl9vcHRpb25zXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RvcFdhdGNoaW5nKCkge1xuICAgICAgICBpZiAodGhpcy5fd2F0Y2hJRCkge1xuICAgICAgICAgICAgbmF2aWdhdG9yLmFjY2VsZXJvbWV0ZXIuY2xlYXJXYXRjaCh0aGlzLl93YXRjaElEKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3dhdGNoSUQgPSBudWxsO1xuICAgIH1cbn1cblxuY29uc3Qgc2hha2UgPSBuZXcgU2hha2U7XG5leHBvcnQgZGVmYXVsdCBzaGFrZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lcy9zaGFrZS5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==