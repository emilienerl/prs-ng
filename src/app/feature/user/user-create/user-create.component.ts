import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.class';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  title = "User Create";
  //create a user property, an instance of user
  user : User = new User();
  submitBtnTitle = "Create";

  //inject the service
  constructor(private userSvc: UserService, 
              private router: Router) { }

  ngOnInit(): void {
    //don't need to do anything here because we are just going to show a blank form
  }

  save() {
    //subscribing to the service, saving the user to the database
    this.userSvc.create(this.user).subscribe(
      resp => {
        this.user = resp as User;
        //logging to the console to check that the user has been created
        console.log('User created',this.user);
        //forward to the user list component
        this.router.navigateByUrl("/user-list");
      },
      err => {
        console.log(err);
      }
    );
  }

}
