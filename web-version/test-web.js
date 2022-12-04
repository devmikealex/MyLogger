import WebLogger from './index.js'
// import c from './colors.js'

console.log('START')

// const c = require('./colors-web')

// const Logger = require('./index-web.js')

const log = new WebLogger(null, 'TST', 'green')
// const log = new WebLogger(null, 'TST')

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
console.log('---')

log.level = 'info'
log.messageColor = 'blue'
log.warn('Log warn', 'asdads', 'weryrety')
log.log('Log log')
log.info('Log info')
log.error('Log error')
log.debug('Log debug')
log.http('Log http')
log.verbs('Log verbs')
log.silly('Log silly')
console.log('---')

const obj = { name: 'Mike', age: 30, city: 'London' }
const arr = ['asdfad', 3245, 'Ajsdgjyg']

log.level = ''
log.messageColor = 'Crimson'
log.labelColor = 'MediumVioletRed'
log.lg('error', 'lg error error')
log.lg('info', 'lg info error')
log.lg('verbs', 'lg verbs error')
log.lg(
    'silly',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam atque nisi, facere recusandae distinctio vel, illum suscipit corrupti veritatis maiores libero laborum at dolorum sapiente magnam eligendi explicabo quos corporis?'
)

log.messageColor = 'SeaGreen-HoneyDew'
log.log('Log log object', obj)
log.log('Log log object', obj, 'adasd', obj, arr)
log.log('Log log object+: ' + obj)
log.info('Log info array', arr)
log.messageColor = ''
log.info('Log info array+: ' + arr)

log.messageColor = 'red'
let a
const NULL = null
log.debug(a)
log.debug('asdasd', a)
log.info(NULL)
log.info('fjgf', NULL)
