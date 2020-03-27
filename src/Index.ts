import 'reflect-metadata';
import * as path from 'path';
import * as dotenv from 'dotenv';
import { Bot } from './Bot';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const bot = Bot.getInstance();
