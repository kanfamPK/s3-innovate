export interface DeviceData {
  fullPowerMode?: boolean;
  activePowerControl?: boolean;
  firmwareVersion?: number;
  temperature?: number;
  humidity?: number;
  version?: number;
  messageType?: string;
  occupancy?: boolean;
  stateChanged?: number;
}

export interface Device {
  deviceId: string;
  deviceType: string;
  deviceName: string;
  groupId: string;
  dataType: string;
  data: DeviceData;
  timestamp: number;
}
