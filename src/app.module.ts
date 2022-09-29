import { Module } from '@nestjs/common';
import { AppRoutingModule } from './app-routing.module';
import { DeviceModule } from './modules/device/device.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './shared/modules/database/database.module';
import { LoggerModule } from './shared/modules/logger/logger.module';

const MODULES = [AppRoutingModule, DeviceModule, DatabaseModule, LoggerModule];

@Module({
  imports: [...MODULES, ConfigModule.forRoot({ isGlobal: true })],
  controllers: [],
  providers: [],
})
export class AppModule {}
