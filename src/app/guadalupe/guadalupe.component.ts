import { Component, OnInit } from '@angular/core';
import { CONDUCTORES_GUADALUPE } from '../shared/constants/conductores/guadalupe.constant';

@Component({
  selector: 'app-guadalupe',
  templateUrl: './guadalupe.component.html',
  styleUrls: ['./guadalupe.component.css'],
})
export class GuadalupeComponent implements OnInit {
  conductores: any[] = CONDUCTORES_GUADALUPE; ///
  phone: string = '573176158612'

  constructor() {}

  ngOnInit(): void {}
}
