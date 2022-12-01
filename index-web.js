import c from './colors-web.js'

const browserLogs = ['log', 'info', 'warn', 'error', 'debug']

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

        Object.keys(LOG_LEVELS_AND_COLORS).forEach((element) => {
            this[element] = function (...messages) {
                this.logPrint(element, ...messages)
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
    logPrint(level, ...messages) {
        let colorsStyles = []
        let levelIndex = getIndexOfKeyInObject(LOG_LEVELS_AND_COLORS, level)
        if (levelIndex === -1) {
            messages.unshift(level)
            level = 'info'
            levelIndex = getIndexOfKeyInObject(LOG_LEVELS_AND_COLORS, level)
        }
        if (levelIndex <= this._levelIndex) {
            const label = '%c' + this.label.padEnd(this.labelPadEnd, ' ')
            colorsStyles.push(this.labelColor)

            colorsStyles.push(c.bold + LOG_LEVELS_AND_COLORS[level] || '')
            const levelString = '%c' + level.padEnd(this.levelPadEnd, ' ')

            const message = messages.join(' ')
            colorsStyles.push('')

            colorsStyles = colorsStyles.map((item) => item + 'font-size:14px;')

            if (!browserLogs.includes(level)) level = 'log'
            console[level](`${label} ${levelString}%c ${message}`, ...colorsStyles)
        }
    }
}
export default Logger

const LOG_LEVELS_AND_COLORS = {
    error: c.bgRed + c.white,
    warn: c.red,
    info: c.darkcyan,
    http: c.orange,
    log: 'color: rgb(0, 206, 7);',
    verbs: c.magenta,
    debug: c.blue,
    silly: c.dimgray,
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
