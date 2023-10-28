import { Component, OnInit } from '@angular/core';
import { CONDUCTORES_ALAMEDA } from '../shared/constants/conductores/alameda.const';

@Component({
  selector: 'app-alameda',
  templateUrl: './alameda.component.html',
  styleUrls: ['./alameda.component.css'],
})
export class AlamedaComponent implements OnInit {
  phone: string = '573235061945';

  conductores: any[] = CONDUCTORES_ALAMEDA;

  constructor() {}

  ngOnInit(): void {}
}
