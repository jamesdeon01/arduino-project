import { Component, Input, OnInit } from '@angular/core';
import { TableColumn } from 'src/app/interfaces/table-column.interface';
import { SensorViewModel } from 'src/app/view-model/sensor/sensor.view-model';

@Component({
  selector: 'app-sensor-search',
  templateUrl: './sensor-search.component.html',
  styleUrls: ['./sensor-search.component.css']
})
export class SensorSearchComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {

  }

}
