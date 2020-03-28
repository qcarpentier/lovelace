import winston from 'winston';
import { ConfigManager } from './ConfigManager';
import { ConsoleTransportInstance } from 'winston/lib/winston/transports';
import winstonDailyRotateFile from 'winston-daily-rotate-file';
import path from 'path';

export interface LoggerOptionInterface {
    saveInFile: boolean;
    saveFilename: string;
}

class LoggerManager {
    private static instance: LoggerManager;
    private readonly logger: winston.Logger;

    private constructor() {
        this.logger = LoggerManager.defineLogger('botLogger');
    }

    static getLogger(): winston.Logger {
        return LoggerManager.getInstance().logger;
    }

    private static getInstance(): LoggerManager {
        if (!this.instance) {
            this.instance = new LoggerManager();
        }
        return this.instance;
    }

    private static defineLogger(loggerName: string): winston.Logger {
        const loggerOptions: LoggerOptionInterface = ConfigManager.getInstance().getLoggerConfig();
        const transports:
            | [ConsoleTransportInstance, winstonDailyRotateFile]
            | [ConsoleTransportInstance] = loggerOptions.saveInFile
            ? [
                  new winston.transports.Console(),
                  new winstonDailyRotateFile({
                      filename: loggerOptions.saveFilename
                          ? path.resolve(__dirname, `../logs/%DATE%-${loggerOptions.saveFilename}`)
                          : path.resolve(__dirname, `../logs/%DATE%-lovelace.log`),
                      datePattern: 'YYYY-MM-DD',
                      maxSize: '20m',
                      maxFiles: '14d',
                  }),
              ]
            : [new winston.transports.Console()];

        const logFormat = winston.format.combine(
            winston.format.colorize(),
            winston.format.timestamp({
                format: 'YYYY-MM-DD HH:mm:ss',
            }),
            winston.format.printf((info) => `[${info.timestamp}] [${info.level}]: ${info.message}`),
        );
        winston.loggers.add(loggerName, {
            format: logFormat,
            transports,
        });
        return winston.loggers.get(loggerName);
    }
}

export const Logger: winston.Logger = LoggerManager.getLogger();
