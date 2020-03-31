import configFileData from '../Config/Botconfig.json';
import { LoggerOptionInterface } from './LoggerManager';

export class ConfigManager {
    private static instance: ConfigManager;

    private loggerData: LoggerOptionInterface;
    private configData: typeof configFileData;

    private constructor() {
        this.loadConfig();
    }

    public static getInstance(): ConfigManager {
        if (!this.instance) {
            this.instance = new ConfigManager();
        }
        return this.instance;
    }

    public getLoggerConfig(): LoggerOptionInterface {
        return this.loggerData;
    }

    /**
     * This function will load config from Botconfig.json
     */
    public loadConfig(): void {
        this.configData = configFileData;
    }

    public get(): any {}
}
