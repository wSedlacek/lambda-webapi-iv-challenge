import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

dotenv.config();
const serverPort = process.env.PORT || 3333;

const bootstrap = async (port: string | number) => {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
};

// tslint:disable-next-line: no-console
console.log(`Starting server on port ${serverPort}`);
bootstrap(serverPort);
