import { Component, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { PUESTOS_VOTACION } from '../shared/constants/puestos.const';
import { Location } from '@angular/common';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  @Input() conductores: any[] = [];
  @Input() telefono: string = '';
  arrayPuestos: any[] = PUESTOS_VOTACION;
  ocupaciones: string = '573008318652';
  apiWp: string = 'https://api.whatsapp.com/send?phone=';
  text: string = '&text=';
  form!: FormGroup;
  formUse!: FormGroup;
  formActive!: FormGroup;
  myField = new FormControl();

  // data: string = this.apiWp + telefono + this.text + mensaje; ASI SE MANDA EL MENSAJE

  constructor(private readonly fb: FormBuilder, private location: Location) {}

  ngOnInit(): void {
    this.form = this.initForm();
    this.formUse = this.initFormUse();
    this.formActive = this.initFormActive();
  }

  // ++++++++++++++++FORMULARIO DE ACTIVACION +++++++++++++++++++++

  onSubmitActive() {
    const nameDriverActive: string =
      this.formActive.get('nameDriverActive')?.value.name.trim();
    const msn: string = `<<<<<<<<<<<<<<<<<<<<<<<<<<<%0AEl%20conductor%20%20*${nameDriverActive}*%20%20%0A>>>>>>>>>>>>>>>>>>>>>>>>>>>%0ANuevo%20estado%20*DISPONIBLE*%0A>>>>>>>>>>>>>>>>>>>>>>>>>>>`;
    const data = this.apiWp + this.ocupaciones + this.text + msn;

    window.open(data);

    this.formUse = this.initFormUse();
    this.goBack();
  }

  initFormActive() {
    return this.fb.group({
      nameDriverActive: ['', Validators.required],
    });
  }

  // +++++++++++++++++++++ FIN PRIMER FORMULARIO +++++++++++++++++++++++

  // +++++++++++++++++++++++FORMULARIO DE USO ++++++++++++++++++++++++++

  onSubmitUse() {
    const vehiculoUso: string = this.formUse.get('vehiculoUso')?.value;
    const nameDriver: string = this.formUse
      .get('nameDriver')
      ?.value.name.trim();
    const timeOut: string = this.formUse.get('timeOut')?.value.trim();
    const msn: string = `""""""""""""""""""""""""""""""""""""%0AEl%20conductor:%20*${nameDriver}*%0A""""""""""""""""""""""""""""""""""""%0ANuevo%20estado:%20*OCUPADO*%0A""""""""""""""""""""""""""""""""""""%0ATiempo%20estimado%20de%20ocupación:%20*${timeOut}*%0A""""""""""""""""""""""""""""""""""""`;
    const data = this.apiWp + this.ocupaciones + this.text + msn;
    window.open(data);
    this.formUse = this.initFormUse();
    this.goBack();
  }

  initFormUse(): FormGroup {
    return this.fb.group({
      vehiculoUso: ['null', Validators.required],
      nameDriver: ['', Validators.required],
      timeOut: ['', Validators.required],
    });
  }

  // ++++++++++++++++ SEGUNDO  FORMULARIO ++++++++++++++++++++++++++

  onSubmit(tel: string) {
    const ciudad: string = this.form.get('ciudad')?.value;
    var transbordo = '';

    if (ciudad === 'Pereira') {
      transbordo =
        'Vota en Pereira: *llevar a la iglesia de La Popa para transbordo*';
    } else if (ciudad === 'Santa Rosa') {
      transbordo =
        'Vota en Santa Rosa: *Llevar a la iglesia de Alameda para transbordo*';
    }

    const discap: string =
      this.form.get('discap')?.value === 'SI'
        ? 'Con espacio para silla de ruedas'
        : ' ';
    const tipoVehiculo: string = this.form.get('tipoVehiculo')?.value;
    const cupos: string =
      this.form.get('tipoVehiculo')?.value === 'MOTO'
        ? '1'
        : `Cupos: *${this.form.get('cupos')?.value}*`;

    const nameVoter: string = this.form.get('nameVoter')?.value.trim();
    const phone: string = this.form.get('phone')?.value;
    const LugarRecogida: string = this.form.get('LugarRecogida')?.value.trim();
    const lugarVotacion: string = this.form
      .get('lugarVotacion')
      ?.value.puesto;
    const ubicacion: string = this.form
      .get('lugarVotacion')
      ?.value.ubicacion;
    const observation: string = this.form.get('observation')?.value;
    const gpsVotacion: string =
      this.form.get('ciudad')?.value === 'Dosquebradas'
        ? 'Ubicación GPS lugar de votación:%0A' + ubicacion
        : '';
    const msn: string = `
    =======================%0A
    Necesitamos: *${tipoVehiculo}*
    %0A=======================%0A
    ${cupos} *pasajeros*
    %0A=======================%0A
    ${discap}
    %0A=======================%0A
    ${transbordo}
    %0A=======================%0A
    Recoger en: *${LugarRecogida}*
    %0A=======================%0A
    Nombre contacto:  *${nameVoter}*
    %0A=======================%0A
    Número de contacto: ${phone}
    %0A=======================%0A
    ${lugarVotacion === undefined ? '' : lugarVotacion}
    %0A=======================%0A
    ${gpsVotacion}
    %0A=======================%0A
    ${observation}
    %0A=======================%0A
    `;

    const data = this.apiWp + tel + this.text + msn;


    window.open(data);

    this.formUse = this.initFormUse();
    this.goBack();
  }

  initForm(): FormGroup {
    return this.fb.group({
      ciudad: ['Dosquebradas', Validators.required],
      discap: ['NO', Validators.required],
      tipoVehiculo: ['null', Validators.required],
      cupos: ['1', Validators.required],
      nameVoter: ['', Validators.required],
      phone: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(10),
        ],
      ],
      LugarRecogida: ['', Validators.required],
      lugarVotacion: [''],
      observation: ['Sin observaciones'],
    });
  }

  // ++++++++++++++++ SEGUNDO  FORMULARIO ++++++++++++++++++++++++++

  goBack() {
    this.location.back();
  }
}
