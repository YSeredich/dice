webpackJsonp([0],{

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_polyfill__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_polyfill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dice__ = __webpack_require__(118);

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
        __WEBPACK_IMPORTED_MODULE_2__dice__["a" /* default */].bindHandlers();
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shake__ = __webpack_require__(119);



var Dice = function () {
    function Dice() {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Dice);

        this._animationDuration = 1000;
        this._animationInterval = 100;
    }

    Dice.prototype._refreshDice = function _refreshDice() {
        this.clearHandlers();

        var diceWraps = this._diceWraps;

        // emulate animation
        var timerId = setInterval(function () {
            [].forEach.call(diceWraps, function (diceWrap) {
                console.log('hello');
                Dice.setRandomDice(diceWrap);
            });
        }, this._animationInterval);

        setTimeout(function () {
            clearInterval(timerId);
        }, this._animationDuration);

        this.bindHandlers();
    };

    Dice.prototype.bindHandlers = function bindHandlers(type) {
        var _this = this;

        this._type = type ? type : 'shake';

        if (!this._screen) {
            this._screen = document.getElementById('app');
            this._diceWraps = this._screen.querySelectorAll('.dice-wrap');
        }

        if (this._type === 'shake') {
            __WEBPACK_IMPORTED_MODULE_1__shake__["a" /* default */].startWatching(dice._refreshDice.bind(this));
        } else {
            var screen = document.getElementById('app');
            screen.addEventListener('click', function () {
                _this._refreshDice();
            });
        }
    };

    Dice.prototype.clearHandlers = function clearHandlers() {
        var _this2 = this;

        if (this._type === 'shake') {
            __WEBPACK_IMPORTED_MODULE_1__shake__["a" /* default */].stopWatching();
        } else {
            this._screen.remove('click', function () {
                _this2._refreshDice();
            });
        }
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(59);
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
        alert('Something went wrong');
    };

    Shake.prototype.startWatching = function startWatching(callback) {
        this._callback = callback;
        this._watchID = navigator.accelerometer.watchAcceleration(this._onSuccess.bind(this), Shake._onError, this._options);
    };

    Shake.prototype.stopWatching = function stopWatching() {
        navigator.accelerometer.clearWatch(this._watchID);
    };

    return Shake;
}();

var shake = new Shake();
/* harmony default export */ __webpack_exports__["a"] = (shake);

/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(116);
module.exports = __webpack_require__(117);


/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ })

},[302]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zY3NzL3N0eWxlcy5zY3NzP2JmYTEiLCJ3ZWJwYWNrOi8vLy4vZXMvZGljZS5qcyIsIndlYnBhY2s6Ly8vLi9lcy9zaGFrZS5qcyIsIndlYnBhY2s6Ly8vLi4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiXSwibmFtZXMiOlsiQXBwIiwic3RhcnQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbkRldmljZVJlYWR5IiwiZGljZSIsImJpbmRIYW5kbGVycyIsImFwcCIsIkRpY2UiLCJfYW5pbWF0aW9uRHVyYXRpb24iLCJfYW5pbWF0aW9uSW50ZXJ2YWwiLCJfcmVmcmVzaERpY2UiLCJjbGVhckhhbmRsZXJzIiwiZGljZVdyYXBzIiwiX2RpY2VXcmFwcyIsInRpbWVySWQiLCJzZXRJbnRlcnZhbCIsImZvckVhY2giLCJjYWxsIiwiZGljZVdyYXAiLCJjb25zb2xlIiwibG9nIiwic2V0UmFuZG9tRGljZSIsInNldFRpbWVvdXQiLCJjbGVhckludGVydmFsIiwidHlwZSIsIl90eXBlIiwiX3NjcmVlbiIsImdldEVsZW1lbnRCeUlkIiwicXVlcnlTZWxlY3RvckFsbCIsInNoYWtlIiwic3RhcnRXYXRjaGluZyIsImJpbmQiLCJzY3JlZW4iLCJzdG9wV2F0Y2hpbmciLCJyZW1vdmUiLCJ3cmFwIiwiZGljZXMiLCJjbGFzc0xpc3QiLCJudW0iLCJnZXREaWNlTnVtIiwiYWRkIiwicmFuZG9tSW50ZWdlciIsIm1pbiIsIm1heCIsInJhbmQiLCJNYXRoIiwicmFuZG9tIiwicm91bmQiLCJhYnMiLCJTaGFrZSIsIl9sYXN0IiwiX29wdGlvbnMiLCJmcmVxdWVuY3kiLCJfb25TdWNjZXNzIiwiYWNjZWxlcmF0aW9uIiwibGFzdCIsImxhc3RYIiwieCIsImxhc3RZIiwieSIsImxhc3RaIiwieiIsImRlbHRhWCIsImRlbHRhWSIsImRlbHRhWiIsIl9jYWxsYmFjayIsIl9vbkVycm9yIiwiYWxlcnQiLCJjYWxsYmFjayIsIl93YXRjaElEIiwibmF2aWdhdG9yIiwiYWNjZWxlcm9tZXRlciIsIndhdGNoQWNjZWxlcmF0aW9uIiwiY2xlYXJXYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBO0FBQ0E7O0lBRU1BLEc7Ozs7O2tCQUVGQyxLLG9CQUFRO0FBQ0pDLGlCQUFTQyxnQkFBVCxDQUEwQixhQUExQixFQUF5QztBQUFBLG1CQUFNSCxJQUFJSSxhQUFKLEVBQU47QUFBQSxTQUF6QyxFQUFvRSxLQUFwRTtBQUNILEs7O1FBRU1BLGEsNEJBQWdCO0FBQ25CQyxRQUFBLHNEQUFBQSxDQUFLQyxZQUFMO0FBQ0gsSzs7Ozs7QUFHTCxJQUFJQyxNQUFNLElBQUlQLEdBQUosRUFBVjtBQUNBTyxJQUFJTixLQUFKLEc7Ozs7Ozs7QUNsQ0EseUM7Ozs7Ozs7Ozs7OztBQ0FBOztJQUVNTyxJO0FBQ0Ysb0JBQWM7QUFBQTs7QUFDVixhQUFLQyxrQkFBTCxHQUEwQixJQUExQjtBQUNBLGFBQUtDLGtCQUFMLEdBQTBCLEdBQTFCO0FBQ0g7O21CQUVEQyxZLDJCQUFlO0FBQ1gsYUFBS0MsYUFBTDs7QUFFQSxZQUFNQyxZQUFZLEtBQUtDLFVBQXZCOztBQUVBO0FBQ0EsWUFBTUMsVUFBVUMsWUFBWSxZQUFXO0FBQ25DLGVBQUdDLE9BQUgsQ0FBV0MsSUFBWCxDQUFnQkwsU0FBaEIsRUFBMkIsVUFBU00sUUFBVCxFQUFtQjtBQUMxQ0Msd0JBQVFDLEdBQVIsQ0FBWSxPQUFaO0FBQ0FiLHFCQUFLYyxhQUFMLENBQW1CSCxRQUFuQjtBQUNILGFBSEQ7QUFJSCxTQUxlLEVBS2IsS0FBS1Qsa0JBTFEsQ0FBaEI7O0FBT0FhLG1CQUFXLFlBQVc7QUFDbEJDLDBCQUFjVCxPQUFkO0FBQ0gsU0FGRCxFQUVHLEtBQUtOLGtCQUZSOztBQUlBLGFBQUtILFlBQUw7QUFDSCxLOzttQkFFREEsWSx5QkFBYW1CLEksRUFBTTtBQUFBOztB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TixLQUFLSyxLQUEvQixDQUFiOztBQUVBLFlBQUdFLFNBQVNDLE1BQVQsR0FBa0JDLE1BQWxCLEdBQTJCLEVBQTlCLEVBQWtDO0FBQzlCLGlCQUFLQyxTQUFMO0FBQ0g7O0FBRURWLGFBQUtDLEtBQUwsR0FBYUYsYUFBYUcsQ0FBMUI7QUFDQUYsYUFBS0csS0FBTCxHQUFhSixhQUFhSyxDQUExQjtBQUNBSixhQUFLSyxLQUFMLEdBQWFOLGFBQWFPLENBQTFCO0FBQ0gsSzs7VUFFTUssUSx1QkFBVztBQUNkQyxjQUFNLHNCQUFOO0FBQ0gsSzs7b0JBRURyQyxhLDBCQUFjc0MsUSxFQUFVO0FBQ3BCLGFBQUtILFNBQUwsR0FBaUJHLFFBQWpCO0FBQ0EsYUFBS0MsUUFBTCxHQUFnQkMsVUFBVUMsYUFBVixDQUF3QkMsaUJBQXhCLENBQ1osS0FBS25CLFVBQUwsQ0FBZ0J0QixJQUFoQixDQUFxQixJQUFyQixDQURZLEVBRVprQixNQUFNaUIsUUFGTSxFQUdaLEtBQUtmLFFBSE8sQ0FBaEI7QUFLSCxLOztvQkFFRGxCLFksMkJBQWU7QUFDWHFDLGtCQUFVQyxhQUFWLENBQXdCRSxVQUF4QixDQUFtQyxLQUFLSixRQUF4QztBQUNILEs7Ozs7O0FBR0wsSUFBTXhDLFFBQVEsSUFBSW9CLEtBQUosRUFBZDtBQUNBLHlEQUFlcEIsS0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xEQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEUiLCJmaWxlIjoianMvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgXCJiYWJlbC1wb2x5ZmlsbFwiO1xuaW1wb3J0IGRpY2UgZnJvbSAnLi9kaWNlJztcblxuY2xhc3MgQXBwIHtcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZGV2aWNlcmVhZHlcIiwgKCkgPT4gQXBwLm9uRGV2aWNlUmVhZHkoKSwgZmFsc2UpO1xuICAgIH1cblxuICAgIHN0YXRpYyBvbkRldmljZVJlYWR5KCkge1xuICAgICAgICBkaWNlLmJpbmRIYW5kbGVycygpO1xuICAgIH1cbn1cblxubGV0IGFwcCA9IG5ldyBBcHAoKTtcbmFwcC5zdGFydCgpO1xuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2VzL2luZGV4LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Njc3Mvc3R5bGVzLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDExN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgc2hha2UgZnJvbSAnLi9zaGFrZSc7XG5cbmNsYXNzIERpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9hbmltYXRpb25EdXJhdGlvbiA9IDEwMDA7XG4gICAgICAgIHRoaXMuX2FuaW1hdGlvbkludGVydmFsID0gMTAwO1xuICAgIH1cblxuICAgIF9yZWZyZXNoRGljZSgpIHtcbiAgICAgICAgdGhpcy5jbGVhckhhbmRsZXJzKCk7XG5cbiAgICAgICAgY29uc3QgZGljZVdyYXBzID0gdGhpcy5fZGljZVdyYXBzO1xuXG4gICAgICAgIC8vIGVtdWxhdGUgYW5pbWF0aW9uXG4gICAgICAgIGNvbnN0IHRpbWVySWQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIFtdLmZvckVhY2guY2FsbChkaWNlV3JhcHMsIGZ1bmN0aW9uKGRpY2VXcmFwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2hlbGxvJyk7XG4gICAgICAgICAgICAgICAgRGljZS5zZXRSYW5kb21EaWNlKGRpY2VXcmFwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCB0aGlzLl9hbmltYXRpb25JbnRlcnZhbCk7XG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXJJZCk7XG4gICAgICAgIH0sIHRoaXMuX2FuaW1hdGlvbkR1cmF0aW9uKTtcblxuICAgICAgICB0aGlzLmJpbmRIYW5kbGVycygpO1xuICAgIH1cblxuICAgIGJpbmRIYW5kbGVycyh0eXBlKSB7XG4gICAgICAgIHRoaXMuX3R5cGUgPSB0eXBlID8gdHlwZSA6ICdzaGFrZSc7XG5cbiAgICAgICAgaWYoIXRoaXMuX3NjcmVlbikge1xuICAgICAgICAgICAgdGhpcy5fc2NyZWVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xuICAgICAgICAgICAgdGhpcy5fZGljZVdyYXBzID0gdGhpcy5fc2NyZWVuLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kaWNlLXdyYXAnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl90eXBlID09PSAnc2hha2UnKSB7XG4gICAgICAgICAgICBzaGFrZS5zdGFydFdhdGNoaW5nKGRpY2UuX3JlZnJlc2hEaWNlLmJpbmQodGhpcykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgc2NyZWVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xuICAgICAgICAgICAgc2NyZWVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlZnJlc2hEaWNlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsZWFySGFuZGxlcnMoKSB7XG4gICAgICAgIGlmICh0aGlzLl90eXBlID09PSAnc2hha2UnKSB7XG4gICAgICAgICAgICBzaGFrZS5zdG9wV2F0Y2hpbmcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3NjcmVlbi5yZW1vdmUoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlZnJlc2hEaWNlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBzZXRSYW5kb21EaWNlKHdyYXApIHtcbiAgICAgICAgY29uc3QgZGljZXMgPSB3cmFwLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kaWNlJyk7XG4gICAgICAgIFtdLmZvckVhY2guY2FsbChkaWNlcywgZnVuY3Rpb24oZGljZSkge1xuICAgICAgICAgICAgZGljZS5jbGFzc0xpc3QucmVtb3ZlKCdpcy12aXNpYmxlJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IG51bSA9IERpY2UuZ2V0RGljZU51bSgpO1xuICAgICAgICBkaWNlc1tudW1dLmNsYXNzTGlzdC5hZGQoJ2lzLXZpc2libGUnKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0RGljZU51bSgpIHtcbiAgICAgICAgcmV0dXJuIERpY2UucmFuZG9tSW50ZWdlcigwLCA1KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmFuZG9tSW50ZWdlcihtaW4sIG1heCkge1xuICAgICAgICBsZXQgcmFuZCA9IG1pbiAtIDAuNSArIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSk7XG4gICAgICAgIHJhbmQgPSBNYXRoLnJvdW5kKHJhbmQpO1xuICAgICAgICByYW5kID0gTWF0aC5hYnMocmFuZCk7XG4gICAgICAgIHJldHVybiByYW5kO1xuICAgIH1cbn1cblxubGV0IGRpY2UgPSBuZXcgRGljZSgpO1xuZXhwb3J0IGRlZmF1bHQgZGljZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lcy9kaWNlLmpzIiwiY2xhc3MgU2hha2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgdGhpcy5fbGFzdCA9IHt9O1xuICAgICAgICAgICAgdGhpcy5fb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBmcmVxdWVuY3k6IDMwMFxuICAgICAgICAgICAgfTtcbiAgICB9XG5cbiAgICBfb25TdWNjZXNzKGFjY2VsZXJhdGlvbikge1xuICAgICAgICBsZXQgbGFzdCA9IHRoaXMuX2xhc3Q7XG5cbiAgICAgICAgaWYoIWxhc3QubGFzdFgpIHtcbiAgICAgICAgICAgIGxhc3QubGFzdFggPSBhY2NlbGVyYXRpb24ueDtcbiAgICAgICAgICAgIGxhc3QubGFzdFkgPSBhY2NlbGVyYXRpb24ueTtcbiAgICAgICAgICAgIGxhc3QubGFzdFogPSBhY2NlbGVyYXRpb24uejtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkZWx0YVggPSBNYXRoLmFicyhhY2NlbGVyYXRpb24ueCAtIGxhc3QubGFzdFgpO1xuICAgICAgICBsZXQgZGVsdGFZID0gTWF0aC5hYnMoYWNjZWxlcmF0aW9uLnkgLSBsYXN0Lmxhc3RZKTtcbiAgICAgICAgbGV0IGRlbHRhWiA9IE1hdGguYWJzKGFjY2VsZXJhdGlvbi56IC0gbGFzdC5sYXN0Wik7XG5cbiAgICAgICAgaWYoZGVsdGFYICsgZGVsdGFZICsgZGVsdGFaID4gMzUpIHtcbiAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrKCk7XG4gICAgICAgIH1cblxuICAgICAgICBsYXN0Lmxhc3RYID0gYWNjZWxlcmF0aW9uLng7XG4gICAgICAgIGxhc3QubGFzdFkgPSBhY2NlbGVyYXRpb24ueTtcbiAgICAgICAgbGFzdC5sYXN0WiA9IGFjY2VsZXJhdGlvbi56O1xuICAgIH1cblxuICAgIHN0YXRpYyBfb25FcnJvcigpIHtcbiAgICAgICAgYWxlcnQoJ1NvbWV0aGluZyB3ZW50IHdyb25nJyk7XG4gICAgfVxuXG4gICAgc3RhcnRXYXRjaGluZyhjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICB0aGlzLl93YXRjaElEID0gbmF2aWdhdG9yLmFjY2VsZXJvbWV0ZXIud2F0Y2hBY2NlbGVyYXRpb24oXG4gICAgICAgICAgICB0aGlzLl9vblN1Y2Nlc3MuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIFNoYWtlLl9vbkVycm9yLFxuICAgICAgICAgICAgdGhpcy5fb3B0aW9uc1xuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0b3BXYXRjaGluZygpIHtcbiAgICAgICAgbmF2aWdhdG9yLmFjY2VsZXJvbWV0ZXIuY2xlYXJXYXRjaCh0aGlzLl93YXRjaElEKTtcbiAgICB9XG59XG5cbmNvbnN0IHNoYWtlID0gbmV3IFNoYWtlO1xuZXhwb3J0IGRlZmF1bHQgc2hha2U7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXMvc2hha2UuanMiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=