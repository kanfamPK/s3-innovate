import { Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import { formatOption, transportsOption } from './helper';

@Module({
  imports: [
    WinstonModule.forRoot({
      format: formatOption,
      transports: transportsOption,
    }),
  ],
})
export class LoggerModule {}
