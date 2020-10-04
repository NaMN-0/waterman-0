const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./database.db", function(err) {
    if (err) {
        console.log("Error occured in creating the database.");
    }
    db.run(
        "CREATE TABLE users(id INTEGER PRIMARY KEY,name TEXT NOT NULL,email TEXT NOT NULL,contact TEXT NOT NULL,service INTEGER NOT NULL,description TEXT);",
        function(err) {
            if (err) {
                console.log(err.message);
            } else {
                console.log("Table created");
            }
        }
    );
    console.log("Database created");
});

module.exports = db;