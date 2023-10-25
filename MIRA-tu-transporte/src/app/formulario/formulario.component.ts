import { Component, OnInit } from '@angular/core';
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
  arrayPuestos = PUESTOS_VOTACION;
  apiWp: string = 'https://api.whatsapp.com/send?phone=';
  guadalupe: string = '3008318652';
  alameda: string = '3176158612';
  popa: string = '3176158612';
  text: string = '&text=';
  msn: string = this.apiWp + this.guadalupe + this.text;
  form!: FormGroup;
  formUse!: FormGroup;
  formActive!: FormGroup;
  myField = new FormControl();

  constructor(private readonly fb: FormBuilder, private location: Location,) {}

  ngOnInit(): void {
    this.form = this.initForm();
    this.formUse = this.initFormUse();
    this.formActive = this.initFormActive();
  }



  onSubmitActive() {
    const nameDriverActive: string = this.formActive.get('nameDriverActive')?.value
    const mensajeActive: string =
    `<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    El conductor *${nameDriverActive}*
    se encuentra *DISPONIBLE*
    >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>`
    console.log(mensajeActive)

    // window.open(data);

    this.formUse = this.initFormUse();
    this.goBack()

  }

  initFormActive(){
    return this.fb.group({
      nameDriverActive: ['', Validators.required]
    });
  }

  onSubmitUse() {
    const vehiculoUso: string = this.formUse.get('vehiculoUso')?.value;
    const nameDriver: string = this.formUse.get('nameDriver')?.value;
    const timeOut: string = this.formUse.get('timeOut')?.value
    const mensajeVehiculoEnUSo: string =
    `""""""""""""""""""""""""""""
    El conductor: *${nameDriver}*
    """""""""""""""""""""""""""""
    esta OCUPADO por *${timeOut}*
    """"""""""""""""""""""""""""" `
    console.log(mensajeVehiculoEnUSo);
    this.formUse = this.initFormUse();
    this.goBack()
  }


  initFormUse(): FormGroup {
    return this.fb.group({
      vehiculoUso: ['null', Validators.required],
      nameDriver: ['Necesita carro', Validators.required],
      timeOut: ['', Validators.required],
    });
  }

  // ++++++++++++++++ SEGUNDO  FORMULARIO ++++++++++++++++++++++++++


  onSubmit() {
    const ciudad: string = this.form.get('ciudad')?.value;
    var transbordo = '';

    if (ciudad === 'Pereira') {
      transbordo =
        'Vota en Pereira: *llevar a la iglesia de La Popa para transbordo*';
    } else if (ciudad === 'Santa Rosa') {
      transbordo =
        'Vota en Santa Rosa: *Llevar a la iglesia de Alameda para transbordo*';
    }


    const discap: string = this.form.get('discap')?.value === 'SI' ? 'Con espacio para silla de ruedas' : ' ';
    const tipoVehiculo: string = this.form.get('tipoVehiculo')?.value;
    const cupos: string = this.form.get('tipoVehiculo')?.value === 'MOTO' ? ' ' : `Cupos: *${this.form.get('cupos')?.value}*`  ;

    const nameVoter: string = this.form.get('nameVoter')?.value;
    const phone: string = this.form.get('phone')?.value;
    const LugarRecogida: string = this.form.get('LugarRecogida')?.value;
    const lugarVotacion: string = this.form
      .get('lugarVotacion')
      ?.value.replace(/ /g, '-');
    const observation: string = this.form.get('observation')?.value;
    const data: string = `
    ====================
    Necesitamos: *${tipoVehiculo}*  ${cupos}
    ====================
    ${discap}
    ====================
    ${transbordo}
    ====================
    Recoger en: *${LugarRecogida}*
    ====================
    Nombre:  ${nameVoter} Número de contacto: ${phone}
    ====================
    ${lugarVotacion}
    ====================
    ${observation}   `;




    console.log(data);

    // window.open(data);

    // this.formUse = this.initFormUse();
    // this.goBack()


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
      lugarVotacion: ['',],
      observation: [''],
    });
  }

    // ++++++++++++++++ SEGUNDO  FORMULARIO ++++++++++++++++++++++++++

  goBack() {
    this.location.back();
  }
}
