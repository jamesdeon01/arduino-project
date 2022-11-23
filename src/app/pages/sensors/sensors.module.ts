import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SensorRegisterComponent } from './sensor-register/sensor-register.component';
import { SensorSearchComponent } from './sensor-search/sensor-search.component';
import { SensorService } from 'src/app/services/sensor.service';
import { SensorsRoutingModule } from './sensors-routing.module';



@NgModule({
  declarations: [
    SensorRegisterComponent,
    SensorSearchComponent,
  ],
  imports: [
    CommonModule,
    SensorsRoutingModule
  ],
  providers:[
    SensorService
  ]
})
export class SensorsModule { }
