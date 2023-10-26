import { Component, OnInit } from '@angular/core';
import { CASAS_APOYO } from '../shared/constants/casas.const';

@Component({
  selector: 'app-libreta-telefonos',
  templateUrl: './libreta-telefonos.component.html',
  styleUrls: ['./libreta-telefonos.component.css'],
})
export class LibretaTelefonosComponent implements OnInit {
  casasApoyo = CASAS_APOYO;
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
          casa.barrio.toLowerCase().includes(termino) ||
          casa.puesto.toLowerCase().includes(termino) ||
          casa.lider.toLowerCase().includes(termino)
        );
      });

    }


  }
}
