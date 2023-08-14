import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { HttpService } from 'src/app/Services/http.service';
import { StoreServiceService } from 'src/app/Services/store-service.service';

import { ToastService } from 'src/app/Services/toast.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  regForm!: FormGroup;
  addForm!: FormGroup;
  pStore!: File;
  response!: any;
  userData!: any;
  fname!: any;
  tokn!: any;
  dtls!: any;
  // img_path!: any;
  // img!:any;
  // imgURL: string = "https://wtsacademy.dedicateddevelopers.us/uploads/user/profile_pic/"

  constructor(private fb: FormBuilder, private http: HttpService, private strsrvc: StoreServiceService, private nav: Router,
    private toaster:ToastService) { }


  ngOnInit(): void {
    this.loggedIn();

    this.addForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('^[a-zA-z0-9+-_.]+@[a-zA-z0-9.-]+$')]],
      password: ['', [Validators.required, Validators.pattern('^([a-zA-z]{1})([0-9]{1})([@$&*]{1})$')]]
    }),
      this.regForm = this.fb.group({
        fname: ['', [Validators.required, Validators.minLength(4), Validators.pattern('^[a-zA-z].*[\s]*')]],
        lname: ['', [Validators.required, Validators.minLength(4), Validators.pattern('^[a-zA-z].*[\s]*')]],
        gen: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.pattern('^[a-zA-z0-9+-_.]+@[a-zA-z0-9.-]+$')]],
        password: ['', [Validators.required, Validators.pattern('^([a-zA-z]{1})([0-9]{1})([@$&*]{1})$')]],
        ph: ['', [Validators.required, Validators.pattern('^([0-9]{10})$')]]
      });



  }

  fileSelection(event: any) {
    // console.log(event.target.files[0]);
    this.pStore = (event.target.files[0])
  }


  collectedData() {
    // console.log(this.regForm.value);
    this.userData = this.regForm.value;
    const formData: FormData = new FormData();

    formData.append('first_name', this.userData.first_name)
    formData.append('last_name', this.userData.last_name)
    formData.append('email', this.userData.email)
    formData.append('password', this.userData.password)
    formData.append('profile_pic', this.pStore, this.pStore.name)


    this.http.newreg(formData).subscribe((up: any) => {
      console.log('Response After Upload', up);
      if (up.status == 200) {
        alert('Sign Up Done');
        // console.log('Status',up.status);
        
      }
      else {
        ('Error')
      }
    })
  }

  loggedIn() {
    this.tokn = this.strsrvc.getToken();
    // console.log('Token Is-',  this.tokn);

    if (this.tokn) {
      this.dtls = this.strsrvc.getData();
      this.fname = this.dtls[0].first_name
    }
    return this.tokn;
  }

  loggingOut() {
    this.strsrvc.getDestroy()
    alert("Successfully Logged Out")
    this.nav.navigate(['/home'])

  }


  submitData() {
    // console.log(this.addForm.value);

    this.http.lin(this.addForm.value).subscribe((rcv: any) => {
      this.response = rcv;
      // console.log(rcv)
      if (rcv.status == 200) {
        alert('Login Successfully');
        // this.toaster.ShowSuccess('Login Successfully');
        this.strsrvc.setData(this.response.data.first_name, this.response.data.last_name, this.response.data.email, this.response.data.token);

      }
      else { 'Email or Password is invalid' }
    })
  }
  // clearForm(){
  //   this.addForm.reset();
  // }
}
