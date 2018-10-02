function PrettyPrintJsonConsole(json) {
    if (typeof json != 'string') {
        json = JSON.stringify(json, undefined, '\t');
    }
    var arr = [];
    arr.unshift(json);
    console.log.apply(console, arr);
}


var sqliteParser = require('sqlite-parser');
var query = 'select pants from laundry;';

var query = 'insert into users (id, name) values (1, "jim");';
var query = 'create table users (id int, name varchar(255) )';
var query = 'update users set id = 3 where name = "jim";';
var query = 'select id, name from users where id = 1;';

var query = 'CREATE TABLE users (name VARCHAR(255), id int); ';
var query = 'INSERT INTO users (name, id) VALUES (\'Jim\', 1);';


console.log("Parsing: " + query);
var ast = sqliteParser(query);
PrettyPrintJsonConsole(JSON.stringify(ast,null,4));
// console.log(JSON.stringify(ast, 2));
