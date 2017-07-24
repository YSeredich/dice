import shake from './shake';

class Dice {
    constructor() {
        this._animationDuration = 1000;
        this._animationInterval = 100;
    }

    _refreshDice() {
        this.clearHandlers();

        const diceWraps = this._diceWraps;

        // emulate animation
        const timerId = setInterval(function() {
            [].forEach.call(diceWraps, function(diceWrap) {
                console.log('hello');
                Dice.setRandomDice(diceWrap);
            });
        }, this._animationInterval);

        setTimeout(function() {
            clearInterval(timerId);
        }, this._animationDuration);

        this.bindHandlers();
    }

    bindHandlers(type) {
        this._type = type ? type : 'shake';

        if(!this._screen) {
            this._screen = document.getElementById('app');
            this._diceWraps = this._screen.querySelectorAll('.dice-wrap');
        }

        if (this._type === 'shake') {
            shake.startWatching(dice._refreshDice.bind(this));
        } else {
            const screen = document.getElementById('app');
            screen.addEventListener('click', () => {
                this._refreshDice();
            });
        }
    }

    clearHandlers() {
        if (this._type === 'shake') {
            shake.stopWatching();
        } else {
            this._screen.remove('click', () => {
                this._refreshDice();
            });
        }
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