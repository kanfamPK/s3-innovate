import { Module } from '@nestjs/common';
import { RouterModule, Routes } from '@nestjs/core';
import { DeviceModule } from './modules/device/device.module';
import { AppRoutes } from './shared/enums';

const routes: Routes = [
  {
    path: AppRoutes.Device,
    module: DeviceModule,
  },
];

@Module({
  imports: [RouterModule.register(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
