const c = require('./colors')
// const dateFormat = require('date-format')

class Logger {
    /**
     * Создание логера
     * @param {string} level Уровень фильтрации
     * @param {string} label Метка
     * @param {string} labelColor Цвет метки (ASCII)
     */
    constructor(level, label, labelColor) {
        this.label = label ?? ''
        this._level = level ?? 'silly'
        this.level = this._level
        this.labelColor = labelColor ?? ''
        this.messageColor = ''
        this.levelPadEnd = 5
        this.labelPadEnd = 5
        this.timeFormat = 'hh:mm:ss.SSS' // не используется
        /** @property {object} c - Colors table / ASCII code */
        // this.c = c

        Object.keys(LOG_LEVELS_AND_COLORS).forEach((element) => {
            this[element] = function (...messages) {
                this.log(element, ...messages)
            }
        })
    }
    set level(level) {
        this._level = level
        this._levelIndex = getIndexOfKeyInObject(LOG_LEVELS_AND_COLORS, level)
        if (this._levelIndex === -1) {
            this._levelIndex = Object.keys(LOG_LEVELS_AND_COLORS).length - 1
            this._level = Object.keys(LOG_LEVELS_AND_COLORS)[this._levelIndex]
        }
    }
    log(level, ...messages) {
        let levelIndex = getIndexOfKeyInObject(LOG_LEVELS_AND_COLORS, level)
        if (levelIndex === -1) {
            messages.unshift(level)
            level = 'info'
            levelIndex = getIndexOfKeyInObject(LOG_LEVELS_AND_COLORS, level)
        }
        if (levelIndex <= this._levelIndex) {
            // const time = dateFormat.asString(this.timeFormat, new Date())
            const time = new Date()
            const timeString = `${time.toTimeString().slice(0, 8)}.${String(
                time.getMilliseconds()
            ).padStart(3, '0')}`
            level = (LOG_LEVELS_AND_COLORS[level] || '') + level.padEnd(this.levelPadEnd, ' ') + c.reset
            const label = this.labelColor + this.label.padEnd(this.labelPadEnd, ' ') + c.reset
            const message = this.messageColor + messages.join(' ') + c.reset
            console.log(`${timeString} ${label} ${level} ${message}`)
        }
    }
}
module.exports = Logger

const LOG_LEVELS_AND_COLORS = {
    error: c.bgBrightRed + c.black,
    warn: c.red,
    info: c.brightGreen,
    // http: c.bgCyan + c.black,
    http: c.yellow,
    verbs: c.brightMagenta,
    debug: c.brightBlue,
    silly: c.brightBlack,
}

/**
 * Поиск индекса ключа в простом объекте
 * @param {object} obj Объект для поиска
 * @param {string} key Название ключа для поиска
 * @returns {number} Найденый индекс
 */
function getIndexOfKeyInObject(obj, key) {
    const keys = Object.keys(obj)
    const index = keys.indexOf(key)
    return index
}
