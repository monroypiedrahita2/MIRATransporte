import { Component, OnInit } from '@angular/core';
import { PUESTOS_CASAS } from '../shared/constants/puesto-casa.const';

@Component({
  selector: 'app-libreta-telefonos',
  templateUrl: './libreta-telefonos.component.html',
  styleUrls: ['./libreta-telefonos.component.css'],
})
export class LibretaTelefonosComponent implements OnInit {
  casasApoyo = PUESTOS_CASAS;
  resultadosFiltrados = this.casasApoyo;

  constructor() {}

  ngOnInit(): void {


  }

  filtrarCasas(text: string) {
    if (text == ' '){
      this.resultadosFiltrados = this.casasApoyo
    }else {
      this.resultadosFiltrados = this.casasApoyo.filter((casa) => {
        const termino = text.toLowerCase();
        return (
          casa.barrio?.toLowerCase().includes(termino) ||
          casa.puesto?.toLowerCase().includes(termino) ||
          casa.lider?.toLowerCase().includes(termino)
        );
      });

    }


  }
}
