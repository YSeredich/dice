class Shake {
    constructor() {
            this._last = {};
            this._options = {
                frequency: 300
            };
    }

    _onSuccess(acceleration) {
        let last = this._last;

        if(!last.lastX) {
            last.lastX = acceleration.x;
            last.lastY = acceleration.y;
            last.lastZ = acceleration.z;
            return;
        }

        let deltaX = Math.abs(acceleration.x - last.lastX);
        let deltaY = Math.abs(acceleration.y - last.lastY);
        let deltaZ = Math.abs(acceleration.z - last.lastZ);

        if(deltaX + deltaY + deltaZ > 35) {
            this._callback();
        }

        last.lastX = acceleration.x;
        last.lastY = acceleration.y;
        last.lastZ = acceleration.z;
    }

    static _onError() {
        alert('Something went wrong');
    }

    startWatching(callback) {
        this._callback = callback;
        this._watchID = navigator.accelerometer.watchAcceleration(
            this._onSuccess.bind(this),
            Shake._onError,
            this._options
        );
    }

    stopWatching() {
        navigator.accelerometer.clearWatch(this._watchID);
    }
}

const shake = new Shake;
export default shake;