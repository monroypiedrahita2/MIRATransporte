import { Component, OnInit, Input } from '@angular/core';
import { CASAS_APOYO } from '../shared/constants/casas.const';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.css']
})
export class CardInfoComponent implements OnInit {
  @Input() casasApoyo: any = ''

  constructor() { }

  ngOnInit(): void {
  }

}
