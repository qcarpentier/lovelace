import 'reflect-metadata';
import * as path from 'path';
import * as dotenv from 'dotenv';
import { Bot } from './Bot';
import { DatabaseManager } from './Core/Manager/DatabaseManager';

dotenv.config({ path: path.resolve(__dirname, '../.env') });
DatabaseManager.getInstance();
Bot.getInstance();
