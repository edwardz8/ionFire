import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { DeviceComponent } from './device/device.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ProfileComponent, LoginComponent, DeviceComponent],
  exports: [ProfileComponent, LoginComponent, DeviceComponent],
  imports: [CommonModule, IonicModule]
})
export class SharedModule { }
