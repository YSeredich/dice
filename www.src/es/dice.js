import shake from './shake';

class Dice {
    constructor() {
        this._animationDuration = 1000;
        this._animationInterval = 100;
        this._refreshDice = this._refreshDice.bind(this);
        this._tapHandler = this._tapHandler.bind(this);
        this._settingsHandler = this._settingsHandler.bind(this);
    }

    start(type, vibrationBan) {
        this._type = type;
        this._vibroBan = vibrationBan;
        this._screen = document.getElementById('app');
        this._diceWraps = this._screen.querySelectorAll('.dice-wrap');
        this._settings = this._screen.querySelector('.settings__content');
        this.bindHandlers();
    }

    _refreshDice() {
        this._settings.classList.remove('is-visible');

        this.clearHandlers();
        if (!this._vibroBan) {
            navigator.vibrate(1000);
        }

        // emulate animation
        const timerId = setInterval(() => {
            [].forEach.call(this._diceWraps, (diceWrap) => {
                Dice.setRandomDice(diceWrap);
            });
        }, this._animationInterval);

        setTimeout(function() {
            clearInterval(timerId);
        }, this._animationDuration);

        this.bindHandlers();
    }

    _tapHandler(e) {
        if (e.target.classList.contains('content') || e.target.closest('.dice-wrap')) {
            this._refreshDice();
        }
    }

    _settingsHandler(e) {
        if (!e.target.closest('.settings')) {
            this._settings.classList.remove('is-visible');
        }
    }

    setType(type) {
        if (this._type !== type) {
            this.clearHandlers();
            this._type = type;
            this.bindHandlers();
        }
    }

    setVibro(ban) {
        if (this._vibroBan !== ban) {
            this.clearHandlers();
            this._vibroBan = ban;
            this.bindHandlers();
        }
    }

    bindHandlers() {
        if (this._type === 'shake') {
            shake.startWatching(dice._refreshDice.bind(this));
            this._screen.addEventListener('click', this._settingsHandler);
        } else {
            this._screen.addEventListener('click', this._tapHandler);
            this._screen.removeEventListener('click', this._settingsHandler);
        }
    }

    clearHandlers() {
        shake.stopWatching();
        this._screen.removeEventListener('click', this._tapHandler);
    }

    static setRandomDice(wrap) {
        const dices = wrap.querySelectorAll('.dice');
        [].forEach.call(dices, function(dice) {
            dice.classList.remove('is-visible');
        });

        const num = Dice.getDiceNum();
        dices[num].classList.add('is-visible');
    }

    static getDiceNum() {
        return Dice.randomInteger(0, 5);
    }

    static randomInteger(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        rand = Math.round(rand);
        rand = Math.abs(rand);
        return rand;
    }
}

let dice = new Dice();
export default dice;