import { Inject, Injectable, LoggerService } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeviceEntity } from 'src/shared/entities';
import { Repository } from 'typeorm';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { SuccessMessage } from 'src/shared/enums';
import { StoreDeviceDto } from 'src/shared/dtos';

@Injectable()
export class DeviceService {
  constructor(
    @InjectRepository(DeviceEntity)
    private readonly deviceRepository: Repository<DeviceEntity>,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  async storeDeviceInfo(storeDeviceDto: StoreDeviceDto) {
    const { deviceId } = storeDeviceDto;
    const { temperature, humidity, occupancy } = storeDeviceDto.data;

    try {
      const storeDevice = this.deviceRepository.create({
        deviceId,
        temperature,
        humidity,
        occupancy,
      });
      if (storeDevice) {
        await this.deviceRepository.save(storeDevice);
        this.logger.log(SuccessMessage.StoreDevice);
        return storeDevice;
      }
    } catch (err) {
      this.logger.error(err);
    }
  }
}
