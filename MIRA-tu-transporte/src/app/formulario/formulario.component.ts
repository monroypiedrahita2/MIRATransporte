import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  form!: FormGroup
  myField = new FormControl

  constructor(private readonly fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.form = this.initForm();
  }

  onSubmit(){
    console.log('form ->', )
  }

  initForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10) ]],
      LugarRecogida: ['', Validators.required],
      lugarVotacion: ['', Validators.required],
      vehiculo: ['', Validators.required],
      personas: ['', Validators.required],
      comment: ['', Validators.required],
    })
  }

}
