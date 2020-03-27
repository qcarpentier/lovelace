interface CommandInterface {
    name: string;
    description: string;
    permissions: Array<string>;
    isEnabled: boolean;
    typeEffect: boolean;
    commandInterval: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    execute(...args: any[]): any;
}
