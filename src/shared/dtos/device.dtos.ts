import { IsNotEmpty, IsOptional } from 'class-validator';

class DeviceData {
  @IsOptional()
  fullPowerMode: boolean;
  @IsOptional()
  activePowerControl: boolean;
  @IsOptional()
  firmwareVersion: number;
  @IsOptional()
  temperature: number;
  @IsOptional()
  humidity: number;
  @IsOptional()
  version: number;
  @IsOptional()
  messageType: string;
  @IsOptional()
  occupancy: boolean;
  @IsOptional()
  stateChanged: number;
}

export class StoreDeviceDto {
  @IsNotEmpty()
  deviceId: string;
  @IsNotEmpty()
  deviceType: string;
  @IsNotEmpty()
  deviceName: string;
  @IsNotEmpty()
  groupId: string;
  @IsNotEmpty()
  dataType: string;
  @IsNotEmpty()
  data: DeviceData;
  @IsNotEmpty()
  timestamp: number;
}
