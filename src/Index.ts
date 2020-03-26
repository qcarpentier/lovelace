import "reflect-metadata";
import * as path from 'path';
import * as dotenv from 'dotenv';
dotenv.config({path: path.resolve(__dirname, '../.env')});

console.log('Hello from entry point!');