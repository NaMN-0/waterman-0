const db = require("./sql/connect");

function all() {
    return new Promise(function(resolve, reject) {
        db.all("SELECT * FROM users", [],
            function(err, data) {
                if (err) {
                    console.log(err);
                    return reject();
                }
                return resolve({
                    data: data
                });
            })
    })
}

module.exports = all;