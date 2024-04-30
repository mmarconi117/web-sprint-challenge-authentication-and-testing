const db = require("../../data/dbConfig")






function find() {
    return db("users")
}



async function add(user) {
    const [id] = await db("users").insert(user)

    return id
}


module.exports = {
    find,
    add
}
