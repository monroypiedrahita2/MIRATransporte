import { Component, OnInit } from '@angular/core';
import { CONDUCTORES_POPA } from '../shared/constants/conductores/popa.const';

@Component({
  selector: 'app-popa',
  templateUrl: './popa.component.html',
  styleUrls: ['./popa.component.css']
})
export class PopaComponent implements OnInit {
  phone: string = '573106577171';

  conductores: any[] = CONDUCTORES_POPA

  constructor() { }

  ngOnInit(): void {
  }

}
