import dice from "./dice";

class Settings {
    constructor() {
        const type = localStorage.getItem('ya-dice-motion-type');
        this._type = type ? type : 'shake';
        this._vibroBan = localStorage.getItem('ya-dice-vibration-ban');

        this._gearListener = this._gearListener.bind(this);
    }

    bindHandlers() {
        this._elem = document.querySelector('.settings');
        this._control = this._elem.querySelector('.settings__button');
        this._content = this._elem.querySelector('.settings__content');
        this._typeInput = this._content.querySelectorAll('.settings__type .settings__input');
        this._vibroInput = document.getElementById('vibro');

        Settings._setType(this._type);
        if (this._vibroBan) {
            Settings._setVibroBan(this._vibroInput);
        }

        dice.start(this._type, this._vibroBan);

        this._control.addEventListener('click', this._gearListener);
        [].forEach.call(this._typeInput, (input) => {
            input.addEventListener('click', Settings._typeInputListener);
        });
        this._vibroInput.addEventListener('click', Settings._vibroListener);

    }

    clearHandlers() {
        this._control.removeEventListener('click', this._gearListener);
        this._vibroInput.removeEventListener('click', Settings._vibroListener);

        [].forEach.call(this._typeInput, (input) => {
            input.removeEventListener('click', Settings._typeInputListener);
        });
    }

    static _typeInputListener(event) {
        event.stopPropagation();
        if(event.target.checked) {
            const val = event.target.value;
            dice.setType(val);
            localStorage.setItem('ya-dice-motion-type', val);
        }

    }

    static _setType(type) {
        const checkedInput = document.getElementById(type);
        checkedInput.setAttribute('checked', 'checked');
    }

    static _setVibroBan(input) {
        input.setAttribute('checked', 'checked');
    }

    _gearListener(event) {
        event.stopPropagation();
        if (this._content.classList.contains('is-visible')) {
            this._hideSettings();
        } else {
            this._showSettings();
        }
    }

    static _vibroListener(event) {
        event.stopPropagation();
        if (event.target.checked) {
            dice.setVibro(true);
            localStorage.setItem('ya-dice-vibration-ban', 'banned');
        } else {
            dice.setVibro(false);
            localStorage.removeItem('ya-dice-vibration-ban');
        }
    }

    _showSettings() {
        this._content.classList.add('is-visible');
    }

    _hideSettings() {
        this._content.classList.remove('is-visible');
    }
}

const settings = new Settings();
export default settings;
