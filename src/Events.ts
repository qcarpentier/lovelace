import * as Discord from 'discord.js';

export class Events {
    public onReady(): void {
        console.log('Bot is started.');
    }

    public onMessage(message: Discord.Message): void {
        console.log(
            `New message from ${message.author.username} with a lenght of ${message.content.length} characters`,
        );
    }
}
