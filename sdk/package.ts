let version = null;

try {
    version = require('../package.json').version;
} catch {
    version = require('../../package.json').version;
}

export { version };
