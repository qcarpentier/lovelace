import { CommandInterface } from '../Interface/CommandInterface';
import { CommandContext } from '../Core/CommandContext';

export class Uptime implements CommandInterface {
    description = 'Permet de savoir depuis combiens de temps le bot est en ligne.';
    names: string[] = ['uptime'];

    async execute(userCommand: CommandContext): Promise<void> {
        const formatedTimestamp: string = this.formatTimestamp(Date.now() - userCommand.message.client.readyTimestamp);
        await userCommand.message.channel.send(`Le bot est en ligne depuis ${formatedTimestamp}`);
    }

    formatTimestamp(updateTimestamp: number): string {
        const timeSec: number = updateTimestamp / 1000;
        if (timeSec >= 60 && timeSec < 3600) {
            return `${Math.round(timeSec / 60)} minute(s)`;
        }
        if (timeSec >= 3600 && timeSec < 86400) {
            return `${Math.round(timeSec / 60 / 3600)} heure(s)`;
        }
        if (timeSec >= 86400) {
            return `${Math.round(timeSec / 60 / 3600 / 24)} jour(s)`;
        }
        return `${Math.round(timeSec)} seconde(s)`;
    }
}
