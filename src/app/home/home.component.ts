import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {


  formSubmitStatus = false
  formDataProcessStatus = false
  eMailValidStatus  = false;
  userNameStatus = false;
  messageStatus = false;
  formContactBuilder = this.formBuilder.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    message: new FormControl('', [Validators.required, Validators.minLength(3)])
  })

  formContactOnSubmit = () => {
    this.formDataProcessStatus = false;
    this.eMailValidStatus = !this.formContactBuilder.controls.email.valid;
    this.userNameStatus = !this.formContactBuilder.controls.name.valid;
    this.messageStatus = !this.formContactBuilder.controls.message.valid;

    if(this.formContactBuilder.controls.email.valid
        &&this.formContactBuilder.controls.name.valid
         && this.formContactBuilder.controls.message.valid){
      this.formDataProcessStatus = true;
    }
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
  constructor(   private formBuilder: FormBuilder,  private router: Router, private reactiveFormsModule:ReactiveFormsModule, private seo: SeoService ){
    this.seo.setTitle('Olimpiyat Dershanesi')
    this.seo.setMeta('Olimpiyat Dershanesi')

   }

  ngOnInit(): void {
  }

}
