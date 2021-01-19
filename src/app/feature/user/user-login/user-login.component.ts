import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user.class';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  title: string = 'Login';
  message: string = '';
  user: User = new User();
  // username: string = '';
  // password: string = '';

  //inject the user service
  constructor(private userSvc: UserService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  //login method
  login() {
    //call login service using username and password
    console.log("attempting login...", this.user);
    this.userSvc.login(this.user).subscribe(
      //expecting a service method to get called and expecting a response
      resp => {
        if (resp==null) {
          this.message = "Invalid username / password.";
        }
        else {
          this.user = resp as User;
        console.log("Successful login!", this.user);
        this.router.navigateByUrl('/user-list');
        }
      },
      err => {
        console.log("User login error!", err);
        this.message = "Error during login"
      }
    );

  }

}
