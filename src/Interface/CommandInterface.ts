import { CommandContext } from '../Core/CommandContext';

export interface CommandInterface {
    names: string[];
    description?: string;
    permissions?: Array<string>;
    isEnabled?: boolean;
    typeEffect?: boolean;
    commandInterval?: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    execute(userCommand: CommandContext): Promise<void>;
}
