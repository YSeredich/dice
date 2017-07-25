import dice from "./dice";

class Settings {
    constructor() {
        const type = localStorage.getItem('ya-dice-motion-type');
        this._type = type ? type : 'shake';
    }

    bindHandlers() {
        this._elem = document.querySelector('.settings');
        this._control = this._elem.querySelector('.settings__button');
        this._content = this._elem.querySelector('.settings__content');
        this._typeInput = this._content.querySelectorAll('.settings__input');

        Settings._setType(this._type);
        dice.start(this._type);

        this._control.addEventListener('click', this._gearListener.bind(this));
        [].forEach.call(this._typeInput, (input) => {
            input.addEventListener('click', Settings._typeInputListener);
        });

    }

    clearHandlers() {
        this._control.removeEventListener('click', this._gearListener);
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

    _gearListener(event) {
        event.stopPropagation();
        if (this._content.classList.contains('is-visible')) {
            this._hideSettings();
        } else {
            this._showSettings();
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
