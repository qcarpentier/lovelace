import configFileData from '../../Config/Botconfig.json';
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

    static getConfig(): typeof configFileData {
        return ConfigManager.getInstance().configData;
    }

    public getLoggerConfig(): LoggerOptionInterface {
        return this.loggerData;
    }

    /**
     * This function will load config from Botconfig.json
     */
    public loadConfig(): void {
        this.configData = configFileData;
        this.loggerData = this.configData.logger;
    }

    /*public get(key?: typeof configFileData | string): object | typeof configFileData {
        return;
    }*/
}
