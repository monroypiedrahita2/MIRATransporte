import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PUESTOS_VOTACION } from '../shared/constants/puestos.const';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  arrayPuestos = PUESTOS_VOTACION
  apiWp: string = 'https://api.whatsapp.com/send?phone='
  guadalupe: string = '3008318652'
  alameda: string = '3176158612'
  popa: string = '3176158612'
  text: string = '&text='
  msn: string = this.apiWp + this.guadalupe + this.text
  form!: FormGroup
  myField = new FormControl

  constructor(private readonly fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.form = this.initForm();
  }

  onSubmit() {
    const ciudad: string = this.form.get('ciudad')?.value
    const discap: string = this.form.get('discap')?.value
    const tipoVehiculo: string = this.form.get('tipoVehiculo')?.value
    const cupos: string = this.form.get('cupos')?.value
    const disponibleVehiculo: string = this.form.get('disponibleVehiculo')?.value
    const nameDriver: string = this.form.get('nameDriver')?.value
    const nameVoter: string = this.form.get('nameVoter')?.value
    const phone: string = this.form.get('phone')?.value
    const LugarRecogida: string = this.form.get('LugarRecogida')?.value
    const lugarVotacion: string = this.form.get('lugarVotacion')?.value.replace(/ /g, "-")
    const observation: string = this.form.get('observation')?.value
    const data: string = `${this.msn} ========== Conductor Elegido: ${nameDriver} ============= Se necesita: *${tipoVehiculo}*     CANTIDAD  DE  PERSONAS: *${cupos}*    RECOGER EN: *${LugarRecogida}*      LLEVAR A  *${lugarVotacion}* GPS: https://www.google.com/maps/search/${lugarVotacion}         COMUNICARSE CON: *${nameVoter}*,          Teléfono *${phone}*       NOTA: *${observation}*`
    // window.open(data)

    console.log(this.form.value)
      this.form = this.initForm();
  }

  initForm(): FormGroup {
    return this.fb.group({
      ciudad: ['Dosquebradas', Validators.required],
      discap: ['NO', Validators.required],
      tipoVehiculo: ['CARRO', Validators.required],
      cupos: ['1', Validators.required],
      disponibleVehiculo: ['SI', Validators.required],
      nameDriver: ['Necesita carro', Validators.required],
      nameVoter: ['', Validators.required],
      phone: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      LugarRecogida: ['', Validators.required],
      lugarVotacion: ['', Validators.required],
      observation: [''],
    })
  }
}
