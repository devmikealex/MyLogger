const c = require('./colors')

const Logger = require('./index.js')

const log = new Logger()

log.log ('info', 'asdfasdfasd', c.blue+'sadfasdf', 'eryer')

log.error('1 adsasdasdasdasd', 'asdasd', 'asdasd')
log.warn('2 adsasdasdasdasd')
log.info('3 adsasdasdasdasd')
log.http('4 adsasdasdasdasd')
log.messageColor = c.green+c.bgBlue
log.verbs('5 adsasdasdasdasd')
log.debug('6 adsasdasdasdasd')
log.silly('7 adsasdasdasdasd')

log.label = 'AAA'
log.labelColor = c.bgMagenta
log.level = 'verbose'

log.http('4 adsasdasdasdasd')
log.verbs('5 adsasdasdasdasd')

log.level = 'verbasfdas'
log.debug('6 adsasdasdasdasd')
log.silly('7 adsasdasdasdasd')

log.messageColor = c.brightRed
log.log("asd", 'test no log')
log.log("asd", 'test no log', c.brightMagenta+'END')
log.error('6 adsasdasdasdasd')
log.log("3h56hdghd", 'test no log')
log.log("warn", 'test no log')

log.level = 'verbs'
log.messageColor = c.brightCyan
log.levelPadEnd = 18
log.labelPadEnd = 30
log.verbs('5 adsasdasdasdasd')
log.debug('6 adsasdasdasdasd')
log.silly('7 adsasdasdasdasd')

console.log()
const log2 = new Logger('http', 'TEST', c.green)
log2.error('1 adsasdasdasdasd', 'asdasd', 'asdasd')
log2.warn('2 adsasdasdasdasd')
log2.info('3 adsasdasdasdasd')
log2.http('4 adsasdasdasdasd')
log2.messageColor = c.blue
log2.verbs('5 adsasdasdasdasd')
log2.debug('6 adsasdasdasdasd')
log2.silly('7 adsasdasdasdasd')

log2.warn('2 adsasdasdasdasd')
log2.info('3 adsasdasdasdasd')

log2.messageColor = c.green
log2.level=''
log2.http('4 adsasdasdasdasd')
log2.verbs('5 adsasdasdasdasd')
console.log(log2._level)
console.log(log2._levelIndex)
