module.exports = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: process.env.ENV === 'dev',
    logging: false,
    entities: ['build/Database/Entity/**/*.js'],
    migrations: ['build/Database/Migration/**/*.js'],
    subscribers: ['build/Database/Subscriber/**/*.js'],
};
