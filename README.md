# Bluebird Tools

Tools to improve the bluebird promises with control flow and logging.

## Install
```bash
npm install --save bluebird-tools
```

## How to use

```js
const Promise = require('bluebird-tools');
```

### Control Flow

#### promise.iif(condition, success, fail) -> `promise`
Calls `success` if pass the `condition` or calls `fail`
 ```js
Promise.resolve(1)
    .iif(x => x === 1, x => console.log('success', x), x => console.log('fail', x));
```

#### promise.when(condition, success) -> `promise`
Calls `success` if pass the `condition` or calls `fail`
 ```js
Promise.resolve(1)
    .when(x => x === 1, x => console.log('success', x));
```
#### promise.unless(condition, fail) -> `promise`
Calls `success` if pass the `condition` or calls `fail`
 ```js
Promise.resolve(1)
    .unless(x => x === 2, x => console.log('fail', x));
```

### Logging

Configure logging for all Promise with the `logging` function.
Default levels to call the log:
* silly
* debug
* verbose
* info
* warning
* error

#### Promise.configureLog(logging)
```js
const winston = require('winston');

// configure winston

Promise.configureLog(function logging(level, text, ...args) {
	winston.log(level, text, ...args);
});
```

#### Promise.log(level, text, ...args) -> `promise`
```js
Promise.log('info', 'testing log', 1, 2, 3);
```

#### promise.log(level, text, ...args) -> `promise`
```js
Promise.resolve().log('info', 'testing log', 1, 2, 3);
```

#### promise.silly(text, ...args) -> `promise`
```js
Promise.resolve().silly('testing log', 1, 2, 3);
```

#### promise.debug(text, ...args) -> `promise`
```js
Promise.resolve().debug('testing log', 1, 2, 3);
```

#### promise.verbose(text, ...args) -> `promise`
```js
Promise.resolve().verbose('testing log', 1, 2, 3);
```

#### promise.info(text, ...args) -> `promise`
```js
Promise.resolve().info('testing log', 1, 2, 3);
```

#### promise.warning(text, ...args) -> `promise`
```js
Promise.resolve().warning('testing log', 1, 2, 3);
```

#### promise.error(text, ...args) -> `promise`
```js
Promise.resolve().error('testing log', 1, 2, 3);
```

### Manipulating promises
 
#### Promise.convert(promise) -> promise
Converts a native promise to a BluebirdTools promise
```js
Promise.convert(promise)
```