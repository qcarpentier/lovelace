import configData from '../Config/Botconfig.json';
import { LoggerOptionInterface } from './LoggerManager';

export class ConfigManager {
    private static instance: ConfigManager;

    private moderatorRole: Array<string>;
    private administratorRole: Array<string>;
    private logger: LoggerOptionInterface;
    // Todo : Rework this, each elements of configuration shouldn't be properties. Use get method in object instead

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
        return this.logger;
    }

    /**
     * This function will load config from Botconfig.json
     */
    public loadConfig(): void {
        this.moderatorRole = configData.roles.moderator;
        this.administratorRole = configData.roles.administrator;
        this.logger = configData.logger;
    }

    public saveConfig(): void {
        configData.roles.moderator = this.moderatorRole;
        configData.roles.administrator = this.administratorRole;
    }
}
