import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-call-center',
  templateUrl: './header-call-center.component.html',
  styleUrls: ['./header-call-center.component.css']
})
export class HeaderCallCenterComponent implements OnInit {

  @Input() sede: string = "La Popa";
  @Input() clase: "azul" | "verde" | "amarillo" = "verde";

  constructor() { }

  ngOnInit(): void {
  }

}
