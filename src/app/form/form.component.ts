import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PersonModel } from '../person.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  person: PersonModel;
  formSubmitted = false;

  constructor() {}

  ngOnInit(): void {}

  onSubmitForm(form: FormGroup) {
    console.table(form.value);
    this.person = new PersonModel(
      form.value.firstName,
      form.value.lastName,
      form.value.email,
      form.value.address,
      form.value.phone
    );
    this.formSubmitted = true;
  }
}
