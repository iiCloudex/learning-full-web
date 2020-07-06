module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'learningDb',
        user: process.env.DB_USER || 'learningDb',
        password: process.env.DB_PASS || 'learningDb',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './learningDb.sqlite'
        }
    }
}