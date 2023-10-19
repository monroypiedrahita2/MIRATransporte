import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  apiWp: string = 'https://api.whatsapp.com/send?phone='
  telmsn: string = '3176158612'
  text: string = '&text='
  msn: string = this.apiWp + this.telmsn + this.text
  form!: FormGroup
  myField = new FormControl

  constructor(private readonly fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.form = this.initForm();
  }

  onSubmit() {
    const name: string = this.form.get('name')?.value
    const phone: string = this.form.get('phone')?.value
    const LugarRecogida: string = this.form.get('LugarRecogida')?.value
    const lugarVotacion: string = this.form.get('lugarVotacion')?.value.replace(/ /g, "-")
    const vehiculo: string = this.form.get('vehiculo')?.value
    const personas: string = this.form.get('personas')?.value
    const comment: string = this.form.get('comment')?.value
    const data: string = `${this.msn}   Se necesita: *${vehiculo}*     CANTIDAD  DE  PERSONAS: *${personas}*    RECOGER EN: *${LugarRecogida}*      LLEVAR A  *${lugarVotacion} GPS: *https://www.google.com/maps/search/${lugarVotacion}*         COMUNICARSE CON: *${name}*,          Teléfono *${phone}*       NOTA: *${comment}*`
    window.open(data)
  }

  initForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      LugarRecogida: ['', Validators.required],
      lugarVotacion: ['', Validators.required],
      vehiculo: ['', Validators.required],
      personas: ['1', Validators.required],
      comment: ['Sin observaciones'],
    })
  }
}
