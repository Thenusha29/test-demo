import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;

  userType = [
    { label: "Entrepreneur", value: "Entrepreneur" },
    { label: "Freelancer", value: "Freelancer" },
    { label: "Buyer/Service Gainer", value: "Buyer" },

  ];

  constructor(
    private formBuilder: FormBuilder,

  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      userType: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      country: ['', Validators.required],
      contact: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      cpassword: ['', Validators.required],
  });
  }

  get f() { return this.form.controls; }
  onSubmit() {
  }
}
