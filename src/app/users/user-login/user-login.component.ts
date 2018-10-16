import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor( private authService: AuthService ) { }

  ngOnInit() {
  }

  loginGoogle(){
    this.authService.loginGoogle()
    .then((data) => {
      console.log(data);
      alert("Google logeado exitosamente");
    })
    .catch((error) => {
      console.log( error);
    })
  }

  loginFacebook(){
    this.authService.loginFacebbok()
    .then((data) => {
      
      alert("facebook logeado exitosamente");
      console.log(data);
    })
    .catch((error) => { console.log(error); })
  }

  logout(){
    this.authService.logout()
    .then((data) => {      
      console.log(data);
      alert("se cerro la Sesion");
    })
    .catch((error) => {
      console.log(error);
    })
  }
}
