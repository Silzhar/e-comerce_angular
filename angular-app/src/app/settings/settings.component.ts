import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserForm } from '../product/product.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  @Output() changeSettings: EventEmitter<UserForm> = new EventEmitter<UserForm>();
  public user: FormGroup;
  public formValidator: FormGroup = null;
  public submitted: boolean = false;

  public name: string = null;
  public price: number = null;
  public data: string = null;
  public link: string = null;
  public opinion: string = null;

  constructor(private formBuilder: FormBuilder) {
    this.formValidator = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      price: new FormControl('', [Validators.required]),
      data: new FormControl('', [Validators.required, Validators.maxLength(80)]),
      link: new FormControl('', [Validators.required]),
      opinion: new FormControl(''),
    });
  }

  ngOnInit(): void {
  }

  public userSubmit() {
    // El usuario ha pulsado en enviar
    this.submitted = true;

    if (this.formValidator.valid) {
      const edited: UserForm = {
        // id : this.formValidator.get('id').value,
        name: this.formValidator.get('name').value,
        price: this.formValidator.get('price').value,
        data: this.formValidator.get('data').value,
        link: this.formValidator.get('link').value,
        opinion: this.formValidator.get('opinion').value,
      };
      this.changeSettings.emit(edited);

      // Reseteamos todos los campos y el indicador de envío
      this.formValidator.reset();
      this.submitted = false;
    } else {
      console.log('Contiene errores :(');
    }
  }


}

