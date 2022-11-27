const Logger = require('./Logger')

const log = new Logger()

log.log ('info', 'asdfasdfasd', log.c.blue+'sadfasdf', 'eryer')

log.error('1 adsasdasdasdasd', 'asdasd', 'asdasd')
log.warn('2 adsasdasdasdasd')
log.info('3 adsasdasdasdasd')
log.http('4 adsasdasdasdasd')
log.messageColor = log.c.green+log.c.bgBlue
log.verbs('5 adsasdasdasdasd')
log.debug('6 adsasdasdasdasd')
log.silly('7 adsasdasdasdasd')

log.label = 'AAA'
log.labelColor = log.c.bgMagenta
log.level = 'verbose'

log.http('4 adsasdasdasdasd')
log.verbs('5 adsasdasdasdasd')

log.level = 'verbasfdas'
log.debug('6 adsasdasdasdasd')
log.silly('7 adsasdasdasdasd')

log.messageColor = log.c.brightRed
log.log("asd", 'test no log')
log.log("asd", 'test no log', log.c.brightMagenta+'END')
log.error('6 adsasdasdasdasd')
log.log("3h56hdghd", 'test no log')
log.log("warn", 'test no log')

log.level = 'verbs'
log.messageColor = log.c.brightCyan
log.levelPadEnd = 18
log.labelPadEnd = 30
log.verbs('5 adsasdasdasdasd')
log.debug('6 adsasdasdasdasd')
log.silly('7 adsasdasdasdasd')
