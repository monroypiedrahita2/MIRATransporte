import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() clase: "azul" | "verde" | "rojo" | "mira" = "mira";

  @Input() sede: string = "MIRA";
  @Input() subText: string = "tu transporte Dosquebradas";

  constructor() { }

  ngOnInit(): void {
  }

}
