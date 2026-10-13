import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-lockscreen',
    templateUrl: './lockscreen.component.html',
    styleUrls: ['./lockscreen.component.scss'],
    standalone: false
})

/**
 * Lock Screen LockScreen Component
 */
export class LockScreenComponent implements OnInit {

  // Login Form
  lockscreenForm!: FormGroup;
  submitted = false;
  fieldTextType!: boolean;
  error = '';
  returnUrl!: string;
  // set the current year
  year: number = new Date().getFullYear();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    /**
     * Form Validatyion
     */
     this.lockscreenForm = this.formBuilder.group({
      password: ['', [Validators.required]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.lockscreenForm.controls; }

  /**
   * Form submit
   */
   onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.lockscreenForm.invalid) {
      return;
    }
  }

}
