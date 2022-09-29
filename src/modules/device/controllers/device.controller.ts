import { Controller, Body, Post, UseFilters } from '@nestjs/common';
import { DeviceService } from '../services';
import { HttpExceptionFilter } from 'src/shared/filters';
import { StoreDeviceDto } from 'src/shared/dtos';
import { DeviceRoutes } from 'src/shared/enums';

@Controller()
@UseFilters(HttpExceptionFilter)
export class DeviceController {
  constructor(private readonly deviceService: DeviceService) {}

  @Post(DeviceRoutes.Store)
  storeDeviceInfo(@Body() payload: StoreDeviceDto) {
    return this.deviceService.storeDeviceInfo(payload);
  }
}
