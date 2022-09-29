import { Module } from '@nestjs/common';
import { DeviceService } from './services';
import { DeviceController } from './controllers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeviceEntity } from 'src/shared/entities';

const SERVICES = [DeviceService];
const CONTROLLERS = [DeviceController];

@Module({
  imports: [TypeOrmModule.forFeature([DeviceEntity])],
  controllers: [...CONTROLLERS],
  providers: [...SERVICES],
})
export class DeviceModule {}
