import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

interface StudentModel{
  email: FormControl<string | null>,
  password: FormControl<string | null>,
  passwordConfirm: FormControl<string | null>,
  name: FormControl<string | null>,
  lastName: FormControl<string | null>,
  phoneNumber: FormControl<string | null>,
  addresses: FormArray<any>
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  emailControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  passwordControl = new FormControl('',[
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
  ])

  confirmPasswordControl = new FormControl('', [
    Validators.required
  ])

  nameControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ])

  lastNameControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ])

  phoneNumberControl = new FormControl('', [
    Validators.required
  ])

  
  addressesFormArray = new FormArray<any>([
    new FormGroup({
      address: new FormControl(''),
    })
  ])

  studentModel: FormGroup<StudentModel> = new FormGroup({
    email: this.emailControl,
    password: this.passwordControl,
    passwordConfirm: this.confirmPasswordControl,
    name: this.nameControl,
    lastName: this.lastNameControl,
    phoneNumber: this.phoneNumberControl,
    addresses: this.addressesFormArray
  });

  addAddressControl(): void{
    this.addressesFormArray.push(new FormGroup({
      address: new FormControl(''),
    }));
  }
}
