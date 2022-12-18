import { colors as c, color, bgcolor, colorAndBG } from './colors.js'

const FONT = 'font-size:14px;'

let LABEL_PADEND = 5

const browserLogs = ['log', 'info', 'warn', 'error', 'debug']

class WebLogger {
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
        // this.levelPadEnd = 5

        const len = label.length
        if (len > LABEL_PADEND) LABEL_PADEND = len
        this.labelPadEnd = LABEL_PADEND

        Object.keys(LOG_LEVELS_AND_COLORS).forEach((element) => {
            this[element] = function (...messages) {
                this.lg(element, ...messages)
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
    lg(level, ...messages) {
        let colorsStyles = []
        let levelIndex = getIndexOfKeyInObject(LOG_LEVELS_AND_COLORS, level)
        if (levelIndex === -1) {
            messages.unshift(level)
            level = 'info'
            levelIndex = getIndexOfKeyInObject(LOG_LEVELS_AND_COLORS, level)
        }
        if (levelIndex <= this._levelIndex) {
            const label = '%c' + this.label.padEnd(LABEL_PADEND, ' ')
            colorsStyles.push(colorAndBG(this.labelColor))
            colorsStyles.push('')

            colorsStyles.push(c.bold + LOG_LEVELS_AND_COLORS[level] || '')
            const levelString = '%c' + level.padEnd(this.levelPadEnd, ' ')

            const addObjInfo = []
            messages = messages.map((element) => {
                if (element instanceof Object) {
                    addObjInfo.push(element)
                    // return (element = JSON.stringify(element))
                    return '🔻'
                }
                return String(element)
            })
            const message = messages.join(' ')
            colorsStyles.push(colorAndBG(this.messageColor))

            colorsStyles = colorsStyles.map((item) => item + FONT)

            if (!browserLogs.includes(level)) level = 'log'
            // console[level](`🟢 ${label}%c ${levelString}%c ${message}`, ...colorsStyles)
            console[level](
                `🟢 ${label}%c ${levelString}%c ${message}`,
                ...colorsStyles,
                ...addObjInfo
            )

            // if (addObjInfo.length > 0) {
            //     addObjInfo.forEach((e) => {
            //         console.debug(e)
            //     })
            // }
        }
    }
}
export default WebLogger

const LOG_LEVELS_AND_COLORS = {
    // error: bgcolor('red') + color('white'),
    error: colorAndBG('white-red'),
    warn: color('red'),
    info: color('rgb(0, 204, 204)'),
    http: color('orange'),
    log: color('rgb(0, 206, 7)'),
    verbs: color('magenta'),
    debug: color('blue'),
    silly: color('gainsboro'),
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
