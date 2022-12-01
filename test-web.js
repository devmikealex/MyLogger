import Logger from './index-web.js'
import c from './colors-web.js'

console.log('START')

// const c = require('./colors-web')

// const Logger = require('./index-web.js')
const log = new Logger(null, 'TEST', c.green)

console.log('Log log')
console.info('Log info')
console.warn('Log warn')
console.error('Log error')
console.debug('Log debug')
console.log('---')

log.log('Log log')
log.info('Log info')
log.warn('Log warn')
log.error('Log error')
log.debug('Log debug')
log.http('Log http')
log.verbs('Log verbs')
log.silly('Log silly')
