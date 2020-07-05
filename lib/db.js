'use strict'
const { MongoClient } = require('mongodb')

const {
    DB_USER,
    DB_PASSW,
    DB_CLUSTER,
    DB_NAME,
} = process.env

const mongoUrl = `mongodb+srv://${DB_USER}:${DB_PASSW}@${DB_CLUSTER}.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
let connection

async function connectDb() {
    if (connection) return connection;

    let client


    try {
        client = await MongoClient.connect(mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        connection = client.db(DB_NAME)
    } catch (error) {
        console.error('No se pudo conectar a: ', mongoUrl, error)
        process.exit(1)
    }
    return connection
}

module.exports = connectDb