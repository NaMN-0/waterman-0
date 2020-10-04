const db = require("./sql/connect");

function saver(info) {
    console.log(info)
    return new Promise(function(resolve, reject) {
        db.run("INSERT INTO users(name,email,contact,service,description) values(?,?,?,?,?)", [info.name, info.email, info.contact, info.service, info.description],
            function(err) {
                if (err) {
                    console.log(err)
                    return reject();
                }
                return resolve();
            })
    })
}

module.exports = saver;