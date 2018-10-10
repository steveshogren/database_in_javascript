var stdin = process.openStdin();
var sqliteParser = require('sqlite-parser');
console.log("Enter query:");

stdin.addListener("data", function(d) {
    var query = d.toString().trim();
    console.log("Parsing: " + query);
    var ast = sqliteParser(query);
    console.log(JSON.stringify(ast,null,4));
    console.log("Enter query:");
});

