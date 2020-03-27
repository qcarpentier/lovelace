import * as Discord from 'discord.js';
import configData from '../Config/Botconfig.json';

export class ConfigManager {
    private static instance: ConfigManager;
    private client: Discord.Client;

    private moderatorRole: Array<string>;
    private administratorRole: Array<string>;

    private constructor(client: Discord.Client) {
        this.client = client;
    }

    public static getInstance(client: Discord.Client): ConfigManager {
        if (!this.instance) {
            this.instance = new ConfigManager(client);
        }
        return this.instance;
    }

    /**
     * This function will load config from Botconfig.json
     */
    public loadConfig(): void {
        this.moderatorRole = configData.roles.moderator;
        this.administratorRole = configData.roles.administrator;
    }

    public saveConfig(): void {
        configData.roles.moderator = this.moderatorRole;
        configData.roles.administrator = this.administratorRole;
    }
}
