import { LocalStorageService } from './../../services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from"@angular/forms";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup
  constructor(private formBuilder:FormBuilder,
    private authService:AuthService,
    private toastrService:ToastrService,
    private localstorageservice:LocalStorageService,
    private router:Router ) { }

  ngOnInit(): void {
    this.creatRegisterForm();
  }

  creatRegisterForm(){
    this.registerForm = this.formBuilder.group({
      FirstName:["",Validators.required],
      LastName:["",Validators.required],
      Email:["",Validators.required],
      password:["",Validators.required]
    })
  }

  register(){
    if(this.registerForm.valid){
      let registerModel = Object.assign({},this.registerForm.value)
      this.authService.register(registerModel).subscribe(response =>{
        this.toastrService.success(response.messages);
        this.localstorageservice.set("token",response.data.token)
      this.router.navigate(["/"]).then(r => window.location.reload())
      },responseError =>{
        this.toastrService.error(responseError.error)
      })
    }
  }
}
