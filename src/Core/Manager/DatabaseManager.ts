import { Connection, createConnection } from 'typeorm';
import { Logger } from './LoggerManager';

export class DatabaseManager {
    private static instance: DatabaseManager;
    private connection: Connection;

    private constructor() {
        this.getConnection()
            .then((connection) => {
                Logger.info(`The connection to the database ${connection.options.database} is established`);
            })
            .catch((reason) => {
                Logger.error(`An error occurred while connecting to the database : ${reason}`);
            });
    }

    public async getConnection(): Promise<Connection> {
        if (!this.connection) {
            this.connection = await createConnection();
        }
        return this.connection;
    }

    public static getInstance(): DatabaseManager {
        if (!this.instance) {
            this.instance = new DatabaseManager();
        }
        return this.instance;
    }
}
