var sqliteParser = require('sqlite-parser');

function parse(query) {
    return sqliteParser(query);
}
module.exports = parse;
