import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { DeviceComponent } from './device/device.component';

@NgModule({
  declarations: [ProfileComponent, LoginComponent, DeviceComponent],
  exports: [ProfileComponent, LoginComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
